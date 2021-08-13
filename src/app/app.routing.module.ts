import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { FormContactComponent } from "./contacts/form/form.component";
import { ContactsComponent } from "./contacts/list/contacts.component";
const routes:Routes=[
    {
        path:'',
        component:ContactsComponent,
        pathMatch:'full'
    },
    {
        path:'contact/:id',
        component:FormContactComponent 
    },
    {
        path:'**',
        redirectTo:''
    }
]
@NgModule({
    imports:[
        RouterModule.forRoot(routes)
    ],
    exports:[
        RouterModule
    ]
})
export class AppRoutingModule{} 