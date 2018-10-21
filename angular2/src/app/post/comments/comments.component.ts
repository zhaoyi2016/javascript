import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  @Input() comments: Array<any>;

  constructor() { }

  ngOnInit() {
  }

  show: boolean = false;
  showComment() {
    this.show = true;
  }
}