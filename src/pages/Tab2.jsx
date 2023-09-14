import { IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Tab2.css';

const Tab2 = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Firebase</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <div className='tab-second-page'>
          <IonButton>
            Invoice-1
          </IonButton>
          <IonButton>
            Inovoice-2
          </IonButton>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
