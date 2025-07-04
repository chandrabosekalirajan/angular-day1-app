import { Component } from '@angular/core';
import { ChildComponent } from "../child/child.component";

@Component({
  selector: 'app-parent',
  imports: [ChildComponent],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent {

  parentMessage = 'Message from Parent';
  childResponse = '';

  handleChildEvent(response: string) {
    this.childResponse = response;
  }
}
