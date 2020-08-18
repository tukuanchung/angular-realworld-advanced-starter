import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  postId: number;

  constructor(private router: ActivatedRoute){}


  ngOnInit() {
    this.router.params.subscribe(query => {
      this.postId = query.id;
    });
  }

}
