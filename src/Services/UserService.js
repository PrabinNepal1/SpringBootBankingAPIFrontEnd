import React, {useContext, useState, useEffect} from "react";

import axios from 'axios';

const baseurl = "http://localhost:8080/api/";

const AuthContext = React.createContext()

export function useAuth(){
    return useContext(AuthContext)
  }

export function AuthProvider({children}) {
    
    const [currentUser, setCurrentUser] = useState()
    const [loading, setLoading] = useState(true)
    const [token, setToken] = useState()
    const [userDetails, setUserDetails] =useState([])

    async function registerUser(username, password, email, displayname){
        return await axios
                .post(baseurl + "/account/add", {
                        username,
                        password,
                        balance,
                        email,
                        address
                });
      }

      useEffect(() =>{
        const token = sessionStorage.getItem("user");
    
        if(token != null ){
            setCurrentUser(parseJwt(token));
          }
        else{
          setCurrentUser(null);
        }
        setLoading(false)
    
      },[])

      const value = {
          registerUser
        }

      return (
        <AuthContext.Provider value={value}>
          {!loading && children}
        </AuthContext.Provider>
      )
}