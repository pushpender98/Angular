import { Subscription } from 'rxjs';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ShoppingListService } from './../shoppingList.service';
import { Ingrediants } from './../../shared/ingrediants.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'],
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild("f", {static:true}) slForm: NgForm;
  subscription: Subscription;
  editMode= false;
  editedItemindex: number;
  editedItem: Ingrediants;
  // @ViewChild('nameInput', { static: true }) nameInputRef: ElementRef;
  // @ViewChild('amountInput', { static: true }) amountInputRef: ElementRef;

  constructor(private shoppingListService: ShoppingListService) {}

  ngOnInit(): void {
     this.subscription = this.shoppingListService.startedEditing.subscribe(
      (index:number) => {
        this.editedItemindex =index;
        this.editMode = true;
        this.editedItem = this.shoppingListService.getIngrediant(index);

        this.slForm.setValue({
          name: this.editedItem.name,
          amount: this.editedItem.amount
        });
      }
    );
  }

  onAddItem() {
    const value = this.slForm.value;
    const newIngrediant = new Ingrediants(
      value.name,
      value.amount
      // this.nameInputRef.nativeElement.value,
      // this.amountInputRef.nativeElement.value
    );
      if(this.editMode){
        this.shoppingListService.updateIngrediant(this.editedItemindex, newIngrediant);
        
      }else{
        this.shoppingListService.addIngrediant(newIngrediant);
      }
      this.editMode = false;
      this.slForm.reset();
  }

  onClear(){
    this.editMode= false;
    this.slForm.reset();
  }

  onDelete(){
    this.shoppingListService.deleteIngrediant(this.editedItemindex);
    this.onClear();
  }
}
