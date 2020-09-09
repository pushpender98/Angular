import { Ingrediants } from './../../shared/ingrediants.model';
import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  EventEmitter,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'],
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput', { static: true }) nameInputRef: ElementRef;
  @ViewChild('amountInput', { static: true }) amountInputRef: ElementRef;
  @Output() ingrediantsAdded = new EventEmitter<Ingrediants>();

  constructor() {}

  ngOnInit(): void {}

  onAddItem() {
    const newIngrediant = new Ingrediants(
      this.nameInputRef.nativeElement.value,
      this.amountInputRef.nativeElement.value
    );

    this.ingrediantsAdded.emit(newIngrediant);
  }
}
