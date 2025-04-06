import "../../infra/beforeAll";
import { HttpOutput } from "../../../utils/httpOutput";
import { makeFindAllGuestsController } from "../../infra/di/guestDI";

export const handler = async (): Promise<HttpOutput> => {
  const controller = makeFindAllGuestsController();
  const response = await controller.exec();
  return {
    statusCode: 200,
    body: JSON.stringify({
      response,
    }),
  };
};
