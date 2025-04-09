import { GuestRepository } from "../../repository/GuestRepository";
import { FindGuestByTokenUseCase } from "../../../business/usecase/findGuestByTokenUseCase";
import { FindAllGuestsUseCase } from "../../../business/usecase/findAllGuestUseCase";
import { FindGuestByTokenController } from "../../../controller/guest/findGuestByTokenController";
import { FindAllGuestsController } from "../../../controller/guest/findAllGuestsController";
import { ConfirmGuestPresencesUseCase } from "../../../business/usecase/confirmGuestPresenceUseCase";
import { ConfirmGuestPresenceController } from "../../../controller/guest/confirmGuestPresenceController";

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
