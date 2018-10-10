import { Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {

    public contactForm : FormGroup;


  constructor(private fb: FormBuilder) {
      this.createForm();
  }

  createForm() {
      this.contactForm = this.fb.group({
          surname: ['', Validators.required],
          name: ['', Validators.required],
          email: ['', Validators.email],
          phone: ['', Validators.required],
          message: ['', Validators.required],
      });
  }

    onSubmit() {
        const {name, email, message} = this.contactForm.value;
        const date = Date();
        const html = `
      <div>From: ${name}</div>
      <div>Email: <a href="mailto:${email}">${email}</a></div>
      <div>Date: ${date}</div>
      <div>Message: ${message}</div>
    `;
        const formRequest = { name, email, message, date, html };
        this.contactForm.reset();
    }

  ngOnInit() {
  }
}
