import { Controlled as CodeMirror } from "react-codemirror2";
import "./Screen.css";
import "codemirror/addon/display/autorefresh";
import "codemirror/keymap/sublime";
import "codemirror/theme/neo.css";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/material-palenight.css";
import "codemirror/mode/sql/sql";
import "codemirror/keymap/sublime";
import "codemirror/addon/hint/sql-hint.js";

const Screen = ({ query, setQuery }) => {
  return (
    <div className="screen">
      <div>
        <CodeMirror
          value={query}
          name="Screen"
          onBeforeChange={(editor, data, value) => setQuery(value)}
          className="code-mirror-wrapper"
          options={{
            lint: true,
            mode: "sql",
            lineNumbers: true,
            keyMap: "sublime",
            matchBrackets: true,
            addModeClass: true,
            showHint: true,
          }}
          aria-label="code-editor"
        />
      </div>
    </div>
  );
};

export default Screen;
