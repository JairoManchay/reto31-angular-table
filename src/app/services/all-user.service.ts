import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Userts } from '../models/userts';

@Injectable({
  providedIn: 'root'
})
export class AllUserService {

  constructor(private http: HttpClient) { }

  getVista():Observable<Userts[]>{
    const api = environment.aapiUrl + 'issues';
    return this.http.get<Userts[]>(api);
  }
}
