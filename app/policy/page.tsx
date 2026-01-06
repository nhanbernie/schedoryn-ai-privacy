"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { policyContent, Language } from "./content";

export default function PolicyPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const lang = (searchParams.get("lang") as Language) || "en";
  const content = policyContent[lang];

  const switchLanguage = (newLang: Language) => {
    router.push(`/policy?lang=${newLang}`);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        {/* Header */}
        <header className="relative text-center py-16 px-6 bg-[#FFAD9F] opacity-90">
          {/* Language Toggle */}
          <div className="absolute top-4 right-4 flex gap-2">
            <button
              onClick={() => switchLanguage("en")}
              className={`px-4 py-2 rounded font-medium transition-colors ${
                lang === "en"
                  ? "bg-white text-[#FFAD9F]"
                  : "bg-white/20 text-white hover:bg-white/30"
              }`}
            >
              EN
            </button>
            <button
              onClick={() => switchLanguage("vi")}
              className={`px-4 py-2 rounded font-medium transition-colors ${
                lang === "vi"
                  ? "bg-white text-[#FFAD9F]"
                  : "bg-white/20 text-white hover:bg-white/30"
              }`}
            >
              VI
            </button>
          </div>

          <div className="mb-3">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-1">
              {content.appName}
            </h2>
            <div className="h-0.5 w-16 bg-white/60 mx-auto"></div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            {content.title}
          </h1>
          <div className="flex items-center justify-center gap-3">
            <div className="h-px w-12 bg-white/40"></div>
            <p className="text-base text-white/90 font-medium">
              {content.effectiveDate}
            </p>
            <div className="h-px w-12 bg-white/40"></div>
          </div>
        </header>

        {/* Content */}
        <main className="px-6 sm:px-10 py-10">
          {/* Introduction */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-5 pb-3 border-b-2 border-gray-200">
              {content.introduction.title}
            </h2>
            {content.introduction.content.map((paragraph, idx) => (
              <p
                key={idx}
                className="text-lg leading-relaxed text-slate-700 mb-4"
              >
                {paragraph}
              </p>
            ))}
          </section>

          {/* Information We Collect */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-5 pb-3 border-b-2 border-gray-200">
              {content.informationCollect.title}
            </h2>
            <p className="text-lg leading-relaxed text-slate-700 mb-6">
              {content.informationCollect.intro}
            </p>

            {content.informationCollect.sections.map((section, idx) => (
              <div key={idx}>
                <h3 className="text-2xl font-semibold text-slate-800 mb-4 mt-8">
                  {section.title}
                </h3>
                <p className="text-lg leading-relaxed text-slate-700 mb-3">
                  {section.content}
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4 text-lg text-slate-700 mb-6">
                  {section.items.map((item, itemIdx) => (
                    <li key={itemIdx} className="leading-relaxed">
                      {item}
                    </li>
                  ))}
                </ul>
                {section.note && (
                  <p className="text-lg leading-relaxed text-slate-700 mb-6">
                    {section.note}
                  </p>
                )}
              </div>
            ))}
          </section>

          {/* How We Use Your Information */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-5 pb-3 border-b-2 border-gray-200">
              {content.howWeUse.title}
            </h2>
            <p className="text-lg leading-relaxed text-slate-700 mb-4">
              {content.howWeUse.intro}
            </p>
            <ul className="list-disc list-inside space-y-3 ml-4 text-lg text-slate-700">
              {content.howWeUse.items.map((item, idx) => (
                <li key={idx} className="leading-relaxed">
                  <strong className="text-slate-900 font-semibold">
                    {item.label}
                  </strong>{" "}
                  {item.text}
                </li>
              ))}
            </ul>
          </section>

          {/* Third-Party Services */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-5 pb-3 border-b-2 border-gray-200">
              {content.thirdParty.title}
            </h2>
            <p className="text-lg leading-relaxed text-slate-700 mb-6">
              {content.thirdParty.intro}
            </p>

            {content.thirdParty.services.map((service, idx) => (
              <div
                key={idx}
                className="bg-white border-l-4 border-[#FFAD9F] rounded p-6 mb-5"
              >
                <h3 className="text-xl font-semibold text-slate-900 mb-3">
                  {service.name}
                </h3>
                <p className="text-base leading-relaxed text-slate-700">
                  {service.description}
                  {service.link && (
                    <>
                      {" "}
                      <a
                        href={service.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#E95D77] hover:text-[#d14a64] font-medium underline decoration-1 underline-offset-2"
                      >
                        {service.link}
                      </a>
                    </>
                  )}
                </p>
              </div>
            ))}

            <div className="bg-white border-l-4 border-[#F58601] rounded p-5 mt-6">
              <p className="text-base leading-relaxed text-slate-800">
                <strong className="text-slate-900 font-semibold">
                  {lang === "en" ? "Note:" : "Lưu ý:"}
                </strong>{" "}
                {content.thirdParty.note}
              </p>
            </div>
          </section>

          {/* Data Storage and Security */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-5 pb-3 border-b-2 border-gray-200">
              {content.dataSecurity.title}
            </h2>
            <p className="text-lg leading-relaxed text-slate-700 mb-4">
              {content.dataSecurity.intro}
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4 text-lg text-slate-700 mb-4">
              {content.dataSecurity.items.map((item, idx) => (
                <li key={idx} className="leading-relaxed">
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-lg leading-relaxed text-slate-700">
              {content.dataSecurity.note}
            </p>
          </section>

          {/* Your Rights and Choices */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-5 pb-3 border-b-2 border-gray-200">
              {content.yourRights.title}
            </h2>
            <p className="text-lg leading-relaxed text-slate-700 mb-6">
              {content.yourRights.intro}
            </p>

            {content.yourRights.sections.map((section, idx) => (
              <div key={idx}>
                <h3 className="text-2xl font-semibold text-slate-800 mb-3 mt-6">
                  {section.title}
                </h3>
                <p className="text-lg leading-relaxed text-slate-700 mb-6">
                  {section.content}
                  {section.email && (
                    <>
                      {" "}
                      <a
                        href={`mailto:${section.email}`}
                        className="text-[#E95D77] hover:text-[#d14a64] font-medium underline decoration-1 underline-offset-2"
                      >
                        {section.email}
                      </a>
                      {section.suffix}
                    </>
                  )}
                </p>
              </div>
            ))}
          </section>

          {/* Data Retention */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-5 pb-3 border-b-2 border-gray-200">
              {content.dataRetention.title}
            </h2>
            <p className="text-lg leading-relaxed text-slate-700 mb-4">
              {content.dataRetention.intro}
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4 text-lg text-slate-700 mb-4">
              {content.dataRetention.items.map((item, idx) => (
                <li key={idx} className="leading-relaxed">
                  <strong className="text-slate-900 font-semibold">
                    {item.label}
                  </strong>{" "}
                  {item.text}
                </li>
              ))}
            </ul>
            <p className="text-lg leading-relaxed text-slate-700">
              {content.dataRetention.note}
            </p>
          </section>

          {/* Children's Privacy */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-5 pb-3 border-b-2 border-gray-200">
              {content.childrenPrivacy.title}
            </h2>
            <p className="text-lg leading-relaxed text-slate-700 mb-4">
              {content.childrenPrivacy.content[0]}
            </p>
            <p className="text-lg leading-relaxed text-slate-700">
              {content.childrenPrivacy.content[1]}{" "}
              <a
                href={`mailto:${content.childrenPrivacy.email}`}
                className="text-[#E95D77] hover:text-[#d14a64] font-medium underline decoration-1 underline-offset-2"
              >
                {content.childrenPrivacy.email}
              </a>
              {content.childrenPrivacy.content[2]}
            </p>
          </section>

          {/* International Data Transfers */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-5 pb-3 border-b-2 border-gray-200">
              {content.internationalTransfers.title}
            </h2>
            {content.internationalTransfers.content.map((paragraph, idx) => (
              <p
                key={idx}
                className="text-lg leading-relaxed text-slate-700 mb-4"
              >
                {paragraph}
              </p>
            ))}
          </section>

          {/* Changes to This Privacy Policy */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-5 pb-3 border-b-2 border-gray-200">
              {content.policyChanges.title}
            </h2>
            <p className="text-lg leading-relaxed text-slate-700 mb-4">
              {content.policyChanges.intro}
            </p>
            <ul className="list-disc list-inside space-y-2 ml-4 text-lg text-slate-700 mb-4">
              {content.policyChanges.items.map((item, idx) => (
                <li key={idx} className="leading-relaxed">
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-lg leading-relaxed text-slate-700">
              {content.policyChanges.note}
            </p>
          </section>

          {/* Contact Us */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-5 pb-3 border-b-2 border-gray-200">
              {content.contact.title}
            </h2>
            <p className="text-lg leading-relaxed text-slate-700 mb-5">
              {content.contact.intro}
            </p>
            <div className="bg-pink-50/30 border-l-4 border-[#FFAD9F] rounded p-6 mb-5">
              <p className="text-base text-slate-800 mb-2">
                <strong className="text-slate-900 font-semibold">Email:</strong>{" "}
                <a
                  href={`mailto:${content.contact.email}`}
                  className="text-[#E95D77] hover:text-[#d14a64] font-medium underline decoration-1 underline-offset-2"
                >
                  {content.contact.email}
                </a>
              </p>
              <p className="text-base text-slate-800">
                <strong className="text-slate-900 font-semibold">
                  {lang === "en" ? "App Name:" : "Tên Ứng Dụng:"}
                </strong>{" "}
                {content.contact.appName}
              </p>
            </div>
            <p className="text-lg leading-relaxed text-slate-700">
              {content.contact.response}
            </p>
          </section>

          {/* Google Play Compliance */}
          <section className="bg-teal-50/40 border-l-4 border-[#00C5A7] rounded p-6">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              {content.compliance.title}
            </h2>
            <p className="text-base leading-relaxed text-slate-800">
              {content.compliance.content}
            </p>
          </section>
        </main>

        {/* Footer */}
        <footer className="text-center py-8 px-6 border-t-2 border-gray-200 bg-gray-50">
          <p className="text-sm text-slate-600 mb-1">
            {content.footer.copyright}
          </p>
          <p className="text-sm text-slate-600">{content.footer.lastUpdated}</p>
        </footer>
      </div>
    </div>
  );
}
