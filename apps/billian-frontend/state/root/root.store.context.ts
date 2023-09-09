import { createContext, useContext } from 'react'
import { RootStore, RootStoreModel } from './root.store'

/**
 * Create a context to access stores from the root component
 */
const RootStoreContext = createContext<RootStore>(RootStoreModel.create({}))

/**
 * The provider root component uses to expose the root store
 */
export const RootStoreProvider = RootStoreContext.Provider

/**
 * A hook to gain access to stores
 * `const { someStore, someOtherStore } = useStores()`
 * or `const rootStore = useStores()`
 */
export const useStores = (): RootStore => useContext(RootStoreContext)
