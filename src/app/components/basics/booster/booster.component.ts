import {Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef} from '@angular/core';

@Component({
  selector: 'app-booster',
  templateUrl: './booster.component.html',
})
export class BoosterComponent implements OnInit {

  // props
  @Input() legend: string = 'Legend';
  @Input() percent: number = 0;

  // emit event
  @Output('updateValue') changeNewValue: EventEmitter<number> = new EventEmitter<number>();

  @ViewChild('txtprogress', null) txtProgress: ElementRef;

  constructor() {
  }

  ngOnInit() {
  }

  changeValue(value: number) {

    if (this.percent === 100 && value > 0) {
      return;
    }

    if (this.percent === 0 && value < 0) {
      return;
    }

    this.percent += value;

    this.changeNewValue.emit(this.percent);

    this.txtProgress.nativeElement.focus();

  }

  onChanges(newValue: number) {

    if (newValue >= 100) {
      this.percent = 100;
    } else if (newValue <= 0) {
      this.percent = 0;
    } else {
      this.percent = newValue;
    }

    this.txtProgress.nativeElement.value = this.percent;

    this.changeNewValue.emit(newValue);
  }

}
