import {
  BsFillHouseFill,
  BsGrid1X2Fill,
  BsFillArchiveFill,
  BsPeopleFill,
  BsKeyFill,
  BsListCheck,
  BsTools,
  BsReverseLayoutTextSidebarReverse,
  BsMenuButtonWideFill,
  BsFillChatLeftTextFill,
  BsCreditCard2Back,
  BsCollection,
} from 'react-icons/bs';

function Sidebar({ openSidebarToggle, OpenSidebar }) {
  return (
    <aside
      id="sidebar"
      className={openSidebarToggle ? 'sidebar-responsive' : ''}
    >
      <div className="sidebar-title">
        <div className="sidebar-brand">
          <BsFillHouseFill className="icon_header" />
        </div>
        <span className="icon close_icon" onClick={OpenSidebar}>
          X
        </span>
      </div>

      <ul className="sidebar-list">
        <li className="sidebar-list-item">
          <a href="">
            <BsGrid1X2Fill className="icon" /> Dashboard
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="">
            <BsFillArchiveFill className="icon" /> Biens
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="">
            <BsPeopleFill className="icon" /> Locataires
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="">
            <BsKeyFill className="icon" /> Locations
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="">
            <BsListCheck className="icon" /> Reservations
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="">
            <BsMenuButtonWideFill className="icon" /> Inventaires
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="">
            <BsTools className="icon" /> Etats des lieux
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="">
            <BsCreditCard2Back className="icon" /> Finances
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="">
            <BsCollection className="icon" /> Documents
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="">
            <BsReverseLayoutTextSidebarReverse className="icon" /> Carnet
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="">
            <BsFillChatLeftTextFill className="icon" /> Intervations
          </a>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;
