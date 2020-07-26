import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Languages } from '../../pastebin';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-model-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateModelComponent {
  readonly languages: string[] = Languages;

  myForm: FormGroup;

  constructor(
   public activeModal: NgbActiveModal,
   private formBuilder: FormBuilder
  ) {
    this.createForm();
  }

  createForm() {
    this.myForm = this.formBuilder.group({
      title: '',
      language: '',
      paste: ''
    });
  }

  submitForm() {
    this.activeModal.close(this.myForm.value);
  }

  onClose() {
    this.activeModal.dismiss();
  }
}
