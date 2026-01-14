import { json } from 'co-body'

export async function getOrCreateGiftCard(ctx: Context) {
  // console.log(ctx)
  const {
    clients: { giftCardProvider },
    vtex: {
      route: {
        params: { giftCardId },
      },
    },
  } = ctx

  if (giftCardId) {
    // Validação: se o id for maior que 10, retorna erro 500
    const idNumber = Number(giftCardId)
    if (!isNaN(idNumber) && idNumber > 10) {
      ctx.status = 500
      ctx.body = {
        message: 'Internal Server Error: Gift card ID cannot be greater than 10',
        status: 500,
      }
      ctx.set('Cache-Control', 'no-cache,no-store')
      return
    }
    ctx.body = giftCardProvider.getGiftCardById(giftCardId as string)
  } else {
    const body = await json(ctx.req)
    ctx.body = giftCardProvider.createGiftCard(body)
  }

  ctx.status = 200
  ctx.set('Cache-Control', 'no-cache,no-store')
}

export async function listGiftCards(ctx: Context) {
  const body = await json(ctx.req)

  const {
    clients: { giftCardProvider },
  } = ctx

  ctx.status = 200
  ctx.set('Cache-Control', 'no-cache,no-store')
  ctx.body = giftCardProvider.getListOfGiftCards(body)
}
