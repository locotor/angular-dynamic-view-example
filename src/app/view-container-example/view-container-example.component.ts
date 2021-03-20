import {
    Component, ComponentFactoryResolver, Injectable, Injector, OnDestroy, OnInit, TemplateRef, ViewChild, ViewContainerRef
} from '@angular/core';
import { AlertComponent } from '../shared/alert.component';

@Injectable()
export class CostumeInjector {
    message = '以依赖注入的方式传值';
}

@Component({
    template: `
    <section style="margin-left: 1rem;">
        <h2>来自另一个动态组件：{{param.message}}</h2>
    </section>`
})
export class AnotherComponent {
    constructor(public param: CostumeInjector) { }
}

@Component({
    templateUrl: './view-container-example.component.html',
    styleUrls: ['./view-container-example.component.css']
})
export class ViewContainerExampleComponent implements OnInit, OnDestroy {

    @ViewChild('dynamicComponentContainer', { read: ViewContainerRef }) container!: ViewContainerRef;
    @ViewChild('templateView', { read: TemplateRef }) template!: TemplateRef<any>;
    messageValue = '';
    dynamic = AnotherComponent;
    costumeInjector: Injector;

    constructor(
        private resolver: ComponentFactoryResolver,
        injector: Injector
    ) {
        this.costumeInjector =
            Injector.create({ providers: [{ provide: CostumeInjector, deps: [] }], parent: injector });
    }

    ngOnDestroy(): void {
        this.container.clear();
    }

    ngOnInit(): void { }

    createComponent(type: string): void {
        const factory = this.resolver.resolveComponentFactory(AlertComponent);
        const componentRef = this.container.createComponent(factory);
        componentRef.instance.type = type;
        if (this.messageValue) {
            componentRef.instance.message = this.messageValue;
            this.messageValue = '';
        }
        componentRef.instance.closeAlert.subscribe(() => {
            const index = this.container.indexOf(componentRef.hostView);
            this.container.remove(index);
        });
    }

    createTemplate(): void {
        this.container.createEmbeddedView(this.template);
    }

    clearContainer(): void {
        this.container.clear();
    }

}

