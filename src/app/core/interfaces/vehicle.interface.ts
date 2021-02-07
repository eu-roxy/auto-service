export interface VehicleInterface {
  id: number;
  clientId: number;
  model: string;
  year: number;
  km: number;
  image: string;
  brand?: string;
  color?: string;
}
