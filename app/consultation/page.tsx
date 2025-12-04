import type { Metadata } from "next";
import Image from "next/image";
import SectionHeader from "@/components/SectionHeader";
import { CONSULTATION_EXPERTS, ConsultationExpert } from "@/lib/data";
import { EVENT_CONFIG } from "@/lib/constants";

export const metadata: Metadata = {
  title: "CREED Consultation Sessions | RE Congress 2025",
  description:
    "Book one-on-one consultations with renewable energy experts at RE Congress 2025. Get personalized advice on RE financing, project development, technology, and policy for your sustainable energy initiatives in the Philippines.",
  keywords: [
    "renewable energy consultation Philippines",
    "RE expert advisers",
    "energy project development",
    "RE financing advice",
    "solar energy consultation",
    "wind power experts Philippines",
    "clean energy policy guidance",
    "CREED RE Congress",
  ],
  openGraph: {
    title: "CREED Expert Consultations | RE Congress 2025",
    description:
      "Connect with renewable energy specialists for personalized guidance on financing, project development, technology, and policy at RE Congress 2025 in Iloilo.",
    type: "website",
  },
};

export default function ConsultationPage() {
  return (
    <div className="min-h-screen bg-light">
      {/* Page Header */}
      <section className="bg-navy text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-primary text-sm font-poppins font-medium mb-2">
              Expert One-on-One Consultations
            </p>
            <h1 className="text-3xl md:text-4xl font-klein mb-3">
              CREED: “Consult-an-RE Expert–aDviser” Session
            </h1>
            <p className="text-base font-poppins text-white/70">
              Get personalized guidance on renewable energy financing, project
              development, technology, and policy from leading Philippine RE
              experts
            </p>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-12 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader title="About CREED Consultation Sessions" centered />

          <div className="font-public-sans">
            <p className="text-gray-600 leading-relaxed mb-4">
              The <strong className="text-navy">CREED</strong> serves as a
              dedicated consultation session designed to facilitate direct,
              meaningful engagement between participants and expert advisers
              across four key domains of renewable energy development:{" "}
              <strong className="text-navy">
                Finance, Project Development, RE Technology, and Policy
              </strong>
              .
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              This session aims to create an open and supportive space where
              participants can have one-on-one conversations with advisers—raise
              questions, share concerns, and seek expert guidance relevant to
              the planning, development, and implementation of renewable energy
              initiatives.
            </p>

            <p className="text-gray-600 leading-relaxed mb-4">
              By providing access to technical, financial, and regulatory
              advice, the consultation period supplements the discussions at the
              RE Congress on current developments in the renewable energy
              landscape, and ways of taking active part in ensuring a just and
              sustainable energy transition.
            </p>

            <p className="text-gray-600 leading-relaxed mb-6">
              Participants will gain a clearer understanding of the key
              considerations involved in establishing RE projects in the
              Philippines—thereby equipping them with practical knowledge, more
              realistic expectations, and informed decision-making capabilities
              as they navigate their respective project planning and execution.
            </p>

            <div className="bg-light border-l-2 border-primary p-4 rounded-r-lg">
              <h3 className="text-sm font-poppins font-semibold text-navy mb-1">
                Session Format
              </h3>
              <p className="text-sm text-gray-600 font-public-sans">
                CREED is open to all RE Congress participants and conducted by
                appointment. Sessions are held during designated break times of
                the program over 2 days, offering an informal yet informative
                setting that encourages dialogue, clarifies uncertainties, and
                promotes the exchange of insights among participants.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Schedule */}
      <section className="py-12 bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader title="Session Schedule" centered />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto">
            <ScheduleCard
              day="Day 1"
              date="December 11, 2025"
              time="10:50 - 15:30"
              sessions="During lunch and break times only"
              color="primary"
            />
            <ScheduleCard
              day="Day 2"
              date="December 12, 2025"
              time="12:00 - 13:00"
              sessions="Limited sessions"
              color="navy"
            />
          </div>

          <div className="mt-6 text-center">
            <p className="text-sm text-gray-500 font-public-sans max-w-xl mx-auto">
              Each session lasts approximately 5 minutes. Book early to secure
              your preferred time.
            </p>
          </div>
        </div>
      </section>

      {/* Experts */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            title="Expert Consultants"
            subtitle="Specialists across various renewable energy domains"
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {CONSULTATION_EXPERTS.map((expert) => (
              <ExpertCard key={expert.id} expert={expert} />
            ))}
          </div>
        </div>
      </section>

      {/* How to Book */}
      <section className="py-16 bg-navy">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-primary/15 bg-linear-to-br from-white via-[#f4faf2] to-white px-8 py-12 shadow-[0_18px_60px_rgba(97,177,22,0.08)]">
            <div className="flex flex-col gap-6 text-center md:text-left md:flex-row md:items-center md:justify-between">
              <div className="max-w-xl space-y-3">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary font-poppins">
                  Book Your Session
                </p>
                <h2 className="text-3xl font-klein text-navy">
                  Ready to Get Expert Advice?
                </h2>
                <p className="text-sm leading-relaxed text-gray-600 font-public-sans">
                  Schedule a one-on-one consultation with our renewable energy
                  experts. Simply register for the congress, choose your
                  preferred expert, and send us your booking request.
                </p>
              </div>
              <div className="flex flex-col gap-3 md:w-64">
                <a
                  href={`mailto:${EVENT_CONFIG.email}?subject=Consultation%20Booking%20Request&body=Name:%0D%0AOrganization:%0D%0AExpert%20Preference:%0D%0APreferred%20Time:%0D%0ATopic/Questions:%0D%0A`}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-primary text-white font-poppins font-medium rounded-full hover:bg-primary-dark transition-colors text-sm shadow-md"
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  Book an Appointment
                </a>
                <a
                  href={`mailto:${EVENT_CONFIG.email}`}
                  className="inline-flex items-center justify-center px-6 py-3 rounded-full border border-gray-200 text-sm font-semibold text-gray-700 hover:bg-gray-100 transition-colors font-poppins"
                >
                  {EVENT_CONFIG.email}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-12 bg-light">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader title="Frequently Asked Questions" centered />

          <div className="space-y-3">
            <FAQItem
              question="Do I need to register for the congress to book a consultation?"
              answer="Yes, consultation sessions are available exclusively to registered RE Congress 2025 participants."
            />
            <FAQItem
              question="How long is each consultation session?"
              answer="Each consultation session is approximately 5 minutes, allowing time for in-depth discussion of your specific questions or project needs."
            />
            <FAQItem
              question="Can I book multiple consultations?"
              answer="Yes, you may book consultations with different experts, subject to availability. Please indicate all your preferences when sending your booking request."
            />
            <FAQItem
              question="Is there a fee for consultation sessions?"
              answer="Consultation sessions are included as part of your RE Congress registration. No additional fees apply."
            />
          </div>
        </div>
      </section>
    </div>
  );
}

function ScheduleCard({
  day,
  date,
  time,
  sessions,
  color,
}: {
  day: string;
  date: string;
  time: string;
  sessions: string;
  color: string;
}) {
  const colorClasses: Record<string, string> = {
    primary: "bg-primary",
    navy: "bg-navy",
    teal: "bg-teal",
  };

  return (
    <div className={`${colorClasses[color]} text-white rounded-xl p-5`}>
      <h3 className="text-lg font-klein mb-0.5">{day}</h3>
      <p className="text-sm font-poppins mb-3 text-white/70">{date}</p>
      <div className="space-y-1.5">
        <div className="flex items-center gap-2 text-sm">
          <svg
            className="w-4 h-4 text-white/60"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span className="font-public-sans text-white/90">{time}</span>
        </div>
        <div className="flex items-center gap-2 text-xs">
          <svg
            className="w-4 h-4 text-white/60"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
            />
          </svg>
          <span className="font-public-sans text-white/70">{sessions}</span>
        </div>
      </div>
    </div>
  );
}

function ExpertCard({ expert }: { expert: ConsultationExpert }) {
  return (
    <div className="bg-white rounded-xl p-5 hover:shadow-md transition-shadow border border-gray-100">
      <div className="flex items-center gap-4 mb-3">
        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
          {expert.photo ? (
            <Image
              src={expert.photo}
              alt={expert.name}
              width={48}
              height={48}
              className="w-full h-full object-cover rounded-full"
              priority={false}
            />
          ) : (
            <span className="text-lg text-primary font-klein">
              {expert.name.charAt(0)}
            </span>
          )}
        </div>
        <div>
          <h3 className="text-sm font-poppins font-semibold text-navy">
            {expert.name}
          </h3>
          <p className="text-xs text-primary font-poppins">
            {expert.expertise}
          </p>
        </div>
      </div>

      <p className="text-xs text-gray-500 font-public-sans mb-3">
        {expert.organization}
      </p>

      {expert.availableSlots && (
        <div className="border-t border-gray-100 pt-3">
          <p className="text-xs font-medium text-gray-600 mb-1">Available:</p>
          <div className="flex flex-wrap gap-1">
            {expert.availableSlots.map((slot: string, index: number) => (
              <span
                key={index}
                className="text-xs text-gray-500 bg-light px-2 py-0.5 rounded-full"
              >
                {slot}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

function FAQItem({ question, answer }: { question: string; answer: string }) {
  return (
    <div className="bg-white rounded-xl p-4 border border-gray-100">
      <h3 className="text-sm font-poppins font-semibold text-navy mb-1">
        {question}
      </h3>
      <p className="text-sm text-gray-500 font-public-sans">{answer}</p>
    </div>
  );
}
