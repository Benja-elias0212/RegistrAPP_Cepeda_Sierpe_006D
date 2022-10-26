
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
/*import { RespuestaTopHeadlines } from '../pages/interface/interface';

@Injectable({
  providedIn: 'root'
})
export class FeriadosService {

  constructor(private httpclient: HttpClient) { }

  getTopHeadLines(){
    return (this.httpclient.get<RespuestaTopHeadlines>('https://apis.digital.gob.cl/fl/feriados/2022'));

  }
}*/


@Injectable({
  providedIn: 'root'
})
export class FeriadosService {

  constructor(private HTTP: HttpClient) { }

  getData<T>(url: string){
    url='https://apis.digital.gob.cl/fl/feriados/2022';
    return this.HTTP.get<T[]>(url)
  }
}
