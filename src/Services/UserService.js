import React, {useContext, useState, useEffect} from "react";

import axios from 'axios';

const baseurl = "http://localhost:8080/api";

const AuthContext = React.createContext()

export function useAuth(){
    return useContext(AuthContext)
  }

export function AuthProvider({children}) {
    
    const [loading, setLoading] = useState(true)

    async function registerUser(username, password, email, balance, address){
        return await axios
                .post(baseurl + "/account/add", {
                        username,
                        password,
                        balance,
                        email,
                        address,
                        "transactions": []

                });
      }
    
    async function getUserDetails(username){
        return await axios
            .get(baseurl + `/account/username/${username}`);
    }

    async function getRecentTransations(id){
      return await axios
      .get(baseurl + `/transaction/five_recent/${id}`);
    }

    async function depositAmount(username, amount){
      return await axios
        .put(baseurl + `/account/username/deposit/${username}/${amount}`);
    }

    async function withdrawAmount(username, amount){
      return await axios
        .put(baseurl + `/account/username/withdraw/${username}/${amount}`);
    }

    async function transferAmount(fromUser, toUser, transferAmount){
      return await axios
          .put (baseurl + "/transaction/transfer", {}, {
            params:{
              fromAcc: fromUser,
              toAcc: toUser,
              amount: transferAmount
            }
          });
    }

      useEffect(() =>{
        setLoading(false)
      },[])

      const value = {
          registerUser,
          getUserDetails,
          getRecentTransations,
          depositAmount,
          withdrawAmount,
          transferAmount
        }

      return (
        <AuthContext.Provider value={value}>
          {!loading && children}
        </AuthContext.Provider>
      )
}