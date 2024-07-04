import { Component } from '@angular/core';
import { ItemPost } from '../../../types';
import { ItemsService } from '../items.service';
import { CommonModule } from '@angular/common';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-create-item',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './createItem.component.html',
  styleUrl: './createItem.component.css',
})

export class CreateItemComponent {
  f2 = new FormGroup({
    username: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(20),
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(100),
    ]),
    confirmation: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(100),
    ]),
    country: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(20),
    ]),
    email: new FormControl('', [
      Validators.required,
      Validators.email,
    ]),
    sexe: new FormControl('', [
      Validators.required,
    ]),
    terms: new FormControl(false, [
      Validators.required,
      Validators.requiredTrue,
    ]),
  });
  get username() {
    return this.f2.get('username');
  }
  get password() {
    return this.f2.get('password');
  }
  get confirmation() {
    return this.f2.get('confirmation');
  }
  get country() {
    return this.f2.get('country');
  }
  get email() {
    return this.f2.get('email');
  }
  get sexe() {
    return this.f2.get('sexe');
  }
  get terms() {
    return this.f2.get('terms');
  }
  constructor(private itemService: ItemsService) { }
  onSubmit() {
    console.log(this.f2.value); // log form value
    console.log(this.f2.errors); // log form errors

    this.itemService
      .store({
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