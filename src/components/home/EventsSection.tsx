import training1Img from "@/assets/training1.jpg";

const events = [
  {
    title: "Open Source Education",
    description:
      "A weeks of building, learning, and collaborating on real open-source projects with mentors and peers from across the community.",
    image: training1Img,
  },
  {
    title: "Mentorship Kickoff ",
    description:
      "Meet mentors, connect with fellow learners, and learn how to get the most out of MentSource programs and community resources.",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=450&fit=crop",
  },
  {
    title: "Frontend Study Circle",
    description:
      "Weekly sessions focused on React, TypeScript, and modern web development through hands-on exercises and group discussions.",
    image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=800&h=450&fit=crop",
  },
];

export function EventsSection() {
  return (
    <section className="section-padding overflow-hidden">
      <div className="container-main">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary-light text-primary text-sm font-medium mb-4">
            Events
          </span>
          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-6">
            Events &{" "}
            <span className="text-gradient-primary">Upcoming Events</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Join workshops, meetups, and community gatherings to learn, connect, and grow together.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event, index) => (
            <article
              key={event.title}
              className="group flex flex-col rounded-3xl bg-card border border-border/50 overflow-hidden card-hover h-full"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={event.image}
                  alt={event.title}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-col flex-1 p-6">
                <h3 className="font-display text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {event.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {event.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
