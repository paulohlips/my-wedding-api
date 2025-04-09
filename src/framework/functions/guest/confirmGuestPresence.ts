import "../../infra/beforeAll";
import { makeGuestConfirmationController } from "../../infra/di/guestDI";
import { APIGatewayEvent } from "aws-lambda";
import { HttpOutput } from "../../../utils/httpOutput";
import { httpBodyParser } from "../../../utils/httpBodyParser";

export const handler = async (event: APIGatewayEvent): Promise<HttpOutput> => {
  const body = httpBodyParser(event.body);
  const token = body?.token;
  const isConfirmed = body?.isConfirmed as boolean;

  const controller = makeGuestConfirmationController();
  const response = await controller.exec(token, isConfirmed);
  return {
    statusCode: 200,
    body: JSON.stringify({
      response,
    }),
  };
};
