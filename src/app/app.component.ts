import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  url='http://www.omdbapi.com/?apikey=16eb9514&s=';
  name;
  year;
  poster;
  data;
  constructor(private http: HttpClient){

  }
  getData(){
    this.http.get(this.url+this.name).subscribe((data)=>{
      console.log(data);
      this.data=data['Search'];
      console.log(data['Search']);
      for(let i of data['Search']){
         console.log(i.Title);
      }
    })
}

}
