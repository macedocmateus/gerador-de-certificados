import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from "./components/navbar/navbar";
import { PrimaryButton } from "./components/primary-button/primary-button";
import { SecondaryButton } from "./components/secondary-button/secondary-button";
import { ItemCertificado } from "./components/item-certificado/item-certificado";
import { BaseUi } from "./components/base-ui/base-ui";
import { Certificados } from "./pages/certificados/certificados";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, PrimaryButton, SecondaryButton, ItemCertificado, BaseUi, Certificados],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'gerador-certificado';
  exibeNavbar: boolean = true;
}
