import { PostsService } from './post.service';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from './post.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loadedPosts: Post[] = [];
  isFetching = false;

  constructor(private http: HttpClient, private postService:PostsService) {}

  ngOnInit() {
    this.isFetching = true; 
    this.postService.fetchPost().subscribe(posts=>{
      this.isFetching= false;
      this.loadedPosts = posts;
    }, error => {
      console.log(error)
    });
  }

  onCreatePost(postData: Post) {
    // Send Http request
    this.postService.createAndStorePost(postData.title, postData.content);
  }

  onFetchPosts() {
    this.isFetching = true; 
    this.postService.fetchPost().subscribe(posts=>{
      this.isFetching= false;
      this.loadedPosts = posts;
    }, error => {
      console.log(error)
    });
  }

  onClearPosts() {
    // Send Http request
    this.postService.clearPost().subscribe(()=> {
      this.loadedPosts = [];
    });
  }
}
