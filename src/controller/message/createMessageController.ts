import { z } from "zod";
import { CreateMessageUseCase } from "../../business/usecase/message/createMessageUseCase";
import { MessageInput } from "../../business/entity/message";
import { MessageModel } from "../../framework/models/MessageModel";
import { HttpOutput } from "../../utils/httpOutput";

const inputSchema = z.object({
  message: z.string(),
  date: z.string().datetime(),
  author: z.string(),
});

export class CreateMessageController {
  constructor(private readonly useCase: CreateMessageUseCase) {}

  async exec(message: MessageInput): Promise<HttpOutput> {
    try {
      const parsed = inputSchema.parse(message);

      await this.useCase.run({
        message: parsed.message,
        author: parsed.author,
        date: new Date(parsed.date),
      });
      return {
        body: JSON.stringify({
          message: "The message was stored!",
        }),
        statusCode: 200,
      };
    } catch (error) {
      if (error instanceof z.ZodError) {
        console.error(`Validation failed: , ${JSON.stringify(error.issues)}`);
        return {
          body: JSON.stringify({
            message: `Validation failed: , ${JSON.stringify(error.issues)}`,
          }),
          statusCode: 400,
        };
      } else {
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
}
