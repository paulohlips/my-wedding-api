import { z } from "zod";
import { findGuestByIdUseCase } from "../../business/usecase/findGuestByIdUseCase";

const GuestIdChema = z.string().uuid();

export const findGuestByIdController = (id: string) => {
  try {
    const parsedUserBio = GuestIdChema.parse(id);
    console.log("Validation passed: ", parsedUserBio);
    return findGuestByIdUseCase(id);
  } catch (error) {
    if (error instanceof z.ZodError) {
      return `Validation failed: , ${JSON.stringify(error.issues)}`;
    } else {
      return `Unexpected error: ${error}`;
    }
  }
};
