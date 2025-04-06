import "../../infra/beforeAll";
import { makeFindGuestByTokenController } from "../../infra/di/guestDI";
import { APIGatewayEvent } from "aws-lambda";
import { HttpOutput } from "../../../utils/httpOutput";

export const handler = async (event: APIGatewayEvent): Promise<HttpOutput> => {
  const guestToken = event.pathParameters?.token as string;
  const controller = makeFindGuestByTokenController();
  const response = await controller.exec(guestToken);
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: response,
    }),
  };
};
