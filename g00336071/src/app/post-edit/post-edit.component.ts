import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import {PostService} from '../services/post.service';
import { NgForm } from "@angular/forms";

@Component({
  selector: 'app-post-edit',
  templateUrl: './post-edit.component.html',
  styleUrls: ['./post-edit.component.css']
})
export class PostEditComponent implements OnInit {
  post: any = [];

  constructor(private route: ActivatedRoute, private service:PostService) { }

  ngOnInit() {
    console.log(this.route.snapshot.params['id']);
    this.service.getPost(this.route.snapshot.params['id']).subscribe(data =>
      {
        this.post = data;
      });
  }

  onEditPost(form : NgForm){
    //post._id form.value.title form.value.content
    this.service.updatePost(this.post._id, form.value.title, 
      form.value.content).subscribe();
  }

}
