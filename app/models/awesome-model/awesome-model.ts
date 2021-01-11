import { Instance, SnapshotOut, types } from "mobx-state-tree"

/**
 * Model description here for TypeScript hints.
 */

const Note = types.model({
  title: types.string,
  toggle: types.boolean
})

type ChangeParam = {
  title: string,
  toggle: boolean,
}

export const AwesomeModelModel = types
  .model("AwesomeModel", {
    noteStore: types.optional(Note, { title: '', toggle: false })
  })
  .views(self => ({
    getNote() {
      return self.noteStore
    },
  })) // eslint-disable-line @typescript-eslint/no-unused-vars
  .actions(self => ({
    change(param: ChangeParam) {
      self.noteStore = param
    }
  })).create({}) // eslint-disable-line @typescript-eslint/no-unused-vars

/**
  * Un-comment the following to omit model attributes from your snapshots (and from async storage).
  * Useful for sensitive data like passwords, or transitive state like whether a modal is open.

  * Note that you'll need to import `omit` from ramda, which is already included in the project!
  *  .postProcessSnapshot(omit(["password", "socialSecurityNumber", "creditCardNumber"]))
  */

type AwesomeModelType = Instance<typeof AwesomeModelModel>
export interface AwesomeModel extends AwesomeModelType {}
type AwesomeModelSnapshotType = SnapshotOut<typeof AwesomeModelModel>
export interface AwesomeModelSnapshot extends AwesomeModelSnapshotType {}
