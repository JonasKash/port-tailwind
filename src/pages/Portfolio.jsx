import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "../utils";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Plus, X, ChevronRight, ChevronLeft } from "lucide-react";
import ChatInterface from "../components/ChatInterface";

export default function Portfolio() {
  const [selectedAgent, setSelectedAgent] = useState(null);
  const [filter, setFilter] = useState("all");
  const [showChat, setShowChat] = useState(false);

  const categories = [
    { id: "all", name: "Todos" },
    { id: "integration", name: "Integração" },
    { id: "automation", name: "Automação" },
    { id: "monitoring", name: "Monitoramento" },
    { id: "communication", name: "Comunicação" }
  ];

  // Array de agentes com webhookUrl, initialMessage e videoUrl individuais
  const agents = [
    {
      id: 1,
      title: "Agente Max – Farmácia Inteligente",
      category: "automation",
      description: "Atendimento automático e eficaz para redes farmacêuticas",
      image: "/assets/videos/Agente_Max.gif",
      videoUrl: "/assets/videos/Agente_Max.gif",
      longDescription: "Imagine oferecer um atendimento 24/7, sem filas, sem ruído, com respostas certeiras e pedidos registrados em tempo real. O Agente Max foi treinado com base em redes reais de farmácias e já está em produção. Ele atende, entende e executa.",
      features: [
        "Catálogo de medicamentos e produtos",
        "Localização da farmácia mais próxima",
        "Consulta de disponibilidade em estoque",
        "Pedido direto pelo WhatsApp",
        "Encaminhamento para atendimento humano (se necessário)"
      ],
      workflow: [
        "Recebimento do pedido",
        "Verificação de disponibilidade",
        "Processamento do pedido",
        "Confirmação de pagamento",
        "Entrega ou retirada"
      ],
      webhookUrl: "https://portfolio.n8n.ugaritdigital.com/webhook/atendimento",
      initialMessage: "Olá! Sou o Agente Max da Farmácia. Como posso ajudar você hoje?"
    },
    {
      id: 2,
      title: "Agente de RH – Recrutamento Automatizado com Filtro Inteligente",
      category: "automation",
      description: "Receba currículos, analise perfis e pré-qualifique candidatos sem esforço",
      image: "/assets/videos/Agente_RAG.gif",
      videoUrl: "/assets/videos/Agente_RAG.gif",
      longDescription: "Ideal para empresas que recebem muitos currículos, mas têm pouco tempo para analisá-los. Esse agente automatiza desde a captação até a triagem dos candidatos, entregando apenas os mais alinhados com o perfil desejado.",
      features: [
        "Recebimento de currículos (PDF, DOC, etc.)",
        "Extração e análise de dados do candidato",
        "Aplicação de perguntas personalizadas",
        "Geração de score de adequação",
        "Envio dos mais qualificados para o RH"
      ],
      workflow: [
        "Recebimento do currículo",
        "Análise automática do perfil",
        "Pontuação do candidato",
        "Filtragem por requisitos",
        "Encaminhamento ao RH"
      ],
      webhookUrl: "https://portfolio.n8n.ugaritdigital.com/webhook/atendimento",
      initialMessage: "Olá! Sou o Agente de RH. Como posso ajudar no seu processo seletivo?"
    },
    {
      id: 3,
      title: "Agente SDR – Qualificação e Agendamento Inteligente",
      category: "automation",
      description: "Leads entram, reuniões saem — sem fricção, sem perda de tempo",
      image: "/assets/videos/antendimento_automatico.gif",
      videoUrl: "/assets/videos/antendimento_automatico.gif",
      longDescription: "Esse agente entra em ação no fim do teste de qualquer outro agente. Ele conversa, qualifica e, se fizer sentido, agenda automaticamente uma reunião com seu time. Tudo sem parecer robótico, sempre respeitando o tempo e a atenção do lead.",
      features: [
        "Conversa com leads pós-teste",
        "Geração de interesse com base na interação",
        "Validação de perfil e intenção",
        "Agendamento direto no Google Calendar",
        "Integração com CRM"
      ],
      workflow: [
        "Qualificação inicial do lead",
        "Análise de interesse",
        "Verificação de disponibilidade",
        "Agendamento da reunião",
        "Confirmação e lembretes"
      ],
      webhookUrl: "https://portfolio.n8n.ugaritdigital.com/webhook/sdr",
      initialMessage: "Olá! Sou o Agente SDR. Vamos agendar uma conversa sobre nossos serviços?"
    },
    {
      id: 4,
      title: "Agente Imobiliário – Atendimento 100% Especializado no Setor",
      category: "integration",
      description: "Atendimento imobiliário 24/7 com conhecimento de mercado e integração com CRM",
      image: "/assets/videos/Agente_Imobiliario.gif",
      videoUrl: "/assets/videos/Agente_Imobiliario.gif",
      longDescription: "Desenvolvido para o mercado imobiliário, esse agente conhece os termos técnicos, entende as dúvidas comuns e sabe como qualificar interessados. Ele pode ser treinado com seu portfólio de imóveis e integrado ao seu CRM.",
      features: [
        "Apresentação de imóveis disponíveis",
        "Resposta a dúvidas técnicas e financeiras",
        "Qualificação de leads por perfil e orçamento",
        "Agendamento de visitas",
        "Integração com sistemas imobiliários"
      ],
      workflow: [
        "Atendimento inicial",
        "Entendimento da necessidade",
        "Apresentação de opções",
        "Qualificação do interesse",
        "Agendamento ou encaminhamento"
      ],
      webhookUrl: "https://portfolio.n8n.ugaritdigital.com/webhook/imobiliario",
      initialMessage: "Olá! Sou o Agente Imobiliário. Como posso ajudar na sua busca por imóveis?"
    },
    {
      id: 5,
      title: "Agente Emocional – Suporte Psicológico Preliminar",
      category: "communication",
      description: "Primeiro acolhimento para pessoas em busca de apoio emocional",
      image: "/assets/videos/Agente_Emocional.gif",
      videoUrl: "/assets/videos/Agente_Emocional.gif",
      longDescription: "Esse agente foi treinado para oferecer um primeiro acolhimento a pessoas em busca de apoio emocional. Ele não substitui um profissional, mas pode ajudar a identificar sinais de alerta e encaminhar para o atendimento adequado.",
      features: [
        "Escuta ativa e acolhimento",
        "Identificação de sinais de alerta",
        "Técnicas básicas de respiração e mindfulness",
        "Encaminhamento para profissionais",
        "Acompanhamento de bem-estar"
      ],
      workflow: [
        "Acolhimento inicial",
        "Escuta e validação",
        "Oferta de técnicas simples",
        "Avaliação de necessidade",
        "Encaminhamento quando necessário"
      ],
      webhookUrl: "https://portfolio.n8n.ugaritdigital.com/webhook/emocional",
      initialMessage: "Olá! Sou o Agente Emocional. Como está se sentindo hoje?"
    },
    {
      id: 6,
      title: "Agente de Atendimento – Suporte Técnico Especializado",
      category: "communication",
      description: "Resolva problemas técnicos e dúvidas de clientes com eficiência",
      image: "/assets/videos/Agente_Atendimento.gif",
      videoUrl: "/assets/videos/Agente_Atendimento.gif",
      longDescription: "Treinado para resolver problemas técnicos comuns e responder dúvidas frequentes, esse agente reduz drasticamente o volume de tickets de suporte. Ele pode ser integrado à sua base de conhecimento e sistemas internos.",
      features: [
        "Resolução de problemas técnicos comuns",
        "Acesso à base de conhecimento",
        "Abertura de tickets quando necessário",
        "Acompanhamento de satisfação",
        "Coleta de feedback"
      ],
      workflow: [
        "Identificação do problema",
        "Busca na base de conhecimento",
        "Sugestão de soluções",
        "Verificação de resolução",
        "Escalamento quando necessário"
      ],
      webhookUrl: "https://portfolio.n8n.ugaritdigital.com/webhook/suporte",
      initialMessage: "Olá! Sou o Agente de Atendimento. Como posso ajudar com seu problema técnico?"
    }
  ];

  const filteredAgents = filter === "all" 
    ? agents 
    : agents.filter(agent => agent.category === filter);

  const handleAgentClick = (agent) => {
    setSelectedAgent(agent);
    setShowChat(false); // Reset chat state when changing agents
  };

  const handleCloseDetail = () => {
    setSelectedAgent(null);
    setShowChat(false);
  };

  const handleOpenChat = () => {
    setShowChat(true);
  };

  const handleCloseChat = () => {
    setShowChat(false);
  };

  return (
    <>
      <div className="min-h-screen bg-black">
        <AnimatePresence>
          {selectedAgent && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-sm"
            >
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 50 }}
                transition={{ duration: 0.3 }}
                className="relative min-h-screen"
              >
                {/* Close Button */}
                <button
                  onClick={handleCloseDetail}
                  className="absolute top-4 right-4 z-10 p-2 rounded-full bg-gray-800/80 text-gray-400 hover:text-white hover:bg-gray-700/80 transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>

                {/* Chat Interface */}
                {showChat ? (
                  <div className="fixed inset-0 z-10 flex items-center justify-center p-4">
                    <div className="w-full max-w-2xl h-[80vh] bg-gray-900 rounded-2xl overflow-hidden shadow-2xl border border-gray-800">
                      <ChatInterface 
                        agentName={selectedAgent.title}
                        webhookUrl={selectedAgent.webhookUrl}
                        initialMessage={selectedAgent.initialMessage}
                        onClose={handleCloseChat}
                      />
                    </div>
                  </div>
                ) : (
                  <>
                    {/* Replaced img with video */}
                    <div className="relative h-64 sm:h-96 bg-black"> {/* Added bg-black as fallback */}
                      {selectedAgent.videoUrl ? (
                        <img
                          key={selectedAgent.id} // Add key to force re-render on agent change
                          src={selectedAgent.videoUrl}
                          alt={`Demonstração do ${selectedAgent.title}`} // Alt text for accessibility
                          className="w-full h-full object-cover" // Use object-cover to fill the container
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center bg-gray-900">
                          <p className="text-gray-500">Vídeo não disponível</p>
                        </div>
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
                    </div>

                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Left Column - Agent Info */}
                        <div className="lg:col-span-2">
                          <h1 className="text-3xl md:text-4xl font-bold mb-4">{selectedAgent.title}</h1>
                          <p className="text-xl text-gray-300 mb-8">{selectedAgent.longDescription}</p>
                          
                          {/* Features */}
                          <div className="mb-8">
                            <h2 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-[#00F0FF] to-[#9442FE] text-transparent bg-clip-text">Recursos</h2>
                            <ul className="space-y-2">
                              {selectedAgent.features.map((feature, index) => (
                                <li key={index} className="flex items-start">
                                  <span className="flex-shrink-0 h-6 w-6 text-[#00F0FF] mr-2">•</span>
                                  <span className="text-gray-300">{feature}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                        
                        {/* Right Column - Workflow */}
                        <div>
                          <h2 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-[#00F0FF] to-[#9442FE] text-transparent bg-clip-text">Fluxo de Trabalho</h2>
                          <div className="border border-gray-800 rounded-xl p-6 bg-gray-900/50">
                            <div className="flow-root">
                              <ul className="-mb-8">
                                {selectedAgent.workflow.map((step, index) => (
                                  <li key={index} className="relative pb-8">
                                    {index !== selectedAgent.workflow.length - 1 ? (
                                      <span
                                        className="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-800"
                                        aria-hidden="true"
                                      />
                                    ) : null}
                                    <div className="relative flex space-x-3">
                                      <div>
                                        <span className="h-8 w-8 rounded-full bg-gray-800 flex items-center justify-center ring-4 ring-black">
                                          <span className="text-[#00F0FF]">{index + 1}</span>
                                        </span>
                                      </div>
                                      <div className="min-w-0 flex-1 py-1.5">
                                        <div className="text-lg text-gray-300">
                                          {step}
                                        </div>
                                      </div>
                                    </div>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                          {/* Botão para abrir o chat */}
                          <div className="pt-8 text-center">
                            <motion.button
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                              onClick={handleOpenChat}
                              className="inline-flex items-center px-8 py-3 border border-transparent text-lg font-medium rounded-full shadow-lg text-black bg-gradient-to-r from-[#00f0ff] to-[#9442fe] hover:from-[#00d0df] hover:to-[#8432ee] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#00f0ff]/50 transition-all duration-300"
                            >
                              Solicitar Este Agente
                              <Plus className="ml-2 -mr-1 h-5 w-5" />
                            </motion.button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                )}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
        {/* Main Content - Portfolio Grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="text-4xl font-bold text-center mb-4 gradient-text">Portfólio de Agentes</h1>
          <p className="text-xl text-gray-400 text-center mb-12 max-w-3xl mx-auto">
            Explore nossos agentes especializados, prontos para automatizar e otimizar diversas áreas do seu negócio.
          </p>
          {/* Category Filters */}
          <div className="flex justify-center space-x-2 sm:space-x-4 mb-12 flex-wrap">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setFilter(category.id)}
                className={`px-4 py-2 mb-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                  filter === category.id
                    ? "bg-gradient-to-r from-[#00f0ff] to-[#9442fe] text-black"
                    : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
          {/* Agent Grid */}
          <motion.div 
            layout 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence>
              {filteredAgents.map((agent) => (
                <motion.div
                  key={agent.id}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.3 }}
                  className="bg-gray-900 rounded-2xl overflow-hidden shadow-lg border border-gray-800 flex flex-col h-full group cursor-pointer"
                  onClick={() => handleAgentClick(agent)}
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={agent.image}
                      alt={agent.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                    <span className="absolute top-4 left-4 px-2 py-0.5 text-xs rounded-full bg-gray-800/70 text-gray-300">
                      {categories.find(c => c.id === agent.category)?.name}
                    </span>
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-xl font-semibold mb-2">{agent.title}</h3>
                    <p className="text-gray-400 text-sm mb-4 flex-grow">{agent.description}</p>
                    <div className="mt-auto">
                      <span className="inline-flex items-center text-sm font-medium text-[#00f0ff] group-hover:text-[#9442fe] transition-colors">
                        Ver Detalhes
                        <ArrowRight className="ml-1 h-4 w-4" />
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </>
  );
}
