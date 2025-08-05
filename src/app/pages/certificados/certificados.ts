import { Component, OnInit } from '@angular/core';

import { SecondaryButton } from "../../components/secondary-button/secondary-button";
import { RouterLink } from '@angular/router';
import { ItemCertificado } from '../../components/item-certificado/item-certificado';
import { CertificadoService } from '../../services/certificado.service';
import { ICertificado } from '../../interface/certificado';




@Component({
  selector: 'app-certificados',
  imports: [ ItemCertificado, SecondaryButton, RouterLink],
  templateUrl: './certificados.html',
  styleUrl: './certificados.css'
})
export class Certificados implements OnInit {

  certificados: ICertificado [] = [];
  
  constructor(private certificadoService: CertificadoService) {}

  ngOnInit(): void {
    this.certificados = this.certificadoService.certificados
    console.log(this.certificados)
  }
}
