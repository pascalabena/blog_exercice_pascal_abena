import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    

    
    
    
    posts =[
       
        {
            title :  "Titre 1",
            content : "Contenu 1",
            loveIts : 0,
            created_at  : new Date()         
        },
        
        {
            title :  "Titre 2",
            content : "Contenu 2",
            loveIts : 0,
            created_at  :new Date()      
        }, 
        
        {
            title :  "Titre 3",
            content : "Contenu 3",
            loveIts : 0,
            created_at  :new Date()         
        }, 
        
        {
            title :  "Titre 4",
            content : "Contenu 4",
            loveIts : 0,
            created_at  :new Date()         
        },  
        
        {
            title :  "Titre 5",
            content : "Contenu 5",
            loveIts : 0,
            created_at  :new Date()        
        }  
    
    
    
    ]
    
    constructor(){
       
      
      
    }
    
   
}
