import "./SideMenu.css";
// Components
import History from "./History/History";
import Saved from "./Saved/Saved";

const SideMenu = () => {
  return (
    <div className="side__menu">
      <Saved />
      <History />
    </div>
  );
};

export default SideMenu;
