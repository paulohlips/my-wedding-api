import { z } from "zod";
import { ConfirmGuestPresencesUseCase } from "../../business/usecase/guest/confirmGuestPresenceUseCase";
import { HttpOutput } from "../../utils/httpOutput";

const inputSchema = z.object({
  token: z
    .string()
    .length(6)
    .regex(/^[A-Z0-9]+$/, "Invalid token format"),
  isConfirmed: z.boolean(),
});

export class ConfirmGuestPresenceController {
  constructor(private readonly useCase: ConfirmGuestPresencesUseCase) {}
  async exec(token: string, isConfirmed: boolean): Promise<HttpOutput> {
    try {
      inputSchema.parse({ token, isConfirmed });
      const result = await this.useCase.run(token, isConfirmed);

      return {
        statusCode: 200,
        body: JSON.stringify({
          guest: token,
          isConfirmed,
        }),
      };
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
