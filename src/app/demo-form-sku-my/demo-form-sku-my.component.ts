import {Component} from '@angular/core';

@Component({
  selector: 'app-demo-form-mysku',
  templateUrl: './demo-form-sku-my.component.html',
  styles: []
})
export class DemoFormSkuMyComponent {

  updateValue(value: any): void {
    console.log('Submitted value: ', value);
  }
}
