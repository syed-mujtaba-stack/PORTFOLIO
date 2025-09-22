import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, Send } from "lucide-react";
import { toast } from "sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    toast.success("Message sent successfully! I'll get back to you soon.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "abbasmjtaba125@gmail.com",
      href: "mailto:abbasmjtaba125@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+92 346 0630802",
      href: "tel:+923460630802"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Pakistan",
      href: "#"
    }
  ];

  const socialLinks = [
    { icon: Github, label: "GitHub", href: "#" },
    { icon: Linkedin, label: "LinkedIn", href: "#" },
    { icon: Twitter, label: "Twitter", href: "#" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-24">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Get In <span className="gradient-text">Touch</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to start your next project? Let's discuss how we can work together to bring your ideas to life.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <Card className="gradient-card">
              <CardHeader>
                <CardTitle className="text-2xl">Send me a message</CardTitle>
                <p className="text-muted-foreground">
                  Fill out the form below and I'll get back to you as soon as possible.
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">
                        Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Your full name"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        Email *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="your.email@example.com"
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-2">
                      Subject *
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="What's this about?"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell me about your project or idea..."
                      rows={6}
                      required
                    />
                  </div>
                  
                  <Button type="submit" variant="hero" size="lg" className="w-full">
                    <Send className="h-4 w-4 mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Details */}
            <Card className="gradient-card">
              <CardHeader>
                <CardTitle className="text-2xl">Contact Information</CardTitle>
                <p className="text-muted-foreground">
                  Prefer direct contact? Reach out through any of these channels.
                </p>
              </CardHeader>
              <CardContent className="space-y-6">
                {contactInfo.map((info) => {
                  const Icon = info.icon;
                  return (
                    <div key={info.label} className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium">{info.label}</p>
                        <a
                          href={info.href}
                          className="text-muted-foreground hover:text-primary transition-colors"
                        >
                          {info.value}
                        </a>
                      </div>
                    </div>
                  );
                })}
              </CardContent>
            </Card>

            {/* Social Links */}
            <Card className="gradient-card">
              <CardHeader>
                <CardTitle className="text-2xl">Follow Me</CardTitle>
                <p className="text-muted-foreground">
                  Connect with me on social media for updates and insights.
                </p>
              </CardHeader>
              <CardContent>
                <div className="flex space-x-4">
                  {socialLinks.map((social) => {
                    const Icon = social.icon;
                    return (
                      <a
                        key={social.label}
                        href={social.href}
                        className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center hover:bg-primary/30 transition-colors group"
                      >
                        <Icon className="h-6 w-6 text-primary group-hover:scale-110 transition-transform" />
                      </a>
                    );
                  })}
                </div>
              </CardContent>
            </Card>

            {/* Availability Status */}
            <Card className="gradient-card">
              <CardHeader>
                <CardTitle className="text-2xl">Availability</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Current Status</span>
                    <Badge variant="secondary" className="bg-green-500/20 text-green-400">
                      Available for Projects
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Response Time</span>
                    <span className="font-medium">Within 24 hours</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Preferred Projects</span>
                    <span className="font-medium">Full Stack & AI</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">What's your typical project timeline?</h3>
              <p className="text-muted-foreground">
                Project timelines vary based on complexity, but most web applications take 2-8 weeks, 
                while AI projects may require 4-12 weeks for proper development and testing.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Do you work with international clients?</h3>
              <p className="text-muted-foreground">
                Yes! I work with clients worldwide and am flexible with different time zones. 
                Most communication happens via email, video calls, and project management tools.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">What technologies do you specialize in?</h3>
              <p className="text-muted-foreground">
                I specialize in React, Next.js, Node.js, TypeScript, and modern AI technologies. 
                I also work with various databases and cloud platforms.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Do you provide ongoing support?</h3>
              <p className="text-muted-foreground">
                Absolutely! I offer post-launch support, maintenance, and feature updates 
                to ensure your project continues to meet your evolving needs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;