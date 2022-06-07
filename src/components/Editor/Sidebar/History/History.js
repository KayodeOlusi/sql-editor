import { AiOutlineCloudServer } from "react-icons/ai";
import "./History.css";

const History = () => {
  return (
    <section>
      <div className="history__header">
        <AiOutlineCloudServer />
        <h3>Queries</h3>
      </div>

      <div className="history__queries">
        <div className="history__query">
          <p>SELECT * FROM internetData</p>
        </div>
        <div className="single__query">
          <p>SELECT * FROM internetData</p>
        </div>
      </div>
    </section>
  );
};

export default History;
