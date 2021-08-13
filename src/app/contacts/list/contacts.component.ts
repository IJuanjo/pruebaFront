import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { Agency } from "../agency/agency";
import listAgencyData from "../data/agencias.json";

@Component({
    selector:'contacts-app',
    templateUrl:'./contacts.component.html',
    styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent {
    listAgency:Agency[]=[]
    constructor(private router:Router){
        this.verfiedData();
    }
    verfiedData(){
        var data=localStorage.getItem('data-agencys');
        if(data){
            this.listAgency=JSON.parse(localStorage.getItem('data-agencys')!) || [];
        }else{
            localStorage.setItem('data-agencys',JSON.stringify(listAgencyData));
            this.listAgency=listAgencyData
        }
    }
    get listContacts():Agency[]{
        return this.listAgency;
    }
    updateContactCurrent(contact:Agency){
        const updateContacts=this.listAgency
        .map(c=>{
            if(c.id==contact.id){
                c.agencia=contact.agencia
            }
            return c;
        })
        this.listAgency=updateContacts;
        localStorage.setItem('data-agencys',JSON.stringify(updateContacts))
    }
    navegateCurrentAgen(id:number){
        this.router.navigateByUrl(`contact/${id}`)
    }
}
