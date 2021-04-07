import {
  AfterViewInit, ApplicationRef, Component, ComponentFactoryResolver, ComponentRef,
  ElementRef, EmbeddedViewRef, Inject, Injector, TemplateRef, ViewChild, ViewContainerRef
} from '@angular/core';
import {
  CdkPortal, ComponentPortal, DomPortal, Portal, TemplatePortal, CdkPortalOutletAttachedRef,
  CdkPortalOutlet, DomPortalOutlet
} from '@angular/cdk/portal';
import { AlertComponent } from '../shared/alert.component';
import { DOCUMENT } from '@angular/common';

@Component({
  templateUrl: './cdk-portal-example.component.html',
  styleUrls: ['./cdk-portal-example.component.css']
})
export class CdkPortalExampleComponent implements AfterViewInit {

  @ViewChild('codeStyleHost', { read: CdkPortalOutlet }) codeContainer!: CdkPortalOutlet;
  @ViewChild('directiveStyleHost', { read: CdkPortalOutlet }) directiveContainer!: CdkPortalOutlet;
  @ViewChild('directiveTemplate', { read: CdkPortal }) directiveTemplateContent!: CdkPortal;
  @ViewChild('template') templatePortalContent!: TemplateRef<any>;
  @ViewChild('domPortalContent') domPortalContent!: ElementRef<HTMLElement>;

  /* 动态 Portal */
  selectedPortal?: Portal<any>;
  componentPortal?: ComponentPortal<AlertComponent>;
  templatePortal?: TemplatePortal<any>;
  domPortal?: DomPortal<any>;
  embeddedView?: EmbeddedViewRef<any>;

  /* 外部容器实例 */
  outsideContainer: HTMLDivElement;
  outsideOutlet: DomPortalOutlet;
  appRef: ApplicationRef;

  constructor(
    private viewContainerRef: ViewContainerRef,
    @Inject(DOCUMENT) private document: any,
    private injector: Injector,
    private componentFactoryResolver: ComponentFactoryResolver
  ) {
    // 创建外部宿主元素
    const container = this.document.createElement('div');
    container.classList.add('outside-portal-container');
    this.outsideContainer = this.document.body.appendChild(container);
    // 获取应用实例
    this.appRef = this.injector.get(ApplicationRef);
    // 创建外部容器
    this.outsideOutlet = new DomPortalOutlet(this.outsideContainer, this.componentFactoryResolver, this.appRef, this.injector);
  }

  ngAfterViewInit(): void {
    // 创建三个可以动态插入的 Portal
    this.componentPortal = new ComponentPortal(AlertComponent);
    this.templatePortal = new TemplatePortal(
      this.templatePortalContent,
      this.viewContainerRef
    );
    this.domPortal = new DomPortal(this.domPortalContent);
  }

  // 通过 outlet 实例的方法挂载组件视图
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

  // 通过 outlet 实例的方法挂载模板视图
  attachTemplate(): void {
    if (!this.templatePortal) { return; }
    this.codeContainer.detach();
    this.embeddedView = this.codeContainer.attachTemplatePortal(this.templatePortal);
  }

  // 在组件挂载后，给它传值和绑定事件。
  initComponent(ref: CdkPortalOutletAttachedRef): void {
    if (ref instanceof ComponentRef) {
      ref.instance.message = '输入属性传值示例';
      ref.instance.closeAlert.subscribe(() => {
        ref.destroy();
      });
    }
  }

  // 在应用外部插入动态组件。
  openComponentPortalOutSideAngularContext(): void {
    const componentPortal = new ComponentPortal(AlertComponent);
    if (this.outsideOutlet.hasAttached()) {
      this.outsideOutlet.detach();
    }
    this.outsideOutlet.attach(componentPortal);
  }

  // 在应用外部插入动态模板。
  openTemplatePortalInsideAngularContext(): void {
    const templatePortal = new TemplatePortal(this.templatePortalContent, this.viewContainerRef);
    if (this.outsideOutlet.hasAttached()) {
      this.outsideOutlet.detach();
    }
    this.outsideOutlet.attach(templatePortal);
  }

}
