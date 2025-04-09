export class Message {
  author!: string;
  date!: Date;
  message!: string;
  isApproved!: boolean;
}

export type MessageInput = Omit<Message, "id" | "isApproved">;
