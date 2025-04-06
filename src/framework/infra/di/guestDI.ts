import { GuestRepository } from "../../repository/GuestRepository";
import { FindGuestByTokenUseCase } from "../../../business/usecase/findGuestByTokenUseCase";
import { FindAllGuestsUseCase } from "../../../business/usecase/findAllGuestUseCase";
import { FindGuestByTokenController } from "../../../controller/guest/findGuestByTokenController";
import { FindAllGuestsController } from "../../../controller/guest/findAllGuestsController";

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
