import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../services/spotify.service';

@Component({
  selector: 'app-spotify',
  templateUrl: './spotify.page.html',
  styleUrls: ['./spotify.page.scss'],
})
export class SpotifyPage implements OnInit {

  categories:Promise<any> | undefined;
  categoryId:string ="";
  playlists:Promise<any> | undefined;
  playlistId:string="";
  playlist:Promise<any> | undefined;
  
  // Playlist data
  playlistName:string = "";
  playlistDescription:string = "";
  playlistFollowers:number = 0;
  playlistImage:string = "";

  // playlistDetails:Promise<any> | undefined;
  playlistTracks:Promise<any> | undefined;


  constructor(private spotify:SpotifyService) { }

  ngOnInit() {
    // const spotifyToken = this.spotify.getToken();
    // console.log(spotifyToken);
    this.categories = this.spotify.getCategories();
  }

  setCategory(ev:any){
    this.categoryId = ev.detail.value;
    this.getPlaylists();
  }

  getPlaylists(){
    const playlists = this.spotify.getPlaylists(this.categoryId);
    this.playlists = playlists;
  }

  setPlaylist(ev:any){
    this.playlistId = ev.detail.value;
  }

  getPlaylist(){
    this.playlist = this.spotify.getPlaylist(this.playlistId);
    // console.log(this.playlist);
    this.playlist.then((val)=>{
      this.playlistName = val.name;
      this.playlistDescription = val.description;
      this.playlistFollowers = val.followers;
      this.playlistImage = val.image;
    });
  }

  getPlaylistTracks(){
    const playlist = this.spotify.getPlaylistTracks(this.playlistId);
    this.playlistTracks = playlist;
  }
}
