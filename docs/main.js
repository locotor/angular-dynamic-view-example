(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{0:function(t,n,e){t.exports=e("zUnb")},zUnb:function(t,n,e){"use strict";e.r(n);var o=e("fXoL"),a=e("a3Wg"),r=e("mrSG"),s=e("3Pt+"),i=e("tyNb"),c=e("tk/3"),l=e("ofXK"),m=e("Kd/A"),p=e.n(m),d=e("jhN1"),h=e("R1ws"),u=e("Rm4T"),b=e("B+r4"),g=e("OzZK"),v=e("+rOU"),f=e("NFeN"),y=e("bTqV"),C=e("qFsG"),w=e("kmnG"),k=e("f0Cb");let P=class{constructor(t,n){this.icon=t,this.domSanitizer=n,this.icon.addSvgIcon("juejin",this.domSanitizer.bypassSecurityTrustResourceUrl("assets/image/juejin.svg")),this.icon.registerFontClassAlias("fontawesome","fa")}};P.ctorParameters=()=>[{type:f.b},{type:d.b}],P=Object(r.a)([Object(o.n)({selector:"app-root",template:'<nav class="mat-elevation-z4">\r\n    <ul class="nav-list">\r\n        <li class="nav-item"><a routerLink="/dynamic-view">\u89c6\u56fe\u5bb9\u5668</a></li>\r\n        <li class="nav-item"><a routerLink="/cdk-directive">cdk\u6307\u4ee4</a></li>\r\n        <li class="nav-item"><a routerLink="/string-component">\u5b57\u7b26\u4e32\u7ec4\u4ef6</a></li>\r\n    </ul>\r\n    <section class="author-info">\r\n        <img class="avatar" src="/assets/image/avatar.jfif">\r\n        <div>\r\n            <a href="https://blog.locotor.cn/" title="github" target="_blank">\r\n                <mat-icon fontSet="fontawesome" fontIcon="fa-github"></mat-icon>\r\n            </a>\r\n            <a href="https://juejin.cn/user/782508008407687" title="juejin" target="_blank">\r\n                <mat-icon fontSet="fontawesome" fontIcon="fa-book"></mat-icon>\r\n            </a>\r\n            <a href="https://blog.locotor.cn/" title="blog" target="_blank">\r\n                <mat-icon fontSet="fontawesome" fontIcon="fa-rss"></mat-icon>\r\n            </a>\r\n        </div>\r\n    </section>\r\n</nav>\r\n<section class="main mat-elevation-z6">\r\n    <header>\r\n        <h1>Angular \u52a8\u6001\u89c6\u56fe</h1>\r\n    </header>\r\n    <section class="content">\r\n        <router-outlet></router-outlet>\r\n    </section>\r\n</section>',styles:[":host {\n  display: flex;\n  align-items: center;\n  height: 100%;\n  padding: 2rem;\n  background: #EBECFF;\n}\n\nnav {\n  display: flex;\n  flex-direction: column;\n  position: relative;\n  left: 2rem;\n  height: 80%;\n  border-radius: 2rem;\n  color: white;\n  background-image: linear-gradient(#5872FF,#3F51B5)\n}\n\n.nav-list {\n  flex: 1;\n  list-style: none;\n  padding: 1rem;\n}\n\n.nav-item {\n  margin: 2rem;\n}\n\nnav a {\n  color: white;\n}\n\nnav a mat-icon{\n  font-size: 1rem;\n  width: 1rem;\n  margin: 0 .2rem;\n}\n\n.author-info{\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  margin:1rem 0;\n}\n\n.avatar{\n  width: 7rem;\n  border-radius: 3.5rem;\n  margin-bottom: 1rem;\n}\n\nsection.main {\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n  padding: 1rem 2rem;\n  border-radius: 1rem;\n  height: 100%;\n  background: #F6F6FE;\n}\n\nheader {\n  margin: 1rem 0;\n}\n\n.content {\n  flex: 1;\n  border-top: 1px dotted;\n  padding: 2rem;\n  overflow: hidden;\n}\n"]})],P);let j=class{constructor(t,n,e){this.compiler=t,this.injector=n,this.moduleRef=e}ngAfterViewInit(){this.createComponentFromRaw('\n            <div style="border: 1px solid blue; margin: 5px; padding: 5px">\n                <h4>\u52a8\u6001\u63d2\u5165\u5b57\u7b26\u4e32\u7ec4\u4ef6 </h4>\n                <h5>\u7ed1\u5b9a\u503c: {{data.some}}</h5>\n                <h4>\u663e\u793a zorro \u7ec4\u4ef6</h4>\n                <nz-row nzGutter="15">\n                    <nz-col [nzSpan]="4">\n                        <button nzType="primary" nz-button nzSize="medium">\u4e3b\u8981\u6309\u94ae</button>\n                    </nz-col>\n                </nz-row>\n            </div>')}createComponentFromRaw(t){const n=Object(o.n)({template:t})(class{constructor(){this.data={some:"123"}}}),e=Object(o.M)({imports:[l.b,b.a,g.a],declarations:[n]})(class{});this.compiler.compileModuleAndAllComponentsAsync(e).then(t=>{var n;const e=t.componentFactories[0];this.cmpRef=e.create(this.injector,[],null,this.moduleRef),this.cmpRef.instance.name="my-dynamic-component",null===(n=this.vc)||void 0===n||n.insert(this.cmpRef.hostView)})}ngOnDestroy(){this.cmpRef&&this.cmpRef.destroy()}};j.ctorParameters=()=>[{type:o.l},{type:o.G},{type:o.P}],j.propDecorators={vc:[{type:o.nb,args:["vc",{read:o.ob}]}]},j=Object(r.a)([Object(o.n)({template:"<h2>\u4ee5\u4e0b\u5185\u5bb9\u4e3a\u52a8\u6001\u751f\u6210<h2>\n          <div #vc></div>"})],j);let O=class{constructor(){this.message="\u7a7a\u6d88\u606f\u63d0\u793a",this.type="success",this.closeAlert=new o.x}classConfig(){return{success:"success"===this.type,warning:"warning"===this.type}}emitCloseEvent(){this.closeAlert.emit()}};O.propDecorators={message:[{type:o.H}],type:[{type:o.H}],closeAlert:[{type:o.T}]},O=Object(r.a)([Object(o.n)({template:'\n        <div class="alert-container mat-elevation-z2" [class]="classConfig()">\n            <span class="message">{{message}}</span>\n            <ng-content></ng-content>\n            <button mat-button (click)="emitCloseEvent()">\u5173\u95ed</button>\n        </div>\n      ',styles:[".alert-container {\n            display: flex;\n            align-items: center;\n            justify-content: space-between;\n            padding: 1rem;\n            margin: 1rem;\n            border-radius: .5rem;\n            color: white;\n        }",".message { font-size: 1rem; }",".success { background: #81b29a; }",".warning { background: #e07a5f; }"]})],O);let x=class{constructor(){this.message="\u4ee5\u4f9d\u8d56\u6ce8\u5165\u7684\u65b9\u5f0f\u4f20\u503c"}};x=Object(r.a)([Object(o.E)()],x);let z=class{constructor(t){this.param=t}};z.ctorParameters=()=>[{type:x}],z=Object(r.a)([Object(o.n)({template:'\n    <section class="template-wrapper" style="background-color:#81b29a;color:#FFF">\n        <span>\u6765\u81ea\u53e6\u4e00\u4e2a\u52a8\u6001\u7ec4\u4ef6\uff1a{{param.message}}</span>\n        <ng-content></ng-content>\n    </section>'})],z);let T=class{constructor(t,n){this.resolver=t,this.messageValue="",this.templateContext={message:"\u6765\u81ea\u6a21\u677f\u4e0a\u4e0b\u6587\u7684\u503c"},this.anotherComponent=z,this.costumeInjector=o.G.create({providers:[{provide:x,deps:[]}],parent:n});const e=document.createElement("span"),a=document.createElement("div");e.innerHTML="hello, world",a.innerHTML="<span>locotor</span>",this.costumeContent=[[e,a]]}ngAfterViewInit(){}ngOnDestroy(){this.container.clear()}createComponent(t){const n=this.resolver.resolveComponentFactory(O),e=this.container.createComponent(n,void 0,void 0,this.costumeContent);e.instance.type=t,this.messageValue&&(e.instance.message=this.messageValue,this.messageValue=""),e.instance.closeAlert.subscribe(()=>{const t=this.container.indexOf(e.hostView);this.container.remove(t)})}moveToTop(){const t=this.container.get(this.container.length-1);t&&this.container.move(t,0)}createTemplate(){this.container.createEmbeddedView(this.template,this.templateContext)}clearContainer(){this.container.clear()}};T.ctorParameters=()=>[{type:o.p},{type:o.G}],T.propDecorators={container:[{type:o.nb,args:["dynamicComponentContainer",{read:o.ob}]}],template:[{type:o.nb,args:["templateView",{read:o.jb}]}]},T=Object(r.a)([Object(o.n)({template:'<section class="operation-pane">\r\n    <form>\r\n        <mat-form-field>\r\n            <input matInput placeholder="\u8f93\u5165\u6d88\u606f\u5185\u5bb9" name="alert-message" [(ngModel)]="messageValue" />\r\n        </mat-form-field>\r\n    </form>\r\n    <button mat-stroked-button class="operation-button" color="primary"\r\n        (click)="createComponent(\'success\')">\u63d2\u5165\u6210\u529f\u6d88\u606f</button>\r\n    <button mat-stroked-button class="operation-button" color="accent"\r\n        (click)="createComponent(\'warning\')">\u63d2\u5165\u8b66\u544a\u6d88\u606f</button>\r\n    <button mat-stroked-button class="operation-button" color="primary" (click)="createTemplate()">\u63d2\u5165\u6a21\u677f</button>\r\n    <button mat-stroked-button class="operation-button" color="primary" (click)="moveToTop()">\u7f6e\u9876\u6700\u540e\u4e00\u4e2a</button>\r\n    <button mat-stroked-button class="operation-button" color="primary" (click)="clearContainer()">\u6e05\u7a7a</button>\r\n</section>\r\n\r\n<div class="dynamic-view-container">\r\n    <h2 style="border-bottom: 1px solid;">\u4ee5\u4ee3\u7801\u65b9\u5f0f\u52a8\u6001\u63d2\u5165</h2>\r\n    <ng-container #dynamicComponentContainer></ng-container>\r\n</div>\r\n\r\n<div class="dynamic-view-container">\r\n    <h2 style="border-bottom: 1px solid;">\u4ee5\u6307\u4ee4\u65b9\u5f0f\u52a8\u6001\u63d2\u5165</h2>\r\n    <ng-container *ngComponentOutlet="anotherComponent;injector:costumeInjector;content:costumeContent">\r\n    </ng-container>\r\n    <ng-container *ngTemplateOutlet="templateView; context: templateContext"></ng-container>\r\n</div>\r\n\r\n<div></div>\r\n\r\n<ng-template #templateView let-param="message">\r\n    <section class="template-wrapper">\r\n        <span>\u6765\u81ea ng-template \u7684\u52a8\u6001\u5185\u5bb9</span>\r\n        <span>{{param}}</span>\r\n    </section>\r\n</ng-template>',styles:[":host{\r\n    display: flex;\r\n    height: 100%;\r\n}\r\n\r\n\r\n"]})],T);let F=class{constructor(t){this.viewContainerRef=t}ngOnInit(){}ngAfterViewInit(){this.componentPortal=new v.c(O),this.templatePortal=new v.f(this.templatePortalContent,this.viewContainerRef),this.domPortal=new v.d(this.domPortalContent)}attachComponent(){if(!this.componentPortal)return;this.codeContainer.detach();const t=this.codeContainer.attachComponentPortal(this.componentPortal);t.instance.message="\u8f93\u5165\u5c5e\u6027\u4f20\u503c\u793a\u4f8b",t.instance.closeAlert.subscribe(()=>{this.codeContainer.detach()})}attachTemplate(){this.templatePortal&&(this.codeContainer.detach(),this.embeddedView=this.codeContainer.attachTemplatePortal(this.templatePortal))}initComponent(t){t instanceof o.q&&(t.instance.message="\u8f93\u5165\u5c5e\u6027\u4f20\u503c\u793a\u4f8b",t.instance.closeAlert.subscribe(()=>{t.destroy()}))}};F.ctorParameters=()=>[{type:o.ob}],F.propDecorators={codeContainer:[{type:o.nb,args:["codeStyleHost",{read:v.b}]}],directiveContainer:[{type:o.nb,args:["directiveStyleHost",{read:v.b}]}],directiveTemplateContent:[{type:o.nb,args:["directiveTemplate",{read:v.a}]}],templatePortalContent:[{type:o.nb,args:["templatePortalContent"]}],domPortalContent:[{type:o.nb,args:["domPortalContent"]}]},F=Object(r.a)([Object(o.n)({template:'<section class="operation-pane">\n    <h2>\u6307\u4ee4\u4f20\u503c</h2>\n    <button mat-stroked-button class="operation-button" color="primary"\n        (click)="selectedPortal = componentPortal">\u63d2\u5165\u7ec4\u4ef6</button>\n    <button mat-stroked-button class="operation-button" color="primary"\n        (click)="selectedPortal = templatePortal">\u63d2\u5165\u6a21\u677f</button>\n    <button mat-stroked-button class="operation-button" color="primary"\n        (click)="selectedPortal = directiveTemplateContent">\u63d2\u5165\u6307\u4ee4\u521b\u5efa\u7684\u6a21\u677f</button>\n    <button mat-stroked-button class="operation-button" color="primary"\n        (click)="selectedPortal = domPortal">\u63d2\u5165\u539f\u751fDOM</button>\n    <mat-divider style="margin: 1rem 0;"></mat-divider>\n    <h2>CdkPortalOutlet \u65b9\u6cd5</h2>\n    <button mat-stroked-button class="operation-button" color="primary" (click)="attachComponent()">\u63d2\u5165\u7ec4\u4ef6</button>\n    <button mat-stroked-button class="operation-button" color="primary" (click)="attachTemplate()">\u63d2\u5165\u6a21\u677f</button>\n</section>\n<section class="host-container">\n    <div class="dynamic-view-container ">\n        <h2>\u7ed9\u6307\u4ee4\u4f20\u503c\u63d2\u5165\u5185\u5bb9:</h2>\n        <ng-template #directiveStyleHost [cdkPortalOutlet]="selectedPortal" (attached)="initComponent($event)">\n        </ng-template>\n    </div>\n    <div class="dynamic-view-container ">\n        <h2>\u8c03\u7528 CdkPortalOutlet \u5bf9\u8c61\u7684\u65b9\u6cd5\u63d2\u5165\u5185\u5bb9:</h2>\n        <ng-template #codeStyleHost cdkPortalOutlet></ng-template>\n    </div>\n</section>\n<div #domPortalContent class="dom-section">\n    <h2>\u8fd9\u662f\u4e00\u4e2a\u539f\u751fDOM\u5185\u5bb9</h2>\n    <p>\u53ef\u4ee5\u7528\u4efb\u610f\u539f\u751f DOM \u5143\u7d20\u6784\u5efa DomPortal\u3002<br />\n        \u52a8\u6001\u63d2\u5165\u65f6\uff0cDomPortal \u4f1a\u628a\u5185\u5bb9\u539f\u6837\u79fb\u52a8\u5230\u65b0\u7684\u5730\u65b9\u3002</p>\n    <p>\u5728\u53d6\u6d88\u63d2\u5165\u65f6\uff0c\u5c06\u518d\u6b21\u539f\u6837\u6062\u590d\u5230\u5176\u539f\u6765\u7684\u4f4d\u7f6e\u3002</p>\n</div>\n\n<ng-template #templatePortalContent>\n    <section class="template-wrapper">\n        <span>\u6765\u81ea ng-template \u7684\u52a8\u6001\u5185\u5bb9</span>\n    </section>\n</ng-template>\n<ng-template cdk-portal #directiveTemplate>\n    <section class="template-wrapper">\n        <span>\u8fd9\u662f\u7528 cdk-portal \u6307\u4ee4\u58f0\u660e\u7684\u6a21\u677f</span>\n    </section>\n</ng-template>',styles:[":host {\n  display: flex;\n  height: 100%;\n}\n\ndiv.dom-section {\n  margin-left: 1rem;\n  padding: 1rem;\n  background-color: #f2cc8f;\n  color: #3d405b;\n}\n\n.host-container {\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n}\n\n.host-container > :last-child{\n  margin-top: 1rem;\n}"]})],F),Object(l.s)(p.a);const V=[{path:"",redirectTo:"dynamic-view",pathMatch:"full"},{path:"dynamic-view",component:T},{path:"cdk-directive",component:F},{path:"string-component",component:j}];let A=class{};A=Object(r.a)([Object(o.M)({declarations:[P,j,T,O,F],imports:[d.a,s.b,h.b,c.c,i.a.forRoot(V),b.a,g.a,v.e,f.a,y.a,C.a,w.d,k.a],bootstrap:[P],providers:[{provide:u.a,useValue:u.b}]})],A);Object(a.a)().bootstrapModule(A).catch(t=>console.error(t))},zn8P:function(t,n){function e(t){return Promise.resolve().then(function(){var n=new Error("Cannot find module '"+t+"'");throw n.code="MODULE_NOT_FOUND",n})}e.keys=function(){return[]},e.resolve=e,t.exports=e,e.id="zn8P"}},[[0,0,4]]]);
//# sourceMappingURL=main.js.map