import {config} from 'dotenv'
import {app} from './App'
config()

app.listen(process.env.PORT, () => console.log(`Servidor rodando na porta: ${process.env.PORT}`))
