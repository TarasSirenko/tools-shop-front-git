import s from './SearchForm.module.css';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { useEffect, useState } from 'react';
import { ReactComponent as IconSearch } from 'svgImage/icon-search.svg';
import { useGetAllStoresQuery } from 'redux/api/api';
import { useSelector } from 'react-redux/es/hooks/useSelector';

export default function SearchForm({ getAllStores, loading }) {
  const [storeCity, setStoreCity] = useState('Україна');
  const [store, setStore] = useState('Магазин');
  const handleChangeCity = event => {
    setStoreCity(event.target.value);
  };
  const handleChangeStore = event => {
    setStore(event.target.value);
  };

  const token = useSelector(state => state.token);
  const { data, isLoading, isError } = useGetAllStoresQuery(token);

  let storesCities = [];
  let storesList = [];
  if (data) {
    storesCities = data.reduce((cities, store) => {
      if (cities.includes(store.location.city)) return cities;
      return [...cities, store.location.city];
    }, []);
    storesList = data.map(store => {
      return {
        key: store.storeId,
        adress: `${store.location.city}, ${store.location.street} ${store.location.houseNumber}`,
      };
    });
  }
  useEffect(() => {
    getAllStores(data);
    loading(isLoading);
  }, [data, getAllStores, isLoading, loading]);

  const selectStyles = {
    borderRadius: '0px',
    color: 'black',
    minWidth: '120px',
    '& .MuiSelect-select': {
      padding: '8px 0px 5px 10px',
      backgroundColor: 'white',
      borderRadius: '0px',
    },
    '& .MuiOutlinedInput-notchedOutline': {
      border: '0px', // Цвет бордера
      textColor: 'black',
      borderRadius: '0px',
    },
    '& .css-3dzjca-MuiPaper-root-MuiPopover-paper-MuiMenu-paper ': {
      color: 'da9022 !important',
      // Другие свойства стилей...
    },
  };
  return (
    <div className={s.formWrapper}>
      <form className={s.SearchForm}>
        <label className={s.SearchLable}>
          <IconSearch className={s.iconSearch} width={16} height={16} />
          <input type="text" className={s.SearchInput}></input>
        </label>

        <Select
          value={storeCity}
          onChange={handleChangeCity}
          autoWidth
          className={s.SelectCity}
          sx={selectStyles}
        >
          <MenuItem value="Україна">Україна</MenuItem>
          {storesCities.map(city => (
            <MenuItem value="Чернігів" key={city}>
              {city}
            </MenuItem>
          ))}
        </Select>
        <Select
          value={store}
          onChange={handleChangeStore}
          autoWidth
          className={s.SelectCity}
          sx={selectStyles}
        >
          <MenuItem value="Магазин">Магазин</MenuItem>
          {storesList.map(({ key, adress }) => (
            <MenuItem value="Чернігів" key={key}>
              {adress}
            </MenuItem>
          ))}
        </Select>
      </form>
    </div>
  );
}
