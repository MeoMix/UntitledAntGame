import React from 'react';

function Entry(props: { date: string, entry: string }) {
  return (
    <div>
      <div>{props.date}</div>
      <div>{props.entry}</div>
    </div>
  );
}

function Meo() {
  return (
    <ol>
      <li>
        <Entry
          date={"01-01-2023"}
          entry={"Today is the first day of January. It's the time where everyone decides to try and be a better version of themselves. I'm still feeling really low on energy, so it's tough to see myself committing to that sort of improvement, but here's a few sentences to show my appreciation for the new year tradition."}
        />
      </li>
      <li>
        <Entry
          date={"01-02-2023"}
          entry={"Today is the first Monday of January. I was productive enough to feel proud of the progress I made on my personal projects. I ate reasonably healthy. I didn't exercise. I'm not tracking any stats really yet."}
        />
      </li>
    </ol>
  );
}

export default Meo;
