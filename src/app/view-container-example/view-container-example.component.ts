import {
    AfterViewInit,
    Component, ComponentFactoryResolver, EmbeddedViewRef, Injector,
    OnDestroy, OnInit, TemplateRef, ViewChild, ViewContainerRef
} from '@angular/core';
import { AlertComponent } from '../shared/alert.component';
import { AnotherComponent } from '../shared/another-component';
import { ExampleService } from '../shared/example.service';

@Component({
    templateUrl: './view-container-example.component.html',
    styleUrls: ['./view-container-example.component.css']
})
export class ViewContainerExampleComponent implements AfterViewInit, OnDestroy {

    @ViewChild('dynamicComponentContainer', { read: ViewContainerRef }) container!: ViewContainerRef;
    @ViewChild('templateView', { read: TemplateRef }) template!: TemplateRef<any>;
    @ViewChild(AnotherComponent) anotherComponentRef!: AnotherComponent;
    attachedEmbeddedView?: EmbeddedViewRef<any>;
    messageValue = '';
    templateContext = { message: '来自模板上下文的值' };
    anotherComponent = AnotherComponent;
    costumeInjector: Injector;

    constructor(
        private resolver: ComponentFactoryResolver,
        injector: Injector
    ) {
        this.costumeInjector =
            Injector.create({ providers: [{ provide: ExampleService, deps: [] }], parent: injector });
    }
    ngAfterViewInit(): void {
        console.log(this.anotherComponentRef);
    }

    ngOnDestroy(): void {
        this.container.clear();
    }

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
        this.container.createEmbeddedView(this.template, this.templateContext);
    }

    clearContainer(): void {
        this.container.clear();
    }

}

