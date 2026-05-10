type ResourcesRow = {
    title: string;
    href: string;
  };
  
  const rows: ResourcesRow[] = [
    {
      title: "Introduction to Open Source & Collaboration Platforms",
      href: "https://chaoss.moodlecloud.com",
    },
    {
      title: "Popular Open-Source Projects",
      href: "https://chaoss.moodlecloud.com",
    },
    {
      title: 'Diversity Equity Inclusion In Open Source"',
      href: 'https://chaoss.moodlecloud.com',
    },
    {
      title: 'How to Start a Career in Open Source"',
      href: 'https://chaoss.moodlecloud.com',
    },
    {
      title: 'Contributing to Open Source Projects"',
      href: 'https://chaoss.moodlecloud.com',
    },
   {
      title: 'How to Start a Career in Open Source"',
       href: 'https://chaoss.moodlecloud.com',
    },
   {
      title: 'How to Start a Career in Open Source"',
      href: 'https://chaoss.moodlecloud.com',
},
 
  ];

  const mentSourceResourcesSection = {
    title: "MentSource Resource",
    description: "Coming soon.",
  };
  




  const Resources = () => {
    return (
      <>
        <section className="section-padding bg-background">
          <div className="container-main">
            <div className="max-w-6xl mx-auto">
              <h1 className="font-display text-2xl sm:text-3xl font-bold text-foreground mb-3">
                Resources
              </h1>
              <p className="text-muted-foreground">
                Explore open-source learning materials, videos, and documentation. Scroll down to see the list of resources from MenSource and other communities.
              </p>
            </div>
          </div>
        </section>
  
        <section className="section-padding bg-background">
          <div className="container-main">
            <div className="max-w-6xl mx-auto">
              <h2 className="font-display text-1xl sm:text-2xl font-bold text-foreground mb-3">
                Open Source Resources from other communities.
              </h2>
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
                     Access Resource
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section-padding bg-background">
          <div className="container-main">
            <div className="max-w-6xl mx-auto">
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground mb-3">
                {mentSourceResourcesSection.title}
              </h2>
              <p className="text-muted-foreground">{mentSourceResourcesSection.description}</p>
            </div>
          </div>
        </section>
  
  
      </>
    );
  };
  
  export default Resources;