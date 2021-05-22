import { flow, Instance, SnapshotOut, types } from "mobx-state-tree"
import { ToastAndroid } from "react-native"
import { AddAddress, AddAddressApi, AddPhoneNumber, AddPhoneNumberApi, AddPhoto, AddPhotoApi, GetProfileInfo, GetProfileInfoApi } from "../../services/api/api-profile"
import { ErrorMassage } from "../extensions/error-note"

/**
 * Model description here for TypeScript hints.
 */

const circleInfo = types.model({
  cicle_name: types.string,
  total_member: types.number,
  admin: types.boolean
})

export const ProfileModel = types
  .model("Profile")
  .props({
    code: types.number,
    status: types.string,
    name: types.string,
    avatar: types.string,
    joined_on: types.string,
    email: types.string,
    is_admin: types.boolean,
    circle_info: types.maybeNull(circleInfo),
    fetchingProfile: types.enumeration("State", ["pending", "done", "error"]),
    errorMassageProfile: types.maybeNull(ErrorMassage),
    telphone: types.string,
    address: types.string,
  })
  .views(self => ({})) // eslint-disable-line @typescript-eslint/no-unused-vars
  .actions(self => ({
    GetDataProfile: flow(function* () {
      let profilePayload: GetProfileInfo = null
      self.fetchingProfile = "pending"
      // ... yield can be used in async/await style
      try {
        profilePayload = yield GetProfileInfoApi();
        if (profilePayload.kind === 'ok') {
          self.code = profilePayload.payload.code;
          self.avatar = profilePayload.payload.data.avatar
          self.circle_info = profilePayload.payload.data.circle_info
          self.email = profilePayload.payload.data.email
          self.is_admin = profilePayload.payload.data.is_admin
          self.joined_on = profilePayload.payload.data.joined_on
          self.name = profilePayload.payload.data.name
          self.status = profilePayload.payload.status
        } else {
          self.errorMassageProfile = { kind: profilePayload.kind, message: profilePayload?.error?.data?.message }
          ToastAndroid.show(profilePayload?.error?.data?.message || profilePayload.kind, ToastAndroid.SHORT)
        }
        // self.userLogin = 
        self.fetchingProfile = "done"
      } catch (error) {
        ToastAndroid.show("Terjadi kesalahan", ToastAndroid.SHORT)
        self.fetchingProfile = "done"
      }
    }),
    AddPhoneNumber: flow(function* (phone_number: string) {
      let addPhonePayload: AddPhoneNumber = null
      self.telphone = phone_number;
      try {
        addPhonePayload = yield AddPhoneNumberApi(phone_number);
        if (addPhonePayload.kind === 'ok') {
          ToastAndroid.show(addPhonePayload?.payload?.data?.message || 'Berhasil', ToastAndroid.SHORT)
        } else {
          ToastAndroid.show(addPhonePayload.kind, ToastAndroid.SHORT)
        }
        // self.userLogin = 
        self.fetchingProfile = "done"
      } catch (error) {
        ToastAndroid.show("Terjadi kesalahan", ToastAndroid.SHORT)
        self.fetchingProfile = "done"
      }
    }),
    AddAddress: flow(function* (address: string) {
      let addAddressPayload: AddAddress = null
      self.telphone = address;
      try {
        addAddressPayload = yield AddAddressApi(address);
        if (addAddressPayload.kind === 'ok') {
          ToastAndroid.show(addAddressPayload?.payload?.data?.message || 'Berhasil', ToastAndroid.SHORT)
        } else {
          ToastAndroid.show(addAddressPayload.kind, ToastAndroid.SHORT)
        }
        // self.userLogin = 
        self.fetchingProfile = "done"
      } catch (error) {
        ToastAndroid.show("Terjadi kesalahan", ToastAndroid.SHORT)
        self.fetchingProfile = "done"
      }
    }),
    AddPhoto: flow(function* (avatar: string) {
      let addPhotoPayload: AddPhoto = null
      try {
        addPhotoPayload = yield AddPhotoApi(avatar);
        if (addPhotoPayload.kind === 'ok') {
          ToastAndroid.show(addPhotoPayload?.payload?.data?.message || 'Berhasil', ToastAndroid.SHORT)
          self.avatar = avatar;
        } else {
          ToastAndroid.show(addPhotoPayload.kind, ToastAndroid.SHORT)
        }
        // self.userLogin = 
        self.fetchingProfile = "done"
      } catch (error) {
        ToastAndroid.show("Terjadi kesalahan", ToastAndroid.SHORT)
        self.fetchingProfile = "done"
      }
    })
  })) // eslint-disable-line @typescript-eslint/no-unused-vars

/**
  * Un-comment the following to omit model attributes from your snapshots (and from async storage).
  * Useful for sensitive data like passwords, or transitive state like whether a modal is open.

  * Note that you'll need to import `omit` from ramda, which is already included in the project!
  *  .postProcessSnapshot(omit(["password", "socialSecurityNumber", "creditCardNumber"]))
  */

type ProfileType = Instance<typeof ProfileModel>
export interface Profile extends ProfileType { }
type ProfileSnapshotType = SnapshotOut<typeof ProfileModel>
export interface ProfileSnapshot extends ProfileSnapshotType { }

export const ProfileModelStore = ProfileModel.create({
  code: 0,
  status: '',
  name: '',
  avatar: '',
  joined_on: '',
  email: '',
  is_admin: false,
  fetchingProfile: "done",
  telphone: '',
  address: '',
});