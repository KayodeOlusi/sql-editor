import "./Available.css";
import { FcRefresh } from "react-icons/fc";

const Available = ({ savedQuery, setQuery }) => {
  return (
    <section>
      <div className="available__header">
        <FcRefresh />
        <h3>Query History</h3>
      </div>

      <div className="available__queries">
        <form>
          <input type="text" placeholder="Search..." />
        </form>
        {savedQuery.map((query) => (
          <div
            onClick={() => setQuery(query)}
            className="available__query"
            key={query}
          >
            <p>{query}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Available;
