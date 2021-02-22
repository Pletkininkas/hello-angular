import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-entry',
  templateUrl: './post-entry.component.html',
  styleUrls: ['./post-entry.component.css']
})
export class PostEntryComponent implements OnInit {

  @Input()
  postName: string = "";
  @Input()
  postText: string = "";

  constructor() { }

  ngOnInit(): void {
  }

}
