import { Component } from '@angular/core';
import { AlbumsService } from "../../services/albums.service";


@Component({
  selector: 'app-album-list',
  templateUrl: './album-list.component.html',
  styleUrls: ['./album-list.component.css']
})
export class AlbumListComponent {

  albums: any = [];
  constructor(private albumsService: AlbumsService){

  }

  ngOnInit(){
    this.getAlbums();
  }

  getAlbums(){
    this.albumsService.getAlbums().subscribe(
      res => {
        this.albums = res;
      },
      err => console.error(err)
    )
  }

  deleteAlbum(id: string){
    this.albumsService.deleteAlbum(id).subscribe(
      res =>{
        console.log(res)
        this.getAlbums();
      },
      err => console.log(err)
    )
  }

}
