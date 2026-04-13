import { GraduationCap } from "lucide-react";

const pastInterns = [
  {
    icon: GraduationCap,
    name: "Hammed Sanni",
    role: "Frontend Developer",
    project: "MentSource Website",
    description: "Build real features on MentSource projects with review support of an experienced mentor.",
  },

  {
    icon: GraduationCap,
    name: "Nathan Daniel",
    role: "Frontend Developer",
    project: "LEMAs",
    description: "Learn and contribute at the LEMAs project.",
  },
];

const Internship = () => {
  return (
    <>
          {/* Hero */}
          <section className="section-padding bg-gradient-hero py-20">
          <div className="container-main">
            <div className="max-w-3xl mx-auto text-center">
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary-light text-primary text-sm font-medium mb-4">
                Join Our Internship Program
              </span>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
                Our Internship Program{" "}
                <span className="text-gradient-primary">for Beginners</span>
              </h1>
              <p className="text-lg text-primary-foreground/80">
                Get hands-on experience in real-world projects and learn from experienced mentors.
              </p>
            </div>
          </div>
        </section>

        {/* Past Interns */}
        <section className="mt-10">
          <div className="container-main">
          <div className="text-center max-w-3xl mx-auto mb-6">
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
                Past Interns
              </h2>
              <p className="text-muted-foreground">
                Meet the interns who have completed our internship program and gained valuable experience.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto lg:ml-auto lg:mr-8">
              {pastInterns.map((pastIntern) => (
                <div key={pastIntern.name} className="p-6 rounded-2xl bg-gradient-card border border-border/50 card-hover">
                  <div className="w-12 h-12 rounded-xl bg-primary-light text-primary flex items-center justify-center mb-4">
                    <pastIntern.icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-foreground">{pastIntern.name}</h3>
                  <p className="text-sm text-primary font-medium mt-1">{pastIntern.role}</p>
                  <p className="text-sm text-muted-foreground mt-1">
                    <span className="font-medium text-foreground/80">Project:</span> {pastIntern.project}
                  </p>
                  <p className="text-sm text-muted-foreground mt-3">{pastIntern.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
    </>
  );
};

export default Internship;