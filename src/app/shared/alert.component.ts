import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    template: `
        <div class="alert-container mat-elevation-z2" [class]="classConfig()">
            <span class="message">{{message}}</span>
            <ng-content></ng-content>
            <button mat-button (click)="emitCloseEvent()">关闭</button>
        </div>
      `,
    styles: [
        `.alert-container {
            display: flex;
            align-items: center;
            justify-content: space-between;
            padding: 1rem;
            margin: 1rem;
            border-radius: .5rem;
            color: white;
        }`,
        '.message { font-size: 1rem; }',
        '.success { background: #81b29a; }',
        '.warning { background: #e07a5f; }'
    ]
})
export class AlertComponent {
    @Input() message = '空消息提示';
    @Input() type = 'success';
    @Output() closeAlert = new EventEmitter();
    classConfig() {
        return {
            success: this.type === 'success',
            warning: this.type === 'warning'
        };
    }

    emitCloseEvent(): void {
        this.closeAlert.emit();
    }
}
