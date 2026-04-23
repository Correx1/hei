import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Search } from "lucide-react";
import GetInvolvedCTA from "@/app/who-we-are/GetInvolvedCTA";
import { BLOG_POSTS } from "./data";

export const metadata = {
  title: "Our Blog",
};

export default function BlogPage() {
  return (
    <div className="w-full min-h-screen bg-white">
      
      {/* Hero Header */}
      <section className="relative w-full py-16 md:py-24 bg-brand-dark flex flex-col justify-center items-center text-center overflow-hidden">
         {/* Subtle background pattern/overlay */}
         <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent pointer-events-none"></div>
         
         <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-heading font-extrabold text-white uppercase tracking-tight leading-tight mb-6">
              OUR BLOG
            </h1>
            <div className="w-20 h-1.5 bg-[#E51924] rounded-full mb-6"></div>
            <p className="text-[16px] md:text-[18px] text-white/90 leading-relaxed font-sans font-medium max-w-2xl">
              Stay updated with our latest news, life-saving interventions, health articles, and impact stories.
            </p>
         </div>
      </section>

      {/* Blog Page Layout Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          
          {/* Main Content Area (Left 70%) */}
          <div className="w-full lg:w-[70%] flex flex-col space-y-16">
            {BLOG_POSTS.map((post) => (
              <article key={post.id} className="w-full flex flex-col group">
                
                {/* Header Info */}
                <div className="mb-4">
                  <span className="text-[10px] uppercase text-[#E51924] font-bold tracking-widest block mb-2">
                    {post.category}
                  </span>
                  <Link href={`/blogs/${post.slug}`}>
                    <h2 className="text-[22px] md:text-[26px] font-heading font-bold text-gray-800 leading-snug hover:text-[#E51924] transition-colors mb-2">
                      {post.title}
                    </h2>
                  </Link>
                  <div className="text-[11px] uppercase text-gray-500 font-bold tracking-wider">
                    POSTED ON <span className="text-[#E51924]">{post.date}</span> BY <span className="text-[#E51924]">{post.author}</span>
                  </div>
                </div>

                {/* Body Content */}
                <div className="flex flex-col md:flex-row gap-6 mt-4">
                  
                  {/* Image with overlay date */}
                  <div className="w-full md:w-[45%] relative aspect-[4/3] rounded-sm overflow-hidden shrink-0">
                    <Link href={`/blogs/${post.slug}`}>
                      <Image 
                        src={post.image} 
                        alt={post.title} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" fill 
                        className="object-cover group-hover:scale-105 transition-transform duration-500" 
                      />
                    </Link>
                    {/* Date Box */}
                    <div className="absolute top-4 left-4 bg-white border-[1.5px] border-[#E51924] w-[45px] h-[50px] flex flex-col items-center justify-center z-10 shadow-sm">
                      <span className="text-[#E51924] font-bold text-[15px] leading-none mb-0.5">{post.dateShort.day}</span>
                      <span className="text-[#E51924] font-bold text-[11px] uppercase leading-none">{post.dateShort.month}</span>
                    </div>
                  </div>

                  {/* Excerpt and Button */}
                  <div className="w-full md:w-[55%] flex flex-col items-start justify-center">
                    <p className="text-[14.5px] text-gray-600 leading-relaxed font-sans mb-6">
                      {post.excerpt}
                    </p>
                    <Link 
                      href={`/blogs/${post.slug}`}
                      className="text-[#E51924] text-[11px] font-bold uppercase tracking-widest border border-[#E51924] py-2 px-5 hover:bg-[#E51924] hover:text-white transition-colors"
                    >
                      CONTINUE READING →
                    </Link>
                  </div>
                  
                </div>

                {/* Footer Meta */}
                <div className="border-t border-gray-100 mt-6 pt-4 flex justify-between items-center text-[11px] uppercase text-gray-500 font-medium">
                  <div>
                    Posted in <span className="text-[#E51924] hover:underline cursor-pointer">{post.category}</span>
                  </div>
                  <div>
                    <Link href={`/blog/${post.slug}#comments`} className="hover:text-[#E51924] transition-colors">
                      {post.commentCount === 0 ? "Leave a comment" : `${post.commentCount} Comment${post.commentCount > 1 ? 's' : ''}`}
                    </Link>
                  </div>
                </div>

              </article>
            ))}
          </div>

          {/* Sidebar Area (Right 30%) */}
          <aside className="w-full lg:w-[30%] flex flex-col shrink-0">
            <div className="sticky top-24">
              
              {/* Search Widget */}
              <div className="flex w-full mb-12 border border-gray-200 rounded-sm overflow-hidden focus-within:border-brand-dark transition-colors shadow-sm">
                <input 
                  type="text" 
                  className="w-full px-4 py-3 text-[14px] outline-none text-gray-700 bg-gray-50/50" 
                  placeholder="Search..." 
                />
                <button className="bg-brand-dark px-5 py-3 text-white hover:bg-brand-dark/90 transition-colors flex items-center justify-center">
                  <Search size={18} />
                </button>
              </div>

              {/* Recent Posts Widget */}
              <div className="w-full">
                <h3 className="text-[13px] font-bold text-gray-800 uppercase tracking-widest mb-6">
                  RECENT POSTS
                </h3>
                <ul className="flex flex-col">
                  {BLOG_POSTS.slice(0, 6).map((post, idx) => (
                    <li key={idx} className="border-b border-gray-100 last:border-b-0 pb-4 mb-4 last:pb-0 last:mb-0">
                      <Link 
                        href={`/blog/${post.slug}`}
                        className="text-[13.5px] font-medium text-[#E51924] hover:text-brand-dark transition-colors leading-relaxed block"
                      >
                        {post.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          </aside>

        </div>
      </div>

      <GetInvolvedCTA />
    </div>
  );
}
