
import { types } from "mobx-state-tree"

export const ErrorMassage = types.model({
    kind: types.string,
    message: types.string
})