import { z } from "zod";
import { FindGuestByTokenUseCase } from "../../business/usecase/findGuestByTokenUseCase";

const GuestIdChema = z
  .string()
  .length(6, { message: "Token must be exactly 6 characters" })
  .regex(/^[A-Z0-9]{6}$/, {
    message: "Token must be uppercase letters and digits only",
  });

export class FindGuestByTokenController {
  constructor(private readonly useCase: FindGuestByTokenUseCase) {}
  async exec(token: string) {
    try {
      GuestIdChema.parse(token);
      console.log({ token });
      const result = await this.useCase.run(token);
      return result;
    } catch (error) {
      if (error instanceof z.ZodError) {
        return `Validation failed: , ${JSON.stringify(error.issues)}`;
      } else {
        return `Unexpected error: ${error}`;
      }
    }
  }
}
