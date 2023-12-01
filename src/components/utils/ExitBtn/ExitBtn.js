import s from './ExitBtn.module.css';
import { Link } from 'react-router-dom';
import { ReactComponent as IconExit } from 'svgImage/icon-exit.svg';

export default function ExiteBtn() {
  return (
    <Link className={s.ExiteLink} to="/">
      <IconExit className={s.ExiteSvg} />
    </Link>
  );
}
