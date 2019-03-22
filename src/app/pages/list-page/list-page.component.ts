import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { DataRetrieverService } from '../../services/data-retriever.service';
import { Car, CarDetail } from '../../models/carModel';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'trh-list-page',
  templateUrl: './list-page.component.html',
  styleUrls: ['./list-page.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ListPageComponent implements OnInit {

  public carListObs: Observable<Car[]>;
  public carDetailListObs: Observable<CarDetail>[] = [];

  constructor(
    private dataService: DataRetrieverService,
  ) { }

  ngOnInit() {
    this.getData();
  }

  private getData() {
    this.carListObs = this.dataService.getCarList()
    .pipe(
      tap(carArray => {
        this.carDetailListObs = carArray.map(car => {
          return this.dataService.getCarDetail(car.id);
        });
      })
    );
  }

}
