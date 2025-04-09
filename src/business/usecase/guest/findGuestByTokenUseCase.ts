import { Guest } from "../../entity/guest";
import { IGuestRepository } from "../../repository/IGuestRepository";

export class FindGuestByTokenUseCase {
  constructor(private readonly guestRepository: IGuestRepository) {}

  async run(token: string): Promise<Guest | undefined> {
    console.log(`Starting FindGuestByTokenUseCase`);
    try {
      return await this.guestRepository.findOne(token);
    } catch (error) {
      throw new Error(
        "Server error while trying to process FindGuestByTokenUseCase"
      );
    }
  }
}
