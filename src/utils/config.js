import { UnleashClient } from 'unleash-proxy-client'

console.log(process.env)
const config = new UnleashClient({
  url: process.env.REACT_APP_UNLEASH_URL,
  clientKey: process.env.REACT_APP_UNLEASH_KEY,
  appName: 'sandbox-frontend-01',
  // refreshInterval: 2,
})

config.start()

export default config
