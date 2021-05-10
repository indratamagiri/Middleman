import { Instance, SnapshotOut, types } from "mobx-state-tree"

/**
 * Model description here for TypeScript hints.
 */
export const ProfileModel = types
  .model("Profile")
  .props({
    name: types.string,
    avatar : types.string,
    joinedOn : types.string,
    email : types.string,
    isAdmin : types.boolean,
    circleInfo : types.model({
      circleName: types.string,
      totalMember : types.number,
      admin: types.boolean
  })
  })
  .views((self) => ({})) // eslint-disable-line @typescript-eslint/no-unused-vars
  .actions((self) => ({})) // eslint-disable-line @typescript-eslint/no-unused-vars

/**
 * Un-comment the following to omit model attributes from your snapshots (and from async storage).
 * Useful for sensitive data like passwords, or transitive state like whether a modal is open.

 * Note that you'll need to import `omit` from ramda, which is already included in the project!
 *  .postProcessSnapshot(omit(["password", "socialSecurityNumber", "creditCardNumber"]))
 */

type ProfileType = Instance<typeof ProfileModel>
export interface Profile extends ProfileType {}
type ProfileSnapshotType = SnapshotOut<typeof ProfileModel>
export interface ProfileSnapshot extends ProfileSnapshotType {}
export const UserModelStore = ProfileModel.create({});
