import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin, Send, Linkedin, Github } from "lucide-react";

export function ContactSection() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Mock form submission - in real app, this would send to backend
    await new Promise(resolve => setTimeout(resolve, 1000));

    toast({
      title: "Message sent successfully!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });

    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      subject: "",
      message: "",
    });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-20 bg-slate-50 dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 dark:text-slate-100 mb-6">
            Get In Touch
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
            Let's collaborate on innovative projects or discuss opportunities in AI, development, and technology
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="animate-scale-in">
            <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-100 mb-8 gradient-text">
              Contact Information
            </h3>

            <div className="space-y-6">
              <div className="flex items-center space-x-4 hover-grow cursor-pointer group animate-slide-in-left">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/50 rounded-xl flex items-center justify-center group-hover:animate-bounce animate-glow">
                  <Mail className="h-6 w-6 text-primary group-hover:animate-wave" />
                </div>
                <div>
                  <p className="font-medium text-slate-800 dark:text-slate-100 group-hover:gradient-text transition-all">Email</p>
                  <a
                    href="mailto:banimesh2002@gmail.com"
                    className="text-primary hover:text-primary/80 transition-colors group-hover:font-semibold"
                  >
                    banimesh2002@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4 hover-grow cursor-pointer group animate-slide-in-left animation-delay-200">
                <div className="w-12 h-12 bg-teal-100 dark:bg-teal-900/50 rounded-xl flex items-center justify-center group-hover:animate-bounce animate-glow">
                  <Phone className="h-6 w-6 text-accent group-hover:animate-wave" />
                </div>
                <div>
                  <p className="font-medium text-slate-800 dark:text-slate-100 group-hover:gradient-text transition-all">Phone</p>
                  <a
                    href="tel:+8801781836541"
                    className="text-accent hover:text-accent/80 transition-colors group-hover:font-semibold"
                  >
                    +880 178 183 6541
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-4 hover-grow cursor-pointer group animate-slide-in-left animation-delay-400">
                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/50 rounded-xl flex items-center justify-center group-hover:animate-bounce animate-glow">
                  <MapPin className="h-6 w-6 text-purple-600 dark:text-purple-400 group-hover:animate-wave" />
                </div>
                <div>
                  <p className="font-medium text-slate-800 dark:text-slate-100 group-hover:gradient-text transition-all">Location</p>
                  <p className="text-slate-600 dark:text-slate-400 group-hover:text-slate-800 dark:group-hover:text-slate-200 transition-colors">
                    Merul Badda, Dhaka, Bangladesh
                  </p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="mt-8 animate-fade-in animation-delay-600">
              <h4 className="text-lg font-semibold text-slate-800 dark:text-slate-100 mb-4 gradient-text">
                Connect With Me
              </h4>
              <div className="flex space-x-4">
                <a
                  href="https://linkedin.com/in/animesh-bhattacharjee-jhalok"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-blue-100 dark:bg-blue-900/50 rounded-xl flex items-center justify-center hover-lift animate-glow group"
                >
                  <Linkedin className="h-6 w-6 text-primary group-hover:animate-bounce" />
                </a>
                <a
                  href="https://github.com/Animesh6096"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-slate-100 dark:bg-slate-700 rounded-xl flex items-center justify-center hover-lift animate-glow group"
                >
                  <Github className="h-6 w-6 text-slate-600 dark:text-slate-400 group-hover:animate-bounce" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="animate-scale-in animation-delay-300">
            <Card className="bg-white dark:bg-slate-800 border-none shadow-lg hover-lift relative overflow-hidden">
              <div className="absolute inset-0 opacity-5">
                <div className="w-full h-full bg-gradient-to-br from-primary to-accent animate-morph"></div>
              </div>
              <CardContent className="p-8 relative z-10">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                        First Name
                      </label>
                      <Input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        placeholder="John"
                        required
                        className="bg-slate-100 dark:bg-slate-700 border-slate-300 dark:border-slate-600"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                        Last Name
                      </label>
                      <Input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        placeholder="Doe"
                        required
                        className="bg-slate-100 dark:bg-slate-700 border-slate-300 dark:border-slate-600"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                      Email
                    </label>
                    <Input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      required
                      className="bg-slate-100 dark:bg-slate-700 border-slate-300 dark:border-slate-600"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                      Subject
                    </label>
                    <Input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Project Collaboration"
                      required
                      className="bg-slate-100 dark:bg-slate-700 border-slate-300 dark:border-slate-600"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                      Message
                    </label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project or collaboration idea..."
                      rows={5}
                      required
                      className="bg-slate-100 dark:bg-slate-700 border-slate-300 dark:border-slate-600 resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full px-8 py-4 rounded-xl shadow-lg hover-lift animate-glow group relative overflow-hidden"
                  >
                    <span className={`transition-all duration-300 ${isSubmitting ? 'animate-bounce' : ''}`}>
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </span>
                    <Send className={`h-4 w-4 ml-2 transition-all duration-300 ${isSubmitting ? 'animate-rotate' : 'group-hover:animate-bounce'}`} />
                    {isSubmitting && (
                      <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent opacity-20 animate-shimmer"></div>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
