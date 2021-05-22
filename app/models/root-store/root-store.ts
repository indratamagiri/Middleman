import { Instance, SnapshotOut, types } from "mobx-state-tree"

/**
 * A RootStore model.
 */
// prettier-ignore


export const RootStoreModel = types.model("RootStore").props({

}).actions(self => ({
}))

/**
 * The RootStore instance.
 */
export interface RootStore extends Instance<typeof RootStoreModel> {}

/**
 * The data of a RootStore.
 */
export interface RootStoreSnapshot extends SnapshotOut<typeof RootStoreModel> {}
