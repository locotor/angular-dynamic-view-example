import { CdkPortal, ComponentPortal, DomPortal, Portal, TemplatePortal } from '@angular/cdk/portal';
import {
    AfterViewInit,
    Component,
    TemplateRef,
    ViewChild,
    ViewContainerRef,
    ElementRef
} from '@angular/core';

@Component({
    selector: 'app-cdk-portal',
    template: `

    <section>
        <h2>这里是动态内容的插槽区:</h2>
        <div class="example-portal-outlet">
            <ng-template #host [cdkPortalOutlet]="selectedPortal"></ng-template>
        </div>
    <section>
    <section>
        <button (click)="selectedPortal = componentPortal">插入动态组件</button>
        <button (click)="selectedPortal = directiveTemplateContent">插入指令模板</button>
        <button (click)="selectedPortal = templatePortal">插入动态模板</button>
        <button (click)="selectedPortal = domPortal">插入原生DOM</button>
    <section>

    <ng-template #templatePortalContent>这是一个模板内容</ng-template>
    <ng-template cdk-portal #directiveTemplate>
        <p> - 动态模板创建太没法?</p>
        <p> - 试试用指令声明</p>
    </ng-template>
    <div #domPortalContent>这是一个原生DOM内容</div>
    `
})
export class CdkPortalComponent implements AfterViewInit {

    @ViewChild('directiveTemplate', { read: CdkPortal }) directiveTemplateContent!: CdkPortal;
    @ViewChild('templatePortalContent') templatePortalContent!: TemplateRef<unknown>;
    @ViewChild('domPortalContent') domPortalContent!: ElementRef<HTMLElement>;

    selectedPortal?: Portal<any>;
    componentPortal?: ComponentPortal<ComponentPortalExample>;
    templatePortal?: TemplatePortal<any>;
    domPortal?: DomPortal<any>;

    constructor(private viewContainerRef: ViewContainerRef) { }

    ngAfterViewInit(): void {
        this.componentPortal = new ComponentPortal(ComponentPortalExample);
        this.templatePortal = new TemplatePortal(
            this.templatePortalContent,
            this.viewContainerRef
        );
        this.domPortal = new DomPortal(this.domPortalContent);
    }
}

@Component({
    selector: 'app-component-portal-example',
    template: '这是一个组件内容'
})
export class ComponentPortalExample { }
