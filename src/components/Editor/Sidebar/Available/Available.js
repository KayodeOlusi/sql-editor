import "./Available.css";
import { FcRefresh } from "react-icons/fc";

const Available = ({ savedQuery, setQuery }) => {
  return (
    <section>
      <div className="available__header">
        <FcRefresh className="refresh" />
        <h3>Queries Available</h3>
      </div>

      <div className="available__queries">
        <form>
          <input type="text" placeholder="Search..." />
        </form>

        <div className="query__container">
          {savedQuery.map((query) => (
            <div
              onClick={() => setQuery(query)}
              className="available__query"
              key={query}
            >
              <code>{query}</code>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Available;
