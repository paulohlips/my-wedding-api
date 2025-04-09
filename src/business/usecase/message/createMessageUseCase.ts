import { Message, MessageInput } from "../../entity/message";
import { IMessageRepository } from "../../repository/IMessageRepository";

export class CreateMessageUseCase {
  constructor(private readonly messageRepository: IMessageRepository) {}

  async run(message: MessageInput): Promise<void> {
    try {
      console.log(
        `Starting CreateMessageUseCase: message: ${JSON.stringify(message)}`
      );

      await this.messageRepository.create(message);
    } catch (error) {
      throw new Error(
        "Server error while trying to process CreateMessageUseCase"
      );
    }
  }
}
