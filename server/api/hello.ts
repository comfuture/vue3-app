import { Data } from './types'

export default (req, res): Data => {
  return {
    name: 'nuxt3',
    features: 'awsome!'
  }
}
