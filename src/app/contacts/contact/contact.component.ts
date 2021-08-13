import { Component, Input } from "@angular/core";
import { Router } from "@angular/router";
import { Agency } from "../agency/agency";

@Component({
    selector:'contact-app',
    templateUrl:'./contact.component.html',
    styleUrls:['./contact.component.scss']
})
export class ContactComponent {
    @Input() contact:Agency={
        id:0,
        agencia:'',
        departamento:'',
        direccion:'',
        distrito:''
    }

  
}