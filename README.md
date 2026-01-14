# Gift Card Protocol Example

A reference app implementing a VTEX IO Gift Card integration service. This app is an example to be followed in order to develop a gift card service integration with VTEX.

## Table of Contents

- [Overview](#overview)
- [Requirements](#requirements)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Routes](#routes)
- [Clients](#clients)
- [Handlers](#handlers)
- [Parsers](#parsers)
- [GraphQL Queries and Mutations](#graphql-queries-and-mutations)
- [Authentication](#authentication)
- [Testing](#testing)
- [Notes](#notes)

## Overview

This application implements a complete Gift Card Protocol integration service for VTEX IO. It provides endpoints for managing gift cards, transactions, cancellations, and settlements, following the VTEX Gift Card Protocol specification.

**Key Features:**
- Gift card management (create, get, list)
- Transaction handling (create, get, list, authorization)
- Cancellation support
- Settlement processing
- GraphQL API for provider management
- Custom authentication middleware

## Requirements

- Node.js 14.x or higher
- VTEX IO CLI
- VTEX account with appropriate permissions

## Project Structure

```
src/
├── node/
│   ├── clients/          # API clients (GiftCardHub, GiftCardProvider, VtexCommerce)
│   ├── handlers/         # Route handlers (giftcards, transactions, cancellations, settlements)
│   ├── parsers/          # Data transformation utilities
│   ├── resolvers/         # GraphQL resolvers
│   ├── utils/            # Utility functions
│   ├── typings/          # TypeScript type definitions
│   ├── index.ts          # Main service configuration
│   └── service.json      # Service routes configuration
├── graphql/
│   └── schema.graphql    # GraphQL schema definition
└── manifest.json         # App manifest
```

## Getting Started

1. **Install dependencies:**
   ```bash
   cd src/node
   npm install
   ```

2. **Link the app:**
   ```bash
   vtex link
   ```

3. **Publish the app (when ready):**
   ```bash
   vtex publish
   ```

## Routes

The Gift Card Hub expects the provider's API to handle the following endpoints. All routes are defined in `service.json` and have their handlers implemented in the `handlers` directory.

### Base URL
The base URL is defined when configuring the provider on an account.

### Available Routes

| Method | Route | Description |
|--------|-------|-------------|
| `POST` | `/my-provider/giftcards/_search` | List gift cards |
| `POST` | `/my-provider/giftcards` | Create a new gift card |
| `GET` | `/my-provider/giftcards/:giftCardId` | Get a specific gift card by ID |
| `GET` | `/my-provider/giftcards/:giftCardId/transactions` | List transactions for a gift card |
| `POST` | `/my-provider/giftcards/:giftCardId/transactions` | Create a new transaction |
| `GET` | `/my-provider/giftcards/:giftCardId/transactions/:transactionId` | Get a specific transaction |
| `GET` | `/my-provider/giftcards/:giftCardId/transactions/:transactionId/authorization` | Get transaction authorization |
| `GET` | `/my-provider/giftcards/:giftCardId/transactions/:transactionId/cancellations` | List cancellations for a transaction |
| `POST` | `/my-provider/giftcards/:giftCardId/transactions/:transactionId/cancellations` | Create a cancellation |
| `GET` | `/my-provider/giftcards/:giftCardId/transactions/:transactionId/settlements` | List settlements for a transaction |
| `POST` | `/my-provider/giftcards/:giftCardId/transactions/:transactionId/settlements` | Create a settlement |

**Note:** All routes are protected by an authentication middleware that validates API keys and tokens.

## Clients

The application includes several clients for interacting with external services:

### GiftCardHub
Used to connect to the Gift Card Hub to configure or delete a provider on an account.

**Location:** `src/node/clients/giftCardHub.ts`

### GiftCardProvider
Used to connect to the provider's external API, where it must have methods implemented to handle all the requests that the Gift Card Hub might make.

**Location:** `src/node/clients/giftCardProvider.ts`

### VtexCommerce
Basic external client that can be used as a base class to develop other clients that connect to VTEX API.

**Location:** `src/node/clients/vtexCommerce.ts`

## Handlers

Handlers are located in `src/node/handlers/` and implement the business logic for each route:

- **giftcards.ts**: Handles gift card operations (create, get, list)
- **transactions.ts**: Handles transaction operations (create, get, list, authorization)
- **cancellations.ts**: Handles cancellation operations
- **settlements.ts**: Handles settlement operations

### Special Validation

The `getOrCreateGiftCard` handler includes a validation that returns a 500 error if the gift card ID is greater than 10:

```typescript
if (!isNaN(idNumber) && idNumber > 10) {
  ctx.status = 500
  ctx.body = {
    message: 'Internal Server Error: Gift card ID cannot be greater than 10',
    status: 500,
  }
  return
}
```

## Parsers

As a way to simplify the logic behind the handlers, all code logic necessary to parse payloads to a specific format is implemented in the `parsers` directory. This is necessary because both the external provider API and VTEX API expect specific payload formats.

### VTEX to Provider (`vtexToProvider.ts`)
Defines parsers to convert request body formats to the format that the provider's API expects.

### Provider to VTEX (`providerToVtex.ts`)
Defines parsers to convert provider API responses or request bodies to the format that VTEX expects.

## GraphQL Queries and Mutations

The application uses GraphQL 2.x with the `@auth` directive for authentication. All queries and mutations require the `@auth(scope: PUBLIC)` directive.

### Getting List of Providers

Query to check the providers configured on the account:

```graphql
query {
  getGiftCardProviders {
    serviceUrl
    oauthProvider
    preAuthEnabled
    cancelEnabled
  }
}
```

**Response:**
```json
{
  "data": {
    "getGiftCardProviders": [
      {
        "serviceUrl": "http://api.vtex.com/appliancetheme",
        "oauthProvider": "vtex",
        "preAuthEnabled": true,
        "cancelEnabled": true
      },
      {
        "serviceUrl": "https://fabiana--appliancetheme.myvtex.com/my-provider",
        "oauthProvider": "vtex",
        "preAuthEnabled": true,
        "cancelEnabled": true
      }
    ]
  }
}
```

> **Note:** There will always be a VTEX Gift Card provider configured on any account, because this is the native provider offered by VTEX.

### Setting a Provider

Mutation to add or update a provider on an account:

```graphql
mutation ($id: String, $giftCardProvInput: GiftCardProviderInput) {
  setGiftCardProvider(id: $id, giftCardProvInput: $giftCardProvInput) {
    serviceUrl
    oauthProvider
    preAuthEnabled
    cancelEnabled
    id
    caption
  }
}
```

**Query Variables:**
```json
{
  "id": "FabianaTest2",
  "giftCardProvInput": {
    "serviceUrl": "https://fabiana--appliancetheme.myvtex.com/my-provider",
    "oauthProvider": "vtex",
    "preAuthEnabled": true,
    "cancelEnabled": true
  }
}
```

### Deleting a Provider

Mutation to delete a provider from an account:

```graphql
mutation ($id: String) {
  deleteGiftCardProvider(id: $id) {
    serviceUrl
    oauthProvider
    preAuthEnabled
    cancelEnabled
    id
    caption
  }
}
```

**Query Variables:**
```json
{
  "id": "FabianaTest2"
}
```

## Authentication

The application includes an authentication middleware (`authMiddleware`) that validates API keys and tokens. Currently, the middleware is configured but the validation logic is commented out in `src/node/index.ts`.

To enable authentication, uncomment the validation code and set your expected keys:

```typescript
const appKey = ctx.request.headers['x-provider-api-appkey']
const appToken = ctx.request.headers['x-provider-api-apptoken']

const expectedAppKey = 'your-app-key'
const expectedAppToken = 'your-app-token'

if (appKey !== expectedAppKey || appToken !== expectedAppToken) {
  ctx.response.status = 401
  ctx.response.body = 'Unauthorized review your keys'
  return
}
```

All routes are protected by this middleware, which means requests must include the appropriate headers:
- `x-provider-api-appkey`: Your application key
- `x-provider-api-apptoken`: Your application token

## Testing

### Initial Setup

At first, once you link this application, it's important to know that to test it in a store to place an order, for example, it's necessary to register the external provider on the account. By doing that, Gift Card Hub will know how to compose the routes which it's going to send the requests to. This step can be found in the [GraphQL section](#graphql-queries-and-mutations).

### Testing Routes

Having the app linked, it will have the routes mentioned before exposed. At first, you can test all your routes on Postman, to make sure that they work as you expect them to.

**Example: Get Gift Card**
```bash
GET https://{workspace}--{account}.myvtex.com/my-provider/giftcards/1
Headers:
  x-provider-api-appkey: your-key
  x-provider-api-apptoken: your-token
```

### Testing with Store Simulation

After testing routes, you can trigger the communication between the Gift Card Hub and your application by simulating a purchase on a store. You'll have to configure your provider on an account so you can use it on your simulation.

> **NOTE:** Some endpoints are only used when the order status changes, such as settlement and cancellation, which means that you need to have permission to use the admin panel to change orders' status.

### Using GraphiQL

You can use GraphiQL to test GraphQL queries and mutations. The GraphiQL interface is available when the app is linked at:
- `/_v/private/graphql/v1`
- `/_v/public/graphql/v1`
- `/_v/segment/graphql/v1`

## Notes

### GraphQL 2.x Migration

This application has been updated to use GraphQL 2.x builder. Key changes:

- All queries and mutations must include the `@auth` directive with a `scope` argument
- Valid scopes are: `PUBLIC` or `PRIVATE`
- For `PRIVATE` scope, `productCode` and `resourceCode` are required
- The current implementation uses `@auth(scope: PUBLIC)` for all operations

### Route Parameters

Route parameters have been updated for consistency:
- `:id` → `:giftCardId` (for gift card routes)
- `:id` → `:transactionId` (for transaction routes)

### Version

Current version: **1.0.0**

### Builders

- `node`: 6.x
- `graphql`: 2.x (updated from 1.x)
- `docs`: 0.x

### Dependencies

- `vtex.docs-graphql`: 0.x
- `vtex.graphql-server`: 1.x
- `infra:service-node`: 6.x

## License

This is a reference implementation provided by VTEX for developing Gift Card Protocol integrations.

