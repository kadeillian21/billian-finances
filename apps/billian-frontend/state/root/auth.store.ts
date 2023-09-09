import { Instance, SnapshotOut, types } from 'mobx-state-tree'

const ClerkAuthModel = types.model('ClerkAuth', {
  userId: types.optional(types.string, ''),
  sessionId: types.optional(types.string, ''),
  token: types.optional(types.string, ''),
})

const ClerkUserModel = types.model('ClerkUser', {
})

export const AuthStoreModel = types
  .model('AuthStore')
  .props({
    auth: types.optional(ClerkAuthModel, {}),
    user: types.optional(ClerkUserModel, {})
  })

export interface AuthStore extends Instance<typeof AuthStoreModel> {}
export interface AuthStoreSnapshot extends SnapshotOut<typeof AuthStoreModel> {}