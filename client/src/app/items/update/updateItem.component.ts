import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
FormControl,
FormGroup,
FormsModule,
ReactiveFormsModule,
Validators,
} from '@angular/forms';
import { ItemsService } from '../items.service';

@Component({
selector: 'app-update-item',
standalone: true,
imports: [CommonModule, FormsModule, ReactiveFormsModule],
templateUrl: './updateItem.component.html',
styleUrl: './updateItem.component.css',
})
export class UpdateItemComponent {
f2 = new FormGroup({
  username: new FormControl('', [Validators.required]),
  password: new FormControl('', [Validators.required]),
  confirmation: new FormControl('', [Validators.required]),
  country: new FormControl('', [Validators.required]),
  email: new FormControl('', [Validators.required, Validators.email]),
  sexe: new FormControl('', [Validators.required]),
  terms: new FormControl(false, [Validators.requiredTrue]),
});

constructor(private itemService: ItemsService) {
  this.itemService.show('id').subscribe((response) => {
    this.f2.setValue({
      username: response.data.username,
      password: response.data.password,
      confirmation: response.data.confirmation,
      country: response.data.country,
      email: response.data.email,
      sexe: response.data.sexe,
      terms: response.data.terms,
    });
  });
}

onSubmit() {
  this.itemService
    .update('id', {
      username: this.f2.value.username ?? '',
      password: this.f2.value.password ?? '',
      confirmation: this.f2.value.confirmation ?? '',
      country: this.f2.value.country ?? '',
      email: this.f2.value.email ?? '',
      sexe: this.f2.value.sexe ?? '',
      terms: this.f2.value.terms ?? false,
    })
    .subscribe((response) => {
      console.log(response);
    });
}
}
