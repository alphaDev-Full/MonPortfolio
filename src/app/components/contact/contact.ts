import { NgClass } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import {
  slideAnimationBotomToTop,
  slideAnimationLeftToRight,
} from '../../animations/animations';
@Component({
  selector: 'app-contact',
  imports: [ReactiveFormsModule, NgClass],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
  animations: [slideAnimationBotomToTop, slideAnimationLeftToRight],
})
export class Contact {
  private fb = inject(FormBuilder);
  isValid = false;

  formGroup = this.fb.group({
    nom: ['', [Validators.required]],
    prenom: ['', [Validators.required]],
    mail: ['', [Validators.required, Validators.email]],
    message: ['', [Validators.required]],
  });

  onSubmit() {
    if (this.formGroup.valid) {
      console.log('Formulaire soumis avec succes');
      console.log(this.formGroup.value);
      this.formGroup.reset();
      this.isValid = true;
      setTimeout(() => {
        this.isValid = false;
      }, 10000);
    }
  }
}
