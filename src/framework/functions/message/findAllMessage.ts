import "../../infra/beforeAll";
import { APIGatewayEvent } from "aws-lambda";
import { makeFindAllMessageController } from "../../infra/di/guestDI";

export const handler = async (_event: APIGatewayEvent) => {
  const controller = makeFindAllMessageController();
  return await controller.exec();
};
