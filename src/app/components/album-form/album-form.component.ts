import { Component, OnInit, HostBinding } from '@angular/core';
import {  ActivatedRoute,Router } from '@angular/router';
import { Album } from 'src/app/models/album';
import { AlbumsService } from 'src/app/services/albums.service';

@Component({
  selector: 'app-album-form',
  templateUrl: './album-form.component.html',
  styleUrls: ['./album-form.component.css']
})

export class AlbumFormComponent implements OnInit  {

  @HostBinding('class') classes = 'row';
  test: any = [];
  album: Album = {
    id:0,
    nombre: '',
    artista: '',
    year: 0,
    imagen: ''
  };

  editar: boolean = false;
  mensajeError : string ="";

  constructor(private albumService: AlbumsService, private router: Router, private activedRoute: ActivatedRoute ){

  }
  ngOnInit() {
    const params = this.activedRoute.snapshot.params;

    console.log(params['id'])
  
    if (params['id']) {
      this.albumService.getAlbum(params['id']).subscribe(
        res =>{
          this.test = Object.values(res);

          const currentAlbum: Album = {
            id: this.test[0],
            nombre: this.test[1],
            artista: this.test[2],
            year: this.test[3],
            imagen: this.test[4]
          };
          this.album = currentAlbum;
          this.editar = true;
        },
        err => console.error(err)
        
      )
    }
  }

  saveNewAlbum(){

    delete this.album.id;

    this.albumService.saveAlbum(this.album)
    .subscribe(
      res => {
        console.log(res)
        this.router.navigate(['/']);

      },
      err => {
        console.log(err.status)
          if (err.status == 404) {
            this.mensajeError = "*Se ha alcanzado el límite de Albums";
          }else{
              this.mensajeError = "*Ha ocurrido un error";
          }
        }
      
    )
  }

  updateAlbum(){
    this.albumService.updateAlbum(this.album.id as number ,this.album)
    .subscribe(
      res => {
        console.log(res)
        this.router.navigate(['/']);

      },
      
      err => {
        console.log(err['message'])
      }
    )
  }

}
