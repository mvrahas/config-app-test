import React, {useEffect} from 'react'
import Realm from 'realm'
import { createRealmContext, AppProvider, UserProvider, useApp} from "@realm/react"
import { Config } from "./Config"

//https://www.mongodb.com/docs/realm/sdk/react-native/use-realm-react/
    
const RealmContext = createRealmContext({
    schema:[Config],
    sync:{flexible:true}
})

const InitializationProvider = ({children})=>{

    const app = useApp()

    const signIn = async () => {
        const credentials = Realm.Credentials.anonymous()
        await app.logIn(credentials)
    }

    useEffect(()=>{signIn()},[])

    return(
        <UserProvider>
            <RealmContext.RealmProvider>
                {children}
            </RealmContext.RealmProvider>
        </UserProvider>
    )
}

export const RealmProvider = ({children})=>{
    return(
        <AppProvider id={'config-app-test-wbxat'}>
            <InitializationProvider>
                {children}
            </InitializationProvider>
        </AppProvider>
    )
}

export default RealmContext