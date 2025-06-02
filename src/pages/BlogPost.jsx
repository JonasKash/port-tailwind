import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Heart, Share2, MessageCircle, Clock, ArrowLeft, Facebook, Twitter, Linkedin } from 'lucide-react';
import { Link, useParams } from "react-router-dom";
import { posts } from "../data/blogPosts";
import Header from "../components/Header";

export default function BlogPost() {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [curtido, setCurtido] = useState(false);
  const [comentarios, setComentarios] = useState([]);
  const [novoComentario, setNovoComentario] = useState("");

  useEffect(() => {
    console.log("ID do post:", id);
    const postId = parseInt(id, 10);
    console.log("ID convertido:", postId);
    const postEncontrado = posts.find(p => p.id === postId);
    console.log("Post encontrado:", postEncontrado);
    setPost(postEncontrado);
  }, [id]);

  if (!post) {
    return (
      <div className="min-h-screen bg-black">
        <Header />
        <div className="flex items-center justify-center h-screen">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-white mb-4">Post não encontrado</h1>
            <Link to="/blog" className="text-[#00F0FF] hover:text-[#9442FE]">
              Voltar ao Blog
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[70vh] pt-20">
        <div className="absolute inset-0">
          <img
            src={post.imagem}
            alt={post.titulo}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent"></div>
        </div>

        <div className="absolute top-6 left-6">
          <Link to="/blog" className="flex items-center space-x-2 text-white hover:text-purple-400">
            <ArrowLeft className="w-6 h-6" />
            <span>Voltar ao Blog</span>
          </Link>
        </div>

        <div className="absolute inset-0 flex items-end pb-20">
          <div className="container mx-auto px-6">
            <motion.div
              className="max-w-4xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-block px-3 py-1 rounded-full bg-gradient-to-r from-[#00F0FF] to-[#9442FE] text-sm font-medium text-white mb-4">
                {post.categoria}
              </span>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
                {post.titulo}
              </h1>
              <p className="text-xl text-gray-300 mb-6">
                {post.subtitulo}
              </p>
              <div className="flex items-center space-x-6">
                <div className="flex items-center space-x-4">
                  <img
                    src={post.autor.avatar}
                    alt={post.autor.nome}
                    className="w-12 h-12 rounded-full"
                  />
                  <div>
                    <p className="text-white font-medium">{post.autor.nome}</p>
                    <p className="text-gray-400 text-sm">{post.dataPublicacao}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2 text-gray-400">
                  <Clock className="w-5 h-5" />
                  <span>{post.tempoDeLeitura}</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Conteúdo do Post */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto relative">
            <div className="flex gap-12">
              {/* Barra de Compartilhamento Desktop */}
              <div className="hidden lg:flex flex-col space-y-4 h-fit sticky top-24" style={{ marginLeft: '-100px' }}>
                <button 
                  className={`p-3 rounded-full border ${curtido ? 'bg-gradient-to-r from-[#00F0FF] to-[#9442FE] border-transparent' : 'border-[#00F0FF]/30 hover:bg-gradient-to-r hover:from-[#00F0FF]/10 hover:to-[#9442FE]/10'} transition-all`}
                  onClick={() => setCurtido(!curtido)}
                >
                  <Heart className={`w-6 h-6 ${curtido ? 'text-white' : 'text-gray-400'}`} />
                  <span className="sr-only">Curtir</span>
                  {post.estatisticas.curtidas > 0 && (
                    <span className="absolute -right-2 -top-2 bg-gradient-to-r from-[#00F0FF] to-[#9442FE] text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                      {post.estatisticas.curtidas}
                    </span>
                  )}
                </button>
                <button className="p-3 rounded-full border border-[#00F0FF]/30 hover:bg-gradient-to-r hover:from-[#00F0FF]/10 hover:to-[#9442FE]/10 text-gray-400 hover:text-[#00F0FF] transition-all">
                  <Facebook className="w-6 h-6" />
                  <span className="sr-only">Compartilhar no Facebook</span>
                </button>
                <button className="p-3 rounded-full border border-[#00F0FF]/30 hover:bg-gradient-to-r hover:from-[#00F0FF]/10 hover:to-[#9442FE]/10 text-gray-400 hover:text-[#00F0FF] transition-all">
                  <Twitter className="w-6 h-6" />
                  <span className="sr-only">Compartilhar no Twitter</span>
                </button>
                <button className="p-3 rounded-full border border-[#00F0FF]/30 hover:bg-gradient-to-r hover:from-[#00F0FF]/10 hover:to-[#9442FE]/10 text-gray-400 hover:text-[#00F0FF] transition-all">
                  <Linkedin className="w-6 h-6" />
                  <span className="sr-only">Compartilhar no LinkedIn</span>
                </button>
              </div>

              <div className="flex-1">
                {/* Barra de Compartilhamento Mobile */}
                <div className="lg:hidden flex justify-center space-x-4 mb-8">
                  <button 
                    className={`p-3 rounded-full border ${curtido ? 'bg-gradient-to-r from-[#00F0FF] to-[#9442FE] border-transparent' : 'border-[#00F0FF]/30 hover:bg-gradient-to-r hover:from-[#00F0FF]/10 hover:to-[#9442FE]/10'} transition-all`}
                    onClick={() => setCurtido(!curtido)}
                  >
                    <Heart className={`w-6 h-6 ${curtido ? 'text-white' : 'text-gray-400'}`} />
                  </button>
                  <button className="p-3 rounded-full border border-[#00F0FF]/30 hover:bg-gradient-to-r hover:from-[#00F0FF]/10 hover:to-[#9442FE]/10 text-gray-400 hover:text-[#00F0FF] transition-all">
                    <Facebook className="w-6 h-6" />
                  </button>
                  <button className="p-3 rounded-full border border-[#00F0FF]/30 hover:bg-gradient-to-r hover:from-[#00F0FF]/10 hover:to-[#9442FE]/10 text-gray-400 hover:text-[#00F0FF] transition-all">
                    <Twitter className="w-6 h-6" />
                  </button>
                  <button className="p-3 rounded-full border border-[#00F0FF]/30 hover:bg-gradient-to-r hover:from-[#00F0FF]/10 hover:to-[#9442FE]/10 text-gray-400 hover:text-[#00F0FF] transition-all">
                    <Linkedin className="w-6 h-6" />
                  </button>
                </div>

                {/* Conteúdo */}
                <div className="prose prose-lg prose-invert max-w-none">
                  {post.conteudo.map((bloco, index) => {
                    switch (bloco.tipo) {
                      case "paragrafo":
                        return (
                          <motion.p
                            key={index}
                            className="text-gray-300 mb-6 leading-relaxed"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.8 }}
                          >
                            {bloco.texto}
                          </motion.p>
                        );
                      case "subtitulo":
                        return (
                          <motion.h2
                            key={index}
                            className="text-3xl font-bold text-white mt-12 mb-6"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.8 }}
                          >
                            {bloco.texto}
                          </motion.h2>
                        );
                      case "imagem":
                        return (
                          <motion.figure
                            key={index}
                            className="my-12"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.8 }}
                          >
                            <img
                              src={bloco.url}
                              alt={bloco.legenda}
                              className="w-full rounded-xl"
                            />
                            {bloco.legenda && (
                              <figcaption className="text-center text-gray-400 mt-4">
                                {bloco.legenda}
                              </figcaption>
                            )}
                          </motion.figure>
                        );
                      case "citacao":
                        return (
                          <motion.blockquote
                            key={index}
                            className="border-l-4 border-purple-500 pl-6 my-8"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.8 }}
                          >
                            <p className="text-xl text-gray-300 italic mb-2">{bloco.texto}</p>
                            {bloco.autor && (
                              <cite className="text-gray-400">— {bloco.autor}</cite>
                            )}
                          </motion.blockquote>
                        );
                      case "destaque":
                        return (
                          <motion.div
                            key={index}
                            className="bg-purple-500/10 border border-purple-500/20 rounded-xl p-6 my-8"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.8 }}
                          >
                            <p className="text-xl text-purple-400 font-semibold">{bloco.texto}</p>
                          </motion.div>
                        );
                      case "lista":
                        return (
                          <motion.div
                            key={index}
                            className="my-8"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.8 }}
                          >
                            {bloco.titulo && (
                              <h4 className="text-lg font-semibold text-white mb-4">{bloco.titulo}</h4>
                            )}
                            <ul className="space-y-3">
                              {bloco.items.map((item, i) => (
                                <li key={i} className="flex items-center space-x-3 text-gray-300">
                                  <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                                  <span>{item}</span>
                                </li>
                              ))}
                            </ul>
                          </motion.div>
                        );
                      case "conclusao":
                        return (
                          <motion.div
                            key={index}
                            className="bg-gray-900 border border-gray-800 rounded-xl p-8 my-12"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.8 }}
                          >
                            <h3 className="text-2xl font-bold text-white mb-4">Conclusão</h3>
                            <p className="text-gray-300 leading-relaxed">{bloco.texto}</p>
                          </motion.div>
                        );
                      default:
                        return null;
                    }
                  })}
                </div>

                {/* Seção de Referências */}
                <div className="mt-16 pt-8 border-t border-gray-800">
                  <h3 className="text-2xl font-bold text-white mb-6">Referências</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {post.referencias?.map((ref, index) => (
                      <a
                        key={index}
                        href={ref.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-4 p-4 rounded-lg bg-gray-900 hover:bg-gray-800 transition-colors"
                      >
                        <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center">
                          <img
                            src={ref.favicon || `https://www.google.com/s2/favicons?domain=${new URL(ref.url).hostname}&sz=64`}
                            alt=""
                            className="w-6 h-6"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-white truncate">
                            {ref.titulo}
                          </p>
                          <p className="text-sm text-gray-400 truncate">
                            {new URL(ref.url).hostname}
                          </p>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>

                {/* Autor Bio */}
                <div className="mt-16 pt-8 border-t border-gray-800">
                  <div className="flex items-start space-x-6">
                    <img
                      src={post.autor.avatar}
                      alt={post.autor.nome}
                      className="w-20 h-20 rounded-full"
                    />
                    <div>
                      <h4 className="text-xl font-bold text-white mb-2">{post.autor.nome}</h4>
                      <p className="text-gray-400">{post.autor.bio}</p>
                    </div>
                  </div>
                </div>

                {/* Seção de Comentários */}
                <div className="mt-16 pt-8 border-t border-gray-800">
                  <div className="flex items-center justify-between mb-12">
                    <h3 className="text-2xl font-bold text-white">Comentários</h3>
                    <span className="text-gray-400 text-sm bg-gray-800/50 px-4 py-2 rounded-full">
                      {post.estatisticas.comentarios} comentários
                    </span>
                  </div>
                  
                  {/* Formulário de Comentário */}
                  <div className="mb-12">
                    <div className="flex items-start space-x-4 mb-6">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#00F0FF]/20 to-[#9442FE]/20 flex items-center justify-center flex-shrink-0">
                        <span className="text-[#00F0FF] text-lg">G</span>
                      </div>
                      <div className="flex-1">
                        <textarea
                          value={novoComentario}
                          onChange={(e) => setNovoComentario(e.target.value)}
                          placeholder="O que você achou deste artigo?"
                          className="w-full bg-gray-900/50 text-white rounded-2xl p-6 focus:outline-none focus:ring-2 focus:ring-[#00F0FF]/50 border border-gray-800 hover:border-[#00F0FF]/30 transition-colors resize-none min-h-[120px]"
                        />
                        <div className="mt-4 flex items-center justify-between">
                          <p className="text-sm text-gray-400">
                            Pressione <kbd className="px-2 py-1 bg-gray-800 rounded-md text-xs">Enter</kbd> para publicar
                          </p>
                          <button className="px-6 py-2.5 bg-gradient-to-r from-[#00F0FF] to-[#9442FE] hover:opacity-90 text-white text-sm font-medium rounded-full transition-all shadow-lg shadow-purple-500/20 flex items-center space-x-2">
                            <span>Publicar Comentário</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Lista de Comentários */}
                  {comentarios.length > 0 ? (
                    <div className="space-y-8">
                      {comentarios.map((comentario, index) => (
                        <div key={index} className="flex items-start space-x-4">
                          <img
                            src={comentario.autor.avatar}
                            alt={comentario.autor.nome}
                            className="w-10 h-10 rounded-full"
                          />
                          <div className="flex-1">
                            <div className="flex items-center space-x-2 mb-2">
                              <h4 className="font-medium text-white">{comentario.autor.nome}</h4>
                              <span className="text-gray-400 text-sm">•</span>
                              <span className="text-gray-400 text-sm">{comentario.data}</span>
                            </div>
                            <p className="text-gray-300">{comentario.texto}</p>
                            <div className="mt-3 flex items-center space-x-4">
                              <button className="text-gray-400 hover:text-[#00F0FF] text-sm flex items-center space-x-1.5 transition-colors">
                                <Heart className="w-4 h-4" />
                                <span>{comentario.curtidas}</span>
                              </button>
                              <button className="text-gray-400 hover:text-[#00F0FF] text-sm flex items-center space-x-1.5 transition-colors">
                                <MessageCircle className="w-4 h-4" />
                                <span>Responder</span>
                              </button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-12 px-4">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-r from-[#00F0FF]/10 to-[#9442FE]/10 flex items-center justify-center mx-auto mb-4">
                        <MessageCircle className="w-8 h-8 text-[#00F0FF]" />
                      </div>
                      <h4 className="text-lg font-medium text-white mb-2">Nenhum comentário ainda</h4>
                      <p className="text-gray-400 text-sm">
                        Seja o primeiro a compartilhar seus pensamentos sobre este artigo
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 