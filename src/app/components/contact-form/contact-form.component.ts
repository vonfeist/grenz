import { Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {
  form: FormGroup;
  itemsRef: AngularFireList<any>;

  constructor( private fb: FormBuilder, private af: AngularFireDatabase ) {
    this.createForm();
    this.itemsRef = this.af.list('/messages');

  }

  createForm() {
    this.form = this.fb.group({
        name: ['', Validators.required],
        email: ['', Validators.required],
        message: ['', Validators.required],
    });
  }

  ngOnInit() {
  }

  processForm() {
      const {name, email, message} = this.form.value;
      const date = Date();
      const html = `
      <div>Von: ${name}</div>
      <div>Email: <a href="mailto:${email}">${email}</a></div>
      <div>Datum: ${date}</div>
      <div>Nacricht: ${message}</div>
    `;
      let formRequest = { name, email, message, date, html };
      this.itemsRef.push(formRequest);
      this.form.reset();
  }
}
