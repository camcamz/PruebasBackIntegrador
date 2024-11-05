import express from 'express'
import { expressConfig } from './src/config.js'
import notasRoutes from './src/routes/notas.routes.js'

const app = express()

app.set('port', expressConfig.port);
app.set('host', expressConfig.host);

app.use(express.json())
app.use(notasRoutes)

app.listen(app.get('port'), app.get('host'),  () => {
    console.log(`Servidor corriendo en 'http://${app.get('host')}:${app.get('port')}`)
})
