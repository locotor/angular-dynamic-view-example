import {
    Component, ComponentFactoryResolver, EmbeddedViewRef, Injectable, Injector,
    OnDestroy, OnInit, TemplateRef, ViewChild, ViewContainerRef
} from '@angular/core';
import { AlertComponent } from '../shared/alert.component';

@Injectable()
export class CostumeInjector {
    message = '以依赖注入的方式传值';
}

@Component({
    template: `
    <section class="template-wrapper" style="background-color:#81b29a;color:#FFF">
        <span>来自另一个动态组件：{{param.message}}</span>
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
    attachedEmbeddedView?: EmbeddedViewRef<any>;
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
        this.attachedEmbeddedView = this.container.createEmbeddedView(this.template);
    }

    removeEmbeddedView(): void {
        if (!this.attachedEmbeddedView) { return; }
        const index = this.container.indexOf(this.attachedEmbeddedView);
        this.container.remove(index);
    }

    clearContainer(): void {
        this.container.clear();
    }

}

