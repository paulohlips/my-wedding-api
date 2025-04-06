import { v4 as uuid } from "uuid";
import dynamoose from "../infra/database";
import { Guest } from "../../business/entity/guest";
import { Item } from "dynamoose/dist/Item";

interface GuestItem extends Item, Guest {}
const GuestSchema = new dynamoose.Schema(
  {
    id: {
      type: String,
      default: uuid(),
    },
    name: String,
    phoneNumber: String,
    token: {
      hashKey: true,
      type: String,
    },
    isConfirmed: Boolean,
  },
  {
    timestamps: true,
  }
);

export const GuestModel = dynamoose.model<GuestItem>("Guest", GuestSchema);
