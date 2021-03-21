import { Component } from '@angular/core';
import { ExampleService } from './example.service';

@Component({
    template: `
    <section class="template-wrapper" style="background-color:#81b29a;color:#FFF">
        <span>来自另一个动态组件：{{param.message}}</span>
    </section>`
})
export class AnotherComponent {
    constructor(public param: ExampleService) { }
}
