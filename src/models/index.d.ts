import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type UsersiMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type TodoMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Usersi {
  readonly id: string;
  readonly login?: string;
  readonly email?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Usersi, UsersiMetaData>);
  static copyOf(source: Usersi, mutator: (draft: MutableModel<Usersi, UsersiMetaData>) => MutableModel<Usersi, UsersiMetaData> | void): Usersi;
}

export declare class Todo {
  readonly id: string;
  readonly description?: string;
  readonly isCompleted?: boolean;
  readonly userId?: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Todo, TodoMetaData>);
  static copyOf(source: Todo, mutator: (draft: MutableModel<Todo, TodoMetaData>) => MutableModel<Todo, TodoMetaData> | void): Todo;
}