import {
    AfterViewInit, Compiler, Component, ComponentRef, Injector,
    NgModule, NgModuleRef, OnDestroy, ViewChild, ViewContainerRef
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzGridModule } from 'ng-zorro-antd/grid';

@Component({
    selector: 'app-dynamic-template',
    template: `<h2>以下内容为动态生成<h2>
          <div #vc></div>`
})
export class DynamicTemplateComponent implements AfterViewInit, OnDestroy {
    @ViewChild('vc', { read: ViewContainerRef }) vc?: ViewContainerRef;

    private cmpRef?: ComponentRef<any>;

    constructor(
        private compiler: Compiler,
        private injector: Injector,
        private moduleRef: NgModuleRef<any>,
    ) { }

    ngAfterViewInit(): void {
        this.createComponentFromRaw(`
            <div style="border: 1px solid blue; margin: 5px; padding: 5px">
                <h4>动态插入字符串组件 </h4>
                <h5>绑定值: {{data.some}}</h5>
                <h4>显示 zorro 组件</h4>
                <nz-row nzGutter="15">
                    <nz-col [nzSpan]="4">
                        <button nzType="primary" nz-button nzSize="medium">主要按钮</button>
                    </nz-col>
                </nz-row>
            </div>`
        );
    }

    // Here we create the component.
    private createComponentFromRaw(template: string): void {
        // Let's say your template looks like `<h2><some-component [data]="data"></some-component>`
        // As you see, it has an (existing) angular component `some-component` and it injects it [data]

        // Now we create a new component. It has that template, and we can even give it data.
        const tmpCmp = Component({ template })(class {
            data = {
                some: '123'
            };
        });

        // Now, also create a dynamic module.
        const tmpModule = NgModule({
            imports: [
                CommonModule,
                NzGridModule,
                NzButtonModule
            ],
            declarations: [tmpCmp],
            // providers: [] - e.g. if your dynamic component needs any service, provide it here.
        })(class { });

        // Now compile this module and component, and inject it into that #vc in your current component template.
        this.compiler.compileModuleAndAllComponentsAsync(tmpModule)
            .then((factories) => {
                const f = factories.componentFactories[0];
                this.cmpRef = f.create(this.injector, [], null, this.moduleRef);
                this.cmpRef.instance.name = 'my-dynamic-component';
                this.vc?.insert(this.cmpRef.hostView);
            });
    }

    // Cleanup properly. You can add more cleanup-related stuff here.
    ngOnDestroy(): void {
        if (this.cmpRef) {
            this.cmpRef.destroy();
        }
    }
}
