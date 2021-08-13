import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { ContactComponent } from "./contact/contact.component";
import { FormContactComponent } from "./form/form.component";
import { ContactsComponent } from "./list/contacts.component";

@NgModule({
    declarations:[
        ContactsComponent,
        ContactComponent,
        FormContactComponent
    ],
    exports:[
        ContactsComponent,
    ],
    imports:[
        CommonModule,
        FormsModule
    ]
})
export class ContactModule{}