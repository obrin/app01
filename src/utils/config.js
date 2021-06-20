import { UnleashClient } from 'unleash-proxy-client'

console.log('process', process.env.REACT_APP_UNLEASH_KEY)
const config = new UnleashClient({
  // url: 'http://config-proxy.home.local/proxy',
  // clientKey: process.env.REACT_APP_UNLEASH_KEY,
  url: 'http://unleash.herokuapp.com/api/',
  clientKey: '3bd74da5b341d868443134377ba5d802ea1e6fa2d2a948276ade1f092bec8d92',
  appName: 'sandbox-frontend-01',
  refreshInterval: 2,
})

config.start()

export default config
