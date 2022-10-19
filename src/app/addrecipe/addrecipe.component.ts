import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-addrecipe',
  templateUrl: './addrecipe.component.html',
  styleUrls: ['./addrecipe.component.css']
})
export class AddrecipeComponent implements OnInit {

  constructor(private myapi:ApiService) { }

  status:boolean=false

  name=""
  description=""
  category=""
  date=""

  readvalue=()=>{
    let data={
      "name":this.name,
      "description":this.description,
      "category":this.category,
      "date":this.date
    }
    console.log(data)
    this.myapi.addrecipe(data).subscribe(
      (response)=>{
        console.log(response)
        alert("Recipe added successfully")
        this.name=""
        this.description=""
        this.category=""
        this.date=""
        this.status=true
      }
    )
  }

  ngOnInit(): void {
  }

}
