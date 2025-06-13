import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Zap, Settings } from 'lucide-react';

const features = [
  {
    icon: Code2,
    title: "Segurança Estrutural Nativa",
    description: "Na Ugarit, proteção de dados não é uma etapa — é uma obsessão. Do back-end ao front, cada camada do projeto é construída com criptografia, isolamento lógico e boas práticas de segurança aplicadas por quem entende rede, servidor, acesso e vazamento."
  },
  {
    icon: Zap,
    title: "Arquitetura Inteligente Sob Medida",
    description: "Nada que entregamos é genérico. Cada projeto nasce com um propósito, e a arquitetura acompanha: Se é um agente simples, usamos ferramentas ágeis. Se é um sistema complexo, escrevemos cada linha de código para maximizar performance e controle."
  },
  {
    icon: Settings,
    title: "Agentes Versáteis para Múltiplos Cenários",
    description: "Respondem no WhatsApp. Executam tarefas internas. Automatizam processos silenciosos. A gente entende a real demanda do negócio e cria agentes para ela — seja ela simples ou profunda, visível ou invisível."
  }
];

const HeroFeatures = () => {
  return (
    <section className="py-16 bg-[#080808]">
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Nascemos para desafiar o status quo. Unimos IA generativa, automação no-code e ousadia para criar uma nova linguagem digital no setor imobiliário.
          </h2>
          <p className="text-xl text-gray-400">
            Nossa missão? Ser a bússola digital dos líderes visionários, entregando automação sob medida, eficiência máxima e experiências que vão além do comum.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="p-8 rounded-xl bg-[#0f0f0f] hover:bg-[#1a1a1a] transition-colors"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex items-center justify-center w-14 h-14 mb-6 rounded-lg bg-gradient-to-br from-purple-600 to-blue-600">
                {React.createElement(feature.icon, { className: "w-7 h-7 text-white" })}
              </div>
              <h3 className="text-xl font-bold mb-4 gradient-text">{feature.title}</h3>
              <p className="text-gray-400 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroFeatures; 