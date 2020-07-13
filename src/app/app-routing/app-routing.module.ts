import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemlistComponent } from '../itemlist/itemlist.component';
import { PruebaInicialComponent } from '../prueba-inicial/prueba-inicial.component';
import { ConsumerComponent } from '../consumer/consumer.component';

const routes: Routes = [
    {
        path: '',
        component: PruebaInicialComponent,
    },
    {
      path: 'tablaprueba',
      component: ItemlistComponent,
    },
    {
      path: 'apinode',
      component: ConsumerComponent,
    },
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ],
    declarations: []
})
export class AppRoutingModule { }
