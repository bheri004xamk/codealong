import { Tehtava } from './tehtava';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class TehtavalistaService {

  tehtavat : Tehtava[];

  url : string = "http://localhost:3000/api/tehtavat";


  constructor(private http : HttpClient) { 

    this.haeTehtavat().then((data : Tehtava[]) => {

      this.tehtavat = data;      

    });

  }

  haeTehtavat = () : Promise<any> => {

    return this.http.get(this.url).toPromise();

  }

  uusiTehtava = (tehtava : Tehtava) : void => {

    this.http.post(this.url, tehtava).subscribe((data : Tehtava[]) => {

      this.tehtavat = data;

    }, (err) => {

      console.log(err);

    });

  }
}
