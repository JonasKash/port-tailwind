import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Check, Star, Users, Trophy, Brain, Target } from 'lucide-react';

const passos = [
  {
    titulo: "Inscrição seletiva",
    descricao: "Preencha o formulário com seus dados e perfil para análise de compatibilidade com os princípios da marca.",
    icon: Users
  },
  {
    titulo: "Link exclusivo",
    descricao: "Receba seu link rastreável com código único para que todas as suas indicações sejam automaticamente associadas a você.",
    icon: Target
  },
  {
    titulo: "Indique com classe",
    descricao: "Use seu network para apresentar a Ugarit Digital a empresas que buscam eficiência e autonomia digital.",
    icon: Star
  },
  {
    titulo: "Fechou? Ganhou.",
    descricao: "Cada contrato fechado gera uma bonificação direta proporcional ao projeto.",
    icon: Trophy
  }
];

const beneficios = [
  "Acesso preferencial ao time",
  "Onboarding personalizado",
  "Brindes digitais ou físicos",
  "Surpresas exclusivas"
];

const perfilAfiliado = [
  "Profissionais de tecnologia, marketing ou inovação",
  "Consultores de negócio ou estrategistas digitais",
  "Donos de empresas com bom relacionamento no mercado",
  "Pessoas com influência real em redes ou comunidades específicas",
  "Gente esperta com bom faro para oportunidade"
];

const beneficiosAfiliados = [
  "Bonificação por contratos fechados",
  "Acesso antecipado a novidades",
  "Materiais de apoio exclusivos",
  "Canal direto com o time Ugarit",
  "Potencial de recorrência",
  "Reconhecimento oficial como parceiro"
];

export default function Parceiros() {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="absolute top-0 right-0 w-1/3 h-64 bg-[#9442fe]/20 blur-[120px]"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-64 bg-[#00f0ff]/20 blur-[120px]"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div 
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-7xl font-bold mb-6">
              Ganhe poder por indicar <span className="gradient-text">inovação</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              Seja um afiliado da Ugarit Digital e participe da revolução da inteligência automatizada.
            </p>
            <p className="text-2xl md:text-3xl font-semibold mb-4">
              Não é sobre vender.
            </p>
            <p className="text-xl text-gray-300 mb-12">
              É sobre conectar mentes inquietas com soluções que transformam o tempo em crescimento.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowForm(true)}
              className="px-8 py-4 bg-gradient-to-r from-[#00f0ff] to-[#9442fe] text-black font-bold rounded-full text-lg"
            >
              Quero ser afiliado
              <ArrowRight className="inline-block ml-2 w-6 h-6" />
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* O que é o Programa Section */}
      <section className="py-32 bg-black relative">
        <div className="container mx-auto px-6">
          <motion.div 
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-16">
              O que é o <span className="bg-gradient-to-r from-[#00f0ff] to-[#9442fe] text-transparent bg-clip-text">Programa de Afiliação</span><br/> da Ugarit?
            </h2>
            <motion.p 
              className="text-2xl text-gray-300 mb-10 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Na Ugarit Digital, não temos clientes. Temos visionários.
            </motion.p>
            <motion.p 
              className="text-xl text-gray-300 mb-12 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              E agora, temos afiliados — pessoas com visão afiada<br/>e bom gosto para tecnologia de ponta.
            </motion.p>
            <motion.p 
              className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              O nosso Programa de Afiliação é a ponte entre você e empresas<br/>
              que precisam de automação inteligente, agentes personalizados<br/>
              e soluções que funcionam sozinhas.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Como Funciona Section */}
      <section className="py-24 bg-gradient-to-b from-black to-gray-900 relative">
        <div className="container mx-auto px-6">
          <motion.h2 
            className="text-3xl md:text-5xl font-bold mb-16 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Como <span className="gradient-text">Funciona</span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {passos.map((passo, index) => (
              <motion.div
                key={passo.titulo}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                className="bg-gradient-to-b from-gray-800/30 to-gray-900/30 border border-gray-800 rounded-xl p-8"
              >
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-[#00f0ff]/20 to-[#9442fe]/20 flex items-center justify-center mb-6">
                  {React.createElement(passo.icon, { className: "w-8 h-8 text-[#00f0ff]" })}
                </div>
                <h3 className="text-xl font-bold mb-4">{passo.titulo}</h3>
                <p className="text-gray-400">{passo.descricao}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefícios do Cliente Section */}
      <section className="py-24 bg-black relative">
        <div className="container mx-auto px-6">
          <motion.div
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center">
              Cliente indicado também <span className="gradient-text">ganha</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {beneficios.map((beneficio, index) => (
                <motion.div
                  key={beneficio}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.8 }}
                  className="flex items-center space-x-4"
                >
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#00f0ff]/20 to-[#9442fe]/20 flex items-center justify-center flex-shrink-0">
                    <Check className="w-6 h-6 text-[#00f0ff]" />
                  </div>
                  <span className="text-xl text-gray-300">{beneficio}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quem Pode Ser Section */}
      <section className="py-24 bg-gradient-to-b from-black to-gray-900 relative">
        <div className="container mx-auto px-6">
          <motion.div
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center">
              Quem pode se tornar um <span className="gradient-text">afiliado</span>?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {perfilAfiliado.map((perfil, index) => (
                <motion.div
                  key={perfil}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.8 }}
                  className="flex items-center space-x-4"
                >
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#00f0ff]/20 to-[#9442fe]/20 flex items-center justify-center flex-shrink-0">
                    <Brain className="w-6 h-6 text-[#00f0ff]" />
                  </div>
                  <span className="text-xl text-gray-300">{perfil}</span>
                </motion.div>
              ))}
            </div>
            <p className="text-xl text-center mt-12 text-gray-300 font-semibold">
              Mas lembre-se: não é para todos.<br/>
              Aqui, a afiliação é um selo de confiança.
            </p>
          </motion.div>
        </div>
      </section>

      {/* O que Oferecemos Section */}
      <section className="py-24 bg-black relative">
        <div className="container mx-auto px-6">
          <motion.div
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center">
              O que <span className="gradient-text">oferecemos</span> para os afiliados
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {beneficiosAfiliados.map((beneficio, index) => (
                <motion.div
                  key={beneficio}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.8 }}
                  className="flex items-center space-x-4"
                >
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#00f0ff]/20 to-[#9442fe]/20 flex items-center justify-center flex-shrink-0">
                    <Star className="w-6 h-6 text-[#00f0ff]" />
                  </div>
                  <span className="text-xl text-gray-300">{beneficio}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Final Section */}
      <section className="py-24 bg-gradient-to-b from-black to-gray-900 relative">
        <div className="container mx-auto px-6">
          <motion.div 
            className="max-w-5xl mx-auto bg-gradient-to-r from-[#111111] to-[#1a1a1a] p-12 rounded-2xl border border-gray-800 relative overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="absolute -right-20 -top-20 w-64 h-64 bg-[#9442fe]/20 blur-[100px] rounded-full"></div>
            <div className="absolute -left-20 -bottom-20 w-64 h-64 bg-[#00f0ff]/20 blur-[100px] rounded-full"></div>
            
            <div className="relative z-10 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Você já indica tudo que acredita.
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Está na hora de indicar algo que muda o jogo — e ser reconhecido por isso.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setShowForm(true)}
                className="px-8 py-4 bg-gradient-to-r from-[#00f0ff] to-[#9442fe] text-black font-bold rounded-full text-lg"
              >
                Quero ser afiliado
                <ArrowRight className="inline-block ml-2 w-6 h-6" />
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
} 