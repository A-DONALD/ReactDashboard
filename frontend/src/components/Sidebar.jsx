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
      className={`bg-blue-500 text-white h-full fixed top-0 left-0 overflow-y-auto transition-all duration-300 ease-in-out ${openSidebarToggle ? 'w-64' : 'w-0'
        }`}
    >
      <div className="sidebar-title flex items-center justify-between p-4">
        <div className="sidebar-brand">
          <BsFillHouseFill className="text-2xl" />
        </div>
        <span className="cursor-pointer" onClick={OpenSidebar}>
          X
        </span>
      </div>

      <ul className="sidebar-list">
        <li className="sidebar-list-item">
          <a href="" className="flex items-center py-2 px-4">
            <BsGrid1X2Fill className="text-lg mr-2" />
            Dashboard
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="" className="flex items-center py-2 px-4">
            <BsFillArchiveFill className="text-lg mr-2" />
            Biens
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="" className="flex items-center py-2 px-4">
            <BsPeopleFill className="text-lg mr-2" /> Locataires
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="" className="flex items-center py-2 px-4">
            <BsKeyFill className="text-lg mr-2" /> Locations
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="" className="flex items-center py-2 px-4">
            <BsListCheck className="text-lg mr-2" /> Reservations
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="" className="flex items-center py-2 px-4">
            <BsMenuButtonWideFill className="text-lg mr-2" /> Inventaires
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="" className="flex items-center py-2 px-4">
            <BsTools className="text-lg mr-2" /> Etats des lieux
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="" className="flex items-center py-2 px-4">
            <BsCreditCard2Back className="text-lg mr-2" /> Finances
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="" className="flex items-center py-2 px-4">
            <BsCollection className="text-lg mr-2" /> Documents
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="" className="flex items-center py-2 px-4">
            <BsReverseLayoutTextSidebarReverse className="text-lg mr-2" /> Carnet
          </a>
        </li>
        <li className="sidebar-list-item">
          <a href="" className="flex items-center py-2 px-4">
            <BsFillChatLeftTextFill className="text-lg mr-2" /> Intervations
          </a>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;
