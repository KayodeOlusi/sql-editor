import { CSVLink } from "react-csv";
import "./Output.css";

const Output = ({ output, query }) => {
  return (
    <div className="output__container">
      <h3>Your output wil display below</h3>

      <div className="output__container__inner">
        {query && output.length ? (
          <div className="output__table">
            <div className="output__table__data">
              <h3>Records: {output.length}</h3>

              <CSVLink data={output} filename="output.csv">
                <button>Download</button>
              </CSVLink>
            </div>

            <div className="output__table__container">
              <table className="table">
                <thead>
                  <tr>
                    {Object.keys(output[0]).map((key) => (
                      <th key={key}>{key}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {output.map((record, index) => (
                    <tr key={index}>
                      {Object.values(record).map((value) => (
                        <td key={value}>{value}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ) : (
          <div className="no__data">
            <p>No data to display. Select a query and run</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Output;
