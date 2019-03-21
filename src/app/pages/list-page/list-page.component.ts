import { Component, OnInit } from '@angular/core';
import { DataRetrieverService } from '../../services/data-retriever.service';
import { Car, CarDetail } from '../../models/carModel';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'trh-list-page',
  templateUrl: './list-page.component.html',
  styleUrls: ['./list-page.component.scss']
})
export class ListPageComponent implements OnInit {

  public carListObs: Observable<Car[]>;
  public carDetailListObs: Observable<CarDetail>[] = [];

  constructor(
    private dataService: DataRetrieverService,
  ) { }

  ngOnInit() {
    this.carListObs = this.dataService.getCarList('https://itg-prd-recruit.appspot.com/api/vehicles/')
    .pipe(
      tap(carArray => {
        this.carDetailListObs = carArray.map(car => {
          return this.dataService.getCarDetail(`https://itg-prd-recruit.appspot.com/api/vehicle/${car.id}`);
        });
      })
    );
  }

}
