import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Search, User, CalendarDays, ChevronLeft } from "lucide-react";
import GetInvolvedCTA from "@/app/who-we-are/GetInvolvedCTA";
import { BLOG_POSTS } from "../data";

export default async function BlogSinglePage({ params }: { params: Promise<{ slug: string }> }) {
  // Await the params object before accessing properties (Next.js 15+ convention)
  const resolvedParams = await params;
  const post = BLOG_POSTS.find(p => p.slug === resolvedParams.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="w-full min-h-screen bg-white">
      
      {/* Subtle Breadcrumb / Back Navigation */}
      <div className="w-full bg-gray-50 border-b border-gray-100 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/blogs" className="inline-flex items-center text-[13px] font-bold text-gray-500 hover:text-[#E51924] transition-colors uppercase tracking-widest">
            <ChevronLeft size={16} className="mr-1" />
            Back to Blog
          </Link>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          
          {/* Main Article Area (Left 70%) */}
          <div className="w-full lg:w-[70%] flex flex-col">
            
            {/* Post Header */}
            <header className="mb-8 border-b border-gray-100 pb-8">
              <span className="text-[11px] uppercase text-white bg-[#E51924] px-3 py-1 font-bold tracking-widest inline-block mb-6 rounded-sm shadow-sm">
                {post.category}
              </span>
              <h1 className="text-[28px] md:text-[38px] lg:text-[42px] font-heading font-extrabold text-brand-dark leading-tight mb-6">
                {post.title}
              </h1>
              
              <div className="flex flex-wrap items-center gap-6 text-[12px] uppercase text-gray-500 font-bold tracking-wider">
                <div className="flex items-center gap-2">
                  <User size={14} className="text-[#E51924]" />
                  <span>BY <span className="text-[#E51924]">{post.author}</span></span>
                </div>
                <div className="flex items-center gap-2">
                  <CalendarDays size={14} className="text-[#E51924]" />
                  <span>{post.date}</span>
                </div>
              </div>
            </header>

            {/* Featured Image */}
            <div className="w-full aspect-[21/9] relative rounded-sm overflow-hidden mb-10 shadow-sm">
              <Image 
                src={post.image} 
                alt={post.title} 
                fill 
                className="object-cover"
                priority
              />
            </div>

            {/* Rich Content Area */}
            <article className="w-full prose prose-lg prose-red max-w-none prose-headings:font-heading prose-headings:font-bold prose-headings:text-brand-dark prose-p:text-gray-700 prose-a:text-[#E51924] prose-img:rounded-sm shadow-sm-img">
              {post.content}
            </article>

            {/* Tags / Share / Footer */}
            <div className="border-t border-gray-200 mt-16 pt-8 pb-12 flex flex-col sm:flex-row justify-between items-center gap-4">
               <div className="text-[12px] uppercase font-bold text-gray-500 tracking-wider">
                 Categories: <span className="text-[#E51924] cursor-pointer hover:underline">{post.category}</span>
               </div>
               <div className="flex items-center gap-4 text-[12px] uppercase font-bold text-gray-500 tracking-wider">
                 Share: 
                 <span className="text-gray-700 hover:text-[#E51924] cursor-pointer transition-colors">Facebook</span>
                 <span className="text-gray-700 hover:text-[#E51924] cursor-pointer transition-colors">Twitter</span>
                 <span className="text-gray-700 hover:text-[#E51924] cursor-pointer transition-colors">LinkedIn</span>
               </div>
            </div>

            {/* Comments Section (Frontend Mock) */}
            <section id="comments" className="bg-gray-50 p-8 rounded-sm border border-gray-100">
               <h3 className="text-[20px] font-heading font-bold text-brand-dark uppercase tracking-wider mb-8">
                 {post.commentCount === 0 ? "Leave a Reply" : `${post.commentCount} Comments`}
               </h3>
               
               <form className="flex flex-col gap-6">
                 <div className="flex flex-col gap-2">
                   <label className="text-[13px] font-bold text-gray-700 uppercase tracking-widest">Comment</label>
                   <textarea rows={5} className="w-full border border-gray-200 rounded-sm p-4 outline-none focus:border-[#E51924] transition-colors resize-y text-[15px] font-sans" placeholder="Write your thoughts here..."></textarea>
                 </div>
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                   <div className="flex flex-col gap-2">
                     <label className="text-[13px] font-bold text-gray-700 uppercase tracking-widest">Name *</label>
                     <input type="text" className="w-full border border-gray-200 rounded-sm p-3 outline-none focus:border-[#E51924] transition-colors text-[15px] font-sans" />
                   </div>
                   <div className="flex flex-col gap-2">
                     <label className="text-[13px] font-bold text-gray-700 uppercase tracking-widest">Email *</label>
                     <input type="email" className="w-full border border-gray-200 rounded-sm p-3 outline-none focus:border-[#E51924] transition-colors text-[15px] font-sans" />
                   </div>
                 </div>
                 <div className="pt-2">
                   <button type="button" className="bg-[#E51924] text-white text-[13px] font-bold uppercase tracking-widest py-4 px-8 rounded-sm hover:bg-brand-dark transition-colors">
                     Post Comment
                   </button>
                 </div>
               </form>
            </section>

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
                  {BLOG_POSTS.slice(0, 6).map((recentPost, idx) => (
                    <li key={idx} className="border-b border-gray-100 last:border-b-0 pb-4 mb-4 last:pb-0 last:mb-0">
                      <Link 
                        href={`/blogs/${recentPost.slug}`}
                        className={`text-[13.5px] font-medium transition-colors leading-relaxed block ${
                          recentPost.slug === post.slug 
                            ? "text-gray-400 cursor-default" 
                            : "text-[#E51924] hover:text-brand-dark"
                        }`}
                      >
                        {recentPost.title}
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
