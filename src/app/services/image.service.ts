import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  constructor(private http:HttpClient) { }

  createImage(data: any) {
    return this.http.post(environment.apiUrl+"create-image", data)
   }
  
  getImages(){
    return this.http.get(environment.apiUrl+"get-images")
  }
 
  deleteImage(id:any)
  {
    return this.http.delete(environment.apiUrl+"delete-image/"+ id)
  }

  searchImage(name:any)
  {
    return this.http.get(environment.apiUrl+"search-image/"+name)
  }


}
