// import { Injectable } from '@angular/core';

// @Injectable()
// export class MiHttpService {

//   constructor() { }

// }
import { Injectable } from '@angular/core';

import { Http, Response, Headers, RequestOptions} from '@angular/http';
//import { HttpClient, HttpHeaders} from '@angular/common/http';//alternativa
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class MiHttpService {
  private web: string = "http://127.0.0.1:8080/workspace/backendLab4/"

  constructor( public http: Http) { }

  public httpGetP ( url: string)
  {
    return this.http
    .get( this.web+url )
    .toPromise()
    .then( this.extractData )
    .catch( this.handleError );
  }

  public httpPostP( url: string, objeto: any )
  {
    return this.http
    .get( this.web+url )
    .subscribe( data => {
      console.log( data );
      return data;
    });
  }


  public httpGetO ( url: string): Observable<Response>
  {
    return this.http.get( this.web+url )
      .map( ( res: Response ) => res.json())
      .catch( ( err: any ) => Observable.throw(err.json().error || 'Server error'));
  }


  private extractData ( res: Response )
  {
    return res.json() || {};
  }

  private handleError ( error: Response | any )
  {
    return error;
  }

}

