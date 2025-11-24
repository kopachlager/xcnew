import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface BlogPost {
  id: number;
  category: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  // Images removed for cleaner UI
}

const posts: BlogPost[] = [
  {
    id: 1,
    category: "Product",
    title: "Introducing Smart Threads: Auto-splitting for long-form content",
    excerpt: "Stop worrying about character limits. Our new engine automatically detects natural break points in your writing and formats them for maximum readability across platforms.",
    date: "Nov 14, 2025",
    readTime: "4 min read"
  },
  {
    id: 2,
    category: "Strategy",
    title: "The algorithm changed again. Here is what you need to know.",
    excerpt: "Engagement bait is dead. High-value replies are in. We analyzed 1M tweets to find the new meta for organic growth in 2025.",
    date: "Oct 28, 2025",
    readTime: "6 min read"
  },
  {
    id: 3,
    category: "Engineering",
    title: "How we reduced API latency by 40% globally",
    excerpt: "A deep dive into our edge caching infrastructure and how we handle real-time scheduling at scale using a distributed event bus.",
    date: "Oct 15, 2025",
    readTime: "8 min read"
  },
  {
    id: 4,
    category: "Case Study",
    title: "Growing from 0 to 100k followers in 3 months",
    excerpt: "How designer Sarah Jenkins used X-Scheduler's automation tools to build a massive audience while working a full-time job.",
    date: "Oct 10, 2025",
    readTime: "10 min read",
  },
  {
    id: 5,
    category: "Product",
    title: "New Feature: Visual Calendar Drag & Drop",
    excerpt: "Managing your content pipeline just got easier. Visualize your entire month and reschedule posts with a single click.",
    date: "Oct 05, 2025",
    readTime: "3 min read",
  },
  {
    id: 6,
    category: "Community",
    title: "Open Sourcing our Core Engine",
    excerpt: "Why we decided to make X-Scheduler 100% free and open source, and how you can contribute to the project.",
    date: "Oct 01, 2025",
    readTime: "5 min read",
  }
];

const Blog: React.FC = () => {
  return (
    <div className="pt-48 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-24">
          <h1 className="text-5xl font-bold text-gray-900 tracking-tighter mb-6">
            The Dispatch
          </h1>
          <p className="text-xl text-gray-500 font-light leading-relaxed">
            Thoughts on social media strategy, product updates, and the future of the creator economy.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <Link to={`/blog/${post.id}`} key={post.id} className="group flex flex-col h-full rounded-[2rem] bg-gray-50 transition-all duration-500 cursor-pointer overflow-hidden border border-transparent hover:border-gray-200">
              
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex items-center gap-3 mb-6 text-xs font-semibold uppercase tracking-wider">
                    <span className="text-brand-orange bg-brand-orange/5 px-3 py-1 rounded-full">{post.category}</span>
                    <span className="text-gray-400">{post.date}</span>
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-3 leading-snug group-hover:text-brand-orange transition-colors duration-300">
                    {post.title}
                </h3>
                
                <p className="text-gray-500 leading-relaxed mb-8 flex-grow text-sm">
                    {post.excerpt}
                </p>

                <div className="flex items-center justify-between pt-6 border-t border-gray-100 mt-auto">
                    <span className="text-xs font-medium text-gray-400">{post.readTime}</span>
                    <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-white text-gray-900 group-hover:bg-brand-black group-hover:text-white transition-all duration-300">
                        <ArrowRight size={14} />
                    </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Blog;