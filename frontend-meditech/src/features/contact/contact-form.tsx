
"use client";

import { useState } from "react";
import {
  Send,
  User,
  Mail,
  Phone,
  MessageSquare,
  CheckCircle2,
} from "lucide-react";

import { ScrollReveal } from "@/components/shared/animations/scroll-reveal";
import { SectionHeading } from "@/components/shared/section-heading";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const form = e.currentTarget;

    if (!form.reportValidity()) return;

    // Connect your API or email service here.
    setSubmitted(true);
    form.reset();
  }

  return (
    <section id="contact-form" className="bg-slate-50 py-20 lg:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">

        {/* Left Content */}
        <ScrollReveal animation="left">
          <div>
            <SectionHeading
              eyebrow="Send Us a Message"
              title="Let's Start a Conversation"
              alignment="left"
              animation="left"
            />

            <p className="mt-6 leading-8 text-slate-600">
              Whether you have questions about our diagnostic services,
              consultation facilities, or appointments, our team is
              ready to assist you.
            </p>

            <div className="mt-9 space-y-6">
              {[
                "Get information about our services.",
                "Ask questions about diagnostic tests.",
                "Request appointment information.",
                "Share your feedback with us.",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle2 className="shrink-0 text-teal-600" size={21} />
                  <span className="text-sm font-medium text-slate-700">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Contact Form */}
        <ScrollReveal animation="right">
          <div className="rounded-3xl border border-slate-100 bg-white p-6 shadow-xl sm:p-9">

            <h3 className="text-2xl font-bold text-slate-900">
              Send a Message
            </h3>

            <p className="mt-2 text-sm text-slate-500">
              Fill out the form below and we will get back to you.
            </p>

            {submitted && (
              <div className="mt-6 rounded-xl bg-teal-50 p-4 text-sm text-teal-800">
                Thank you! Your form was submitted locally.
                Connect an API to deliver your message.
              </div>
            )}

            <form onSubmit={handleSubmit} className="mt-8 space-y-5">

              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Full Name
                </label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={19} />
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Enter your full name"
                    className="w-full rounded-xl border border-slate-200 py-3.5 pl-12 pr-4 outline-none transition focus:border-teal-600 focus:ring-2 focus:ring-teal-100"
                  />
                </div>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-semibold text-slate-700">
                    Email Address
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={19} />
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="Your email"
                      className="w-full rounded-xl border border-slate-200 py-3.5 pl-12 pr-3 outline-none focus:border-teal-600 focus:ring-2 focus:ring-teal-100"
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-semibold text-slate-700">
                    Phone Number
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={19} />
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Your phone number"
                      className="w-full rounded-xl border border-slate-200 py-3.5 pl-12 pr-3 outline-none focus:border-teal-600 focus:ring-2 focus:ring-teal-100"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Subject
                </label>
                <select
                  name="subject"
                  required
                  defaultValue=""
                  className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3.5 outline-none focus:border-teal-600 focus:ring-2 focus:ring-teal-100"
                >
                  <option value="" disabled>Select a subject</option>
                  <option value="Diagnostic Services">Diagnostic Services</option>
                  <option value="Medical Consultation">Medical Consultation</option>
                  <option value="Appointment">Appointment</option>
                  <option value="General Inquiry">General Inquiry</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Your Message
                </label>
                <div className="relative">
                  <MessageSquare className="absolute left-4 top-4 text-slate-400" size={19} />
                  <textarea
                    name="message"
                    required
                    rows={5}
                    placeholder="Write your message here..."
                    className="w-full resize-none rounded-xl border border-slate-200 py-3.5 pl-12 pr-4 outline-none focus:border-teal-600 focus:ring-2 focus:ring-teal-100"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-teal-700 px-6 py-4 font-semibold text-white transition hover:bg-teal-800"
              >
                Send Message
                <Send size={18} />
              </button>

            </form>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
