import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';
import { DataService } from '../common/data-service';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PageComponent implements OnInit {
  typeItem: string;
  selest$: Observable<void>;
  total$ = this.dataService.total$;

  constructor(private dataService: DataService) {}

  public selectedType$ = this.dataService.data$.pipe(
    map((el) => new Set(el.map((el) => el.type)))
  );

  public selectedTypes$ = this.dataService.data$.pipe(
    map((el) => {
      return new Array(el.map((el) => el.type));
    })
  );

  ngOnInit() {
    this.dataService.getData();
  }

  trackByFn(index) {
    return index;
  }
}
