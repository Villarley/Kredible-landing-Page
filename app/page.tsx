"use client";

import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ArrowRight,
  CheckCircle,
  Users,
  Shield,
  Zap,
  TrendingUp,
  Code,
  DollarSign,
  Star,
  Repeat,
  Target,
  Globe,
  Sparkles,
  Database,
  Lock,
} from "lucide-react";
import Link from "next/link";

export default function BuilderScoreLanding() {
  const [scrollY, setScrollY] = useState(0);
  const [heroScale, setHeroScale] = useState(1);
  const [heroOpacity, setHeroOpacity] = useState(1);
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollY(currentScrollY);

      // Hero scaling and fading effect
      if (heroRef.current) {
        const heroHeight = heroRef.current.offsetHeight;
        const scrollProgress = Math.min(currentScrollY / heroHeight, 1);

        // Scale from 1 to 0.8 as user scrolls
        const newScale = 1 - scrollProgress * 0.2;
        setHeroScale(Math.max(newScale, 0.8));

        // Fade from 1 to 0.3 as user scrolls
        const newOpacity = 1 - scrollProgress * 0.7;
        setHeroOpacity(Math.max(newOpacity, 0.3));
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-in");
        }
      });
    }, observerOptions);

    const animatedElements = document.querySelectorAll(".animate-on-scroll");
    animatedElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-[#0a0f1f] via-[#0f1629] to-[#1a1f3a] text-white overflow-x-hidden">
      {/* Floating Particles Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400 rounded-full animate-pulse opacity-60"></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-cyan-300 rounded-full animate-ping opacity-40"></div>
        <div className="absolute bottom-1/4 left-1/3 w-3 h-3 bg-blue-500 rounded-full animate-bounce opacity-30"></div>
        <div className="absolute top-2/3 right-1/4 w-2 h-2 bg-indigo-400 rounded-full animate-pulse opacity-50"></div>
        <div className="absolute bottom-1/3 right-1/2 w-1 h-1 bg-blue-300 rounded-full animate-ping opacity-60"></div>
      </div>

      {/* Header */}
      <header className="px-4 lg:px-6 h-16 flex items-center border-b border-gray-800/50 bg-[#0a0f1f]/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="flex items-center justify-center">
          <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-cyan-400 rounded-lg flex items-center justify-center">
            <img
              src="/kredible-white.jpg"
              alt="Kredible Logo"
              className="h-8 w-8"
            />
          </div>
          <span className="ml-2 text-xl font-bold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
            Kredible
          </span>
        </div>
        <nav className="ml-auto flex gap-4 sm:gap-6 items-center">
          <Link
            href="#demo"
            className="text-sm font-medium hover:text-blue-400 transition-colors duration-300"
          >
            Demo
          </Link>
          <Link
            href="#api"
            className="text-sm font-medium hover:text-blue-400 transition-colors duration-300"
          >
            API
          </Link>
          <a
            href="https://github.com/Kredible-Inc"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium hover:text-blue-400 transition-colors duration-300"
          >
            GitHub
          </a>
        </nav>
      </header>

      <main className="flex-1 flex flex-col items-center justify-center w-full">
        {" "}
        {/* Centrado global */}
        {/* Hero Section */}
        <section
          ref={heroRef}
          className="relative w-full flex flex-col items-center justify-center py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-br from-[#0a0f1f] via-[#1e3a8a] to-[#1e90ff] overflow-hidden transition-all duration-300"
        >
          {/* Parallax Background Elements */}
          <div
            className="absolute inset-0 opacity-20 transition-opacity duration-300"
            style={{
              transform: `translateY(${scrollY * 0.5}px)`,
            }}
          >
            <div className="absolute top-20 left-10 w-32 h-32 border border-blue-400/30 rounded-full"></div>
            <div className="absolute bottom-20 right-10 w-48 h-48 border border-cyan-400/20 rounded-full"></div>
            <div className="absolute top-1/2 left-1/2 w-64 h-64 border border-blue-500/10 rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
          </div>

          <div className="container px-4 md:px-6 relative z-10 flex flex-col items-center justify-center">
            <div
              className="flex flex-col items-center space-y-6 text-center transition-all duration-500 ease-out"
              style={{
                transform: `scale(${heroScale})`,
                opacity: heroOpacity,
              }}
            >
              <Badge
                variant="secondary"
                className="bg-blue-600/20 text-blue-300 border-blue-500/30 animate-pulse"
              >
                <Sparkles className="w-4 h-4 mr-2" />
                Web3 Credit Revolution
              </Badge>

              <div className="space-y-4 animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none">
                  Build Credit in{" "}
                  <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 bg-clip-text text-transparent animate-gradient">
                    Web3
                  </span>{" "}
                  with Your{" "}
                  <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                    On-Chain Actions
                  </span>
                </h1>
                <p className="mx-auto max-w-[700px] text-blue-100 text-lg md:text-xl/relaxed">
                  Lower collateral. Better access. A new standard for trust.
                </p>
              </div>

              <div className="flex flex-col gap-4 min-[400px]:flex-row animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000 delay-300">
                <a
                  href="#demo"
                  className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white shadow-lg hover:shadow-blue-500/25 hover:scale-105 transition-all duration-300 rounded-lg px-8 py-3 text-lg font-semibold flex items-center justify-center"
                >
                  Try the Demo
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
                <a
                  href="https://api-kredible-production.up.railway.app/api/#/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-blue-400/50 text-blue-300 hover:bg-blue-500/10 hover:border-blue-400 hover:scale-105 transition-all duration-300 bg-transparent border rounded-lg px-8 py-3 text-lg font-semibold flex items-center justify-center"
                >
                  See our API
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </section>
        {/* Problem Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 relative bg-gradient-to-b from-[#1e90ff]/5 to-transparent">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-8 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000">
                Access to Credit Is{" "}
                <span className="bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">
                  Broken
                </span>{" "}
                in Web3
              </h2>

              <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 max-w-4xl mt-12">
                {[
                  {
                    icon: Users,
                    title: "1.7B+ people excluded",
                    desc: "Traditional finance leaves billions without access to credit services.",
                  },
                  {
                    icon: Shield,
                    title: "No credit history = limited access",
                    desc: "Without traditional credit scores, users face restricted lending options.",
                  },
                  {
                    icon: TrendingUp,
                    title: "Forced to over-collateralize",
                    desc: "Users must provide excessive collateral due to lack of trust signals.",
                  },
                  {
                    icon: Target,
                    title: "Low Loan-to-Value ratios",
                    desc: "LTV ratios remain conservative without proper risk assessment.",
                  },
                ].map((item, index) => (
                  <Card
                    key={index}
                    className="bg-gray-800/30 border-gray-700/50 text-white hover:bg-gray-800/50 hover:border-gray-600/50 hover:scale-105 transition-all duration-300 animate-on-scroll opacity-0 translate-y-8"
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    <CardContent className="p-6">
                      <div className="flex items-center space-x-3 mb-4">
                        <div className="w-10 h-10 bg-red-500/20 rounded-lg flex items-center justify-center">
                          <item.icon className="h-5 w-5 text-red-400" />
                        </div>
                        <span className="font-semibold text-red-300">
                          {item.title}
                        </span>
                      </div>
                      <p className="text-gray-300">{item.desc}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>
        {/* Solution Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-[#0a0f1f]/80 to-[#1a1f3a]/80">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-8 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000">
                Meet{" "}
                <span className="bg-gradient-to-r from-green-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  Builder Score
                </span>
                : Reputation Built on What You Do
              </h2>

              <p className="mx-auto max-w-[800px] text-gray-300 text-lg animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000 delay-200">
                A transparent, Web3-native credit score built from your on-chain
                actions—repayments, wallet activity, and behavior.
              </p>

              <div className="grid gap-8 lg:grid-cols-3 lg:gap-12 max-w-5xl mt-12">
                {[
                  {
                    icon: Shield,
                    title: "Lower Required Collateral",
                    desc: "Trusted users can borrow with less collateral as their score improves.",
                    color: "from-green-400 to-emerald-400",
                  },
                  {
                    icon: TrendingUp,
                    title: "Transparent Credit Scoring",
                    desc: "Dynamic loan-to-value ratios based on proven creditworthiness.",
                    color: "from-blue-400 to-cyan-400",
                  },
                  {
                    icon: Zap,
                    title: "Adaptive Loan Conditions",
                    desc: "Your score evolves as you participate more in the Web3 ecosystem.",
                    color: "from-purple-400 to-pink-400",
                  },
                ].map((item, index) => (
                  <Card
                    key={index}
                    className="bg-gray-800/30 border-gray-700/50 text-white hover:bg-gray-800/50 hover:border-gray-600/50 hover:scale-110 hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-500 animate-on-scroll opacity-0 translate-y-8 group"
                    style={{ transitionDelay: `${index * 150}ms` }}
                  >
                    <CardContent className="p-8 text-center">
                      <div
                        className={`w-16 h-16 bg-gradient-to-r ${item.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}
                      >
                        <item.icon className="h-8 w-8 text-white" />
                      </div>
                      <h3 className="font-bold text-xl mb-4">{item.title}</h3>
                      <p className="text-gray-300">{item.desc}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>
        {/* How it Works */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-transparent to-[#0a0f1f]/50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-8 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000">
                How{" "}
                <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  Builder Score
                </span>{" "}
                Works
              </h2>

              {/* Interactive Timeline */}
              <div className="w-2/3 mt-16 animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000 delay-300">
                <h3 className="text-2xl font-semibold mb-12 bg-gradient-to-r from-blue-300 to-cyan-300 bg-clip-text text-transparent">
                  The Credit Building Cycle
                </h3>

                {/* Desktop Timeline */}
                <div className="hidden md:block relative">
                  <div className="flex items-center justify-between w-full mx-auto">
                    {[
                      {
                        icon: DollarSign,
                        label: "Borrow",
                        color: "from-blue-400 to-blue-600",
                      },
                      {
                        icon: CheckCircle,
                        label: "Repay",
                        color: "from-green-400 to-green-600",
                      },
                      {
                        icon: TrendingUp,
                        label: "Score grows",
                        color: "from-purple-400 to-purple-600",
                      },
                      {
                        icon: Target,
                        label: "Lower LTV",
                        color: "from-cyan-400 to-cyan-600",
                      },
                      {
                        icon: Repeat,
                        label: "Repeat",
                        color: "from-orange-400 to-orange-600",
                      },
                    ].map((step, index) => (
                      <div
                        key={index}
                        className="flex flex-col items-center group relative"
                      >
                        <div
                          className={`w-20 h-20 bg-gradient-to-r ${step.color} rounded-full flex items-center justify-center mb-4 group-hover:scale-125 transition-all duration-500 shadow-lg hover:shadow-2xl z-10 relative`}
                        >
                          <step.icon className="h-10 w-10 text-white" />
                        </div>
                        <span className="text-lg font-medium text-blue-300 group-hover:text-white transition-colors duration-300">
                          {step.label}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Mobile Timeline */}
                <div className="md:hidden space-y-8">
                  {[
                    {
                      icon: DollarSign,
                      label: "Borrow",
                      color: "from-blue-400 to-blue-600",
                    },
                    {
                      icon: CheckCircle,
                      label: "Repay",
                      color: "from-green-400 to-green-600",
                    },
                    {
                      icon: TrendingUp,
                      label: "Score Increases",
                      color: "from-purple-400 to-purple-600",
                    },
                    {
                      icon: Target,
                      label: "Lower LTV",
                      color: "from-cyan-400 to-cyan-600",
                    },
                    {
                      icon: Repeat,
                      label: "Repeat",
                      color: "from-orange-400 to-orange-600",
                    },
                  ].map((step, index) => (
                    <div
                      key={index}
                      className="flex flex-col items-center group"
                    >
                      <div
                        className={`w-20 h-20 bg-gradient-to-r ${step.color} rounded-full flex items-center justify-center mb-4 group-hover:scale-125 transition-all duration-500 shadow-lg hover:shadow-2xl`}
                      >
                        <step.icon className="h-10 w-10 text-white" />
                      </div>
                      <span className="text-lg font-medium text-blue-300 group-hover:text-white transition-colors duration-300">
                        {step.label}
                      </span>
                      {index < 4 && (
                        <ArrowRight className="h-8 w-8 text-blue-400 mt-4 rotate-90 animate-pulse" />
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Process Cards */}
              <div className="grid gap-8 lg:grid-cols-3 lg:gap-12 max-w-5xl mt-16">
                {[
                  {
                    icon: Code,
                    title: "Credit Score Contract",
                    desc: "Calculates user scores based on loan outcomes and on-chain behavior patterns using Soroban smart contracts.",
                  },
                  {
                    icon: Database,
                    title: "Lending Contract",
                    desc: "Adjusts LTV ratio dynamically based on the user's Builder Score in real-time.",
                  },
                  {
                    icon: Globe,
                    title: "API Integration",
                    desc: "Any protocol can plug into our system with simple API calls and transparent documentation.",
                  },
                ].map((item, index) => (
                  <Card
                    key={index}
                    className="bg-gray-800/30 border-gray-700/50 text-white hover:bg-gray-800/50 hover:border-blue-500/50 hover:scale-105 transition-all duration-300 animate-on-scroll opacity-0 translate-y-8"
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    <CardHeader>
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mx-auto">
                        <item.icon className="h-6 w-6 text-white" />
                      </div>
                      <CardTitle className="text-center text-blue-300">
                        {item.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-center text-gray-300">{item.desc}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>
        {/* Demo Platform Preview */}
        <section
          id="demo"
          className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-[#1e3a8a]/80 to-[#1e90ff]/80 relative overflow-hidden"
        >
          <div
            className="absolute inset-0 opacity-10 transition-opacity duration-300"
            style={{
              transform: `translateY(${scrollY * 0.3}px)`,
            }}
          >
            <div className="absolute top-10 right-10 w-40 h-40 border border-white/20 rounded-lg rotate-45"></div>
            <div className="absolute bottom-10 left-10 w-32 h-32 border border-white/15 rounded-full"></div>
          </div>

          <div className="container px-4 md:px-6 relative z-10">
            <div className="flex flex-col items-center space-y-8 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000">
                See it in{" "}
                <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                  Action
                </span>
              </h2>

              <div className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000 delay-200">
                <p className="mx-auto max-w-[700px] text-blue-100 text-lg mb-8">
                  We built a lightweight P2P lending demo to showcase Builder
                  Score.
                </p>
                <p className="text-cyan-200 font-semibold text-xl">
                  Try it now and see your score evolve in real time.
                </p>
              </div>

              <Button
                size="lg"
                className="bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white shadow-lg hover:shadow-yellow-500/25 hover:scale-110 transition-all duration-300 animate-on-scroll opacity-0 translate-y-8 delay-400"
              >
                Launch the Demo
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>
        {/* For Developers */}
        <section
          id="api"
          className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-transparent to-[#0a0f1f]/30 flex flex-col items-center justify-center"
        >
          <div className="container px-4 md:px-6 flex flex-col items-center justify-center">
            <div className="flex flex-col items-center space-y-8 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000">
                Built with{" "}
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Stellar + Soroban
                </span>
              </h2>

              <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 max-w-4xl mt-12">
                <Card className="bg-gray-800/30 border-gray-700/50 text-white hover:bg-gray-800/50 hover:border-purple-500/50 hover:scale-105 transition-all duration-300 animate-on-scroll opacity-0 translate-x-8">
                  <CardHeader>
                    <CardTitle className="text-purple-300 flex items-center">
                      <Lock className="h-5 w-5 mr-2" />
                      Smart Contracts
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    {[
                      "Smart contracts on Soroban",
                      "Transparent on-chain scoring logic",
                      "Verifiable Loan-to-Value tracking",
                    ].map((item, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-400" />
                        <span className="text-sm">{item}</span>
                      </div>
                    ))}
                  </CardContent>
                </Card>

                <Card className="bg-gray-800/30 border-gray-700/50 text-white hover:bg-gray-800/50 hover:border-blue-500/50 hover:scale-105 transition-all duration-300 animate-on-scroll opacity-0 translate-x-8 delay-200">
                  <CardHeader>
                    <CardTitle className="text-blue-300 flex items-center">
                      <Code className="h-5 w-5 mr-2" />
                      Tech Stack
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    {[
                      "Frontend: NextJS, Stellar SDK, Wallet Kit",
                      "Backend: NestJS, Firebase",
                      "Blockchain: Soroban Smart Contracts",
                    ].map((item, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <Code className="h-4 w-4 text-blue-400" />
                        <span className="text-sm">{item}</span>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </div>

              <a
                href="https://api-kredible-production.up.railway.app/api/#/"
                target="_blank"
                rel="noopener noreferrer"
                className="border-purple-400/50 text-purple-300 hover:bg-purple-500/10 hover:border-purple-400 hover:scale-105 transition-all duration-300 animate-on-scroll opacity-0 translate-y-8 delay-400 bg-transparent border rounded-lg px-8 py-3 text-lg font-semibold flex items-center justify-center mt-4"
              >
                Access API Docs
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
              <a
                href="https://github.com/Kredible-Inc"
                target="_blank"
                rel="noopener noreferrer"
                className="border-gray-400/50 text-gray-300 hover:bg-gray-500/10 hover:border-gray-400 hover:scale-105 transition-all duration-300 animate-on-scroll opacity-0 translate-y-8 delay-400 bg-transparent border rounded-lg px-8 py-3 text-lg font-semibold flex items-center justify-center mt-4"
              >
                GitHub
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </div>
          </div>
        </section>
        {/* Pricing Model */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-[#0a0f1f]/90 via-[#1a1f3a]/90 to-[#0a0f1f]/90">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-8 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000">
                Simple,{" "}
                <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                  Fair Monetization
                </span>
              </h2>

              <div className="grid gap-8 lg:grid-cols-3 lg:gap-12 max-w-5xl mt-12">
                {[
                  {
                    icon: Star,
                    title: "Free Tier",
                    desc: "100 score lookups",
                    price: "$0",
                    color: "from-blue-400 to-blue-600",
                  },
                  {
                    icon: DollarSign,
                    title: "Pay-as-you-go",
                    desc: "Transparent pricing after free tier",
                    price: "$0.01/call",
                    color: "from-purple-400 to-purple-600",
                  },
                  {
                    icon: TrendingUp,
                    title: "API Partner Discounts",
                    desc: "Reduced rates for data-sharing partners",
                    price: "Custom",
                    color: "from-green-400 to-green-600",
                  },
                ].map((tier, index) => (
                  <Card
                    key={index}
                    className="bg-gray-800/30 border-gray-700/50 text-white hover:bg-gray-800/50 hover:border-gray-600/50 hover:scale-110 hover:shadow-2xl transition-all duration-500 animate-on-scroll opacity-0 translate-y-8 group"
                    style={{ transitionDelay: `${index * 150}ms` }}
                  >
                    <CardContent className="p-8 text-center">
                      <div
                        className={`w-16 h-16 bg-gradient-to-r ${tier.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}
                      >
                        <tier.icon className="h-8 w-8 text-white" />
                      </div>
                      <h3 className="font-bold text-xl mb-2">{tier.title}</h3>
                      <p className="text-3xl font-bold text-blue-300 mb-4">
                        {tier.price}
                      </p>
                      <p className="text-gray-300">{tier.desc}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>
        {/* User Benefits */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-transparent to-[#0a0f1f]/50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-8 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000">
                Why Users{" "}
                <span className="bg-gradient-to-r from-pink-400 to-red-400 bg-clip-text text-transparent">
                  Love
                </span>{" "}
                Builder Score
              </h2>

              <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 max-w-5xl mt-12">
                <Card className="bg-gray-800/30 border-gray-700/50 text-white hover:bg-gray-800/50 hover:border-blue-500/50 hover:scale-105 transition-all duration-300 animate-on-scroll opacity-0 translate-x-8">
                  <CardHeader>
                    <CardTitle className="text-blue-300 flex items-center">
                      <Users className="h-6 w-6 mr-3" />
                      For Borrowers
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {[
                      "Reputation that travels across platforms",
                      "Lower collateral requirements over time",
                      "Real-time credit visibility and tracking",
                    ].map((benefit, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-400" />
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </CardContent>
                </Card>

                <Card className="bg-gray-800/30 border-gray-700/50 text-white hover:bg-gray-800/50 hover:border-purple-500/50 hover:scale-105 transition-all duration-300 animate-on-scroll opacity-0 translate-x-8 delay-200">
                  <CardHeader>
                    <CardTitle className="text-purple-300 flex items-center">
                      <Shield className="h-6 w-6 mr-3" />
                      For Lenders
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {[
                      "Transparent borrower creditworthiness metrics",
                      "Activity frequency and engagement data",
                      "Wallet age and transaction behavior insights",
                    ].map((benefit, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-400" />
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
        {/* Final CTA */}
        <section
          id="contact"
          className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-[#1e3a8a]/90 via-[#1e90ff]/90 to-[#0ea5e9]/90 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-cyan-600/20"></div>

          <div className="container px-4 md:px-6 relative z-10">
            <div className="flex flex-col items-center space-y-8 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000">
                <span className="bg-gradient-to-r from-yellow-300 via-white to-cyan-300 bg-clip-text text-transparent animate-pulse">
                  Reputation Is the New Collateral
                </span>
              </h2>

              <p className="mx-auto max-w-[600px] text-blue-100 text-lg animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000 delay-200">
                Join the future of decentralized credit and unlock better
                lending opportunities across Web3.
              </p>

              <div className="flex flex-col gap-4 min-[400px]:flex-row animate-on-scroll opacity-0 translate-y-8 transition-all duration-1000 delay-400">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white shadow-lg hover:shadow-green-500/25 hover:scale-110 transition-all duration-300"
                >
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white/50 text-white hover:bg-white/10 hover:border-white hover:scale-110 transition-all duration-300 bg-transparent"
                >
                  Talk to Us
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-cyan-400/50 text-cyan-300 hover:bg-cyan-500/10 hover:border-cyan-400 hover:scale-110 transition-all duration-300 bg-transparent"
                >
                  See Builder Score in Action
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t border-gray-800/50 bg-[#0a0f1f]/90 justify-center">
        <p className="text-xs text-gray-400">
          © 2024 Kredible. Built on Stellar. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6 items-center justify-center">
          <a
            href="https://api-kredible-production.up.railway.app/api/#/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs hover:underline underline-offset-4 text-gray-400 hover:text-blue-400 transition-colors"
          >
            API Docs
          </a>
          <a
            href="https://github.com/Kredible-Inc"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs hover:underline underline-offset-4 text-gray-400 hover:text-blue-400 transition-colors"
          >
            GitHub
          </a>
        </nav>
      </footer>
    </div>
  );
}
