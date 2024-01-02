import {
  BsPeopleFill,
  BsKeyFill,
  BsListCheck,
  BsReverseLayoutTextSidebarReverse,
} from 'react-icons/bs';

function Home() {
  return (
    <main className="main-container">
      <div className="main-title">
        <h3>DASHBOARD</h3>
      </div>

      <div className="main-cards">
        <div className="card">
          <div className="card-inner">
            <h3>LOCATAIRES</h3>
            <BsPeopleFill className="card_icon" />
          </div>
        </div>
        <div className="card">
          <div className="card-inner">
            <h3>LOCATIONS</h3>
            <BsKeyFill className="card_icon" />
          </div>
        </div>
        <div className="card">
          <div className="card-inner">
            <h3>RESERVATION</h3>
            <BsListCheck className="card_icon" />
          </div>
        </div>
        <div className="card">
          <div className="card-inner">
            <h3>CARNET</h3>
            <BsReverseLayoutTextSidebarReverse className="card_icon" />
          </div>
        </div>
      </div>
    </main>
  );
}

export default Home;
