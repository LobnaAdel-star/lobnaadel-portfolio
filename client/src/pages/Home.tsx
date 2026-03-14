import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Mail, Phone, MapPin, Github, Linkedin, ExternalLink, Code2, Database, Zap, Users } from "lucide-react";
import { useEffect, useState } from "react";

/**
 * Professional Portfolio for Lobna Adel
 * Design Philosophy: Modern, sophisticated, tech-forward
 * Typography: Playfair Display for headings, Poppins for body
 * Color Scheme: Deep blue (#1e3a8a) with purple accents
 */

export default function Home() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const projects = [
    {
      title: "Car Rental Web Application",
      description: "Advanced booking system with real-time availability, payment processing, and admin dashboard",
      tech: ["Laravel", "MySQL", "RESTful API", "Bootstrap"],
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663397133968/Rpp5VhWxsXRipkGzw8uBsW/project-car-rental-mAAY7LaM2EbRuL8xxfg2Nt.webp",
      link: "https://www.linkedin.com/posts/lobna-adle-ab737025a_php-laravel-webdevelopment-activity-7268564572452605952--Umc?utm_source=social_share_send&utm_medium=android_app&rcm=ACoAAD_FASsBujSusqXqDmC4tShlIxNxTaequEg&utm_campaign=share_via",
      highlights: ["Booking System", "Payment Gateway", "Admin Panel"]
    },
    {
      title: "Medicinal Plants Export Platform",
      description: "E-commerce platform for botanical products with secure transactions and inventory management",
      tech: ["Laravel", "PHP", "MySQL", "Stripe"],
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663397133968/Rpp5VhWxsXRipkGzw8uBsW/project-medicinal-iK6Rd5SXNfS6FgqQsxiHnx.webp",
      link: "https://www.linkedin.com/posts/lobna-adle-ab737025a_aesaefaewaeyaezabraewaeyaeq-laravel-php-activity-7263302269901688832-8NJt?utm_source=social_share_send&utm_medium=android_app&rcm=ACoAAD_FASsBujSusqXqDmC4tShlIxNxTaequEg&utm_campaign=share_via",
      highlights: ["E-commerce", "Inventory System", "Secure Payments"]
    },
    {
      title: "Housing Request Management System",
      description: "Automated workflow system with real-time validation and request tracking",
      tech: ["Laravel", "PHP", "MySQL", "JavaScript"],
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663397133968/Rpp5VhWxsXRipkGzw8uBsW/project-car-rental-mAAY7LaM2EbRuL8xxfg2Nt.webp",
      link: "https://www.linkedin.com/posts/lobna-adle-ab737025a_%D9%87%D9%84%D8%A7-%D8%A8%D9%8A%D9%83%D9%85-%D8%AF%D8%A7-%D9%85%D8%B4%D8%B1%D9%88%D8%B9%D9%89-%D8%A7%D9%84%D8%A7%D9%88%D9%84-%D9%81%D9%89-%D9%85%D8%B3%D8%A7%D8%B1-%D8%AA%D8%B9%D9%84%D9%85%D9%89-framework-activity-7220786318698553344-3NbI?utm_source=social_share_send&utm_medium=android_app&rcm=ACoAAD_FASsBujSusqXqDmC4tShlIxNxTaequEg&utm_campaign=share_via",
      highlights: ["Workflow Automation", "Real-time Validation", "Request Tracking"]
    },
    {
      title: "Smart Tourism System",
      description: "Interactive travel planning platform with maps, itinerary builder, and recommendations",
      tech: ["Laravel", "PHP", "Google Maps API", "MySQL"],
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663397133968/Rpp5VhWxsXRipkGzw8uBsW/project-medicinal-iK6Rd5SXNfS6FgqQsxiHnx.webp",
      link: "https://www.linkedin.com/posts/lobna-adle-ab737025a_webdevelopment-smarttourism-php-activity-7330144904691576832-8_7R?utm_source=social_share_send&utm_medium=android_app&rcm=ACoAAD_FASsBujSusqXqDmC4tShlIxNxTaequEg&utm_campaign=share_via",
      highlights: ["Interactive Maps", "Trip Planner", "Recommendations"]
    }
  ];

  const skills = [
    { category: "Backend Languages", items: ["PHP", "JavaScript", "SQL"], icon: Code2 },
    { category: "Frameworks & Tools", items: ["Laravel", "Git", "GitHub", "RESTful APIs"], icon: Zap },
    { category: "Databases", items: ["MySQL", "SQL", "Database Design"], icon: Database },
    { category: "Soft Skills", items: ["Team Leadership", "Problem Solving", "Communication"], icon: Users }
  ];

  const achievements = [
    { title: "Best Freelancer of the Month", subtitle: "Upwork, 2024" },
    { title: "5+ Projects", subtitle: "All with 5-star ratings" },
    { title: "Laravel Certified Developer", subtitle: "2023" },
    { title: "3+ Years Experience", subtitle: "Backend Development" }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground smooth-scroll">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/80 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}>
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-gradient">LA</div>
          <div className="hidden md:flex gap-8">
            {["About", "Skills", "Projects", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-sm font-semibold hover:text-accent transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Background Image */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url('https://d2xsxph8kpxj0f.cloudfront.net/310519663397133968/Rpp5VhWxsXRipkGzw8uBsW/hero-background-YJ2BLC3bbEqjp2Pr2CgjpR.webp')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.15
          }}
        />

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="animate-fade-in-left">
              <div className="mb-6">
                <span className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-semibold mb-4">
                  Welcome to my portfolio
                </span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-4 leading-tight">
                Lobna <span className="text-gradient">Adel</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-2 font-semibold">
                Backend Developer | Laravel Specialist
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Crafting scalable, secure backend systems with clean code and innovative solutions. 3+ years of experience building robust applications that drive business growth.
              </p>
              <div className="flex gap-4 flex-wrap">
                <a href="#projects">
                  <Button size="lg" className="bg-accent hover:bg-accent/90">
                    View My Work
                  </Button>
                </a>
                <a href="#contact">
                  <Button size="lg" variant="outline">
                    Get in Touch
                  </Button>
                </a>
              </div>
            </div>

            {/* Right Image */}
            <div className="animate-fade-in-down flex justify-center">
              <div className="relative w-80 h-80 md:w-96 md:h-96">
                <div className="absolute inset-0 bg-gradient-to-br from-accent to-accent/50 rounded-3xl blur-2xl opacity-20" />
                <img
                  src="https://d2xsxph8kpxj0f.cloudfront.net/310519663397133968/Rpp5VhWxsXRipkGzw8uBsW/hero-profile-ZZnwoJfj97xRQKvQPKfmaR.webp"
                  alt="Lobna Adel"
                  className="relative w-full h-full object-cover rounded-3xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-center mb-12">About Me</h2>
          <div className="max-w-3xl mx-auto">
            <Card className="p-8 border-0 shadow-lg">
              <p className="text-lg leading-relaxed mb-6 text-muted-foreground">
                I'm a detail-oriented Backend Developer with a passion for building scalable, maintainable systems. With over 3 years of professional experience, I specialize in Laravel and PHP, creating robust APIs and database architectures that power modern web applications.
              </p>
              <p className="text-lg leading-relaxed mb-6 text-muted-foreground">
                Currently pursuing a Bachelor's degree in Computer Science at Beni Suef University, I combine academic knowledge with practical expertise. I'm committed to clean code practices, continuous learning, and delivering solutions that exceed client expectations.
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground">
                My approach focuses on understanding business requirements, designing efficient solutions, and implementing features that are both powerful and maintainable. I thrive in collaborative environments and take pride in mentoring junior developers.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-center mb-12">Technical Skills</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, idx) => {
              const Icon = skill.icon;
              return (
                <Card key={idx} className="p-6 border-0 shadow-md hover:shadow-lg transition-shadow">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 bg-accent/10 rounded-lg">
                      <Icon className="w-6 h-6 text-accent" />
                    </div>
                    <h3 className="font-bold text-foreground">{skill.category}</h3>
                  </div>
                  <ul className="space-y-2">
                    {skill.items.map((item, i) => (
                      <li key={i} className="text-sm text-muted-foreground flex items-center">
                        <span className="w-2 h-2 bg-accent rounded-full mr-2" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-center mb-12">Featured Projects</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, idx) => (
              <Card key={idx} className="overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-foreground">{project.title}</h3>
                  <p className="text-muted-foreground mb-4 text-sm leading-relaxed">{project.description}</p>
                  
                  <div className="mb-4">
                    <p className="text-xs font-semibold text-accent mb-2 uppercase">Highlights</p>
                    <div className="flex flex-wrap gap-2">
                      {project.highlights.map((highlight, i) => (
                        <span key={i} className="px-3 py-1 bg-accent/10 text-accent text-xs rounded-full">
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mb-4">
                    <p className="text-xs font-semibold text-muted-foreground mb-2 uppercase">Tech Stack</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, i) => (
                        <span key={i} className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" size="sm" className="w-full">
                      View Project <ExternalLink className="w-4 h-4 ml-2" />
                    </Button>
                  </a>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-center mb-12">Achievements</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {achievements.map((achievement, idx) => (
              <Card key={idx} className="p-6 border-0 shadow-md text-center hover:shadow-lg transition-shadow">
                <h3 className="font-bold text-lg mb-2 text-foreground">{achievement.title}</h3>
                <p className="text-sm text-muted-foreground">{achievement.subtitle}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-center mb-12">Services</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            <Card className="p-6 border-0 shadow-md">
              <h3 className="font-bold text-lg mb-3">Backend Development</h3>
              <p className="text-muted-foreground text-sm">Custom web development with PHP/Laravel, building scalable and secure backend systems.</p>
            </Card>
            <Card className="p-6 border-0 shadow-md">
              <h3 className="font-bold text-lg mb-3">Database Design</h3>
              <p className="text-muted-foreground text-sm">Designing and optimizing databases for performance, scalability, and data integrity.</p>
            </Card>
            <Card className="p-6 border-0 shadow-md">
              <h3 className="font-bold text-lg mb-3">API Development</h3>
              <p className="text-muted-foreground text-sm">Building robust RESTful APIs and integrations that power modern applications.</p>
            </Card>
            <Card className="p-6 border-0 shadow-md">
              <h3 className="font-bold text-lg mb-3">Maintenance & Deployment</h3>
              <p className="text-muted-foreground text-sm">Website maintenance, deployment, and ongoing support to keep systems running smoothly.</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-center mb-12">Get In Touch</h2>
          <div className="max-w-2xl mx-auto">
            <Card className="p-8 border-0 shadow-lg">
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-accent/10 rounded-lg">
                    <MapPin className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Location</h3>
                    <p className="text-muted-foreground text-sm">Beni Suef, Egypt</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-accent/10 rounded-lg">
                    <Mail className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Email</h3>
                    <a href="mailto:lobnaadle652@gmail.com" className="text-accent hover:underline text-sm">
                      lobnaadle652@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-accent/10 rounded-lg">
                    <Phone className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Phone</h3>
                    <a href="tel:+201289702406" className="text-accent hover:underline text-sm">
                      +20 128 970 2406
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-accent/10 rounded-lg">
                    <Linkedin className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">LinkedIn</h3>
                    <a
                      href="https://www.linkedin.com/in/lobna-adle-ab737025a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-accent hover:underline text-sm"
                    >
                      View Profile
                    </a>
                  </div>
                </div>
              </div>

              <div className="border-t pt-8">
                <h3 className="font-bold mb-4">Let's Connect</h3>
                <p className="text-muted-foreground text-sm mb-6">
                  I'm always interested in hearing about new projects and opportunities. Feel free to reach out if you'd like to collaborate or discuss your next project.
                </p>
                <div className="flex gap-4">
                  <a
                    href="https://www.linkedin.com/in/lobna-adle-ab737025a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button variant="outline" size="sm">
                      <Linkedin className="w-4 h-4 mr-2" />
                      LinkedIn
                    </Button>
                  </a>
                  <a href="mailto:lobnaadle652@gmail.com">
                    <Button size="sm" className="bg-accent hover:bg-accent/90">
                      <Mail className="w-4 h-4 mr-2" />
                      Email Me
                    </Button>
                  </a>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm">
            &copy; 2025 Lobna Adel. All Rights Reserved. | Crafted with passion for excellence
          </p>
        </div>
      </footer>
    </div>
  );
}
