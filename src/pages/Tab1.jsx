import { IonContent, IonHeader, IonButton, IonItem, IonLabel, IonPage, IonTitle, IonToolbar, IonIcon, IonInput } from '@ionic/react';
import './Tab1.css';
import { add, addCircle, closeCircle, cloudUpload, trash } from 'ionicons/icons';
import { useEffect, useState } from 'react';

const Tab1 = () => {

  const [isCreate, setIsCreate] = useState(true);
  const handleCreateChange = (e) => {
    e.preventDefault();
    setIsCreate(!isCreate);
  }
  const handleCancel = (e) => {
    e.preventDefault();
    setIsCreate(!isCreate);
    setItems(initialItems);
    setBillTo(initialBillTo);
    setFrom(initialFrom);
    setInvoiceNum(1);
    setInvoiceDate('');
    setTotalAmount(0);
  }
  const [invoiceNum, setInvoiceNum] = useState(1);
  const [invoiceDate, setInvoiceDate] = useState('');
  const [totalAmount, setTotalAmount] = useState(0);
  const calculateTotalAmount = () => {
    let calculatedTotalAmount = 0;
    for (const item of items) {
      if(item.amount)
        calculatedTotalAmount += Number(item.amount);
    }
    return calculatedTotalAmount;
  };
  const initialBillTo = {
    name: '',
    add_1: '',
    add_2: '',
    phone: ''
  }
  const [billTo, setBillTo] = useState(initialBillTo);
  const initialFrom = {
    name: '',
    add_1: '',
    add_2: '',
    phone: ''
  }
  const [from, setFrom] = useState(initialFrom);
  const initialItems = [
    {
      key: 1,
      description: '',
      amount: undefined,
    },
    {
      key: 2,
      description: '',
      amount: undefined,
    }
  ];
  const [items, setItems] = useState(initialItems);
  const addNewItem = () => {
    const newItem = {
      key: items.length + 1,
      description: '',
      amount: undefined,
    };
    setItems([...items, newItem]);
  };
  const removeLastItem = () => {
    const updatedItems = [...items];
    updatedItems.pop(); // Remove the last item from the updated array
    setItems(updatedItems);
  };
  const handleDescriptionChange = (e, key) => {
    const updatedItems = [...items];
    const itemIndex = updatedItems.findIndex((item) => item.key === key);
  
    if (itemIndex !== -1) {
      updatedItems[itemIndex].description = e.target.value; // Update the description
      setItems(updatedItems);
    }
  };
  const handleAmountChange = (e, key) => {
    const updatedItems = [...items];
    const itemIndex = updatedItems.findIndex((item) => item.key === key);
  
    if (itemIndex !== -1) {
      updatedItems[itemIndex].amount = e.target.value; // Update the amount
      setItems(updatedItems);
    }
  };

  const handleBillToChange = (e) => {
    const { name, value } = e.target;
    setBillTo({ ...billTo, [name]: value });
  };

  const handleFromChange = (e) => {
    const { name, value } = e.target;
    setFrom({ ...from, [name]: value });
  };

  useEffect(() => {
    const newTotalAmount = calculateTotalAmount();
    setTotalAmount(newTotalAmount);
  }, [items]);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle className='home-title'>
            Invoice
            {!isCreate && <div className='home-form-btn-div'><IonButton onClick={handleCancel} size='small' className='cancel-btn'>
              <IonIcon className='upload-icon' icon={closeCircle}></IonIcon>
              <span>cancel</span>
            </IonButton><IonButton size='small' className='upload-btn'>
                <IonIcon className='upload-icon' icon={cloudUpload}></IonIcon>
                <span>Upload</span>
              </IonButton></div>}
          </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        {isCreate ? <div className="ion-text-center">
            <IonButton onClick={handleCreateChange}>
              <IonIcon className='create-icon' icon={addCircle}></IonIcon>
              Create
            </IonButton> 
          </div>
          :
          <div className='form-paper'>
            <form>
              <h2><b>Invoice Details</b></h2>
              <div className='sub-form-div'>
                <div className='invoice-serial'>
                  <span>INVOICE # :</span>
                  <span>{invoiceNum}</span>
                </div>
                <div className='invoice-date'>
                  <span>INVOICE DATE :</span>
                  <input type='date' value={invoiceDate} onChange={(e) => setInvoiceDate(e.target.value)} placeholder='DD-MM-YY' />
                </div>
                <div className='details-combined'>
                  <div className="person-details">
                    <span>BILL TO:</span>
                    <input
                      type="text"
                      name="name"
                      placeholder="[Name]"
                      value={billTo.name}
                      onChange={handleBillToChange}
                    />
                    <input
                      type="text"
                      name="add_1"
                      placeholder="[Street Address]"
                      value={billTo.add_1}
                      onChange={handleBillToChange}
                    />
                    <input
                      type="text"
                      name="add_2"
                      placeholder="[City, State, Zip]"
                      value={billTo.add_2}
                      onChange={handleBillToChange}
                    />
                    <input
                      type="text"
                      name="phone"
                      placeholder="[94xx51xx56]"
                      value={billTo.phone}
                      onChange={handleBillToChange}
                    />
                  </div>
                  <div className="person-details">
                    <span>FROM: </span>
                    <input
                      type="text"
                      name="name"
                      placeholder="[Name]"
                      value={from.name}
                      onChange={handleFromChange}
                    />
                    <input
                      type="text"
                      name="add_1"
                      placeholder="[Street Address]"
                      value={from.add_1}
                      onChange={handleFromChange}
                    />
                    <input
                      type="text"
                      name="add_2"
                      placeholder="[City, State, Zip]"
                      value={from.add_2}
                      onChange={handleFromChange}
                    />
                    <input
                      type="text"
                      name="phone"
                      placeholder="[94xx51xx56]"
                      value={from.phone}
                      onChange={handleFromChange}
                    />
                  </div>
                </div>
                <table>
                  <thead>
                    <th>Description</th>
                    <th>
                      Amount
                    </th>
                  </thead>
                  <tbody>
                    {items.map((item) => (
                      <tr key={item.key}>
                        <td>
                          <input
                            type='text'
                            value={item.description} // Bind the value to the description property
                            onChange={(e) => handleDescriptionChange(e, item.key)} // Handle changes
                          />
                        </td>
                        <td>
                          <input
                            type='number'
                            value={item.amount} // Bind the value to the amount property
                            onChange={(e) => handleAmountChange(e, item.key)} // Handle changes
                          />
                        </td>
                      </tr>
                    ))}
                    <div className='dynamic-btns-div'>
                      {items.length >= 2 && <IonButton size='small' onClick={removeLastItem} >
                          <IonIcon className='upload-icon' icon={trash}></IonIcon>
                        </IonButton>}
                        <IonButton size='small' onClick={addNewItem}>
                          <IonIcon className='upload-icon' icon={add}></IonIcon>
                        </IonButton>
                      </div>
                  </tbody>
                  <tr className='final-row'>
                    <td>Total: </td>
                    <td>{totalAmount}</td>
                  </tr>
                </table>
              </div>
            </form>
          </div>
        }
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
