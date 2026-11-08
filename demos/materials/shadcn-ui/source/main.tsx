import { createRoot } from "react-dom/client";
import { samples } from "./samples";
import "./styles.css";

const selected = new URLSearchParams(location.search).get("demo");
const sample = samples.find(item => item.id === selected) ?? samples[0];
const container = document.getElementById("root")!;

const Stage = sample.block && sample.id !== "login-03" ? "div" : "main";
document.title = sample.title;
sample.load().then(Sample => {
  createRoot(container).render(
    <>
      {!sample.block && (
        <header className="atlas-caption">
          <h1>{sample.title}</h1>
          <a href={sample.url} target="_blank" rel="noopener">官方文档</a>
        </header>
      )}
      <Stage data-sample={sample.id} className={sample.block ? undefined : "atlas-stage"}
        onSubmit={sample.id === "login-03" ? event => event.preventDefault() : undefined}>
        <Sample />
      </Stage>
    </>
  );
});
