import { AwesomeModelModel, AwesomeModel } from "./awesome-model"

test("can be created", () => {
  const instance: AwesomeModel = AwesomeModelModel

  expect(instance).toBeTruthy()
})
