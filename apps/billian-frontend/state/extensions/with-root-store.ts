import { getRoot, IStateTreeNode } from 'mobx-state-tree'
import { RootStore, RootStoreModel } from '../root/root.store'

/**
 * Adds a rootStore property to the node for convenient way for stores to access other stores.
 */
export const withRootStore = (self: IStateTreeNode): { views: { readonly rootStore: RootStore } } => ({
  views: {
    /**
     * The root store.
     */
    get rootStore (): RootStore {
      return getRoot<typeof RootStoreModel>(self)
    }
  }
})

export default withRootStore
