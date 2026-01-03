"use client";
import { useEffect, useState } from "react";
import axios from "axios";

type Article = {
  id: string;
  title: string;
  content: string;
  section?: string;
};

export default function ArticleViewer() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [selected, setSelected] = useState<Article | null>(null);

  useEffect(() => {
    (async () => {
      const res = await axios.get("/data/articles.json");
      setArticles(res.data);
      setSelected(res.data[0] || null);
    })();
  }, []);

  return (
    <div className="grid grid-cols-12 gap-6">
      <aside className="col-span-3 border rounded p-3 bg-papyrus">
        <h2 className="font-medium mb-2">Articles</h2>
        <ul className="space-y-2">
          {articles.map((a) => (
            <li key={a.id}>
              <button
                className="text-left hover:underline text-nile-blue"
                onClick={() => setSelected(a)}
              >
                {a.title}
              </button>
            </li>
          ))}
        </ul>
      </aside>
      <section className="col-span-9 border rounded p-4 bg-white">
        {selected ? (
          <>
            <h3 className="text-xl font-semibold mb-3">{selected.title}</h3>
            <article className="prose max-w-none whitespace-pre-wrap">{selected.content}</article>
          </>
        ) : (
          <p>No article selected.</p>
        )}
      </section>
    </div>
  );
}
