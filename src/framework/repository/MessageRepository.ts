import { Message } from "../../business/entity/message";
import { IMessageRepository } from "../../business/repository/IMessageRepository";
import { MessageModel } from "../models/MessageModel";

export class MessageRepository implements IMessageRepository {
  async create(input: Message): Promise<void> {
    try {
      await MessageModel.create(input);
    } catch (error) {
      console.error(`Error on repository: ${error}`);
      throw new Error("Error on MessageRepository.create");
    }
  }

  async findAll(): Promise<Message[]> {
    try {
      return await MessageModel.scan().exec();
    } catch (error) {
      console.error(`Error on repository: ${error}`);
      throw new Error("Error on MessageRepository.findAll");
    }
  }
}
