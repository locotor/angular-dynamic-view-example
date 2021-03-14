import { ComponentPortal, DomPortal, Portal, TemplatePortal } from '@angular/cdk/portal';
import {
    AfterViewInit,
    Component,
    TemplateRef,
    ViewChild,
    ViewContainerRef,
    ElementRef
} from '@angular/core';

@Component({
    selector: 'portal-overview-example',
    template: `
    <h2>The portal outlet is below:</h2>
    <div class="example-portal-outlet">
    <ng-template [cdkPortalOutlet]="selectedPortal"></ng-template>
    </div>
    <ng-template #templatePortalContent>Hello, this is a template portal</ng-template>

    <button (click)="selectedPortal = componentPortal">Render component portal</button>
    <button (click)="selectedPortal = templatePortal">Render template portal</button>
    <button (click)="selectedPortal = domPortal">Render DOM portal</button>

    <div #domPortalContent>Hello, this is a DOM portal</div>
    `
})
export class CdkPortalComponent implements AfterViewInit {
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
    selector: 'component-portal-example',
    template: 'Hello, this is a component portal'
})
export class ComponentPortalExample { }
