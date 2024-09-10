import {
  ClientsConfig,
  method,
  ParamsContext,
  RecorderState,
  Service,
  ServiceContext,
} from '@vtex/api'

import { Clients } from './clients/index'
import {
  createCancellation,
  listAllCancellations,
} from './handlers/cancellations'
import { getOrCreateGiftCard, listGiftCards } from './handlers/giftcards'
import { createSettlement, listAllSettlements } from './handlers/settlements'
import {
  createTransaction,
  getTransactionAuthorization,
  getTransactionById,
  listTransactions,
} from './handlers/transactions'
import { deleteGiftCardProvider } from './resolvers/deleteGiftCardProvider'
import { getGiftCardProviders } from './resolvers/getProviders'
import { setGiftCardProvider } from './resolvers/setGiftCardProvider'

const TIMEOUT_MS = 800

// This is the configuration for clients available in `ctx.clients`.
const clients: ClientsConfig<Clients> = {
  // We pass our custom implementation of the clients bag, containing the Status client.
  implementation: Clients,
  options: {
    // All IO Clients will be initialized with these options, unless otherwise specified.
    default: {
      retries: 2,
      timeout: TIMEOUT_MS,
    },
  },
}

declare global {
  // We declare a global Context type just to avoid re-writing ServiceContext<Clients, State> in every handler and resolver
  type Context = ServiceContext<Clients>
}


const authMiddleware = async (ctx: Context, next: () => Promise<any>) => {
  // Extrai 'appkey' e 'apptoken' dos headers

  console.log(ctx.request.headers)
  const appKey = ctx.request.headers['x-provider-api-appkey']
  const appToken = ctx.request.headers['x-provider-api-apptoken']

  // Loga as chaves no console
  console.log("Essa é a appKey:", appKey);
  console.log("Essa é a appToken:", appToken);

  // Substitua 'expectedAppKey' e 'expectedAppToken' pelos valores corretos
  const expectedAppKey = '123'
  const expectedAppToken = '123'

  // Valida as chaves e tokens
  if (appKey !== expectedAppKey || appToken !== expectedAppToken) {
    ctx.response.status = 401
    ctx.response.body = 'Unauthorized review your keys'
    return
  }

  await next()
}




// It's possible to check the implementation of each handler in the handlers folder
export default new Service<Clients, RecorderState, ParamsContext>({
  clients,
  graphql: {
    resolvers: {
      Mutation: {
        deleteGiftCardProvider,
        setGiftCardProvider,
      },
      Query: {
        getGiftCardProviders,
      },
    },
  },
  routes: {
    authorization: method({
      GET: [authMiddleware, getTransactionAuthorization],
    }),
    cancellation: method({
      GET: [authMiddleware, listAllCancellations],
      POST: [authMiddleware, createCancellation],
    }),
    create: method({
      POST: [authMiddleware, getOrCreateGiftCard],
    }),
    get: method({
      GET: [authMiddleware, getOrCreateGiftCard],
    }),
    getTransaction: method({
      GET: [authMiddleware, getTransactionById],
    }),
    list: method({
      POST: [authMiddleware, listGiftCards],
    }),
    settlement: method({
      GET: [authMiddleware, listAllSettlements],
      POST: [authMiddleware, createSettlement],
    }),
    transactions: method({
      GET: [authMiddleware, listTransactions],
      POST: [authMiddleware, createTransaction],
    }),
  },
})
