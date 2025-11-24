import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Clock, Calendar } from 'lucide-react';

const BlogPost: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  // Mock data - in a real app this would come from an API
  const post = {
    title: "Introducing Smart Threads: Auto-splitting for long-form content",
    category: "Product",
    date: "Nov 14, 2025",
    readTime: "4 min read",
    content: [
      "We've all been there. You have a brilliant idea for a thread, but the character limit keeps getting in the way. You spend more time formatting your tweets than actually writing them.",
      "Today, we're changing that with Smart Threads.",
      "Our new engine automatically detects natural break points in your writing. It uses natural language processing to understand where a sentence ends and a new thought begins, ensuring your threads flow perfectly from one tweet to the next.",
      "### Key Features",
      "1. **Auto-Splitting:** Just write. We handle the formatting.",
      "2. **Context Awareness:** Keeps related points together.",
      "3. **Media Intelligence:** Automatically places images and GIFs in the optimal position.",
      "This is just the beginning. We're rolling out Smart Threads to all users starting today. Happy scheduling!"
    ]
  };

  return (
    <div className="pt-48 pb-24">
      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Back Link */}
        <Link to="/blog" className="inline-flex items-center gap-2 text-sm font-semibold text-gray-500 hover:text-brand-black transition-colors mb-12">
           <ArrowLeft size={16} /> Back to Blog
        </Link>

        {/* Header */}
        <header className="mb-12">
           <div className="flex items-center gap-3 mb-6 text-sm font-semibold uppercase tracking-wider">
               <span className="text-brand-orange bg-brand-orange/5 px-3 py-1 rounded-full">{post.category}</span>
           </div>
           
           <h1 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tighter mb-8 leading-tight">
             {post.title}
           </h1>

           <div className="flex items-center gap-6 text-sm text-gray-500 border-b border-gray-100 pb-12">
              <div className="flex items-center gap-2">
                 <Calendar size={16} />
                 <span>{post.date}</span>
              </div>
              <div className="flex items-center gap-2">
                 <Clock size={16} />
                 <span>{post.readTime}</span>
              </div>
           </div>
        </header>

        {/* Content */}
        <div className="prose prose-lg prose-gray max-w-none">
           {post.content.map((paragraph, index) => {
              if (paragraph.startsWith("###")) {
                 return <h3 key={index} className="text-2xl font-bold text-gray-900 mt-12 mb-6">{paragraph.replace("### ", "")}</h3>
              }
              return <p key={index} className="text-gray-600 leading-relaxed mb-6">{paragraph}</p>
           })}
        </div>
      </article>
    </div>
  );
};

export default BlogPost;