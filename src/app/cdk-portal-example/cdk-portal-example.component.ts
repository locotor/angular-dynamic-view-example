import { AfterViewInit, Component, ComponentRef, ElementRef, OnInit, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import { CdkPortal, ComponentPortal, DomPortal, Portal, TemplatePortal, CdkPortalOutletAttachedRef, CdkPortalOutlet } from '@angular/cdk/portal';
import { AlertComponent } from '../shared/alert.component';

@Component({
  templateUrl: './cdk-portal-example.component.html',
  styleUrls: ['./cdk-portal-example.component.css']
})
export class CdkPortalExampleComponent implements OnInit, AfterViewInit {

  @ViewChild('host', { read: CdkPortalOutlet }) container!: CdkPortalOutlet;
  @ViewChild('directiveTemplate', { read: CdkPortal }) directiveTemplateContent!: CdkPortal;
  @ViewChild('templatePortalContent') templatePortalContent!: TemplateRef<unknown>;
  @ViewChild('domPortalContent') domPortalContent!: ElementRef<HTMLElement>;

  selectedPortal?: Portal<any>;
  componentPortal?: ComponentPortal<AlertComponent>;
  templatePortal?: TemplatePortal<any>;
  domPortal?: DomPortal<any>;
  domFlagValue = 'test';

  constructor(private viewContainerRef: ViewContainerRef) { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.componentPortal = new ComponentPortal(AlertComponent);
    this.templatePortal = new TemplatePortal(
      this.templatePortalContent,
      this.viewContainerRef
    );
    this.domPortal = new DomPortal(this.domPortalContent);
  }

  attachComponent(): void {
    this.container.detach();
    this.container.attach(this.componentPortal);
  }

  attachTemplate(): void {
    this.container.detach();
    this.container.attach(this.templatePortal);
  }

  initComponent(ref: CdkPortalOutletAttachedRef): void {
    if (ref instanceof ComponentRef) {
      ref.instance.message = '初始化传值';
      ref.instance.closeAlert.subscribe(() => {
        this.componentPortal?.detach();
      });
    }
  }

}
