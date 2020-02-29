import React, { ReactNode, ChangeEvent, ChangeEventHandler, KeyboardEventHandler, MouseEventHandler } from 'react';
import './Form.css';

interface FormPrps {
  value?: string,
  onChange?: ChangeEventHandler,
  onCreate?: MouseEventHandler, 
  onKeyPress?: KeyboardEventHandler,
}

const Form = ({value, onChange, onCreate, onKeyPress}: FormPrps) => {
  return (
    <div className="form">
      <input value={value} onChange={onChange} onKeyPress={onKeyPress}/>
      <div className="create-button" onClick={onCreate}>
        Join
      </div>
    </div>
  );
};

export default Form;