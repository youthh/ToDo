// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Usersi, Todo } = initSchema(schema);

export {
  Usersi,
  Todo
};