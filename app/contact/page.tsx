"use client";

import Image from "next/image";
import Link from "next/link";
import { Mail, Phone, MapPin, Send, Clock } from "lucide-react";
import { useState } from "react";
import GetInvolvedCTA from "@/app/who-we-are/GetInvolvedCTA";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="w-full flex flex-col min-h-screen bg-[#fcfbf9]">

      {/* Hero */}
      <section className="relative w-full min-h-[70vh] py-20 lg:py-28 overflow-hidden bg-brand-dark flex flex-col justify-center items-center text-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/about2.jpg"
            alt="Contact Us Hero"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-[#1a0505]/85"></div>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-heading font-bold text-white uppercase tracking-tight leading-tight mb-4">
            Contact Us
          </h1>
          <div className="w-24 h-1.5 bg-brand-gold rounded-full mx-auto mb-6"></div>
          <p className="font-sans text-[15px] md:text-[16.5px] text-white/95 leading-relaxed max-w-3xl pt-2 px-4">
            We&apos;d love to hear from you. Reach out to us for partnerships, donations, media inquiries, or any support request.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="w-full py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

            {/* Left — Contact Info */}
            <div className="flex flex-col space-y-10">
              <div>
                <p className="text-[11px] uppercase tracking-widest font-bold text-brand-red mb-2 font-sans">Get In Touch</p>
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-brand-dark uppercase tracking-tight leading-snug mb-4">
                  We&apos;re Here<br />To Help
                </h2>
                <div className="w-16 h-1 bg-brand-gold rounded-full mb-6"></div>
                <p className="font-sans text-[15px] text-gray-600 leading-relaxed max-w-md">
                  Whether you want to donate, volunteer, partner with us, or simply learn more about our work — we are always ready to connect.
                </p>
              </div>

              <div className="flex flex-col space-y-6">
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 rounded-full bg-brand-red/10 flex items-center justify-center shrink-0">
                    <Phone size={20} className="text-brand-red" />
                  </div>
                  <div>
                    <p className="font-sans font-bold text-brand-dark text-[13px] uppercase tracking-widest mb-1">Phone</p>
                    <p className="font-sans text-[15px] text-gray-600">+234 706 398 5777</p>
                    <p className="font-sans text-[15px] text-gray-600">+234 706 420 3748</p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 rounded-full bg-brand-red/10 flex items-center justify-center shrink-0">
                    <Mail size={20} className="text-brand-red" />
                  </div>
                  <div>
                    <p className="font-sans font-bold text-brand-dark text-[13px] uppercase tracking-widest mb-1">Email</p>
                    <a href="mailto:info@hei.org.ng" className="font-sans text-[15px] text-gray-600 hover:text-brand-red transition-colors">
                      info@hei.org.ng
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 rounded-full bg-brand-red/10 flex items-center justify-center shrink-0">
                    <Clock size={20} className="text-brand-red" />
                  </div>
                  <div>
                    <p className="font-sans font-bold text-brand-dark text-[13px] uppercase tracking-widest mb-1">Office Hours</p>
                    <p className="font-sans text-[15px] text-gray-600">Monday – Friday: 9am – 5pm</p>
                    <p className="font-sans text-[15px] text-gray-600">Saturday: 10am – 2pm</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div>
                <p className="font-sans font-bold text-brand-dark text-[13px] uppercase tracking-widest mb-4">Follow Us</p>
                <div className="flex gap-3 flex-wrap">
                  {[
                    { label: "Facebook", href: "https://www.facebook.com/HEInigeria" },
                    { label: "Twitter / X", href: "https://x.com/InitiativeHe" },
                    { label: "Instagram", href: "https://www.instagram.com/healthemergencyinitiative" },
                    { label: "LinkedIn", href: "https://www.linkedin.com/company/health-emergency-initiative/" },
                  ].map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-sans text-[12px] font-bold uppercase tracking-widest border border-gray-200 px-4 py-2 text-gray-600 hover:bg-brand-red hover:text-white hover:border-brand-red transition-all rounded-sm"
                    >
                      {s.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Right — Contact Form */}
            <div className="bg-white border border-gray-100 shadow-[0_4px_40px_-12px_rgba(0,0,0,0.1)] p-8 md:p-10 rounded-sm">
              {submitted ? (
                <div className="flex flex-col items-center justify-center text-center py-16 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-2">
                    <Send size={28} className="text-green-600" />
                  </div>
                  <h3 className="text-2xl font-heading font-bold text-brand-dark uppercase">Message Sent!</h3>
                  <p className="font-sans text-gray-600 text-[15px] max-w-sm">
                    Thank you for reaching out. Our team will get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => { setSubmitted(false); setForm({ name: "", email: "", subject: "", message: "" }); }}
                    className="mt-4 font-sans text-[13px] font-bold uppercase tracking-widest text-brand-red border-b-2 border-brand-red hover:text-brand-dark hover:border-brand-dark transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <>
                  <h3 className="text-xl md:text-2xl font-heading font-bold text-brand-dark uppercase tracking-tight mb-2">Send a Message</h3>
                  <div className="w-12 h-1 bg-brand-gold rounded-full mb-7"></div>

                  <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div className="flex flex-col gap-1.5">
                        <label className="font-sans text-[12px] uppercase tracking-widest font-bold text-gray-500">Full Name</label>
                        <input
                          type="text"
                          required
                          value={form.name}
                          onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                          placeholder="John Doe"
                          className="w-full border border-gray-200 rounded-sm px-4 py-3 text-[14px] font-sans text-gray-800 placeholder:text-gray-400 focus:outline-none focus:border-brand-red focus:ring-1 focus:ring-brand-red transition-all"
                        />
                      </div>
                      <div className="flex flex-col gap-1.5">
                        <label className="font-sans text-[12px] uppercase tracking-widest font-bold text-gray-500">Email Address</label>
                        <input
                          type="email"
                          required
                          value={form.email}
                          onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                          placeholder="you@example.com"
                          className="w-full border border-gray-200 rounded-sm px-4 py-3 text-[14px] font-sans text-gray-800 placeholder:text-gray-400 focus:outline-none focus:border-brand-red focus:ring-1 focus:ring-brand-red transition-all"
                        />
                      </div>
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label className="font-sans text-[12px] uppercase tracking-widest font-bold text-gray-500">Subject</label>
                      <input
                        type="text"
                        required
                        value={form.subject}
                        onChange={e => setForm(f => ({ ...f, subject: e.target.value }))}
                        placeholder="How can we help?"
                        className="w-full border border-gray-200 rounded-sm px-4 py-3 text-[14px] font-sans text-gray-800 placeholder:text-gray-400 focus:outline-none focus:border-brand-red focus:ring-1 focus:ring-brand-red transition-all"
                      />
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label className="font-sans text-[12px] uppercase tracking-widest font-bold text-gray-500">Message</label>
                      <textarea
                        required
                        rows={6}
                        value={form.message}
                        onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                        placeholder="Write your message here..."
                        className="w-full border border-gray-200 rounded-sm px-4 py-3 text-[14px] font-sans text-gray-800 placeholder:text-gray-400 focus:outline-none focus:border-brand-red focus:ring-1 focus:ring-brand-red transition-all resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-brand-red hover:bg-brand-red-dark text-white font-sans font-bold text-[13px] uppercase tracking-widest py-4 rounded-sm transition-colors flex items-center justify-center gap-2 shadow-sm"
                    >
                      <Send size={16} />
                      Send Message
                    </button>
                  </form>
                </>
              )}
            </div>

          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="w-full py-12 bg-gray-50 border-t border-gray-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="font-sans text-[13px] uppercase tracking-widest font-bold text-gray-500 mb-6">You May Also Need</p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            {[
              { label: "Donate Now", href: "/donate" },
              { label: "Volunteer", href: "/volunteer" },
              { label: "FAQ", href: "/faq" },
              { label: "Our Programs", href: "/what-we-do" },
            ].map(l => (
              <Link
                key={l.href}
                href={l.href}
                className="font-sans text-[13px] font-bold uppercase tracking-widest border-2 border-brand-dark text-brand-dark px-6 py-3 hover:bg-brand-red hover:text-white hover:border-brand-red transition-all rounded-sm"
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <GetInvolvedCTA />
    </div>
  );
}
