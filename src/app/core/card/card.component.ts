import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { map } from 'rxjs';
import { DataService } from 'src/app/common/data-service';
import { TypeInterface } from 'src/app/common/type.interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardComponent {
  @Input('type') type!: TypeInterface;
  @Input('index') index!: number;

  public readonly data$ = this.dataService.data$.pipe(
    map((el) => el.filter((c) => c.type === this.type))
  );
  constructor(private dataService: DataService) {}
}
