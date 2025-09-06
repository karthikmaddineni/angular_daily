import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { error } from 'console';

@Component({
  selector: 'app-httpdemooooo',
  imports: [],
  templateUrl: './httpdemooooo.html',
  styleUrl: './httpdemooooo.css'
})
export class Httpdemooooo {
  user_api_url="http://localhost:3000/employees";
  constructor(private httpClient : HttpClient){
    
  }
  ngOnInit(){
    this.fetchUsers();
  }
  fetchUsers(){
    //get method returns obseravble
    //obseravble sends the data into chunks
    this.httpClient.get(this.user_api_url)
                    .subscribe((response)=>{console.log(response)},
                  (error)=>{},
                ()=>{});
//other types of using subscribe
    this.httpClient.get(this.user_api_url)
    .subscribe({
      next:(reponse)=>{console.log(reponse)},
      error:(error)=>{},
      complete:()=>{},
    })
  }
}
