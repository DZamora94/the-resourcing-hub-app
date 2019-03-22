/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { DataRetrieverService } from './data-retriever.service';
import { HttpClientModule } from '@angular/common/http';

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

  it('should ...', inject([DataRetrieverService], (service: DataRetrieverService) => {
    expect(service).toBeTruthy();
  }));
});
