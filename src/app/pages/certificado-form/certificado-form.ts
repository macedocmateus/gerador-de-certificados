import { Component, ViewChild } from '@angular/core';
import { PrimaryButton } from "../../components/primary-button/primary-button";
import { SecondaryButton } from "../../components/secondary-button/secondary-button";
import { FormsModule, NgForm, NgModel } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ICertificado } from '../../interface/certificado';
import { CertificadoService } from '../../services/certificado.service';
import {v4 as uuidv4} from 'uuid'


@Component({
  selector: 'app-certificado-form',
  imports: [PrimaryButton, SecondaryButton, FormsModule, CommonModule],
  templateUrl: './certificado-form.html',
  styleUrl: './certificado-form.css'
})

export class CertificadoForm {
  
  constructor(private certificadoService: CertificadoService) {}
  @ViewChild('form') form!: NgForm
  
  certificado: ICertificado = {
    id: '',
    nome: '',
    atividades: [],
    dataEmissao: ''
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
    this.certificado.dataEmissao = this.dataAtual()
    this.certificado.id = uuidv4()
    this.certificadoService.adicionarCertificado(this.certificado)

    // Limpa todos os campos de preenchimentos após o envio
    this.certificado = this.limparForm()
    this.form.resetForm()
  }

  limparForm(): ICertificado {
    return {
      id: '',
      nome: '',
      atividades: [],
      dataEmissao: ''
    }
  }

  dataAtual() {
    const dataAtual = new Date();
    const dia = String(dataAtual.getDate()).padStart(2, '0');
    const mes = String(dataAtual.getMonth() + 1).padStart(2, '0');
    const ano = dataAtual.getFullYear();

    const dataFormatada = `${dia}/${mes}/${ano}`;
    return dataFormatada
  }
}
