import { Injectable } from '@angular/core';
import { ToastOptions } from 'ng2-toastr';

@Injectable()

 export class ToastCustomOptions extends ToastOptions {
      animate = 'flyRight'; // you can override any options available
      newestOnTop = false;
      showCloseButton = true;
}