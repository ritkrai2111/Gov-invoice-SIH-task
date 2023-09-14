import { IonButton, IonContent, IonHeader, IonIcon, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Tab3.css';
import { person, settings } from 'ionicons/icons';

const Tab3 = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Setting</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <div className='tab-third-page'>
          <IonButton className='setting-btn'>
            <span>Change account</span>
            <IonIcon icon={person}/>
          </IonButton>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
