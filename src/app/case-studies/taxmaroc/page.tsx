"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

const BRAND = "#28B7D5";
const ORANGE = "#FF8C42";

export default function TaxMarocLanding() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source
            src="/images/cases/tax_website.mp4"
            type="video/mp4"
          />
        </video>
        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Content */}
        <div className="relative z-10 mx-auto max-w-4xl px-4 text-center">
          <h1
            className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            <span style={{ color: ORANGE }}>TaxMaroc</span>
          </h1>
          <p
            className="text-xl md:text-2xl text-slate-200 mb-8 leading-relaxed"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            Simplify Morocco's <span style={{ color: BRAND, fontWeight: '600' }}>tax system</span> with intuitive tools and clear guidance.
          </p>
          <Link
            href="https://tax.openlluna.ca"
            className="inline-flex items-center gap-2 font-semibold tracking-wide rounded-full px-8 py-4 text-lg transition-all duration-300 hover:scale-105 text-white"
            style={{
              backgroundColor: ORANGE,
              boxShadow: `0 8px 24px ${ORANGE}40`,
              fontFamily: "'Poppins', sans-serif",
            }}
          >
            Visit Website
          </Link>
        </div>
      </section>

      {/* Rest of the original sections remain unchanged */}
      {/* Quick Stats Section */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: '15K+', label: 'Monthly Users' },
              { value: '2', label: 'Languages' },
              { value: '12+', label: 'Calculators' },
              { value: '4.9★', label: 'Average Rating' }
            ].map((stat, idx) => (
              <div 
                key={stat.label}
                className="text-center opacity-0 animate-slide-up"
                style={{ animationDelay: `${1.2 + idx * 0.1}s` }}
              >
                <div 
                  className="text-4xl md:text-5xl font-black mb-2"
                  style={{ color: idx % 2 === 0 ? ORANGE : BRAND }}
                >
                  {stat.value}
                </div>
                <div className="text-slate-600 font-medium text-sm md:text-base">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Transition to Full Case Study */}
      <section className="py-16 bg-slate-50">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Discover how we transformed Moroccan taxation
          </h2>
          <p className="text-lg text-slate-600 mb-8">
            From design to impact, dive into our creative process and results.
          </p>
          <button
            onClick={() => {
              const nextSection = document.getElementById('full-case-study');
              nextSection?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-2 font-semibold tracking-wide rounded-full px-8 py-4 text-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl text-white"
            style={{
              backgroundColor: ORANGE,
              boxShadow: `0 8px 24px ${ORANGE}40`
            }}
          >
            View Full Case Study
          </button>
        </div>
      </section>

      {/* Full Case Study Starts Here */}
      <div id="full-case-study">
        {/* Challenge Section */}
        <section className="py-20 bg-white">
          <div className="mx-auto max-w-7xl px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <span 
                  className="inline-block px-4 py-2 rounded-full text-sm font-bold mb-4"
                  style={{ 
                    backgroundColor: `${ORANGE}15`,
                    color: ORANGE
                  }}
                >
                  The Challenge
                </span>
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  A complex and fragmented tax system
                </h2>
                <p className="text-lg text-slate-700 leading-relaxed mb-6">
                  Moroccan citizens and businesses face a fragmented tax system, 
                  with information scattered across multiple government portals, 
                  outdated PDFs, and contradictory interpretations.
                </p>
                <p className="text-lg text-slate-700 leading-relaxed">
                  The result? Compliance errors, missed deductions, and a general 
                  distrust of the tax system.
                </p>
              </div>

              <div className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl">
                    <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover"
                    >
                    <source
                        src="/images/cases/frustrated.mp4"
                        type="video/mp4"
                    />
                    </video>
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Solution Section */}
        <section className="py-20 bg-gradient-to-br from-slate-50 to-slate-100">
        <div className="mx-auto max-w-7xl px-4">
            <div className="text-center mb-16">
            <span 
                className="inline-block px-4 py-2 rounded-full text-sm font-bold mb-4"
                style={{ 
                backgroundColor: `${BRAND}15`,
                color: BRAND
                }}
            >
                Our Solution
            </span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Morocco's most comprehensive tax platform
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Powerful and accurate tools to manage all your tax 
                and social obligations in just a few clicks.
            </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {[
                {
                icon: '💰',
                title: 'Income Tax Calculator',
                desc: 'Instant income tax calculation according to the latest scales. Personalized simulations for employees and professionals.',
                features: ['2024 Scales', 'PDF Export', 'History']
                },
                {
                icon: '🏢',
                title: 'CNSS Calculator',
                desc: 'Determine your social contributions with precision. Adapted for public and private sector employees.',
                features: ['Detailed calculation', 'Employer share', 'Employee share']
                },
                {
                icon: '📊',
                title: 'VAT Calculator',
                desc: 'Complete VAT management: calculation, deduction, and generation of compliant declarations.',
                features: ['Rates 20%, 14%, 10%', 'Recoverable VAT', 'Declarations']
                },
                {
                icon: '🏭',
                title: 'Corporate Tax Calculator',
                desc: 'Simplified corporate tax. Tax result calculation and tax optimization for businesses.',
                features: ['Rates 10% to 31%', 'Installments', 'Regularization']
                },
                {
                icon: '🌍',
                title: 'Bilingual Interface',
                desc: 'Complete experience in Arabic and French. Accurate tax terminology in both languages.',
                features: ['AR/FR', 'Adapted content', 'Instant switch']
                },
                {
                icon: '📚',
                title: 'Guides & Resources',
                desc: 'Complete documentation, explanatory articles and FAQ to understand the Moroccan tax system.',
                features: ['Video tutorials', 'Case studies', 'Legal updates']
                }
            ].map((feature, idx) => (
                <div
                key={feature.title}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-slate-200"
                >
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed mb-4">{feature.desc}</p>
                <div className="flex flex-wrap gap-2">
                    {feature.features.map(tag => (
                    <span 
                        key={tag}
                        className="px-3 py-1 rounded-full text-xs font-semibold"
                        style={{ 
                        backgroundColor: `${BRAND}10`,
                        color: BRAND
                        }}
                    >
                        {tag}
                    </span>
                    ))}
                </div>
                </div>
            ))}
            </div>

            {/* Key Benefits */}
            <div className="bg-white rounded-3xl p-12 shadow-xl">
            <h3 className="text-3xl font-bold text-center mb-12">
                Why choose our platform?
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {[
                {
                    value: '100%',
                    label: 'Compliant with Moroccan law'
                },
                {
                    value: 'Free',
                    label: 'Free and unlimited access'
                },
                {
                    value: '24/7',
                    label: 'Available anytime'
                },
                {
                    value: 'Instant',
                    label: 'Real-time results'
                }
                ].map(stat => (
                <div key={stat.label} className="text-center">
                    <div 
                    className="text-4xl font-bold mb-2"
                    style={{ color: BRAND }}
                    >
                    {stat.value}
                    </div>
                    <div className="text-slate-600 font-medium">{stat.label}</div>
                </div>
                ))}
            </div>
            </div>
        </div>
        </section>


        {/* Results/Impact */}
        <section className="py-20 bg-white">
          <div className="mx-auto max-w-4xl px-4">
            <div className="text-center mb-12">
              <span 
                className="inline-block px-4 py-2 rounded-full text-sm font-bold mb-4"
                style={{ 
                  backgroundColor: `${ORANGE}15`,
                  color: ORANGE
                }}
              >
                The Impact
              </span>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Results that speak for themselves
              </h2>
            </div>

            <div className="prose prose-lg max-w-none text-slate-700 mb-12">
              <p className="text-lg leading-relaxed mb-6">
                In just a few months, TaxMaroc has become the go-to resource for 
                tax information in Morocco, serving thousands of citizens and 
                businesses each month.
              </p>
              
              <div 
                className="bg-slate-50 rounded-2xl p-8 border-l-4 mb-6"
                style={{ borderColor: ORANGE }}
              >
                <div className="text-2xl font-bold mb-3" style={{ color: ORANGE }}>
                  "Finally tax information I can understand!"
                </div>
                <div className="text-slate-600 font-medium">
                  — Entrepreneur, Casablanca
                </div>
              </div>

              <p className="text-lg leading-relaxed">
                Users report significant time savings, increased confidence 
                in their tax calculations, and better compliance rates. 
                The platform has helped identify deductions that many were unaware of.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
          <div className="mx-auto max-w-4xl px-4 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to transform your project?
            </h2>
            <p className="text-xl text-slate-300 mb-10">
              Let's create digital experiences that solve real problems together.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 font-semibold tracking-wide rounded-full px-10 py-5 text-lg transition-all duration-300 hover:scale-105 text-slate-900"
              style={{
                backgroundColor: ORANGE,
                boxShadow: `0 8px 24px ${ORANGE}60`
              }}
            >
              Start Your Project
            </Link>
          </div>
        </section>
      </div>

      <style jsx>{`
        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-slide-up {
          animation: slide-up 0.8s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </main>
  );
}