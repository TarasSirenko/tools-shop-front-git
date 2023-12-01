import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import DehazeIcon from '@mui/icons-material/Dehaze';

import { useDispatch } from 'react-redux';
import { updateToolsFilter } from 'redux/tools/toolsFilterSlice';
import { useState } from 'react';
import { updateTools } from 'redux/tools/toolsSlice';

export default function SelectSmall() {
  const [toolType, setToolType] = useState('');

  const dispatch = useDispatch();

  const handleChange = event => {
    setToolType(event.target.value);
    dispatch(updateTools([]));
    const queryParams = { type: event.target.value, page: 1 };
    dispatch(updateToolsFilter(queryParams));
  };

  const selectStyles = {
    color: 'white',
    '& .MuiSelect-icon': {
      color: 'white', // Цвет иконки
      transition: 'color 0.25',
    },
    '&:hover .MuiSelect-icon': {
      color: '#DA9022', // Цвет иконки при ховере
    },
    '&.Mui-focused .MuiSelect-icon': {
      color: '#DA9022', // Цвет иконки при фокусе
    },
    '& .MuiOutlinedInput-notchedOutline': {
      borderColor: 'white', // Цвет бордера
      transition: 'border-color 0.25s',
    },
    '&:hover .MuiOutlinedInput-notchedOutline': {
      borderColor: '#DA9022', // Цвет бордера при ховере
    },
    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
      borderColor: '#DA9022', // Цвет бордера при фокусе
    },
  };

  return (
    <FormControl
      sx={{
        m: 1,
        minWidth: 200,
        height: 40,
        marginLeft: '20px',
      }}
      size="small"
    >
      <InputLabel
        id="demo-select-small-label"
        sx={{
          background: 'rgb(72, 72, 72);;',
          paddingRight: 1,
          color: 'white', // Цвет текста
          '&:hover': {
            color: '#DA9022', // Цвет текста при ховере
          },
          '&.Mui-focused': {
            color: '#DA9022', // Цвет текста при фокусе
          },
        }}
      >
        Тип інструменту
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
