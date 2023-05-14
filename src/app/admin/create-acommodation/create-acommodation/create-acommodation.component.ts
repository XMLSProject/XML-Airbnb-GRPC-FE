import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Acommodation } from '../../model/AcommodationModel';
import { AcommodationService } from '../../service/acommodation.service';

@Component({
  selector: 'app-create-acommodation',
  templateUrl: './create-acommodation.component.html',
  styleUrls: ['./create-acommodation.component.css']
})
export class CreateAcommodationComponent {

  public acommodation: Acommodation = new Acommodation;

  features = new FormControl('');
  featureList: string[] = ['Klima', 'Parking', 'Wi-fi', 'Sef', 'Terasa', 'Pet-friendly', 'Zurke', 'Podno grejanje', 'Kada', 'Dozvoljeno pusenje'];

  constructor(private acommodationService: AcommodationService) {}

  public createNewAcommodation(acommodation: Acommodation){
    console.log(acommodation);
    this.acommodationService.createAcommodation(acommodation).subscribe(res => {
      this.acommodation = res;
      console.log(acommodation);
    })
  }

}


