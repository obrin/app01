import { UnleashClient } from 'unleash-proxy-client'

const config = new UnleashClient({
  url: process.env.REACT_APP_UNLEASH_URL || 'https://config-proxy.home.local/proxy',
  clientKey: process.env.REACT_APP_UNLEASH_KEY || 'secret',
  appName: 'sandbox-frontend-01',
  // refreshInterval: 2,
})

config.start()

export default config
