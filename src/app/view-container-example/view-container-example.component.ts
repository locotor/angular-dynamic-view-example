import {
    AfterViewInit,
    Component, ComponentFactoryResolver, EmbeddedViewRef, Injector,
    OnDestroy, TemplateRef, ViewChild, ViewContainerRef
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
    attachedEmbeddedView?: EmbeddedViewRef<any>;
    messageValue = '';
    templateContext = { message: '来自模板上下文的值' };
    anotherComponent = AnotherComponent;
    costumeInjector: Injector;
    costumeContent: HTMLElement[][];

    constructor(
        private resolver: ComponentFactoryResolver,
        injector: Injector
    ) {
        this.costumeInjector =
            Injector.create({ providers: [{ provide: ExampleService, deps: [] }], parent: injector });
        const spanContent = document.createElement('span');
        const divContent = document.createElement('div');
        spanContent.innerHTML = 'hello, world';
        divContent.innerHTML = '<span>locotor</span>';
        this.costumeContent = [[spanContent, divContent]];
    }
    ngAfterViewInit(): void { }

    ngOnDestroy(): void {
        this.container.clear();
    }

    createComponent(type: string): void {
        const factory = this.resolver.resolveComponentFactory(AlertComponent);
        const componentRef = this.container.createComponent(factory, undefined, undefined, this.costumeContent);
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

    moveToTop(): void {
        const lastView = this.container.get(this.container.length - 1);
        if (!lastView) { return; }
        this.container.move(lastView, 0);
    }

    createTemplate(): void {
        this.container.createEmbeddedView(this.template, this.templateContext);
    }

    clearContainer(): void {
        this.container.clear();
    }

}

