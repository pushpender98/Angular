import { Post } from './post.model';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, tap } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class PostsService {
  constructor(private http: HttpClient) {}

  createAndStorePost(title: string, content: string) {
    // Type Assignment in HTTPClient
    const postData: Post = { title: title, content: content };
    this.http
      .post<{ name: string }>(
        'https://basics-starting.firebaseio.com/posts.json',
        postData,
        {
          observe: 'response'
        }
      )
      .subscribe((responseData) => {
        console.log(responseData);
      });
  }

  fetchPost() {

    let searchParam = new HttpParams();
    searchParam = searchParam.append('print', 'preety');
    searchParam = searchParam.append('custom', 'hello');

    return this.http
      .get('https://basics-starting.firebaseio.com//posts.json',
      {
        headers: new HttpHeaders({'custom-header': 'hello'}),
        params: searchParam
      })
      .pipe(
        map((responseData: { [key: string]: Post }) => {
          const postsArray: Post[] = [];
          for (const key in responseData) {
            if (responseData.hasOwnProperty(key)) {
              postsArray.push({ ...responseData[key], id: key });
            }
          }
          return postsArray;
        })
      );
  }

  clearPost() {
    return this.http.delete(
      'https://basics-starting.firebaseio.com/posts.json',
      {
        observe: 'events',
        responseType: 'text'
      }
    ).pipe(
      tap(events => {
        console.log(events);
      })
    );
  }
}
