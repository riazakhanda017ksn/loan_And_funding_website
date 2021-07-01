import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import { useAuth } from './context/AuthContext'

export default function PrivateRoute ({ children, ...rest }){
    const {currentUser}=useAuth()
    return (
        
        <Route
        {...rest}
        render={({ location }) =>
          currentUser ?(
            children
          ) : (
            <Redirect
              to={{
                pathname: "/user-login",
                state: { from: location }
              }}
            />
          )
        }
      />
    )
}
