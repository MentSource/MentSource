import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    quote: "MentSource changed my life. As a self-taught developer from Kenya, I never thought I'd land a job at a tech company. The mentorship program connected me with amazing people who believed in me.",
    name: "Sarah Wanjiku",
    role: "Frontend Developer",
    company: "Safaricom",
    location: "Nairobi, Kenya",
    image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    featured: true,
  },
  {
    quote: "Being a mentor at MentSource is incredibly rewarding. Seeing learners grow and achieve their goals reminds me why I fell in love with technology.",
    name: "Emma Thompson",
    role: "Junior Developer",
    company: "Basecamp",
    location: "Africa, Togo",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    featured: false,
  },
  {
    quote: "The community here is unlike anything I've experienced. Everyone genuinely wants to help each other succeed.",
    name: "Ahmed Hassan",
    role: "Cloud Engineer",
    company: "Mixapp",
    location: "Nigeria, Kano",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
    rating: 5,
    featured: false,
  },
];

export function TestimonialsSection() {
  return (
    <section className="section-padding bg-gradient-soft overflow-hidden">
      <div className="container-main">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent-light text-accent text-sm font-medium mb-4">
            Community Stories
          </span>
          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-6">
            Voices From Our{" "}
            <span className="text-gradient-primary">Community</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Real stories from real people whose lives were transformed through learning.
          </p>
        </div>

        {/* Uniform Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className={`group relative bg-card rounded-3xl p-6 border border-border/50 card-hover h-full min-h-[15rem] flex flex-col ${
                testimonial.featured ? "shadow-lg" : ""
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Quote Icon */}
              <div className={`inline-flex items-center justify-center rounded-2xl mb-4 ${
                testimonial.featured 
                  ? "w-12 h-12 bg-primary-dark" 
                  : "w-10 h-10 bg-primary-light"
              }`}>
                <Quote className={`${
                  testimonial.featured 
                    ? "h-6 w-6 text-primary-foreground" 
                    : "h-5 w-5 text-primary"
                }`} />
              </div>

              {/* Rating */}
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-secondary text-secondary" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-foreground leading-relaxed text-sm flex-1">
                "{testimonial.quote}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-4 pt-4 border-t border-border/50">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover ring-2 ring-primary-light"
                />
                <div className="flex-1 min-w-0">
                  <div className="font-semibold text-foreground truncate">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-muted-foreground truncate">
                    {testimonial.role} @ {testimonial.company}
                  </div>
                  <div className="text-xs text-muted-foreground/70">
                    {testimonial.location}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
