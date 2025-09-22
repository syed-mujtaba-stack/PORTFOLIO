import { useState } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Calendar, Clock, Search, ArrowRight } from "lucide-react";
import { blogPosts, getAllCategories } from "@/data/blogPosts";

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  
  const categories = ["All", ...getAllCategories()];
  
  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredPost = blogPosts[0];
  const recentPosts = filteredPosts.slice(1);

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-24">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Tech <span className="gradient-text">Blog</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Insights, tutorials, and thoughts on modern web development, AI engineering, and emerging technologies.
          </p>
        </div>

        {/* Search and Filters */}
        <div className="mb-12">
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={category === selectedCategory ? "hero" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Featured Post */}
        {selectedCategory === "All" && !searchTerm && (
          <div className="mb-16">
            <h2 className="text-2xl font-bold mb-6">Featured Article</h2>
            <Card className="gradient-card hover:glow transition-all duration-300 group">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="relative overflow-hidden rounded-lg">
                  <img
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    className="w-full h-64 lg:h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge variant="secondary">{featuredPost.category}</Badge>
                  </div>
                </div>
                
                <div className="p-6 flex flex-col justify-center">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {new Date(featuredPost.date).toLocaleDateString()}
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {featuredPost.readTime}
                    </div>
                  </div>
                  
                  <h3 className="text-2xl lg:text-3xl font-bold mb-4">{featuredPost.title}</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {featuredPost.excerpt}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {featuredPost.tags.slice(0, 3).map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  
                  <Link to={`/blog/${featuredPost.id}`}>
                    <Button variant="hero" className="group/btn">
                      Read Article
                      <ArrowRight className="h-4 w-4 ml-2 transition-transform group-hover/btn:translate-x-1" />
                    </Button>
                  </Link>
                </div>
              </div>
            </Card>
          </div>
        )}

        {/* Articles Grid */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-6">
            {selectedCategory === "All" && !searchTerm ? "Latest Articles" : "Articles"}
            <span className="text-muted-foreground text-lg ml-2">({filteredPosts.length})</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-2">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {new Date(post.date).toLocaleDateString()}
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {post.readTime}
                    </div>
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    {post.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.slice(0, 2).map((tag) => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  
                  <Link to={`/blog/${post.id}`}>
                    <Button variant="outline" size="sm" className="w-full group/btn">
                      Read More
                      <ArrowRight className="h-4 w-4 ml-2 transition-transform group-hover/btn:translate-x-1" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="text-center gradient-card p-8 rounded-lg">
          <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Subscribe to get the latest articles about web development, AI engineering, and tech insights delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input placeholder="Enter your email" className="flex-1" />
            <Button variant="hero">Subscribe</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;