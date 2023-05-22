import { Route } from "@ooneex/decorator";
import type { IRequest } from "@ooneex/http";
import { Response as HttpResponse } from "@ooneex/http";

export class HomepageController {
  @Route("homepage", "/")
  public index(
    _request: IRequest,
    response: HttpResponse,
  ): Response {
    return response.json({ message: "Welcome" });
  }
}
