import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.html'
})
export class Navbar implements OnInit {
  ngOnInit(): void {
    console.log('Meu componente navbar inicializou');
  }
}
