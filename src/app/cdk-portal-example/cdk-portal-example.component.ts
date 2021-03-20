import { AfterViewInit, Component, ComponentRef, ElementRef, EmbeddedViewRef, OnInit, TemplateRef, ViewChild, ViewContainerRef } from '@angular/core';
import { CdkPortal, ComponentPortal, DomPortal, Portal, TemplatePortal, CdkPortalOutletAttachedRef, CdkPortalOutlet } from '@angular/cdk/portal';
import { AlertComponent } from '../shared/alert.component';

@Component({
  templateUrl: './cdk-portal-example.component.html',
  styleUrls: ['./cdk-portal-example.component.css']
})
export class CdkPortalExampleComponent implements OnInit, AfterViewInit {

  @ViewChild('codeStyleHost', { read: CdkPortalOutlet }) codeContainer!: CdkPortalOutlet;
  @ViewChild('directiveStyleHost', { read: CdkPortalOutlet }) directiveContainer!: CdkPortalOutlet;
  @ViewChild('directiveTemplate', { read: CdkPortal }) directiveTemplateContent!: CdkPortal;
  @ViewChild('templatePortalContent') templatePortalContent!: TemplateRef<unknown>;
  @ViewChild('domPortalContent') domPortalContent!: ElementRef<HTMLElement>;

  selectedPortal?: Portal<any>;
  componentPortal?: ComponentPortal<AlertComponent>;
  templatePortal?: TemplatePortal<any>;
  domPortal?: DomPortal<any>;
  embeddedView?: EmbeddedViewRef<any>;

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
    if (!this.componentPortal) { return; }
    this.codeContainer.detach();
    const componentRef = this.codeContainer.attachComponentPortal(this.componentPortal);
    componentRef.instance.message = '输入属性传值示例';
    // 输出事件绑定示例
    componentRef.instance.closeAlert.subscribe(() => {
      this.codeContainer.detach();
    });
  }

  attachTemplate(): void {
    if (!this.templatePortal) { return; }
    this.codeContainer.detach();
    this.embeddedView = this.codeContainer.attachTemplatePortal(this.templatePortal);
  }

  initComponent(ref: CdkPortalOutletAttachedRef): void {
    if (ref instanceof ComponentRef) {
      ref.instance.message = '输入属性传值示例';
      ref.instance.closeAlert.subscribe(() => {
        ref.destroy();
      });
    }
  }

}
