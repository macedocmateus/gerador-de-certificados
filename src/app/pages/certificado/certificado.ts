import { Component, OnInit } from '@angular/core';
import { SecondaryButton } from '../../components/secondary-button/secondary-button';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CertificadoService } from '../../services/certificado.service';
import {ICertificado} from '../../interface/certificado'

@Component({
  selector: 'app-certificado',
  imports: [SecondaryButton, RouterLink],
  templateUrl: './certificado.html',
  styleUrl: './certificado.css'
})
export class Certificado implements OnInit {
  id: string | null = null
  certificado: ICertificado | undefined

  constructor(private certificadoService: CertificadoService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id')
      this.certificado = this.certificadoService.certificados.find(item => item.id == this.id)
    })
  }
}
