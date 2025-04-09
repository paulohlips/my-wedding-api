import { GuestRepository } from "../../repository/GuestRepository";
import { FindGuestByTokenController } from "../../../controller/guest/findGuestByTokenController";
import { FindAllGuestsController } from "../../../controller/guest/findAllGuestsController";
import { ConfirmGuestPresenceController } from "../../../controller/guest/confirmGuestPresenceController";
import { FindGuestByTokenUseCase } from "../../../business/usecase/guest/findGuestByTokenUseCase";
import { FindAllGuestsUseCase } from "../../../business/usecase/guest/findAllGuestUseCase";
import { ConfirmGuestPresencesUseCase } from "../../../business/usecase/guest/confirmGuestPresenceUseCase";
import { MessageRepository } from "../../repository/MessageRepository";
import { CreateMessageUseCase } from "../../../business/usecase/message/createMessageUseCase";
import { CreateMessageController } from "../../../controller/message/createMessageController";

export const makeFindGuestByTokenController = () => {
  const guestRepository = new GuestRepository();
  const useCase = new FindGuestByTokenUseCase(guestRepository);
  return new FindGuestByTokenController(useCase);
};

export const makeFindAllGuestsController = () => {
  const guestRepository = new GuestRepository();
  const useCase = new FindAllGuestsUseCase(guestRepository);
  return new FindAllGuestsController(useCase);
};

export const makeGuestConfirmationController = () => {
  const guestRepository = new GuestRepository();
  const useCase = new ConfirmGuestPresencesUseCase(guestRepository);
  return new ConfirmGuestPresenceController(useCase);
};

export const makeCreateMessageController = () => {
  const messageRepository = new MessageRepository();
  const useCase = new CreateMessageUseCase(messageRepository);
  return new CreateMessageController(useCase);
};
