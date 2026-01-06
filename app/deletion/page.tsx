"use client";

export default function DeletionPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-3xl overflow-hidden">
        {/* Header */}
        <header className="relative text-center py-16 px-6 bg-[#FFAD9F] opacity-90">
          <div className="mb-3">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-1">
              Schedoryn
            </h2>
            <div className="h-0.5 w-16 bg-white/60 mx-auto"></div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            Account & Data Deletion
          </h1>
        </header>

        {/* Content */}
        <main className="px-6 sm:px-10 py-10">
          {/* Request Deletion Section */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-5 pb-3 border-b-2 border-gray-200">
              Request Account Deletion
            </h2>
            <p className="text-lg leading-relaxed text-slate-700 mb-6">
              To request deletion of your Schedoryn account and associated data,
              please contact:
            </p>
            <div className="bg-pink-50/30 border-l-4 border-[#FFAD9F] rounded p-6 mb-6">
              <p className="text-base text-slate-800 mb-3">
                <strong className="text-slate-900 font-semibold">Email:</strong>{" "}
                <a
                  href="mailto:schedoryn@gmail.com"
                  className="text-[#E95D77] hover:text-[#d14a64] font-medium underline decoration-1 underline-offset-2"
                >
                  schedoryn@gmail.com
                </a>
              </p>
              <p className="text-base text-slate-800">
                <strong className="text-slate-900 font-semibold">
                  Email subject:
                </strong>{" "}
                Account Deletion Request
              </p>
            </div>
            <p className="text-lg leading-relaxed text-slate-700">
              Please include the email address you used to sign in (Google or
              email/password).
            </p>
          </section>

          {/* Data Deleted Section */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-5 pb-3 border-b-2 border-gray-200">
              Data Deleted
            </h2>
            <ul className="list-disc list-inside space-y-3 ml-4 text-lg text-slate-700">
              <li className="leading-relaxed">
                Account information (email, user ID)
              </li>
              <li className="leading-relaxed">
                Saved travel itineraries / plans
              </li>
              <li className="leading-relaxed">
                Any related content stored in your account
              </li>
            </ul>
          </section>

          {/* Data Retained Section */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-5 pb-3 border-b-2 border-gray-200">
              Data Retained
            </h2>
            <div className="bg-white border-l-4 border-[#F58601] rounded p-6">
              <p className="text-lg leading-relaxed text-slate-700">
                Basic security/technical logs may be retained for up to{" "}
                <strong className="text-slate-900 font-semibold">
                  30 days
                </strong>{" "}
                for fraud prevention and security purposes.
              </p>
            </div>
          </section>

          {/* Processing Time Section */}
          <section className="bg-teal-50/40 border-l-4 border-[#00C5A7] rounded p-6">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">
              Processing Time
            </h2>
            <p className="text-base leading-relaxed text-slate-800">
              Requests are processed within{" "}
              <strong className="text-slate-900 font-semibold">
                7–30 days
              </strong>
              .
            </p>
          </section>
        </main>

        {/* Footer */}
        <footer className="text-center py-8 px-6 border-t-2 border-gray-200 bg-gray-50">
          <p className="text-sm text-slate-600 mb-1">
            © 2026 Schedoryn. All rights reserved.
          </p>
          <p className="text-sm text-slate-600">
            <a
              href="/policy"
              className="text-[#E95D77] hover:text-[#d14a64] font-medium underline decoration-1 underline-offset-2"
            >
              Privacy Policy
            </a>
          </p>
        </footer>
      </div>
    </div>
  );
}
