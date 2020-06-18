import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent implements OnInit {

  @Input() id: number;
  @Input() selected: number;
  @Input() title: string;
  @Output() selectItem = new EventEmitter<number>();
  @Output() removeItem = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  remove() {
    this.removeItem.emit(this.id);
  }

  select() {
    this.selectItem.emit(this.id);
  }
}
