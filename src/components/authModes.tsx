import React, { useState, useEffect } from 'react';
import { onAuthStateChanged, signOut, User } from 'firebase/auth';
import { auth } from '../pages/firebaseConfig';
import { IonButton } from '@ionic/react';
import { useHistory } from 'react-router';
import './authModes.css'

function AuthModes() {
  const [authenticatedUser, setAuthenticatedUser] = useState<User | null>(null);
  const history = useHistory();
  
   
function signout() {
      signOut(auth)
        .then(() => {
          // Sign-out successful.
          history.push('/home');
        })
        .catch((error) => {
          // An error happened.
        });
    }
  
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthenticatedUser(user);
      } else {
        setAuthenticatedUser(null);
      }
    });
    return () => unsubscribe();
  }, []);

 
  return (
    <>
      {authenticatedUser === null ? (
        <>
         
          <a href="/login"><h6>Login</h6></a>
        </>
      ) : (
          <>
          <div className='modes'>

         {/* <button style={{margin: '10px', backgroundColor: 'silver'}}> <p style={{color: 'black', fontSize: '13px', fontWeight: 'bold',padding:'5px',display:'flex',justifyContent:'center', marginTop:'5px'}}>welcome: {auth.currentUser?.email}</p></button> */}
          
           {/* <a href="/profile/dashboard"><h6 style={{textAlign:'center'}}>Dashboard</h6></a> */}
       {/* <button style={{display:'flex',justifyContent:'center', margin: '0 0 0 30px', backgroundColor: 'silver'}}
       onClick={signout}><p style={{color: 'black', fontSize: '13px', fontWeight: 'bold',padding:'5px',display:'flex',justifyContent:'center', flexWrap:'wrap',marginTop:'5px'}}>Sign Out</p></button> */}
          <IonButton expand='block' href="/medicine"><p>Medicine</p></IonButton>
          <IonButton expand='block'
          ><p>Logistics</p></IonButton>
          </div>
        </>
      )}
    </>
  );
}

export default AuthModes;
