import { ReactComponent as IconSearch } from "svgImage/icon-search.svg";

import s from "./HeaderSearchForm.module.css";

function HeaderSearchForm() {
  return (
    <form className={s.form}>
      <label className={s.label}>
        <IconSearch className={s.iconSearch} width={13} height={13} />
        <input type="text" placeholder="Я шукаю..." className={s.inputSearch} />
      </label>

      <button type="button" className={s.button}>
        Україна
      </button>
      <button type="submit" className={s.submit}>
        Знайти
      </button>
    </form>
  );
}

export default HeaderSearchForm;
