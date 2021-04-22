import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {


  
  private data_countries = "https://corona.lmao.ninja/v2/countries" ;

  constructor(public http : HttpClient) { }

  getGlobalData()
  {
      
          return new Promise ((resolve,reject) =>{
            const  data_all ="https://corona.lmao.ninja/v2/all" ;
            this.http.get(data_all).subscribe((res: any)=>{
            
              resolve(res) ;
             
            })
          })
  }
}
