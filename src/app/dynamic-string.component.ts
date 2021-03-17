import {
    AfterViewInit, Compiler, Component, ComponentRef, Injector,
    NgModule, NgModuleRef, OnDestroy, ViewChild, ViewContainerRef
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzGridModule } from 'ng-zorro-antd/grid';

@Component({
    template: `<h2>以下内容为动态生成<h2>
          <div #vc></div>`
})
export class DynamicStringComponent implements AfterViewInit, OnDestroy {
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

    // 用字符串创建一个动态组件
    private createComponentFromRaw(template: string): void {
        // 注意模板里用到了 zorro 的组件，所以像其他的 module 一样，需要引入它们
        const tmpCmp = Component({ template })(class {
            data = {
                some: '123'
            };
        });

        // 创建一个动态模块，和正常的模块引入各种资源一致
        const tmpModule = NgModule({
            imports: [
                CommonModule,
                NzGridModule,
                NzButtonModule
            ],
            declarations: [tmpCmp],
        })(class { });

        // 编译模块和组件，再把它注入到当前的组件视图中
        this.compiler.compileModuleAndAllComponentsAsync(tmpModule)
            .then((factories) => {
                const f = factories.componentFactories[0];
                this.cmpRef = f.create(this.injector, [], null, this.moduleRef);
                this.cmpRef.instance.name = 'my-dynamic-component';
                this.vc?.insert(this.cmpRef.hostView);
            });
    }

    // 注意销毁动态创建的组件
    ngOnDestroy(): void {
        if (this.cmpRef) {
            this.cmpRef.destroy();
        }
    }
}
