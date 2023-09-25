import React,{useState} from 'react';
import Nav from '../components/nav';
import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonImg, IonInput, IonPage } from '@ionic/react';
import { Link, useHistory } from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword, sendEmailVerification } from 'firebase/auth';
import './register.css';
import { auth } from './firebaseConfig';

const Register  = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [cpassword, setCPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);
  const history = useHistory();

  const registerUser = () => {
    if (!username || !password) {
      setErrorMsg('Fill all Fields');
      return;
    }
    setErrorMsg('');

    createUserWithEmailAndPassword(auth, username, password)
    .then((userCredential) => {
      const user = userCredential.user;
      // sendEmailVerification is the function which will initiate the email verification via firebase by sending the user a email on there entered email id 
     
    })
    .catch((error) => {
      setErrorMsg(error.message);
      console.error('Error registering user:', error);
    });
  
  };


  return (
      <>
       <IonPage>
        <Nav />
        <IonContent className="ion-padding">
          {/* <img className='loginimg' src="../img/img4.png" alt="" /> */}
          
          <IonCard  className="container2 ion-padding" >
            <IonCardHeader>
              <IonCardTitle>
             <p className="ion-text-new">Welcome</p>
                
              </IonCardTitle>
              <IonCardSubtitle><p className="ion-text-title">Register </p> </IonCardSubtitle>
            </IonCardHeader>
            <IonCardContent>
              <IonInput className='input' type="email" placeholder="Email" onIonChange={(e: any) => setUsername(e.target.value)} />
              <IonInput className='input' type="password" placeholder="Password" onIonChange={(e: any) => setPassword(e.target.value)} />
              <IonInput
                type="password"
                placeholder="Confirm Password"
                onIonChange={(e: any) => setCPassword(e.target.value)}
/>
              <b style={{ color: 'red' }}>{errorMsg}</b>
              <br />
              <IonButton style={{color: 'white'}} onClick={registerUser} disabled={submitButtonDisabled}>
                Register
              </IonButton>
              <p>
                Already have an account? <Link to="/Login">Login</Link>
              </p>
            </IonCardContent>
          </IonCard>
        </IonContent>
      </IonPage>
      </>
  )
}

export default Register;
