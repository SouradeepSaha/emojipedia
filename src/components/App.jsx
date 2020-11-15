import React from "react";
import Entry from "./Entry";
import Emojipedia from "../emojipedia";

export default function App() {
  return (
    <div>
      <h1><span>emojipedia</span></h1>
      <dl className="dictionary">
        {Emojipedia.map(entry =>
          <Entry key={entry.id} emoji={entry.emoji} name={entry.name} meaning={entry.meaning} />
        )}
      </dl>
    </div>
  );
}
