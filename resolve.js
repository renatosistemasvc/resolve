import { Component, OnInit }    from '@angular/core';
import {SeuService}           from './seuService';
import {Router, 
ActivatedRoute, Resolve,
ActivatedRouteSnapshot}         from '@angular/router';
import {Observable}             from 'rxjs/Rx';

@Component({

  templateUrl: "./home.component.html"    

})
export class HomeComponent implements OnInit, Resolve<any> {

  constructor(private seuService:SeuService, private route: ActivatedRoute) { }

  //este método será executando antes do componente ser renderizado
  resolve(route: ActivatedRouteSnapshot): Observable<any> {
                
      return this.seuService.getSeusDados();
  }
    
  //o método ngOnInit receberá o retorno do médoto resolve  
  ngOnInit(){
 
        if(this.route.snapshot.data['dados'])
        {
            console.log(this.route.snapshot.data['dados']);
        }
        
    }


}