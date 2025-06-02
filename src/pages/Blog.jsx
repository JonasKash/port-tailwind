import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, ArrowLeft, Heart, Share2, MessageCircle, Bookmark, ChevronLeft, ChevronRight, Clock } from 'lucide-react';
import { Link } from "react-router-dom";
import { posts } from "../data/blogPosts";
import Header from "../components/Header";

const destaques = posts.filter(post => post.destaque);
const publicacoesRecentes = posts.filter(post => !post.destaque);

export default function Blog() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % destaques.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + destaques.length) % destaques.length);
  };

  return (
    <div className="min-h-screen bg-black">
      <Header />
      
      {/* Hero Carousel */}
      <section className="relative h-screen pt-20">
        {destaques.map((post, index) => (
          <motion.div
            key={post.id}
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: currentSlide === index ? 1 : 0,
              scale: currentSlide === index ? 1 : 1.1
            }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative h-full">
              <div className="absolute inset-0">
                <img
                  src={post.imagem}
                  alt={post.titulo}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
              </div>
              
              <div className="absolute inset-0 flex items-center">
                <div className="container mx-auto px-6">
                  <div className="max-w-3xl">
                    <motion.span
                      className="inline-block px-3 py-1 rounded-full bg-gradient-to-r from-[#00F0FF] to-[#9442FE] text-sm font-medium text-white mb-4"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: currentSlide === index ? 1 : 0, y: currentSlide === index ? 0 : 20 }}
                      transition={{ delay: 0.2, duration: 0.8 }}
                    >
                      {post.categoria}
                    </motion.span>
                    
                    <motion.h1
                      className="text-5xl md:text-7xl font-bold text-white mb-6"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: currentSlide === index ? 1 : 0, y: currentSlide === index ? 0 : 20 }}
                      transition={{ delay: 0.3, duration: 0.8 }}
                    >
                      {post.titulo}
                    </motion.h1>
                    
                    <motion.p
                      className="text-xl text-gray-300 mb-8"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: currentSlide === index ? 1 : 0, y: currentSlide === index ? 0 : 20 }}
                      transition={{ delay: 0.4, duration: 0.8 }}
                    >
                      {post.descricao}
                    </motion.p>
                    
                    <motion.div
                      className="flex items-center space-x-6"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: currentSlide === index ? 1 : 0, y: currentSlide === index ? 0 : 20 }}
                      transition={{ delay: 0.5, duration: 0.8 }}
                    >
                      <Link 
                        to={`/blog/${post.id}`}
                        className="px-8 py-4 bg-gradient-to-r from-[#00F0FF] to-[#9442FE] hover:opacity-90 text-white font-bold rounded-full flex items-center space-x-2 transition-all shadow-lg shadow-purple-500/20"
                      >
                        <span>Ler Agora</span>
                        <ArrowRight className="w-5 h-5" />
                      </Link>
                      
                      <button className="p-3 border border-[#00F0FF]/30 rounded-full hover:bg-gradient-to-r hover:from-[#00F0FF]/10 hover:to-[#9442FE]/10 transition-all">
                        <Bookmark className="w-6 h-6 text-white" />
                      </button>
                      
                      <div className="flex items-center space-x-2 text-gray-400">
                        <Clock className="w-5 h-5" />
                        <span>{post.tempoDeLeitura}</span>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
        
        {/* Carousel Controls */}
        <div className="absolute bottom-10 right-10 flex space-x-4">
          <button
            onClick={prevSlide}
            className="p-2 rounded-full bg-black/50 hover:bg-black/70 text-white"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextSlide}
            className="p-2 rounded-full bg-black/50 hover:bg-black/70 text-white"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </section>

      {/* Posts em Destaque */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl font-bold text-white">Posts em Destaque</h2>
            <div className="flex space-x-4">
              <button className="p-2 rounded-full bg-gray-800 hover:bg-gray-700">
                <ChevronLeft className="w-6 h-6 text-white" />
              </button>
              <button className="p-2 rounded-full bg-gray-800 hover:bg-gray-700">
                <ChevronRight className="w-6 h-6 text-white" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {destaques.map((post) => (
              <Link
                to={`/blog/${post.id}`}
                key={post.id}
                className="block"
              >
                <motion.div
                  className="group relative rounded-xl overflow-hidden cursor-pointer"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="aspect-[16/9]">
                    <img
                      src={post.imagem}
                      alt={post.titulo}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
                  </div>
                  
                  <div className="absolute inset-0 p-8 flex flex-col justify-end">
                    <span className="inline-block px-3 py-1 rounded-full bg-gradient-to-r from-[#00F0FF] to-[#9442FE] text-sm font-medium text-white mb-4 w-fit">
                      {post.categoria}
                    </span>
                    <h3 className="text-2xl font-bold text-white mb-2">{post.titulo}</h3>
                    <p className="text-gray-300 mb-4">{post.subtitulo}</p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <img
                          src={post.autor.avatar}
                          alt={post.autor.nome}
                          className="w-10 h-10 rounded-full"
                        />
                        <span className="text-white">{post.autor.nome}</span>
                      </div>
                      <div className="flex items-center space-x-4">
                        <button className="text-white hover:text-[#00F0FF] transition-colors" onClick={(e) => e.preventDefault()}>
                          <Heart className="w-6 h-6" />
                        </button>
                        <button className="text-white hover:text-[#00F0FF] transition-colors" onClick={(e) => e.preventDefault()}>
                          <MessageCircle className="w-6 h-6" />
                        </button>
                        <button className="text-white hover:text-[#00F0FF] transition-colors" onClick={(e) => e.preventDefault()}>
                          <Share2 className="w-6 h-6" />
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Publicações Recentes */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-white mb-12">Publicações Recentes</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {publicacoesRecentes.map((post) => (
              <Link
                to={`/blog/${post.id}`}
                key={post.id}
                className="block"
              >
                <motion.div
                  className="group bg-gray-900 rounded-xl overflow-hidden"
                  whileHover={{ y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="aspect-[16/9] overflow-hidden">
                    <img
                      src={post.imagem}
                      alt={post.titulo}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  
                  <div className="p-6">
                    <span className="inline-block px-3 py-1 rounded-full bg-gradient-to-r from-[#00F0FF]/20 to-[#9442FE]/20 text-sm font-medium text-white mb-4">
                      {post.categoria}
                    </span>
                    <h3 className="text-xl font-bold text-white mb-2">{post.titulo}</h3>
                    <p className="text-gray-400 mb-4 line-clamp-2">{post.descricao}</p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2 text-gray-400">
                        <Clock className="w-4 h-4" />
                        <span className="text-sm">{post.tempoDeLeitura}</span>
                      </div>
                      <div className="flex space-x-3">
                        <button className="text-gray-400 hover:text-[#00F0FF] transition-colors" onClick={(e) => e.preventDefault()}>
                          <Heart className="w-5 h-5" />
                        </button>
                        <button className="text-gray-400 hover:text-[#00F0FF] transition-colors" onClick={(e) => e.preventDefault()}>
                          <Share2 className="w-5 h-5" />
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
} 