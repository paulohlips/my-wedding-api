import { APIGatewayEvent } from "aws-lambda";
import { findGuestByIdController } from "../../../controller/guest/findGuestByIdController";

export const handler = async (event: APIGatewayEvent): any => {
  const guestId = event.pathParameters?.id;

  if (!guestId) {
    return {
      statusCode: 400,
      body: JSON.stringify({
        message: "Guest Id is required!",
      }),
    };
  }

  const response = findGuestByIdController(guestId);
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: response,
    }),
  };
};
