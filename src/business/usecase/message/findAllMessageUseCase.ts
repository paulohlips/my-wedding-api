import { Message } from "../../entity/message";
import { IMessageRepository } from "../../repository/IMessageRepository";

export class FindAllMessageUseCase {
  constructor(private readonly messageRepository: IMessageRepository) {}

  async run(): Promise<Message[]> {
    try {
      console.log(`Starting FindAllMessageUseCase`);

      return await this.messageRepository.findAll();
    } catch (error) {
      throw new Error(
        "Server error while trying to process FindAllMessageUseCase"
      );
    }
  }
}
