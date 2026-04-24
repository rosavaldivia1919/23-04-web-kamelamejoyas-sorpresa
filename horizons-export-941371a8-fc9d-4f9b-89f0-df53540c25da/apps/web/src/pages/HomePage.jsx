import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Sparkles, Mail, MessageCircle, Star, Info, Calendar } from 'lucide-react';
import { toast } from 'sonner';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';

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

  // Catálogo de Miniperfumes (Sección Cuadrícula/Grid)
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

  return <>
      <Helmet>
        <title>Miniperfumes para Bodas y Eventos | Detalles Especiales</title>
        <meta name="description" content="Catálogo de miniperfumes personalizables para bodas, bautizos y eventos. Descubre el detalle inolvidable perfecto para regalar a tus invitados." />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />

        {/* Hero Section con Imagen IA de Boda de fondo */}
        <section className="relative min-h-[90dvh] flex items-center justify-center overflow-hidden">
          {/* Fondo estético (AI Generated Image) */}
          <div className="absolute inset-0">
             <div className="absolute inset-0 bg-black/40 z-10"></div> {/* Oscurecedor para destacar texto */}
             <img src="https://raw.githubusercontent.com/rosavaldivia1919/23-04-web-kamelamejoyas-sorpresa/main/horizons-export-941371a8-fc9d-4f9b-89f0-df53540c25da/apps/web/public/miniperfumes/hero_wedding_ai.png" alt="Mesa de boda con miniperfumes" className="w-full h-full object-cover" />
          </div>

          <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              
              <div className="inline-block mb-4 px-4 py-1.5 bg-white/20 backdrop-blur-md border border-white/40 rounded-full text-white/90 text-sm font-medium tracking-wide">
                ESPECIAL BODAS Y EVENTOS
              </div>
              
              <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-tight mb-6 drop-shadow-xl">
                El aroma de tu gran día
              </h1>
              
              <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-10 leading-relaxed drop-shadow-md">
                Regala la elegancia y la esencia de los perfumes más exclusivos a tus invitados. <br/>
                <span className="text-sm font-light mt-4 block">*Catálogo masculino disponible bajo petición.</span>
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <motion.a href="#catalogo" className="w-full sm:w-auto px-8 py-4 bg-white text-foreground rounded-xl text-lg font-bold shadow-2xl hover:-translate-y-1 transition-all duration-200" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  Ver Catálogo
                </motion.a>
                <motion.a href="#contacto" className="w-full sm:w-auto px-8 py-4 bg-accent text-accent-foreground border border-white/20 rounded-xl text-lg font-bold shadow-xl hover:-translate-y-1 transition-all duration-200" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  Solicitar Presupuesto
                </motion.a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Info & Anticipación Section */}
        <section className="py-12 bg-primary/10 border-b border-background">
          <div className="max-w-5xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-8 py-4">
            <div className="flex items-start gap-4 flex-1">
              <Calendar className="w-10 h-10 text-accent flex-shrink-0" />
              <div>
                <h3 className="font-serif font-bold text-xl text-foreground mb-1">Pedidos con antelación</h3>
                <p className="text-foreground/70">Aconsejamos realizar tu solicitud con meses de previsión para organizar inventarios elevados de manera perfecta.</p>
              </div>
            </div>
            
            <div className="hidden md:block w-px h-16 bg-border"></div>
            
            <div className="flex items-start gap-4 flex-1">
              <Sparkles className="w-10 h-10 text-accent flex-shrink-0" />
              <div>
                <h3 className="font-serif font-bold text-xl text-foreground mb-1">Cientos de Esencias</h3>
                <p className="text-foreground/70">Adaptamos las fragancias a tus gustos. Solicítanos información directa y te mandaremos el stock completo.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Catálogo Grid Section */}
        <section id="catalogo" className="py-20 md:py-24 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }} className="text-center mb-16">
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-6">
                Catálogo Femenino Resaltado
              </h2>
              <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
                Una vista a algunos de nuestros envases lujosos para detalles de evento. Contacta con nosotros para descubrir el catálogo de hombre disponible en varios formatos.
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-8">
              {miniperfumes.map((perfume, index) => (
                <motion.div key={index} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.4, delay: (index % 8) * 0.05 }} viewport={{ once: true }} className="group relative aspect-[3/4] rounded-2xl overflow-hidden bg-card shadow-md border border-border/50 hover:shadow-xl transition-all duration-300">
                  <img src={perfume.url} alt={perfume.alt} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                    <span className="text-white font-medium tracking-wider text-sm bg-black/30 px-3 py-1 rounded-full backdrop-blur-sm">Oler más</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Formulario de Presupuesto Section */}
        <section id="contacto" className="py-20 md:py-24 bg-primary/10">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} viewport={{ once: true }} className="text-center mb-12">
              <h2 className="font-serif text-3xl md:text-5xl font-bold text-foreground mb-4">
                Solicita tu Presupuesto a Medida
              </h2>
              <p className="text-lg text-foreground/70">
                Contactamos a la mayor brevedad. Indícanos tu evento y necesidades.
              </p>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }} viewport={{ once: true }}>
              <div className="bg-card rounded-2xl shadow-xl p-8 md:p-12 border border-border space-y-8">
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Nombre */}
                  <div className="space-y-2">
                    <label htmlFor="nombre" className="block text-sm font-bold text-foreground">Nombre / Empresa</label>
                    <input type="text" id="nombre" name="nombre" value={formData.nombre} onChange={handleInputChange} className="w-full px-4 py-3 bg-secondary/10 border border-input rounded-xl focus:ring-2 focus:ring-accent transition-all" placeholder="Ej. Ana García" required />
                  </div>

                  {/* Teléfono */}
                  <div className="space-y-2">
                    <label htmlFor="telefono" className="block text-sm font-bold text-foreground">Teléfono móvil</label>
                    <input type="tel" id="telefono" name="telefono" value={formData.telefono} onChange={handleInputChange} className="w-full px-4 py-3 bg-secondary/10 border border-input rounded-xl focus:ring-2 focus:ring-accent transition-all" placeholder="Tu número" required />
                  </div>
                  
                  {/* Email */}
                  <div className="space-y-2">
                    <label htmlFor="email" className="block text-sm font-bold text-foreground">Correo Electrónico</label>
                    <input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} className="w-full px-4 py-3 bg-secondary/10 border border-input rounded-xl focus:ring-2 focus:ring-accent transition-all" placeholder="tu@correo.com" required />
                  </div>

                  {/* Evento */}
                  <div className="space-y-2">
                    <label className="block text-sm font-bold text-foreground">Tipo de Evento</label>
                    <select name="tipoEvento" value={formData.tipoEvento} onChange={handleInputChange} className="w-full px-4 py-3 bg-secondary/10 border border-input rounded-xl focus:ring-2 focus:ring-accent transition-all">
                      <option>Boda</option>
                      <option>Bautizo / Comunión</option>
                      <option>Cumpleaños</option>
                      <option>Evento de Empresa / Corporativo</option>
                      <option>Despedida</option>
                      <option>Otro</option>
                    </select>
                  </div>

                  {/* Cantidad */}
                  <div className="space-y-2">
                    <label htmlFor="cantidad" className="block text-sm font-bold text-foreground">Cantidad aprox. (Invitados)</label>
                    <input type="number" id="cantidad" name="cantidad" value={formData.cantidad} onChange={handleInputChange} className="w-full px-4 py-3 bg-secondary/10 border border-input rounded-xl focus:ring-2 focus:ring-accent transition-all" placeholder="Ej. 120" required />
                  </div>
                  
                  {/* Estilos Perfume */}
                   <div className="space-y-2">
                    <label htmlFor="estiloPerfume" className="block text-sm font-bold text-foreground">¿Buscas algún estilo?</label>
                    <input type="text" id="estiloPerfume" name="estiloPerfume" value={formData.estiloPerfume} onChange={handleInputChange} className="w-full px-4 py-3 bg-secondary/10 border border-input rounded-xl focus:ring-2 focus:ring-accent transition-all" placeholder="Ej: Dulces, frescos, para hombre..." />
                  </div>
                </div>

                {/* Mensaje Adicional */}
                <div className="space-y-2">
                    <label htmlFor="mensaje" className="block text-sm font-bold text-foreground">Cuéntanos un poco más sobre el evento...</label>
                    <textarea id="mensaje" name="mensaje" value={formData.mensaje} onChange={handleInputChange} className="w-full px-4 py-3 bg-secondary/10 border border-input rounded-xl focus:ring-2 focus:ring-accent transition-all min-h-[100px]" placeholder="Colores temáticos de la boda, fechas importantes..." />
                </div>

                <div className="pt-6 border-t border-border mt-8 flex flex-col md:flex-row gap-4 justify-center">
                   {/* Enviar WhatsApp */}
                  <button onClick={handleWhatsApp} disabled={isSubmitting} className="flex-1 px-8 py-4 bg-[#25D366] hover:bg-[#128C7E] text-white rounded-xl text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 active:scale-95 flex items-center justify-center gap-3">
                    <MessageCircle className="w-6 h-6" />
                    Consultar por WhatsApp
                  </button>

                  {/* Enviar Email */}
                  <button onClick={handleEmail} disabled={isSubmitting} className="flex-1 px-8 py-4 bg-accent/20 hover:bg-accent/40 text-accent-foreground border border-accent rounded-xl text-lg font-semibold shadow hover:shadow-xl transition-all duration-300 active:scale-95 flex items-center justify-center gap-3">
                    <Mail className="w-6 h-6" />
                    Enviar Consulta por Email
                  </button>
                </div>
                
                <p className="text-center text-xs text-muted-foreground pt-4">
                  *Nos pondremos en contacto contigo lo más rápido posible. Preparar inventario de miniperfumes premium requiere semanas de gestión.
                </p>

              </div>
            </motion.div>
          </div>
        </section>

        <Footer />
      </div>
    </>;
};

export default HomePage;