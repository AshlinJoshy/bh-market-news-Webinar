"use client"

import { useState } from "react"
import { Calendar, Clock, MapPin, Users, TrendingUp, Building, CheckCircle, ArrowUp, TrendingDown, BarChart2, ChevronDown, ChevronUp } from "lucide-react"

export default function WebinarPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [agreedToUpdates, setAgreedToUpdates] = useState(false)
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setIsLoading(false)
    setIsSubmitted(true)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const faqs = [
    {
      question: "If things escalate further, what's the worst-case scenario for property values?",
      answer:
        "It is still too early to talk about widespread distress or a major market-wide correction. If uncertainty deepens, some parts of the market could come under pricing pressure as buyers become more selective. For now, the clearer trend is slower decision-making, not a freeze in activity or a sharp drop in values.",
    },
    {
      question: "Is now a good time to buy property in Dubai?",
      answer:
        "Dubai continues to attract long-term interest, supported by its stability, global connectivity and long-term vision. Buyers are moving more carefully, but demand remains active and confidence in the city is still there. At this stage, the market is showing selectivity and more measured pricing, not signs of a significant market-wide drop.",
    },
    {
      question: "Is the Dubai property market slowing down?",
      answer:
        "The market is quieter, but it has not stopped. Buyers, sellers, tenants and landlords are still active, with recent betterhomes data showing buyer demand rising 38% week-on-week after a softer spell. Over the past four decades, Dubai has continued to move through global and regional uncertainty, with recovery shaped by long-term demand and confidence.",
    },
  ]

  return (
    <div className="min-h-screen bg-[#EDE8E4]">
      {/* Header */}
      <header className="bg-[#1F343F] text-white py-4 px-6">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <span className="text-2xl font-bold">betterhomes</span>
          <span className="text-sm text-[#7BA0B2]">Dubai market news</span>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Content */}
            <div>
              <p className="text-[#2C537A] font-medium mb-4">Exclusive webinar</p>
              <h1 className="text-4xl lg:text-5xl font-bold text-[#1F343F] mb-6 leading-tight">
                Dubai property market: what&apos;s really happening
              </h1>
              <p className="text-lg text-[#5A6B73] mb-8 leading-relaxed">
                Join our webinar to find the latest market signals and get experienced guidance that matters in a changing market
              </p>

              {/* Event Details */}
              <div className="flex flex-wrap gap-6 mb-8">
                <div className="flex items-center gap-2 text-[#1F343F]">
                  <Calendar className="w-5 h-5 text-[#2C537A]" />
                  <span>Thursday, 2nd April 2026</span>
                </div>
                <div className="flex items-center gap-2 text-[#1F343F]">
                  <Clock className="w-5 h-5 text-[#2C537A]" />
                  <span>10:00 AM – 10:30 AM (GMT +4)</span>
                </div>
                <div className="flex items-center gap-2 text-[#1F343F]">
                  <MapPin className="w-5 h-5 text-[#2C537A]" />
                  <span>Online event</span>
                </div>
              </div>

              {/* Trust Indicators */}
              <div className="flex flex-wrap gap-8 py-6 border-t border-[#D9B9A0]">
                <div>
                  <p className="text-3xl font-bold text-[#1F343F]">250k+</p>
                  <p className="text-sm text-[#5A6B73]">Transactions</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-[#1F343F]">300+</p>
                  <p className="text-sm text-[#5A6B73]">Specialists</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-[#1F343F]">40 years</p>
                  <p className="text-sm text-[#5A6B73]">Of experience</p>
                </div>
              </div>
            </div>

            {/* Registration Form */}
            <div id="register" className="bg-white rounded-lg p-8 shadow-lg">
              {isSubmitted ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-[#1F343F] rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#1F343F] mb-2">You&apos;re registered</h3>
                  <p className="text-[#5A6B73]">Check your email for the webinar link and calendar invite.</p>
                </div>
              ) : (
                <>
                  <h2 className="text-2xl font-bold text-[#1F343F] mb-2">Reserve your spot</h2>
                  <p className="text-[#5A6B73] mb-6">Limited seats available.</p>

                  <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="firstName" className="block text-sm font-medium text-[#1F343F] mb-1">
                          First name
                        </label>
                        <input
                          type="text"
                          id="firstName"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-[#D9B9A0] rounded-md focus:outline-none focus:ring-2 focus:ring-[#2C537A]"
                          placeholder="John"
                        />
                      </div>
                      <div>
                        <label htmlFor="lastName" className="block text-sm font-medium text-[#1F343F] mb-1">
                          Last name
                        </label>
                        <input
                          type="text"
                          id="lastName"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-[#D9B9A0] rounded-md focus:outline-none focus:ring-2 focus:ring-[#2C537A]"
                          placeholder="Smith"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-[#1F343F] mb-1">
                        Email address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-[#D9B9A0] rounded-md focus:outline-none focus:ring-2 focus:ring-[#2C537A]"
                        placeholder="john@example.com"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-[#1F343F] mb-1">
                        Phone number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-[#D9B9A0] rounded-md focus:outline-none focus:ring-2 focus:ring-[#2C537A]"
                        placeholder="+971 50 123 4567"
                      />
                    </div>

                    <label className="flex items-start gap-3 cursor-pointer mt-1">
                      <input
                        type="checkbox"
                        checked={agreedToUpdates}
                        onChange={(e) => setAgreedToUpdates(e.target.checked)}
                        required
                        className="mt-0.5 w-4 h-4 accent-[#2C537A] flex-shrink-0"
                      />
                      <span className="text-xs text-[#5A6B73]">
                        By registering, you agree to receive market updates from betterhomes.
                      </span>
                    </label>

                    <button
                      type="submit"
                      disabled={isLoading}
                      className="w-full bg-[#FF787A] hover:bg-[#e66b6d] text-white font-semibold py-4 px-6 rounded-md transition-colors mt-2 disabled:opacity-70"
                    >
                      {isLoading ? "Registering..." : "Register now"}
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Market Preview Section */}
      <section className="py-16 px-6 bg-[#1F343F]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-4">
            A glimpse of what we&apos;ll cover
          </h2>
          <p className="text-[#7BA0B2] text-center mb-12 max-w-2xl mx-auto">
            These numbers form part of the broader market picture our team monitors daily.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
            <div className="bg-[#2C537A] rounded-lg p-6 text-center">
              <TrendingUp className="w-10 h-10 text-[#FF787A] mx-auto mb-4" />
              <p className="text-2xl font-bold text-white mb-1">+9.1k</p>
              <p className="text-[#7BA0B2] text-sm">Overall transactions</p>
            </div>
            <div className="bg-[#2C537A] rounded-lg p-6 text-center">
              <BarChart2 className="w-10 h-10 text-[#FF787A] mx-auto mb-4" />
              <p className="text-2xl font-bold text-white mb-1">+12.5%</p>
              <p className="text-[#7BA0B2] text-sm">betterhomes transactions (week-on-week)</p>
            </div>
            <div className="bg-[#2C537A] rounded-lg p-6 text-center">
              <Building className="w-10 h-10 text-[#FF787A] mx-auto mb-4" />
              <p className="text-2xl font-bold text-white mb-1">+3.2k</p>
              <p className="text-[#7BA0B2] text-sm">Total tenant enquiries</p>
            </div>
            <div className="bg-[#2C537A] rounded-lg p-6 text-center">
              <Users className="w-10 h-10 text-[#FF787A] mx-auto mb-4" />
              <p className="text-2xl font-bold text-white mb-1">+3.8k</p>
              <p className="text-[#7BA0B2] text-sm">Total buyer enquiries</p>
            </div>
            <div className="bg-[#2C537A] rounded-lg p-6 text-center">
              <TrendingDown className="w-10 h-10 text-[#FF787A] mx-auto mb-4" />
              <p className="text-2xl font-bold text-white mb-1">-18%</p>
              <p className="text-[#7BA0B2] text-sm">Website traffic</p>
            </div>
          </div>
        </div>
      </section>

      {/* Agenda + Speakers Section */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-[#1F343F] text-center mb-12">Agenda</h2>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Agenda Table */}
            <div className="bg-white rounded-lg overflow-hidden shadow-sm">
              <div className="grid grid-cols-2 bg-[#1F343F] text-white font-semibold text-sm">
                <div className="px-6 py-3">Time</div>
                <div className="px-6 py-3">Segment</div>
              </div>
              {[
                ["0:00 – 2:00", "Welcome & introductions"],
                ["2:00 – 7:00", "Context & market overview"],
                ["7:00 – 15:00", "Market reality & insights"],
                ["15:00 – 23:00", "Q&A"],
                ["23:00 – 30:00", "Key takeaways"],
              ].map(([time, segment], index) => (
                <div
                  key={index}
                  className={`grid grid-cols-2 text-sm ${index % 2 === 0 ? "bg-[#F7F4F1]" : "bg-white"}`}
                >
                  <div className="px-6 py-4 text-[#2C537A] font-medium whitespace-nowrap">{time}</div>
                  <div className="px-6 py-4 text-[#1F343F]">{segment}</div>
                </div>
              ))}
            </div>

            {/* Speakers */}
            <div className="flex flex-col gap-8">
              <div className="flex items-start gap-5">
                <div className="w-20 h-20 bg-[#EDE8E4] rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl font-bold text-[#2C537A]">LH</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#1F343F]">Louis Harding</h3>
                  <p className="text-[#2C537A] font-medium mb-3">CEO, betterhomes</p>
                  <div className="flex gap-2 flex-wrap">
                    <span className="bg-[#EDE8E4] text-[#1F343F] text-xs px-3 py-1 rounded-full">Market leadership</span>
                    <span className="bg-[#EDE8E4] text-[#1F343F] text-xs px-3 py-1 rounded-full">Strategic vision</span>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="w-20 h-20 bg-[#EDE8E4] rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-2xl font-bold text-[#2C537A]">RS</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#1F343F]">Rupert Simmonds</h3>
                  <p className="text-[#2C537A] font-medium mb-3">Director of leasing, betterhomes</p>
                  <div className="flex gap-2 flex-wrap">
                    <span className="bg-[#EDE8E4] text-[#1F343F] text-xs px-3 py-1 rounded-full">Rental market</span>
                    <span className="bg-[#EDE8E4] text-[#1F343F] text-xs px-3 py-1 rounded-full">Leasing strategy</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-[#1F343F] text-center mb-12">FAQs</h2>

          <div className="flex flex-col gap-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-[#D9B9A0] rounded-lg overflow-hidden">
                <button
                  type="button"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left bg-[#F7F4F1] hover:bg-[#EDE8E4] transition-colors"
                >
                  <span className="font-semibold text-[#1F343F] pr-4">{faq.question}</span>
                  {openFaq === index ? (
                    <ChevronUp className="w-5 h-5 text-[#2C537A] flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-[#2C537A] flex-shrink-0" />
                  )}
                </button>
                {openFaq === index && (
                  <div className="px-6 py-5 text-[#5A6B73] leading-relaxed">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-16 px-6 bg-[#2C537A]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Don&apos;t miss this opportunity
          </h2>
          <p className="text-[#7BA0B2] mb-8">
            Get the insights you need to make confident property decisions in Dubai.
          </p>
          <a
            href="#register"
            className="inline-flex items-center gap-2 bg-[#FF787A] hover:bg-[#e66b6d] text-white font-semibold py-4 px-8 rounded-md transition-colors"
          >
            Register now
            <ArrowUp className="w-4 h-4" />
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1F343F] text-[#7BA0B2] py-8 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="text-white font-bold">betterhomes</span>
            <span className="text-sm">| Established 1986</span>
          </div>
          <p className="text-sm">Experience matters. 40 years of Dubai real estate expertise.</p>
        </div>
      </footer>
    </div>
  )
}
