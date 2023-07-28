import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Album } from "../models/album";
import { Observable } from 'rxjs';
//import { Observable } from 'rxjs/observable';


@Injectable({
  providedIn: 'root'
})
export class AlbumsService {


 //API_URI = 'http://localhost:3000/api';
  API_URI = 'https://musicfy-nodejs-restapi-production.up.railway.app/api';
  constructor(private http: HttpClient) { }

  getAlbums(){
    return this.http.get(`${this.API_URI}/albums`);
  }

  getAlbum(id: string){
    return this.http.get(`${this.API_URI}/albums/${id}`);
  }

  saveAlbum(album: Album){
    return this.http.post(`${this.API_URI}/albums`, album);
  }

  deleteAlbum(id: string){
    return this.http.delete(`${this.API_URI}/albums/${id}`);
  }

  updateAlbum(id: string|number, updatedAlbum: Album): Observable<any> {
    return this.http.patch(`${this.API_URI}/albums/${id}`, updatedAlbum);
  }
}
