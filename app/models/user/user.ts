import { Instance, SnapshotOut, types, flow } from "mobx-state-tree"
import { ToastAndroid } from "react-native"
import { GetRegister, GetResultLogin, LoginApi, RegisterApi } from "../../services/api/api-login"
import { saveString } from "../../utils/storage"
import { useNavigation } from "@react-navigation/native"

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
  name: string
}

export const UserModel = types
  .model("User")
  .props({
    user: types.model({
      code: types.number,
      status : types.string,
      data: types.model({
          message : types.string,
          token : types.string
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
    }))
  })
  .views((self) => ({})) // eslint-disable-line @typescript-eslint/no-unused-vars
  .actions((self) => ({
    Login: flow(function*(param: LoginParam) {
      // <- note the star, this is a generator function!
      //const navigation = useNavigation()
      let userLogin: GetResultLogin = null
      self.fetchingLogin = "pending"
      try {
          // ... yield can be used in async/await style
          userLogin = yield LoginApi({email: param.email, password: param.password})
          if(userLogin.kind === 'ok'){
            self.user.code = userLogin.data.code;
            self.user.data.message = userLogin.data.data.message;
            self.user.data.token = userLogin.data.data.token;
            yield saveString('token', userLogin.data.data.token)
            //navigation.navigate('Home')
          } else {
            self.errorMassage = userLogin.kind
            self.errorMassage.message = userLogin?.data?.data?.message || ''
            ToastAndroid.show(userLogin?.data?.data?.message || userLogin.kind, ToastAndroid.SHORT)
          }
          // self.userLogin = 
          self.fetchingLogin = "done"
      } catch (error) {
          // ... including try/catch error handling
          console.error("Failed to fetch projects", error)
          self.fetchingLogin = "error"
      }
      // The action will return a promise that resolves to the returned value
      // (or rejects with anything thrown from the action)
      return userLogin
  }),
  Register: flow(function*(param: RegisterParam) {
    // <- note the star, this is a generator function!
    let userRegister: GetRegister = null
    self.fetchingLogin = "pending"
    try {
        // ... yield can be used in async/await style
        userRegister = yield RegisterApi({email: param.email, password: param.password, name: param.name })
        if(userRegister.kind === 'ok'){
          ToastAndroid.show("Register Success", ToastAndroid.SHORT)
        } else {
          self.errorMassageRegister.kind = userRegister?.kind
          self.errorMassageRegister.message = userRegister?.data?.data?.message || ''
          ToastAndroid.show(userRegister?.data?.data?.message || userRegister?.kind, ToastAndroid.SHORT)
        }
        // self.userLogin = 
        self.fetchingLogin = "done"
    } catch (error) {
        // ... including try/catch error handling
        console.error("Failed to fetch projects", error)
        self.fetchingLogin = "error"
    }
    // The action will return a promise that resolves to the returned value
    // (or rejects with anything thrown from the action)
    //return userRegister
}),
CheckValue: ((param: RegisterParam) => {
  
  self.fetchingLogin = "pending"
}),
  })) // eslint-disable-line @typescript-eslint/no-unused-vars

/**
 * Un-comment the following to omit model attributes from your snapshots (and from async storage).
 * Useful for sensitive data like passwords, or transitive state like whether a modal is open.

 * Note that you'll need to import `omit` from ramda, which is already included in the project!
 *  .postProcessSnapshot(omit(["password", "socialSecurityNumber", "creditCardNumber"]))
 */

type UserType = Instance<typeof UserModel>
export interface User extends UserType {}
type UserSnapshotType = SnapshotOut<typeof UserModel>
export interface UserSnapshot extends UserSnapshotType {}

export const UserModelStore = UserModel.create({
    errorMassage: null,
    fetchingLogin: "done",
    user: {
      code: 0,
      data: {
        message: '',
        token: '',
      },
      status: ''
    }
});
