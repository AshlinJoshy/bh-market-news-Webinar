"use client"

import { useState } from "react"
import { Calendar, Clock, MapPin, Users, TrendingUp, Building, CheckCircle, ArrowUp } from "lucide-react"

export default function WebinarPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

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
                Skip the headlines. Get the real story from experts with 39 years of experience in Dubai real estate. 
                Understand what the numbers mean for you.
              </p>

              {/* Event Details */}
              <div className="flex flex-wrap gap-6 mb-8">
                <div className="flex items-center gap-2 text-[#1F343F]">
                  <Calendar className="w-5 h-5 text-[#2C537A]" />
                  <span>Thursday, April 10, 2025</span>
                </div>
                <div className="flex items-center gap-2 text-[#1F343F]">
                  <Clock className="w-5 h-5 text-[#2C537A]" />
                  <span>6:00 PM GST</span>
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
                  <p className="text-3xl font-bold text-[#1F343F]">2,500+</p>
                  <p className="text-sm text-[#5A6B73]">Positive reviews</p>
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
                  <p className="text-[#5A6B73] mb-6">Free registration. Limited seats available.</p>
                  
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

                    <button
                      type="submit"
                      disabled={isLoading}
                      className="w-full bg-[#FF787A] hover:bg-[#e66b6d] text-white font-semibold py-4 px-6 rounded-md transition-colors mt-2 disabled:opacity-70"
                    >
                      {isLoading ? "Registering..." : "Register now"}
                    </button>

                    <p className="text-xs text-center text-[#5A6B73] mt-2">
                      By registering, you agree to receive market updates from betterhomes.
                    </p>
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
            Real data. Real insights. No fluff.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-[#2C537A] rounded-lg p-6 text-center">
              <TrendingUp className="w-10 h-10 text-[#FF787A] mx-auto mb-4" />
              <p className="text-xl font-bold text-white mb-2">Week on week</p>
              <p className="text-[#7BA0B2]">Property price changes</p>
            </div>
            <div className="bg-[#2C537A] rounded-lg p-6 text-center">
              <Building className="w-10 h-10 text-[#FF787A] mx-auto mb-4" />
              <p className="text-xl font-bold text-white mb-2">March 2026</p>
              <p className="text-[#7BA0B2]">Transaction analysis</p>
            </div>
            <div className="bg-[#2C537A] rounded-lg p-6 text-center">
              <Users className="w-10 h-10 text-[#FF787A] mx-auto mb-4" />
              <p className="text-xl font-bold text-white mb-2">Market impact</p>
              <p className="text-[#7BA0B2]">Current situation effects</p>
            </div>
            <div className="bg-[#2C537A] rounded-lg p-6 text-center">
              <ArrowUp className="w-10 h-10 text-[#FF787A] mx-auto mb-4" />
              <p className="text-xl font-bold text-white mb-2">Stabilisation</p>
              <p className="text-[#7BA0B2]">How the market is picking up</p>
            </div>
          </div>
        </div>
      </section>

      {/* What You'll Learn */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-[#1F343F] text-center mb-12">
            What you&apos;ll walk away with
          </h2>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              "Buyer, seller and rental market trends and what they mean for investors",
              "Current market conditions",
              "Which areas have been seeing the most changes",
              "Q&A with our leadership team",
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-3 bg-white p-4 rounded-lg">
                <div className="w-6 h-6 bg-[#1F343F] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-white text-sm font-medium">{index + 1}</span>
                </div>
                <p className="text-[#1F343F]">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Speakers Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-[#1F343F] text-center mb-4">
            Your hosts
          </h2>
          <p className="text-[#5A6B73] text-center mb-12 max-w-2xl mx-auto">
            Learn directly from the people who know Dubai real estate inside and out.
          </p>

          <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="w-32 h-32 bg-[#EDE8E4] rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-4xl font-bold text-[#2C537A]">LH</span>
              </div>
              <h3 className="text-xl font-bold text-[#1F343F]">Louis Harding</h3>
              <p className="text-[#2C537A] font-medium">CEO, betterhomes</p>
              <div className="flex justify-center gap-2 mt-3 flex-wrap">
                <span className="bg-[#EDE8E4] text-[#1F343F] text-xs px-3 py-1 rounded-full">Market leadership</span>
                <span className="bg-[#EDE8E4] text-[#1F343F] text-xs px-3 py-1 rounded-full">Strategic vision</span>
              </div>
            </div>

            <div className="text-center">
              <div className="w-32 h-32 bg-[#EDE8E4] rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-4xl font-bold text-[#2C537A]">RS</span>
              </div>
              <h3 className="text-xl font-bold text-[#1F343F]">Rupert Simmonds</h3>
              <p className="text-[#2C537A] font-medium">Director of leasing, betterhomes</p>
              <div className="flex justify-center gap-2 mt-3 flex-wrap">
                <span className="bg-[#EDE8E4] text-[#1F343F] text-xs px-3 py-1 rounded-full">Rental market</span>
                <span className="bg-[#EDE8E4] text-[#1F343F] text-xs px-3 py-1 rounded-full">Leasing strategy</span>
              </div>
            </div>
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
            Register now - it&apos;s free
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
          <p className="text-sm">Experience matters. 39 years of Dubai real estate expertise.</p>
        </div>
      </footer>
    </div>
  )
}
