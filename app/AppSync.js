import React, {useEffect} from "react";
import {View} from 'react-native'
import { Config } from "./models/Config";
import RealmContext from "./models";

const {useRealm,useObject} = RealmContext

export const AppSync = () => {
  
  const realm = useRealm()

  //Subscribe to the config value
  useEffect(() => {
    realm.subscriptions.update((mutableSubs) => {
      mutableSubs.add(realm.objects(Config));
    });
  }, [realm])

  //Get the config value here
  const data = useObject(Config, Realm.BSON.ObjectID('63fbe334fd6b7b92d9875a79'))

  console.log(data)
  console.log('RENDER')

  return (
    <View>

    </View>
  )
}
