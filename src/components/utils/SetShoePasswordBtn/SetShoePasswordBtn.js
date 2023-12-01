import s from './SetShoePasswordBtn.module.css';
import { ReactComponent as IconShow } from '../../../svgImage/icon-show.svg';
import { ReactComponent as IconHide } from '../../../svgImage/icon-hide.svg';
import { useState } from 'react';

export default function SetShoePasswordBtn({ setShowPassword, showPassword }) {
  return (
    <button
      type="button"
      onClick={() => setShowPassword(!showPassword)}
      className={`${s.button} ${s.showHidePasssword}`}
    >
      {showPassword ? <IconHide /> : <IconShow />}
    </button>
  );
}
