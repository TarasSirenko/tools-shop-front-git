import { ReactComponent as IconSearch } from 'svgImage/icon-search.svg';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

import citys from './CityData.json';

import s from './HeaderSearchForm.module.css';

import { useDispatch } from 'react-redux';
import { updateToolsFilter } from 'redux/tools/toolsFilterSlice';
import { useEffect, useState, useRef } from 'react';
import { updateTools } from 'redux/tools/toolsSlice';
import { useNavigate } from 'react-router-dom';

function HeaderSearchForm() {
  const [searchInput, setSearchInput] = useState('');
  const [storeCity, setStoreCity] = useState('Вся Україна');
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const getCurrentValue = e => {
    setSearchInput(e.currentTarget.value);
  };
  const handleChange = event => {
    setStoreCity(event.target.value);
  };

  const previousSearchInputRef = useRef('');

  const submitSearchForm = e => {
    e.preventDefault();
    const currentPath = window.location.pathname;

    if (currentPath !== '/tools-shop-front-git/') {
      navigate('/');
    }

    dispatch(updateToolsFilter({ page: 1 }));

    if (previousSearchInputRef.current === searchInput) return;

    const tagsArr = searchInput.trim().split(' ');
    const normaliseTags = JSON.stringify(
      tagsArr
        .filter(tag => tag !== '')
        .map(tag => tag.toLocaleLowerCase().trim()),
    );
    const queryParams = { tags: normaliseTags, page: 1 };
    console.log(queryParams);
    dispatch(updateToolsFilter(queryParams));

    previousSearchInputRef.current = searchInput;
  };

  useEffect(() => {
    dispatch(updateTools([]));
    const queryParams = { city: storeCity, page: 1 };
    dispatch(updateToolsFilter(queryParams));
  }, [storeCity, dispatch]);

  const selectStyles = {
    borderRadius: '0px',
    color: 'black',
    minWidth: '180px',
    '& .MuiSelect-select': {
      padding: '8px 0px 5px 10px',
      backgroundColor: 'white',
      borderRadius: '0px',
      borderLeft: '1px solid #707070',
    },
    '& .MuiOutlinedInput-notchedOutline': {
      border: '0px', // Цвет бордера
      textColor: 'black',
      borderRadius: '0px',
    },
  };
  return (
    <form className={s.form} onSubmit={submitSearchForm}>
      <label className={s.label}>
        <IconSearch className={s.iconSearch} width={13} height={13} />
        <input
          type="text"
          placeholder="Я шукаю..."
          className={s.inputSearch}
          value={searchInput}
          onChange={getCurrentValue}
        />
      </label>

      <Select
        labelId="demo-simple-select-autowidth-label"
        id="demo-simple-select-autowidth"
        value={storeCity}
        onChange={handleChange}
        autoWidth
        sx={selectStyles}
      >
        {citys &&
          citys.map(city => {
            return (
              <MenuItem value={city} key={city}>
                {city}
              </MenuItem>
            );
          })}
      </Select>

      <button type="submit" className={s.submit}>
        Знайти
      </button>
    </form>
  );
}

export default HeaderSearchForm;

// "Вінниця",
//   "Волинь",
//   "Дніпро",
//   "Донецьк",
//   "Житомир",
//   "Закарпаття",
//   "Запоріжжя",
//   "Івано-Франківськ",
//   "Київ",
//   "Київська область",
//   "Кропивницький",
//   "Луганськ",
//   "Луцьк",
//   "Львів",
//   "Миколаїв",
//   "Одеса",
//   "Полтава",
//   "Рівне",
//   "Суми",
//   "Тернопіль",
//   "Ужгород",
//   "Харків",
//   "Херсон",
//   "Хмельницький",
//   "Черкаси",
//   "Чернівці",
