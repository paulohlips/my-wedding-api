import { z } from "zod";
import { FindGuestByTokenUseCase } from "../../business/usecase/guest/findGuestByTokenUseCase";

const guestToken = z
  .string()
  .length(6, { message: "Token must be exactly 6 characters" })
  .regex(/^[A-Z0-9]{6}$/, {
    message: "Token must be uppercase letters and digits only",
  });

export class FindGuestByTokenController {
  constructor(private readonly useCase: FindGuestByTokenUseCase) {}
  async exec(token: string) {
    try {
      guestToken.parse(token);
      console.log({ token });
      const result = await this.useCase.run(token);
      return result;
    } catch (error) {
      if (error instanceof z.ZodError) {
        console.error(`Validation failed: , ${JSON.stringify(error.issues)}`);
        return {
          statusCode: 400,
          body: `Validation failed: , ${JSON.stringify(error.issues)}`,
        };
      } else {
        console.error(`Unexpected error: ${error}`);
        return {
          statusCode: 500,
          body: "Unexpected error",
        };
      }
    }
  }
}
