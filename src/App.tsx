import React, {useEffect} from 'react';
import './App.css';
import {Button} from "./Components/Button/Button";

declare global {
    interface Window {
        Telegram: {
            WebApp: {
                close: () => {},
                ready: () => {}
            }
        }
    }
}

const tg = window.Telegram.WebApp;

function App() {
    useEffect(() => {
        return () => {
            tg.ready()
        };
    }, []);


    const onClose = () => {
        tg.close()
    }
    return (
    <>
      Shop Store
      <Button action_type='add' title='+' isDisable={false} onClick={() => {}}/>
      <Button action_type='remove' title='-' isDisable={false} onClick={() => {}}/>
      <Button action_type='checkout' title='Order' isDisable={false} onClick={() => {}}/>
      <Button action_type='close' title='Закрыть' isDisable={false} onClick={onClose}/>
    </>
  );
}

export default App;
