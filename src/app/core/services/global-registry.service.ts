import { Injectable } from '@angular/core';
import { UserInterface } from './../interfaces/user.interface';


@Injectable({
  providedIn: 'root'
})
export class GlobalRegistryService {
  public loggedUser: UserInterface;
  public currentClientId: number;

}
