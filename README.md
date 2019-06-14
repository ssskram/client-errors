# Client Errors

Client Errors is a BaaS service hosted in Azure that receives errors origination from client applications, and notifies developers via [slack](https://github.com/CityofPittsburgh/baloo).

## postErrors
Triggered via HTTP, this function accepts an object in the body of the request with the following shape:
```typescript
{
    appName: String
    time: String
    errorMessage: String
}
```

It then alerts developers through the slackbot.

## Authorization

Key! Just ask for  it.

## Running Locally

### Prerequisites
* [.Net Core](https://dotnet.microsoft.com/download) - BaaS execution environment
* [Node.js](https://nodejs.org) - JS runtime
* local.settings.json - See local.settings.json.example for all required secrets

### Installation
```
git clone https://github.com/CityofPittsburgh/client-errors
cd client-errors
func extensions install
func host start
```

## Deployment

Deployed as an Azure Function.  Application is deployed directly from github, and can be triggered either (a) through the Azure GUI, (b) through the [CLI](https://docs.microsoft.com/en-us/cli/azure/webapp/deployment/source?view=azure-cli-latest#az-webapp-deployment-source-sync), or (c) through the [proxy service](https://github.com/CityofPittsburgh/azure-proxy).

For complete documentation on the azure environment, see [here](https://github.com/CityofPittsburgh/all-things-azure.git).

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details