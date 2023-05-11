import { Route } from "@ooneex/decorator";
import { Request, Response as HttpResponse } from "@ooneex/http";

export class HomepageController {
  @Route("homepage", "/")
  public index(
    _request: Request,
    response: HttpResponse,
  ): Response {
    return response.json({ message: "Welcome" });
  }
}
