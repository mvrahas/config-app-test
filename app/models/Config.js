import {Realm} from '@realm/react';

export class Config extends Realm.Object {
    static schema = {
      name: "Config",
      properties: {
        _id: {type: 'objectId', default: () => new Realm.BSON.ObjectId()},
        isAvailable: 'bool',
        minVersion: "string",
        maxVersion: "string"
      },
      primaryKey: '_id'
    }
}