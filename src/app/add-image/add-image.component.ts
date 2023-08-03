import { Component, OnInit } from '@angular/core';
import { ImageService } from '../services/image.service';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-image',
  templateUrl: './add-image.component.html',
  styleUrls: ['./add-image.component.css']
})
export class AddImageComponent implements OnInit  {
popup:any = false;   
imageList:any =[];
enviroment:any = environment;
URL:any;
image:any;
name:any;
constructor(private imageService:ImageService,private router:Router) { }

ngOnInit(): void {
  this.get();
}

showPopup()
{
  this.popup = true;
}

closePopup()
{
  this.popup = false;
}

get()
  {
    this.imageService.getImages().subscribe((res: any) => {
      if (res.error_code == 0) {
          this.imageList = res.data; 
          console.log(this.imageList);
            
      }
  })
  }



  delete(id:any)
  {
    this.imageService.deleteImage(id).subscribe((res: any) => {
      if (res.error_code == 0) {
            this.get()
      }
  })
  }

  onFileSelected(event: any): void {
    if (event.target.files.length > 0) {
        const reader = new FileReader();
        reader.readAsDataURL(event.target.files[0]);
        reader.onloadend = (e: any) => {
            this.URL = e.target['result'];
        };
        this.image = event.target.files[0];
        console.log(this.image);      
    }
   } 

createImage()
   {
    const formData = new FormData();
    formData.append('file', this.image);

    this.imageService.createImage(formData).subscribe((res: any) => {
      if (res?.error_code == 0) {
         this.get();
      } 
      this.closePopup()
     })
   }
 
   showSearch(name:any = "")
   {
    console.log(name);
    
    this.router.navigate(['/search-result', name])
   }

}
