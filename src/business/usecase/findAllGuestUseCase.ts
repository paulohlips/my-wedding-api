import { Guest } from "../entity/guest";
import { IGuestRepository } from "../repository/IGuestRepository";

export class FindAllGuestsUseCase {
  constructor(private readonly guestRepository: IGuestRepository) {}

  async run(): Promise<Guest[] | undefined> {
    console.log(`Starting FindAllGuestsUseCase`);
    try {
      return await this.guestRepository.findAll();
    } catch (error) {
      console.error(`Error on FindAllGuestsUseCase: ${error}`);
    }
  }
}
