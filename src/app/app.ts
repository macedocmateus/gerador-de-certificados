import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from "./components/navbar/navbar";



import { BaseUi } from "./components/base-ui/base-ui";
import { CertificadoService } from './services/certificado.service';




@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, BaseUi],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  protected title = 'gerador-certificado';
  exibeNavbar: boolean = true;

  constructor(private certificadoService: CertificadoService) {}

  ngOnInit(): void {
    const certificados = localStorage.getItem('certificados')
    this.certificadoService.certificados = certificados ? JSON.parse(certificados) : []
    console.log(this.certificadoService.certificados)
  }
}
