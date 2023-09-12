import React, {useEffect} from 'react';
import {Button} from "../Button/Button";
import {tg} from "../../App";

export const Header = () => {
    useEffect(() => {
        tg.ready()
    }, [])

    const onClose = () => {
        tg.close()
    }

    return (
        <div className={'header'}>
            <span className={'username'}>{tg.initDataUnsafe?.user?.username}</span>
            <Button action_type="close" title={'Закрыть'} isDisable={false} onClick={onClose}/>
        </div>
    );
};


