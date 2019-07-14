import { Component,Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
   
  @Input() title : string ;
  @Input()content : string ;
  @Input()loveIts : number;
  @Input() created_at =  Date() ;
  
  @Input() numberLoveIt: number=0;
  @Input() numberdontLoveIt: number=0;
  
  loveIt()
  {
      this.loveIts = this.loveIts+1;
      this.numberLoveIt = this.numberLoveIt+1;
      
     console.log("loveIts : " + this.loveIts) ;
     console.log("Number LoveIt :" + this.numberLoveIt) ; 
      
  }
  
  dontLoveIt()
  {
      
      this.loveIts = this.loveIts-1;
      this.numberdontLoveIt = this.numberdontLoveIt+1;
      
      console.log("loveIts :" + this.loveIts) ; 
      console.log("Number dontLoveIt :" + this.numberdontLoveIt) ; 
      
  }
   
  constructor() { }

  ngOnInit() {
  }

}
