import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'mc-taglist',
  templateUrl: './taglist.component.html',
  styleUrls: ['./taglist.component.css'],
})
export class TagListComponent implements OnInit {
  @Input() tags!: string[];
  constructor() {}

  ngOnInit(): void {}
}
