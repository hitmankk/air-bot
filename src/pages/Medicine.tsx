import React, { useEffect, useState } from 'react';
import { IonPage, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonGrid, IonRow, IonCol, IonContent } from '@ionic/react';
import Nav from '../components/nav';
import './medicine.css';
import { IonIcon } from '@ionic/react';
import { medical } from 'ionicons/icons';
import {db} from './firebaseConfig'; // Import your Firebase Realtime Database instance
import { ref, get, DataSnapshot } from 'firebase/database'; // Import Firebase Realtime Database methods

// Define the type for the 'kits' data
interface Kit {
  dp: string | undefined;
  
  name: string;
  // Add other fields as needed
}

const Medicine = () => {
  const [kits, setKits] = useState<Kit[]>([]);

  useEffect(() => {
    // Fetch data from the Firebase Realtime Database when the component mounts
    const fetchData = async () => {
      try {
        const kitsRef = ref(db, 'kits'); // Reference to the 'kits' node in the database
        const snapshot = await get(kitsRef); // Get data from the reference

        if (snapshot.exists()) {
          const kitData = snapshot.val(); // Extract data from the snapshot
          const kitsArray: Kit[] = Object.values(kitData); // Specify the type as Kit[]
          setKits(kitsArray); // Set state with the data
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData(); // Call the fetchData function when the component mounts
  }, []);

  return (
      <>
      <Nav />
              <IonContent>
      

     
        <h1>Medicine Kits</h1>
        <IonGrid>
          <IonRow>
            {kits.map((kit, index) => (
                <IonCol size="6" key={index}>
                <IonCard>
                  <img src={kit.dp} alt={kit.name} />
                  <IonCardHeader>
                    <IonCardTitle>{kit.name}</IonCardTitle>
                  </IonCardHeader>
                  {/* Add other kit details as needed */}
                </IonCard>
              </IonCol>
            ))}
          </IonRow>
        </IonGrid>
    

           </IonContent>
    </>
  );
};

export default Medicine;
