import { ExternalLink, GraduationCap } from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const paidInternshipPrograms = [
  {
    name: "Google Summer of Code",
    description:
      "A global program where contributors work with open source organizations over the summer, with a stipend from Google.",
    period:
      "Contributor work runs about 12+ weeks over the summer cohort. Exact dates, stipend amounts, and deadlines change each year on the official calendar.",
    howToApply:
      "Review the contributor guide, shortlist mentoring organizations, take part in their community (issues, chats, mailing lists), then submit a detailed project proposal during the application window. Selection is competitive and org-specific.",
    url: "https://summerofcode.withgoogle.com/",
    borderAccent: "border-blue-500/50 shadow-[0_0_0_1px_rgba(59,130,246,0.15)]",
    iconWrap: "bg-blue-500/15",
    buttonClassName: "",
  },
  {
    name: "Outreachy",
    description:
      "Paid, remote internships in free and open source software, with a focus on supporting underrepresented groups in tech.",
    period:
      "Runs in rounds across the year; each internship runs for three months,  May to August, or December to March, fully remote. Application and internship dates are published per cohort on the Outreachy site below.",
    howToApply:
      "When applications open, complete the eligibility check, choose participating communities, and submit the required essays, contribution plan, and any other materials listed for that round.",
    url: "https://www.outreachy.org/",
    borderAccent: "border-[#022DA4]/50 shadow-[0_0_0_1px_rgba(2,45,164,0.2)]",
    iconWrap: "bg-[#022DA4]/15",
    buttonClassName:
      "border-2 border-[#022DA4] text-[#022DA4] bg-transparent hover:bg-[#022DA4] hover:text-white hover:border-[#022DA4] focus-visible:ring-[#022DA4]",
  },
  {
    name: "LFX Mentorship",
    description:
      "The Linux Foundation mentorship program: work on real open source projects with maintainers, often with a stipend.",
    period:
      "Organized in mentored terms (often around three months). Start dates, duration, and whether a stipend is offered depend on the specific mentorship program—check the active listings.",
    howToApply:
      "Browse open programs on the LFX portal, read the project description and prerequisites, complete any required contribution or questionnaire, then apply during that project's application period.",
    url: "https://mentorship.lfx.linuxfoundation.org/",
    borderAccent: "border-[#FF5B3E]/50 shadow-[0_0_0_1px_rgba(255,91,62,0.2)]",
    iconWrap: "bg-[#FF5B3E]/15",
    buttonClassName:
      "border-2 border-[#FF5B3E] text-[#FF5B3E] bg-transparent hover:bg-[#FF5B3E] hover:text-white hover:border-[#FF5B3E] focus-visible:ring-[#FF5B3E]",
  },
  {
    name: "European Summer of Code (ESoC)",
    description:
      "A stipend program focused on applied AI and real-world open source: contributors work with mentors on projects that combine machine learning with production OSS.",
    period:
      "Projects usually run about three months per cohort. Batch dates, stipends, and hubs are published each season on the official ESoC site.",
    howToApply:
      "Create an account on the ESoC platform, explore open projects and hubs, meet any project prerequisites, then submit your application before the listed deadline for that batch.",
    url: "https://www.esoc.dev/",
    borderAccent: "border-blue-700/45 shadow-[0_0_0_1px_rgba(30,64,175,0.18)]",
    iconWrap: "bg-blue-500/15",
    buttonClassName:
      "border-2 border-blue-700 text-blue-700 bg-transparent hover:bg-blue-700 hover:text-white hover:border-blue-700 focus-visible:ring-blue-700 dark:text-blue-400 dark:border-blue-400 dark:hover:bg-blue-600 dark:hover:border-blue-600 dark:hover:text-white",
  },
  {
    name: "MLH Fellowship",
    description:
      "Major League Hacking (MLH) runs remote fellowship cohorts where small teams build real software—tracks include open source, software engineering, and more.",
    period:
      "Most tracks run around 12 weeks. Start dates, time zones, and whether a stipend or equipment support is offered depend on the specific fellowship—check the current cohort page.",
    howToApply:
      "Pick a fellowship on the MLH site, confirm you can meet the weekly schedule and tech stack, prepare your application (often including a short video or written answers), and submit before the cohort deadline.",
    url: "https://fellowship.mlh.io/",
    borderAccent: "border-[#FF5B3E]/50 shadow-[0_0_0_1px_rgba(255,91,62,0.2)]",
    iconWrap: "bg-[#FF5B3E]/15",
    buttonClassName:
      "border-2 border-[#FF5B3E] text-[#FF5B3E] bg-transparent hover:bg-[#FF5B3E] hover:text-white hover:border-[#FF5B3E] focus-visible:ring-[#FF5B3E]",
  },
] as const;

const pastInterns = [
  {
    icon: GraduationCap,
    name: "Hammed Sanni",
    role: "Frontend Developer",
    project: "MentSource Website",
    internshiptype: "Paid",
    description: "Build real features on MentSource projects with review support of an experienced mentor.",
  },

  {
    icon: GraduationCap,
    name: "Joy Aniebo",
    role: "Mobile Developer",
    project: "NITAR",
    internshiptype: "Unpaid",
    description: "Build real features on MentSource projects with review support of an experienced mentor.",
  },
  {
    icon: GraduationCap,
    name: "Nathan Daniel",
    role: "Frontend Developer",
    project: "LEMAs",
    internshiptype: "Unpaid",
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
                Join an Internship Program
              </span>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
                Internship Programs{" "}
                <span className="text-gradient-primary">for All</span>
              </h1>
              <p className="text-lg text-primary-foreground/80">
                Get hands-on experience in real-world projects and learn from experienced mentors.
              </p>
            </div>
          </div>
        </section>

        {/* Paid internship programs (external) */}
        <section className="section-padding bg-muted/30 border-y border-border/60">
          <div className="container-main">
            <div className="text-center max-w-3xl mx-auto mb-10">
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
                Paid open source programs
              </h2>
              <p className="text-muted-foreground">
                Well-known open source stipend internships you can apply to alongside MentSource support, each runs its own application
                process on its site.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {paidInternshipPrograms.map((program) => (
                <div
                  key={program.name}
                  className={`flex flex-col p-6 rounded-2xl bg-gradient-card border-2 ${program.borderAccent} card-hover`}
                >
                  <div
                    className={`mb-4 h-14 w-full shrink-0 rounded-xl ${program.iconWrap}`}
                    aria-hidden
                  />
                  <h3 className="font-display text-lg font-semibold text-foreground">{program.name}</h3>
                  <p className="text-sm text-muted-foreground mt-2">{program.description}</p>
                  <dl className="mt-4 space-y-3 border-t border-border/50 pt-4 text-sm flex-1">
                    <div>
                      <dt className="font-medium text-foreground">Internship period</dt>
                      <dd className="mt-1 text-muted-foreground leading-relaxed">{program.period}</dd>
                    </div>
                    <div>
                      <dt className="font-medium text-foreground">How to apply</dt>
                      <dd className="mt-1 text-muted-foreground leading-relaxed">{program.howToApply}</dd>
                    </div>
        
                  </dl>
                  <Button
                    variant="outline"
                    className={cn("mt-6 w-full sm:w-auto shrink-0", program.buttonClassName)}
                    asChild
                  >
                    <a href={program.url} target="_blank" rel="noopener noreferrer">
                      Visit website
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Past Interns */}
        <section className="mt-10">
          <div className="container-main">
          <div className="text-center max-w-3xl mx-auto mb-6">
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
               MentSource Past Interns
              </h2>
              <p className="text-muted-foreground">
              Meet the interns who have completed MentSource internship program and gained valuable experience.
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
                  <p className="text-sm text-muted-foreground mt-1">
                  <span className="font-medium text-foreground/80">Internship Type:</span> {pastIntern.internshiptype}
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