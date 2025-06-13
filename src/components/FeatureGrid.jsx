import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Architecture, Robot, Network, Code, BarChart3 } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: "Segurança Estrutural Nativa",
    description: "Na Ugarit, proteção de dados não é uma etapa — é uma obsessão. Do back-end ao front, cada camada do projeto é construída com criptografia, isolamento lógico e boas práticas de segurança aplicadas por quem entende rede, servidor, acesso e vazamento. Você não precisa de um selo de segurança quando o arquiteto da solução é um dev paranoico por segurança."
  },
  {
    icon: Architecture,
    title: "Arquitetura Inteligente Sob Medida",
    description: "Nada que entregamos é genérico. Cada projeto nasce com um propósito, e a arquitetura acompanha: Se é um agente simples, usamos ferramentas ágeis. Se é um sistema complexo, escrevemos cada linha de código para maximizar performance e controle. Você não compra uma solução. Você recebe uma inteligência moldada à mão."
  },
  {
    icon: Robot,
    title: "Agentes Versáteis para Múltiplos Cenários",
    description: "Respondem no WhatsApp. Executam tarefas internas. Automatizam processos silenciosos. A gente entende a real demanda do negócio e cria agentes para ela — seja ela simples ou profunda, visível ou invisível. Não vendemos IA de prateleira. Entregamos força de trabalho digital, adaptável."
  },
  {
    icon: Network,
    title: "Integração Nativa com Seus Sistemas",
    description: "Seus dados estão em um banco PostgreSQL? Supabase? Um sistema legado? Nós integramos com acesso direto e com total controle. Nada de 'API conectada por fora que dá bug'. Aqui é conexão de verdade, com entendimento técnico total. Seu sistema fala com a IA como se ela fosse parte dele. Porque agora é."
  },
  {
    icon: Code,
    title: "Desenvolvimento Real, Não Montagem",
    description: "Aqui não tem 'montei com Zapier e arrastei blocos'. Tem código, lógica, tratamento de dados, arquitetura pensada. Se o seu projeto exige profundidade, nós temos profundidade pra entregar. Se precisa de low-code, a gente faz. Se precisa de engenharia, a gente escreve."
  },
  {
    icon: BarChart3,
    title: "Transparência Total e Métricas",
    description: "Nosso processo é direto: diagnóstico, protótipo, teste, rollout parcial, ajustes e entrega final. Em cada etapa, você entende o que está sendo feito — e por que. Além disso, criamos dashboards personalizados, com as métricas que realmente importam para o seu negócio. Você não precisa confiar no escuro. Os dados mostram, com precisão, o impacto do que construímos."
  }
];

const FeatureGrid = () => {
  return (
    <section className="py-24 bg-[#080808]">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="p-8 rounded-xl bg-[#0f0f0f] hover:bg-[#1a1a1a] transition-colors"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex items-center justify-center w-14 h-14 mb-8 rounded-lg bg-gradient-to-br from-purple-600 to-blue-600">
                {React.createElement(feature.icon, { className: "w-7 h-7 text-white" })}
              </div>
              <h3 className="text-2xl font-bold mb-4 gradient-text">{feature.title}</h3>
              <p className="text-gray-400 leading-relaxed text-lg">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureGrid; 