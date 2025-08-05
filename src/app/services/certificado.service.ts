import { Injectable } from '@angular/core';
import { ICertificado } from '../interface/certificado';

@Injectable({
  providedIn: 'root'
})
export class CertificadoService {

  certificados: ICertificado[] = []

  constructor() { }

  adicionarCertificado(certificado: ICertificado) {
    this.certificados.push({... certificado})
    console.log(this.certificados)
    localStorage.setItem('certificados', JSON.stringify(this.certificados))
  }
}
