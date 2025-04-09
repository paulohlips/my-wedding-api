import { Message, MessageInput } from "../entity/message";

export interface IMessageRepository {
  create(input: MessageInput): Promise<void>;
  findAll(): Promise<Message[]>;
}
