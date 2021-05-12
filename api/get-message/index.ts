import { AzureFunction, Context, HttpRequest } from "@azure/functions";
import {
  getUserInfo,
  isAuthenticated,
} from "@aaronpowell/static-web-apps-api-auth";

const httpTrigger: AzureFunction = async function (
  context: Context,
  req: HttpRequest
): Promise<void> {
  context.log("HTTP trigger function processed a request.");
  const name = req.query.name || (req.body && req.body.name);
  let responseMessage = name
    ? "Hello, " + name + ". This HTTP triggered function executed successfully."
    : "This HTTP triggered function executed successfully. Pass a name in the query string or in the request body for a personalized response.";
  if (isAuthenticated(req)) {
    const userInfo = getUserInfo(req);
    responseMessage = `${responseMessage} The user is ${userInfo.userDetails}`;
  } else {
    responseMessage = `${responseMessage} There is no logged in user`;
  }

  context.res = {
    // status: 200, /* Defaults to 200 */
    body: responseMessage,
  };
};

export default httpTrigger;
