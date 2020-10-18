import merge from 'lodash.merge'

import { viewerResolvers } from './Viewers'
import { userResolvers } from './User'

export const resolvers = merge(viewerResolvers, userResolvers)
