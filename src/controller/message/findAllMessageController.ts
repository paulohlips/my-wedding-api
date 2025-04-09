import { FindAllMessageUseCase } from "../../business/usecase/message/findAllMessageUseCase";
import { HttpOutput } from "../../utils/httpOutput";

export class FindAllMessageController {
  constructor(private readonly useCase: FindAllMessageUseCase) {}

  async exec(): Promise<HttpOutput> {
    try {
      const messages = await this.useCase.run();
      return {
        body: JSON.stringify(messages),
        statusCode: 200,
      };
    } catch (error) {
      console.error(`Unexpected error: ${error}`);
      return {
        body: JSON.stringify({
          message: "Unexpected error",
        }),
        statusCode: 500,
      };
    }
  }
}
