import { useParams, Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, Clock, Share } from "lucide-react";
import { getPostById } from "@/data/blogPosts";

const BlogPost = () => {
  const { id } = useParams<{ id: string }>();
  const post = id ? getPostById(id) : null;

  if (!post) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
          <p className="text-muted-foreground mb-6">The blog post you're looking for doesn't exist.</p>
          <Link to="/blog">
            <Button variant="hero">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Blog
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-24">
        {/* Back Button */}
        <div className="mb-8">
          <Link to="/blog">
            <Button variant="ghost" size="sm">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Blog
            </Button>
          </Link>
        </div>

        {/* Article Header */}
        <article className="max-w-4xl mx-auto">
          <header className="mb-8">
            <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
              <Badge variant="secondary">{post.category}</Badge>
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-1" />
                {new Date(post.date).toLocaleDateString()}
              </div>
              <div className="flex items-center">
                <Clock className="h-4 w-4 mr-1" />
                {post.readTime}
              </div>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              {post.title}
            </h1>
            
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              {post.excerpt}
            </p>
            
            <div className="flex flex-wrap gap-2 mb-8">
              {post.tags.map((tag) => (
                <Badge key={tag} variant="outline">
                  {tag}
                </Badge>
              ))}
            </div>
            
            <div className="flex items-center justify-between border-b border-border pb-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-primary to-primary-glow rounded-full flex items-center justify-center text-white font-bold">
                  SMA
                </div>
                <div>
                  <p className="font-medium">Syed Mujtaba Abbas</p>
                  <p className="text-sm text-muted-foreground">Full Stack Developer & AI Engineer</p>
                </div>
              </div>
              
              <Button variant="outline" size="sm">
                <Share className="h-4 w-4 mr-2" />
                Share
              </Button>
            </div>
          </header>

          {/* Featured Image */}
          <div className="mb-12 rounded-lg overflow-hidden">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-64 md:h-96 object-cover"
            />
          </div>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none">
            <div className="text-foreground leading-relaxed space-y-6">
              {post.content.split('\n\n').map((paragraph, index) => {
                if (paragraph.startsWith('##')) {
                  const heading = paragraph.replace('## ', '');
                  return (
                    <h2 key={index} className="text-2xl font-bold mt-12 mb-4 text-foreground">
                      {heading}
                    </h2>
                  );
                }
                
                if (paragraph.startsWith('###')) {
                  const heading = paragraph.replace('### ', '');
                  return (
                    <h3 key={index} className="text-xl font-semibold mt-8 mb-3 text-foreground">
                      {heading}
                    </h3>
                  );
                }
                
                if (paragraph.startsWith('```')) {
                  const codeBlock = paragraph.replace(/```\w*\n?/, '').replace(/```$/, '');
                  return (
                    <pre key={index} className="bg-muted p-4 rounded-lg overflow-x-auto my-6">
                      <code className="text-sm">{codeBlock}</code>
                    </pre>
                  );
                }
                
                if (paragraph.startsWith('1.') || paragraph.startsWith('- ')) {
                  const items = paragraph.split('\n').filter(item => item.trim());
                  return (
                    <ul key={index} className="list-disc list-inside space-y-2 my-6">
                      {items.map((item, itemIndex) => (
                        <li key={itemIndex} className="text-muted-foreground">
                          {item.replace(/^[-\d.]\s*/, '')}
                        </li>
                      ))}
                    </ul>
                  );
                }
                
                return (
                  <p key={index} className="text-muted-foreground leading-relaxed">
                    {paragraph}
                  </p>
                );
              })}
            </div>
          </div>

          {/* Article Footer */}
          <footer className="mt-16 pt-8 border-t border-border">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="text-center md:text-left">
                <h3 className="text-lg font-semibold mb-2">Enjoyed this article?</h3>
                <p className="text-muted-foreground">
                  Follow me for more insights on web development and AI engineering.
                </p>
              </div>
              
              <div className="flex gap-4">
                <Button variant="hero">
                  Follow on LinkedIn
                </Button>
                <Button variant="outline">
                  View More Posts
                </Button>
              </div>
            </div>
          </footer>
        </article>
      </div>
    </div>
  );
};

export default BlogPost;