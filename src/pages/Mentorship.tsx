import { Button } from "@/components/ui/button";
import {
  Users, MessageCircle, Calendar, Target, ArrowRight,
  CheckCircle, Star, Globe, Heart
} from "lucide-react";
import { navigateTo } from "@/lib/utils";

import godsWillImg from "@/assets/godswill.png";
import temitopeImg from "@/assets/temitope.jpg";
import hammedImg from "@/assets/hammed.jpg";

const START_BUILDING_FORM_URL = "https://forms.gle/hTABxBPqHF1Wnxba6";
const MENTOR_FORM_URL = "https://forms.gle/afkQYSu8ApbypaEfA";

const benefits = [
  {
    icon: MessageCircle,
    title: "1-on-1 Guidance",
    description: "Get personalized advice and feedback from industry professionals",
  },
  {
    icon: Target,
    title: "Hands-on Projects",
    description: "Select a project, achievable goals with your mentor's guidance",
  },
  {
    icon: Calendar,
    title: "Collaborative Learning",
    description: "Collaborate with other learners and mentors, learn and grow together",
  },
  {
    icon: Globe,
    title: "Global Network",
    description: "Connect with mentors from top companies worldwide",
  },
];

const mentors = [
  // {
  //   name: "Peculiar Umeh",
  //   role: "Project Manager at Superbloom",
  //   expertise: ["Project Management", "Open Source"],
  //   image: pecImg,
  //   rating: 5.0,
  //   sessions: 50,
  // },
  {
    name: "GodsWill Jonathan",
    role: "Senior Android Engineer at Gopaddi",
    expertise: ["Kotlin Mutiplatform", "Android Development"],
    image: godsWillImg,
    rating: 5.0,
    sessions: 30,
  },
  {
    name: "Temitope Longe", 
    role: "Frontend Engineer at Gozade ",
    expertise: ["React", "TypeScript", "Vue.js"],
    image: temitopeImg,
    rating: 5.0,
    sessions: 20,
  },
  {
    name: "Hammed Sanni",
    role: "Frontend Developer at ",
    expertise: ["React", "TypeScript"],
    image: hammedImg,
    rating: 3.0,
    sessions: 10,
  },
];

const steps = [
  {
    number: "01",
    title: "Explore the Docs",
    description: "Read our documentation to understand the platform, learning paths, and how to get involved.",
  },
  {
    number: "02",
    title: "Choose a Learning Path",
    description: "Pick a path that matches your interests, skills, and goals—self-paced and community-driven.",
  },
  {
    number: "03",
    title: "Start Building & Learning",
    description: "Follow the guides, work on real projects, and learn by doing",
  },
];

const Mentorship = () => {
  return (
    <>
      {/* Hero */}
        <section className="bg-gradient-hero relative overflow-hidden py-20">
          <div className="absolute top-20 right-10 w-72 h-72 bg-secondary/20 blob float opacity-40" />
          <div className="container-main relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 mb-6">
                <Users className="h-4 w-4 text-secondary" />
                <span className="text-sm font-medium text-primary-foreground/90">
                  8+ Volunteer Mentors
                </span>
              </span>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
                Learn From Those Who've Been There
              </h1>
              <p className="text-lg text-primary-foreground/80 mb-8">
                Connect with experienced professionals who volunteer their time to guide the next generation. Free, personalized mentorship for everyone.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
               
                <Button variant="hero-outline" size="xl" asChild>
                 <a
                          href={START_BUILDING_FORM_URL}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                  Find a Mentor
                  <ArrowRight className="h-5 w-5" />
                  </a>
                </Button>
                <Button size="xl" asChild>
                  <a
                          href={MENTOR_FORM_URL}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                  <div onClick={()=> navigateTo("/mentorship#become-mentor")} className="cursor-pointer">
                    Become a Mentor
                  </div>
                  </a>
                </Button>
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0">
            <svg viewBox="0 0 1440 120" fill="none" preserveAspectRatio="none" className="w-full h-16 sm:h-24">
              <path d="M0 120L48 110C96 100 192 80 288 70C384 60 480 60 576 65C672 70 768 80 864 85C960 90 1056 90 1152 85C1248 80 1344 70 1392 65L1440 60V120H0Z" fill="hsl(var(--background))" />
            </svg>
          </div>
        </section>

        {/* Benefits */}
        <section>
          <div className="container-main">
            <div className="text-center max-w-3xl mx-auto mb-6">
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
                Why Mentorship Matters
              </h2>
              <p className="text-muted-foreground">
                Studies show mentored individuals are 5x more likely to advance in their careers
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit) => (
                <div key={benefit.title} className="p-6 rounded-2xl bg-gradient-card border border-border/50 card-hover">
                  <div className="w-12 h-12 rounded-xl bg-primary-light text-primary flex items-center justify-center mb-4">
                    <benefit.icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-foreground mb-2">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="section-padding bg-gradient-soft">
          <div className="container-main">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
                How It Works
              </h2>
              <p className="text-muted-foreground">
                Getting started is easy and completely free
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {steps.map((step, index) => (
                <div key={step.number} className="relative">
                  {index < steps.length - 1 && (
                    <div className="hidden md:block absolute top-12 left-1/2 w-full h-0.5 bg-border" />
                  )}
                  <div className="relative text-center">
                    <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-primary-dark text-primary-foreground text-3xl font-bold mb-6">
                      {step.number}
                    </div>
                    <h3 className="font-display text-xl font-semibold text-foreground mb-2">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Mentors */}
        <section className="py-4">
          <div className="container-main">
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
              <div>
                <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-2">
                  Featured Mentors
                </h2>
                <p className="text-muted-foreground">
                  Industry experts volunteering their time
                </p>
              </div>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {mentors.map((mentor) => (
                <div key={mentor.name} className="p-6 rounded-2xl bg-card border border-border/50 card-hover">
                  <img
                    src={mentor.image}
                    alt={mentor.name}
                    className="w-20 h-20 rounded-full object-cover mx-auto mb-4 ring-4 ring-primary-light"
                  />
                  <div className="text-center">
                    <h3 className="font-display font-semibold text-foreground">{mentor.name}</h3>
                    <p className="text-sm text-muted-foreground mb-3">{mentor.role}</p>
                    <div className="flex flex-wrap justify-center gap-1 mb-4">
                      {mentor.expertise.map((skill) => (
                        <span key={skill} className="px-2 py-0.5 rounded-full bg-primary-light text-primary text-xs">
                          {skill}
                        </span>
                      ))}
                    </div>
                    <div className="flex justify-center gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Star className="h-4 w-4 text-secondary" />
                        {mentor.rating}
                      </span>
                      <span>{mentor.sessions} sessions</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Become a Mentor CTA */}
        <section className="section-padding bg-gradient-hero relative overflow-hidden" id="become-mentor">
          <div className="container-main">
            <div className="max-w-3xl mx-auto text-center">
              <Heart className="h-12 w-12 text-secondary-foreground mx-auto mb-6" />
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-secondary-foreground mb-4">
                Give Back to the Community
              </h2>
              <p className="text-secondary-foreground/80 mb-6">
                Just a few hours a month can change someone's life. Share your knowledge and experience with learners who need guidance.
              </p>
              <div className="flex items-center flex-col sm:flex-row gap-6 justify-center">

                <ul className="inline-flex flex-col gap-2 text-left mb-8">
                  {["Flexible time commitment", "Choose who you mentor", "Make a real impact", "Grow your network"].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-secondary-foreground">
                      <CheckCircle className="h-5 w-5" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Button variant="hero-outline" size="lg" className="cursor-pointer border-secondary-foreground/30 text-secondary-foreground hover:bg-secondary-foreground hover:text-[#ff5b3e]" asChild>
                <a
                        href={MENTOR_FORM_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        >
                  <div>
                    Apply to Be a Mentor
                    <ArrowRight className="h-4 w-4" />
                  </div>
                  </a>
                </Button>
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 left-0 right-0">
            <svg viewBox="0 0 1440 120" fill="none" preserveAspectRatio="none" className="w-full h-16 sm:h-24">
              <path d="M0 120L48 110C96 100 192 80 288 70C384 60 480 60 576 65C672 70 768 80 864 85C960 90 1056 90 1152 85C1248 80 1344 70 1392 65L1440 60V120H0Z" fill="hsl(var(--background))" />
            </svg>
          </div>
        </section>
    </>
  );
};

export default Mentorship;
