import { Component, Input, OnInit } from '@angular/core';
import { users } from '../model/users'

@Component({
  selector: 'spa-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  addUsers:  boolean = false;

  listaUsers: users[] = [
    { foto: '../../assets/FotoPerfil.jpg', nome: 'Jorge', email: 'Jorge@yahoo.com.br', contato: 'prediosvirtuais.com.br', data: '12/12/2020' },
    { foto: '../../assets/Mulher1.jpg', nome: 'Maria', email: 'Maria@gmail.com.br', contato: 'prediosvirtuais.com.br', data: '9/12/2020' },
    { foto: '../../assets/woman.jpg', nome: 'Margarida', email: 'Margarida@yahoo.com.br', contato: '', data: '12/11/2020' },
    { foto: '../../assets/Homem1.jpg', nome: 'Pedro', email: 'Pedro@gmail.com.br', contato: '', data: '11/11/2020' }
  ];

  ngOnInit(): void {
    
  }

  adicionarUsuarios(){
    this.addUsers = true;
  }

}
