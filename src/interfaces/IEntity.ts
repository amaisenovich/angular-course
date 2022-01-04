export interface IEntity<T> {
  get id(): string;

  copy(): T;
}
