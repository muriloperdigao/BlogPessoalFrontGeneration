import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    if(environment.token == ''){
      alert('Sua sessão expirou. Faça o login novamente.')
      // caso o token esteja vazio pela atualização da página o usuário será direcionado à página de entrar pela rota
      this.router.navigate(['/entrar'])
    }
  }

}
