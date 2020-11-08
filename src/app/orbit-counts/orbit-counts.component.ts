import { Component, OnInit, Input  } from '@angular/core';
import { Satellite } from '../satellite';

@Component({
  selector: 'app-orbit-counts',
  templateUrl: './orbit-counts.component.html',
  styleUrls: ['./orbit-counts.component.css']
})
export class OrbitCountsComponent implements OnInit {  
  @Input() satellites: Satellite[];
    allTypes=['Space Debris','Communication','Probe','Positioning','Space Station','Telescope'];
     

    
  constructor() { }

  ngOnInit() {
  }
      
  countTypes(types: string): number{
     let counter=0;
     for (let i=0;i<this.satellites.length;i++){
        if(this.satellites[i].type.includes(types)){
          counter++;
        }
     }
    
    return counter;
  }
        }
   

