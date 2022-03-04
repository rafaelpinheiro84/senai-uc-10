import { Component, OnInit } from '@angular/core';
import { Subscriber } from 'rxjs';
import { Novidades } from 'src/app/models/novidades';
import { NovidadesService } from 'src/app/services/novidades.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

 listaNovidades = [] as Novidades[];
  
  constructor(private novidadesService:NovidadesService) { }

  ngOnInit(): void {
    this.carregarNovidades();
    
  }
  carregarNovidades(){
    this.novidadesService.getNovidades().subscribe((novidadesRecebidas: Novidades[]) => {
      this.listaNovidades = novidadesRecebidas;
    
    })
  }

}
