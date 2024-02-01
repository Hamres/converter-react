import React, {FC} from 'react';
import './TypeCurrency.scss'

const typeCur = [ 'USD', 'EUR']

type TypeProps = {
  value: string;
  onChangeCategory: (name: string) => void;
}

const TypeCurrency:FC<TypeProps> = ({value,onChangeCategory}) => {
  return (
    <div className='container-typeCur'>
      <ul>
        {
          typeCur.map((typeName) => (
            <li
              key={typeName}
              onClick={() => onChangeCategory(typeName)}
              className={value === typeName ? 'active' : ''}
            >
              {typeName}
            </li>
          ))
        }
      </ul>
    </div>
  );
};

export default TypeCurrency;