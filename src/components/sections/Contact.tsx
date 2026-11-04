"use client";

import React, { useState } from "react";
import { Mail, MapPin, Clock, Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import { profileData } from "@/data/profile";
import { contactFormSchema } from "@/lib/contact-schema";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { SocialLinks } from "@/components/ui/SocialLinks";

type FormStatus = "idle" | "submitting" | "success" | "error";

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    website_company: "", // honeypot
  });

  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<FormStatus>("idle");
  const [serverMessage, setServerMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (fieldErrors[name]) {
      setFieldErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Client-side schema validation
    const validationResult = contactFormSchema.safeParse(formData);

    if (!validationResult.success) {
      const flattened = validationResult.error.flatten().fieldErrors;
      const mappedErrors: Record<string, string> = {};
      Object.entries(flattened).forEach(([key, val]) => {
        if (val && val[0]) {
          mappedErrors[key] = val[0];
        }
      });
      setFieldErrors(mappedErrors);
      return;
    }

    setFieldErrors({});
    setStatus("submitting");
    setServerMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        setStatus("error");
        setServerMessage(
          data.message ||
            "Unable to send message right now. Please email directly to akash.nvf@gmail.com."
        );
        return;
      }

      setStatus("success");
      setServerMessage(data.message || "Your message was sent successfully!");
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
        website_company: "",
      });
    } catch {
      setStatus("error");
      setServerMessage(
        "Network error. Please try again or reach out directly via akash.nvf@gmail.com."
      );
    }
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-[#111114] scroll-mt-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Get In Touch"
          title="Let's Discuss Infrastructure"
          highlight="& Opportunities"
          description="Interested in collaborating on Systems Engineering projects, infrastructure support, or cloud practices? Feel free to send a message."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Direct Info Cards */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 rounded-xl bg-[#17171B] border border-[rgba(255,255,255,0.08)] space-y-6">
              <h3 className="text-xl font-bold text-[#F5F5F5]">
                Contact Information
              </h3>
              <p className="text-sm text-[#9E9EA6] leading-relaxed">
                Whether you have an inquiry regarding Systems Engineering positions or want to talk cloud automation, my inbox is open.
              </p>

              <div className="space-y-4 pt-2">
                <a
                  href={`mailto:${profileData.email}`}
                  className="flex items-center gap-4 p-3.5 rounded-lg bg-[#111114] border border-[rgba(255,255,255,0.06)] hover:border-[#FF6A00] transition-colors group"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#FF6A00]/10 flex items-center justify-center text-[#FF6A00] group-hover:scale-105 transition-transform">
                    <Mail size={18} />
                  </div>
                  <div>
                    <span className="text-xs text-[#8E8E98] block">Direct Email</span>
                    <span className="text-sm font-semibold text-[#F5F5F5] group-hover:text-[#FF8500] transition-colors">
                      {profileData.email}
                    </span>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-3.5 rounded-lg bg-[#111114] border border-[rgba(255,255,255,0.06)]">
                  <div className="w-10 h-10 rounded-lg bg-[#FF6A00]/10 flex items-center justify-center text-[#FF6A00]">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <span className="text-xs text-[#8E8E98] block">Location</span>
                    <span className="text-sm font-semibold text-[#F5F5F5]">
                      India (Open to Hybrid / Remote)
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-3.5 rounded-lg bg-[#111114] border border-[rgba(255,255,255,0.06)]">
                  <div className="w-10 h-10 rounded-lg bg-[#FF6A00]/10 flex items-center justify-center text-[#FF6A00]">
                    <Clock size={18} />
                  </div>
                  <div>
                    <span className="text-xs text-[#8E8E98] block">Response Time</span>
                    <span className="text-sm font-semibold text-[#F5F5F5]">
                      Typically within 24 hours
                    </span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-[rgba(255,255,255,0.06)]">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#757580] block mb-3">
                  Professional Profiles:
                </span>
                <SocialLinks
                  githubUrl={profileData.githubUrl}
                  linkedinUrl={profileData.linkedinUrl}
                  email={profileData.email}
                />
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-8 rounded-xl bg-[#17171B] border border-[rgba(255,255,255,0.08)] shadow-xl">
              {status === "success" ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-[#064E3B]/40 border border-[#059669]/50 mx-auto flex items-center justify-center text-[#34D399]">
                    <CheckCircle2 size={32} />
                  </div>
                  <h3 className="text-2xl font-bold text-[#F5F5F5]">
                    Message Sent!
                  </h3>
                  <p className="text-[#B8B8BE] max-w-md mx-auto text-sm leading-relaxed">
                    {serverMessage}
                  </p>
                  <div className="pt-4">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setStatus("idle")}
                    >
                      Send Another Message
                    </Button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  {status === "error" && (
                    <div className="p-4 rounded-lg bg-red-950/40 border border-red-500/40 text-red-200 text-sm flex items-start gap-3">
                      <AlertCircle size={18} className="text-red-400 shrink-0 mt-0.5" />
                      <div>
                        <p className="font-semibold">Submission Issue</p>
                        <p className="mt-1 text-xs text-red-300">{serverMessage}</p>
                      </div>
                    </div>
                  )}

                  {/* Honeypot hidden input */}
                  <div className="hidden" aria-hidden="true">
                    <label htmlFor="website_company">Do not fill this</label>
                    <input
                      type="text"
                      id="website_company"
                      name="website_company"
                      tabIndex={-1}
                      autoComplete="off"
                      value={formData.website_company}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {/* Name Field */}
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-xs font-semibold uppercase tracking-wider text-[#F5F5F5] mb-2"
                      >
                        Your Name <span className="text-[#FF6A00]">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g. Rahul Sharma"
                        className={`w-full px-4 py-3 rounded-lg bg-[#111114] border text-[#F5F5F5] placeholder-[#555562] text-sm focus:outline-none transition-colors ${
                          fieldErrors.name
                            ? "border-red-500 focus:border-red-400"
                            : "border-[rgba(255,255,255,0.1)] focus:border-[#FF6A00]"
                        }`}
                      />
                      {fieldErrors.name && (
                        <p className="mt-1 text-xs text-red-400">
                          {fieldErrors.name}
                        </p>
                      )}
                    </div>

                    {/* Email Field */}
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-xs font-semibold uppercase tracking-wider text-[#F5F5F5] mb-2"
                      >
                        Email Address <span className="text-[#FF6A00]">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="name@company.com"
                        className={`w-full px-4 py-3 rounded-lg bg-[#111114] border text-[#F5F5F5] placeholder-[#555562] text-sm focus:outline-none transition-colors ${
                          fieldErrors.email
                            ? "border-red-500 focus:border-red-400"
                            : "border-[rgba(255,255,255,0.1)] focus:border-[#FF6A00]"
                        }`}
                      />
                      {fieldErrors.email && (
                        <p className="mt-1 text-xs text-red-400">
                          {fieldErrors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Subject Field */}
                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-xs font-semibold uppercase tracking-wider text-[#F5F5F5] mb-2"
                    >
                      Subject / Topic
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="e.g. Systems Engineering Role / Infrastructure Inquiry"
                      className={`w-full px-4 py-3 rounded-lg bg-[#111114] border text-[#F5F5F5] placeholder-[#555562] text-sm focus:outline-none transition-colors ${
                        fieldErrors.subject
                          ? "border-red-500 focus:border-red-400"
                          : "border-[rgba(255,255,255,0.1)] focus:border-[#FF6A00]"
                      }`}
                    />
                    {fieldErrors.subject && (
                      <p className="mt-1 text-xs text-red-400">
                        {fieldErrors.subject}
                      </p>
                    )}
                  </div>

                  {/* Message Field */}
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-xs font-semibold uppercase tracking-wider text-[#F5F5F5] mb-2"
                    >
                      Your Message <span className="text-[#FF6A00]">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Share project details, role description, or questions..."
                      className={`w-full px-4 py-3 rounded-lg bg-[#111114] border text-[#F5F5F5] placeholder-[#555562] text-sm focus:outline-none transition-colors resize-y ${
                        fieldErrors.message
                          ? "border-red-500 focus:border-red-400"
                          : "border-[rgba(255,255,255,0.1)] focus:border-[#FF6A00]"
                      }`}
                    />
                    {fieldErrors.message && (
                      <p className="mt-1 text-xs text-red-400">
                        {fieldErrors.message}
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <Button
                      type="submit"
                      variant="primary"
                      size="lg"
                      disabled={status === "submitting"}
                      icon={
                        status === "submitting" ? (
                          <Loader2 size={18} className="animate-spin" />
                        ) : (
                          <Send size={18} />
                        )
                      }
                      iconPosition="right"
                      className="w-full sm:w-auto"
                    >
                      {status === "submitting" ? "Sending Message..." : "Send Message"}
                    </Button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

