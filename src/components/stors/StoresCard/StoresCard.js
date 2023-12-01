import s from './StoresCard.module.css';

import { ReactComponent as IconPlus } from 'svgImage/icon-plus.svg';

export default function StoresCard({ location, add }) {
  if (add)
    return (
      <li className={`${s.storesCard} ${s.addCard}`}>
        <IconPlus className={s.addStoreSvg} />
        <p className={s.addText}>СТВОРИТИ НОВІЙ МАГАЗИН</p>
      </li>
    );
  const { country, region, city, street, houseNumber } = location;
  return (
    <li className={s.storesCard}>
      <h2 className={s.storesTitle}>{country}</h2>
      <p
        className={s.storeAdresse}
      >{`${region}, ${city}, ${street} ${houseNumber}`}</p>

      <ul>
        <li className={s.buttonStore}>
          <button className={`${s.button}`}>
            ПЕРЕЙТИ ДО КЕРУВАННЯ МАГАЗИНОМ
          </button>
        </li>
        <li className={s.buttonStore}>
          <button className={`${s.button}`}>ДЕТАЛЬНА ІНФОРМАЦІЯ</button>
        </li>
      </ul>
    </li>
  );
}
