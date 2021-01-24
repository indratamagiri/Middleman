import { Instance, SnapshotOut, types } from "mobx-state-tree"
import * as storage from "../../utils/storage"
import { createEnvironment } from "../root-store/setup-root-store"

/**
 * Model description here for TypeScript hints.
 */
export const ItemModel = types
  .model("Item")
  .props({})
  .views(self => ({})) // eslint-disable-line @typescript-eslint/no-unused-vars
  .actions(self => ({})) // eslint-disable-line @typescript-eslint/no-unused-vars

/**
  * Un-comment the following to omit model attributes from your snapshots (and from async storage).
  * Useful for sensitive data like passwords, or transitive state like whether a modal is open.

  * Note that you'll need to import `omit` from ramda, which is already included in the project!
  *  .postProcessSnapshot(omit(["password", "socialSecurityNumber", "creditCardNumber"]))
  */

export async function setupItemModel() {
  let itemModel: ItemType
  let data: any

  const env = await createEnvironment()
  try {
  // load data from storage
    data = (await storage.load('ItemModel')) || {}
    itemModel = ItemModel.create(data, env)
  } catch (e) {
    itemModel = ItemModel.create({}, env)
  }

  return itemModel
}

type ItemType = Instance<typeof ItemModel>
export interface Item extends ItemType {}
type ItemSnapshotType = SnapshotOut<typeof ItemModel>
export interface ItemSnapshot extends ItemSnapshotType {}
