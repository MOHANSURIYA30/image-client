import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ImageService } from '../services/image.service';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css']
})
export class SearchResultsComponent {

  name:any;
  imageList:any =[];
  enviroment:any = environment;

constructor(private route: ActivatedRoute,private imageService:ImageService) {
  this.route.params.subscribe(params => {
    this.name = params['name'];
    console.log(this.name);
    this.imageService.searchImage(this.name).subscribe((res: any) => {
      if (res.error_code == 0) {
          this.imageList = res.data; 
          console.log(this.imageList);
            
      }
  })
    
  });

}





}
