"use client"

import React from 'react';
import { ArrowRight, Calculator, TrendUp, ChartLine, CurrencyDollar, Percent, Calendar, CheckCircle } from '@phosphor-icons/react';

export default function LoanFlowLanding() {
  return (
    <div style={{
      fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
      backgroundColor: '#2a2a2a',
      color: '#fff'
    }} >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');
        
        

        html {
          scroll-behavior: smooth;
        }

        .gradient-text {
          background: linear-gradient(135deg, #E09F3E 0%, #FFF3B0 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .product-card {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
          overflow: hidden;
        }

        .product-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, rgba(224, 159, 62, 0.1) 0%, rgba(255, 243, 176, 0.05) 100%);
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .product-card:hover::before {
          opacity: 1;
        }

        .product-card:hover {
          transform: translateY(-4px);
          border-color: #E09F3E !important;
        }



        .grid-pattern {
          background-image: 
            linear-gradient(rgba(255, 243, 176, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 243, 176, 0.03) 1px, transparent 1px);
          background-size: 50px 50px;
        }
      `}</style>

      {/* Hero Section */}
      <section style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        overflow: 'hidden',
        padding: '120px 20px 60px'
      }} className="grid-pattern">
        {/* Gradient Orbs */}
        <div style={{
          position: 'absolute',
          top: '10%',
          right: '10%',
          width: '600px',
          height: '600px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(224, 159, 62, 0.15) 0%, transparent 70%)',
          filter: 'blur(80px)',
          pointerEvents: 'none'
        }} />
        <div style={{
          position: 'absolute',
          bottom: '10%',
          left: '5%',
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(51, 92, 103, 0.2) 0%, transparent 70%)',
          filter: 'blur(80px)',
          pointerEvents: 'none'
        }} />

        <div style={{
          maxWidth: '1400px',
          width: '100%',
          textAlign: 'center',
          position: 'relative',
          zIndex: 1
        }}>
          {/* Badge */}
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '8px 16px',
            backgroundColor: 'rgba(224, 159, 62, 0.1)',
            border: '1px solid rgba(224, 159, 62, 0.2)',
            borderRadius: '100px',
            marginBottom: '32px',
            fontSize: '14px',
            fontWeight: '500',
            color: '#FFF3B0'
          }}>
            <CheckCircle size={16} weight="fill" />
            Simplify your financial decisions
          </div>

          <h1 style={{
            fontSize: 'clamp(40px, 8vw, 80px)',
            fontWeight: '800',
            lineHeight: '1.1',
            marginBottom: '24px',
            letterSpacing: '-0.03em'
          }}>
            Master your loans
            <br />
            <span className="gradient-text">in seconds</span>
          </h1>

          <p style={{
            fontSize: 'clamp(18px, 2.5vw, 22px)',
            color: 'rgba(255, 255, 255, 0.7)',
            marginBottom: '40px',
            maxWidth: '700px',
            margin: '0 auto 40px',
            lineHeight: '1.6'
          }}>
            The comprehensive loan calculator platform. Calculate payments, visualize amortization, and make informed borrowing decisions with powerful, intuitive tools.
          </p>

          {/* CTA Buttons */}
          <div style={{
            display: 'flex',
            gap: '16px',
            justifyContent: 'center',
            flexWrap: 'wrap',
            marginBottom: '60px'
          }}>
            <a
              href="https://loanflow.openlluna.ca"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '14px 28px',
                backgroundColor: '#E09F3E',
                color: '#0a0a0a',
                fontSize: '16px',
                fontWeight: '600',
                textDecoration: 'none',
                borderRadius: '8px',
                transition: 'all 0.2s ease',
                border: 'none'
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = '#FFF3B0';
                e.target.style.transform = 'translateY(-2px)';
                e.target.style.boxShadow = '0 8px 24px rgba(224, 159, 62, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = '#E09F3E';
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = 'none';
              }}
            >
              Start calculating
              <ArrowRight size={20} weight="bold" />
            </a>

            <a
              href="#features"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '14px 28px',
                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                color: '#fff',
                fontSize: '16px',
                fontWeight: '600',
                textDecoration: 'none',
                borderRadius: '8px',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                e.target.style.borderColor = '#E09F3E';
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.05)';
                e.target.style.borderColor = 'rgba(255, 255, 255, 0.1)';
              }}
            >
              See how it works
            </a>
          </div>

          {/* Hero Visual */}
          <div style={{
            maxWidth: '1100px',
            margin: '0 auto',
            position: 'relative'
          }}>
            <div style={{
              background: 'linear-gradient(135deg, rgba(51, 92, 103, 0.4) 0%, rgba(224, 159, 62, 0.3) 100%)',
              borderRadius: '24px',
              padding: '8px',
              border: '1px solid rgba(224, 159, 62, 0.3)',
              backdropFilter: 'blur(20px)',
              position: 'relative'
            }}>
              {/* Main Image */}
              <div style={{
                borderRadius: '16px',
                overflow: 'hidden',
                position: 'relative',
                aspectRatio: '16/9'
              }}>
                <img 
                  src="/images/atm.jpg"
                  alt="atm machine"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    display: 'block'
                  }}
                />
                
                {/* Overlay gradient */}
                <div style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  height: '50%',
                  background: 'linear-gradient(to top, rgba(42, 42, 42, 0.8), transparent)',
                  display: 'flex',
                  alignItems: 'flex-end',
                  padding: '32px'
                }}>
                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
                    gap: '24px',
                    width: '100%'
                  }}>
                    <StatBadge icon={<CurrencyDollar size={28} weight="duotone" />} label="Loan Amount" value="$250K" />
                    <StatBadge icon={<Percent size={28} weight="duotone" />} label="Rate" value="4.5%" />
                    <StatBadge icon={<Calendar size={28} weight="duotone" />} label="Term" value="30 yrs" />
                    <StatBadge icon={<TrendUp size={28} weight="duotone" />} label="Payment" value="$1,267" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="features" style={{
        padding: '120px 20px',
        maxWidth: '1400px',
        margin: '0 auto'
      }}>
        <div style={{
          textAlign: 'center',
          marginBottom: '80px'
        }}>
          <h2 style={{
            fontSize: 'clamp(32px, 5vw, 48px)',
            fontWeight: '700',
            marginBottom: '16px',
            letterSpacing: '-0.02em'
          }}>
            Everything you need to understand loans
          </h2>
          <p style={{
            fontSize: '18px',
            color: 'rgba(255, 255, 255, 0.6)',
            maxWidth: '600px',
            margin: '0 auto'
          }}>
            Powerful calculation tools integrated as a seamless platform
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '24px'
        }}>
          <ProductCard
            icon={<Calculator size={48} weight="duotone" color="#E09F3E" />}
            title="Loan Calculator"
            description="Calculate monthly payments, total interest, and full amortization schedules with precision"
            features={['Monthly payment breakdown', 'Total cost analysis', 'Interactive inputs']}
          />

          <ProductCard
            icon={<ChartLine size={48} weight="duotone" color="#E09F3E" />}
            title="Amortization Schedule"
            description="Visualize how your loan payments are applied to principal and interest over time"
            features={['Month-by-month breakdown', 'Principal vs interest graph', 'Remaining balance tracking']}
          />

          <ProductCard
            icon={<TrendUp size={48} weight="duotone" color="#E09F3E" />}
            title="Comparison Tools"
            description="Compare multiple loan scenarios side-by-side to find the best option for your needs"
            features={['Side-by-side analysis', 'Savings calculations', 'Optimal strategy finder']}
          />
        </div>
      </section>

      {/* Stats Section */}
      <section style={{
        padding: '100px 20px',
        backgroundColor: 'rgba(51, 92, 103, 0.05)',
        borderTop: '1px solid rgba(255, 255, 255, 0.05)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.05)'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '60px',
          textAlign: 'center'
        }}>
          <div>
            <div className="gradient-text" style={{
              fontSize: 'clamp(40px, 6vw, 56px)',
              fontWeight: '800',
              marginBottom: '8px'
            }}>
              10k+
            </div>
            <div style={{
              fontSize: '18px',
              color: 'rgba(255, 255, 255, 0.6)'
            }}>
              Calculations performed
            </div>
          </div>

          <div>
            <div className="gradient-text" style={{
              fontSize: 'clamp(40px, 6vw, 56px)',
              fontWeight: '800',
              marginBottom: '8px'
            }}>
              $2M+
            </div>
            <div style={{
              fontSize: '18px',
              color: 'rgba(255, 255, 255, 0.6)'
            }}>
              In potential savings identified
            </div>
          </div>

          <div>
            <div className="gradient-text" style={{
              fontSize: 'clamp(40px, 6vw, 56px)',
              fontWeight: '800',
              marginBottom: '8px'
            }}>
              100%
            </div>
            <div style={{
              fontSize: '18px',
              color: 'rgba(255, 255, 255, 0.6)'
            }}>
              Free to use
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section style={{
        padding: '120px 20px',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '60px',
          alignItems: 'center'
        }}>
          {/* Left side - Image */}
          <div style={{
            borderRadius: '16px',
            overflow: 'hidden',
            border: '1px solid rgba(224, 159, 62, 0.2)',
            position: 'relative'
          }}>
            <img 
              src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&q=80"
              alt="Financial planning and calculations"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                display: 'block',
                minHeight: '400px'
              }}
            />
          </div>

          {/* Right side - Content */}
          <div>
            <h2 style={{
              fontSize: 'clamp(32px, 5vw, 42px)',
              fontWeight: '700',
              marginBottom: '24px',
              lineHeight: '1.2'
            }}>
              Make confident
              <br />
              <span className="gradient-text">financial decisions</span>
            </h2>
            <p style={{
              fontSize: '18px',
              color: 'rgba(255, 255, 255, 0.7)',
              lineHeight: '1.7',
              marginBottom: '32px'
            }}>
              LoanFlow provides complete transparency in loan calculations. Understand exactly where your money goes, compare different scenarios, and optimize your borrowing strategy.
            </p>

            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '24px'
            }}>
              <FeatureItem
                icon={<CheckCircle size={24} weight="fill" color="#E09F3E" />}
                title="No hidden calculations"
                description="Every number is explained and transparent"
              />
              <FeatureItem
                icon={<CheckCircle size={24} weight="fill" color="#E09F3E" />}
                title="Privacy first"
                description="All calculations happen in your browser"
              />
              <FeatureItem
                icon={<CheckCircle size={24} weight="fill" color="#E09F3E" />}
                title="Always accurate"
                description="Industry-standard formulas and methods"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{
        padding: '100px 20px',
        background: 'linear-gradient(135deg, rgba(51, 92, 103, 0.2) 0%, rgba(84, 11, 14, 0.2) 100%)',
        borderTop: '1px solid rgba(255, 255, 255, 0.05)',
        textAlign: 'center'
      }}>
        <div style={{
          maxWidth: '800px',
          margin: '0 auto'
        }}>
          <h2 style={{
            fontSize: 'clamp(32px, 5vw, 48px)',
            fontWeight: '700',
            marginBottom: '20px',
            lineHeight: '1.2'
          }}>
            Ready to build something amazing?
          </h2>
          <p style={{
            fontSize: '20px',
            color: 'rgba(255, 255, 255, 0.7)',
            marginBottom: '40px',
            lineHeight: '1.6'
          }}>
            Let's create digital experiences that solve real problems together
          </p>
          <a
            href="https://openlluna.ca/contact"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '12px',
              padding: '16px 32px',
              backgroundColor: '#E09F3E',
              color: '#0a0a0a',
              fontSize: '18px',
              fontWeight: '600',
              textDecoration: 'none',
              borderRadius: '8px',
              transition: 'all 0.2s ease'
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = '#FFF3B0';
              e.target.style.transform = 'translateY(-2px)';
              e.target.style.boxShadow = '0 12px 32px rgba(224, 159, 62, 0.4)';
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = '#E09F3E';
              e.target.style.transform = 'translateY(0)';
              e.target.style.boxShadow = 'none';
            }}
          >
            Start your project
            <ArrowRight size={20} weight="bold" />
          </a>
        </div>
      </section>
    </div>
  );
}

// Product Card Component
function ProductCard({ icon, title, description, features }) {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <div
      className="product-card"
      style={{
        padding: '32px',
        backgroundColor: 'rgba(255, 255, 255, 0.02)',
        border: '1px solid',
        borderColor: isHovered ? '#E09F3E' : 'rgba(255, 255, 255, 0.08)',
        borderRadius: '16px',
        position: 'relative'
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div style={{ marginBottom: '20px' }}>
        {icon}
      </div>

      <h3 style={{
        fontSize: '24px',
        fontWeight: '600',
        marginBottom: '12px',
        color: '#fff'
      }}>
        {title}
      </h3>

      <p style={{
        fontSize: '16px',
        color: 'rgba(255, 255, 255, 0.6)',
        lineHeight: '1.6',
        marginBottom: '20px'
      }}>
        {description}
      </p>

      <ul style={{
        listStyle: 'none',
        display: 'flex',
        flexDirection: 'column',
        gap: '8px'
      }}>
        {features.map((feature, index) => (
          <li key={index} style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            fontSize: '14px',
            color: 'rgba(255, 255, 255, 0.5)'
          }}>
            <CheckCircle size={16} weight="fill" color="#335c67" />
            {feature}
          </li>
        ))}
      </ul>
    </div>
  );
}

// Feature Item Component
function FeatureItem({ icon, title, description }) {
  return (
    <div style={{
      display: 'flex',
      gap: '16px',
      alignItems: 'flex-start'
    }}>
      <div style={{ flexShrink: 0, marginTop: '2px' }}>
        {icon}
      </div>
      <div>
        <h4 style={{
          fontSize: '18px',
          fontWeight: '600',
          marginBottom: '4px',
          color: '#fff'
        }}>
          {title}
        </h4>
        <p style={{
          fontSize: '15px',
          color: 'rgba(255, 255, 255, 0.6)',
          lineHeight: '1.5'
        }}>
          {description}
        </p>
      </div>
    </div>
  );
}

// Stat Badge Component
function StatBadge({ icon, label, value }) {
  return (
    <div style={{
      textAlign: 'center'
    }}>
      <div style={{
        color: '#FFF3B0',
        marginBottom: '8px',
        display: 'flex',
        justifyContent: 'center'
      }}>
        {icon}
      </div>
      <div style={{
        fontSize: 'clamp(18px, 3vw, 24px)',
        fontWeight: '700',
        color: '#fff',
        marginBottom: '4px'
      }}>
        {value}
      </div>
      <div style={{
        fontSize: '12px',
        color: 'rgba(255, 255, 255, 0.5)',
        textTransform: 'uppercase',
        letterSpacing: '0.05em'
      }}>
        {label}
      </div>
    </div>
  );
}