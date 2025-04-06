import { FindAllGuestsUseCase } from "../../business/usecase/findAllGuestUseCase";

export class FindAllGuestsController {
  constructor(private readonly useCase: FindAllGuestsUseCase) {}
  async exec() {
    try {
      const result = await this.useCase.run();
      return result;
    } catch (error) {
      console.error(`Error on FindAllGuestsController: ${error}`);
    }
  }
}
