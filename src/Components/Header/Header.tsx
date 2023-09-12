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

    const onToggleButton = () => {
        if (tg.MainButton.isVisible) {
            tg.MainButton.hide();
        } else {
            tg.MainButton.show();
        }
    }

    return (
        <div className={'header'}>
            <span className={'username'}>{tg.initDataUnsafe?.user?.username}</span>
            <Button action_type="close" title={'Закрыть'} isDisable={false} onClick={onClose}/>
            <button onClick={onToggleButton}>Toggle</button>
        </div>
    );
};


