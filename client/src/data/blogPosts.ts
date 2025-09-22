// Import blog images
import reactTypescriptImg from "@/assets/blog-react-typescript.jpg";
import nextjsRouterImg from "@/assets/blog-nextjs-router.jpg";
import aiOpenaiImg from "@/assets/blog-ai-openai.jpg";
import supabaseImg from "@/assets/blog-supabase.jpg";
import tailwindCssImg from "@/assets/blog-tailwind-css.jpg";
import nodejsExpressImg from "@/assets/blog-nodejs-express.jpg";
import mongodbMongooseImg from "@/assets/blog-mongodb-mongoose.jpg";
import pythonScrapingImg from "@/assets/blog-python-scraping.jpg";
import promptEngineeringImg from "@/assets/blog-prompt-engineering.jpg";
import agenticAiImg from "@/assets/blog-agentic-ai.jpg";
import dockerDevopsImg from "@/assets/blog-docker-devops.jpg";
import graphqlApiImg from "@/assets/blog-graphql-api.jpg";
import vuejsComponentsImg from "@/assets/blog-vuejs-components.jpg";
import awsServerlessImg from "@/assets/blog-aws-serverless.jpg";
import firebaseBackendImg from "@/assets/blog-firebase-backend.jpg";
import machineLearningImg from "@/assets/blog-machine-learning.jpg";

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  category: string;
  readTime: string;
  image: string;
  tags: string[];
}

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Building Modern Web Applications with React and TypeScript",
    excerpt: "Explore the powerful combination of React and TypeScript for creating robust, scalable web applications with better developer experience.",
    content: `React and TypeScript have become the gold standard for modern web development. In this comprehensive guide, we'll explore how these technologies work together to create robust, maintainable applications.

## Why React + TypeScript?

TypeScript brings static typing to JavaScript, catching errors at compile time rather than runtime. When combined with React, it provides:

- **Better Developer Experience**: Auto-completion, refactoring tools, and inline documentation
- **Early Error Detection**: Catch bugs before they reach production
- **Improved Maintainability**: Self-documenting code with clear interfaces
- **Enhanced Team Collaboration**: Clear contracts between components

## Setting Up Your Project

Start with Vite for lightning-fast development:

\`\`\`bash
npm create vite@latest my-app -- --template react-ts
cd my-app
npm install
npm run dev
\`\`\`

## Component Patterns

Here's a well-typed React component:

\`\`\`tsx
interface UserCardProps {
  user: {
    id: string;
    name: string;
    email: string;
    avatar?: string;
  };
  onUserClick: (userId: string) => void;
}

const UserCard: React.FC<UserCardProps> = ({ user, onUserClick }) => {
  return (
    <div className="user-card" onClick={() => onUserClick(user.id)}>
      {user.avatar && <img src={user.avatar} alt={user.name} />}
      <h3>{user.name}</h3>
      <p>{user.email}</p>
    </div>
  );
};
\`\`\`

## Best Practices

1. **Use Interface over Type**: For object shapes, prefer interfaces
2. **Generic Components**: Make reusable components with generics
3. **Strict Mode**: Enable strict TypeScript settings
4. **Custom Hooks**: Type your custom hooks properly

The combination of React and TypeScript creates a powerful development environment that scales beautifully with your project's growth.`,
    date: "2024-03-15",
    category: "Web Development",
    readTime: "8 min read",
    image: reactTypescriptImg,
    tags: ["React", "TypeScript", "Web Development", "Frontend"]
  },
  {
    id: "2",
    title: "Mastering Next.js: From Pages to App Router",
    excerpt: "A complete guide to Next.js evolution, covering the transition from pages router to the new app router with practical examples.",
    content: `Next.js has revolutionized React development with its powerful features. Let's explore the evolution from Pages Router to the new App Router.

## The Evolution of Next.js

Next.js has grown from a simple React framework to a full-stack solution offering:

- **Server-Side Rendering (SSR)**
- **Static Site Generation (SSG)**
- **API Routes**
- **File-based Routing**
- **Built-in Optimization**

## Pages Router vs App Router

### Pages Router (Legacy)
\`\`\`
pages/
  index.js
  about.js
  blog/
    [slug].js
\`\`\`

### App Router (Modern)
\`\`\`
app/
  page.js
  about/
    page.js
  blog/
    [slug]/
      page.js
\`\`\`

## Server Components

The App Router introduces React Server Components:

\`\`\`tsx
// This component runs on the server
async function BlogPost({ params }: { params: { slug: string } }) {
  const post = await getPost(params.slug);
  
  return (
    <article>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
    </article>
  );
}
\`\`\`

## Migration Strategy

1. **Start Small**: Migrate one route at a time
2. **Use Parallel Routes**: Leverage advanced routing features
3. **Optimize Loading**: Implement proper loading states
4. **Error Boundaries**: Handle errors gracefully

The App Router represents the future of Next.js development, offering better performance and developer experience.`,
    date: "2024-03-10",
    category: "Next.js",
    readTime: "10 min read",
    image: nextjsRouterImg,
    tags: ["Next.js", "React", "App Router", "Server Components"]
  },
  {
    id: "3",
    title: "AI-Powered Development: Integrating OpenAI APIs",
    excerpt: "Learn how to integrate OpenAI APIs into your applications to create intelligent, AI-powered features that enhance user experience.",
    content: `Artificial Intelligence is transforming how we build applications. Let's explore integrating OpenAI APIs to create intelligent features.

## Getting Started with OpenAI

First, you'll need an API key from OpenAI:

\`\`\`bash
npm install openai
\`\`\`

## Basic Setup

\`\`\`typescript
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});
\`\`\`

## Chat Completions

Create conversational AI:

\`\`\`typescript
async function generateResponse(userMessage: string) {
  const completion = await openai.chat.completions.create({
    messages: [
      { role: "system", content: "You are a helpful assistant." },
      { role: "user", content: userMessage }
    ],
    model: "gpt-3.5-turbo",
  });

  return completion.choices[0].message.content;
}
\`\`\`

## Streaming Responses

For real-time interactions:

\`\`\`typescript
const stream = await openai.chat.completions.create({
  model: 'gpt-3.5-turbo',
  messages: [{ role: 'user', content: 'Tell me a story' }],
  stream: true,
});

for await (const chunk of stream) {
  process.stdout.write(chunk.choices[0]?.delta?.content || '');
}
\`\`\`

## Best Practices

1. **Rate Limiting**: Implement proper rate limiting
2. **Error Handling**: Handle API errors gracefully
3. **Caching**: Cache responses when appropriate
4. **Security**: Never expose API keys client-side

AI integration opens up endless possibilities for creating intelligent, responsive applications.`,
    date: "2024-03-05",
    category: "AI Development",
    readTime: "12 min read",
    image: aiOpenaiImg,
    tags: ["AI", "OpenAI", "API Integration", "ChatGPT"]
  },
  {
    id: "4",
    title: "Supabase: The Firebase Alternative for Modern Apps",
    excerpt: "Discover Supabase as a powerful backend-as-a-service solution offering PostgreSQL, authentication, and real-time features.",
    content: `Supabase has emerged as a compelling alternative to Firebase, offering a PostgreSQL-based backend with modern developer tools.

## Why Choose Supabase?

- **PostgreSQL Database**: Full SQL database with relationships
- **Real-time Subscriptions**: Live data updates
- **Built-in Authentication**: Multiple auth providers
- **Row Level Security**: Database-level security
- **Edge Functions**: Serverless functions

## Getting Started

\`\`\`bash
npm install @supabase/supabase-js
\`\`\`

## Database Operations

\`\`\`typescript
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  'your-project-url',
  'your-anon-key'
)

// Fetch data
const { data: posts, error } = await supabase
  .from('posts')
  .select('*')
  .order('created_at', { ascending: false })

// Insert data
const { data, error } = await supabase
  .from('posts')
  .insert({
    title: 'New Post',
    content: 'Post content...',
    author_id: user.id
  })
\`\`\`

## Real-time Subscriptions

\`\`\`typescript
const subscription = supabase
  .channel('public:posts')
  .on('postgres_changes', 
    { event: '*', schema: 'public', table: 'posts' },
    (payload) => {
      console.log('Change received!', payload)
    }
  )
  .subscribe()
\`\`\`

## Authentication

\`\`\`typescript
// Sign up
const { data, error } = await supabase.auth.signUp({
  email: 'example@email.com',
  password: 'password'
})

// Sign in
const { data, error } = await supabase.auth.signInWithPassword({
  email: 'example@email.com',
  password: 'password'
})
\`\`\`

Supabase provides a complete backend solution that scales with your application needs.`,
    date: "2024-02-28",
    category: "Backend",
    readTime: "9 min read",
    image: supabaseImg,
    tags: ["Supabase", "Backend", "PostgreSQL", "Authentication"]
  },
  {
    id: "5",
    title: "Modern CSS: Tailwind CSS Best Practices",
    excerpt: "Master Tailwind CSS with advanced techniques, custom components, and best practices for maintainable utility-first styling.",
    content: `Tailwind CSS has revolutionized how we approach styling. Let's explore advanced techniques and best practices for utility-first CSS.

## Utility-First Philosophy

Instead of writing custom CSS:

\`\`\`css
.btn-primary {
  background-color: #3b82f6;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 0.375rem;
  border: none;
}
\`\`\`

Use utilities:

\`\`\`html
<button class="bg-blue-500 text-white px-4 py-2 rounded border-0">
  Click me
</button>
\`\`\`

## Component Extraction

When patterns repeat, extract components:

\`\`\`tsx
const Button = ({ variant = 'primary', children, ...props }) => {
  const baseClasses = 'px-4 py-2 rounded font-medium transition-colors'
  const variantClasses = {
    primary: 'bg-blue-500 text-white hover:bg-blue-600',
    secondary: 'bg-gray-200 text-gray-900 hover:bg-gray-300'
  }
  
  return (
    <button 
      className={\`\${baseClasses} \${variantClasses[variant]}\`}
      {...props}
    >
      {children}
    </button>
  )
}
\`\`\`

## Custom Utilities

Extend Tailwind with custom utilities:

\`\`\`javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#eff6ff',
          500: '#3b82f6',
          900: '#1e3a8a'
        }
      }
    }
  },
  plugins: [
    function({ addUtilities }) {
      addUtilities({
        '.text-gradient': {
          'background-image': 'linear-gradient(to right, #3b82f6, #8b5cf6)',
          '-webkit-background-clip': 'text',
          '-webkit-text-fill-color': 'transparent'
        }
      })
    }
  ]
}
\`\`\`

## Responsive Design

Mobile-first approach:

\`\`\`html
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
  <!-- Cards -->
</div>
\`\`\`

## Performance Optimization

1. **Purge Unused CSS**: Tailwind automatically removes unused styles
2. **JIT Mode**: Just-in-time compilation for faster builds
3. **Component Libraries**: Build reusable component systems

Tailwind CSS enables rapid development while maintaining design consistency and performance.`,
    date: "2024-02-20",
    category: "CSS",
    readTime: "7 min read",
    image: tailwindCssImg,
    tags: ["CSS", "Tailwind", "Styling", "Frontend"]
  },
  {
    id: "6",
    title: "Node.js and Express: Building Robust APIs",
    excerpt: "Create scalable REST APIs with Node.js and Express, including authentication, validation, and best practices for production.",
    content: `Node.js and Express form the backbone of many modern web applications. Let's build robust APIs that scale.

## Setting Up Express

\`\`\`bash
npm init -y
npm install express cors helmet morgan dotenv
npm install -D nodemon @types/express
\`\`\`

## Basic Server Setup

\`\`\`javascript
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');

const app = express();

// Middleware
app.use(helmet());
app.use(cors());
app.use(morgan('combined'));
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(\`Server running on port \${PORT}\`);
});
\`\`\`

## RESTful Routes

\`\`\`javascript
// routes/posts.js
const express = require('express');
const router = express.Router();

// GET /api/posts
router.get('/', async (req, res) => {
  try {
    const posts = await Post.find()
      .populate('author', 'name email')
      .sort({ createdAt: -1 });
    res.json(posts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// POST /api/posts
router.post('/', async (req, res) => {
  try {
    const post = new Post(req.body);
    await post.save();
    res.status(201).json(post);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
\`\`\`

## Middleware for Authentication

\`\`\`javascript
const jwt = require('jsonwebtoken');

const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.status(401).json({ error: 'Access denied' });
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) {
      return res.status(403).json({ error: 'Invalid token' });
    }
    req.user = user;
    next();
  });
};
\`\`\`

## Input Validation

\`\`\`javascript
const { body, validationResult } = require('express-validator');

const validatePost = [
  body('title').isLength({ min: 1 }).withMessage('Title is required'),
  body('content').isLength({ min: 10 }).withMessage('Content must be at least 10 characters'),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  }
];
\`\`\`

## Error Handling

\`\`\`javascript
// Global error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  
  if (err.name === 'ValidationError') {
    return res.status(400).json({ error: err.message });
  }
  
  res.status(500).json({ error: 'Something went wrong!' });
});
\`\`\`

Building robust APIs requires careful attention to security, validation, and error handling.`,
    date: "2024-02-15",
    category: "Backend",
    readTime: "11 min read",
    image: nodejsExpressImg,
    tags: ["Node.js", "Express", "API", "Backend"]
  },
  {
    id: "7",
    title: "MongoDB and Mongoose: Database Modeling",
    excerpt: "Learn advanced MongoDB concepts and Mongoose patterns for designing efficient, scalable database schemas.",
    content: `MongoDB with Mongoose provides a flexible, powerful database solution for Node.js applications. Let's explore advanced patterns.

## Schema Design

\`\`\`javascript
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
    trim: true,
    maxlength: [50, 'Name cannot exceed 50 characters']
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    validate: {
      validator: function(v) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
      },
      message: 'Please enter a valid email'
    }
  },
  posts: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Post'
  }]
}, {
  timestamps: true,
  toJSON: { virtuals: true },
  toObject: { virtuals: true }
});
\`\`\`

## Virtual Properties

\`\`\`javascript
userSchema.virtual('fullName').get(function() {
  return \`\${this.firstName} \${this.lastName}\`;
});

userSchema.virtual('postCount', {
  ref: 'Post',
  localField: '_id',
  foreignField: 'author',
  count: true
});
\`\`\`

## Middleware (Hooks)

\`\`\`javascript
const bcrypt = require('bcrypt');

// Pre-save middleware
userSchema.pre('save', async function(next) {
  if (!this.isModified('password')) return next();
  
  try {
    this.password = await bcrypt.hash(this.password, 12);
    next();
  } catch (error) {
    next(error);
  }
});

// Post-remove middleware
userSchema.post('remove', async function() {
  await this.model('Post').deleteMany({ author: this._id });
});
\`\`\`

## Indexing for Performance

\`\`\`javascript
// Compound index
userSchema.index({ email: 1, status: 1 });

// Text index for search
postSchema.index({ 
  title: 'text', 
  content: 'text' 
}, {
  weights: { title: 10, content: 5 }
});
\`\`\`

## Aggregation Pipeline

\`\`\`javascript
const getPostStatistics = async () => {
  const stats = await Post.aggregate([
    {
      $match: { status: 'published' }
    },
    {
      $group: {
        _id: '$category',
        count: { $sum: 1 },
        avgLikes: { $avg: '$likes' },
        totalViews: { $sum: '$views' }
      }
    },
    {
      $sort: { count: -1 }
    }
  ]);
  
  return stats;
};
\`\`\`

## Populated Queries

\`\`\`javascript
const posts = await Post.find()
  .populate({
    path: 'author',
    select: 'name email',
    populate: {
      path: 'profile',
      select: 'bio avatar'
    }
  })
  .populate('comments', 'content author createdAt')
  .lean(); // Returns plain objects for better performance
\`\`\`

Proper database modeling is crucial for application performance and maintainability.`,
    date: "2024-02-10",
    category: "Database",
    readTime: "9 min read",
    image: mongodbMongooseImg,
    tags: ["MongoDB", "Mongoose", "Database", "NoSQL"]
  },
  {
    id: "8",
    title: "Python for Web Scraping and Data Analysis",
    excerpt: "Harness Python's power for web scraping and data analysis using BeautifulSoup, Scrapy, and pandas.",
    content: `Python excels at data extraction and analysis. Let's explore web scraping and data processing techniques.

## Web Scraping with BeautifulSoup

\`\`\`python
import requests
from bs4 import BeautifulSoup
import pandas as pd

def scrape_articles(url):
    response = requests.get(url)
    soup = BeautifulSoup(response.content, 'html.parser')
    
    articles = []
    for article in soup.find_all('article', class_='post'):
        title = article.find('h2').text.strip()
        content = article.find('p').text.strip()
        date = article.find('time')['datetime']
        
        articles.append({
            'title': title,
            'content': content,
            'date': date
        })
    
    return articles
\`\`\`

## Advanced Scraping with Scrapy

\`\`\`python
import scrapy

class BlogSpider(scrapy.Spider):
    name = 'blog_spider'
    start_urls = ['https://example-blog.com/posts']
    
    def parse(self, response):
        # Extract article links
        article_links = response.css('a.article-link::attr(href)').getall()
        
        for link in article_links:
            yield response.follow(link, self.parse_article)
            
        # Follow pagination
        next_page = response.css('a.next-page::attr(href)').get()
        if next_page:
            yield response.follow(next_page, self.parse)
    
    def parse_article(self, response):
        yield {
            'title': response.css('h1::text').get(),
            'author': response.css('.author::text').get(),
            'date': response.css('.date::text').get(),
            'content': response.css('.content::text').getall(),
            'tags': response.css('.tag::text').getall()
        }
\`\`\`

## Data Analysis with Pandas

\`\`\`python
import pandas as pd
import matplotlib.pyplot as plt
import seaborn as sns

# Load data
df = pd.read_csv('articles.csv')

# Data cleaning
df['date'] = pd.to_datetime(df['date'])
df['word_count'] = df['content'].str.split().str.len()

# Analysis
monthly_posts = df.groupby(df['date'].dt.to_period('M')).size()
avg_words_by_author = df.groupby('author')['word_count'].mean()

# Visualization
plt.figure(figsize=(12, 6))

plt.subplot(1, 2, 1)
monthly_posts.plot(kind='bar')
plt.title('Posts per Month')
plt.xticks(rotation=45)

plt.subplot(1, 2, 2)
sns.boxplot(data=df, x='author', y='word_count')
plt.title('Word Count Distribution by Author')
plt.xticks(rotation=45)

plt.tight_layout()
plt.show()
\`\`\`

## Handling Dynamic Content

\`\`\`python
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

def scrape_dynamic_content(url):
    driver = webdriver.Chrome()
    driver.get(url)
    
    # Wait for dynamic content to load
    wait = WebDriverWait(driver, 10)
    articles = wait.until(
        EC.presence_of_all_elements_located((By.CLASS_NAME, 'article'))
    )
    
    data = []
    for article in articles:
        title = article.find_element(By.TAG_NAME, 'h2').text
        content = article.find_element(By.CLASS_NAME, 'content').text
        data.append({'title': title, 'content': content})
    
    driver.quit()
    return data
\`\`\`

## Data Export and Reporting

\`\`\`python
# Export to various formats
df.to_csv('analysis_results.csv', index=False)
df.to_excel('analysis_results.xlsx', sheet_name='Articles')
df.to_json('analysis_results.json', orient='records')

# Generate HTML report
html_report = df.describe().to_html()
with open('report.html', 'w') as f:
    f.write(html_report)
\`\`\`

Python's ecosystem makes it ideal for data extraction, processing, and analysis tasks.`,
    date: "2024-02-05",
    category: "Python",
    readTime: "13 min read",
    image: pythonScrapingImg,
    tags: ["Python", "Web Scraping", "Data Analysis", "BeautifulSoup"]
  },
  {
    id: "9",
    title: "Prompt Engineering: Mastering AI Interactions",
    excerpt: "Learn advanced prompt engineering techniques to get better results from AI models like GPT-4 and Claude.",
    content: `Prompt engineering is the art of crafting inputs that guide AI models to produce desired outputs. Let's master this crucial skill.

## Fundamental Principles

### 1. Clarity and Specificity
Bad prompt:
\`\`\`
Write about technology
\`\`\`

Good prompt:
\`\`\`
Write a 500-word article about the impact of artificial intelligence on software development, focusing on code generation tools and their benefits for developers.
\`\`\`

### 2. Context and Role Assignment
\`\`\`
You are a senior software architect with 15 years of experience in building scalable web applications. 

A startup is asking for your advice on choosing between microservices and monolithic architecture for their new e-commerce platform that expects 10,000 concurrent users.

Provide a detailed comparison considering:
- Development complexity
- Scalability requirements
- Team size and expertise
- Deployment and maintenance
\`\`\`

## Advanced Techniques

### Chain of Thought Prompting
\`\`\`
Problem: Calculate the compound interest for $10,000 at 5% annual rate for 3 years.

Let me solve this step by step:
1. Identify the formula: A = P(1 + r)^t
2. Substitute values: A = 10000(1 + 0.05)^3
3. Calculate: A = 10000(1.05)^3 = 10000 × 1.157625 = $11,576.25
4. Interest earned: $11,576.25 - $10,000 = $1,576.25
\`\`\`

### Few-Shot Learning
\`\`\`
Convert these function names to camelCase:

get_user_data → getUserData
create_new_post → createNewPost
delete_old_files → deleteOldFiles
calculate_total_price → ?
\`\`\`

### Template-Based Prompts
\`\`\`
Generate a [TYPE] for [AUDIENCE] about [TOPIC] that:
- [REQUIREMENT 1]
- [REQUIREMENT 2]
- [REQUIREMENT 3]

Example:
Generate a tutorial for beginner developers about React hooks that:
- Explains useState and useEffect
- Includes practical code examples
- Provides common pitfalls to avoid
\`\`\`

## Code Generation Prompts

### API Endpoint Generation
\`\`\`
Create a RESTful API endpoint in Express.js for managing blog posts with the following requirements:

- POST /api/posts - Create new post
- GET /api/posts - List all posts with pagination
- GET /api/posts/:id - Get single post
- PUT /api/posts/:id - Update post
- DELETE /api/posts/:id - Delete post

Include:
- Input validation using express-validator
- Error handling middleware
- Authentication middleware
- Mongoose schema for MongoDB
\`\`\`

### Component Generation
\`\`\`
Create a reusable React TypeScript component for a modal dialog with:

Props interface:
- isOpen: boolean
- onClose: () => void
- title: string
- children: ReactNode
- size?: 'sm' | 'md' | 'lg'

Features:
- Closes on ESC key
- Closes on backdrop click
- Focus trap for accessibility
- Smooth animations with Framer Motion
- Tailwind CSS styling
\`\`\`

## Debugging and Refinement

### Iterative Improvement
\`\`\`
Initial prompt: "Create a login form"

Refined prompt: "Create a responsive login form component in React with TypeScript that includes:
- Email and password fields with proper validation
- Show/hide password toggle
- Loading state during authentication
- Error message display
- Social login buttons (Google, GitHub)
- Tailwind CSS styling with dark mode support
- Accessibility features (ARIA labels, keyboard navigation)"
\`\`\`

## Best Practices

1. **Be Specific**: Provide clear requirements and constraints
2. **Use Examples**: Show desired input/output patterns
3. **Set Context**: Define the role and situation
4. **Iterate**: Refine prompts based on results
5. **Test Variations**: Try different phrasings
6. **Consider Ethics**: Ensure responsible AI usage

Mastering prompt engineering dramatically improves AI-assisted development productivity.`,
    date: "2024-01-30",
    category: "AI Development",
    readTime: "10 min read",
    image: promptEngineeringImg,
    tags: ["AI", "Prompt Engineering", "GPT-4", "Productivity"]
  },
  {
    id: "10",
    title: "Agentic AI Development: Building Autonomous Systems",
    excerpt: "Explore the cutting-edge field of agentic AI, creating systems that can plan, reason, and act autonomously to achieve goals.",
    content: `Agentic AI represents the next frontier in artificial intelligence, creating systems that can autonomously plan, reason, and act to achieve complex goals.

## What is Agentic AI?

Agentic AI systems are characterized by:
- **Autonomy**: Operating independently without constant human oversight
- **Goal-oriented behavior**: Working towards specific objectives
- **Reasoning and planning**: Breaking down complex tasks into steps
- **Environment interaction**: Perceiving and acting in their environment
- **Learning and adaptation**: Improving performance over time

## Architecture Components

### 1. Perception Layer
\`\`\`python
class PerceptionModule:
    def __init__(self, sensors=['text', 'image', 'audio']):
        self.sensors = sensors
        self.processors = {
            'text': self.process_text,
            'image': self.process_image,
            'audio': self.process_audio
        }
    
    def perceive(self, input_data, sensor_type):
        return self.processors[sensor_type](input_data)
    
    def process_text(self, text):
        # NLP processing, entity extraction, sentiment analysis
        return {
            'entities': self.extract_entities(text),
            'sentiment': self.analyze_sentiment(text),
            'intent': self.classify_intent(text)
        }
\`\`\`

### 2. Planning and Reasoning
\`\`\`python
class PlanningModule:
    def __init__(self, llm_client):
        self.llm = llm_client
        self.memory = ConversationMemory()
    
    async def plan(self, goal, context):
        planning_prompt = f"""
        Goal: {goal}
        Context: {context}
        
        Create a step-by-step plan to achieve this goal:
        1. Break down the goal into sub-tasks
        2. Identify required resources and tools
        3. Consider potential obstacles and contingencies
        4. Prioritize tasks by importance and dependencies
        
        Return as structured JSON with tasks, dependencies, and estimated effort.
        """
        
        response = await self.llm.chat_completion(planning_prompt)
        return self.parse_plan(response)
    
    def parse_plan(self, plan_text):
        # Parse LLM response into structured plan
        return {
            'tasks': [],
            'dependencies': {},
            'resources': [],
            'contingencies': []
        }
\`\`\`

### 3. Action Execution
\`\`\`python
class ActionModule:
    def __init__(self):
        self.tools = {
            'web_search': self.web_search,
            'file_operations': self.file_operations,
            'api_calls': self.api_calls,
            'code_execution': self.code_execution
        }
    
    async def execute_action(self, action_type, parameters):
        if action_type not in self.tools:
            raise ValueError(f"Unknown action type: {action_type}")
        
        try:
            result = await self.tools[action_type](parameters)
            return {
                'success': True,
                'result': result,
                'timestamp': datetime.now()
            }
        except Exception as e:
            return {
                'success': False,
                'error': str(e),
                'timestamp': datetime.now()
            }
    
    async def web_search(self, query):
        # Implement web search functionality
        pass
    
    async def file_operations(self, operation, file_path, content=None):
        # File read/write operations
        pass
\`\`\`

## Multi-Agent Systems

### Agent Communication Protocol
\`\`\`python
class AgentMessage:
    def __init__(self, sender, receiver, message_type, content):
        self.sender = sender
        self.receiver = receiver
        self.type = message_type
        self.content = content
        self.timestamp = datetime.now()

class AgentCommunicationProtocol:
    def __init__(self):
        self.message_queue = asyncio.Queue()
        self.agents = {}
    
    async def send_message(self, message):
        await self.message_queue.put(message)
    
    async def process_messages(self):
        while True:
            message = await self.message_queue.get()
            target_agent = self.agents.get(message.receiver)
            if target_agent:
                await target_agent.receive_message(message)
\`\`\`

### Collaborative Task Execution
\`\`\`python
class CollaborativeAgent:
    def __init__(self, name, capabilities):
        self.name = name
        self.capabilities = capabilities
        self.tasks = []
        self.collaboration_history = []
    
    async def delegate_task(self, task, available_agents):
        # Find best agent for the task
        best_agent = self.find_best_agent(task, available_agents)
        
        if best_agent:
            delegation_message = AgentMessage(
                sender=self.name,
                receiver=best_agent.name,
                message_type='task_delegation',
                content={
                    'task': task,
                    'deadline': task.deadline,
                    'priority': task.priority
                }
            )
            await self.send_message(delegation_message)
    
    def find_best_agent(self, task, agents):
        # Score agents based on capabilities and availability
        scores = {}
        for agent in agents:
            score = self.calculate_agent_score(agent, task)
            scores[agent] = score
        
        return max(scores, key=scores.get) if scores else None
\`\`\`

## Real-World Implementation

### Customer Service Agent
\`\`\`python
class CustomerServiceAgent:
    def __init__(self):
        self.knowledge_base = self.load_knowledge_base()
        self.escalation_rules = self.load_escalation_rules()
        self.conversation_history = {}
    
    async def handle_inquiry(self, customer_id, inquiry):
        # Analyze inquiry
        analysis = await self.analyze_inquiry(inquiry)
        
        # Check if escalation is needed
        if self.should_escalate(analysis):
            return await self.escalate_to_human(customer_id, inquiry)
        
        # Generate response
        response = await self.generate_response(analysis)
        
        # Update conversation history
        self.update_conversation(customer_id, inquiry, response)
        
        return response
    
    async def generate_response(self, analysis):
        relevant_docs = self.search_knowledge_base(analysis['keywords'])
        
        prompt = f"""
        Customer inquiry: {analysis['original_text']}
        Intent: {analysis['intent']}
        Sentiment: {analysis['sentiment']}
        
        Relevant documentation:
        {relevant_docs}
        
        Generate a helpful, empathetic response that:
        1. Addresses the customer's specific concern
        2. Provides actionable solutions
        3. Maintains a professional but friendly tone
        4. Offers additional resources if needed
        """
        
        return await self.llm.generate_response(prompt)
\`\`\`

## Evaluation and Monitoring

### Performance Metrics
\`\`\`python
class AgentMetrics:
    def __init__(self):
        self.metrics = {
            'task_completion_rate': 0,
            'average_response_time': 0,
            'user_satisfaction': 0,
            'error_rate': 0,
            'goal_achievement': 0
        }
    
    def track_performance(self, agent_action):
        # Track various performance indicators
        self.update_completion_rate(agent_action)
        self.update_response_time(agent_action)
        self.update_error_rate(agent_action)
    
    def generate_report(self):
        return {
            'summary': self.metrics,
            'trends': self.calculate_trends(),
            'recommendations': self.generate_recommendations()
        }
\`\`\`

Agentic AI development requires careful consideration of autonomy, safety, and human oversight while building systems that can truly think and act independently.`,
    date: "2024-01-25",
    category: "AI Development",
    readTime: "15 min read",
    image: agenticAiImg,
    tags: ["Agentic AI", "Autonomous Systems", "Multi-Agent", "AI Architecture"]
  },
  {
    id: "11",
    title: "Docker and DevOps: Containerization Best Practices",
    excerpt: "Master Docker containerization and DevOps workflows to streamline development, deployment, and scaling of modern applications.",
    content: `Docker has revolutionized how we develop, deploy, and scale applications. Let's explore containerization best practices and DevOps workflows.

## Why Docker?

Docker solves the "it works on my machine" problem by:

- **Consistent Environments**: Same environment from development to production
- **Isolation**: Applications run in isolated containers
- **Portability**: Run anywhere Docker is supported
- **Scalability**: Easy to scale horizontally
- **Resource Efficiency**: Lightweight compared to VMs

## Docker Fundamentals

### Dockerfile Best Practices

\`\`\`dockerfile
# Use official base images
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy package files first (for layer caching)
COPY package*.json ./

# Install dependencies
RUN npm ci --only=production

# Copy application code
COPY . .

# Create non-root user
RUN addgroup -g 1001 -S nodejs
RUN adduser -S nextjs -u 1001

# Change ownership
USER nextjs

# Expose port
EXPOSE 3000

# Start application
CMD ["npm", "start"]
\`\`\`

## Multi-Stage Builds

Optimize image size with multi-stage builds:

\`\`\`dockerfile
# Build stage
FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# Production stage
FROM node:18-alpine AS production
WORKDIR /app
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/package*.json ./
RUN npm ci --only=production
EXPOSE 3000
CMD ["npm", "start"]
\`\`\`

## Docker Compose for Development

\`\`\`yaml
version: '3.8'
services:
  app:
    build: .
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=development
    volumes:
      - .:/app
      - /app/node_modules
    depends_on:
      - db
      - redis

  db:
    image: postgres:15
    environment:
      - POSTGRES_DB=myapp
      - POSTGRES_USER=user
      - POSTGRES_PASSWORD=password
    volumes:
      - postgres_data:/var/lib/postgresql/data

  redis:
    image: redis:7-alpine
    ports:
      - "6379:6379"

volumes:
  postgres_data:
\`\`\`

## CI/CD Pipeline

GitHub Actions example:

\`\`\`yaml
name: CI/CD Pipeline

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Run tests
        run: |
          docker build -t app:test .
          docker run --rm app:test npm test

  deploy:
    needs: test
    runs-on: ubuntu-latest
    if: github.ref == 'refs/heads/main'
    steps:
      - uses: actions/checkout@v3
      - name: Deploy to production
        run: |
          docker build -t app:latest .
          docker push \${{ secrets.REGISTRY }}/app:latest
\`\`\`

## Container Security

1. **Use official base images**
2. **Keep images updated**
3. **Run as non-root user**
4. **Scan for vulnerabilities**
5. **Limit container capabilities**

Docker and DevOps practices enable teams to build, test, and deploy applications more efficiently and reliably.`,
    date: "2024-03-01",
    category: "DevOps",
    readTime: "11 min read",
    image: dockerDevopsImg,
    tags: ["Docker", "DevOps", "Containerization", "CI/CD"]
  },
  {
    id: "12",
    title: "GraphQL APIs: Modern Data Fetching",
    excerpt: "Build efficient, flexible APIs with GraphQL. Learn queries, mutations, subscriptions, and best practices for modern applications.",
    content: `GraphQL revolutionizes API development by giving clients the power to request exactly the data they need. Let's explore this powerful query language.

## GraphQL vs REST

### REST Limitations
- **Over-fetching**: Getting more data than needed
- **Under-fetching**: Multiple requests for related data
- **Versioning**: Breaking changes require new endpoints

### GraphQL Advantages
- **Single Endpoint**: One URL for all operations
- **Flexible Queries**: Clients specify exactly what they need
- **Strong Type System**: Self-documenting schema
- **Real-time**: Built-in subscription support

## Schema Definition

\`\`\`graphql
type User {
  id: ID!
  name: String!
  email: String!
  posts: [Post!]!
}

type Post {
  id: ID!
  title: String!
  content: String!
  author: User!
  publishedAt: DateTime
}

type Query {
  users: [User!]!
  user(id: ID!): User
  posts: [Post!]!
  post(id: ID!): Post
}

type Mutation {
  createUser(input: CreateUserInput!): User!
  updateUser(id: ID!, input: UpdateUserInput!): User!
  deleteUser(id: ID!): Boolean!
}

type Subscription {
  postAdded: Post!
  userUpdated: User!
}
\`\`\`

## Resolver Implementation

\`\`\`typescript
import { Resolvers } from './generated/graphql';

export const resolvers: Resolvers = {
  Query: {
    users: async () => {
      return await User.find();
    },
    user: async (_, { id }) => {
      return await User.findById(id);
    },
    posts: async () => {
      return await Post.find().populate('author');
    }
  },

  Mutation: {
    createUser: async (_, { input }) => {
      const user = new User(input);
      return await user.save();
    },
    updateUser: async (_, { id, input }) => {
      return await User.findByIdAndUpdate(id, input, { new: true });
    }
  },

  User: {
    posts: async (parent) => {
      return await Post.find({ author: parent.id });
    }
  },

  Post: {
    author: async (parent) => {
      return await User.findById(parent.author);
    }
  }
};
\`\`\`

## Client-Side Usage

### Apollo Client Setup

\`\`\`typescript
import { ApolloClient, InMemoryCache, gql } from '@apollo/client';

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache()
});

// Query
const GET_USERS = gql\`
  query GetUsers {
    users {
      id
      name
      email
      posts {
        id
        title
      }
    }
  }
\`;

// Mutation
const CREATE_USER = gql\`
  mutation CreateUser($input: CreateUserInput!) {
    createUser(input: $input) {
      id
      name
      email
    }
  }
\`;
\`\`\`

### React Integration

\`\`\`tsx
import { useQuery, useMutation } from '@apollo/client';

function UserList() {
  const { loading, error, data } = useQuery(GET_USERS);
  const [createUser] = useMutation(CREATE_USER);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      {data.users.map(user => (
        <div key={user.id}>
          <h3>{user.name}</h3>
          <p>{user.email}</p>
          <p>{user.posts.length} posts</p>
        </div>
      ))}
    </div>
  );
}
\`\`\`

## Advanced Features

### Subscriptions

\`\`\`typescript
const SUBSCRIPTION = gql\`
  subscription PostAdded {
    postAdded {
      id
      title
      author {
        name
      }
    }
  }
\`;

function LivePosts() {
  const { data } = useSubscription(SUBSCRIPTION);
  
  return <div>New post: {data?.postAdded?.title}</div>;
}
\`\`\`

## Best Practices

1. **Design Schema First**: Think about your data model
2. **Use DataLoader**: Solve N+1 query problems
3. **Implement Caching**: Both client and server-side
4. **Error Handling**: Provide meaningful error messages
5. **Security**: Implement query depth limiting and rate limiting

GraphQL provides a powerful, flexible alternative to REST APIs, enabling more efficient and maintainable data fetching patterns.`,
    date: "2024-02-25",
    category: "API Development",
    readTime: "13 min read",
    image: graphqlApiImg,
    tags: ["GraphQL", "API", "React", "Apollo Client"]
  },
  {
    id: "13", 
    title: "Vue.js Component Architecture: Building Reactive UIs",
    excerpt: "Master Vue.js component patterns, composition API, and state management for building maintainable and scalable frontend applications.",
    content: `Vue.js offers an intuitive and powerful approach to building user interfaces. Let's explore modern component architecture and best practices.

## Vue 3 Composition API

The Composition API provides better logic reuse and TypeScript support:

\`\`\`vue
<template>
  <div class="user-profile">
    <h2>{{ user.name }}</h2>
    <p>{{ user.email }}</p>
    <button @click="updateProfile" :disabled="loading">
      {{ loading ? 'Updating...' : 'Update Profile' }}
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import type { User } from '@/types'

interface Props {
  userId: string
}

const props = defineProps<Props>()
const user = ref<User | null>(null)
const loading = ref(false)

const fetchUser = async () => {
  loading.value = true
  try {
    const response = await api.getUser(props.userId)
    user.value = response.data
  } catch (error) {
    console.error('Failed to fetch user:', error)
  } finally {
    loading.value = false
  }
}

const updateProfile = async () => {
  if (!user.value) return
  
  loading.value = true
  try {
    await api.updateUser(user.value.id, user.value)
  } finally {
    loading.value = false
  }
}

onMounted(fetchUser)
</script>
\`\`\`

## Composables for Logic Reuse

Create reusable logic with composables:

\`\`\`typescript
// composables/useApi.ts
import { ref } from 'vue'

export function useApi<T>() {
  const data = ref<T | null>(null)
  const loading = ref(false)
  const error = ref<string | null>(null)

  const execute = async (apiCall: () => Promise<T>) => {
    loading.value = true
    error.value = null
    
    try {
      data.value = await apiCall()
    } catch (err) {
      error.value = err instanceof Error ? err.message : 'An error occurred'
    } finally {
      loading.value = false
    }
  }

  return {
    data: readonly(data),
    loading: readonly(loading),
    error: readonly(error),
    execute
  }
}

// Usage in component
const { data: users, loading, execute } = useApi<User[]>()

onMounted(() => {
  execute(() => api.getUsers())
})
\`\`\`

## Component Communication

### Props and Emits

\`\`\`vue
<!-- Parent Component -->
<template>
  <TodoList 
    :todos="todos" 
    @add-todo="handleAddTodo"
    @update-todo="handleUpdateTodo"
  />
</template>

<!-- Child Component -->
<template>
  <div class="todo-list">
    <form @submit.prevent="addTodo">
      <input v-model="newTodo" placeholder="Add todo..." />
      <button type="submit">Add</button>
    </form>
    
    <div v-for="todo in todos" :key="todo.id" class="todo-item">
      <input 
        v-model="todo.completed" 
        type="checkbox"
        @change="updateTodo(todo)"
      />
      <span :class="{ completed: todo.completed }">{{ todo.text }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Todo {
  id: string
  text: string
  completed: boolean
}

interface Props {
  todos: Todo[]
}

interface Emits {
  (e: 'add-todo', text: string): void
  (e: 'update-todo', todo: Todo): void
}

defineProps<Props>()
const emit = defineEmits<Emits>()

const newTodo = ref('')

const addTodo = () => {
  if (newTodo.value.trim()) {
    emit('add-todo', newTodo.value)
    newTodo.value = ''
  }
}

const updateTodo = (todo: Todo) => {
  emit('update-todo', todo)
}
</script>
\`\`\`

## State Management with Pinia

\`\`\`typescript
// stores/auth.ts
import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', () => {
  const user = ref<User | null>(null)
  const isAuthenticated = computed(() => !!user.value)

  const login = async (credentials: LoginCredentials) => {
    try {
      const response = await api.login(credentials)
      user.value = response.user
      localStorage.setItem('token', response.token)
    } catch (error) {
      throw new Error('Login failed')
    }
  }

  const logout = () => {
    user.value = null
    localStorage.removeItem('token')
  }

  const fetchCurrentUser = async () => {
    const token = localStorage.getItem('token')
    if (token) {
      try {
        user.value = await api.getCurrentUser()
      } catch (error) {
        logout()
      }
    }
  }

  return {
    user: readonly(user),
    isAuthenticated,
    login,
    logout,
    fetchCurrentUser
  }
})
\`\`\`

## Vue Router Setup

\`\`\`typescript
// router/index.ts
import { createRouter, createWebHistory } from 'vue-router'
import { useAuthStore } from '@/stores/auth'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Home.vue')
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: () => import('@/views/Dashboard.vue'),
    meta: { requiresAuth: true }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach((to) => {
  const authStore = useAuthStore()
  
  if (to.meta.requiresAuth && !authStore.isAuthenticated) {
    return { name: 'Login' }
  }
})

export default router
\`\`\`

## Performance Optimization

### Lazy Loading and Code Splitting

\`\`\`vue
<template>
  <div>
    <Suspense>
      <HeavyComponent v-if="showHeavyComponent" />
      <template #fallback>
        <div>Loading...</div>
      </template>
    </Suspense>
  </div>
</template>

<script setup>
import { defineAsyncComponent } from 'vue'

const HeavyComponent = defineAsyncComponent(
  () => import('@/components/HeavyComponent.vue')
)
</script>
\`\`\`

## Best Practices

1. **Use TypeScript**: Better developer experience and error catching
2. **Composition API**: More flexible than Options API
3. **Single File Components**: Keep template, script, and styles together
4. **Composables**: Extract and reuse logic
5. **Props Validation**: Define clear interfaces

Vue.js provides an excellent balance of simplicity and power, making it perfect for both small projects and large applications.`,
    date: "2024-02-15",
    category: "Frontend",
    readTime: "12 min read",
    image: vuejsComponentsImg,
    tags: ["Vue.js", "Frontend", "Components", "Composition API"]
  },
  {
    id: "14",
    title: "AWS Serverless: Building Scalable Cloud Applications",
    excerpt: "Leverage AWS serverless services like Lambda, API Gateway, and DynamoDB to build highly scalable and cost-effective applications.",
    content: `AWS serverless architecture enables you to build and run applications without managing servers. Let's explore key services and patterns.

## Serverless Benefits

- **No Server Management**: Focus on code, not infrastructure
- **Automatic Scaling**: Handle traffic spikes automatically
- **Pay-per-Use**: Only pay for actual usage
- **High Availability**: Built-in redundancy and failover
- **Faster Time to Market**: Rapid development and deployment

## AWS Lambda Functions

### Basic Lambda Function

\`\`\`javascript
// handler.js
exports.handler = async (event, context) => {
  try {
    const { httpMethod, pathParameters, body } = event;
    
    switch (httpMethod) {
      case 'GET':
        return await handleGet(pathParameters);
      case 'POST':
        return await handlePost(JSON.parse(body));
      default:
        return {
          statusCode: 405,
          body: JSON.stringify({ error: 'Method not allowed' })
        };
    }
  } catch (error) {
    console.error('Error:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Internal server error' })
    };
  }
};

const handleGet = async (pathParameters) => {
  const { id } = pathParameters;
  
  // Fetch from DynamoDB
  const result = await dynamodb.get({
    TableName: 'Users',
    Key: { id }
  }).promise();
  
  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    },
    body: JSON.stringify(result.Item)
  };
};
\`\`\`

## Serverless Framework

Deploy with Infrastructure as Code:

\`\`\`yaml
# serverless.yml
service: my-serverless-app

provider:
  name: aws
  runtime: nodejs18.x
  region: us-east-1
  environment:
    USERS_TABLE: \${self:service}-users-\${self:provider.stage}
  iam:
    role:
      statements:
        - Effect: Allow
          Action:
            - dynamodb:GetItem
            - dynamodb:PutItem
            - dynamodb:UpdateItem
            - dynamodb:DeleteItem
            - dynamodb:Scan
            - dynamodb:Query
          Resource: 
            - !GetAtt UsersTable.Arn

functions:
  users:
    handler: src/handlers/users.handler
    events:
      - http:
          path: users
          method: get
          cors: true
      - http:
          path: users
          method: post
          cors: true
      - http:
          path: users/{id}
          method: get
          cors: true

resources:
  Resources:
    UsersTable:
      Type: AWS::DynamoDB::Table
      Properties:
        TableName: \${self:provider.environment.USERS_TABLE}
        AttributeDefinitions:
          - AttributeName: id
            AttributeType: S
        KeySchema:
          - AttributeName: id
            KeyType: HASH
        BillingMode: PAY_PER_REQUEST
\`\`\`

## DynamoDB Operations

\`\`\`javascript
const AWS = require('aws-sdk');
const dynamodb = new AWS.DynamoDB.DocumentClient();

class UserService {
  constructor() {
    this.tableName = process.env.USERS_TABLE;
  }

  async createUser(userData) {
    const user = {
      id: AWS.util.uuid.v4(),
      ...userData,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };

    await dynamodb.put({
      TableName: this.tableName,
      Item: user,
      ConditionExpression: 'attribute_not_exists(id)'
    }).promise();

    return user;
  }

  async getUser(id) {
    const result = await dynamodb.get({
      TableName: this.tableName,
      Key: { id }
    }).promise();

    return result.Item;
  }

  async updateUser(id, updates) {
    const updateExpression = [];
    const expressionAttributeNames = {};
    const expressionAttributeValues = {};

    Object.keys(updates).forEach(key => {
      updateExpression.push(\`#\${key} = :\${key}\`);
      expressionAttributeNames[\`#\${key}\`] = key;
      expressionAttributeValues[\`:\${key}\`] = updates[key];
    });

    expressionAttributeValues[':updatedAt'] = new Date().toISOString();
    updateExpression.push('#updatedAt = :updatedAt');
    expressionAttributeNames['#updatedAt'] = 'updatedAt';

    const result = await dynamodb.update({
      TableName: this.tableName,
      Key: { id },
      UpdateExpression: \`SET \${updateExpression.join(', ')}\`,
      ExpressionAttributeNames: expressionAttributeNames,
      ExpressionAttributeValues: expressionAttributeValues,
      ReturnValues: 'ALL_NEW'
    }).promise();

    return result.Attributes;
  }

  async getAllUsers() {
    const result = await dynamodb.scan({
      TableName: this.tableName
    }).promise();

    return result.Items;
  }
}

module.exports = { UserService };
\`\`\`

## API Gateway Integration

\`\`\`javascript
// middleware/cors.js
const corsMiddleware = {
  before: (handler, next) => {
    handler.event.headers = handler.event.headers || {};
    next();
  },
  after: (handler, next) => {
    handler.response.headers = {
      ...handler.response.headers,
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': true,
      'Access-Control-Allow-Headers': 'Content-Type,X-Amz-Date,Authorization,X-Api-Key',
      'Access-Control-Allow-Methods': 'GET,POST,PUT,DELETE,OPTIONS'
    };
    next();
  }
};

// middleware/auth.js
const authMiddleware = {
  before: async (handler, next) => {
    const token = handler.event.headers.Authorization;
    
    if (!token) {
      throw new Error('Unauthorized');
    }

    try {
      const decoded = jwt.verify(token.replace('Bearer ', ''), process.env.JWT_SECRET);
      handler.event.user = decoded;
      next();
    } catch (error) {
      throw new Error('Invalid token');
    }
  }
};
\`\`\`

## Event-Driven Architecture

\`\`\`javascript
// Event producer
const publishEvent = async (eventType, data) => {
  const params = {
    Message: JSON.stringify({ eventType, data, timestamp: Date.now() }),
    TopicArn: process.env.EVENT_TOPIC_ARN
  };

  await sns.publish(params).promise();
};

// Event consumer
exports.processUserEvent = async (event) => {
  for (const record of event.Records) {
    const message = JSON.parse(record.Sns.Message);
    const { eventType, data } = message;

    switch (eventType) {
      case 'USER_CREATED':
        await handleUserCreated(data);
        break;
      case 'USER_UPDATED':
        await handleUserUpdated(data);
        break;
      case 'USER_DELETED':
        await handleUserDeleted(data);
        break;
    }
  }
};
\`\`\`

## Best Practices

1. **Cold Start Optimization**: Keep functions warm and minimize dependencies
2. **Error Handling**: Implement proper error handling and retry logic
3. **Monitoring**: Use CloudWatch and X-Ray for observability
4. **Security**: Follow principle of least privilege for IAM roles
5. **Cost Optimization**: Monitor usage and optimize function memory/timeout

AWS serverless architecture enables rapid development of scalable applications while minimizing operational overhead and costs.`,
    date: "2024-02-08",
    category: "Cloud Computing",
    readTime: "14 min read",
    image: awsServerlessImg,
    tags: ["AWS", "Serverless", "Lambda", "DynamoDB"]
  },
  {
    id: "15",
    title: "Firebase: Complete Backend Solution",
    excerpt: "Build full-stack applications with Firebase's comprehensive suite of backend services including authentication, database, and hosting.",
    content: `Firebase provides a complete backend-as-a-service platform that enables rapid development of web and mobile applications.

## Firebase Services Overview

- **Authentication**: Multi-provider authentication system
- **Firestore**: NoSQL document database with real-time updates
- **Storage**: File upload and storage service
- **Hosting**: Fast and secure web hosting
- **Functions**: Serverless functions for backend logic
- **Analytics**: App usage and performance insights

## Authentication Setup

\`\`\`javascript
// firebase/config.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "your-api-key",
  authDomain: "your-project.firebaseapp.com",
  projectId: "your-project-id",
  storageBucket: "your-project.appspot.com",
  messagingSenderId: "123456789",
  appId: "your-app-id"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
\`\`\`

### Authentication Methods

\`\`\`javascript
import { 
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  signOut
} from 'firebase/auth';

// Email/Password Authentication
export const signUp = async (email, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    return userCredential.user;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const signIn = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    return userCredential.user;
  } catch (error) {
    throw new Error(error.message);
  }
};

// Google Authentication
const googleProvider = new GoogleAuthProvider();

export const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, googleProvider);
    return result.user;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const logout = async () => {
  try {
    await signOut(auth);
  } catch (error) {
    throw new Error(error.message);
  }
};
\`\`\`

## Firestore Database Operations

\`\`\`javascript
import {
  collection,
  doc,
  addDoc,
  getDoc,
  getDocs,
  updateDoc,
  deleteDoc,
  query,
  where,
  orderBy,
  limit,
  onSnapshot
} from 'firebase/firestore';

class PostService {
  constructor() {
    this.collectionName = 'posts';
  }

  // Create post
  async createPost(postData) {
    try {
      const docRef = await addDoc(collection(db, this.collectionName), {
        ...postData,
        createdAt: new Date(),
        updatedAt: new Date()
      });
      return docRef.id;
    } catch (error) {
      throw new Error(\`Error creating post: \${error.message}\`);
    }
  }

  // Get single post
  async getPost(id) {
    try {
      const docRef = doc(db, this.collectionName, id);
      const docSnap = await getDoc(docRef);
      
      if (docSnap.exists()) {
        return { id: docSnap.id, ...docSnap.data() };
      } else {
        throw new Error('Post not found');
      }
    } catch (error) {
      throw new Error(\`Error fetching post: \${error.message}\`);
    }
  }

  // Get posts with query
  async getPosts(userId = null, limitCount = 10) {
    try {
      let q = query(
        collection(db, this.collectionName),
        orderBy('createdAt', 'desc'),
        limit(limitCount)
      );

      if (userId) {
        q = query(q, where('authorId', '==', userId));
      }

      const querySnapshot = await getDocs(q);
      return querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
    } catch (error) {
      throw new Error(\`Error fetching posts: \${error.message}\`);
    }
  }

  // Real-time updates
  subscribeToPosts(callback, userId = null) {
    let q = query(
      collection(db, this.collectionName),
      orderBy('createdAt', 'desc')
    );

    if (userId) {
      q = query(q, where('authorId', '==', userId));
    }

    return onSnapshot(q, (querySnapshot) => {
      const posts = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      callback(posts);
    });
  }

  // Update post
  async updatePost(id, updates) {
    try {
      const docRef = doc(db, this.collectionName, id);
      await updateDoc(docRef, {
        ...updates,
        updatedAt: new Date()
      });
    } catch (error) {
      throw new Error(\`Error updating post: \${error.message}\`);
    }
  }

  // Delete post
  async deletePost(id) {
    try {
      await deleteDoc(doc(db, this.collectionName, id));
    } catch (error) {
      throw new Error(\`Error deleting post: \${error.message}\`);
    }
  }
}

export const postService = new PostService();
\`\`\`

## File Storage

\`\`\`javascript
import { ref, uploadBytes, getDownloadURL, deleteObject } from 'firebase/storage';

class StorageService {
  // Upload file
  async uploadFile(file, path) {
    try {
      const storageRef = ref(storage, path);
      const snapshot = await uploadBytes(storageRef, file);
      const downloadURL = await getDownloadURL(snapshot.ref);
      return downloadURL;
    } catch (error) {
      throw new Error(\`Upload failed: \${error.message}\`);
    }
  }

  // Upload image with resize
  async uploadImage(file, folder = 'images') {
    const fileName = \`\${Date.now()}_\${file.name}\`;
    const path = \`\${folder}/\${fileName}\`;
    
    return await this.uploadFile(file, path);
  }

  // Delete file
  async deleteFile(path) {
    try {
      const storageRef = ref(storage, path);
      await deleteObject(storageRef);
    } catch (error) {
      throw new Error(\`Delete failed: \${error.message}\`);
    }
  }
}

export const storageService = new StorageService();
\`\`\`

## React Integration

\`\`\`jsx
import { useState, useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase/config';

// Auth context
export const useAuth = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  return { user, loading };
};

// Posts component with real-time updates
function PostList() {
  const [posts, setPosts] = useState([]);
  const { user } = useAuth();

  useEffect(() => {
    if (!user) return;

    const unsubscribe = postService.subscribeToPosts(setPosts, user.uid);
    return unsubscribe;
  }, [user]);

  return (
    <div>
      {posts.map(post => (
        <div key={post.id} className="post">
          <h3>{post.title}</h3>
          <p>{post.content}</p>
          <small>{post.createdAt?.toDate().toLocaleDateString()}</small>
        </div>
      ))}
    </div>
  );
}
\`\`\`

## Security Rules

\`\`\`javascript
// Firestore Security Rules
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Users can read/write their own data
    match /users/{userId} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
    }

    // Posts are readable by all, writable by owner
    match /posts/{postId} {
      allow read: if true;
      allow create: if request.auth != null && 
        request.auth.uid == request.resource.data.authorId;
      allow update, delete: if request.auth != null && 
        request.auth.uid == resource.data.authorId;
    }
  }
}

// Storage Security Rules
rules_version = '2';
service firebase.storage {
  match /b/{bucket}/o {
    match /images/{userId}/{allPaths=**} {
      allow read: if true;
      allow write: if request.auth != null && request.auth.uid == userId;
    }
  }
}
\`\`\`

## Best Practices

1. **Security Rules**: Always implement proper security rules
2. **Data Structure**: Design efficient document structures
3. **Offline Support**: Use Firestore's offline capabilities
4. **Performance**: Use compound queries and proper indexing
5. **Error Handling**: Implement comprehensive error handling

Firebase accelerates development by providing a complete backend infrastructure with minimal setup and configuration.`,
    date: "2024-01-30",
    category: "Backend",
    readTime: "16 min read",
    image: firebaseBackendImg,
    tags: ["Firebase", "Backend", "Authentication", "Database"]
  },
  {
    id: "16",
    title: "Machine Learning with TensorFlow.js",
    excerpt: "Bring machine learning to the browser with TensorFlow.js. Learn to build, train, and deploy ML models in web applications.",
    content: `TensorFlow.js enables machine learning directly in the browser and Node.js, opening up new possibilities for intelligent web applications.

## Why TensorFlow.js?

- **Client-Side ML**: Run models directly in the browser
- **Privacy**: Keep data on the user's device
- **Low Latency**: No server round trips
- **Offline Capability**: Works without internet connection
- **Pre-trained Models**: Use existing models from TensorFlow Hub

## Getting Started

\`\`\`bash
npm install @tensorflow/tfjs
# For Node.js
npm install @tensorflow/tfjs-node
\`\`\`

## Basic Concepts

\`\`\`javascript
import * as tf from '@tensorflow/tfjs';

// Create tensors
const tensor1d = tf.tensor1d([1, 2, 3, 4]);
const tensor2d = tf.tensor2d([[1, 2], [3, 4]]);

// Basic operations
const a = tf.tensor1d([1, 2, 3]);
const b = tf.tensor1d([4, 5, 6]);
const sum = a.add(b); // [5, 7, 9]

// Matrix multiplication
const matrix1 = tf.tensor2d([[1, 2], [3, 4]]);
const matrix2 = tf.tensor2d([[5, 6], [7, 8]]);
const product = matrix1.matMul(matrix2);

// Always dispose tensors to free memory
tensor1d.dispose();
tensor2d.dispose();
sum.dispose();
\`\`\`

## Building a Neural Network

\`\`\`javascript
// Simple linear regression model
async function createModel() {
  const model = tf.sequential({
    layers: [
      tf.layers.dense({ inputShape: [1], units: 1 })
    ]
  });

  model.compile({
    optimizer: 'sgd',
    loss: 'meanSquaredError'
  });

  return model;
}

// Training data
const xs = tf.tensor2d([1, 2, 3, 4], [4, 1]);
const ys = tf.tensor2d([1, 3, 5, 7], [4, 1]);

// Train the model
async function trainModel(model, xs, ys) {
  await model.fit(xs, ys, {
    epochs: 100,
    callbacks: {
      onEpochEnd: (epoch, logs) => {
        console.log(\`Epoch \${epoch}: loss = \${logs.loss}\`);
      }
    }
  });
}

// Make predictions
async function predict(model, input) {
  const prediction = model.predict(tf.tensor2d([input], [1, 1]));
  const result = await prediction.data();
  prediction.dispose();
  return result[0];
}
\`\`\`

## Image Classification

\`\`\`javascript
import * as mobilenet from '@tensorflow-models/mobilenet';

class ImageClassifier {
  constructor() {
    this.model = null;
  }

  async loadModel() {
    this.model = await mobilenet.load();
    console.log('MobileNet model loaded');
  }

  async classifyImage(imageElement) {
    if (!this.model) {
      await this.loadModel();
    }

    const predictions = await this.model.classify(imageElement);
    return predictions;
  }

  async classifyImageFromFile(file) {
    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.onload = async (event) => {
        const img = new Image();
        img.onload = async () => {
          const predictions = await this.classifyImage(img);
          resolve(predictions);
        };
        img.src = event.target.result;
      };
      reader.readAsDataURL(file);
    });
  }
}

// Usage
const classifier = new ImageClassifier();

// Classify from file input
document.getElementById('fileInput').addEventListener('change', async (event) => {
  const file = event.target.files[0];
  if (file) {
    const predictions = await classifier.classifyImageFromFile(file);
    console.log('Predictions:', predictions);
    
    // Display results
    predictions.forEach(prediction => {
      console.log(\`\${prediction.className}: \${(prediction.probability * 100).toFixed(2)}%\`);
    });
  }
});
\`\`\`

## Custom Model Training

\`\`\`javascript
// Binary classification model
function createBinaryClassifier() {
  const model = tf.sequential({
    layers: [
      tf.layers.dense({ 
        inputShape: [784], // 28x28 image flattened
        units: 128, 
        activation: 'relu' 
      }),
      tf.layers.dropout({ rate: 0.2 }),
      tf.layers.dense({ 
        units: 64, 
        activation: 'relu' 
      }),
      tf.layers.dense({ 
        units: 1, 
        activation: 'sigmoid' 
      })
    ]
  });

  model.compile({
    optimizer: 'adam',
    loss: 'binaryCrossentropy',
    metrics: ['accuracy']
  });

  return model;
}

// Data preprocessing
function preprocessData(images, labels) {
  // Normalize pixel values to 0-1
  const normalizedImages = images.div(255.0);
  
  // Convert labels to tensor
  const labelTensor = tf.tensor1d(labels, 'int32');
  
  return {
    images: normalizedImages,
    labels: labelTensor
  };
}

// Training with validation
async function trainClassifier(model, trainData, validationData) {
  const history = await model.fit(trainData.images, trainData.labels, {
    epochs: 50,
    batchSize: 32,
    validationData: [validationData.images, validationData.labels],
    callbacks: {
      onEpochEnd: (epoch, logs) => {
        console.log(\`Epoch \${epoch + 1}:\`);
        console.log(\`  Training Accuracy: \${(logs.acc * 100).toFixed(2)}%\`);
        console.log(\`  Validation Accuracy: \${(logs.val_acc * 100).toFixed(2)}%\`);
      }
    }
  });

  return history;
}
\`\`\`

## Real-time Object Detection

\`\`\`javascript
import * as cocoSsd from '@tensorflow-models/coco-ssd';

class ObjectDetector {
  constructor() {
    this.model = null;
    this.video = null;
    this.canvas = null;
    this.ctx = null;
  }

  async loadModel() {
    this.model = await cocoSsd.load();
    console.log('COCO-SSD model loaded');
  }

  async setupCamera() {
    this.video = document.getElementById('video');
    this.canvas = document.getElementById('canvas');
    this.ctx = this.canvas.getContext('2d');

    const stream = await navigator.mediaDevices.getUserMedia({
      video: { width: 640, height: 480 }
    });

    this.video.srcObject = stream;
    return new Promise((resolve) => {
      this.video.onloadedmetadata = () => {
        resolve(this.video);
      };
    });
  }

  async detectObjects() {
    if (!this.model || !this.video) return;

    const predictions = await this.model.detect(this.video);
    
    // Clear canvas
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    
    // Draw video frame
    this.ctx.drawImage(this.video, 0, 0, this.canvas.width, this.canvas.height);
    
    // Draw bounding boxes
    predictions.forEach(prediction => {
      const [x, y, width, height] = prediction.bbox;
      
      // Draw bounding box
      this.ctx.strokeStyle = '#00FF00';
      this.ctx.lineWidth = 2;
      this.ctx.strokeRect(x, y, width, height);
      
      // Draw label
      this.ctx.fillStyle = '#00FF00';
      this.ctx.font = '16px Arial';
      this.ctx.fillText(
        \`\${prediction.class} (\${(prediction.score * 100).toFixed(1)}%)\`,
        x, y > 20 ? y - 5 : y + 15
      );
    });

    // Continue detection
    requestAnimationFrame(() => this.detectObjects());
  }

  async start() {
    await this.loadModel();
    await this.setupCamera();
    this.video.play();
    this.detectObjects();
  }
}

// Usage
const detector = new ObjectDetector();
detector.start();
\`\`\`

## Model Optimization

\`\`\`javascript
// Model quantization for smaller size
async function quantizeModel(model) {
  const quantizedModel = await tf.quantization.quantize(model, 'int8');
  return quantizedModel;
}

// Model pruning for faster inference
async function pruneModel(model) {
  const prunedModel = await tf.prune.prune(model, {
    sparsity: 0.5, // Remove 50% of weights
    pruningSchedule: tf.prune.PolynomialDecayPruningSchedule({
      initialSparsity: 0.0,
      finalSparsity: 0.5,
      startStep: 0,
      endStep: 100
    })
  });
  return prunedModel;
}

// Save and load models
async function saveModel(model, name) {
  await model.save(\`indexeddb://\${name}\`);
}

async function loadModel(name) {
  return await tf.loadLayersModel(\`indexeddb://\${name}\`);
}
\`\`\`

## Best Practices

1. **Memory Management**: Always dispose tensors to prevent memory leaks
2. **Model Optimization**: Use quantization and pruning for production
3. **Batch Processing**: Process multiple inputs together for efficiency
4. **Progressive Loading**: Load models asynchronously
5. **Error Handling**: Handle model loading and prediction errors gracefully

TensorFlow.js brings the power of machine learning to web applications, enabling intelligent features that run directly in the user's browser.`,
    date: "2024-01-20",
    category: "Machine Learning",
    readTime: "18 min read",
    image: machineLearningImg,
    tags: ["TensorFlow.js", "Machine Learning", "AI", "Browser ML"]
  }
];

export const getPostById = (id: string): BlogPost | undefined => {
  return blogPosts.find(post => post.id === id);
};

export const getPostsByCategory = (category: string): BlogPost[] => {
  return blogPosts.filter(post => post.category === category);
};

export const getAllCategories = (): string[] => {
  return [...new Set(blogPosts.map(post => post.category))];
};