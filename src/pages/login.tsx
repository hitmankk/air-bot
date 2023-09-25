import { IonButton,  IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonIcon, IonInput, 
    IonPage } from '@ionic/react';
  import { useEffect, useState } from 'react';
   import { Link, useHistory } from 'react-router-dom';
  // import { loginUser } from '../firebaseConfig';
  import  './Login.css';
  import { auth } from './firebaseConfig';
  
  import { getAuth, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
  import Nav from '../components/nav';
  
  
  
  const Login: React.FC = () => {
    const [input] = useState<string>("");
    const history = useHistory();
  
      useEffect(() => {
          console.log(input);
      }, [input]);
  
      const [username, setUsername] = useState('')
      const [password, setpassword] = useState('')
      
      const [errorMsg, setErrorMsg] = useState("");
      const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);
      
      
   
      
    
  
  
   function login(): void {
      console.log(username,password);
      if(!setUsername||!setpassword){
        setErrorMsg("Fill all Fields");
        return;
      }
      setErrorMsg("");
      setSubmitButtonDisabled(true);
     signInWithEmailAndPassword(auth, username, password)
      .then((userCredential) => {
        // Signed in
        setSubmitButtonDisabled(false);
        const user = userCredential.user;
        console.log(user);
        history.push("/home");
      
        
      })
      .catch((error) => {
        setSubmitButtonDisabled(false);
        setErrorMsg(error.message)
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
      }
  
   
      
    return (
      <>  
           <IonPage >
           
             <Nav/>
            
           
          <IonCard className='container1 ion-padding' style={{backgroundColor: 'white',}}>
        <IonCardHeader>
  
          <IonCardTitle ><p className='ion-text-new'>      Welcome</p></IonCardTitle>
          <IonCardSubtitle>Login</IonCardSubtitle>
        </IonCardHeader>
        <IonCardContent>
        {/* <IonImg className='home1 ion-float-start'src='.\img\img3.png'></IonImg> */}
          <IonInput   placeholder='UserName?'
          onIonChange={(e: any) => setUsername(e.target.value)}/> 
          <IonInput type='password' placeholder='Password?'
          onIonChange={(e: any) => setpassword(e.target.value)}/>  
          <IonIcon name='heart'></IonIcon>
          <b style={{color:"red"}}>{errorMsg}</b> 
          <br></br>
       <IonButton style={{color:'white',}} onClick={login} >login</IonButton>
       <br />
     
          <p className='ion-padding ion-text-color'>
              New Here?  <Link to={"/profile/register"}> Register
                </Link>
          </p>
            </IonCardContent>
            </IonCard>
   </IonPage>
          
      </>
    );
  };
  
  export default Login;
  
  
  function setErrorMsg(arg0: string) {
    throw new Error('Function not implemented.');
  }
  
  function setSubmitButtonDisabled(arg0: boolean) {
    throw new Error('Function not implemented.');
  }
  
  function createUserWithEmailAndPassword(auth: any, username: string, password: string) {
    throw new Error('Function not implemented.');
  }
  
  function selectPreviousURL(state: unknown): unknown {
    throw new Error('Function not implemented.');
  }
  
  