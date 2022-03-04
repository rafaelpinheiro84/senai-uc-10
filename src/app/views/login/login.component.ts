import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from 'src/app/models/login';
import { LoginService } from 'src/app/services/login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private loginService: LoginService) { }

  ngOnInit(): void {
  }


  loginModel = new Login();

  mensagem = "";

  onSubmit() {
     console.log("modelo:", this.loginModel)


    const listaPalavras: string[] = ["select ", "from ", "drop ", "or ", "having", "group", "by", "insert", "exec", "\"", "\'", "--", "#", "*", ";"]

    listaPalavras.forEach(palavra => {
      if (this.loginModel.email.toLowerCase().includes(palavra)) {
        this.mensagem = "Dados inválidos: " + palavra
       

        return;
      }
    });



    this.mensagem = ""
    this.loginService.logar(this.loginModel).subscribe((response) => {
     console.log(response)
     this.router.navigateByUrl("/");
    }, (error) => {
      if (error.error == "Incorrect password")
        this.mensagem = "senha incorreta"
      if (error.error == "Cannot find user")
        this.mensagem = "usuario não encontrado"
      console.log(error)
    })
  }

}
