export interface Car {
    id: string;
    modelYear: string;
    url: string;
    media: Media[];
}

interface Media {
    name: string;
    url: string;
}

export interface CarDetail {
    id: string;
    description: string;
    price: string;
    meta: CarMetadata;
}

interface CarMetadata {
    passengers: number;
    drivetrain: string[];
    bodystyles: string[];
    emissions: CarEmisions;
}

interface CarEmisions {
    template: string;
    value: number;
}
