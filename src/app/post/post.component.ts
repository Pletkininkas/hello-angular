import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  // Input binding
  @Input()
  content: string = "";

  @Output()
  valueChange = new EventEmitter();
  counter = 0;

  constructor() { }

  // Invoked immediately after the default change detector
  ngOnInit(): void {
  }

  valueChanged() {
    this.counter++;
    this.valueChange.emit(this.counter);
  }

}
