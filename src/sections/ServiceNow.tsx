"use client";

import {
  Settings2,
  Code2,
  Plug,
  Database,
  Award,
  GraduationCap,
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
      "Agent Workspace enhancements",
    ],
  },
  {
    icon: Code2,
    label: "Platform & Scripting",
    tagline: "Custom Logic at Every Layer",
    points: [
      "Script Includes, Business Rules, Client Scripts",
      "Glide scripting & server-side API development",
      "ATF automated test suites",
      "Update Set lifecycle management",
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
  {
    icon: Database,
    label: "Discovery & CMDB",
    tagline: "Infrastructure Visibility",
    points: [
      "MID Server setup & Discovery configuration",
      "CMDB population & Health data-quality improvement",
      "Platform Analytics dashboards",
      "Service Portal & UI Builder development",
    ],
  },
];

const certifications = [
  {
    name: "Welcome to ServiceNow",
    issuer: "ServiceNow",
    type: "Micro-certification",
  },
  {
    name: "Now Assist Executive",
    issuer: "ServiceNow",
    type: "Micro-certification",
  },
];

const experience = [
  {
    role: "ServiceNow Developer",
    company: "Tekdex",
    period: "Feb 2025 – Present",
    focus: "HRSD · Discovery · CMDB · ATF",
  },
  {
    role: "ServiceNow Developer",
    company: "Techrystal",
    period: "Aug 2025 – Feb 2026",
    focus: "Integrations · Flow Designer · Service Portal",
  },
];

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
    <section className="py-20 lg:py-32" id="servicenow-section">
      <div className="container">
        <SectionHeader
          firstHeading="ServiceNow"
          mainHeading="Enterprise Platform Expertise"
          paragraph="Two-year track record building, automating, and integrating on the Now Platform."
        />

        {/* Experience timeline strip */}
        <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
          {experience.map((exp) => (
            <div
              key={exp.company}
              className="flex-1 max-w-xs border border-[var(--border)] rounded-lg px-5 py-4 bg-[var(--surface)]"
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

        {/* Capability bento grid */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-5">
          {capabilities.map((cap, i) => {
            const Icon = cap.icon;
            return (
              <motion.div
                key={cap.label}
                {...fadeUp(i)}
                whileHover={reduced ? {} : { scale: 1.015 }}
              >
                <Card className="p-6 lg:p-8 border border-[var(--border)] bg-[var(--surface)] rounded-xl outline-none h-full">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="flex items-center justify-center w-9 h-9 rounded-md bg-emerald-400/10 shrink-0">
                      <Icon className="size-5 text-emerald-400" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="font-semibold text-sm uppercase tracking-widest text-emerald-400">
                        {cap.label}
                      </p>
                      <p className="text-xs text-[var(--text-muted)]">
                        {cap.tagline}
                      </p>
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

        {/* Certifications + education strip */}
        <div className="mt-10 flex flex-wrap gap-4 justify-center items-stretch">
          {certifications.map((cert) => (
            <div
              key={cert.name}
              className="inline-flex items-center gap-3 border border-[var(--border)] rounded-lg px-5 py-3 bg-[var(--surface)]"
            >
              <Award className="size-5 text-emerald-400 shrink-0" aria-hidden="true" />
              <div>
                <p className="text-sm font-semibold text-[var(--text)]">
                  {cert.name}
                </p>
                <p className="text-xs text-[var(--text-muted)]">
                  {cert.issuer} · {cert.type}
                </p>
              </div>
            </div>
          ))}
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
