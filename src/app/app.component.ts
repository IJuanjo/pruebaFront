import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title:string = 'Contador App';
  count:number=0;
  get countValue(){
    return this.count;
  }
  increment(){
    this.count++;
  }
  decrement(){
    if(this.count>=1){
      this.count--;
    }
  }
}
