import React, { useState } from 'react'
import context from './maincontext'
const Context = ({children}) => {
    const [signUp,setSignUp]=useState({
        Name:'',
        Email:'',
        Password:''
    })
    const abc=5
  return (
    <context.Provider value={{signUp,setSignUp,abc}}>
        {children}
    </context.Provider>
  )
}

export default Context