import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Sparkles, Mail, MessageCircle, Calendar, Check } from 'lucide-react';
import { toast } from 'sonner';

const HomePage = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    tipoEvento: 'Boda',
    cantidad: '',
    estiloPerfume: '',
    mensaje: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    if (!formData.nombre.trim()) {
      toast.error('¡Falta tu nombre! 💖');
      return false;
    }
    if (!formData.email.trim()) {
      toast.error('Falta tu correo para enviarte el presupuesto ✨');
      return false;
    }
    if (!formData.cantidad.trim()) {
      toast.error('Dinos una cantidad aproximada para calcularlo mejor 📦');
      return false;
    }
    return true;
  };

  const procesarMensaje = () => {
    return `¡Hola! Me gustaría pedir un presupuesto de Miniperfumes para mi evento 🥂\n\n` + 
           `Nombre: ${formData.nombre}\n` + 
           `Email: ${formData.email}\n` + 
           `Teléfono: ${formData.telefono}\n` + 
           `Evento: ${formData.tipoEvento}\n` + 
           `Cantidad estimada: ${formData.cantidad} unidades\n` + 
           `Estilos de interés: ${formData.estiloPerfume}\n\n` + 
           `Mensaje adicional: ${formData.mensaje}\n`;
  };

  const handleWhatsApp = e => {
    e.preventDefault();
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    const mensajeTexto = encodeURIComponent(procesarMensaje());
    toast.success('¡Redirigiendo a WhatsApp...!');
    
    setTimeout(() => {
      window.location.href = `https://wa.me/34659330593?text=${mensajeTexto}`;
      setIsSubmitting(false);
    }, 500);
  };

  const handleEmail = e => {
    e.preventDefault();
    if (!validateForm()) return;
    
    const mensajeTexto = encodeURIComponent(procesarMensaje());
    window.location.href = `mailto:kamelamejoyas@gmail.com?subject=Presupuesto Miniperfumes - ${formData.nombre}&body=${mensajeTexto}`;
    toast.success('¡Abriendo tu aplicación de correo electrónico!');
  };

  const miniperfumes = [
    { url: 'https://raw.githubusercontent.com/rosavaldivia1919/23-04-web-kamelamejoyas-sorpresa/main/horizons-export-941371a8-fc9d-4f9b-89f0-df53540c25da/apps/web/public/miniperfumes/IMG_2184-Photoroom.JPG', alt: 'Mini-perfume Boda 1' },
    { url: 'https://raw.githubusercontent.com/rosavaldivia1919/23-04-web-kamelamejoyas-sorpresa/main/horizons-export-941371a8-fc9d-4f9b-89f0-df53540c25da/apps/web/public/miniperfumes/IMG_2194-Photoroom.JPG', alt: 'Mini-perfume Boda 2' },
    { url: 'https://raw.githubusercontent.com/rosavaldivia1919/23-04-web-kamelamejoyas-sorpresa/main/horizons-export-941371a8-fc9d-4f9b-89f0-df53540c25da/apps/web/public/miniperfumes/IMG_2208-Photoroom.JPG', alt: 'Mini-perfume Boda 3' },
    { url: 'https://raw.githubusercontent.com/rosavaldivia1919/23-04-web-kamelamejoyas-sorpresa/main/horizons-export-941371a8-fc9d-4f9b-89f0-df53540c25da/apps/web/public/miniperfumes/IMG_2227-Photoroom.JPG', alt: 'Mini-perfume Boda 4' },
    { url: 'https://raw.githubusercontent.com/rosavaldivia1919/23-04-web-kamelamejoyas-sorpresa/main/horizons-export-941371a8-fc9d-4f9b-89f0-df53540c25da/apps/web/public/miniperfumes/IMG_2236-Photoroom.JPG', alt: 'Mini-perfume Boda 5' },
    { url: 'https://raw.githubusercontent.com/rosavaldivia1919/23-04-web-kamelamejoyas-sorpresa/main/horizons-export-941371a8-fc9d-4f9b-89f0-df53540c25da/apps/web/public/miniperfumes/IMG_2247-Photoroom.JPG', alt: 'Mini-perfume Boda 6' },
    { url: 'https://raw.githubusercontent.com/rosavaldivia1919/23-04-web-kamelamejoyas-sorpresa/main/horizons-export-941371a8-fc9d-4f9b-89f0-df53540c25da/apps/web/public/miniperfumes/IMG_2251-Photoroom.JPG', alt: 'Mini-perfume Boda 7' },
    { url: 'https://raw.githubusercontent.com/rosavaldivia1919/23-04-web-kamelamejoyas-sorpresa/main/horizons-export-941371a8-fc9d-4f9b-89f0-df53540c25da/apps/web/public/miniperfumes/IMG_2267-Photoroom.JPG', alt: 'Mini-perfume Boda 8' },
    { url: 'https://raw.githubusercontent.com/rosavaldivia1919/23-04-web-kamelamejoyas-sorpresa/main/horizons-export-941371a8-fc9d-4f9b-89f0-df53540c25da/apps/web/public/miniperfumes/IMG_2278-Photoroom.JPG', alt: 'Mini-perfume Boda 9' },
    { url: 'https://raw.githubusercontent.com/rosavaldivia1919/23-04-web-kamelamejoyas-sorpresa/main/horizons-export-941371a8-fc9d-4f9b-89f0-df53540c25da/apps/web/public/miniperfumes/IMG_2287-Photoroom.JPG', alt: 'Mini-perfume Boda 10' },
    { url: 'https://raw.githubusercontent.com/rosavaldivia1919/23-04-web-kamelamejoyas-sorpresa/main/horizons-export-941371a8-fc9d-4f9b-89f0-df53540c25da/apps/web/public/miniperfumes/IMG_2300-Photoroom.JPG', alt: 'Mini-perfume Boda 11' },
    { url: 'https://raw.githubusercontent.com/rosavaldivia1919/23-04-web-kamelamejoyas-sorpresa/main/horizons-export-941371a8-fc9d-4f9b-89f0-df53540c25da/apps/web/public/miniperfumes/IMG_2339-Photoroom.JPG', alt: 'Mini-perfume Boda 12' },
    { url: 'https://raw.githubusercontent.com/rosavaldivia1919/23-04-web-kamelamejoyas-sorpresa/main/horizons-export-941371a8-fc9d-4f9b-89f0-df53540c25da/apps/web/public/miniperfumes/IMG_2351-Photoroom.JPG', alt: 'Mini-perfume Boda 13' },
    { url: 'https://raw.githubusercontent.com/rosavaldivia1919/23-04-web-kamelamejoyas-sorpresa/main/horizons-export-941371a8-fc9d-4f9b-89f0-df53540c25da/apps/web/public/miniperfumes/IMG_2374-Photoroom.JPG', alt: 'Mini-perfume Boda 14' },
    { url: 'https://raw.githubusercontent.com/rosavaldivia1919/23-04-web-kamelamejoyas-sorpresa/main/horizons-export-941371a8-fc9d-4f9b-89f0-df53540c25da/apps/web/public/miniperfumes/IMG_2408-Photoroom.JPG', alt: 'Mini-perfume Boda 15' },
    { url: 'https://raw.githubusercontent.com/rosavaldivia1919/23-04-web-kamelamejoyas-sorpresa/main/horizons-export-941371a8-fc9d-4f9b-89f0-df53540c25da/apps/web/public/miniperfumes/IMG_2410-Photoroom.JPG', alt: 'Mini-perfume Boda 16' },
    { url: 'https://raw.githubusercontent.com/rosavaldivia1919/23-04-web-kamelamejoyas-sorpresa/main/horizons-export-941371a8-fc9d-4f9b-89f0-df53540c25da/apps/web/public/miniperfumes/IMG_2413-Photoroom.JPG', alt: 'Mini-perfume Boda 17' },
    { url: 'https://raw.githubusercontent.com/rosavaldivia1919/23-04-web-kamelamejoyas-sorpresa/main/horizons-export-941371a8-fc9d-4f9b-89f0-df53540c25da/apps/web/public/miniperfumes/IMG_2414-Photoroom.JPG', alt: 'Mini-perfume Boda 18' },
    { url: 'https://raw.githubusercontent.com/rosavaldivia1919/23-04-web-kamelamejoyas-sorpresa/main/horizons-export-941371a8-fc9d-4f9b-89f0-df53540c25da/apps/web/public/miniperfumes/IMG_2420-Photoroom.JPG', alt: 'Mini-perfume Boda 19' },
    { url: 'https://raw.githubusercontent.com/rosavaldivia1919/23-04-web-kamelamejoyas-sorpresa/main/horizons-export-941371a8-fc9d-4f9b-89f0-df53540c25da/apps/web/public/miniperfumes/IMG_2431-Photoroom.JPG', alt: 'Mini-perfume Boda 20' },
    { url: 'https://raw.githubusercontent.com/rosavaldivia1919/23-04-web-kamelamejoyas-sorpresa/main/horizons-export-941371a8-fc9d-4f9b-89f0-df53540c25da/apps/web/public/miniperfumes/IMG_2441-Photoroom.JPG', alt: 'Mini-perfume Boda 21' },
    { url: 'https://raw.githubusercontent.com/rosavaldivia1919/23-04-web-kamelamejoyas-sorpresa/main/horizons-export-941371a8-fc9d-4f9b-89f0-df53540c25da/apps/web/public/miniperfumes/IMG_2448-Photoroom.JPG', alt: 'Mini-perfume Boda 22' },
    { url: 'https://raw.githubusercontent.com/rosavaldivia1919/23-04-web-kamelamejoyas-sorpresa/main/horizons-export-941371a8-fc9d-4f9b-89f0-df53540c25da/apps/web/public/miniperfumes/IMG_2455-Photoroom.JPG', alt: 'Mini-perfume Boda 23' },
    { url: 'https://raw.githubusercontent.com/rosavaldivia1919/23-04-web-kamelamejoyas-sorpresa/main/horizons-export-941371a8-fc9d-4f9b-89f0-df53540c25da/apps/web/public/miniperfumes/IMG_2467-Photoroom.JPG', alt: 'Mini-perfume Boda 24' },
    { url: 'https://raw.githubusercontent.com/rosavaldivia1919/23-04-web-kamelamejoyas-sorpresa/main/horizons-export-941371a8-fc9d-4f9b-89f0-df53540c25da/apps/web/public/miniperfumes/Photoroom_20260421_181038.JPEG', alt: 'Mini-perfume Boda 25' },
    { url: 'https://raw.githubusercontent.com/rosavaldivia1919/23-04-web-kamelamejoyas-sorpresa/main/horizons-export-941371a8-fc9d-4f9b-89f0-df53540c25da/apps/web/public/miniperfumes/Photoroom_20260421_183900.JPG', alt: 'Mini-perfume Boda 26' },
    { url: 'https://raw.githubusercontent.com/rosavaldivia1919/23-04-web-kamelamejoyas-sorpresa/main/horizons-export-941371a8-fc9d-4f9b-89f0-df53540c25da/apps/web/public/miniperfumes/Photoroom_20260421_185155.jpeg', alt: 'Mini-perfume Boda 27' }
  ];

  return (
    <>
      <Helmet>
        <title>Miniperfumes para Bodas y Eventos | Detalles Especiales</title>
      </Helmet>

      <div className="min-h-screen bg-[#faf9f8] font-sans selection:bg-stone-200">
        
        {/* ENCABEZADO INTEGRADO */}
        <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-stone-200">
          <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
            <a href="/" className="font-serif text-2xl tracking-tight font-bold text-stone-800">
              Bodas & Eventos
            </a>
            <div className="flex gap-4 md:gap-8 items-center">
              <a href="#catalogo" className="text-sm font-medium text-stone-600 hover:text-stone-900 transition-colors">Catálogo</a>
              <a href="#contacto" className="text-sm font-medium px-4 py-2 bg-stone-900 text-white rounded-lg hover:bg-stone-800 transition-colors shadow-sm">Presupuesto</a>
            </div>
          </nav>
        </header>

        {/* HERO SECTION DE BODA */}
        <section className="relative min-h-[85vh] flex items-center justify-center bg-stone-100 overflow-hidden">
          {/* Fondo estético (AI Image) */}
          <div className="absolute inset-0">
             <img src="https://raw.githubusercontent.com/rosavaldivia1919/23-04-web-kamelamejoyas-sorpresa/main/horizons-export-941371a8-fc9d-4f9b-89f0-df53540c25da/apps/web/public/miniperfumes/hero_wedding_ai_plate.png" alt="Mesa elegante de boda con miniperfume y rosa" className="w-full h-full object-cover object-center md:object-right opacity-90" />
             {/* Degradado para que el texto de la izquierda sea legible */}
             <div className="absolute inset-0 bg-gradient-to-r from-white via-white/70 to-transparent md:w-2/3"></div> 
          </div>

          <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} className="max-w-xl py-12">
              
              <div className="inline-block mb-6 px-4 py-1.5 bg-stone-800/5 backdrop-blur-sm border border-stone-200 text-stone-800 text-xs font-bold tracking-widest uppercase rounded-full">
                Elegancia para tus invitados
              </div>
              
              <h1 className="font-serif text-5xl md:text-7xl font-bold text-stone-900 leading-[1.05] mb-6 drop-shadow-sm">
                El aroma de<br/>tu gran día
              </h1>
              
              <p className="text-lg md:text-xl text-stone-700 mb-10 font-light leading-relaxed">
                Regala la esencia de los perfumes más exclusivos. Un detalle minimalista, refinado e inolvidable para la celebración de vuestros sueños.
                <span className="block mt-4 text-sm font-medium text-stone-500">* Catálogo completo (femenino, masculino y unisex) bajo petición.</span>
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#contacto" className="px-8 py-4 bg-stone-900 text-white rounded-lg text-sm font-bold text-center hover:bg-stone-800 shadow-xl transition-all hover:-translate-y-0.5">Pedir Presupuesto</a>
                <a href="#catalogo" className="px-8 py-4 bg-white/80 backdrop-blur text-stone-900 border border-stone-200 rounded-lg text-sm font-bold text-center hover:bg-white shadow-sm transition-all hover:-translate-y-0.5">Ver Galería</a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* BANNERS DE INFO */}
        <section className="py-12 bg-white border-b border-stone-200">
          <div className="max-w-5xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-8">
             <div className="flex items-center gap-4 flex-1">
              <Calendar className="w-8 h-8 text-stone-400 stroke-[1.5]" />
              <div>
                <h3 className="font-serif font-bold text-lg text-stone-900">Reservas con Antelación</h3>
                <p className="text-sm text-stone-600 mt-1">Recomendamos reservar con meses de margen para preparar pedidos grandes.</p>
              </div>
            </div>
            
            <div className="hidden md:block w-px h-12 bg-stone-200"></div>
            
            <div className="flex items-center gap-4 flex-1">
              <Sparkles className="w-8 h-8 text-stone-400 stroke-[1.5]" />
              <div>
                <h3 className="font-serif font-bold text-lg text-stone-900">Personalización Única</h3>
                <p className="text-sm text-stone-600 mt-1">Cientos de esencias que capturan vuestra historia de amor a la perfección.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CATÁLOGO GRID */}
        <section id="catalogo" className="py-16 md:py-24 bg-[#faf9f8]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }} className="text-center mb-16">
              <h2 className="font-serif text-3xl md:text-5xl font-bold text-stone-900 mb-4">
                Descubre los Detalles
              </h2>
              <p className="text-stone-600 max-w-2xl mx-auto text-lg">
                Explora el diseño de nuestros envases (muestra parcial). Solicita el catálogo en PDF para ver todas las fragancias para ellos y ellas.
              </p>
            </motion.div>

            {/* AQUI ESTÁ LA RESPUESTA AL FALLO VISUAL: aspect-square para evitar cortes feos y bordes suaves */}
            <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
              {miniperfumes.map((perfume, index) => (
                <motion.div key={index} initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.4, delay: (index % 6) * 0.05 }} viewport={{ once: true }} className="group relative aspect-square rounded-xl overflow-hidden bg-white shadow-sm border border-stone-200 hover:shadow-lg transition-all duration-300">
                  <img src={perfume.url} alt={perfume.alt} loading="lazy" className="w-full h-full object-cover p-2 group-hover:scale-105 transition-transform duration-500" />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* FORMULARIO DE PRESUPUESTO */}
        <section id="contacto" className="py-16 md:py-24 bg-white border-t border-stone-100">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }} className="text-center mb-12">
              <h2 className="font-serif text-3xl md:text-5xl font-bold text-stone-900 mb-4">
                Cotización sin Compromiso
              </h2>
              <p className="text-lg text-stone-600">
                Nos encantará formar parte de ese gran día. Cuéntanos vuestra idea.
              </p>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }} viewport={{ once: true }}>
              <div className="bg-[#faf9f8] rounded-2xl p-6 md:p-10 border border-stone-200">
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div className="space-y-1.5">
                    <label className="text-sm font-semibold text-stone-800">Nombre / Pareja</label>
                    <input type="text" name="nombre" value={formData.nombre} onChange={handleInputChange} className="w-full px-4 py-3 bg-white border border-stone-200 rounded-lg focus:outline-none focus:border-stone-400 focus:ring-1 focus:ring-stone-400 transition-all text-sm" placeholder="Elena y Carlos" required />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-sm font-semibold text-stone-800">Email</label>
                    <input type="email" name="email" value={formData.email} onChange={handleInputChange} className="w-full px-4 py-3 bg-white border border-stone-200 rounded-lg focus:outline-none focus:border-stone-400 focus:ring-1 focus:ring-stone-400 transition-all text-sm" placeholder="hola@correo.com" required />
                  </div>
                  
                  <div className="space-y-1.5">
                    <label className="text-sm font-semibold text-stone-800">Tipo de Evento</label>
                    <select name="tipoEvento" value={formData.tipoEvento} onChange={handleInputChange} className="w-full px-4 py-3 bg-white border border-stone-200 rounded-lg focus:outline-none focus:border-stone-400 focus:ring-1 focus:ring-stone-400 transition-all text-sm text-stone-800">
                      <option>Enlace Bodas</option>
                      <option>Bautizo / Comunión</option>
                      <option>Evento Corporativo</option>
                      <option>Celebración Especial</option>
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-sm font-semibold text-stone-800">Cantidad (Invitados aprox.)</label>
                    <input type="number" name="cantidad" value={formData.cantidad} onChange={handleInputChange} className="w-full px-4 py-3 bg-white border border-stone-200 rounded-lg focus:outline-none focus:border-stone-400 focus:ring-1 focus:ring-stone-400 transition-all text-sm" placeholder="150" required />
                  </div>
                </div>

                <div className="space-y-1.5 mb-8">
                    <label className="text-sm font-semibold text-stone-800">Mensaje o preferencias</label>
                    <textarea name="mensaje" value={formData.mensaje} onChange={handleInputChange} className="w-full px-4 py-3 bg-white border border-stone-200 rounded-lg focus:outline-none focus:border-stone-400 focus:ring-1 focus:ring-stone-400 transition-all text-sm min-h-[100px]" placeholder="¿Teneis alguna familia olfativa favorita? ¿Fecha reservada?" />
                </div>

                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  {/* EMail */}
                  <button onClick={handleEmail} disabled={isSubmitting} className="flex-1 px-6 py-4 bg-stone-900 text-white rounded-lg text-sm font-bold flex items-center justify-center gap-2 hover:bg-stone-800 transition shadow-md">
                    <Mail className="w-4 h-4" /> Enviar Consulta
                  </button>
                  {/* WhatsApp */}
                  <button onClick={handleWhatsApp} disabled={isSubmitting} className="flex-1 px-6 py-4 bg-[#25D366] text-white rounded-lg text-sm font-bold flex items-center justify-center gap-2 hover:bg-[#128C7E] transition shadow-md">
                    <MessageCircle className="w-4 h-4" /> Hablar por WhatsApp
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* FOOTER INTEGRADO */}
        <footer className="py-8 bg-stone-900 border-t border-stone-800">
           <p className="text-center text-stone-400 text-xs">
             © {new Date().getFullYear()} Detalles para Bodas. Contacta con antelación para asegurar disponibilidad.
           </p>
        </footer>
      </div>
    </>
  );
};

export default HomePage;