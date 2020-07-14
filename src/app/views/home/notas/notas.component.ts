import { Component, OnInit } from '@angular/core';
import { NotaService } from 'src/app/shared/service/nota.service';

@Component({
  selector: 'app-notas',
  templateUrl: './notas.component.html',
  styleUrls: ['./notas.component.css']
})
export class NotasComponent implements OnInit {

  constructor( public notaService: NotaService ) { }
  
  ngOnInit(): void {
  }

}
