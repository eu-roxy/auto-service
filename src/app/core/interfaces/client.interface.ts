import { VehicleInterface } from './vehicle.interface';

export interface ClientInterface {
  firstName: string;
  lastName: string;
  id: number;
  email: string;
  address: string;
  vehicles: VehicleInterface[];
}
