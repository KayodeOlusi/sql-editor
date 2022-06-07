import Available from "./Available/Available";
import History from "./History/History";
import "./Sidebar.css";
// Components

const Sidebar = ({ savedQuery, queryHistory, setQuery }) => {
  return (
    <div className="side__menu">
      <Available savedQuery={savedQuery} setQuery={setQuery} />
      <History queryHistory={queryHistory} />
    </div>
  );
};

export default Sidebar;
