// MENU DATAS
import MenuDatas from '../../Datas/MenuDatas';

// HEADER
function Header({ setSelectPage }) {
  return (
    <header>
      {/* NAVIGATION BAR */}
      <nav className="PopUp">
        <ul>
          {MenuDatas.map((menu, index) => (
            <li key={index}>
              {/* NAVIGATION BUTTON */}
              <button onClick={() => setSelectPage(menu[0])}>
                <p>{menu[0]}</p>
                <i className={menu[1]}></i>
              </button>
              <div className="menuHover"></div>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
