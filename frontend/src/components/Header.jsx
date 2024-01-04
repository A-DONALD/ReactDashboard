import {
  BsFillBellFill,
  BsFillEnvelopeFill,
  BsPersonCircle,
  BsSearch,
  BsJustify,
} from 'react-icons/bs';

function Header({ OpenSidebar }) {
  return (
    <header className="bg-white border-b border-gray-300 p-4 flex items-center justify-between">
      <div className="menu-icon">
        <BsJustify className="text-2xl cursor-pointer" onClick={OpenSidebar} />
      </div>
      <div className="flex items-center">
        <div className="mr-4">
          <BsSearch className="text-xl" />
        </div>
        <div className="mr-4">
          <BsFillBellFill className="text-xl" />
        </div>
        <div className="mr-4">
          <BsFillEnvelopeFill className="text-xl" />
        </div>
        <div>
          <BsPersonCircle className="text-2xl" />
        </div>
      </div>
    </header>
  );
}

export default Header;
