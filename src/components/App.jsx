import React from "react";
import Entry from "./Entry";
import enojipedia from "../emojipedia";

function App() {
  const getEmoji = (emojis) => {
    return (
      <Entry
        key={emojis.id}
        emoji={emojis.emoji}
        name={emojis.name}
        meaning={emojis.meaning}
      />
    );
  };
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">{enojipedia.map(getEmoji)}</dl>
    </div>
  );
}

export default App;
