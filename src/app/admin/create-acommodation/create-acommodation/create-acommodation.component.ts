import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Acommodation } from '../../model/AcommodationModel';
import { AcommodationService } from '../../service/acommodation.service';
import { CreateDTO } from '../../model/CreateDTO';

@Component({
  selector: 'app-create-acommodation',
  templateUrl: './create-acommodation.component.html',
  styleUrls: ['./create-acommodation.component.css']
})
export class CreateAcommodationComponent {

  public acommodation: Acommodation = new Acommodation;
  public createDTO: CreateDTO = new CreateDTO;

  featureList: string[] = ['Klima', 'Parking', 'Wi-fi', 'Sef', 'Terasa', 'Pet-friendly', 'Zurke', 'Podno grejanje', 'Kada', 'Dozvoljeno pusenje'];

  constructor(private acommodationService: AcommodationService) {}

  public createNewAcommodation(createDTO: CreateDTO){

    this.acommodation = {id: createDTO.id ,name : createDTO.name, location: createDTO.location,  benefits: createDTO.benefits, minGuests: createDTO.minGuests, maxGuests : createDTO.maxGuests, photos: createDTO.photos.split(',').map(item => item.trim()), acception: createDTO.acception};

    this.acommodationService.createAcommodation(this.acommodation).subscribe(res => {
      this.acommodation = res;
      console.log(this.acommodation);
    })
  }

}

