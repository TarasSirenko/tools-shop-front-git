import { ReactComponent as IconMenu } from '../../../svgImage/icon-menu.svg';
import s from './HeaderTypeTool.module.css';

function HeaderTypeTool() {
  return (
    <div className={s.typeTool}>
      <div className={s.typeToolInfo}>
        <button type="button" className={s.typeToolBtn}>
          <IconMenu width={23} height={20} className={s.typeToolSvg} />
        </button>
        <p className={s.typeToolText}>Тип інструменту</p>
      </div>
    </div>
  );
}

export default HeaderTypeTool;
