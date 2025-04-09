import "../../infra/beforeAll";
import { APIGatewayEvent } from "aws-lambda";
import { HttpOutput } from "../../../utils/httpOutput";
import { httpBodyParser } from "../../../utils/httpBodyParser";
import { makeCreateMessageController } from "../../infra/di/guestDI";

export const handler = async (event: APIGatewayEvent) => {
  const body = httpBodyParser(event.body);

  const controller = makeCreateMessageController();
  return await controller.exec(body);
};
