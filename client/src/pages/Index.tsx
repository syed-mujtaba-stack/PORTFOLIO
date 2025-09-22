import Hero from "@/components/Hero";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { ArrowRight, Code, Brain, Database, Zap } from "lucide-react";
import { blogPosts } from "@/data/blogPosts";

const Index = () => {
  const featuredSkills = [
    { icon: Code, name: "Full Stack Development", description: "React, Next.js, Node.js, TypeScript" },
    { icon: Brain, name: "AI Engineering", description: "OpenAI, LangChain, Prompt Engineering" },
    { icon: Database, name: "Database Design", description: "MongoDB, Supabase, PostgreSQL" },
    { icon: Zap, name: "API Development", description: "RESTful APIs, GraphQL, Express" }
  ];

  const recentPosts = blogPosts.slice(0, 3);

  return (
    <div className="bg-background">
      <Hero />
      
      {/* Skills Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What I <span className="gradient-text">Specialize In</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Combining modern web development with cutting-edge AI to create powerful, intelligent applications.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredSkills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <Card key={index} className="gradient-card hover:glow transition-all duration-300 text-center">
                  <CardHeader>
                    <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{skill.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm">{skill.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Latest Blog Posts */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Latest <span className="gradient-text">Insights</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Stay updated with my latest thoughts on web development, AI engineering, and technology trends.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {recentPosts.map((post) => (
              <Card key={post.id} className="gradient-card hover:glow transition-all duration-300 group">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge variant="secondary">{post.category}</Badge>
                  </div>
                </div>
                
                <CardHeader>
                  <CardTitle className="text-lg group-hover:text-primary transition-colors">
                    {post.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <Link to={`/blog/${post.id}`}>
                    <Button variant="outline" size="sm" className="group/btn">
                      Read More
                      <ArrowRight className="h-4 w-4 ml-2 transition-transform group-hover/btn:translate-x-1" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center">
            <Link to="/blog">
              <Button variant="hero" size="lg">
                View All Articles
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="gradient-card p-12 rounded-lg text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Build Something <span className="gradient-text">Amazing</span>?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto text-lg">
              Let's collaborate on your next project. Whether you need a modern web application, 
              AI integration, or technical consultation, I'm here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button variant="hero" size="lg">
                  Start a Project
                </Button>
              </Link>
              <Link to="/portfolio">
                <Button variant="outline" size="lg">
                  View My Work
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
