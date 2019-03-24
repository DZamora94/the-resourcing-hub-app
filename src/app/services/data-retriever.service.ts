import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Car, CarDetail } from '../models/carModel';
import { urlConfig } from '../app.config';

@Injectable({
  providedIn: 'root'
})
export class DataRetrieverService {

constructor(
  private http: HttpClient,
) { }

  public getCarList(): Observable<Car[]> {
    const url = `${urlConfig.carUrl}${urlConfig.endpoints.carList}`;
    return this.http.get<Car[]>(url);
  }

  public getCarDetail(id: string): Observable<CarDetail> {
    if (!id) {
      return of(null);
    }
    const url = `${urlConfig.carUrl}${urlConfig.endpoints.carDetail}${id}`;
    return this.http.get<CarDetail>(url);
  }

}
