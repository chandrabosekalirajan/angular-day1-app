import { Component, Input, Output, EventEmitter, OnInit, OnChanges, OnDestroy, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-child',
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {

  @Input() message: string = '';
  @Output() responseEvent = new EventEmitter<string>();

  ngOnChanges() {
    console.log('ChildComponent: ngOnChanges');
  }

  ngOnInit() {
    console.log('ChildComponent: ngOnInit');
  }

  ngAfterViewInit() {
    console.log('ChildComponent: ngAfterViewInit');
  }

  ngOnDestroy() {
    console.log('ChildComponent: ngOnDestroy');
  }

  sendResponse() {
    this.responseEvent.emit('Hello from Child!');
  }
}
