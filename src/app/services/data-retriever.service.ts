import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Car, CarDetail } from '../models/carModel';

@Injectable({
  providedIn: 'root'
})
export class DataRetrieverService {

constructor(
  private http: HttpClient,
) { }

  public getCarList(url: string): Observable<Car[]> {
    return this.http.get<Car[]>(url);
  }

  public getCarDetail(url: string): Observable<CarDetail> {
    return this.http.get<CarDetail>(url);
  }

}
