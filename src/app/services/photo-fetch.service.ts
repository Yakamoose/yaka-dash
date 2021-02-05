import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PhotoFetchService {
  private flickrApiKey = 'cce4c7491f3d36b3b5ff84ac0559a3d6';
  private galleryId = '72157649026354681';
  // private flickrSecret = 'b3f05fa4339da26c';
  private flickrUrl = `https://api.flickr.com/services/rest/?method=flickr.galleries.getPhotos&api_key=${this.flickrApiKey}&gallery_id=66911286-${this.galleryId}&format=json&nojsoncallback=1`;

  constructor(private http: HttpClient) { }

  getImageUrl(): Observable<any> {
    return this.http.get(this.flickrUrl);
  }
}
