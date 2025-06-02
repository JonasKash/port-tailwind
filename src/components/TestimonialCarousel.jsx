import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "João Silva",
    company: "Maxi Popular",
    role: "CEO",
    thumbnail: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80",
    videoUrl: "/testimonials/maxi-video.mp4",
    quote: "A automação da Ugarit transformou completamente nosso atendimento."
  },
  {
    id: 2,
    name: "Maria Santos",
    company: "Life",
    role: "Diretora de Operações",
    thumbnail: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80",
    videoUrl: "/testimonials/life-video.mp4",
    quote: "Reduzimos em 70% o tempo de processamento de pedidos."
  },
  {
    id: 3,
    name: "Pedro Costa",
    company: "Mar Virado",
    role: "Gerente de TI",
    thumbnail: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=800&q=80",
    videoUrl: "/testimonials/marvirado-video.mp4",
    quote: "A integração com nossos sistemas foi perfeita e sem complicações."
  },
  {
    id: 4,
    name: "Ana Oliveira",
    company: "Marfan",
    role: "COO",
    thumbnail: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=800&q=80",
    videoUrl: "/testimonials/marfan-video.mp4",
    quote: "Os agentes da Ugarit superaram todas as nossas expectativas."
  }
];

const TestimonialCarousel = () => {
  const [activeVideo, setActiveVideo] = useState(null);
  const [hoveredVideo, setHoveredVideo] = useState(null);

  const handleVideoClick = (videoId) => {
    setActiveVideo(videoId === activeVideo ? null : videoId);
  };

  return (
    <section className="py-24 bg-[#080808]">
      <div className="container mx-auto px-6">
        <motion.div 
          className="max-w-4xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-8">
            O que nossos <span className="gradient-text">clientes</span> dizem
          </h2>
          <p className="text-xl text-gray-300">
            Histórias reais de transformação digital e resultados extraordinários
          </p>
        </motion.div>

        {/* Grid de vídeos estilo stories */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              className={`relative rounded-xl overflow-hidden transition-all duration-300 ${
                hoveredVideo && hoveredVideo !== testimonial.id ? 'opacity-50 scale-95' : ''
              }`}
              onHoverStart={() => setHoveredVideo(testimonial.id)}
              onHoverEnd={() => setHoveredVideo(null)}
              whileHover={{ 
                scale: 1.05,
                zIndex: 20,
                transition: { duration: 0.2 }
              }}
            >
              <div className="relative aspect-[9/16]">
                {/* Thumbnail */}
                <img
                  src={testimonial.thumbnail}
                  alt={`Depoimento de ${testimonial.name}`}
                  className="w-full h-full object-cover"
                />
                
                {/* Overlay gradiente */}
                <div className={`absolute inset-0 transition-opacity duration-300 ${
                  hoveredVideo === testimonial.id 
                    ? 'bg-black/30' 
                    : 'bg-black/50'
                }`} />

                {/* Botão de play */}
                <button
                  onClick={() => handleVideoClick(testimonial.id)}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <motion.div
                    className="w-16 h-16 rounded-full bg-white/30 flex items-center justify-center backdrop-blur-sm"
                    whileHover={{ scale: 1.1, backgroundColor: 'rgba(255, 255, 255, 0.4)' }}
                  >
                    <Play className="w-8 h-8 text-white" />
                  </motion.div>
                </button>

                {/* Informações do depoimento */}
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black to-transparent">
                  <p className="text-sm md:text-base font-medium mb-2 line-clamp-2">{testimonial.quote}</p>
                  <div className="flex flex-wrap items-center gap-2 text-sm">
                    <span className="font-bold">{testimonial.name}</span>
                    <span className="text-white/60 text-xs">•</span>
                    <span className="text-white/60">{testimonial.role}</span>
                    <span className="text-white/60 text-xs">•</span>
                    <span className="text-white/60">{testimonial.company}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal de vídeo */}
      {activeVideo && (
        <motion.div 
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 md:p-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className="relative w-full h-full max-h-[90vh] flex items-center justify-center">
            <button
              onClick={() => setActiveVideo(null)}
              className="absolute top-0 right-0 -mt-12 text-white/60 hover:text-white z-10"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            <div className="w-full max-w-[min(500px,90vw)] aspect-[9/16] bg-black rounded-xl overflow-hidden">
              <video
                src={testimonials.find(t => t.id === activeVideo)?.videoUrl}
                className="w-full h-full object-cover"
                controls
                autoPlay
              />
            </div>
          </div>
        </motion.div>
      )}
    </section>
  );
};

export default TestimonialCarousel; 