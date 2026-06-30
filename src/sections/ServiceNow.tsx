"use client";

import {
  Settings2,
  Code2,
  Plug,
  Award,
  GraduationCap,
  ExternalLink,
} from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import SectionHeader from "../components/SectionHeader";
import Card from "../components/Card";

const capabilities = [
  {
    icon: Settings2,
    label: "ITSM & HRSD",
    tagline: "Modules & Workflows",
    points: [
      "HRSD customization, matching rules & lifecycle automation",
      "Round Robin onboarding / offboarding workflows",
      "Incident & knowledge management configuration",
      "CMDB population & Health data-quality",
    ],
  },
  {
    icon: Code2,
    label: "Platform & Scripting",
    tagline: "Custom Logic at Every Layer",
    points: [
      "Script Includes, Business Rules, Client Scripts",
      "Glide scripting & server-side API development",
      "ATF automated test suites & Update Sets",
      "Service Portal & UI Builder development",
    ],
  },
  {
    icon: Plug,
    label: "Integrations",
    tagline: "Enterprise System Sync",
    points: [
      "FreshService, Jira, Slack, Salesforce via REST/SOAP",
      "AWS integration via Flow Designer",
      "Critical-incident escalation & knowledge sync automation",
      "Scripted REST API + Python-driven Update Set automation",
    ],
  },
];

const certifications = [
  {
    name: "Automated Test Framework",
    issuer: "ServiceNow",
    type: "Micro-certification",
    issued: "May 2026",
    url: "https://www.linkedin.com/in/shahab-ali-9626812b6/details/certifications/",
  },
  {
    name: "CMDB Health",
    issuer: "ServiceNow",
    type: "Micro-certification",
    issued: "Apr 2026",
    url: "https://www.linkedin.com/in/shahab-ali-9626812b6/details/certifications/",
  },
  {
    name: "Configure the CMDB",
    issuer: "ServiceNow",
    type: "Micro-certification",
    issued: "Mar 2026",
    url: "https://www.linkedin.com/in/shahab-ali-9626812b6/details/certifications/",
  },
  {
    name: "Now Assist Executive",
    issuer: "ServiceNow",
    type: "Micro-certification",
    issued: "Jul 2025",
    url: "https://www.linkedin.com/in/shahab-ali-9626812b6/details/certifications/",
  },
  {
    name: "Welcome to ServiceNow",
    issuer: "ServiceNow",
    type: "Micro-certification",
    issued: "Jul 2025",
    url: "https://www.linkedin.com/in/shahab-ali-9626812b6/details/certifications/",
  },
];

const experience = [
  {
    role: "ServiceNow Developer",
    company: "Tekdex",
    period: "Feb 2026 – Present",
    focus: "HRSD · ITSM · ATF",
  },
  {
    role: "ServiceNow Developer",
    company: "Techrystal",
    period: "Aug 2025 – Feb 2026",
    focus: "Integrations · Flow Designer · Service Portal",
  },
];

const SubHeading = ({ label }: { label: string }) => (
  <p className="text-xs font-bold uppercase tracking-[0.2em] text-[var(--text-muted)] mb-5">
    {label}
  </p>
);

export const ServiceNowSection = () => {
  const reduced = useReducedMotion();

  const fadeUp = (i: number) =>
    reduced
      ? {}
      : {
          initial: { opacity: 0, y: 28 },
          whileInView: { opacity: 1, y: 0 },
          transition: { duration: 0.5, delay: i * 0.1, ease: "easeOut" },
          viewport: { once: true, margin: "-10%" },
        };

  return (
    <section className="py-16 md:py-24" id="servicenow-section">
      <div className="container">
        <SectionHeader
          firstHeading="ServiceNow"
          mainHeading="Enterprise Platform Expertise"
          paragraph="One-year track record building, automating, and integrating on the Now Platform."
        />

        {/* ── Experience ── */}
        <div className="mt-14">
          <SubHeading label="Experience" />
          <div className="flex flex-col sm:flex-row gap-4">
            {experience.map((exp) => (
              <div
                key={exp.company}
                className="flex-1 max-w-sm border border-[var(--border)] rounded-lg px-5 py-4 bg-[var(--surface)]"
              >
                <p className="text-xs font-semibold uppercase tracking-widest text-emerald-400">
                  {exp.period}
                </p>
                <p className="mt-1 font-semibold text-[var(--text)]">{exp.role}</p>
                <p className="text-sm text-[var(--text-muted)]">{exp.company}</p>
                <p className="mt-2 text-xs text-[var(--text-muted)] font-medium">
                  {exp.focus}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ── Capabilities bento ── */}
        <div className="mt-12">
          <SubHeading label="What I Build on the Now Platform" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {capabilities.map((cap, i) => {
              const Icon = cap.icon;
              return (
                <motion.div
                  key={cap.label}
                  {...fadeUp(i)}
                  whileHover={reduced ? {} : { scale: 1.015 }}
                >
                  <Card className="p-6 border border-[var(--border)] bg-[var(--surface)] rounded-xl outline-none h-full">
                    <div className="flex items-center gap-3 mb-5">
                      <div className="flex items-center justify-center w-9 h-9 rounded-md bg-emerald-400/10 shrink-0">
                        <Icon className="size-5 text-emerald-400" aria-hidden="true" />
                      </div>
                      <div>
                        <p className="font-semibold text-sm uppercase tracking-widest text-emerald-400">
                          {cap.label}
                        </p>
                        <p className="text-xs text-[var(--text-muted)]">{cap.tagline}</p>
                      </div>
                    </div>
                    <ul className="space-y-2.5">
                      {cap.points.map((point) => (
                        <li
                          key={point}
                          className="flex gap-2.5 text-sm text-[var(--text-muted)]"
                        >
                          <span className="mt-[5px] shrink-0 size-1.5 rounded-full bg-emerald-400 block" />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* ── Certifications ── */}
        <div className="mt-12">
          <SubHeading label="Certifications" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {certifications.map((cert) => (
              <a
                key={cert.name}
                href={cert.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View ${cert.name} certification on LinkedIn`}
                className="flex items-center gap-3 border border-[var(--border)] rounded-lg px-5 py-3 bg-[var(--surface)] hover:border-emerald-400/40 hover:bg-emerald-400/5 transition-colors group focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--primary)]"
              >
                <Award className="size-5 text-emerald-400 shrink-0" aria-hidden="true" />
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold text-[var(--text)] group-hover:text-emerald-300 transition-colors truncate">
                    {cert.name}
                  </p>
                  <p className="text-xs text-[var(--text-muted)]">
                    {cert.type} · <span className="text-emerald-400/80">{cert.issued}</span>
                  </p>
                </div>
                <ExternalLink
                  className="size-3.5 text-[var(--text-muted)] group-hover:text-emerald-400 transition-colors shrink-0"
                  aria-hidden="true"
                />
              </a>
            ))}
          </div>
        </div>

        {/* ── Education ── */}
        <div className="mt-10">
          <SubHeading label="Education" />
          <div className="inline-flex items-center gap-3 border border-[var(--border)] rounded-lg px-5 py-3 bg-[var(--surface)]">
            <GraduationCap
              className="size-5 text-[var(--accent)] shrink-0"
              aria-hidden="true"
            />
            <div>
              <p className="text-sm font-semibold text-[var(--text)]">
                BS Software Engineering
              </p>
              <p className="text-xs text-[var(--text-muted)]">
                COMSATS University Islamabad · 2021–2025
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
