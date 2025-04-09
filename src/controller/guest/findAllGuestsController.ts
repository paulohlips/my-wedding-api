import { FindAllGuestsUseCase } from "../../business/usecase/guest/findAllGuestUseCase";

export class FindAllGuestsController {
  constructor(private readonly useCase: FindAllGuestsUseCase) {}
  async exec() {
    try {
      const result = await this.useCase.run();
      return result;
    } catch (error) {
      console.error(`Unexpected error: ${error}`);
      return {
        statusCode: 500,
        body: "Unexpected error",
      };
    }
  }
}
