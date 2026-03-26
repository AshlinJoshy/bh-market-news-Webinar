"use client"

import { useState } from "react"
import { Calendar, Clock, MapPin, Users, TrendingUp, Building, CheckCircle, ArrowUp, TrendingDown, BarChart2, ChevronDown, ChevronUp } from "lucide-react"

type Lang = "en" | "ar"

const t = {
  en: {
    dir: "ltr" as const,
    font: "font-sans",
    headerTagline: "Dubai market news",
    heroLabel: "Exclusive webinar",
    heroTitle: "Dubai Property Market Update",
    heroSubtitle: "Insights from the people who\u2019ve experienced every cycle",
    heroDesc:
      "Join our webinar to find the latest market signals and get experienced guidance that matters in a changing market.",
    date: "Thursday, 2nd April 2026",
    time: "10:00 AM \u2013 10:30 AM (GMT +4)",
    online: "Live webinar and Q&A",
    stat1Value: "250k+",
    stat1Label: "transactions",
    stat2Value: "300+",
    stat2Label: "specialists",
    stat3Value: "40 years",
    stat3Label: "of experience",
    formTitle: "Reserve your spot",
    formSubtitle: "Limited seats available.",
    nameLabel: "Name",
    namePlaceholder: "John Smith",
    emailLabel: "Email address",
    emailPlaceholder: "john@example.com",
    phoneLabel: "Phone number",
    phonePlaceholder: "+971 50 123 4567",
    checkboxText:
      "By registering, you agree to receive market updates from betterhomes.",
    submitBtn: "Register now",
    submittingBtn: "Registering...",
    successTitle: "You\u2019re registered",
    successDesc: "Check your email for the webinar link and calendar invite.",
    previewTitle: "A glimpse of what we\u2019ll cover",
    previewSubtitle:
      "These numbers form part of the broader market picture our team monitors daily.",
    metrics: [
      { value: "+9.1k", label: "Overall transactions" },
      { value: "+12.5%", label: "betterhomes transactions (week-on-week)" },
      { value: "+3.2k", label: "Total tenant enquiries" },
      { value: "+3.8k", label: "Total buyer enquiries" },
      { value: "-18%", label: "Website traffic" },
    ],
    agendaTitle: "Agenda",
    agendaColTime: "Time (mins)",
    agendaColSegment: "Segment",
    agendaRows: [
      ["0:00 \u2013 2:00", "Introductions"],
      ["2:00 \u2013 7:00", "Market overview"],
      ["7:00 \u2013 15:00", "Market reality & insights"],
      ["15:00 \u2013 23:00", "Live Q&A"],
      ["23:00 \u2013 30:00", "Key takeaways"],
    ],
    speakers: [
      {
        initials: "LH",
        name: "Louis Harding",
        role: "CEO, betterhomes",
        tags: ["Market leadership", "Strategic vision"],
      },
      {
        initials: "RS",
        name: "Rupert Simmonds",
        role: "Director of leasing, betterhomes",
        tags: ["Rental market", "Leasing strategy"],
      },
    ],
    faqTitle: "FAQs",
    faqs: [
      {
        question:
          "If things escalate further, what\u2019s the worst-case scenario for property values?",
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
    ],
    ctaTitle: "Don\u2019t miss this opportunity",
    ctaDesc:
      "Get the insights you need to make confident property decisions in Dubai.",
    ctaBtn: "Register now",
    footerEstablished: "| Established 1986",
    footerTagline: "Experience matters. 40 years of Dubai real estate expertise.",
  },
  ar: {
    dir: "rtl" as const,
    font: "font-arabic",
    headerTagline: "أخبار سوق دبي العقاري",
    heroLabel: "ندوة حصرية عبر الإنترنت",
    heroTitle: "تحديث سوق العقارات في دبي",
    heroSubtitle: "رؤى من أشخاص عايشوا كل دورة في السوق",
    heroDesc:
      "انضم إلى ندوتنا عبر الإنترنت لاكتشاف أحدث مؤشرات السوق والحصول على إرشادات من خبراء تساعدك على اتخاذ قرارات صحيحة في سوق متغير.",
    date: "الخميس، 2 أبريل 2026",
    time: "10:00 صباحًا – 10:30 صباحًا (GMT+4)",
    online: "ندوة مباشرة وأسئلة وأجوبة",
    stat1Value: "+250 ألف",
    stat1Label: "معاملة",
    stat2Value: "+300",
    stat2Label: "خبير متخصص",
    stat3Value: "40 عامًا",
    stat3Label: "من الخبرة",
    formTitle: "احجز مقعدك الآن",
    formSubtitle: "المقاعد محدودة.",
    nameLabel: "الاسم",
    namePlaceholder: "جون سميث",
    emailLabel: "البريد الإلكتروني",
    emailPlaceholder: "john@example.com",
    phoneLabel: "رقم الهاتف",
    phonePlaceholder: "+971 50 123 4567",
    checkboxText:
      "بالتسجيل، فإنك توافق على تلقي تحديثات السوق من betterhomes.",
    submitBtn: "سجّل الآن",
    submittingBtn: "جارٍ التسجيل...",
    successTitle: "تم تسجيلك",
    successDesc: "تحقق من بريدك الإلكتروني للحصول على رابط الندوة ودعوة التقويم.",
    previewTitle: "نظرة سريعة على ما سنغطيه",
    previewSubtitle:
      "تشكل هذه الأرقام جزءًا من الصورة الأشمل للسوق التي يراقبها فريقنا يوميًا:",
    metrics: [
      { value: "+9.1 ألف", label: "إجمالي المعاملات" },
      { value: "+12.5%", label: "معاملات betterhomes (أسبوعًا بعد أسبوع)" },
      { value: "+3.2 ألف", label: "إجمالي استفسارات المستأجرين" },
      { value: "+3.8 ألف", label: "إجمالي استفسارات المشترين" },
      { value: "-18%", label: "حركة المرور على الموقع" },
    ],
    agendaTitle: "جدول الأعمال",
    agendaColTime: "الوقت (دقيقة)",
    agendaColSegment: "الفقرة",
    agendaRows: [
      ["0:00 – 2:00", "المقدمات"],
      ["2:00 – 7:00", "نظرة عامة على السوق"],
      ["7:00 – 15:00", "واقع السوق والتحليلات"],
      ["15:00 – 23:00", "أسئلة وأجوبة مباشرة"],
      ["23:00 – 30:00", "أهم النقاط والتوصيات"],
    ],
    speakers: [
      {
        initials: "LH",
        name: "لويس هاردينغ",
        role: "الرئيس التنفيذي، betterhomes",
        tags: ["القيادة السوقية", "الرؤية الاستراتيجية"],
      },
      {
        initials: "RS",
        name: "روبرت سيموندز",
        role: "مدير قسم التأجير، betterhomes",
        tags: ["سوق الإيجارات", "استراتيجيات التأجير"],
      },
    ],
    faqTitle: "الأسئلة الشائعة",
    faqs: [
      {
        question: "إذا تصاعدت الأمور أكثر، ما هو أسوأ سيناريو محتمل لأسعار العقارات؟",
        answer:
          "لا يزال من السابق لأوانه الحديث عن ضائقة واسعة النطاق أو تصحيح كبير على مستوى السوق. إذا تعمق عدم اليقين، قد تتعرض بعض أجزاء السوق لضغوط على الأسعار مع تزايد انتقائية المشترين. في الوقت الحالي، الاتجاه الأوضح هو إبطاء عملية اتخاذ القرار، لا تجمد النشاط أو انخفاض حاد في القيم.",
      },
      {
        question: "هل الوقت الحالي مناسب لشراء عقار في دبي؟",
        answer:
          "تواصل دبي جذب الاهتمام على المدى الطويل، مدعومةً باستقرارها وارتباطها العالمي ورؤيتها بعيدة المدى. يتحرك المشترون بحذر أكبر، لكن الطلب لا يزال نشطًا والثقة في المدينة قائمة. في هذه المرحلة، يُظهر السوق انتقائية وتسعيرًا أكثر تحفظًا، لا علامات على انخفاض كبير على مستوى السوق.",
      },
      {
        question: "هل يشهد سوق العقارات في دبي تباطؤًا؟",
        answer:
          "السوق أهدأ، لكنه لم يتوقف. لا يزال المشترون والبائعون والمستأجرون والملاك نشطين، وتُظهر أحدث بيانات betterhomes ارتفاع طلب المشترين بنسبة 38٪ أسبوعًا بعد أسبوع بعد فترة أهدأ. على مدار العقود الأربعة الماضية، واصلت دبي التحرك عبر حالات عدم اليقين العالمية والإقليمية، مع انتعاش مدفوع بالطلب طويل الأمد والثقة.",
      },
    ],
    ctaTitle: "لا تفوّت هذه الفرصة",
    ctaDesc:
      "احصل على المعلومات التي تحتاجها لاتخاذ قرارات عقارية واثقة في دبي.",
    ctaBtn: "سجّل الآن",
    footerEstablished: "| تأسست عام 1986",
    footerTagline: "الخبرة تصنع الفرق — 40 عامًا من الخبرة في سوق العقارات في دبي",
  },
}

const metricIcons = [TrendingUp, BarChart2, Building, Users, TrendingDown]

// Tag colour pairs cycling through brand palette (bg, text)
const TAG_STYLES = [
  { bg: "#1F343F", text: "#EDE8E4" }, // slate blue / mist
  { bg: "#2C537A", text: "#EDE8E4" }, // denim blue / mist
  { bg: "#7BA0B2", text: "#1F343F" }, // powder blue / slate
  { bg: "#D9B9A0", text: "#1F343F" }, // sand / slate
]

export default function WebinarPage() {
  const [lang, setLang] = useState<Lang>("en")
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [agreedToUpdates, setAgreedToUpdates] = useState(false)
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const c = t[lang]
  const isRTL = c.dir === "rtl"

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

  const handleLangSwitch = (newLang: Lang) => {
    setLang(newLang)
    setOpenFaq(null)
  }

  return (
    <div className={`min-h-screen bg-[#EDE8E4] ${c.font}`} dir={c.dir}>
      {/* Header */}
      <header className="bg-[#1F343F] text-white py-4 px-6">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <span className="text-2xl font-bold">betterhomes</span>
          <div className="flex items-center gap-4">
            <span className="text-sm text-[#7BA0B2]">{c.headerTagline}</span>
            {/* Language Toggle */}
            <div className="flex items-center bg-[#2C537A] rounded-full p-1 gap-1">
              <button
                onClick={() => handleLangSwitch("en")}
                className={`px-3 py-1 rounded-full text-sm font-semibold transition-colors ${
                  lang === "en"
                    ? "bg-white text-[#1F343F]"
                    : "text-[#7BA0B2] hover:text-white"
                }`}
              >
                EN
              </button>
              <button
                onClick={() => handleLangSwitch("ar")}
                className={`px-3 py-1 rounded-full text-sm font-semibold transition-colors ${
                  lang === "ar"
                    ? "bg-white text-[#1F343F]"
                    : "text-[#7BA0B2] hover:text-white"
                }`}
              >
                AR
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Content */}
            <div>
              <p className="text-[#2C537A] font-medium mb-4">{c.heroLabel}</p>
              <h1 className="text-4xl lg:text-5xl font-bold text-[#1F343F] mb-3 leading-tight">
                {c.heroTitle}
              </h1>
              <p className="text-xl font-semibold text-[#2C537A] mb-5 leading-snug">
                {c.heroSubtitle}
              </p>
              <p className="text-lg text-[#7BA0B2] mb-8 leading-relaxed">
                {c.heroDesc}
              </p>

              {/* Event Details */}
              <div className="flex flex-wrap gap-6 mb-8">
                <div className={`flex items-center gap-2 text-[#1F343F] ${isRTL ? "flex-row-reverse" : ""}`}>
                  <Calendar className="w-5 h-5 text-[#2C537A] flex-shrink-0" />
                  <span>{c.date}</span>
                </div>
                <div className={`flex items-center gap-2 text-[#1F343F] ${isRTL ? "flex-row-reverse" : ""}`}>
                  <Clock className="w-5 h-5 text-[#2C537A] flex-shrink-0" />
                  <span>{c.time}</span>
                </div>
                <div className={`flex items-center gap-2 text-[#1F343F] ${isRTL ? "flex-row-reverse" : ""}`}>
                  <MapPin className="w-5 h-5 text-[#2C537A] flex-shrink-0" />
                  <span>{c.online}</span>
                </div>
              </div>

              {/* Trust Indicators */}
              <div className="flex flex-wrap gap-8 py-6 border-t border-[#D9B9A0]">
                <div>
                  <p className="text-3xl font-bold text-[#1F343F]">{c.stat1Value}</p>
                  <p className="text-sm text-[#7BA0B2]">{c.stat1Label}</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-[#1F343F]">{c.stat2Value}</p>
                  <p className="text-sm text-[#7BA0B2]">{c.stat2Label}</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-[#1F343F]">{c.stat3Value}</p>
                  <p className="text-sm text-[#7BA0B2]">{c.stat3Label}</p>
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
                  <h3 className="text-2xl font-bold text-[#1F343F] mb-2">{c.successTitle}</h3>
                  <p className="text-[#7BA0B2]">{c.successDesc}</p>
                </div>
              ) : (
                <>
                  <h2 className="text-2xl font-bold text-[#1F343F] mb-2">{c.formTitle}</h2>
                  <p className="text-[#7BA0B2] mb-6">{c.formSubtitle}</p>

                  <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-[#1F343F] mb-1">
                        {c.nameLabel}
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-[#D9B9A0] rounded-md focus:outline-none focus:ring-2 focus:ring-[#2C537A]"
                        placeholder={c.namePlaceholder}
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-[#1F343F] mb-1">
                        {c.emailLabel}
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-[#D9B9A0] rounded-md focus:outline-none focus:ring-2 focus:ring-[#2C537A]"
                        placeholder={c.emailPlaceholder}
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-[#1F343F] mb-1">
                        {c.phoneLabel}
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-[#D9B9A0] rounded-md focus:outline-none focus:ring-2 focus:ring-[#2C537A]"
                        placeholder={c.phonePlaceholder}
                      />
                    </div>

                    <label className={`flex items-start gap-3 cursor-pointer mt-1 ${isRTL ? "flex-row-reverse" : ""}`}>
                      <input
                        type="checkbox"
                        checked={agreedToUpdates}
                        onChange={(e) => setAgreedToUpdates(e.target.checked)}
                        required
                        className="mt-0.5 w-4 h-4 accent-[#2C537A] flex-shrink-0"
                      />
                      <span className="text-xs text-[#7BA0B2]">
                        {c.checkboxText}
                      </span>
                    </label>

                    <button
                      type="submit"
                      disabled={isLoading}
                      className="w-full bg-[#FF787A] hover:bg-[#e66b6d] text-white font-semibold py-4 px-6 rounded-md transition-colors mt-2 disabled:opacity-70"
                    >
                      {isLoading ? c.submittingBtn : c.submitBtn}
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
            {c.previewTitle}
          </h2>
          <p className="text-[#7BA0B2] text-center mb-12 max-w-2xl mx-auto">
            {c.previewSubtitle}
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {c.metrics.map((m, i) => {
              const Icon = metricIcons[i]
              return (
                <div key={i} className="bg-[#2C537A] rounded-lg p-6 text-center">
                  <Icon className="w-10 h-10 text-[#FF787A] mx-auto mb-4" />
                  <p className="text-2xl font-bold text-white mb-1">{m.value}</p>
                  <p className="text-[#7BA0B2] text-sm">{m.label}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Agenda + Speakers Section */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-[#1F343F] text-center mb-12">{c.agendaTitle}</h2>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Agenda Table */}
            <div className="bg-white rounded-lg overflow-hidden shadow-sm">
              <div className="grid grid-cols-2 bg-[#1F343F] text-white font-semibold text-sm">
                <div className="px-6 py-3">{c.agendaColTime}</div>
                <div className="px-6 py-3">{c.agendaColSegment}</div>
              </div>
              {c.agendaRows.map(([time, segment], index) => (
                <div
                  key={index}
                  className={`grid grid-cols-2 text-sm ${index % 2 === 0 ? "bg-[#EDE8E4]" : "bg-white"}`}
                >
                  <div className="px-6 py-4 text-[#2C537A] font-medium">{time}</div>
                  <div className="px-6 py-4 text-[#1F343F]">{segment}</div>
                </div>
              ))}
            </div>

            {/* Speakers */}
            <div className="flex flex-col gap-8">
              {c.speakers.map((speaker, i) => (
                <div key={i} className={`flex items-start gap-5 ${isRTL ? "flex-row-reverse" : ""}`}>
                  <div className="w-20 h-20 bg-[#1F343F] rounded-full flex items-center justify-center flex-shrink-0 shadow-md">
                    <span className="text-2xl font-bold text-[#EDE8E4]">{speaker.initials}</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#1F343F]">{speaker.name}</h3>
                    <p className="text-[#2C537A] font-medium mb-3">{speaker.role}</p>
                    <div className={`flex gap-2 flex-wrap ${isRTL ? "justify-end" : ""}`}>
                      {speaker.tags.map((tag, j) => {
                        const style = TAG_STYLES[(i * 2 + j) % TAG_STYLES.length]
                        return (
                          <span
                            key={j}
                            style={{ backgroundColor: style.bg, color: style.text }}
                            className="text-xs font-semibold px-4 py-1.5 rounded-full shadow-sm"
                          >
                            {tag}
                          </span>
                        )
                      })}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-[#1F343F] text-center mb-12">{c.faqTitle}</h2>

          <div className="flex flex-col gap-4">
            {c.faqs.map((faq, index) => (
              <div key={index} className="border border-[#D9B9A0] rounded-lg overflow-hidden">
                <button
                  type="button"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className={`w-full flex items-center justify-between px-6 py-5 bg-[#EDE8E4] hover:bg-[#D9B9A0] transition-colors ${isRTL ? "flex-row-reverse text-right" : "text-left"}`}
                >
                  <span className={`font-semibold text-[#1F343F] ${isRTL ? "pl-4" : "pr-4"}`}>{faq.question}</span>
                  {openFaq === index ? (
                    <ChevronUp className="w-5 h-5 text-[#2C537A] flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-[#2C537A] flex-shrink-0" />
                  )}
                </button>
                {openFaq === index && (
                  <div className="px-6 py-5 text-[#7BA0B2] leading-relaxed">
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
            {c.ctaTitle}
          </h2>
          <p className="text-[#7BA0B2] mb-8">
            {c.ctaDesc}
          </p>
          <a
            href="#register"
            className="inline-flex items-center gap-2 bg-[#FF787A] hover:bg-[#e66b6d] text-white font-semibold py-4 px-8 rounded-md transition-colors"
          >
            {c.ctaBtn}
            <ArrowUp className="w-4 h-4" />
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1F343F] text-[#7BA0B2] py-8 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="text-white font-bold">betterhomes</span>
            <span className="text-sm">{c.footerEstablished}</span>
          </div>
          <p className="text-sm">{c.footerTagline}</p>
        </div>
      </footer>
    </div>
  )
}
