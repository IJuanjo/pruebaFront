import { Component, Output,EventEmitter, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Agency } from "../agency/agency";
import listAgencyData from "../data/agencias.json";

@Component({
    selector:'form-contact-app',
    templateUrl:'./form.component.html'
})
export class FormContactComponent implements OnInit{
    agency:Agency={
        id:0,
        agencia:'',
        distrito:'',
        direccion:''
    }

    constructor(private activedRouter:ActivatedRoute,private router: Router){}

/*     @Output() updateContact:EventEmitter<Agency> =new EventEmitter();
 */
    ngOnInit(){
        this.activedRouter.params.subscribe(({id})=>{
            const contact=listAgencyData.find(l=>l.id==id);
            this.agency=Object.assign(this.agency,contact)
        })
    }

    update(){
        const listAgency=JSON.parse(localStorage.getItem('data-agencys')!) || [];
        const updateContacts=listAgency.map((c:any)=>{
            if(c.id==this.agency.id){
                c.agencia=this.agency.agencia
            }
            return c;
        })
        localStorage.setItem('data-agencys',JSON.stringify(updateContacts))
        this.router.navigateByUrl('/');
    }
}
