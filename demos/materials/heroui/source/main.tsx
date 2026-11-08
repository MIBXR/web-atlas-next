import { createRoot } from "react-dom/client";
import { samples } from "./samples";
import "./styles.css";

const selected = new URLSearchParams(location.search).get("demo");
const sample = samples.find(item => item.id === selected) ?? samples[0];

document.title = sample.title;
sample.load().then(Sample => {
  createRoot(document.getElementById("root")!).render(
    <>
      <header className="atlas-caption">
        <h1>{sample.title}</h1>
        <a href={sample.url} target="_blank" rel="noopener">官方文档</a>
      </header>
      <main className="atlas-stage"><Sample /></main>
    </>
  );
});
