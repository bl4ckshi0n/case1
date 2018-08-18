import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
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
