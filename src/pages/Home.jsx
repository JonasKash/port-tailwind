import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "../utils";
import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown, ArrowRight, Zap } from "lucide-react";
import UgaritLogo from "../assets/UgaritLogo.svg";
import UgaritLogoImg from "../../Screenshot_2025-05-14_13.42.23-removebg-preview.png";
import HeroBg from "../assets/hero-bg.svg";
import LogoMarquee from "../components/LogoMarquee";
import TestimonialCarousel from "../components/TestimonialCarousel";
import TypewriterText from "../components/TypewriterText";

export default function Home() {
  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const { scrollYProgress } = useScroll();
  const [isLoaded, setIsLoaded] = useState(false);
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  
  const heroOpacity = useTransform(scrollYProgress, [0, 0.25], [1, 0]);
  const heroY = useTransform(scrollYProgress, [0, 0.25], [0, 100]);

  const scrollToAbout = () => {
    aboutRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (isVisible && count < 23) {
      const timer = setTimeout(() => {
        setCount(count + 1);
      }, 50);
      return () => clearTimeout(timer);
    }
  }, [count, isVisible]);

  return (
    <>
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden">
          <div className="absolute inset-0">
            {/* Background Image */}
            <div className="absolute inset-0">
              <img src={HeroBg} alt="" className="w-full h-full object-cover opacity-30" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-black via-black/50 to-black"></div>
            
            {/* Gradientes de fundo */}
            <div className="absolute top-0 right-0 w-1/3 h-64 bg-[#9442fe]/20 blur-[120px]"></div>
            <div className="absolute bottom-0 left-0 w-1/3 h-64 bg-[#00f0ff]/20 blur-[120px]"></div>
          </div>

          <div className="container mx-auto px-6 relative z-10">
            <motion.div 
              className="max-w-4xl mx-auto text-center"
              style={{ opacity: heroOpacity, y: heroY }}
            >
              {/* Badge */}
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-8">
                <span className="text-sm text-white/90">Laboratório de Automação Inteligente</span>
              </div>

              {/* Título Principal com TypewriterText */}
              <div className="mb-6">
                <h1 className="text-4xl md:text-6xl font-bold mb-2">
                  <TypewriterText 
                    text="Agentes que transformam o invisível em tangível" 
                    speed={70}
                    className="bg-gradient-to-r from-[#00f0ff] via-[#6B8AFF] to-[#9442fe] text-transparent bg-clip-text"
                  />
                </h1>
              </div>

              <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-12">
                Não somos uma agência de chatbots. Somos um laboratório de automação que cria agentes humanizados que decidem com lógica, sentem com linguagem e aprendem com dados reais.
              </p>

              {/* Botões */}
              <div className="flex flex-wrap justify-center gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-[#00f0ff]/20 to-[#9442fe]/20 border border-[#00f0ff]/30 text-white font-medium rounded-full flex items-center space-x-2 group hover:shadow-[0_0_25px_rgba(0,240,255,0.3)] transition-all duration-300"
                >
                  <span>Ver Portfólio</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-white text-black font-medium rounded-full flex items-center space-x-2 group hover:bg-opacity-90 transition-all duration-300"
                >
                  <span>Saiba Mais</span>
                  <ChevronDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Metrics Section */}
        <section className="py-16 bg-black/50 backdrop-blur-sm border-t border-b border-white/10">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center"
              >
                <h3 className="text-4xl font-bold mb-2 bg-gradient-to-r from-[#00F0FF] to-[#9442FE] text-transparent bg-clip-text">
                  20-30
                </h3>
                <p className="text-gray-400">dias para entrega</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-center"
              >
                <h3 className="text-4xl font-bold mb-2 bg-gradient-to-r from-[#00F0FF] to-[#9442FE] text-transparent bg-clip-text">
                  89%
                </h3>
                <p className="text-gray-400">taxa de qualificação</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-center"
              >
                <h3 className="text-4xl font-bold mb-2 bg-gradient-to-r from-[#00F0FF] to-[#9442FE] text-transparent bg-clip-text">
                  7/30
                </h3>
                <p className="text-gray-400">suporte especializado</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-center"
              >
                <h3 className="text-4xl font-bold mb-2 bg-gradient-to-r from-[#00F0FF] to-[#9442FE] text-transparent bg-clip-text">
                  VPS
                </h3>
                <p className="text-gray-400">dedicada p/ cliente</p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Visionaries Section */}
        <section className="py-24 bg-gradient-to-br from-black via-[#1a1a1a] to-black relative">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="p-12 rounded-3xl bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-[#00f0ff]/20 shadow-[0_0_25px_rgba(0,240,255,0.1)] transition-all duration-500 hover:shadow-[0_0_50px_rgba(0,240,255,0.2)] hover:border-[#00f0ff]/40 hover:scale-[1.02] group relative overflow-hidden"
              >
                {/* Efeito de glow no background */}
                <div className="absolute inset-0 bg-gradient-to-b from-[#00f0ff]/5 via-transparent to-[#9442fe]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
                
                {/* Conteúdo */}
                <div className="relative z-10">
                  {/* Título */}
                  <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                    className="text-4xl md:text-5xl font-bold text-center mb-8 bg-gradient-to-r from-[#00F0FF] via-[#6B8AFF] to-[#9442FE] text-transparent bg-clip-text drop-shadow-[0_0_8px_rgba(0,240,255,0.3)] group-hover:drop-shadow-[0_0_12px_rgba(0,240,255,0.5)]"
                  >
                    Liberamos o tempo dos visionários impacientes
                  </motion.h2>

                  {/* Texto */}
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    className="text-xl md:text-2xl text-center text-gray-300 leading-relaxed group-hover:text-white transition-colors duration-300"
                  >
                    Transformamos a complexidade em simplicidade através de agentes humanizados que não apenas executam, mas{" "}
                    <span className="font-semibold text-white drop-shadow-[0_0_8px_rgba(0,240,255,0.3)] group-hover:drop-shadow-[0_0_12px_rgba(0,240,255,0.5)]">
                      evoluem, aprendem e se adaptam
                    </span>{" "}
                    ao DNA da sua empresa. Porque atrás de cada agente, existe engenharia, teste, segurança e atualização contínua.
                  </motion.p>
                </div>

                {/* Bordas com glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#00f0ff]/50 to-transparent"></div>
                  <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#9442fe]/50 to-transparent"></div>
                  <div className="absolute inset-y-0 left-0 w-px bg-gradient-to-b from-transparent via-[#00f0ff]/50 to-transparent"></div>
                  <div className="absolute inset-y-0 right-0 w-px bg-gradient-to-b from-transparent via-[#9442fe]/50 to-transparent"></div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute -left-20 -bottom-20 w-64 h-64 bg-[#00F0FF]/10 blur-[100px] rounded-full"></div>
          <div className="absolute -right-20 -top-20 w-64 h-64 bg-[#9442FE]/10 blur-[100px] rounded-full"></div>
        </section>

        {/* About Section */}
        <section 
          ref={aboutRef}
          className="py-24 bg-gradient-to-b from-black to-gray-900 relative"
        >
          <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-black to-transparent"></div>
          
          <div className="container mx-auto px-6">
            <motion.div 
              className="max-w-4xl mx-auto text-center mb-16"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              {/* Badge */}
              <div className="flex justify-center mb-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20"
                >
                  <span className="text-sm text-white/90">Nossos Diferenciais</span>
                </motion.div>
              </div>

              <h2 className="text-3xl md:text-5xl font-bold mb-8">
                Por que a <span className="bg-gradient-to-r from-[#00F0FF] to-[#9442FE] text-transparent bg-clip-text">Ugarit é única</span>
              </h2>
              <p className="text-xl text-gray-300">
                Unimos a precisão da engenharia com a beleza do design, criando automações que não apenas funcionam, mas encantam.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <FeatureCard 
                icon="star"
                title="Laboratório vs. Agência"
                description="Não entregamos projetos. Criamos um ecossistema de agentes humanizados que evolui com seu negócio."
                delay={0}
              />
              <FeatureCard 
                icon="brain"
                title="Personalização Cognitiva"
                description="Cada agente é único, treinado com os dados reais da sua empresa, moldado pela sua marca."
                delay={0.2}
              />
              <FeatureCard 
                icon="shield"
                title="Segurança Hacker"
                description="Protegemos seu ecossistema digital com criptografia prática e eficiente, sem jargões intimidadores."
                delay={0.4}
              />
              <FeatureCard 
                icon="code"
                title="Arquitetura Sob Medida"
                description="Código puro ou plataformas no-code, sempre priorizando a complexidade específica do seu negócio."
                delay={0.6}
              />
              <FeatureCard 
                icon="users"
                title="Experiência Antes da Aquisição"
                description="Você não compra uma promessa — você experimenta o valor antes de investir."
                delay={0.8}
              />
              <FeatureCard 
                icon="award"
                title="Parceria Evolutiva"
                description="Treinamentos, manutenção contínua, dashboards inteligentes e suporte completo."
                delay={1.0}
              />
            </div>
          </div>
        </section>

        {/* Comparison Section */}
        <section className="py-24 bg-gradient-to-br from-black via-[#1a1a1a] to-black relative">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="p-8 rounded-2xl bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-[#4ADE80]/30 shadow-[0_0_30px_rgba(74,222,128,0.2)] transition-all duration-500 hover:shadow-[0_0_50px_rgba(74,222,128,0.4)] hover:border-[#4ADE80]/50">
                <h2 className="text-4xl font-bold text-center mb-12">
                  <span className="text-white">Ugarit</span>{" "}
                  <span className="bg-gradient-to-r from-[#00F0FF] to-[#9442FE] text-transparent bg-clip-text">vs.</span>{" "}
                  <span className="text-white">Mercado</span>
                </h2>

                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-[#4ADE80]/30">
                        <th className="py-4 px-6 text-left text-gray-300">Característica</th>
                        <th className="py-4 px-6 text-center text-gray-300">Chatbots Genéricos</th>
                        <th className="py-4 px-6 text-center text-gray-300">Plataformas No-Code</th>
                        <th className="py-4 px-6 text-center text-[#4ADE80] font-bold">Ugarit Digital</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/10">
                      <tr className="transition-all duration-300 hover:scale-105 hover:shadow-[0_0_15px_rgba(74,222,128,0.3)] hover:bg-[#4ADE80]/5">
                        <td className="py-4 px-6 text-gray-300">Personalização real com código</td>
                        <td className="py-4 px-6 text-center">
                          <span className="inline-flex items-center">
                            <span className="text-[#FFB800]">⚠️</span>
                            <span className="ml-2 text-[#FFB800]">Limitada</span>
                          </span>
                        </td>
                        <td className="py-4 px-6 text-center">
                          <span className="inline-flex items-center">
                            <span className="text-[#FFB800]">⚠️</span>
                            <span className="ml-2 text-[#FFB800]">Limitada</span>
                          </span>
                        </td>
                        <td className="py-4 px-6 text-center">
                          <span className="inline-flex items-center">
                            <span className="text-[#4ADE80]">✓</span>
                            <span className="ml-2 text-[#4ADE80]">Sim</span>
                          </span>
                        </td>
                      </tr>
                      <tr className="transition-all duration-300 hover:scale-105 hover:shadow-[0_0_15px_rgba(74,222,128,0.3)] hover:bg-[#4ADE80]/5">
                        <td className="py-4 px-6 text-gray-300">Infraestrutura dedicada (VPS + BD)</td>
                        <td className="py-4 px-6 text-center">
                          <span className="inline-flex items-center">
                            <span className="text-[#FF4444]">✕</span>
                            <span className="ml-2 text-[#FF4444]">Não</span>
                          </span>
                        </td>
                        <td className="py-4 px-6 text-center">
                          <span className="inline-flex items-center">
                            <span className="text-[#FF4444]">✕</span>
                            <span className="ml-2 text-[#FF4444]">Não</span>
                          </span>
                        </td>
                        <td className="py-4 px-6 text-center">
                          <span className="inline-flex items-center">
                            <span className="text-[#4ADE80]">✓</span>
                            <span className="ml-2 text-[#4ADE80]">Sim</span>
                          </span>
                        </td>
                      </tr>
                      <tr className="transition-all duration-300 hover:scale-105 hover:shadow-[0_0_15px_rgba(74,222,128,0.3)] hover:bg-[#4ADE80]/5">
                        <td className="py-4 px-6 text-gray-300">Suporte técnico + estratégico</td>
                        <td className="py-4 px-6 text-center">
                          <span className="inline-flex items-center">
                            <span className="text-[#FF4444]">✕</span>
                            <span className="ml-2 text-[#FF4444]">Não</span>
                          </span>
                        </td>
                        <td className="py-4 px-6 text-center">
                          <span className="inline-flex items-center">
                            <span className="text-[#FFB800]">⚠️</span>
                            <span className="ml-2 text-[#FFB800]">Depende</span>
                          </span>
                        </td>
                        <td className="py-4 px-6 text-center">
                          <span className="inline-flex items-center">
                            <span className="text-[#4ADE80]">✓</span>
                            <span className="ml-2 text-[#4ADE80]">Nativo</span>
                          </span>
                        </td>
                      </tr>
                      <tr className="transition-all duration-300 hover:scale-105 hover:shadow-[0_0_15px_rgba(74,222,128,0.3)] hover:bg-[#4ADE80]/5">
                        <td className="py-4 px-6 text-gray-300">Cultura hacker ética</td>
                        <td className="py-4 px-6 text-center">
                          <span className="inline-flex items-center">
                            <span className="text-[#FFB800]">⚠️</span>
                          </span>
                        </td>
                        <td className="py-4 px-6 text-center">
                          <span className="inline-flex items-center">
                            <span className="text-[#FFB800]">⚠️</span>
                          </span>
                        </td>
                        <td className="py-4 px-6 text-center">
                          <span className="inline-flex items-center">
                            <span className="text-[#4ADE80]">✓</span>
                            <span className="ml-2 text-[#4ADE80]">DNA da marca</span>
                          </span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute -left-20 -bottom-20 w-64 h-64 bg-[#00F0FF]/10 blur-[100px] rounded-full"></div>
          <div className="absolute -right-20 -top-20 w-64 h-64 bg-[#9442FE]/10 blur-[100px] rounded-full"></div>
        </section>

        {/* Process Timeline Section */}
        <section className="py-24 bg-gradient-to-br from-black via-[#1a1a1a] to-black relative">
          <style jsx>{`
            @keyframes floatLeft {
              0%, 100% { transform: translateX(-8px); }
              50% { transform: translateX(-16px); }
            }
            @keyframes floatRight {
              0%, 100% { transform: translateX(8px); }
              50% { transform: translateX(16px); }
            }
            .text-glow {
              text-shadow: 0 0 10px rgba(0, 240, 255, 0.5),
                          0 0 20px rgba(0, 240, 255, 0.3),
                          0 0 30px rgba(0, 240, 255, 0.1);
            }
            .text-glow-purple {
              text-shadow: 0 0 10px rgba(148, 66, 254, 0.5),
                          0 0 20px rgba(148, 66, 254, 0.3),
                          0 0 30px rgba(148, 66, 254, 0.1);
            }
            .float-left {
              animation: floatLeft 3s ease-in-out infinite;
            }
            .float-right {
              animation: floatRight 3s ease-in-out infinite;
            }
          `}</style>

          <div className="container mx-auto px-6">
            {/* Header */}
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-[#00F0FF]/20 mb-8">
                <span className="text-sm text-white/90">
                  <svg className="w-4 h-4 inline mr-2 text-[#00F0FF]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                  Metodologia de Entrega
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Processo em{" "}
                <span className="bg-gradient-to-r from-[#00F0FF] to-[#9442FE] text-transparent bg-clip-text">7 Etapas</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Fluxo claro, previsível e controlado. Do diagnóstico à evolução contínua, cada passo é projetado para maximizar o valor e minimizar riscos.
              </p>
            </div>

            {/* Timeline */}
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-[#00F0FF] to-[#9442FE]"></div>

              {/* Timeline Items */}
              <div className="space-y-24">
                {/* Item 1 - Left */}
                <div className="flex items-center group">
                  <div className="w-1/2 pr-16 text-right float-left transition-all duration-500 ease-in-out">
                    <div className="mb-2">
                      <span className="inline-block px-3 py-1 bg-black/50 rounded-full text-sm text-[#00F0FF] border border-[#00F0FF]/30 shadow-[0_0_10px_rgba(0,240,255,0.3)] text-glow">1-2 dias úteis</span>
                    </div>
                    <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-[#00F0FF] to-[#9442FE] text-transparent bg-clip-text text-glow">Diagnóstico e Imersão</h3>
                    <p className="text-gray-300 transition-all duration-300 group-hover:text-white">
                      Mergulhamos no seu negócio para entender processos, dores e oportunidades.
                    </p>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-[#00F0FF] to-[#9442FE] p-[2px] shadow-[0_0_15px_rgba(0,240,255,0.5)] transition-all duration-300 hover:shadow-[0_0_25px_rgba(148,66,254,0.5)]">
                      <div className="w-full h-full rounded-xl bg-black flex items-center justify-center">
                        <svg className="w-6 h-6 text-[#00F0FF]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 10a1 1 0 011-1h4a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 01-1-1v-4z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="w-1/2"></div>
                </div>

                {/* Item 2 - Right */}
                <div className="flex items-center group">
                  <div className="w-1/2"></div>
                  <div className="absolute left-1/2 transform -translate-x-1/2">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-[#00F0FF] to-[#9442FE] p-[2px] shadow-[0_0_15px_rgba(0,240,255,0.5)] transition-all duration-300 hover:shadow-[0_0_25px_rgba(148,66,254,0.5)]">
                      <div className="w-full h-full rounded-xl bg-black flex items-center justify-center">
                        <svg className="w-6 h-6 text-[#9442FE]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="w-1/2 pl-16 float-right transition-all duration-500 ease-in-out">
                    <div className="mb-2">
                      <span className="inline-block px-3 py-1 bg-black/50 rounded-full text-sm text-[#9442FE] border border-[#9442FE]/30 shadow-[0_0_10px_rgba(148,66,254,0.3)] text-glow-purple">3 dias úteis</span>
                    </div>
                    <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-[#00F0FF] to-[#9442FE] text-transparent bg-clip-text text-glow">Criação de MVP Funcional</h3>
                    <p className="text-gray-300 transition-all duration-300 group-hover:text-white">
                      Desenvolvemos rapidamente um agente inicial que demonstra valor imediato.
                    </p>
                  </div>
                </div>

                {/* Item 3 - Left */}
                <div className="flex items-center group">
                  <div className="w-1/2 pr-16 text-right float-left transition-all duration-500 ease-in-out">
                    <div className="mb-2">
                      <span className="inline-block px-3 py-1 bg-black/50 rounded-full text-sm text-[#00F0FF] border border-[#00F0FF]/30 shadow-[0_0_10px_rgba(0,240,255,0.3)] text-glow">5-10 dias úteis</span>
                    </div>
                    <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-[#00F0FF] to-[#9442FE] text-transparent bg-clip-text text-glow">Integração Estratégica</h3>
                    <p className="text-gray-300 transition-all duration-300 group-hover:text-white">
                      Conectamos o agente aos seus sistemas e canais com segurança total.
                    </p>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-[#00F0FF] to-[#9442FE] p-[2px] shadow-[0_0_15px_rgba(0,240,255,0.5)] transition-all duration-300 hover:shadow-[0_0_25px_rgba(148,66,254,0.5)]">
                      <div className="w-full h-full rounded-xl bg-black flex items-center justify-center">
                        <svg className="w-6 h-6 text-[#00F0FF]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="w-1/2"></div>
                </div>

                {/* Item 4 - Right */}
                <div className="flex items-center group">
                  <div className="w-1/2"></div>
                  <div className="absolute left-1/2 transform -translate-x-1/2">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-[#00F0FF] to-[#9442FE] p-[2px] shadow-[0_0_15px_rgba(0,240,255,0.5)] transition-all duration-300 hover:shadow-[0_0_25px_rgba(148,66,254,0.5)]">
                      <div className="w-full h-full rounded-xl bg-black flex items-center justify-center">
                        <svg className="w-6 h-6 text-[#9442FE]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="w-1/2 pl-16 float-right transition-all duration-500 ease-in-out">
                    <div className="mb-2">
                      <span className="inline-block px-3 py-1 bg-black/50 rounded-full text-sm text-[#9442FE] border border-[#9442FE]/30 shadow-[0_0_10px_rgba(148,66,254,0.3)] text-glow-purple">Contínuo</span>
                    </div>
                    <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-[#00F0FF] to-[#9442FE] text-transparent bg-clip-text text-glow">Treinamento Personalizado</h3>
                    <p className="text-gray-300 transition-all duration-300 group-hover:text-white">
                      Alimentamos o agente com dados reais, calibrando linguagem e decisões.
                    </p>
                  </div>
                </div>

                {/* Item 5 - Left */}
                <div className="flex items-center group">
                  <div className="w-1/2 pr-16 text-right float-left transition-all duration-500 ease-in-out">
                    <div className="mb-2">
                      <span className="inline-block px-3 py-1 bg-black/50 rounded-full text-sm text-[#00F0FF] border border-[#00F0FF]/30 shadow-[0_0_10px_rgba(0,240,255,0.3)] text-glow">2 dias úteis</span>
                    </div>
                    <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-[#00F0FF] to-[#9442FE] text-transparent bg-clip-text text-glow">Implementação Progressiva</h3>
                    <p className="text-gray-300 transition-all duration-300 group-hover:text-white">
                      Implantamos em fases, garantindo adaptação e evolução contínua.
                    </p>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-[#00F0FF] to-[#9442FE] p-[2px] shadow-[0_0_15px_rgba(0,240,255,0.5)] transition-all duration-300 hover:shadow-[0_0_25px_rgba(148,66,254,0.5)]">
                      <div className="w-full h-full rounded-xl bg-black flex items-center justify-center">
                        <svg className="w-6 h-6 text-[#00F0FF]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="w-1/2"></div>
                </div>

                {/* Item 6 - Right */}
                <div className="flex items-center group">
                  <div className="w-1/2"></div>
                  <div className="absolute left-1/2 transform -translate-x-1/2">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-[#00F0FF] to-[#9442FE] p-[2px] shadow-[0_0_15px_rgba(0,240,255,0.5)] transition-all duration-300 hover:shadow-[0_0_25px_rgba(148,66,254,0.5)]">
                      <div className="w-full h-full rounded-xl bg-black flex items-center justify-center">
                        <svg className="w-6 h-6 text-[#9442FE]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="w-1/2 pl-16 float-right transition-all duration-500 ease-in-out">
                    <div className="mb-2">
                      <span className="inline-block px-3 py-1 bg-black/50 rounded-full text-sm text-[#9442FE] border border-[#9442FE]/30 shadow-[0_0_10px_rgba(148,66,254,0.3)] text-glow-purple">Contínuo</span>
                    </div>
                    <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-[#00F0FF] to-[#9442FE] text-transparent bg-clip-text text-glow">Monitoramento Inteligente</h3>
                    <p className="text-gray-300 transition-all duration-300 group-hover:text-white">
                      Dashboards personalizados com métricas reais de impacto.
                    </p>
                  </div>
                </div>

                {/* Item 7 - Left */}
                <div className="flex items-center group">
                  <div className="w-1/2 pr-16 text-right float-left transition-all duration-500 ease-in-out">
                    <div className="mb-2">
                      <span className="inline-block px-3 py-1 bg-black/50 rounded-full text-sm text-[#00F0FF] border border-[#00F0FF]/30 shadow-[0_0_10px_rgba(0,240,255,0.3)] text-glow">Contínuo</span>
                    </div>
                    <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-[#00F0FF] to-[#9442FE] text-transparent bg-clip-text text-glow">Suporte e Evolução</h3>
                    <p className="text-gray-300 transition-all duration-300 group-hover:text-white">
                      Manutenção, atualizações e suporte completo para crescimento.
                    </p>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-[#00F0FF] to-[#9442FE] p-[2px] shadow-[0_0_15px_rgba(0,240,255,0.5)] transition-all duration-300 hover:shadow-[0_0_25px_rgba(148,66,254,0.5)]">
                      <div className="w-full h-full rounded-xl bg-black flex items-center justify-center">
                        <svg className="w-6 h-6 text-[#00F0FF]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="w-1/2"></div>
                </div>
              </div>

              {/* Timeline Footer with enhanced glow */}
              <div className="relative mt-32">
                <div className="absolute inset-0 bg-gradient-to-b from-[#00F0FF]/5 to-[#9442FE]/5 blur-3xl rounded-3xl"></div>
                <div className="relative p-8 rounded-3xl bg-black/40 backdrop-blur-xl border border-[#00F0FF]/10 shadow-[0_0_30px_rgba(0,240,255,0.1)] transform -translate-y-8 hover:-translate-y-10 transition-all duration-500">
                  <div className="absolute -top-12 left-1/2 transform -translate-x-1/2">
                    <div className="w-24 h-1 bg-gradient-to-r from-[#00F0FF] to-[#9442FE] rounded-full shadow-[0_0_20px_rgba(0,240,255,0.5)]"></div>
                  </div>
                  <h3 className="text-3xl font-bold text-center mb-6">
                    <span className="bg-gradient-to-r from-[#00F0FF] to-[#9442FE] text-transparent bg-clip-text text-glow relative">
                      Timeline Total: 10 a 17 dias
                      <div className="absolute -bottom-2 left-0 right-0 h-px bg-gradient-to-r from-[#00F0FF]/0 via-[#00F0FF]/50 to-[#9442FE]/0"></div>
                    </span>
                  </h3>
                  <p className="text-gray-300 text-center max-w-4xl mx-auto group-hover:text-white transition-all duration-300">
                    Do primeiro contato à entrega completa, nosso processo otimizado garante que você tenha um agente inteligente funcionando em menos de 3 semanas, com suporte contínuo para evolução.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced decorative elements */}
          <div className="absolute -left-20 -bottom-20 w-64 h-64 bg-[#00F0FF]/10 blur-[100px] rounded-full animate-pulse"></div>
          <div className="absolute -right-20 -top-20 w-64 h-64 bg-[#9442FE]/10 blur-[100px] rounded-full animate-pulse"></div>
        </section>

        {/* Featured Agents Section */}
        <section className="py-24 bg-[#080808] relative">
          <div className="container mx-auto px-6">
            <motion.div 
              className="max-w-4xl mx-auto text-center mb-16"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex justify-center mb-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20"
                >
                  <span className="text-sm text-white/90">Produtos e Serviços</span>
                </motion.div>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold mb-8">
                <span className="text-[#6B8AFF]">Agentes Humanizados</span>{" "}
                <span className="text-white">sob medida</span>
              </h2>
              <p className="text-xl text-gray-300">
                Cada agente é único, construído como uma peça de engenharia viva. Não entregamos "bots genéricos" — desenhamos mentes digitais para executar tarefas com precisão, autonomia e inteligência.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <AgentCard
                title="Monitoramento de Transações"
                description="Monitora transações em tempo real e envia alertas para comportamentos suspeitos."
                image="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
                delay={0}
              />
              <AgentCard
                title="Atendimento Automático"
                description="Responde a solicitações de clientes 24/7 integrando-se a canais de comunicação."
                image="https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1769&q=80"
                delay={0.2}
              />
              <AgentCard
                title="Integração com Firebase"
                description="Sincroniza dados entre Firebase e outras plataformas em tempo real."
                image="https://images.unsplash.com/photo-1597852074816-d933c7d2b988?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80"
                delay={0.4}
              />
            </div>

            <motion.div 
              className="text-center mt-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <Link to={createPageUrl("Portfolio")}>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-[#00f0ff]/20 to-[#9442fe]/20 border border-[#00f0ff]/30 text-white font-medium rounded-full flex items-center mx-auto space-x-2"
                >
                  <span>Ver Portfólio Completo</span>
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Case de Sucesso Section */}
        <section className="py-24 bg-black relative">
          <div className="container mx-auto px-6 relative">
            {/* Decorative gradient line at top */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-px bg-gradient-to-r from-transparent via-[#00F0FF] to-transparent opacity-50"></div>

            <div className="flex justify-center mb-12">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-black backdrop-blur-md border border-[#00F0FF]/30 shadow-[0_0_15px_rgba(0,240,255,0.2)]">
                <svg className="w-4 h-4 mr-2 text-[#00F0FF] drop-shadow-[0_0_3px_rgba(0,240,255,0.6)]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
                <span className="text-sm text-white/90">Case de Sucesso</span>
              </div>
            </div>

            <h2 className="text-4xl md:text-6xl font-bold text-center mb-16">
              <span className="text-[#00F0FF] drop-shadow-[0_0_8px_rgba(0,240,255,0.5)]">OakLab:</span>{" "}
              <span className="bg-gradient-to-r from-[#00F0FF] to-[#9442FE] text-transparent bg-clip-text">
                De 72% a 89% de qualificação
              </span>
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Lado Esquerdo - Informações */}
              <div className="bg-black backdrop-blur-xl rounded-2xl p-8 border border-[#00F0FF]/20 shadow-[0_0_25px_rgba(0,240,255,0.1)]">
                <div className="space-y-8">
                  <div>
                    <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-[#00F0FF] to-[#9442FE] text-transparent bg-clip-text">O Desafio</h3>
                    <p className="text-gray-300">
                      A OakLab, startup de biotecnologia, chegou até nós com um problema crítico: 
                      <span className="text-[#00F0FF] font-semibold drop-shadow-[0_0_3px_rgba(0,240,255,0.5)]"> 72% dos leads se perdiam</span> antes do contato humano. 
                      O time de vendas estava sobrecarregado e a qualificação era inconsistente.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-[#00F0FF] to-[#9442FE] text-transparent bg-clip-text">Nossa Solução</h3>
                    <p className="text-gray-300">
                      Criamos um agente inteligente conectado ao CRM e à base de dúvidas técnicas do produto. 
                      O agente qualifica leads automaticamente, responde questões técnicas e alimenta o time de 
                      vendas com insights reais.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-[#00F0FF] to-[#9442FE] text-transparent bg-clip-text">O Resultado</h3>
                    <p className="text-gray-300">
                      Em apenas 3 semanas, a taxa de qualificação aumentou para <span className="text-[#00F0FF] font-semibold drop-shadow-[0_0_3px_rgba(0,240,255,0.5)]">89%</span>. 
                      O agente agora aprende sozinho com as objeções mais comuns e gera relatórios semanais com insights acionáveis.
                    </p>
                  </div>
                </div>
              </div>

              {/* Lado Direito - Métricas */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Taxa de Qualificação */}
                <div className="col-span-2 bg-black backdrop-blur-xl rounded-2xl p-8 border border-[#00F0FF]/20 shadow-[0_0_25px_rgba(0,240,255,0.1)]">
                  <style jsx>{`
                    @keyframes loadBar {
                      0% { width: 0%; }
                      100% { width: var(--target-width); }
                    }
                    @keyframes pulse {
                      0%, 100% { opacity: 1; }
                      50% { opacity: 0.7; }
                    }
                    .animate-load-bar {
                      animation: loadBar 1.5s ease-out forwards, pulse 2s ease-in-out infinite;
                    }
                  `}</style>

                  <h4 className="text-xl mb-6 bg-gradient-to-r from-[#00F0FF] to-[#9442FE] text-transparent bg-clip-text font-bold">Taxa de Qualificação</h4>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-gray-400">Antes</span>
                        <span className="text-gray-400">72%</span>
                      </div>
                      <div className="h-2 bg-black/50 rounded-full overflow-hidden border border-white/10">
                        <div 
                          className="h-full bg-[#FF6B6B] rounded-full shadow-[0_0_10px_rgba(255,107,107,0.5)] animate-load-bar"
                          style={{"--target-width": "72%"}}
                        ></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-gray-400">Depois</span>
                        <span className="text-[#00F0FF] drop-shadow-[0_0_3px_rgba(0,240,255,0.5)]">89%</span>
                      </div>
                      <div className="h-2 bg-black/50 rounded-full overflow-hidden border border-white/10">
                        <div 
                          className="h-full bg-gradient-to-r from-[#00F0FF] to-[#9442FE] rounded-full shadow-[0_0_15px_rgba(0,240,255,0.5)] animate-load-bar"
                          style={{"--target-width": "89%"}}
                        ></div>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="text-[#4ADE80] text-sm drop-shadow-[0_0_3px_rgba(74,222,128,0.5)]">+17%</span>
                    </div>
                  </div>
                </div>

                {/* Conversões */}
                <motion.div 
                  className="bg-black backdrop-blur-xl rounded-2xl p-8 border border-[#00F0FF]/20 shadow-[0_0_25px_rgba(0,240,255,0.1)] group hover:border-[#00F0FF]/40 transition-all duration-300"
                  onViewportEnter={() => setIsVisible(true)}
                >
                  <div className="flex items-center justify-between mb-4">
                    <svg className="w-6 h-6 text-[#00F0FF] drop-shadow-[0_0_3px_rgba(0,240,255,0.6)] group-hover:scale-110 transition-transform duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                    <span className="text-[#4ADE80] text-2xl font-bold drop-shadow-[0_0_3px_rgba(74,222,128,0.5)]">+{count}%</span>
                  </div>
                  <h4 className="text-xl bg-gradient-to-r from-[#00F0FF] to-[#9442FE] text-transparent bg-clip-text font-bold">Conversões</h4>
                </motion.div>

                {/* Implementação */}
                <div className="bg-black backdrop-blur-xl rounded-2xl p-8 border border-[#9442FE]/20 shadow-[0_0_25px_rgba(148,66,254,0.1)] group hover:border-[#9442FE]/40 transition-all duration-300">
                  <div className="flex items-center justify-between mb-4">
                    <svg className="w-6 h-6 text-[#9442FE] drop-shadow-[0_0_3px_rgba(148,66,254,0.6)] group-hover:scale-110 transition-transform duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-2xl font-bold text-white">3 sem</span>
                  </div>
                  <h4 className="text-xl bg-gradient-to-r from-[#00F0FF] to-[#9442FE] text-transparent bg-clip-text font-bold">Implementação</h4>
                </div>

                {/* Disponibilidade */}
                <div className="bg-black backdrop-blur-xl rounded-2xl p-8 border border-[#00F0FF]/20 shadow-[0_0_25px_rgba(0,240,255,0.1)] group hover:border-[#00F0FF]/40 transition-all duration-300">
                  <div className="flex items-center justify-between mb-4">
                    <svg className="w-6 h-6 text-[#00F0FF] drop-shadow-[0_0_3px_rgba(0,240,255,0.6)] group-hover:scale-110 transition-transform duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    <span className="text-2xl font-bold text-[#00F0FF] drop-shadow-[0_0_3px_rgba(0,240,255,0.5)]">24/7</span>
                  </div>
                  <h4 className="text-xl bg-gradient-to-r from-[#00F0FF] to-[#9442FE] text-transparent bg-clip-text font-bold">Disponibilidade</h4>
                </div>

                {/* Memória */}
                <div className="bg-black backdrop-blur-xl rounded-2xl p-8 border border-[#9442FE]/20 shadow-[0_0_25px_rgba(148,66,254,0.1)] group hover:border-[#9442FE]/40 transition-all duration-300">
                  <div className="flex items-center justify-between mb-4">
                    <svg className="w-6 h-6 text-[#9442FE] drop-shadow-[0_0_3px_rgba(148,66,254,0.6)] group-hover:scale-110 transition-transform duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                    </svg>
                    <span className="text-2xl font-bold text-[#9442FE] drop-shadow-[0_0_3px_rgba(148,66,254,0.5)]">∞</span>
                  </div>
                  <h4 className="text-xl bg-gradient-to-r from-[#00F0FF] to-[#9442FE] text-transparent bg-clip-text font-bold">Memória</h4>
                </div>

                {/* Citação */}
                <div className="col-span-2 bg-black backdrop-blur-xl rounded-2xl p-8 border border-[#00F0FF]/20 shadow-[0_0_25px_rgba(0,240,255,0.1)]">
                  <blockquote className="text-center">
                    <p className="text-xl text-gray-300 italic mb-4">
                      "Foi como adicionar um vendedor técnico com memória infinita — sem custo fixo."
                    </p>
                    <footer className="text-sm">
                      <cite className="text-[#00F0FF] font-semibold block drop-shadow-[0_0_3px_rgba(0,240,255,0.5)]">CEO da OakLab</cite>
                      <span className="text-gray-400">Startup de Biotecnologia</span>
                    </footer>
                  </blockquote>
                </div>
              </div>
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute -left-20 -bottom-20 w-64 h-64 bg-[#9442FE]/5 blur-[100px] rounded-full animate-pulse"></div>
          <div className="absolute -right-20 -top-20 w-64 h-64 bg-[#00F0FF]/5 blur-[100px] rounded-full animate-pulse"></div>
          
          {/* Decorative gradient line at bottom */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/3 h-px bg-gradient-to-r from-transparent via-[#9442FE] to-transparent opacity-50"></div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-black">
          <div className="container mx-auto px-6">
            <motion.div 
              className="max-w-5xl mx-auto bg-gradient-to-r from-[#111111] to-[#1a1a1a] p-12 rounded-2xl border border-gray-800 relative overflow-hidden"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <div className="absolute -right-20 -top-20 w-64 h-64 bg-[#9442fe]/20 blur-[100px] rounded-full"></div>
              <div className="absolute -left-20 -bottom-20 w-64 h-64 bg-[#00f0ff]/20 blur-[100px] rounded-full"></div>
              
              <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="text-center md:text-left">
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    Pronto para decolar?
                  </h2>
                  <p className="text-xl text-gray-300">
                    Fale com a Ugarit e transforme seu negócio com automação de outro nível.
                  </p>
                </div>
                <Link to={createPageUrl("Contact")}>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 bg-gradient-to-r from-[#00f0ff] to-[#9442fe] text-black font-bold rounded-full whitespace-nowrap flex items-center space-x-2"
                  >
                    <span>Quero Inovar com a Ugarit</span>
                    <Zap className="w-5 h-5" />
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}

// Helper Components
const FeatureCard = ({ icon, title, description, delay }) => {
  return (
    <motion.div
      className="relative rounded-xl overflow-hidden backdrop-blur-md border border-[#00f0ff]/20 p-8 transition-all duration-500 group"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ delay, duration: 0.8 }}
      whileHover={{ 
        scale: 1.05, 
        y: -5,
        borderColor: "rgba(0, 240, 255, 0.4)",
        transition: { duration: 0.3, ease: "easeOut" }
      }}
    >
      {/* Efeito de glow no background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#00f0ff]/5 via-transparent to-[#9442fe]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></div>
      
      {/* Conteúdo */}
      <div className="relative z-10">
        <div className="w-14 h-14 rounded-full bg-gradient-to-r from-[#00f0ff]/20 to-[#9442fe]/20 flex items-center justify-center mb-6 group-hover:from-[#00f0ff]/30 group-hover:to-[#9442fe]/30 transition-all duration-300 shadow-[0_0_15px_rgba(0,240,255,0.3)] group-hover:shadow-[0_0_25px_rgba(0,240,255,0.5)]">
          <IconComponent name={icon} className="w-6 h-6 text-[#00f0ff] drop-shadow-[0_0_5px_rgba(0,240,255,0.5)]" />
        </div>
        <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-[#00f0ff] to-[#9442fe] bg-clip-text text-transparent drop-shadow-[0_0_2px_rgba(0,240,255,0.3)]">{title}</h3>
        <p className="text-gray-400 transition-all duration-300 group-hover:text-gray-300">{description}</p>
      </div>

      {/* Bordas com glow */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#00f0ff]/50 to-transparent"></div>
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#9442fe]/50 to-transparent"></div>
        <div className="absolute inset-y-0 left-0 w-px bg-gradient-to-b from-transparent via-[#00f0ff]/50 to-transparent"></div>
        <div className="absolute inset-y-0 right-0 w-px bg-gradient-to-b from-transparent via-[#9442fe]/50 to-transparent"></div>
      </div>
    </motion.div>
  );
};

const AgentCard = ({ title, description, image, delay }) => {
  return (
    <motion.div
      className="relative rounded-xl overflow-hidden group h-96"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ delay, duration: 0.8 }}
      whileHover={{ y: -5 }}
    >
      <div className="absolute inset-0">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent opacity-70 group-hover:opacity-90 transition-opacity"></div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-4 group-hover:translate-y-0 transition-transform">
        <h3 className="text-2xl font-bold mb-3">{title}</h3>
        <p className="text-gray-300 mb-6 opacity-0 group-hover:opacity-100 transition-opacity">{description}</p>
        <Link to={createPageUrl("Portfolio")}> 
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-5 py-2.5 rounded-full bg-white/10 backdrop-blur-md hover:bg-white/20 text-white font-medium text-sm border border-white/30 flex items-center space-x-2"
          >
            <span>Ver em ação</span>
            <ArrowRight className="w-4 h-4" />
          </motion.button>
        </Link>
      </div>
    </motion.div>
  );
};

const IconComponent = ({ name, className }) => {
  switch (name) {
    case 'star':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24">
          <motion.path
            d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
            stroke="currentColor"
            strokeWidth={1.5}
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </svg>
      );
    case 'brain':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24">
          <motion.path
            d="M12 8c3.5 0 6 2.5 6 6s-2.5 6-6 6-6-2.5-6-6 2.5-6 6-6zm0 0V3m0 5c-1.5 0-3 .5-4 1.5M12 8c1.5 0 3 .5 4 1.5"
            stroke="currentColor"
            strokeWidth={1.5}
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.circle
            cx="12"
            cy="14"
            r="2"
            stroke="currentColor"
            strokeWidth={1.5}
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          />
        </svg>
      );
    case 'shield':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24">
          <motion.path
            d="M12 2L3 7v6c0 5.5 3.8 10.7 9 12 5.2-1.3 9-6.5 9-12V7l-9-5z"
            stroke="currentColor"
            strokeWidth={1.5}
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.path
            d="M12 9l2 2-2 2-2-2 2-2z"
            stroke="currentColor"
            strokeWidth={1.5}
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          />
        </svg>
      );
    case 'code':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24">
          <motion.path
            d="M16 18l6-6-6-6M8 6l-6 6 6 6"
            stroke="currentColor"
            strokeWidth={1.5}
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </svg>
      );
    case 'users':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24">
          <motion.path
            d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"
            stroke="currentColor"
            strokeWidth={1.5}
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.circle
            cx="9"
            cy="7"
            r="4"
            stroke="currentColor"
            strokeWidth={1.5}
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          />
          <motion.path
            d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"
            stroke="currentColor"
            strokeWidth={1.5}
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          />
        </svg>
      );
    case 'award':
      return (
        <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24">
          <motion.circle
            cx="12"
            cy="8"
            r="6"
            stroke="currentColor"
            strokeWidth={1.5}
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.path
            d="M15.477 12.89L16.5 22l-4.5-3-4.5 3 1.023-9.11"
            stroke="currentColor"
            strokeWidth={1.5}
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          />
        </svg>
      );
    default:
      return null;
  }
}; 