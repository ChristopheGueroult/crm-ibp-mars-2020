import { StateClient } from '../enums/state-client.enum';
import { ClientI } from '../interfaces/client-i';

export class Client implements ClientI {
  state = StateClient.ACTIVE;
  tva = 20;
  id!: number;
  name!: string;
  totalCaHt = 0;
  comment!: string;
  constructor(param?: Partial<Client>) {
    if (param) {
      Object.assign(this, param);
    }
  }
}
