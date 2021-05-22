import { Instance, SnapshotOut, types, flow } from "mobx-state-tree"
import { ToastAndroid } from "react-native"
import { ChangePasswordApi, GetRegister, GetResultLogin, LoginApi, RegisterApi, ChangePasswordResult } from "../../services/api/api-login"
import { saveString, remove } from "../../utils/storage"

/**
 * Model description here for TypeScript hints.
 */

type LoginParam = {
  email: string,
  password: string
}

type RegisterParam = {
  email: string,
  password: string,
  username: string
}

type changePasswordParam = {
  old_password: string,
  new_password: string
}

const changePassword = types.model({
  message: types.string,
  kind: types.string,
  error: types.maybeNull(types.string)
})

export const UserModel = types
  .model("User")
  .props({
    user: types.model({
      code: types.number,
      status: types.string,
      data: types.model({
        message: types.string,
        token: types.string
      })
    }),
    fetchingLogin: types.enumeration("State", ["pending", "done", "error"]),
    errorMassage: types.maybeNull(types.model({
      kind: types.string,
      message: types.string
    })),
    errorMassageRegister: types.maybeNull(types.model({
      kind: types.string,
      message: types.string
    })),
    changePassword: types.optional(changePassword, { kind: '', message: '' }),
    fetchingChangePassword: types.enumeration("State", ["pending", "done", "error"]),
  })
  .views((self) => ({})) // eslint-disable-line @typescript-eslint/no-unused-vars
  .actions((self) => ({
    Login: flow(function* (param: LoginParam) {
      // <- note the star, this is a generator function!
      //const navigation = useNavigation()
      let userLogin: GetResultLogin = null
      self.fetchingLogin = "pending"
      try {
        // ... yield can be used in async/await style
        userLogin = yield LoginApi({ email: param.email, password: param.password })
        console.tron.log(userLogin)
        if (userLogin.kind === 'ok') {
          self.user.code = userLogin.payload.code;
          self.user.data.message = userLogin.payload.data.message;
          self.user.data.token = userLogin.payload.data.token;
          yield saveString('token', userLogin.payload.data.token)
        } else {
          self.errorMassage.kind = userLogin?.kind
          self.errorMassage.message = userLogin?.payload?.data?.message || ''
          ToastAndroid.show(userLogin?.payload?.data?.message || userLogin.kind, ToastAndroid.SHORT)
        }
        // self.userLogin = 
        self.fetchingLogin = "done"
      } catch (error) {
        ToastAndroid.show("Terjadi kesalahan", ToastAndroid.SHORT)
        self.fetchingLogin = "done"
      }
      // The action will return a promise that resolves to the returned value
      // (or rejects with anything thrown from the action)
      return userLogin
    }),
    Register: flow(function* (param: RegisterParam) {
      // <- note the star, this is a generator function!
      let userRegister: GetRegister = null
      self.fetchingLogin = "pending"
      try {
        // ... yield can be used in async/await style
        userRegister = yield RegisterApi({ email: param.email, password: param.password, name: param.username })
        if (userRegister.kind === 'ok') {
          ToastAndroid.show("Register Success", ToastAndroid.SHORT)
        } else {
          self.errorMassageRegister.kind = userRegister?.kind
          self.errorMassageRegister.message = userRegister?.payload?.data?.message || ''
          ToastAndroid.show(userRegister?.payload?.data?.message || userRegister?.kind, ToastAndroid.SHORT)
        }
        // self.userLogin = 
        self.fetchingLogin = "done"
      } catch (error) {
        ToastAndroid.show("Terjadi kesalahan", ToastAndroid.SHORT)
        self.fetchingLogin = "done"
      }
      // The action will return a promise that resolves to the returned value
      // (or rejects with anything thrown from the action)
      return userRegister
    }),

    Logout: flow(function* () {
      try {
        yield remove('token')
        return true
      } catch (error) {
        ToastAndroid.show(error, ToastAndroid.SHORT)
      }
      return false
    }),

    ChangePassword: flow(function* (param: changePasswordParam) {
      try {
        self.fetchingChangePassword = "pending"
        // ... yield can be used in async/await style
        const changePassword = yield ChangePasswordApi(param)
        if (changePassword.kind === 'ok') {
          ToastAndroid.show("Register Success", ToastAndroid.SHORT)
          self.changePassword = { error: null, message: changePassword.payload.data.message, kind: changePassword.kind }
          return true
        } else {
          self.changePassword = { error: changePassword.payload.data.message, message: '', kind: changePassword.kind }
          ToastAndroid.show(changePassword?.payload?.data?.message || changePassword.kind, ToastAndroid.SHORT)
        }
        // self.userLogin = 
        self.fetchingChangePassword = "done"
      } catch (error) {
        ToastAndroid.show("Terjadi kesalahan", ToastAndroid.SHORT)
        self.fetchingChangePassword = "done"
      }
      // The action will return a promise that resolves to the returned value
      // (or rejects with anything thrown from the action)
      return false
    }),
  })) // eslint-disable-line @typescript-eslint/no-unused-vars

/**
 * Un-comment the following to omit model attributes from your snapshots (and from async storage).
 * Useful for sensitive data like passwords, or transitive state like whether a modal is open.

 * Note that you'll need to import `omit` from ramda, which is already included in the project!
 *  .postProcessSnapshot(omit(["password", "socialSecurityNumber", "creditCardNumber"]))
 */

type UserType = Instance<typeof UserModel>
export interface User extends UserType { }
type UserSnapshotType = SnapshotOut<typeof UserModel>
export interface UserSnapshot extends UserSnapshotType { }

export const UserModelStore = UserModel.create({
  errorMassage: {
    kind: '',
    message: ''
  },
  fetchingLogin: "done",
  user: {
    code: 0,
    data: {
      message: '',
      token: '',
    },
    status: ''
  },
  fetchingChangePassword: 'done',
});
