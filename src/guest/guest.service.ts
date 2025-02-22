import { Injectable } from '@nestjs/common';

@Injectable()
export class GuestService {
  findAll() {
    return `This action returns all guest`;
  }

  findOne(id: number) {
    return `This action returns a #${id} guest`;
  }

  confirmPresence(id: number, isConfirmed: boolean) {
    return `This action updates a #${id} guest with confirmation value ${JSON.stringify(isConfirmed)}`;
  }
}
