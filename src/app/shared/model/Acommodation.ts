export interface Acommodation {
    availableFrom: Date;
    availableTo: Date;
    benefits: string;
    id: string;
    isPricePerGuest: boolean;
    location: string;
    minGuests: number;
    maxGuests: number;
    name: string;
    photos: string[];
    price: number;
  }