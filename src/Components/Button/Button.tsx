// @flow
import * as React from 'react';
import './Button.css';

type action_type = 'add' | 'remove' | 'checkout' | 'close';

type Props = {
    action_type: action_type,
    title: string,
    isDisable: boolean,
    onClick: () => void
};
export const Button = (props: Props) => {
    return (
        <button className={`btn 
        ${
            (props.action_type === 'add' && 'add') || 
            (props.action_type === 'remove' && 'remove') || 
            (props.action_type === 'checkout' && 'checkout') ||
            (props.action_type === 'close' && 'close')}`
        } disabled={props.isDisable} onClick={props.onClick}>
            {props.title}
        </button>
    );
};