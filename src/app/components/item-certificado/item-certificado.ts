import { Component, Input } from '@angular/core';
import { SecondaryButton } from "../secondary-button/secondary-button";
import { Router } from '@angular/router';

@Component({
  selector: 'app-item-certificado',
  imports: [SecondaryButton],
  templateUrl: './item-certificado.html',
  styleUrl: './item-certificado.css'
})
export class ItemCertificado {
  @Input() nomeAluno: string = '';
  @Input() dataEmissao: string = '';
  @Input() id: string = '';

  constructor(private router: Router) { }

  redirecionaCertificado() {
    // Outra alternativa para redirecionar o usuário
    // this.router.navigateByUrl('/certificado' + this.id);

    this.router.navigate(['/certificado', this.id])
  }
}
