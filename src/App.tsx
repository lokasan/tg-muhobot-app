import React, {useEffect} from 'react';
import './App.css';
import {Header} from "./Components/Header/Header";
import {Route, Routes} from "react-router-dom"
import {ProductList} from "./Components/ProductList/ProductList";
import {Form} from "./Components/Form/Form";

declare global {
    interface Window {
        Telegram: {
            WebApp: {
                close: () => {},
                ready: () => {},
                initDataUnsafe: {
                    user: {
                        username: string,
                    },
                },
                MainButton: {
                    show: () => void,
                    hide: () => void,
                    isVisible: boolean,
                    setParams: ({text}: {text: string}) => {}
                },
            },
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

    return (
    <>
      <Header/>
        <Routes>
            <Route index element={<ProductList/>}/>
            <Route path={'/tg-muhobot-app/form'} element={<Form/>}/>
        </Routes>
    </>
  );
}

export default App;
