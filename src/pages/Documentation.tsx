import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

import doc from "../../Documentation.md?raw";

const Documentation = () => {
  return (
    <>
      <section className="section-padding bg-[#f6fcfa]">
        <div className="container-main">
          <div className="max-w-4xl mx-auto">
            <h1 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-3">
              Documentation
            </h1>
            <p className="text-muted-foreground">
              Career paths, skills, and open-source guidance.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-[#f6fcfa]">
        <div className="container-main">
          <div className="max-w-4xl mx-auto">
            <div className="rounded-2xl border border-border/60 bg-white/70 p-6 sm:p-8">
              <article className="prose prose-slate dark:prose-invert max-w-none prose-hr:my-12 prose-hr:border-border/60">
                <ReactMarkdown remarkPlugins={[remarkGfm]}>{doc}</ReactMarkdown>
              </article>
            </div>
          </div>
        </div>
      </section>


    </>
  );
};

export default Documentation;

