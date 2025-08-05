import { Component } from '@angular/core';

import { SecondaryButton } from "../../components/secondary-button/secondary-button";
import { RouterLink } from '@angular/router';
import { ItemCertificado } from '../../components/item-certificado/item-certificado';


@Component({
  selector: 'app-certificados',
  imports: [ ItemCertificado, SecondaryButton, RouterLink],
  templateUrl: './certificados.html',
  styleUrl: './certificados.css'
})
export class Certificados {
}
