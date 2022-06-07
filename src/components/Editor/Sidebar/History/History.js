import { AiOutlineCloudServer } from "react-icons/ai";
import "./History.css";

const History = ({ queryHistory }) => {
  return (
    <section>
      <div className="history__header">
        <AiOutlineCloudServer className="cloud" />
        <h3>Queries Saved</h3>
      </div>

      <div className="history__queries">
        {queryHistory.length ? (
          queryHistory.map((query) => (
            <div className="history__query" key={query}>
              <code>{query}</code>
            </div>
          ))
        ) : (
          <code>No Query Saved</code>
        )}
      </div>
    </section>
  );
};

export default History;
