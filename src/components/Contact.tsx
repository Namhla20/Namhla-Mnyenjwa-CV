import { Mail, Phone, MapPin, Linkedin, FileText } from 'lucide-react';
import { personalInfo } from '@/data/portfolio';

/**
 * Contact section — clickable email, phone, and LinkedIn links plus a
 * "professional references available upon request" note.  Sensitive
 * personal details are intentionally excluded.
 */
export default function Contact() {
  const contactItems = [
    {
      icon: Mail,
      label: 'Email',
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`,
    },
    {
      icon: Phone,
      label: 'Phone',
      value: personalInfo.phoneDisplay,
      href: `tel:${personalInfo.phone.replace(/\s/g, '')}`,
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: personalInfo.linkedinDisplay,
      href: personalInfo.linkedin,
    },
    {
      icon: MapPin,
      label: 'Location',
      value: personalInfo.location,
      href: undefined,
    },
  ];

  return (
    <section id="contact" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ---- Section heading ---- */}
        <div className="text-center mb-16 reveal">
          <p className="text-sm font-semibold text-blue-700 uppercase tracking-wider">
            Get in touch
          </p>
          <h2 className="mt-2 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy-900">
            Let&rsquo;s Connect
          </h2>
          <div className="mt-4 mx-auto w-20 h-1.5 rounded-full bg-blue-700" />
          <p className="mt-6 text-navy-600 max-w-2xl mx-auto text-base sm:text-lg">
            I&rsquo;m open to internship and job opportunities. Feel free to
            reach out through any of the channels below.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {/* ---- Contact card ---- */}
          <div className="reveal-scale bg-gradient-to-br from-navy-50 to-blue-50 rounded-3xl border border-neutral-200 p-8 lg:p-12 shadow-sm">
            {/* Name header */}
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-navy-900">
                {personalInfo.name}
              </h3>
              <p className="text-blue-700 font-medium mt-1">{personalInfo.title}</p>
            </div>

            {/* Contact items grid */}
            <div className="grid sm:grid-cols-2 gap-4">
              {contactItems.map((item) => {
                const Inner = (
                  <>
                    <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-xl bg-blue-700 text-white group-hover:scale-110 transition-transform">
                      <item.icon size={22} />
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs font-semibold text-navy-400 uppercase tracking-wider">
                        {item.label}
                      </p>
                      <p className="text-sm text-navy-800 font-medium mt-0.5 truncate">
                        {item.value}
                      </p>
                    </div>
                  </>
                );

                return item.href ? (
                  <a
                    key={item.label}
                    href={item.href}
                    target={item.label === 'LinkedIn' ? '_blank' : undefined}
                    rel={item.label === 'LinkedIn' ? 'noopener noreferrer' : undefined}
                    className="group flex items-center gap-4 p-4 rounded-2xl bg-white border border-neutral-200 hover:border-blue-300 hover:shadow-md transition-all duration-300"
                  >
                    {Inner}
                  </a>
                ) : (
                  <div
                    key={item.label}
                    className="group flex items-center gap-4 p-4 rounded-2xl bg-white border border-neutral-200"
                  >
                    {Inner}
                  </div>
                );
              })}
            </div>

            {/* References note */}
            <div className="mt-8 flex items-center justify-center gap-2 text-sm text-navy-500">
              <FileText size={16} className="text-blue-600" />
              Professional references available upon request.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
