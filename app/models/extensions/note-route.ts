
import { types } from "mobx-state-tree"

const Note = types.model({
  title: types.string,
  toggle: types.boolean
})

type NoteType = {
    title: string;
    toggle: boolean;
  }

export const NoteStore = types.model('Notes', {
  noteStore: types.array(Note)
}).actions(self => ({
  addNote(note: NoteType) {
    self.noteStore.push(note)
  }
})).create({
  noteStore: [{ toggle: false, title: 'dsd' }]
})
