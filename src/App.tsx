import React, {useEffect} from 'react';
import './App.css';
import {Button} from "./Components/Button/Button";
import {Header} from "./Components/Header/Header";

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

export const tg = window.Telegram.WebApp;

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
      <Header/>
    </>
  );
}

export default App;
