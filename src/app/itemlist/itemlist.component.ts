import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
@Component({
  selector: 'app-itemlist',
  templateUrl: './itemlist.component.html',
  styleUrls: ['./itemlist.component.scss']
})
export class ItemlistComponent implements OnInit {
  title = 'Listado de Prueba';
  date: Date = new Date();
  simpleDate: string;
  discount = 20;
  items: any[] = [
    { id: 1, name: 'iPhone', desc: 'Refurbished iPhone X 2019', price: 200 },
    { id: 2, name: 'iPhone Pro', desc: 'The latest iPhone series', price: 999 },
    { id: 3, name: 'Samsung A50', desc: 'The latest Samsung Galaxy S series in 2020', price: 550 },
    { id: 4, name: 'Prueba 6', desc: 'The latest Nokia phone in 2020', price: 899 },
  ];
  selected: string;
  constructor(private datePipe: DatePipe) { }
  updateDate() {
    this.date = new Date();
    this.simpleDate = this.datePipe.transform(this.date, 'short');
  }
  selectData(item: any) {
    alert(`ID: ${item.id}, Name: ${item.name}, Desc: ${item.desc}, Price: ${item.price}`);
  }
  hoverRow(event: any) {
    this.selected = event.target.innerText;
  }
  ngOnInit(): void {
  }

}
