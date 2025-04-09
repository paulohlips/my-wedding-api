import { Guest } from "../../business/entity/guest";
import { IGuestRepository } from "../../business/repository/IGuestRepository";
import { GuestModel } from "../models/GuestModel";

export class GuestRepository implements IGuestRepository {
  async findAll(): Promise<Guest[] | undefined> {
    try {
      const result = await GuestModel.scan().exec();
      return result;
    } catch (error) {
      console.error(`Error on repository: ${error}`);
    }
  }

  async findOne(token: String): Promise<Guest | undefined> {
    try {
      const result = (await GuestModel.query("token")
        .eq(token)
        .exec()) as unknown as Guest;
      console.log(result);
      return result;
    } catch (error) {
      console.error(`Error on repository: ${error}`);
    }
  }

  async create(guest: Guest): Promise<Guest | undefined> {
    try {
      return await GuestModel.create(guest);
    } catch (error) {
      console.error(`Error on repository: ${error}`);
    }
  }

  async confirmPresente(token: string, isConfirmed: boolean): Promise<void> {
    try {
      await GuestModel.update({ token }, { isConfirmed });
    } catch (error) {
      console.error(`Error on repository: ${error}`);
    }
  }
}
