import { Component } from '@angular/core';
import { PrimaryButton } from "../../components/primary-button/primary-button";
import { SecondaryButton } from "../../components/secondary-button/secondary-button";
import { FormsModule, NgModel } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Certificado } from '../../interface/certificado';


@Component({
  selector: 'app-certificado-form',
  imports: [PrimaryButton, SecondaryButton, FormsModule, CommonModule],
  templateUrl: './certificado-form.html',
  styleUrl: './certificado-form.css'
})
export class CertificadoForm {
  certificado: Certificado = {
    nome: '',
    atividades: []
  };
  atividade: string = '';
  campoInvalido(control: NgModel) {
    return control.invalid && control.touched
  }

  adicionarAtividade() {
    this.certificado.atividades.push(this.atividade);
    this.atividade = '';
  }

  excluirAtividade(index: number) {
    this.certificado.atividades.splice(index, 1);
  }

  formValido() {
    return this.certificado.atividades.length > 0 && this.certificado.nome.length > 0
  }

  submit() {
    if (!this.formValido()) {
      return
    }
    console.log(this.certificado)
  }
}
