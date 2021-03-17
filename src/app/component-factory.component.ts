import { Component, ComponentFactoryResolver, Input, OnInit, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
  template: `
    <div #dynamicComponentContainer></div>
    <button (click)="createComponent('success')">Create success alert</button>
    <button (click)="createComponent('danger')">Create danger alert</button>
  `
})
export class ComponentFactoryComponent implements OnInit {

  @ViewChild('dynamicComponentContainer', { read: ViewContainerRef }) container!: ViewContainerRef;

  constructor(
    private resolver: ComponentFactoryResolver
  ) { }

  ngOnInit(): void { }

  createComponent(type: string): void {
    this.container.clear();
    const factory = this.resolver.resolveComponentFactory(AlertComponent);
    const componentRef = this.container.createComponent(factory);
    componentRef.instance.type = type;
  }

}

@Component({
  template: `
      <h1>Alert {{type}}</h1>
    `,
})
export class AlertComponent {
  @Input() type = 'success';
}