import {
    Component, ComponentFactoryResolver, NgModuleRef, OnInit, ViewChild, ViewContainerRef
} from '@angular/core';
import { AlertComponent } from './alert.component';

@Component({
    templateUrl: './view-container-example.component.html',
    styleUrls: ['./view-container-example.component.css']
})
export class ViewContainerExampleComponent implements OnInit {

    @ViewChild('dynamicComponentContainer', { read: ViewContainerRef }) container!: ViewContainerRef;
    messageValue = '';

    constructor(
        private resolver: ComponentFactoryResolver
    ) { }

    ngOnInit(): void { }

    createComponent(type: string): void {
        const factory = this.resolver.resolveComponentFactory(AlertComponent);
        const componentRef = this.container.createComponent(factory);
        componentRef.instance.type = type;
        componentRef.instance.message = this.messageValue;
        this.messageValue = '';
        componentRef.instance.closeAlert.subscribe(() => {
            const index = this.container.indexOf(componentRef.hostView);
            this.container.remove(index);
        });
    }

    clearContainer(): void {
        this.container.clear();
    }

}

