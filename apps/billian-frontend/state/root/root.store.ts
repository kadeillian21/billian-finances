import { Instance, SnapshotOut, types } from 'mobx-state-tree'
import { AuthStoreModel } from './auth.store'

/**
 * RootStore
 */
export const RootStoreModel = types
  .model('RootStore')
  .props({
    authStore: types.optional(AuthStoreModel, {}),
  })

export interface RootStore extends Instance<typeof RootStoreModel> {}
export interface RootStoreSnapshot extends SnapshotOut<typeof RootStoreModel> {}
