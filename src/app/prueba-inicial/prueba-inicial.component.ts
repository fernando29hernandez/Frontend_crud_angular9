import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-prueba-inicial',
  templateUrl: './prueba-inicial.component.html',
  styleUrls: ['./prueba-inicial.component.scss']
})
export class PruebaInicialComponent implements OnInit {
  title = 'Reporte Prueba';
  created: Date = new Date();
  subtitle = '';
  constructor(private datePipe: DatePipe) { }
  salesDate() {
    this.subtitle = `${this.title} of ${this.datePipe.transform(this.created, 'short')}`;
  }
  ngOnInit(): void {
    this.salesDate();
  }
}
