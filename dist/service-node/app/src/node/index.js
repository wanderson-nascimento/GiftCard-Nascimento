"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const api_1 = require("@vtex/api");
const index_1 = require("./clients/index");
const cancellations_1 = require("./handlers/cancellations");
const giftcards_1 = require("./handlers/giftcards");
const settlements_1 = require("./handlers/settlements");
const transactions_1 = require("./handlers/transactions");
const deleteGiftCardProvider_1 = require("./resolvers/deleteGiftCardProvider");
const getProviders_1 = require("./resolvers/getProviders");
const setGiftCardProvider_1 = require("./resolvers/setGiftCardProvider");
const TIMEOUT_MS = 800;
// This is the configuration for clients available in `ctx.clients`.
const clients = {
    // We pass our custom implementation of the clients bag, containing the Status client.
    implementation: index_1.Clients,
    options: {
        // All IO Clients will be initialized with these options, unless otherwise specified.
        default: {
            retries: 2,
            timeout: TIMEOUT_MS,
        },
    },
};
// It's possible to check the implementation of each handler in the handlers folder
exports.default = new api_1.Service({
    clients,
    graphql: {
        resolvers: {
            Mutation: {
                deleteGiftCardProvider: deleteGiftCardProvider_1.deleteGiftCardProvider,
                setGiftCardProvider: setGiftCardProvider_1.setGiftCardProvider,
            },
            Query: {
                getGiftCardProviders: getProviders_1.getGiftCardProviders,
            },
        },
    },
    routes: {
        authorization: api_1.method({
            GET: [transactions_1.getTransactionAuthorization],
        }),
        cancellation: api_1.method({
            GET: [cancellations_1.listAllCancellations],
            POST: [cancellations_1.createCancellation],
        }),
        create: api_1.method({
            POST: [giftcards_1.getOrCreateGiftCard],
        }),
        get: api_1.method({
            GET: [giftcards_1.getOrCreateGiftCard],
        }),
        getTransaction: api_1.method({
            GET: [transactions_1.getTransactionById],
        }),
        list: api_1.method({
            POST: [giftcards_1.listGiftCards],
        }),
        settlement: api_1.method({
            GET: [settlements_1.listAllSettlements],
            POST: [settlements_1.createSettlement],
        }),
        transactions: api_1.method({
            GET: [transactions_1.listTransactions],
            POST: [transactions_1.createTransaction],
        }),
    },
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvbm9kZS9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLG1DQU9rQjtBQUVsQiwyQ0FBeUM7QUFDekMsNERBR2lDO0FBQ2pDLG9EQUF5RTtBQUN6RSx3REFBNkU7QUFDN0UsMERBS2dDO0FBQ2hDLCtFQUEyRTtBQUMzRSwyREFBK0Q7QUFDL0QseUVBQXFFO0FBRXJFLE1BQU0sVUFBVSxHQUFHLEdBQUcsQ0FBQTtBQUV0QixvRUFBb0U7QUFDcEUsTUFBTSxPQUFPLEdBQTJCO0lBQ3RDLHNGQUFzRjtJQUN0RixjQUFjLEVBQUUsZUFBTztJQUN2QixPQUFPLEVBQUU7UUFDUCxxRkFBcUY7UUFDckYsT0FBTyxFQUFFO1lBQ1AsT0FBTyxFQUFFLENBQUM7WUFDVixPQUFPLEVBQUUsVUFBVTtTQUNwQjtLQUNGO0NBQ0YsQ0FBQTtBQU9ELG1GQUFtRjtBQUNuRixrQkFBZSxJQUFJLGFBQU8sQ0FBd0M7SUFDaEUsT0FBTztJQUNQLE9BQU8sRUFBRTtRQUNQLFNBQVMsRUFBRTtZQUNULFFBQVEsRUFBRTtnQkFDUixzQkFBc0IsRUFBdEIsK0NBQXNCO2dCQUN0QixtQkFBbUIsRUFBbkIseUNBQW1CO2FBQ3BCO1lBQ0QsS0FBSyxFQUFFO2dCQUNMLG9CQUFvQixFQUFwQixtQ0FBb0I7YUFDckI7U0FDRjtLQUNGO0lBQ0QsTUFBTSxFQUFFO1FBQ04sYUFBYSxFQUFFLFlBQU0sQ0FBQztZQUNwQixHQUFHLEVBQUUsQ0FBQywwQ0FBMkIsQ0FBQztTQUNuQyxDQUFDO1FBQ0YsWUFBWSxFQUFFLFlBQU0sQ0FBQztZQUNuQixHQUFHLEVBQUUsQ0FBQyxvQ0FBb0IsQ0FBQztZQUMzQixJQUFJLEVBQUUsQ0FBQyxrQ0FBa0IsQ0FBQztTQUMzQixDQUFDO1FBQ0YsTUFBTSxFQUFFLFlBQU0sQ0FBQztZQUNiLElBQUksRUFBRSxDQUFDLCtCQUFtQixDQUFDO1NBQzVCLENBQUM7UUFDRixHQUFHLEVBQUUsWUFBTSxDQUFDO1lBQ1YsR0FBRyxFQUFFLENBQUMsK0JBQW1CLENBQUM7U0FDM0IsQ0FBQztRQUNGLGNBQWMsRUFBRSxZQUFNLENBQUM7WUFDckIsR0FBRyxFQUFFLENBQUMsaUNBQWtCLENBQUM7U0FDMUIsQ0FBQztRQUNGLElBQUksRUFBRSxZQUFNLENBQUM7WUFDWCxJQUFJLEVBQUUsQ0FBQyx5QkFBYSxDQUFDO1NBQ3RCLENBQUM7UUFDRixVQUFVLEVBQUUsWUFBTSxDQUFDO1lBQ2pCLEdBQUcsRUFBRSxDQUFDLGdDQUFrQixDQUFDO1lBQ3pCLElBQUksRUFBRSxDQUFDLDhCQUFnQixDQUFDO1NBQ3pCLENBQUM7UUFDRixZQUFZLEVBQUUsWUFBTSxDQUFDO1lBQ25CLEdBQUcsRUFBRSxDQUFDLCtCQUFnQixDQUFDO1lBQ3ZCLElBQUksRUFBRSxDQUFDLGdDQUFpQixDQUFDO1NBQzFCLENBQUM7S0FDSDtDQUNGLENBQUMsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENsaWVudHNDb25maWcsXG4gIG1ldGhvZCxcbiAgUGFyYW1zQ29udGV4dCxcbiAgUmVjb3JkZXJTdGF0ZSxcbiAgU2VydmljZSxcbiAgU2VydmljZUNvbnRleHQsXG59IGZyb20gJ0B2dGV4L2FwaSdcblxuaW1wb3J0IHsgQ2xpZW50cyB9IGZyb20gJy4vY2xpZW50cy9pbmRleCdcbmltcG9ydCB7XG4gIGNyZWF0ZUNhbmNlbGxhdGlvbixcbiAgbGlzdEFsbENhbmNlbGxhdGlvbnMsXG59IGZyb20gJy4vaGFuZGxlcnMvY2FuY2VsbGF0aW9ucydcbmltcG9ydCB7IGdldE9yQ3JlYXRlR2lmdENhcmQsIGxpc3RHaWZ0Q2FyZHMgfSBmcm9tICcuL2hhbmRsZXJzL2dpZnRjYXJkcydcbmltcG9ydCB7IGNyZWF0ZVNldHRsZW1lbnQsIGxpc3RBbGxTZXR0bGVtZW50cyB9IGZyb20gJy4vaGFuZGxlcnMvc2V0dGxlbWVudHMnXG5pbXBvcnQge1xuICBjcmVhdGVUcmFuc2FjdGlvbixcbiAgZ2V0VHJhbnNhY3Rpb25BdXRob3JpemF0aW9uLFxuICBnZXRUcmFuc2FjdGlvbkJ5SWQsXG4gIGxpc3RUcmFuc2FjdGlvbnMsXG59IGZyb20gJy4vaGFuZGxlcnMvdHJhbnNhY3Rpb25zJ1xuaW1wb3J0IHsgZGVsZXRlR2lmdENhcmRQcm92aWRlciB9IGZyb20gJy4vcmVzb2x2ZXJzL2RlbGV0ZUdpZnRDYXJkUHJvdmlkZXInXG5pbXBvcnQgeyBnZXRHaWZ0Q2FyZFByb3ZpZGVycyB9IGZyb20gJy4vcmVzb2x2ZXJzL2dldFByb3ZpZGVycydcbmltcG9ydCB7IHNldEdpZnRDYXJkUHJvdmlkZXIgfSBmcm9tICcuL3Jlc29sdmVycy9zZXRHaWZ0Q2FyZFByb3ZpZGVyJ1xuXG5jb25zdCBUSU1FT1VUX01TID0gODAwXG5cbi8vIFRoaXMgaXMgdGhlIGNvbmZpZ3VyYXRpb24gZm9yIGNsaWVudHMgYXZhaWxhYmxlIGluIGBjdHguY2xpZW50c2AuXG5jb25zdCBjbGllbnRzOiBDbGllbnRzQ29uZmlnPENsaWVudHM+ID0ge1xuICAvLyBXZSBwYXNzIG91ciBjdXN0b20gaW1wbGVtZW50YXRpb24gb2YgdGhlIGNsaWVudHMgYmFnLCBjb250YWluaW5nIHRoZSBTdGF0dXMgY2xpZW50LlxuICBpbXBsZW1lbnRhdGlvbjogQ2xpZW50cyxcbiAgb3B0aW9uczoge1xuICAgIC8vIEFsbCBJTyBDbGllbnRzIHdpbGwgYmUgaW5pdGlhbGl6ZWQgd2l0aCB0aGVzZSBvcHRpb25zLCB1bmxlc3Mgb3RoZXJ3aXNlIHNwZWNpZmllZC5cbiAgICBkZWZhdWx0OiB7XG4gICAgICByZXRyaWVzOiAyLFxuICAgICAgdGltZW91dDogVElNRU9VVF9NUyxcbiAgICB9LFxuICB9LFxufVxuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIC8vIFdlIGRlY2xhcmUgYSBnbG9iYWwgQ29udGV4dCB0eXBlIGp1c3QgdG8gYXZvaWQgcmUtd3JpdGluZyBTZXJ2aWNlQ29udGV4dDxDbGllbnRzLCBTdGF0ZT4gaW4gZXZlcnkgaGFuZGxlciBhbmQgcmVzb2x2ZXJcbiAgdHlwZSBDb250ZXh0ID0gU2VydmljZUNvbnRleHQ8Q2xpZW50cz5cbn1cblxuLy8gSXQncyBwb3NzaWJsZSB0byBjaGVjayB0aGUgaW1wbGVtZW50YXRpb24gb2YgZWFjaCBoYW5kbGVyIGluIHRoZSBoYW5kbGVycyBmb2xkZXJcbmV4cG9ydCBkZWZhdWx0IG5ldyBTZXJ2aWNlPENsaWVudHMsIFJlY29yZGVyU3RhdGUsIFBhcmFtc0NvbnRleHQ+KHtcbiAgY2xpZW50cyxcbiAgZ3JhcGhxbDoge1xuICAgIHJlc29sdmVyczoge1xuICAgICAgTXV0YXRpb246IHtcbiAgICAgICAgZGVsZXRlR2lmdENhcmRQcm92aWRlcixcbiAgICAgICAgc2V0R2lmdENhcmRQcm92aWRlcixcbiAgICAgIH0sXG4gICAgICBRdWVyeToge1xuICAgICAgICBnZXRHaWZ0Q2FyZFByb3ZpZGVycyxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSxcbiAgcm91dGVzOiB7XG4gICAgYXV0aG9yaXphdGlvbjogbWV0aG9kKHtcbiAgICAgIEdFVDogW2dldFRyYW5zYWN0aW9uQXV0aG9yaXphdGlvbl0sXG4gICAgfSksXG4gICAgY2FuY2VsbGF0aW9uOiBtZXRob2Qoe1xuICAgICAgR0VUOiBbbGlzdEFsbENhbmNlbGxhdGlvbnNdLFxuICAgICAgUE9TVDogW2NyZWF0ZUNhbmNlbGxhdGlvbl0sXG4gICAgfSksXG4gICAgY3JlYXRlOiBtZXRob2Qoe1xuICAgICAgUE9TVDogW2dldE9yQ3JlYXRlR2lmdENhcmRdLFxuICAgIH0pLFxuICAgIGdldDogbWV0aG9kKHtcbiAgICAgIEdFVDogW2dldE9yQ3JlYXRlR2lmdENhcmRdLFxuICAgIH0pLFxuICAgIGdldFRyYW5zYWN0aW9uOiBtZXRob2Qoe1xuICAgICAgR0VUOiBbZ2V0VHJhbnNhY3Rpb25CeUlkXSxcbiAgICB9KSxcbiAgICBsaXN0OiBtZXRob2Qoe1xuICAgICAgUE9TVDogW2xpc3RHaWZ0Q2FyZHNdLFxuICAgIH0pLFxuICAgIHNldHRsZW1lbnQ6IG1ldGhvZCh7XG4gICAgICBHRVQ6IFtsaXN0QWxsU2V0dGxlbWVudHNdLFxuICAgICAgUE9TVDogW2NyZWF0ZVNldHRsZW1lbnRdLFxuICAgIH0pLFxuICAgIHRyYW5zYWN0aW9uczogbWV0aG9kKHtcbiAgICAgIEdFVDogW2xpc3RUcmFuc2FjdGlvbnNdLFxuICAgICAgUE9TVDogW2NyZWF0ZVRyYW5zYWN0aW9uXSxcbiAgICB9KSxcbiAgfSxcbn0pXG4iXX0=