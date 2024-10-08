/* eslint-disable no-console */
import mongoose from 'mongoose'
import app from './app'
import config from './app/config'

async function main() {
  try {
    await mongoose.connect(config.database_url as string)
    app.listen(config.port, () => {
      console.log(
        `Comapany management app listening on port: http://localhost:${config.port}`,
      )
    })
  } catch (error) {
    console.log(error)
  }
}

main()
