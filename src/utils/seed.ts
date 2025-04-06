import dynamoose from "dynamoose";
import { faker } from "@faker-js/faker";
import { v4 as uuid } from "uuid";

// Connect to DynamoDB Local
dynamoose.aws.ddb.local("http://localhost:8000");

// Define the Guest Schema
const GuestSchema = new dynamoose.Schema(
  {
    id: {
      type: String,
      default: uuid,
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

// Create the model
const Guest = dynamoose.model("Guest", GuestSchema);

// Generate random 6-char token
const generateToken = (): string =>
  Array.from({ length: 6 }, () =>
    Math.random().toString(36)[2].toUpperCase()
  ).join("");

// Seed function
async function seedGuests(count: number = 10) {
  const guests = Array.from({ length: count }).map(() => ({
    name: faker.person.fullName(),
    phoneNumber: faker.phone.number(),
    token: generateToken(),
    isConfirmed: faker.datatype.boolean(),
  }));

  await Promise.all(guests.map((g) => Guest.create(g)));

  console.log(`${count} guests seeded 🎉`);
}

seedGuests().catch(console.error);
