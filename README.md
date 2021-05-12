# Azure Static Web Apps - Custom auth with Okta

This repository contains an example of how to use Okta as a custom auth provider to [Azure Static Web App](https://docs.microsoft.com/azure/static-web-apps/?WT.mc_id=javascript-28110-aapowell). You can read about how to implement this [on my blog](https://www.aaron-powell.com/posts/2021-05-13-using-okta-with-static-web-apps/).

[Live Demo](https://blue-bay-0eac9b910.azurestaticapps.net).

## Azure Static Website React Template

This repository contains a template for creating an [Azure Static Web App](https://docs.microsoft.com/azure/static-web-apps/?WT.mc_id=javascript-23110-aapowell) projects using React + TypeScript.

In the template there is [Create React App](https://create-react-app.dev) site using TypeScript and an `api` folder with an empty [Azure Functions](https://docs.microsoft.com/azure/functions/?WT.mc_id=javascript-23110-aapowell), also using TypeScript.

To get started, click the **Use this template** button to create a repository from this template, and check out the [GitHub docs on using templates](https://docs.github.com/en/github/creating-cloning-and-archiving-repositories/creating-a-repository-from-a-template).

## Running The Application

From a terminal run `npm start` from both the repository root and `api` folder to start the two servers, the web application will be on `http://localhost:3000` and the API on `http://localhost:7071`. Alternatively, you can use the VS Code launch of `Run full stack` to run both together with debuggers attached.
