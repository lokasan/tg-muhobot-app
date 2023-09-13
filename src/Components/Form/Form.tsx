import React, {useEffect, useState} from 'react';
import './Form.css';
import {tg} from "../../App";


export const Form = () => {
    const [country, setCountry] = useState<string>("")
    const [street, setStreet] = useState<string>("")
    const [subject, setSubject] = useState<string>("")



    useEffect(() => {
        tg.MainButton.setParams({
            text: 'Отправить данные'
        })
    }, [])

    useEffect(() => {
        if(!street || !country) {
            tg.MainButton.hide();
        } else {
            tg.MainButton.show();
        }
    }, [country, street])

    const onChangeCountry = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCountry(() => e.target.value);
    }

    const onChangeStreet = (e: React.ChangeEvent<HTMLInputElement>) => {
        setStreet(() => e.target.value);
    }

    const onChangeSubject = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSubject(() => e.target.value);
    }

    return (
        <div className={'form'}>
            <h3>Введите ваши данные</h3>
            <input className={'input'} type="text" placeholder={"Страна"} value={country} onChange={onChangeCountry}/>
            <input className={'input'} type="text" placeholder={"Улица"} value={street} onChange={onChangeStreet}/>
            <select name="" id="" className={'select'} value={subject} onChange={onChangeSubject}>
                <option value="physical">Физ. лицо</option>
                <option value="legal">Юр. лицо</option>
            </select>
            Form</div>
    )
}