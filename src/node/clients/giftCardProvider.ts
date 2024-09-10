import { ExternalClient, InstanceOptions, IOContext } from '@vtex/api'

export class GiftCardProvider extends ExternalClient {
  constructor(ctx: IOContext, options?: InstanceOptions) {
    // The first argument is the base URl of your provider API endpoint
    super('baseURL', ctx, options)
  }

  public getGiftCardById(_: string) {
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
      redemptionCode: 'dvhasdubudasdasdi',
      caption: 'Teste de autenticação',
      emissionDate: '2020-07-05T14:48:00.000Z',
      expiringDate: '2030-10-10T14:48:00.000Z',
      id: "12345",
      provider: 'wando_card',
      transaction: {
        href: 'appliancetheme/giftcardproviders/wandoTest',
      },
    }
  }

  public getListOfGiftCards(_: GiftCardListRequest) {
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
      ]
    }

    if (_.cart.redemptionCode == "LisiaCashBack") {
      return [
        {
          balance: 100000,
          caption: 'Gift card for Lisia',
          emissionDate: '2020-07-05T14:48:00.000Z',
          expiringDate: '2030-10-10T14:48:00.000Z',
          id: "Lisia123414",
          provider: 'wando_card',
          discount: "true",
          transaction: {
            href: 'appliancetheme/giftcardproviders/NascimentoTest',
          },
        },
      ]
    }
    return []
  }

  public createGiftCard(body: GiftCardRequest) {
    /*
      This is the method that will be used to connect to the provider API
      and create a gift card. It needs to create the gift card and return a body
      response in the format that VTEX expects.
    */
      return {
        balance: 10000,
        caption: body.caption,
        emissionDate: '2024-07-05T14:48:00.000Z',
        expiringDate: '2030-10-10T14:48:00.000Z',
        id: "ligiaRodolphoGlauco",
        provider: 'wando_card',
        redemptionCode: 'ligiaRodolphoGlauco_123',
        transaction: {
          href: 'appliancetheme/giftcardproviders/wandoTest',
        },
      }
  }

  public createTransaction(_: string, __: TransactionRequest) {
    /*
      This is the method that will be used to connect to the provider API
      and create a gift card. It needs to create the gift card and return a body
      response in the format that VTEX expects.
    */
    return {
      cardId: _,
      id: _,
      _self: {
        href: 'appliancetheme/giftcardproviders/wando_card',
      },
    }
  }

  public listTransactions(_: string) {
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
    ]
    return resp
  }

  public getTransactionById(_: string, __: string) {
    /*
      Method that handlers the case of getting a transaction by its id.
      The parameter is the id.
    */
    return {}
  }

  public getTransactionAuthorization(_: string, __: string) {
    /*
      Method that handlers the case of getting a transaction authorization by its id.
      The parameters are the transaction id and the gift card id.
    */
    return {}
  }

  public createCancellation(
    _: string,
    __: string,
    ___: CreateCancellationBody
  ) {
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
    }
  }

  public listAllCancellations(_: string, __: string) {
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
    return []
  }

  public createSettlement(_: string, __: string, ___: CreateSettlementBody) {
    /*
      Method that handlers the case of creating a transaction settlement.
    */
    return {
      oid: _,
      value: ___.value,
      date: new Date()
    }
  }

  public listAllSettlements(_: string, __: string) {
    /*
      Method that handlers the case of getting a transaction authorization by its id.
      The parameter is the id.
    */
    return {}
  }
}
