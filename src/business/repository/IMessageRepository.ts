import { Message } from "../entity/message";

export interface IMessageRepository {
  create(input: Message): Promise<void>;
  findAll(): Promise<Message[]>;
}
