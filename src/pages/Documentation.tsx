type DocumentationRow = {
  title: string;
  href: string;
};

const rows: DocumentationRow[] = [
  {
    title: "Open good first issues",
    href: "https://forgoodfirstissue.github.com/",
  },
  {
    title: "Good First Issues",
    href: "https://github.com/topics/good-first-issue",
  },
  {
    title: 'Label "good first issue"',
    href: 'https://github.com/search?q=is%3Aissue+is%3Aopen+label%3A%22good+first+issue%22&type=issues',
  },
  {
    title: 'Unassigned "good first issue"',
    href: 'https://github.com/search?q=is%3Aissue+is%3Aopen+label%3A%22good+first+issue%22+no%3Aassignee&type=issues',
  },
  {
    title: 'AI / ML: unassigned "good first issue" ',
    href: 'https://github.com/search?q=is%3Aissue+is%3Aopen+no%3Aassignee+label%3A%22good+first+issue%22+%28ai+OR+%22machine+learning%22+OR+ml+OR+llm%29&type=issues',
  },
  {
    title: "Hugging Face Transformers",
    href: 'https://github.com/search?q=repo%3Ahuggingface%2Ftransformers+is%3Aissue+is%3Aopen+no%3Aassignee+label%3A%22good+first+issue%22&type=issues',
  },
  {
    title: "LangChain",
    href: 'https://github.com/search?q=repo%3Alangchain-ai%2Flangchain+is%3Aissue+is%3Aopen+no%3Aassignee+label%3A%22good+first+issue%22&type=issues',
  },
  {
    title: "LlamaIndex",
    href: 'https://github.com/search?q=repo%3Arun-llama%2Fllama_index+is%3Aissue+is%3Aopen+no%3Aassignee+label%3A%22good+first+issue%22&type=issues',
  },
  {
    title: "Haystack",
    href: 'https://github.com/search?q=repo%3Adeepset-ai%2Fhaystack+is%3Aissue+is%3Aopen+no%3Aassignee+label%3A%22good+first+issue%22&type=issues',
  },
  {
    title: "spaCy",
    href: 'https://github.com/search?q=repo%3Aexplosion%2Fspacy+is%3Aissue+is%3Aopen+no%3Aassignee+label%3A%22good+first+issue%22&type=issues',
  },
  {
    title: "scikit-learn",
    href: 'https://github.com/search?q=repo%3Ascikit-learn%2Fscikit-learn+is%3Aissue+is%3Aopen+no%3Aassignee+label%3A%22good+first+issue%22&type=issues',
  },
  {
    title: 'Python: "good first issue"',
    href: 'https://github.com/search?q=is%3Aissue+is%3Aopen+label%3A%22good+first+issue%22+python&type=issues',
  },
  {
    title: 'Android: "good first issue"',
    href: 'https://github.com/search?q=is%3Aissue+is%3Aopen+label%3A%22good+first+issue%22+android&type=issues',
  },
  {
    title: 'PHP: "good first issue"',
    href: 'https://github.com/search?q=is%3Aissue+is%3Aopen+label%3A%22good+first+issue%22+php&type=issues',
  },
  {
    title: 'Node.js: "good first issue" ',
    href: 'https://github.com/search?q=is%3Aissue+is%3Aopen+label%3A%22good+first+issue%22+node.js&type=issues',
  },
  {
    title: 'JavaScript: "good first issue" ',
    href: 'https://github.com/search?q=is%3Aissue+is%3Aopen+label%3A%22good+first+issue%22+javascript&type=issues',
  },
  {
    title: 'Go: "good first issue" ',
    href: 'https://github.com/search?q=is%3Aissue+is%3Aopen+label%3A%22good+first+issue%22+go&type=issues',
  },
  {
    title: 'TypeScript: "good first issue" ',
    href: 'https://github.com/search?q=is%3Aissue+is%3Aopen+label%3A%22good+first+issue%22+typescript&type=issues',
  },
  {
    title: 'Java: "good first issue" ',
    href: 'https://github.com/search?q=is%3Aissue+is%3Aopen+label%3A%22good+first+issue%22+java&type=issues',
  },
  {
    title: 'Kotlin: "good first issue" ',
    href: 'https://github.com/search?q=is%3Aissue+is%3Aopen+label%3A%22good+first+issue%22+kotlin&type=issues',
  },
  {
    title: 'Swift: "good first issue"',
    href: 'https://github.com/search?q=is%3Aissue+is%3Aopen+label%3A%22good+first+issue%22+swift&type=issues',
  },
  {
    title: 'C#: "good first issue" ',
    href: 'https://github.com/search?q=is%3Aissue+is%3Aopen+label%3A%22good+first+issue%22+c%23&type=issues',
  },
  {
    title: 'Ruby: "good first issue" ',
    href: 'https://github.com/search?q=is%3Aissue+is%3Aopen+label%3A%22good+first+issue%22+ruby&type=issues',
  },
  {
    title: 'Rust: "good first issue" ',
    href: 'https://github.com/search?q=is%3Aissue+is%3Aopen+label%3A%22good+first+issue%22+rust&type=issues',
  },
  {
    title: 'C++: "good first issue" ',
    href: 'https://github.com/search?q=is%3Aissue+is%3Aopen+label%3A%22good+first+issue%22+c%2B%2B&type=issues',
  },
  {
    title: 'C: "good first issue" ',
    href: 'https://github.com/search?q=is%3Aissue+is%3Aopen+label%3A%22good+first+issue%22+c&type=issues',
  },
  {
    title: 'Dart / Flutter: "good first issue" ',
    href: 'https://github.com/search?q=is%3Aissue+is%3Aopen+label%3A%22good+first+issue%22+flutter&type=issues',
  },
  {
    title: 'React: "good first issue" ',
    href: 'https://github.com/search?q=is%3Aissue+is%3Aopen+label%3A%22good+first+issue%22+react&type=issues',
  },
];

const Documentation = () => {
  return (
    <>
      <section className="section-padding bg-background">
        <div className="container-main">
          <div className="max-w-6xl mx-auto">
            <h1 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-3">
              Documentation: Good First Issues
            </h1>
            <p className="text-muted-foreground">
              Career paths, skills, and open-source guidance.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding pt-6 bg-background">
        <div className="container-main">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {rows.map((row) => (
                <div
                  key={row.href}
                  className="rounded-2xl border border-border/60 bg-white/70 p-6 flex items-start justify-between gap-4"
                >
                  <div>
                    <div className="text-sm font-semibold text-foreground">{row.title}</div>
                    <div className="text-xs text-muted-foreground mt-1">
                      Find beginner-friendly issues and start contributing.
                    </div>
                  </div>

                  <a
                    href={row.href}
                    target="_blank"
                    rel="noreferrer"
                    className="shrink-0 inline-flex items-center rounded-xl bg-primary-dark px-3 py-2 text-xs font-semibold text-primary-foreground hover:opacity-95"
                  >
                   Access link
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>


    </>
  );
};

export default Documentation;


