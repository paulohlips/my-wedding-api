import { Guest } from "../entity/guest";
import { IGuestRepository } from "../repository/IGuestRepository";

export class ConfirmGuestPresencesUseCase {
  constructor(private readonly guestRepository: IGuestRepository) {}

  async run(token: string, isConfirmed: boolean): Promise<void> {
    console.log(`Starting ConfirmGuestPresencesUseCase`);
    try {
      return await this.guestRepository.confirmPresente(token, isConfirmed);
    } catch (error) {
      console.error(`Error on ConfirmGuestPresencesUseCase: ${error}`);
      throw new Error(
        "Server error whitle trying to process ConfirmGuestPresencesUseCase"
      );
    }
  }
}
