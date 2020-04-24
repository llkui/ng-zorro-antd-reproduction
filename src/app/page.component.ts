import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-page',
    templateUrl: './page.component.html'
})
export class PageComponent {
    isVisible = false;

    constructor(
        private router: Router
    ) { }

    showModal(): void {
        this.isVisible = true;
    }

    handleOk(): void {
        console.log('Button ok clicked!');
        this.isVisible = false;
    }

    handleCancel(): void {
        console.log('Button cancel clicked!');
        this.isVisible = false;
    }

    showPage2(): void {
        this.handleCancel();
        this.router.navigate(['./page2']);
    }
}
