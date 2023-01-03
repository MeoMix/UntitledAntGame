import React from 'react';

function Entry(props: { date: string, entry: string }) {
  return (
    <div>
      <div>{props.date}</div>
      <div>{props.entry}</div>
    </div>
  );
}

function Blog() {
  return (
    <ol>
      <li>
        <Entry
          date={"01-01-2023"}
          entry={"No software development occurred."}
        />
      </li>
      <li>
        <Entry
          date={"01-02-2023"}
          entry={"Purchased and configured a domain. Explored using GitHub Pages + Jekyll, but went with Vercel + NextJS. Created GitHub repository, added support for Docker + VSCode devcontainers. Configured 2nd machine to support Docker. Deployed website. Wrote very basic software and personal development blog entries."}
        />
      </li>
    </ol>
  );
}

export default Blog;