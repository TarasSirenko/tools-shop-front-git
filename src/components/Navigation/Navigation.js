import HeaderSearchForm from "components/HeaderSearchForm";
import HeaderTypeTool from "components/HeaderTypeTool";
import HeaderUserMenu from "components/HeaderUserMenu/HeaderUserMenu";
import s from "./Navigation.module.css";

function Navigation() {
  return (
    <nav className={s.navigation}>
      <HeaderSearchForm />
      <HeaderTypeTool />
      <HeaderUserMenu />
    </nav>
  );
}

export default Navigation;
