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
            <Button action_type="close" title={'Закрыть'} isDisable={false} onClick={onClose}/>
        </div>
    );
};


