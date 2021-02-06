import { Injectable } from '@angular/core';
import { UserInterface } from './../interfaces/user.interface';


@Injectable()
export class GlobalRegistryService {
  public loggedUser: UserInterface;
  public test;

}
