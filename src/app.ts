import fastify from 'fastify'
import { transactionsRoutes } from './routes/transactions'
import cookie from '@fastify/cookie'

export const app = fastify()

// Middleware global para listar as rotas em contexto global e não local somente local
// Não há caso de uso específico para a aplicação, apenas exemplificação
app.addHook('preHandler', async (request, reply) => {
  console.log(`[${request.method}] ${request.url}`)
})

app.register(cookie)
app.register(transactionsRoutes, {
  prefix: 'transactions',
})

// app.get('/hello', async () => {
//   return 'Hello world'
// })
