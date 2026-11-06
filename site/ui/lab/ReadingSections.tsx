import { reading } from "@/core/lab/reading";
import { Prose, Section, SourceList } from "../blocks";

export function ReadingSection({ id }: { id: 'framework' | 'pattern-lab' | 'elements' | 'principles' | 'workflow' | 'sources' }) {
  const content = reading[id];
  return <Section id={id} title={content.title}>
    {content.intro.map(text => <Prose key={text} text={text} />)}
    {content.articles.length > 0 && <div className="lab-reading">
      {content.articles.map(article => <article key={article.title}>
        {article.kind && <p className="muted small mono">{article.kind}</p>}
        <h3>{article.title}</h3>
        {article.paragraphs.map(text => <Prose key={text} text={text} />)}
        {article.question && <p className="muted small">{article.question}</p>}
        {article.link && <a href={article.link.url}>{article.link.title}</a>}
      </article>)}
    </div>}
    {id === 'sources' && <SourceList items={reading.sources.sources} />}
    {content.after.map(text => <Prose key={text} text={text} />)}
    {id === 'sources' && <p className="prose"><a href="docs.html?file=docs%2Ffoundations.md">查看完整调研、来源边界和实验映射</a></p>}
  </Section>;
}
