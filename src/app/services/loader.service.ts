import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoaderService {
  public loader: BehaviorSubject<boolean> = new BehaviorSubject(false);

  public showLoader() {
    this.loader.next(true);
  }

  public hideLoader() {
    this.loader.next(false);
  }
}
