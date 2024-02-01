import React, {ChangeEvent, FC, useEffect, useState} from 'react';
import './HomePage.scss'
import TypeCurrency from "../TypeCurrency/TypeCurrency";
import axios from "axios";

type ResProps = {
  Date: string
  PreviousDate: string
  PreviousURL: string
  Timestamp: string
  Valute: Valute
}

type ValuteProp = {
  CharCode: string
  ID: string
  Name: string
  Nominal: number
  NumCode: string
  Previous: number
  Value: number
}

type Valute = {
  USD: ValuteProp
  EUR: ValuteProp
}


const HomePage:FC = () => {
  const [typeIdRight, setTypeIdRight] = useState('')
  const [currenciesResponse, setCurrenciesResponse] = useState<ResProps | null>(null)
  const [inputValueLeft, setInputValueLeft] = useState('')
  const [inputValueRight, setInputValueRight] = useState('')

  useEffect(() => {
    getCur()
  }, [])

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValueLeft(event.target.value.replace(/\D+/g, ''))
    test2()
  }

  const onChangeCategoryRight = ((name: string) => {
    setTypeIdRight(name)
  })

  const USD  = currenciesResponse?.Valute.USD.Value
  const EUR  = currenciesResponse?.Valute.EUR.Value


  const getCur = () => {
    axios.get<ResProps>('https://www.cbr-xml-daily.ru/daily_json.js')
      .then(res => setCurrenciesResponse(res.data))
  }


  const test2 = () => {
    if (typeIdRight == 'USD') {
      // @ts-ignore
      setInputValueRight(Number(inputValueLeft) * USD)
      // setInputValueRight(Number(inputValueLeft) * USD)
    }else if (typeIdRight == 'EUR') {
      // setInputValueRight(Number(inputValueLeft) * EUR)
    }

  }


  return (
    <div className='container'>
      <div className='input-box'>
        <div className='input-box__title'>У меня есть</div>
        <div className='input-box__RUB'>
          RUB
        </div>
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
      </div>
      <div className='input-box'>
        <div className='input-box__title'>Хочу приобрести</div>
        <div>
          <TypeCurrency value={typeIdRight} onChangeCategory={onChangeCategoryRight}/>
        </div>
        <div className='my-input'>
          <input
            value={inputValueRight}
            className='my-input__input'
            type="text"
            readOnly
          />
        </div>
      </div>
    </div>
  );
};

export default HomePage;