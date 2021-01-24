import { Instance, SnapshotOut, types } from "mobx-state-tree"

/**
 * A RootStore model.
 */
// prettier-ignore

const user = types.model({
  username: types.string,
  email: types.string,
  password: types.string,
  address: types.string,
  telp: types.string,
  accountNumber: types.string
})

type UserParam = {
  username: string,
  email: string,
  password: string,
  address: string,
  telp: string,
  accountNumber: string
}

type LoginParam = {
  email: string,
  password: string
}

export const RootStoreModel = types.model("RootStore").props({
  users: types.array(user),
  profile: types.maybeNull(user)
}).actions(self => ({
  checkUser(param: LoginParam): UserParam {
    return self.users.find(e => e.username === param.email && e.password === param.password)
  },
  register(param: UserParam) {
    self.users.push(param)
  },
  profileLogin(param: LoginParam) {
    const x = self.users.find(e => e.username === param.email && e.password === param.password)
    self.profile = { ...x }
  },
  logout() {
    self.profile = null
  }
}))

/**
 * The RootStore instance.
 */
export interface RootStore extends Instance<typeof RootStoreModel> {}

/**
 * The data of a RootStore.
 */
export interface RootStoreSnapshot extends SnapshotOut<typeof RootStoreModel> {}
