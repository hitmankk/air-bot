import { BrowserRouter, Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { ellipse, logIn, square, triangle } from 'ionicons/icons';


/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import Home from './pages/home';
import Nav from './components/nav';
import Register from './pages/register';

import 'firebase/compat/messaging';
import Login from './pages/login';
import Medicine from './pages/Medicine';
setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <BrowserRouter>
      <IonReactRouter>
        <IonRouterOutlet>
          <Route path='/home' component={Home} exact={true}/>
          <Route path='/register' component={Register}   exact/>
          <Route path='/login' component={Login}   exact/>
          <Route path='/medicine' component={Medicine}   exact/>
            
          
          <Redirect exact from="/" to="/home" />
        </IonRouterOutlet>
      </IonReactRouter>
    </BrowserRouter>
  </IonApp>
);


export default App;
