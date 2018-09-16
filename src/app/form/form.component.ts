import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  formulario: FormGroup;
  constructor(private formbuilder: FormBuilder) { }
  ngOnInit() {
  this.formulario = this.formbuilder.group({
    nome: [''],
    telefone: [''],
    email: [''],
    idade: [''],
    cidade: [''],
    estado: [''],
    usuario: [''],
    senha:   [''],
  });
  }
  onSubmit() {
    console.warn(this.formulario.value);
  }
  }
