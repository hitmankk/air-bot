import React from 'react';

import './home.css';
import { IonContent, IonPage } from '@ionic/react';
import Nav from '../components/nav';

const Home: React.FC = () => {
  return (
  <IonPage>
    <Nav/>
  </IonPage>

  );  
};

export default Home;
