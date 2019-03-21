/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { DataRetrieverService } from './data-retriever.service';

describe('Service: DataRetriever', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DataRetrieverService]
    });
  });

  it('should ...', inject([DataRetrieverService], (service: DataRetrieverService) => {
    expect(service).toBeTruthy();
  }));
});
