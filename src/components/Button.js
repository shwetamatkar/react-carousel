import React from 'react';
import { Button } from '@material-ui/core';

const ButtonComponent = (props) => {
    const { onClickEvent,isDisabled,text } = props;
    return (
        <Button variant="contained" size="large" color="primary" onClick={onClickEvent} disabled={isDisabled}>{text}</Button>
    )
}
export default ButtonComponent;