import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-chip-list',
  templateUrl: './chip-list.component.html',
  styleUrls: ['./chip-list.component.css']
})
export class ChipListComponent implements OnInit {

  @Input() dataList: string[] = [];
  @Input() isVisibleClose = false;
  @Output() removeEvent: EventEmitter<string> = new EventEmitter<string>();

  constructor() {
  }

  ngOnInit(): void {
  }

  identify(index, item: string): any {
    return item;
  }

  removeItem(chip: string, rootIndex: number): void {
    this.dataList.splice(rootIndex, 1);
    this.removeEvent.emit(chip);
  }

}
