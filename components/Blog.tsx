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
}

const posts: BlogPost[] = [
  {
    id: 1,
    category: "Product",
    title: "Introducing Smart Threads: Auto-splitting for long-form content",
    excerpt: "Stop worrying about character limits. Our new engine automatically detects natural break points in your writing.",
    date: "Nov 14, 2025",
    readTime: "4 min read"
  },
  {
    id: 2,
    category: "Strategy",
    title: "The algorithm changed again. Here is what you need to know.",
    excerpt: "Engagement bait is dead. High-value replies are in. We analyzed 1M tweets to find the new meta.",
    date: "Oct 28, 2025",
    readTime: "6 min read"
  },
  {
    id: 3,
    category: "Engineering",
    title: "How we reduced API latency by 40% globally",
    excerpt: "A deep dive into our edge caching infrastructure and how we handle real-time scheduling at scale.",
    date: "Oct 15, 2025",
    readTime: "8 min read"
  }
];

const Blog: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center mb-16 gap-4">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 tracking-tight mb-4">Latest Updates</h2>
            <p className="text-lg text-gray-500 max-w-xl mx-auto">
              Insights on social strategy, product updates, and engineering deep dives.
            </p>
          </div>
          <Link to="/blog" className="hidden md:flex items-center gap-2 text-sm font-semibold text-brand-orange hover:text-brand-black transition-colors">
            View all articles <ArrowRight size={16} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post) => (
            <Link to={`/blog/${post.id}`} key={post.id} className="group flex flex-col items-start h-full p-8 rounded-[2rem] bg-gray-50 transition-all duration-300 cursor-pointer">
              
              <div className="flex items-center gap-3 mb-6 text-xs font-semibold uppercase tracking-wider">
                <span className="text-brand-orange bg-brand-orange/5 px-3 py-1 rounded-full">{post.category}</span>
                <span className="text-gray-400">{post.date}</span>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-3 leading-snug group-hover:text-brand-orange transition-colors duration-300">
                {post.title}
              </h3>
              
              <p className="text-gray-500 leading-relaxed mb-8 flex-grow">
                {post.excerpt}
              </p>

              <div className="w-full flex items-center justify-between pt-8 border-t border-gray-100 mt-auto">
                 <span className="text-xs font-medium text-gray-400">{post.readTime}</span>
                 <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-white text-gray-900 group-hover:bg-brand-black group-hover:text-white transition-all duration-300">
                    <ArrowRight size={14} />
                 </span>
              </div>
            </Link>
          ))}
        </div>
        
        <div className="mt-12 flex md:hidden justify-center">
             <Link to="/blog" className="flex items-center gap-2 text-sm font-semibold text-brand-orange hover:text-brand-black transition-colors">
            View all articles <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Blog;