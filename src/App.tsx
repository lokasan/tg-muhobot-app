import React, {useEffect} from 'react';
import './App.css';
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
                        query_id: number,
                    },
                },
                MainButton: {
                    show: () => void,
                    hide: () => void,
                    isVisible: boolean,
                    setParams: ({text}: { text: string }) => {}
                },
                onEvent: (cls: string, callback: () => void) => void,
                offEvent: (cls: string, callback: () => void) => void,
                sendData: (bytes: string) => void,
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

    return (
    <>
        <Routes>
            <Route index element={<ProductList/>}/>
            <Route path={'/tg-muhobot-app/form'} element={<Form/>}/>
        </Routes>
    </>
  );
}

export default App;