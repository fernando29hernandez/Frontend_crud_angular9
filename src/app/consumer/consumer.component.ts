import { Component, OnInit, ViewEncapsulation, ChangeDetectorRef } from '@angular/core';
import { ApiService } from '../api.service';
import { Cases } from '../cases';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
@Component({
  selector: 'app-consumer',
  templateUrl: './consumer.component.html',
  styleUrls: ['./consumer.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ConsumerComponent implements OnInit {
  elementos: Cases[];
  generos: string[] = ['masculino', 'femenino'];
  selectedIndex = 0;
  selectedelement: Cases = {
    _id: null,
    name: null,
    gender: null,
    age: null,
    address: null,
    city: null,
    country: null,
    status: null,
    updated: null,
  };
  viewelement: Cases = {
    _id: null,
    name: null,
    gender: null,
    age: null,
    address: null,
    city: null,
    country: null,
    status: null,
    updated: null,
  };
  selectelement = false;
  displayedColumns: string[] = ['_id', 'name', 'gender', 'country', 'Acciones'];
  dataSource = new MatTableDataSource(this.elementos);
  constructor(private apiService: ApiService, private changeDetectorRefs: ChangeDetectorRef) { }
  ngOnInit() {
    this.obtenerdatos();
  }
  obtenerdatos() {
    this.apiService.getall().subscribe((elementos: Cases[]) => {
      this.elementos = elementos;
      this.dataSource.data = elementos;
      console.log(this.elementos);
    });
  }
  clear() {
    this.selectedelement = {
      _id: null,
      name: null,
      gender: null,
      age: null,
      address: null,
      city: null,
      country: null,
      status: null,
      updated: null,
    };
  }
  createOrUpdate(form: any) {
    if (this.selectedelement && this.selectedelement._id) {
      form.value.id = this.selectedelement._id;
      this.apiService.update(this.selectedelement._id, form.value).subscribe((elemento: Cases) => {
        console.log('elemento actualizado', elemento);
      });
    } else {
      this.apiService.insert(form.value).subscribe((elemento: Cases) => {
        console.log('elemento creado', elemento);
      });
    }
    this.clear();
    this.obtenerdatos();
    this.selectedIndex = 0;
    this.close();

  }

  select(elemento: Cases) {
    this.selectedelement = elemento;
    this.selectedIndex = 1;
  }
  view(elemento: Cases) {
    this.selectelement = true;
    this.viewelement = elemento;
  }
  close() {
    this.selectelement = false;
    this.viewelement = null;
  }
  delete(id: number) {
    this.apiService.delete(id).subscribe((elemento: Cases) => {
      console.log('elemento eliminado', elemento);
    });
    this.obtenerdatos();
  }
}
