/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { DataRetrieverService } from './data-retriever.service';
import { HttpClientModule } from '@angular/common/http';
import { CarDetail } from '../models/carModel';
import { tap } from 'rxjs/operators';

describe('Service: DataRetriever', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule,
      ],
      providers: [
        DataRetrieverService,
      ]
    });
  });

  it('should be created', inject([DataRetrieverService], (service: DataRetrieverService) => {
    expect(service).toBeTruthy();
  }));

  it('should have method called getCarList', inject([DataRetrieverService], (service: DataRetrieverService) => {
    expect(service.getCarList()).toBeTruthy();
  }));

  it('should have method called getCarDetail', inject([DataRetrieverService], (service: DataRetrieverService) => {
    expect(service.getCarDetail('1')).toBeTruthy();
  }));

  it('should return null when passed null', inject([DataRetrieverService], (service: DataRetrieverService) => {
    let result;
    service.getCarDetail(null).subscribe(data => result = data);

    expect(result).toBeNull();
  }));
});
