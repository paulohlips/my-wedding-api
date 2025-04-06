import { Guest } from "../entity/guest";

export interface IGuestRepository {
  findAll(): Promise<Guest[] | undefined>;
  findOne(id: String): Promise<Guest | undefined>;
  create(geust: Guest): Promise<Guest | undefined>;
  confirmPresente(token: string, isConfirmed: boolean): Promise<void>;
}
