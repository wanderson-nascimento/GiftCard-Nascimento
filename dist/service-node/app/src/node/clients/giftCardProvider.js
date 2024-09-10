"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GiftCardProvider = void 0;
const api_1 = require("@vtex/api");
class GiftCardProvider extends api_1.ExternalClient {
    constructor(ctx, options) {
        // The first argument is the base URl of your provider API endpoint
        super('baseURL', ctx, options);
    }
    getGiftCardById(_) {
        /*
          This is the method that will be used to connect to the provider API
          and get a specific gift card by its id.
          For instance, it's returning a mocked object that it's already in the format
          that VTEX expects.
          It receives a string, which is the id. For now, it returns a mocked gift card,
          but it's here where the connection with the external API will happen.
        */
        return {
            balance: 100000,
            caption: 'Gift card for testing',
            emissionDate: '2020-07-05T14:48:00.000Z',
            expiringDate: '2030-10-10T14:48:00.000Z',
            id: "cardxpto",
            provider: 'wando_card',
            transaction: {
                href: 'appliancetheme/giftcardproviders/wandoTest',
            },
        };
    }
    getListOfGiftCards(_) {
        /*
          This is the method that will be used to connect to the provider API
          and get a list of available gift cards.
          For instance, it's returning a mocked object that it's already in the format
          that VTEX expects.
          It receives a well defined body, which is the format that the hub uses. For now,
          it's returning a mocked list that contains only one gift card that is already
          in the format that the Hub expects.
        */
        if (_.cart.redemptionCode == "VTEXC4") {
            return [
                {
                    balance: 100000,
                    caption: 'Gift card for testing_C4',
                    emissionDate: '2020-07-05T14:48:00.000Z',
                    expiringDate: '2030-10-10T14:48:00.000Z',
                    id: "cardxpto",
                    provider: 'wando_card',
                    transaction: {
                        href: 'appliancetheme/giftcardproviders/wandoTest',
                    },
                },
            ];
        }
        return [];
    }
    createGiftCard(body) {
        /*
          This is the method that will be used to connect to the provider API
          and create a gift card. It needs to create the gift card and return a body
          response in the format that VTEX expects.
        */
        return body;
    }
    createTransaction(_, __) {
        /*
          This is the method that will be used to connect to the provider API
          and create a gift card. It needs to create the gift card and return a body
          response in the format that VTEX expects.
        */
        return {
            cardId: _,
            id: "123VTEXTEST321",
            _self: {
                href: 'appliancetheme/giftcardproviders/wandoTest',
            },
        };
    }
    listTransactions(_) {
        /*
          This is the method that will be used to connect to the provider API
          and create a gift card. It needs to create the gift card and return a body
          response in the format that VTEX expects.
        */
        const resp = [
            {
                cardId: "3b1abc17-988e-4a14-8b7f-31fc6a5b955c_24",
                id: _,
                _self: {
                    href: "gatewayqa/giftcards/3b1abc17-988e-4a14-8b7f-31fc6a5b955c_24/transactions/68347b311ce5407c90fa5316975d047a"
                }
            },
            {
                cardId: "3b1abc17-988e-4a14-8b7f-31fc6a5b955c_24",
                id: "e122ebd4501a4b3b93640b7444ac425d",
                _self: {
                    href: "gatewayqa/giftcards/3b1abc17-988e-4a14-8b7f-31fc6a5b955c_24/transactions/e122ebd4501a4b3b93640b7444ac425d"
                }
            }
        ];
        return resp;
    }
    getTransactionById(_, __) {
        /*
          Method that handlers the case of getting a transaction by its id.
          The parameter is the id.
        */
        return {};
    }
    getTransactionAuthorization(_, __) {
        /*
          Method that handlers the case of getting a transaction authorization by its id.
          The parameters are the transaction id and the gift card id.
        */
        return {};
    }
    createCancellation(_, __, ___) {
        /*
          Method that handlers the case of creating a transaction cancellation.
        */
        // const res = {
        //   oid: "7582d93baccc44e9867b0b861696fc0a",
        //   value: 123,
        //   date: "2019-03-19T14:35:16.7157238Z"
        // }
        return {
            oid: _,
            value: ___.value,
            date: new Date()
        };
    }
    listAllCancellations(_, __) {
        /*
          Method that handlers the case of getting a transaction authorization by its id.
          The parameter is the id.
        */
        // const res = [
        //   {
        //     oid: "7582d93baccc44e9867b0b861696fc0a",
        //     value: 777,
        //     date: "2019-03-19T14:35:16.7157238Z"
        //   }
        // ]
        // const res2: any = []
        return [];
    }
    createSettlement(_, __, ___) {
        /*
          Method that handlers the case of creating a transaction settlement.
        */
        return {
            oid: _,
            value: ___.value,
            date: new Date()
        };
    }
    listAllSettlements(_, __) {
        /*
          Method that handlers the case of getting a transaction authorization by its id.
          The parameter is the id.
        */
        return {};
    }
}
exports.GiftCardProvider = GiftCardProvider;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2lmdENhcmRQcm92aWRlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9ub2RlL2NsaWVudHMvZ2lmdENhcmRQcm92aWRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxtQ0FBc0U7QUFFdEUsTUFBYSxnQkFBaUIsU0FBUSxvQkFBYztJQUNsRCxZQUFZLEdBQWMsRUFBRSxPQUF5QjtRQUNuRCxtRUFBbUU7UUFDbkUsS0FBSyxDQUFDLFNBQVMsRUFBRSxHQUFHLEVBQUUsT0FBTyxDQUFDLENBQUE7SUFDaEMsQ0FBQztJQUVNLGVBQWUsQ0FBQyxDQUFTO1FBQzlCOzs7Ozs7O1VBT0U7UUFFRixPQUFPO1lBQ0wsT0FBTyxFQUFFLE1BQU07WUFDZixPQUFPLEVBQUUsdUJBQXVCO1lBQ2hDLFlBQVksRUFBRSwwQkFBMEI7WUFDeEMsWUFBWSxFQUFFLDBCQUEwQjtZQUN4QyxFQUFFLEVBQUUsVUFBVTtZQUNkLFFBQVEsRUFBRSxZQUFZO1lBQ3RCLFdBQVcsRUFBRTtnQkFDWCxJQUFJLEVBQUUsNENBQTRDO2FBQ25EO1NBQ0YsQ0FBQTtJQUNILENBQUM7SUFFTSxrQkFBa0IsQ0FBQyxDQUFzQjtRQUM5Qzs7Ozs7Ozs7VUFRRTtRQUVGLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxjQUFjLElBQUksUUFBUSxFQUFFO1lBQ3JDLE9BQU87Z0JBQ0w7b0JBQ0UsT0FBTyxFQUFFLE1BQU07b0JBQ2YsT0FBTyxFQUFFLDBCQUEwQjtvQkFDbkMsWUFBWSxFQUFFLDBCQUEwQjtvQkFDeEMsWUFBWSxFQUFFLDBCQUEwQjtvQkFDeEMsRUFBRSxFQUFFLFVBQVU7b0JBQ2QsUUFBUSxFQUFFLFlBQVk7b0JBQ3RCLFdBQVcsRUFBRTt3QkFDWCxJQUFJLEVBQUUsNENBQTRDO3FCQUNuRDtpQkFDRjthQUNGLENBQUE7U0FDRjtRQUNELE9BQU8sRUFBRSxDQUFBO0lBQ1gsQ0FBQztJQUVNLGNBQWMsQ0FBQyxJQUFxQjtRQUN6Qzs7OztVQUlFO1FBQ0YsT0FBTyxJQUFJLENBQUE7SUFDYixDQUFDO0lBRU0saUJBQWlCLENBQUMsQ0FBUyxFQUFFLEVBQXNCO1FBQ3hEOzs7O1VBSUU7UUFDRixPQUFPO1lBQ0wsTUFBTSxFQUFFLENBQUM7WUFDVCxFQUFFLEVBQUUsZ0JBQWdCO1lBQ3BCLEtBQUssRUFBRTtnQkFDTCxJQUFJLEVBQUUsNENBQTRDO2FBQ25EO1NBQ0YsQ0FBQTtJQUNILENBQUM7SUFFTSxnQkFBZ0IsQ0FBQyxDQUFTO1FBQy9COzs7O1VBSUU7UUFDRixNQUFNLElBQUksR0FBRztZQUNYO2dCQUNFLE1BQU0sRUFBRSx5Q0FBeUM7Z0JBQ2pELEVBQUUsRUFBRSxDQUFDO2dCQUNMLEtBQUssRUFBRTtvQkFDTCxJQUFJLEVBQUUsMkdBQTJHO2lCQUNsSDthQUNGO1lBQ0Q7Z0JBQ0UsTUFBTSxFQUFFLHlDQUF5QztnQkFDakQsRUFBRSxFQUFFLGtDQUFrQztnQkFDdEMsS0FBSyxFQUFFO29CQUNMLElBQUksRUFBRSwyR0FBMkc7aUJBQ2xIO2FBQ0Y7U0FDRixDQUFBO1FBQ0QsT0FBTyxJQUFJLENBQUE7SUFDYixDQUFDO0lBRU0sa0JBQWtCLENBQUMsQ0FBUyxFQUFFLEVBQVU7UUFDN0M7OztVQUdFO1FBQ0YsT0FBTyxFQUFFLENBQUE7SUFDWCxDQUFDO0lBRU0sMkJBQTJCLENBQUMsQ0FBUyxFQUFFLEVBQVU7UUFDdEQ7OztVQUdFO1FBQ0YsT0FBTyxFQUFFLENBQUE7SUFDWCxDQUFDO0lBRU0sa0JBQWtCLENBQ3ZCLENBQVMsRUFDVCxFQUFVLEVBQ1YsR0FBMkI7UUFFM0I7O1VBRUU7UUFFRixnQkFBZ0I7UUFDaEIsNkNBQTZDO1FBQzdDLGdCQUFnQjtRQUNoQix5Q0FBeUM7UUFDekMsSUFBSTtRQUNKLE9BQU87WUFDTCxHQUFHLEVBQUUsQ0FBQztZQUNOLEtBQUssRUFBRSxHQUFHLENBQUMsS0FBSztZQUNoQixJQUFJLEVBQUUsSUFBSSxJQUFJLEVBQUU7U0FDakIsQ0FBQTtJQUNILENBQUM7SUFFTSxvQkFBb0IsQ0FBQyxDQUFTLEVBQUUsRUFBVTtRQUMvQzs7O1VBR0U7UUFFRixnQkFBZ0I7UUFDaEIsTUFBTTtRQUNOLCtDQUErQztRQUMvQyxrQkFBa0I7UUFDbEIsMkNBQTJDO1FBQzNDLE1BQU07UUFDTixJQUFJO1FBQ0osdUJBQXVCO1FBQ3ZCLE9BQU8sRUFBRSxDQUFBO0lBQ1gsQ0FBQztJQUVNLGdCQUFnQixDQUFDLENBQVMsRUFBRSxFQUFVLEVBQUUsR0FBeUI7UUFDdEU7O1VBRUU7UUFDRixPQUFPO1lBQ0wsR0FBRyxFQUFFLENBQUM7WUFDTixLQUFLLEVBQUUsR0FBRyxDQUFDLEtBQUs7WUFDaEIsSUFBSSxFQUFFLElBQUksSUFBSSxFQUFFO1NBQ2pCLENBQUE7SUFDSCxDQUFDO0lBRU0sa0JBQWtCLENBQUMsQ0FBUyxFQUFFLEVBQVU7UUFDN0M7OztVQUdFO1FBQ0YsT0FBTyxFQUFFLENBQUE7SUFDWCxDQUFDO0NBQ0Y7QUFuTEQsNENBbUxDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRXh0ZXJuYWxDbGllbnQsIEluc3RhbmNlT3B0aW9ucywgSU9Db250ZXh0IH0gZnJvbSAnQHZ0ZXgvYXBpJ1xuXG5leHBvcnQgY2xhc3MgR2lmdENhcmRQcm92aWRlciBleHRlbmRzIEV4dGVybmFsQ2xpZW50IHtcbiAgY29uc3RydWN0b3IoY3R4OiBJT0NvbnRleHQsIG9wdGlvbnM/OiBJbnN0YW5jZU9wdGlvbnMpIHtcbiAgICAvLyBUaGUgZmlyc3QgYXJndW1lbnQgaXMgdGhlIGJhc2UgVVJsIG9mIHlvdXIgcHJvdmlkZXIgQVBJIGVuZHBvaW50XG4gICAgc3VwZXIoJ2Jhc2VVUkwnLCBjdHgsIG9wdGlvbnMpXG4gIH1cblxuICBwdWJsaWMgZ2V0R2lmdENhcmRCeUlkKF86IHN0cmluZykge1xuICAgIC8qXG4gICAgICBUaGlzIGlzIHRoZSBtZXRob2QgdGhhdCB3aWxsIGJlIHVzZWQgdG8gY29ubmVjdCB0byB0aGUgcHJvdmlkZXIgQVBJXG4gICAgICBhbmQgZ2V0IGEgc3BlY2lmaWMgZ2lmdCBjYXJkIGJ5IGl0cyBpZC5cbiAgICAgIEZvciBpbnN0YW5jZSwgaXQncyByZXR1cm5pbmcgYSBtb2NrZWQgb2JqZWN0IHRoYXQgaXQncyBhbHJlYWR5IGluIHRoZSBmb3JtYXRcbiAgICAgIHRoYXQgVlRFWCBleHBlY3RzLlxuICAgICAgSXQgcmVjZWl2ZXMgYSBzdHJpbmcsIHdoaWNoIGlzIHRoZSBpZC4gRm9yIG5vdywgaXQgcmV0dXJucyBhIG1vY2tlZCBnaWZ0IGNhcmQsXG4gICAgICBidXQgaXQncyBoZXJlIHdoZXJlIHRoZSBjb25uZWN0aW9uIHdpdGggdGhlIGV4dGVybmFsIEFQSSB3aWxsIGhhcHBlbi5cbiAgICAqL1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIGJhbGFuY2U6IDEwMDAwMCxcbiAgICAgIGNhcHRpb246ICdHaWZ0IGNhcmQgZm9yIHRlc3RpbmcnLFxuICAgICAgZW1pc3Npb25EYXRlOiAnMjAyMC0wNy0wNVQxNDo0ODowMC4wMDBaJyxcbiAgICAgIGV4cGlyaW5nRGF0ZTogJzIwMzAtMTAtMTBUMTQ6NDg6MDAuMDAwWicsXG4gICAgICBpZDogXCJjYXJkeHB0b1wiLFxuICAgICAgcHJvdmlkZXI6ICd3YW5kb19jYXJkJyxcbiAgICAgIHRyYW5zYWN0aW9uOiB7XG4gICAgICAgIGhyZWY6ICdhcHBsaWFuY2V0aGVtZS9naWZ0Y2FyZHByb3ZpZGVycy93YW5kb1Rlc3QnLFxuICAgICAgfSxcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgZ2V0TGlzdE9mR2lmdENhcmRzKF86IEdpZnRDYXJkTGlzdFJlcXVlc3QpIHtcbiAgICAvKlxuICAgICAgVGhpcyBpcyB0aGUgbWV0aG9kIHRoYXQgd2lsbCBiZSB1c2VkIHRvIGNvbm5lY3QgdG8gdGhlIHByb3ZpZGVyIEFQSVxuICAgICAgYW5kIGdldCBhIGxpc3Qgb2YgYXZhaWxhYmxlIGdpZnQgY2FyZHMuXG4gICAgICBGb3IgaW5zdGFuY2UsIGl0J3MgcmV0dXJuaW5nIGEgbW9ja2VkIG9iamVjdCB0aGF0IGl0J3MgYWxyZWFkeSBpbiB0aGUgZm9ybWF0XG4gICAgICB0aGF0IFZURVggZXhwZWN0cy5cbiAgICAgIEl0IHJlY2VpdmVzIGEgd2VsbCBkZWZpbmVkIGJvZHksIHdoaWNoIGlzIHRoZSBmb3JtYXQgdGhhdCB0aGUgaHViIHVzZXMuIEZvciBub3csXG4gICAgICBpdCdzIHJldHVybmluZyBhIG1vY2tlZCBsaXN0IHRoYXQgY29udGFpbnMgb25seSBvbmUgZ2lmdCBjYXJkIHRoYXQgaXMgYWxyZWFkeVxuICAgICAgaW4gdGhlIGZvcm1hdCB0aGF0IHRoZSBIdWIgZXhwZWN0cy5cbiAgICAqL1xuXG4gICAgaWYgKF8uY2FydC5yZWRlbXB0aW9uQ29kZSA9PSBcIlZURVhDNFwiKSB7XG4gICAgICByZXR1cm4gW1xuICAgICAgICB7XG4gICAgICAgICAgYmFsYW5jZTogMTAwMDAwLFxuICAgICAgICAgIGNhcHRpb246ICdHaWZ0IGNhcmQgZm9yIHRlc3RpbmdfQzQnLFxuICAgICAgICAgIGVtaXNzaW9uRGF0ZTogJzIwMjAtMDctMDVUMTQ6NDg6MDAuMDAwWicsXG4gICAgICAgICAgZXhwaXJpbmdEYXRlOiAnMjAzMC0xMC0xMFQxNDo0ODowMC4wMDBaJyxcbiAgICAgICAgICBpZDogXCJjYXJkeHB0b1wiLFxuICAgICAgICAgIHByb3ZpZGVyOiAnd2FuZG9fY2FyZCcsXG4gICAgICAgICAgdHJhbnNhY3Rpb246IHtcbiAgICAgICAgICAgIGhyZWY6ICdhcHBsaWFuY2V0aGVtZS9naWZ0Y2FyZHByb3ZpZGVycy93YW5kb1Rlc3QnLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICBdXG4gICAgfVxuICAgIHJldHVybiBbXVxuICB9XG5cbiAgcHVibGljIGNyZWF0ZUdpZnRDYXJkKGJvZHk6IEdpZnRDYXJkUmVxdWVzdCkge1xuICAgIC8qXG4gICAgICBUaGlzIGlzIHRoZSBtZXRob2QgdGhhdCB3aWxsIGJlIHVzZWQgdG8gY29ubmVjdCB0byB0aGUgcHJvdmlkZXIgQVBJXG4gICAgICBhbmQgY3JlYXRlIGEgZ2lmdCBjYXJkLiBJdCBuZWVkcyB0byBjcmVhdGUgdGhlIGdpZnQgY2FyZCBhbmQgcmV0dXJuIGEgYm9keVxuICAgICAgcmVzcG9uc2UgaW4gdGhlIGZvcm1hdCB0aGF0IFZURVggZXhwZWN0cy5cbiAgICAqL1xuICAgIHJldHVybiBib2R5XG4gIH1cblxuICBwdWJsaWMgY3JlYXRlVHJhbnNhY3Rpb24oXzogc3RyaW5nLCBfXzogVHJhbnNhY3Rpb25SZXF1ZXN0KSB7XG4gICAgLypcbiAgICAgIFRoaXMgaXMgdGhlIG1ldGhvZCB0aGF0IHdpbGwgYmUgdXNlZCB0byBjb25uZWN0IHRvIHRoZSBwcm92aWRlciBBUElcbiAgICAgIGFuZCBjcmVhdGUgYSBnaWZ0IGNhcmQuIEl0IG5lZWRzIHRvIGNyZWF0ZSB0aGUgZ2lmdCBjYXJkIGFuZCByZXR1cm4gYSBib2R5XG4gICAgICByZXNwb25zZSBpbiB0aGUgZm9ybWF0IHRoYXQgVlRFWCBleHBlY3RzLlxuICAgICovXG4gICAgcmV0dXJuIHtcbiAgICAgIGNhcmRJZDogXyxcbiAgICAgIGlkOiBcIjEyM1ZURVhURVNUMzIxXCIsXG4gICAgICBfc2VsZjoge1xuICAgICAgICBocmVmOiAnYXBwbGlhbmNldGhlbWUvZ2lmdGNhcmRwcm92aWRlcnMvd2FuZG9UZXN0JyxcbiAgICAgIH0sXG4gICAgfVxuICB9XG5cbiAgcHVibGljIGxpc3RUcmFuc2FjdGlvbnMoXzogc3RyaW5nKSB7XG4gICAgLypcbiAgICAgIFRoaXMgaXMgdGhlIG1ldGhvZCB0aGF0IHdpbGwgYmUgdXNlZCB0byBjb25uZWN0IHRvIHRoZSBwcm92aWRlciBBUElcbiAgICAgIGFuZCBjcmVhdGUgYSBnaWZ0IGNhcmQuIEl0IG5lZWRzIHRvIGNyZWF0ZSB0aGUgZ2lmdCBjYXJkIGFuZCByZXR1cm4gYSBib2R5XG4gICAgICByZXNwb25zZSBpbiB0aGUgZm9ybWF0IHRoYXQgVlRFWCBleHBlY3RzLlxuICAgICovXG4gICAgY29uc3QgcmVzcCA9IFtcbiAgICAgIHtcbiAgICAgICAgY2FyZElkOiBcIjNiMWFiYzE3LTk4OGUtNGExNC04YjdmLTMxZmM2YTViOTU1Y18yNFwiLFxuICAgICAgICBpZDogXyxcbiAgICAgICAgX3NlbGY6IHtcbiAgICAgICAgICBocmVmOiBcImdhdGV3YXlxYS9naWZ0Y2FyZHMvM2IxYWJjMTctOTg4ZS00YTE0LThiN2YtMzFmYzZhNWI5NTVjXzI0L3RyYW5zYWN0aW9ucy82ODM0N2IzMTFjZTU0MDdjOTBmYTUzMTY5NzVkMDQ3YVwiXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIGNhcmRJZDogXCIzYjFhYmMxNy05ODhlLTRhMTQtOGI3Zi0zMWZjNmE1Yjk1NWNfMjRcIixcbiAgICAgICAgaWQ6IFwiZTEyMmViZDQ1MDFhNGIzYjkzNjQwYjc0NDRhYzQyNWRcIixcbiAgICAgICAgX3NlbGY6IHtcbiAgICAgICAgICBocmVmOiBcImdhdGV3YXlxYS9naWZ0Y2FyZHMvM2IxYWJjMTctOTg4ZS00YTE0LThiN2YtMzFmYzZhNWI5NTVjXzI0L3RyYW5zYWN0aW9ucy9lMTIyZWJkNDUwMWE0YjNiOTM2NDBiNzQ0NGFjNDI1ZFwiXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICBdXG4gICAgcmV0dXJuIHJlc3BcbiAgfVxuXG4gIHB1YmxpYyBnZXRUcmFuc2FjdGlvbkJ5SWQoXzogc3RyaW5nLCBfXzogc3RyaW5nKSB7XG4gICAgLypcbiAgICAgIE1ldGhvZCB0aGF0IGhhbmRsZXJzIHRoZSBjYXNlIG9mIGdldHRpbmcgYSB0cmFuc2FjdGlvbiBieSBpdHMgaWQuXG4gICAgICBUaGUgcGFyYW1ldGVyIGlzIHRoZSBpZC5cbiAgICAqL1xuICAgIHJldHVybiB7fVxuICB9XG5cbiAgcHVibGljIGdldFRyYW5zYWN0aW9uQXV0aG9yaXphdGlvbihfOiBzdHJpbmcsIF9fOiBzdHJpbmcpIHtcbiAgICAvKlxuICAgICAgTWV0aG9kIHRoYXQgaGFuZGxlcnMgdGhlIGNhc2Ugb2YgZ2V0dGluZyBhIHRyYW5zYWN0aW9uIGF1dGhvcml6YXRpb24gYnkgaXRzIGlkLlxuICAgICAgVGhlIHBhcmFtZXRlcnMgYXJlIHRoZSB0cmFuc2FjdGlvbiBpZCBhbmQgdGhlIGdpZnQgY2FyZCBpZC5cbiAgICAqL1xuICAgIHJldHVybiB7fVxuICB9XG5cbiAgcHVibGljIGNyZWF0ZUNhbmNlbGxhdGlvbihcbiAgICBfOiBzdHJpbmcsXG4gICAgX186IHN0cmluZyxcbiAgICBfX186IENyZWF0ZUNhbmNlbGxhdGlvbkJvZHlcbiAgKSB7XG4gICAgLypcbiAgICAgIE1ldGhvZCB0aGF0IGhhbmRsZXJzIHRoZSBjYXNlIG9mIGNyZWF0aW5nIGEgdHJhbnNhY3Rpb24gY2FuY2VsbGF0aW9uLlxuICAgICovXG5cbiAgICAvLyBjb25zdCByZXMgPSB7XG4gICAgLy8gICBvaWQ6IFwiNzU4MmQ5M2JhY2NjNDRlOTg2N2IwYjg2MTY5NmZjMGFcIixcbiAgICAvLyAgIHZhbHVlOiAxMjMsXG4gICAgLy8gICBkYXRlOiBcIjIwMTktMDMtMTlUMTQ6MzU6MTYuNzE1NzIzOFpcIlxuICAgIC8vIH1cbiAgICByZXR1cm4ge1xuICAgICAgb2lkOiBfLFxuICAgICAgdmFsdWU6IF9fXy52YWx1ZSxcbiAgICAgIGRhdGU6IG5ldyBEYXRlKClcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgbGlzdEFsbENhbmNlbGxhdGlvbnMoXzogc3RyaW5nLCBfXzogc3RyaW5nKSB7XG4gICAgLypcbiAgICAgIE1ldGhvZCB0aGF0IGhhbmRsZXJzIHRoZSBjYXNlIG9mIGdldHRpbmcgYSB0cmFuc2FjdGlvbiBhdXRob3JpemF0aW9uIGJ5IGl0cyBpZC5cbiAgICAgIFRoZSBwYXJhbWV0ZXIgaXMgdGhlIGlkLlxuICAgICovXG5cbiAgICAvLyBjb25zdCByZXMgPSBbXG4gICAgLy8gICB7XG4gICAgLy8gICAgIG9pZDogXCI3NTgyZDkzYmFjY2M0NGU5ODY3YjBiODYxNjk2ZmMwYVwiLFxuICAgIC8vICAgICB2YWx1ZTogNzc3LFxuICAgIC8vICAgICBkYXRlOiBcIjIwMTktMDMtMTlUMTQ6MzU6MTYuNzE1NzIzOFpcIlxuICAgIC8vICAgfVxuICAgIC8vIF1cbiAgICAvLyBjb25zdCByZXMyOiBhbnkgPSBbXVxuICAgIHJldHVybiBbXVxuICB9XG5cbiAgcHVibGljIGNyZWF0ZVNldHRsZW1lbnQoXzogc3RyaW5nLCBfXzogc3RyaW5nLCBfX186IENyZWF0ZVNldHRsZW1lbnRCb2R5KSB7XG4gICAgLypcbiAgICAgIE1ldGhvZCB0aGF0IGhhbmRsZXJzIHRoZSBjYXNlIG9mIGNyZWF0aW5nIGEgdHJhbnNhY3Rpb24gc2V0dGxlbWVudC5cbiAgICAqL1xuICAgIHJldHVybiB7XG4gICAgICBvaWQ6IF8sXG4gICAgICB2YWx1ZTogX19fLnZhbHVlLFxuICAgICAgZGF0ZTogbmV3IERhdGUoKVxuICAgIH1cbiAgfVxuXG4gIHB1YmxpYyBsaXN0QWxsU2V0dGxlbWVudHMoXzogc3RyaW5nLCBfXzogc3RyaW5nKSB7XG4gICAgLypcbiAgICAgIE1ldGhvZCB0aGF0IGhhbmRsZXJzIHRoZSBjYXNlIG9mIGdldHRpbmcgYSB0cmFuc2FjdGlvbiBhdXRob3JpemF0aW9uIGJ5IGl0cyBpZC5cbiAgICAgIFRoZSBwYXJhbWV0ZXIgaXMgdGhlIGlkLlxuICAgICovXG4gICAgcmV0dXJuIHt9XG4gIH1cbn1cbiJdfQ==