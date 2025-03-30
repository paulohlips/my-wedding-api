import { APIGatewayEvent } from "aws-lambda";
import { findGuestByIdController } from "../../../controller/guest/findGuestByIdController";
import { HttpOutput } from "../../../utils/httpOutput";

export const handler = async (event: APIGatewayEvent): Promise<HttpOutput> => {
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
