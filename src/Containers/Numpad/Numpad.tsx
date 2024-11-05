import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../app/store.ts';
import { addNumber, checkPassword, deleteNumber } from './numpadSlice.ts';
import './Numpad.css'

const Numpad = () => {
  const input = useSelector((state: RootState) => state.numpad.input);
  const accessGranted = useSelector((state: RootState) => state.numpad.accessGranted);
  const dispatch: AppDispatch = useDispatch();

  const numberClick = (number: string) => {
    dispatch(addNumber(number));
  };

  const numberClear = () => {
    dispatch(deleteNumber());
  };

  const numberEnter = () => {
    dispatch(checkPassword());
  };


  return (
    <div className="numpad">
      <div className={`input ${accessGranted === true ? 'success' : accessGranted === false ? 'error' : ''}`}>
        {input.replace(/./g, '*')}
      </div>
      <div className="message">
        {accessGranted === true && 'Access Granted'}
        {accessGranted === false && 'Access Denied'}
      </div>
      <div className="numbers">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((num) => (
          <button className="btn number" key={num} onClick={() => numberClick(num.toString())}>
            {num}
          </button>
        ))}
      </div>
      <div className="clear_enter_btns">
        <button className="btn clear" onClick={numberClear}>X</button>
        <button className="btn enter" onClick={numberEnter}>E</button>
      </div>
    </div>
  );
};

export default Numpad;