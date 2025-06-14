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
      webhookUrl: "https://n8n.ugaritdigital.com/webhook/firebase",
      initialMessage: "Olá! Sou o Agente Max da Farmácia. Como posso ajudar você hoje?"
    },
    {
      id: 2,
      title: "Agente de RH – Recrutamento Automatizado com Filtro Inteligente",
      category: "integration",
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
      webhookUrl: "https://n8n.ugaritdigital.com/webhook/firebase",
      initialMessage: "Olá! Sou o Agente de RH. Como posso ajudar no seu processo seletivo?"
    },
    {
      id: 3,
      title: "Agente SDR – Qualificação e Agendamento Inteligente",
      category: "communication",
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
      webhookUrl: "https://n8n.ugaritdigital.com/webhook/firebase",
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
      webhookUrl: "https://n8n.ugaritdigital.com/webhook/firebase",
      initialMessage: "Olá! Sou o Agente Imobiliário. Como posso ajudar na sua busca por imóveis?"
    },
    {
      id: 5,
      title: "Agente Emocional – Suporte Psicológico Preliminar",
      category: "monitoring",
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
      webhookUrl: "https://n8n.ugaritdigital.com/webhook/firebase",
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
      webhookUrl: "https://n8n.ugaritdigital.com/webhook/firebase",
      initialMessage: "Olá! Sou o Agente de Atendimento. Como posso ajudar com seu problema técnico?"
    }
  ];

  const filteredAgents = filter === "all" 
    ? agents 
    : agents.filter(agent => agent.category === filter);

  const handleAgentClick = (agent) => {
    setSelectedAgent(agent);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleClose = () => {
    setSelectedAgent(null);
    setShowChat(false);
  };

  const handleOpenChat = () => {
    setShowChat(true);
  };

  const handleCloseDetail = () => {
    setSelectedAgent(null);
    setShowChat(false);
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, []);

  return (
    <>
      <div className="min-h-screen bg-black">
        {/* Chat Interface */}
        <AnimatePresence>
          {showChat && selectedAgent && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80"
            >
              <div className="w-full max-w-4xl h-[80vh] bg-gray-900 rounded-2xl shadow-2xl overflow-hidden">
                <div className="flex justify-between items-center p-4 border-b border-gray-800">
                  <h3 className="text-xl font-semibold text-white">Chat com {selectedAgent.title}</h3>
                  <button
                    onClick={handleCloseDetail}
                    className="p-2 rounded-full hover:bg-gray-800 transition-colors"
                  >
                    <X className="w-6 h-6 text-gray-400" />
                  </button>
                </div>
                <ChatInterface
                  webhookUrl={selectedAgent.webhookUrl}
                  initialMessage={selectedAgent.initialMessage}
                  onClose={handleCloseDetail}
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Agent Detail Modal */}
        <AnimatePresence>
          {selectedAgent && !showChat && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 overflow-y-auto flex justify-center items-start pt-4 sm:pt-10 pb-20 px-2 sm:px-4"
            >
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                className="relative bg-gradient-to-b from-gray-900 to-black border border-gray-800 rounded-2xl shadow-xl w-full max-w-5xl overflow-hidden"
                style={{ maxHeight: '90vh', overflowY: 'auto' }}
              >
                {/* Modal Header */}
                <div className="relative h-48 sm:h-64 md:h-80">
                  {selectedAgent.videoUrl && selectedAgent.videoUrl.endsWith('.gif') ? (
                    <img
                      key={selectedAgent.id}
                      src={selectedAgent.videoUrl}
                      alt={`Demonstração do ${selectedAgent.title}`}
                      className="w-full h-full object-cover"
                    />
                  ) : selectedAgent.videoUrl ? (
                    <video
                      key={selectedAgent.id}
                      src={selectedAgent.videoUrl}
                      alt={`Demonstração do ${selectedAgent.title}`}
                      className="w-full h-full object-cover"
                      autoPlay
                      loop
                      muted
                      playsInline
                      onError={(e) => console.error("Erro ao carregar vídeo:", e)}
                    >
                      Seu navegador não suporta a tag de vídeo.
                    </video>
                  ) : (
                    <img
                      src={selectedAgent.image}
                      alt={selectedAgent.title}
                      className="w-full h-full object-cover"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
                  <button
                    onClick={handleClose}
                    className="absolute top-4 right-4 p-2 bg-black/50 hover:bg-black/70 rounded-full transition-colors"
                  >
                    <X className="w-6 h-6 text-white" />
                  </button>
                </div>

                <div className="p-4 sm:p-8">
                  <h2 className="text-2xl sm:text-3xl font-bold mb-4 gradient-text">Sobre o Agente</h2>
                  <p className="text-gray-300 text-lg leading-relaxed">{selectedAgent.longDescription}</p>

                  <div className="space-y-8">
                    <div>
                      <h3 className="text-xl font-semibold mb-4 gradient-text">Funcionalidades</h3>
                      <ul className="space-y-2">
                        {selectedAgent.features.map((feature, index) => (
                          <li key={index} className="flex items-start">
                            <div className="w-5 h-5 mr-3 mt-1 flex-shrink-0">
                              <div className="w-full h-full rounded-full bg-gradient-to-br from-[#00f0ff] to-[#9442fe]"></div>
                            </div>
                            <span className="text-gray-300 text-lg">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold mb-4 gradient-text">Fluxo de Trabalho</h3>
                      <div className="relative pl-8">
                        {selectedAgent.workflow.map((step, index) => (
                          <div key={index} className="relative pb-8">
                            {index !== selectedAgent.workflow.length - 1 && (
                              <span className="absolute top-5 left-[11px] -ml-px h-full w-0.5 bg-gradient-to-b from-[#00f0ff] to-[#9442fe]" aria-hidden="true"></span>
                            )}
                            <div className="relative flex items-start space-x-3">
                              <div className="relative">
                                <div className="h-8 w-8 rounded-full bg-gradient-to-br from-[#00f0ff] to-[#9442fe] flex items-center justify-center ring-4 ring-gray-900">
                                  <span className="text-black font-bold">{index + 1}</span>
                                </div>
                              </div>
                              <div className="min-w-0 flex-1 py-1.5">
                                <div className="text-lg text-gray-300">
                                  {step}
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
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
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
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

