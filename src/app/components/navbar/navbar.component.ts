import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'src/app/interfaces/menu-item';
import { MenuItems } from './MenuItems';
import { CmponentInteractionService } from 'src/app/shared/cmponent-interaction.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit{
  menuItems:MenuItem[]= MenuItems
  constructor(private cis:CmponentInteractionService){

  }
  count:any = 0;
  ngOnInit(): void {
    this.cis.todoAnnounced$.subscribe(value=>{
       this.count = value;
    })
  }
  
}
