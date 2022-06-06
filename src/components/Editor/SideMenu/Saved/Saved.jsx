import "./Saved.css";
import { FcRefresh } from "react-icons/fc";

const Saved = () => {
  return (
    <section>
      <div className="saved__header">
        <FcRefresh />
        <h3>Query History</h3>
      </div>

      <div className="saved__queries">
        <form>
          <input type="text" placeholder="Search..." />
        </form>
        <div className="saved__query">
          <p>SELECT * FROM internetData</p>
        </div>
        <div className="saved__query">
          <p>SELECT * FROM internetData</p>
        </div>
      </div>
    </section>
  );
};

export default Saved;
