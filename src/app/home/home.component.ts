import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  public postOne =
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem commodi cupiditate dolorem doloremque dolorum fugiat saepe sint soluta ullam voluptates voluptatum?';
  public posts: string[] = [this.postOne, this.postOne, this.postOne];
  private postNumber: number = 0;

  getPostNumber(): number {
    return this.postNumber++;
  }

  readMoreClick() {
    console.log('read more click');
  }

  commentsClick() {
    console.log('comments click');
  }

  authorClick() {
    console.log('author click');
  }

  displayCounter(count: number) {
    console.log(count);
  }
}
