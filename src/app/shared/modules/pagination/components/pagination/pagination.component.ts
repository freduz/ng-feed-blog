import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { UtilService } from 'src/app/shared/services/util.service';

@Component({
  selector: 'mc-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css'],
})
export class PaginationComponent implements OnInit, OnChanges {
  @Input() url!: string;
  @Input() currentPage!: number;
  @Input() total!: number;
  @Input() limit!: number;

  pageCount!: number;
  pages!: number[];
  constructor(private utilService: UtilService) {}

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {
    this.pageCount = Math.ceil(this.total / this.limit);

    this.pages = this.utilService.range(1, this.pageCount);
  }
}
