import React, {ChangeEvent, FC, useState} from 'react';
import './MyInput.scss'

type InputProps = {
  inputValueLeft: number | string;
  setInputValueLeft: (inputValue: string) => void;
}

const MyInput:FC<InputProps> = ({inputValueLeft, setInputValueLeft}) => {
  // const [value, setValue] = useState('')

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValueLeft(event.target.value)
  }

  console.log(inputValueLeft)

  return (
    <div className='my-input'>
      <input
        value={inputValueLeft}
        className='my-input__input'
        type="text"
        onChange={onChange}
      />
      {
        inputValueLeft && <span>1 RUB = </span>
      }
    </div>
  );
};

export default MyInput;