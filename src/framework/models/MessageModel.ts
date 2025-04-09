import { v4 as uuid } from "uuid";
import dynamoose from "../infra/database";
import { Message } from "../../business/entity/message";
import { Item } from "dynamoose/dist/Item";

interface MessageItem extends Item, Message {}
const MessageSchema = new dynamoose.Schema({
  id: {
    type: String,
    default: uuid(),
    hashKey: true,
  },
  author: String,
  date: Date,
  message: String,
  isApproved: Boolean,
});

export const MessageModel = dynamoose.model<MessageItem>(
  "Message",
  MessageSchema
);
