import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-viewallrecipe',
  templateUrl: './viewallrecipe.component.html',
  styleUrls: ['./viewallrecipe.component.css']
})
export class ViewallrecipeComponent implements OnInit {

  constructor(private myapi:ApiService) { 
    this.fetchData()
  }

  fetchData=()=>{
    this.myapi.viewrecipe().subscribe(
      (data)=>{
        this.recipeData=data
      }
    )
  }

  recipeData:any=[]

  ngOnInit(): void {
  }

}
