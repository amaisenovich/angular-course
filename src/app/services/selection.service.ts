import { EventEmitter } from "@angular/core"
import { IEntity } from "src/app/interfaces/IEntity"

export class SelectionService<T extends IEntity<T>> {
  private selected: T | undefined = undefined

  onSelected = new EventEmitter<T | undefined>()

  get = () => {
    return this.selected?.copy()
  }

  select = (selected: T | undefined) => {
    if (this.selected?.id === selected?.id) {
      return
    }

    this.selected = selected?.copy()
    this.onSelected.emit(this.get())
  }
}
