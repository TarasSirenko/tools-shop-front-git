import s from './SelectSmall.module.css';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import DehazeIcon from '@mui/icons-material/Dehaze';

import { useDispatch } from 'react-redux';
import { updateToolsFilter } from 'redux/tools/toolsFilterSlice';
import { useState } from 'react';
import { updateTools } from 'redux/tools/toolsSlice';

export default function ToolType() {
  const [toolType, setToolType] = useState('');

  const dispatch = useDispatch();

  const handleChange = event => {
    setToolType(event.target.value);
    dispatch(updateTools([]));
    const queryParams = { type: event.target.value, page: 1 };
    dispatch(updateToolsFilter(queryParams));
  };

  const calculateLeftValue = () => {
    const viewportWidth = window.innerWidth;
    if (viewportWidth > 1600) {
      return (viewportWidth - 1600) / 2;
    }
  };

  const selectStyles = {
    color: 'white',
    marginTop: '2px',
    height: '36px',

    '& .MuiFormControl-root': {},
    '& .MuiSelect-icon': {
      color: 'white', // Цвет иконки
      transition: 'color 0.25',
    },
    '&:hover .MuiSelect-icon': {
      color: 'rgb(240, 132, 0)', // Цвет иконки при ховере
    },
    '&.Mui-focused .MuiSelect-icon': {
      color: 'rgb(240, 132, 0)', // Цвет иконки при фокусе
    },
    '& .MuiOutlinedInput-notchedOutline': {
      borderColor: 'white', // Цвет бордера
      borderRadius: '0px',
      transition: 'border-color 0.25s',
    },
    '&:hover .MuiOutlinedInput-notchedOutline': {
      borderColor: 'rgb(240, 132, 0)', // Цвет бордера при ховере
    },
    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
      borderColor: 'rgb(240, 132, 0)', // Цвет бордера при фокусе
    },
  };

  return (
    <FormControl
      className={s.toolType}
      sx={{
        m: 1,
        minWidth: 40,
        height: 40,
        marginLeft: '20px',
      }}
      size="small"
    >
      <InputLabel
        id="demo-select-small-label"
        sx={{
          background: `${
            window.innerWidth > 600 ? 'rgb(72, 72, 72)' : 'transparent'
          }`,
          textTransform: 'uppercase',
          fontSize: '15px',
          paddingRight: `${window.innerWidth > 600 ? '5px' : '2px'}`,

          color: 'white', // Цвет текста
          '&:hover': {
            color: '#DA9022', // Цвет текста при ховере
          },
          '&.Mui-focused': {
            color: '#DA9022', // Цвет текста при фокусе
          },
        }}
      >
        {window.innerWidth > 1000 ? 'Тип інструменту' : 'Тип'}
      </InputLabel>
      <Select
        labelId="demo-select-small-label"
        id="demo-select-small"
        value={toolType}
        label="Tool type"
        onChange={handleChange}
        IconComponent={DehazeIcon}
        className="select"
        sx={selectStyles}
      >
        <MenuItem value="">
          <em>Усі види</em>
        </MenuItem>
        <MenuItem value={'power tool'}>Електро інструмент</MenuItem>
        <MenuItem value={'hand tool'}>Ручний інструмент</MenuItem>
        <MenuItem value={'Gasoline-powered tools'}>Бензо інструмент</MenuItem>
      </Select>
    </FormControl>
  );
}
