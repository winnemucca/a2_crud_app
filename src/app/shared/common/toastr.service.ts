import { Injectable } from '@angular/core';
import { ToastOptions } from 'ng2-toastr';

declare let toastr: any;
@Injectable()
 export class ToastCustomOptions extends ToastOptions {
      // animate = 'flyRight'; // you can override any options available
      // newestOnTop = false;
      // showCloseButton = true;

      success(message: string, title?: string) {
            toastr.success(message, title)
      }
       info(message: string, title?: string) {
            toastr.success(message, title)
      }
       warning(message: string, title?: string) {
            toastr.success(message, title)
      }
       error(message: string, title?: string) {
            toastr.success(message, title)
      }
}