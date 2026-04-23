import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Sparkles, Gift, Heart, Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { toast } from 'sonner';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import EarringsCarousel from '@/components/EarringsCarousel.jsx';
const HomePage = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    forma: '',
    colores: '',
    perfume: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [currentPerfumeIndex, setCurrentPerfumeIndex] = useState(0);
  const handleInputChange = e => {
    const {
      name,
      value
    } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  const handleSubmit = async e => {
    e.preventDefault();

    // Validaciones
    if (!formData.nombre.trim()) {
      toast.error('¡Ups! Te has olvidado de decirnos tu nombre 💖');
      return;
    }
    if (!formData.email.trim()) {
      toast.error('Falta tu correo para que podamos contactarte ✨');
      return;
    }
    if (!formData.telefono.trim()) {
      toast.error('Necesitamos tu teléfono para el WhatsApp y el envío 📦');
      return;
    }
    if (!formData.forma) {
      toast.error('¡No nos has dicho tu forma de joyita favorita! 🙈');
      return;
    }
    if (!formData.colores.trim()) {
      toast.error('Dinos qué colores te gustan para hacer tu caja perfecta 🎨');
      return;
    }
    if (!formData.perfume) {
      toast.error('¡Falta elegir el estilo de tu perfume! 🌸');
      return;
    }
    setIsSubmitting(true);
    try {
      // Guardado silencioso de seguridad
      localStorage.setItem('mysteryBoxOrder', JSON.stringify({
        ...formData,
        timestamp: new Date().toISOString()
      }));

      // 1. Enviar el formulario por correo directo a tu Gmail (kamelamejoyas)
      fetch('https://formsubmit.co/ajax/kamelamejoyas@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          _subject: '🎁 ¡Nuevo Pedido de Mystery Box Personalizada!',
          Nombre: formData.nombre,
          Email: formData.email,
          Teléfono: formData.telefono,
          Forma_Joya: formData.forma,
          Colores: formData.colores,
          Estilo_Perfume: formData.perfume
        })
      }).catch(err => console.log('Aviso de envio de email:', err));

      // 2. Preparar el mensaje literal que irá a tu WhatsApp
      const message = encodeURIComponent(`¡Hola! Quiero crear mi Pack Sorpresa Personalizado 🎁\n\n` + `Nombre: ${formData.nombre}\n` + `Email: ${formData.email}\n` + `Teléfono: ${formData.telefono}\n` + `Formas favoritas: ${formData.forma}\n` + `Colores favoritos: ${formData.colores}\n` + `Estilo de perfume: ${formData.perfume}\n\n` + `Precio: 22,99€`);
      toast.success('¡Caja en preparación! Abriendo WhatsApp... ✨');

      // 3. Abrir WhatsApp esquivando los bloqueadores
      setTimeout(() => {
        window.location.href = `https://wa.me/34659330593?text=${message}`;

        // Limpiar formulario para el siguiente cliente
        setFormData({
          nombre: '',
          email: '',
          telefono: '',
          forma: '',
          colores: '',
          perfume: ''
        });
        setIsSubmitting(false);
      }, 500);
    } catch (error) {
      console.error('Fallo de conexión:', error);
      // Este es el aviso si, por ejemplo, el cliente pierde el internet al pulsar:
      toast.error('¡Uy! Ha habido un problema de conexión. ¿Puedes volver a pulsar? 🥺');
      setIsSubmitting(false);
    }
  };

  // Carousel navigation functions
  const nextPerfume = () => {
    setCurrentPerfumeIndex(prev => (prev + 1) % featuredPerfumes.length);
  };
  const prevPerfume = () => {
    setCurrentPerfumeIndex(prev => (prev - 1 + featuredPerfumes.length) % featuredPerfumes.length);
  };

  // Featured mini-perfumes section - 29 products REORGANIZED BY COLOR
  // Order: Light tones → Warm light tones → Warm dark tones → Dark tones
  const featuredPerfumes = [
  // 1. LIGHT TONES (rosados, perlados, blancos)
  {
    url: 'https://horizons-cdn.hostinger.com/941371a8-fc9d-4f9b-89f0-df53540c25da/d9445463042474e7ba43cc360d927067.jpg',
    alt: 'Mini-perfume Chance Chanel Eau Tendre con botella redonda rosa perlada'
  }, {
    url: 'https://horizons-cdn.hostinger.com/941371a8-fc9d-4f9b-89f0-df53540c25da/0005486cbede51495283a2024243a192.jpg',
    alt: 'Mini-perfume My Way Giorgio Armani con botella rosa perlada'
  }, {
    url: 'https://horizons-cdn.hostinger.com/941371a8-fc9d-4f9b-89f0-df53540c25da/1a4da0c6f8c54729b964f7f9e435d106.jpg',
    alt: 'Mini-perfume Miss Dior Blooming Bouquet con botella cuadrada y moño negro'
  }, {
    url: 'https://horizons-cdn.hostinger.com/941371a8-fc9d-4f9b-89f0-df53540c25da/b69329fed8dab061eb4d5bfe254f0b18.jpg',
    alt: 'Mini-perfume con botella rectangular rosa coral y tapón plateado'
  }, {
    url: 'https://horizons-cdn.hostinger.com/941371a8-fc9d-4f9b-89f0-df53540c25da/d56c4a8484234fc57bd0dd412a37ae84.jpg',
    alt: 'Mini-perfume TOM FORD SOLEIL NEIGE con botella gris lavanda'
  }, {
    url: 'https://horizons-cdn.hostinger.com/941371a8-fc9d-4f9b-89f0-df53540c25da/52bc6e60b0e488426b22a04ffbcfa4aa.jpg',
    alt: 'Mini-perfume con botella cuadrada de cristal y tapón plateado'
  },
  // 2. WARM LIGHT TONES (dorados, amarillos, beige)
  {
    url: 'https://horizons-cdn.hostinger.com/941371a8-fc9d-4f9b-89f0-df53540c25da/73cd72a447dc0cc099dad01d725a35eb.jpg',
    alt: 'Mini-perfume Coco Mademoiselle Chanel con botella cuadrada dorada'
  }, {
    url: 'https://horizons-cdn.hostinger.com/941371a8-fc9d-4f9b-89f0-df53540c25da/9c0809510e5a6f17a9c52787a64b1514.jpg',
    alt: 'Mini-perfume Dior J\'adore con botella dorada en forma de gota'
  }, {
    url: 'https://horizons-cdn.hostinger.com/941371a8-fc9d-4f9b-89f0-df53540c25da/e030ea6795068a0fb2c29ed1355c9e55.jpg',
    alt: 'Mini-perfume con botella redonda dorada pequeña'
  }, {
    url: 'https://horizons-cdn.hostinger.com/941371a8-fc9d-4f9b-89f0-df53540c25da/38ec6767a02eee75ef5dba70f38e415e.jpg',
    alt: 'Mini-perfume con botella cuadrada dorada y tapón plateado'
  }, {
    url: 'https://horizons-cdn.hostinger.com/941371a8-fc9d-4f9b-89f0-df53540c25da/5a7d633e9d74d8a6792d671932777d90.jpg',
    alt: 'Mini-perfume La Petite Robe Noire con botella dorada y silueta negra'
  }, {
    url: 'https://horizons-cdn.hostinger.com/941371a8-fc9d-4f9b-89f0-df53540c25da/1a183755b4d39a6d564db60c30c6bcf9.jpg',
    alt: 'Mini-perfume dorado con etiqueta marrón LANCÔME'
  }, {
    url: 'https://horizons-cdn.hostinger.com/941371a8-fc9d-4f9b-89f0-df53540c25da/f2075f7065467d35aa2865e06d296c53.jpg',
    alt: 'Mini-perfume con botella cuadrada dorada y tapón cristal'
  }, {
    url: 'https://horizons-cdn.hostinger.com/941371a8-fc9d-4f9b-89f0-df53540c25da/b3167d18873a5900185de708e4e063fa.jpg',
    alt: 'Mini-perfume con botella cuadrada dorada y moño marrón'
  }, {
    url: 'https://horizons-cdn.hostinger.com/941371a8-fc9d-4f9b-89f0-df53540c25da/76e54e651ab2b8568cbf909fc8a35026.jpg',
    alt: 'Mini-perfume Giorgio Armani Si con botella rectangular dorada y tapón beige'
  }, {
    url: 'https://horizons-cdn.hostinger.com/941371a8-fc9d-4f9b-89f0-df53540c25da/011c2b876bb56282a01ea9d0afd62543.jpg',
    alt: 'Mini-perfume Giorgio Armani Si con botella rectangular dorada perlada y tapón negro'
  }, {
    url: 'https://horizons-cdn.hostinger.com/941371a8-fc9d-4f9b-89f0-df53540c25da/d4e6113df3910c07297a7cad4ccd3624.jpg',
    alt: 'Mini-perfume Tom Ford Tubéreuse Nue con botella cuadrada beige crema'
  }, {
    url: 'https://horizons-cdn.hostinger.com/941371a8-fc9d-4f9b-89f0-df53540c25da/49273ddce85456b540098d182ac37951.jpg',
    alt: 'Mini-perfume amarillo con moño dorado'
  }, {
    url: 'https://horizons-cdn.hostinger.com/941371a8-fc9d-4f9b-89f0-df53540c25da/dcdeb20a717ba55cb92a7a9f0ef167dd.jpg',
    alt: 'Mini-perfume Jo Malone Orange Blossom Cologne con botella rectangular amarilla dorada'
  }, {
    url: 'https://horizons-cdn.hostinger.com/941371a8-fc9d-4f9b-89f0-df53540c25da/d5852d76de8c35c64b6bb3246de0b586.jpg',
    alt: 'Mini-perfume Burberry Brit Sheer con botella dorada con patrón geométrico y tapón negro'
  }, {
    url: 'https://horizons-cdn.hostinger.com/941371a8-fc9d-4f9b-89f0-df53540c25da/e815c0704f3d3e7933fe44a5aa82a5d6.jpg',
    alt: 'Mini-perfume NOMADE con tapón dorado y botella transparente'
  },
  // 3. WARM DARK TONES (ámbar, naranjas, verdes)
  {
    url: 'https://horizons-cdn.hostinger.com/941371a8-fc9d-4f9b-89f0-df53540c25da/3168f685eccafc0b5b02836fb1021dda.jpg',
    alt: 'Mini-perfume Twilly d\'Hermès con botella naranja ámbar'
  }, {
    url: 'https://horizons-cdn.hostinger.com/941371a8-fc9d-4f9b-89f0-df53540c25da/998541ecc74dfd2e95bb4c0171b31c0e.jpg',
    alt: 'Mini-perfume Giorgio Armani Si Passione con botella rectangular roja coral y tapón negro'
  }, {
    url: 'https://horizons-cdn.hostinger.com/941371a8-fc9d-4f9b-89f0-df53540c25da/f01936ed0f5c5a62f8be44ec8ac841c3.jpg',
    alt: 'Mini-perfume con botella ovalada verde oliva'
  },
  // 4. DARK TONES (negros, rojos oscuros)
  {
    url: 'https://horizons-cdn.hostinger.com/941371a8-fc9d-4f9b-89f0-df53540c25da/883d161d1ba717192bf32c981de343ec.jpg',
    alt: 'Mini-perfume BULGARI con botella redonda roja'
  }, {
    url: 'https://horizons-cdn.hostinger.com/941371a8-fc9d-4f9b-89f0-df53540c25da/b17dcb4303b2fc1faea03875dc435753.jpg',
    alt: 'Mini-perfume Dior 9 con botella redonda negra y brillante'
  }, {
    url: 'https://horizons-cdn.hostinger.com/941371a8-fc9d-4f9b-89f0-df53540c25da/de2d21b1723e6dc6c3940c21b7c4cf5c.jpg',
    alt: 'Mini-perfume Valentino Donna Born in Roma con botella negra con patrón geométrico'
  }, {
    url: 'https://horizons-cdn.hostinger.com/941371a8-fc9d-4f9b-89f0-df53540c25da/19815eef042ffe99e19ca3e190b704b5.jpg',
    alt: 'Mini-perfume Valentino Donna Born in Roma con botella negra con patrón geométrico versión 2'
  }, {
    url: 'https://horizons-cdn.hostinger.com/941371a8-fc9d-4f9b-89f0-df53540c25da/85449e94b4716ad2a1ad616a27d339b8.jpg',
    alt: 'Mini-perfume Tom Ford White Suede con botella negra cuadrada y etiqueta dorada'
  }];

  // Jewelry catalog - UPDATED: Removed positions 4 and 6, moved position 2 to position 1, added 9 new images
  const catalogJewelry = [{
    url: 'https://horizons-cdn.hostinger.com/941371a8-fc9d-4f9b-89f0-df53540c25da/71444b4748a2b466be1fda2e4b5ce093.jpg',
    alt: 'Pendientes de resina epoxi con forma de mariposa translúcida'
  }, {
    url: 'https://horizons-cdn.hostinger.com/941371a8-fc9d-4f9b-89f0-df53540c25da/2d9e4066784b0ad55b1f72d4b2e98c79.jpg',
    alt: 'Pendientes de resina con forma orgánica en tonos rosa y blanco'
  }, {
    url: 'https://horizons-cdn.hostinger.com/941371a8-fc9d-4f9b-89f0-df53540c25da/2a9ba28badc6cb70c850d6b3d8b881fb.jpg',
    alt: 'Pendientes de resina con forma de abanico en tonos rosa y turquesa'
  }, {
    url: 'https://horizons-cdn.hostinger.com/941371a8-fc9d-4f9b-89f0-df53540c25da/101bb48d2f36fb70673555e30292b1dd.jpg',
    alt: 'Pendientes de resina epoxi turquesa con destellos brillantes'
  }, {
    url: 'https://horizons-cdn.hostinger.com/941371a8-fc9d-4f9b-89f0-df53540c25da/bcc80257375f716f9bf16eae864ef89e.jpg',
    alt: 'Pendientes de resina epoxi naranja ondulados'
  }, {
    url: 'https://horizons-cdn.hostinger.com/941371a8-fc9d-4f9b-89f0-df53540c25da/9e51da21adbe3cecd82a79f06bac9bf5.png',
    alt: 'Pendientes de resina rosa con turquesa y madera, ejemplo de joyería artesanal'
  }, {
    url: 'https://horizons-cdn.hostinger.com/941371a8-fc9d-4f9b-89f0-df53540c25da/0365ec88248e95be07fb795ed02d94c2.png',
    alt: 'Pendientes de resina ovalados en tonos beige y madera'
  }, {
    url: 'https://horizons-cdn.hostinger.com/941371a8-fc9d-4f9b-89f0-df53540c25da/75e337e979d6c61b5b5007605ddd8361.jpg',
    alt: 'Pendientes de resina epoxi con forma de mariposa translúcida en tonos amarillo y azul claro'
  }, {
    url: 'https://horizons-cdn.hostinger.com/941371a8-fc9d-4f9b-89f0-df53540c25da/d2f319828782b97a3b82b3bedaee31a1.jpg',
    alt: 'Pendientes de resina con forma de gota en tonos dorado y multicolor'
  }, {
    url: 'https://horizons-cdn.hostinger.com/941371a8-fc9d-4f9b-89f0-df53540c25da/f98e0ee847e76afbc94dc6e962a380c4.jpg',
    alt: 'Pendientes de resina con forma de gota en tonos verde menta y beige'
  }, {
    url: 'https://horizons-cdn.hostinger.com/941371a8-fc9d-4f9b-89f0-df53540c25da/04960d364e623c85b2b5c521b255eb91.jpg',
    alt: 'Pendientes de resina epoxi con forma orgánica irregular en color rosa magenta con textura craquelada'
  }, {
    url: 'https://horizons-cdn.hostinger.com/941371a8-fc9d-4f9b-89f0-df53540c25da/4237ffaf29bbea04cea2fc53c12487f8.jpg',
    alt: 'Pendientes de resina con forma de abanico en tonos azul y blanco'
  }, {
    url: 'https://horizons-cdn.hostinger.com/941371a8-fc9d-4f9b-89f0-df53540c25da/2e3f998bdd234fe9c97ef4b6c1b204d7.jpg',
    alt: 'Pendientes de resina con forma de flor en tonos rosa pastel'
  }, {
    url: 'https://horizons-cdn.hostinger.com/941371a8-fc9d-4f9b-89f0-df53540c25da/d5c6c428806a5a6a7039b9404c6c26f5.jpg',
    alt: 'Pendientes de resina con forma orgánica en tonos verde menta y blanco'
  }];

  // Pack Sorpresa example images
  const packExamples = [{
    url: 'https://horizons-cdn.hostinger.com/941371a8-fc9d-4f9b-89f0-df53540c25da/2118dcd4adebc9b4870b009a75a3682b.jpg',
    alt: 'Dos pendientes de resina con turquesa y madera, ejemplo de joyería artesanal'
  }, {
    url: 'https://horizons-cdn.hostinger.com/941371a8-fc9d-4f9b-89f0-df53540c25da/c93f3cfe72bdccc8f349b15c8870ad26.jpg',
    alt: 'Frasco de perfume de cristal con diseño clásico, ejemplo de miniperfume'
  }];
  return <>
      <Helmet>
        <title>kamelamepacksorpresa - Mystery Box Personalizada</title>
        <meta name="description" content="Descubre tu Mystery Box personalizada con mini-perfumes, pendientes y regalos sorpresa. ¡Regálate o sorprende a alguien especial!" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />

        {/* Hero Section */}
        <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary/30 via-background to-secondary/20">
          {/* Decorative elements */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 left-10 w-32 h-32 bg-accent rounded-full blur-3xl" data-twinkle></div>
            <div className="absolute bottom-20 right-10 w-40 h-40 bg-primary rounded-full blur-3xl" data-sparkle></div>
            <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-secondary rounded-full blur-2xl" data-twinkle></div>
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.6
          }}>
              <div className="inline-block mb-6">
                <Sparkles className="w-12 h-12 md:w-16 md:h-16 text-accent mx-auto" data-sparkle />
              </div>
              
              <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold text-foreground leading-tight mb-6 text-balance">
                <span className="sparkle-text">Descubre tu Mystery Box</span>
                <br />
                <span className="bg-gradient-to-r from-accent via-primary to-secondary bg-clip-text text-transparent" data-shimmer>
                  Personalizada
                </span>
              </h1>
              
              <p className="text-lg md:text-xl lg:text-2xl text-foreground/80 max-w-3xl mx-auto mb-12 leading-relaxed">
                Regálate o sorprende a alguien especial con una caja de miniperfumes hecha a medida
              </p>

              <motion.a href="#personalizar" className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-accent-foreground rounded-xl text-lg font-semibold hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 active:scale-[0.98]" whileHover={{
              scale: 1.02
            }} whileTap={{
              scale: 0.98
            }}>
                <Gift className="w-5 h-5" />
                Crear mi Caja ahora
              </motion.a>
            </motion.div>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
            <motion.div animate={{
            y: [0, 10, 0]
          }} transition={{
            duration: 2,
            repeat: Infinity
          }} className="w-6 h-10 border-2 border-foreground/20 rounded-full flex items-start justify-center p-2">
              <div className="w-1 h-2 bg-foreground/20 rounded-full"></div>
            </motion.div>
          </div>
        </section>

        {/* Pack Sorpresa Section - Text + Image Grid */}
        <section id="oferta" className="py-20 md:py-24 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.5
          }} viewport={{
            once: true
          }} className="text-center mb-12">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground text-balance mb-12">
                Un pack sorpresa que combina miniperfumes con joyería artesanal de resina
              </h2>

              {/* Example Images Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
                {packExamples.map((example, index) => <motion.div key={index} initial={{
                opacity: 0,
                y: 20
              }} whileInView={{
                opacity: 1,
                y: 0
              }} transition={{
                duration: 0.5,
                delay: index * 0.1
              }} viewport={{
                once: true
              }} className="relative aspect-square rounded-2xl overflow-hidden bg-card shadow-lg">
                    <img src={example.url} alt={example.alt} className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
                  </motion.div>)}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Main Offer Section */}
        <section className="py-20 md:py-24 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.5
          }} viewport={{
            once: true
          }} className="text-center mb-16">
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
                Pack Sorpresa Personalizado
              </h2>
              <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
                Cada caja es una obra artesanal creada con tus gustos en mente
              </p>
            </motion.div>

            <motion.div initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.5,
            delay: 0.2
          }} viewport={{
            once: true
          }} className="max-w-2xl mx-auto">
              <div className="bg-card rounded-2xl shadow-lg p-8 md:p-12 border border-border">
                <div className="text-center mb-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-accent/20 rounded-full mb-4">
                    <Heart className="w-8 h-8 text-accent" />
                  </div>
                  <div className="text-5xl md:text-6xl font-serif font-bold text-foreground mb-2">
                    22,99€
                  </div>
                  <p className="text-sm text-muted-foreground">Envío incluido</p>
                </div>

                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-3">
                    <Star className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <span className="text-foreground/90 leading-relaxed">
                      <span className="font-semibold">2 Mini-perfumes</span> seleccionados según tus preferencias
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Star className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <span className="text-foreground/90 leading-relaxed">
                      <span className="font-semibold">2 Pendientes</span> de resina o piedrecitas en formas que te encantan
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Star className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    <span className="text-foreground/90 leading-relaxed">
                      <span className="font-semibold">1 Regalo sorpresa</span> especial para ti
                    </span>
                  </div>
                </div>

                <a href="#personalizar" className="block w-full px-8 py-4 bg-accent text-accent-foreground rounded-xl text-center font-semibold hover:shadow-lg transition-all duration-200 active:scale-[0.98]">
                  Personalizar mi Pack
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Featured Mini-perfumes Carousel Section - 29 products ORGANIZED BY COLOR - COMPACT SIZE */}
        <section id="mini-perfumes" className="py-20 md:py-24 bg-primary/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.5
          }} viewport={{
            once: true
          }} className="text-center mb-12">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6 text-balance">
                Mini perfumes disponibles en la caja misteriosa
              </h2>
              <p className="text-lg text-foreground/80 max-w-3xl mx-auto leading-relaxed">
                Descubre nuestra selección de miniperfumes
              </p>
            </motion.div>

            {/* Compact Carousel Container - 50% size */}
            <div className="flex items-center justify-center">
              <div className="relative w-full max-w-md md:max-w-lg">
                {/* Main Image Display - Compact */}
                <div className="relative aspect-square rounded-2xl overflow-hidden bg-card shadow-lg">
                  <img key={currentPerfumeIndex} src={featuredPerfumes[currentPerfumeIndex].url} alt={featuredPerfumes[currentPerfumeIndex].alt} className="w-full h-full object-cover transition-opacity duration-500" style={{
                  animation: 'fadeIn 0.5s ease-in-out'
                }} />
                </div>

                {/* Navigation Arrows - Smaller */}
                <button onClick={prevPerfume} className="absolute left-1 md:left-2 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 bg-background/90 hover:bg-background rounded-full flex items-center justify-center shadow-lg transition-all duration-200 hover:scale-110 active:scale-95 z-10" aria-label="Anterior mini-perfume">
                  <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-foreground" />
                </button>

                <button onClick={nextPerfume} className="absolute right-1 md:right-2 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 bg-background/90 hover:bg-background rounded-full flex items-center justify-center shadow-lg transition-all duration-200 hover:scale-110 active:scale-95 z-10" aria-label="Siguiente mini-perfume">
                  <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-foreground" />
                </button>

                {/* Position Indicator - Compact */}
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 bg-background/90 px-3 py-1.5 rounded-full shadow-lg z-10">
                  <span className="text-xs md:text-sm font-semibold text-foreground">
                    {currentPerfumeIndex + 1} de {featuredPerfumes.length}
                  </span>
                </div>
              </div>
            </div>

            {/* Keyboard Navigation Hint */}
            <p className="text-center text-sm text-muted-foreground mt-6">
              Usa las flechas para navegar entre los mini-perfumes
            </p>
          </div>
        </section>

        {/* Jewelry Carousel Section */}
        <section className="py-20 md:py-24 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.5
          }} viewport={{
            once: true
          }} className="text-center mb-12">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6 text-balance">
                Joyas que encontrarás en la caja misteriosa
              </h2>
              <p className="text-lg text-foreground/80 max-w-3xl mx-auto leading-relaxed">
                Descubre pendientes de resina hechos por mi y pendientes de piedras como cuarzo, ojo de tigre y más.
              </p>
            </motion.div>

            <motion.div initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.5,
            delay: 0.2
          }} viewport={{
            once: true
          }}>
              <EarringsCarousel earrings={catalogJewelry} />

              {/* Keyboard Navigation Hint */}
              <p className="text-center text-sm text-muted-foreground mt-6">
                Usa las flechas para navegar entre las joyas
              </p>
            </motion.div>
          </div>
        </section>

        {/* Personalization Form Section */}
        <section id="personalizar" className="py-20 md:py-24 bg-background">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.5
          }} viewport={{
            once: true
          }} className="text-center mb-12">
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
                Personaliza tu Mystery Box
              </h2>
              <p className="text-lg text-foreground/70">
                Cuéntanos tus preferencias y crearemos algo especial para ti
              </p>
            </motion.div>

            <motion.div initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.5,
            delay: 0.2
          }} viewport={{
            once: true
          }}>
              <form onSubmit={handleSubmit} className="bg-card rounded-2xl shadow-lg p-8 md:p-12 border border-border space-y-8">
                {/* Nombre y Apellidos */}
                <div>
                  <label htmlFor="nombre" className="block text-sm font-semibold text-foreground mb-2">
                    Nombre y Apellidos
                  </label>
                  <input type="text" id="nombre" name="nombre" value={formData.nombre} onChange={handleInputChange} className="w-full px-4 py-3 bg-background border border-input rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-all duration-200" placeholder="Tu nombre completo" required />
                </div>

                {/* Correo Electrónico */}
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-foreground mb-2">
                    Correo Electrónico
                  </label>
                  <input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} className="w-full px-4 py-3 bg-background border border-input rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-all duration-200" placeholder="tu@correo.com" required />
                </div>

                {/* Teléfono */}
                <div>
                  <label htmlFor="telefono" className="block text-sm font-semibold text-foreground mb-2">
                    Teléfono
                  </label>
                  <input type="tel" id="telefono" name="telefono" value={formData.telefono} onChange={handleInputChange} className="w-full px-4 py-3 bg-background border border-input rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-all duration-200" placeholder="Tu número de teléfono" required />
                </div>

                {/* Formas favoritas */}
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-3">
                    Formas favoritas para joyitas
                  </label>
                  <div className="space-y-3">
                    {['Redonda', 'Cuadrada', 'Ovalada', 'Triangular', '¡Sorpréndeme!'].map(forma => <label key={forma} className="flex items-center gap-3 cursor-pointer group">
                        <input type="radio" name="forma" value={forma} checked={formData.forma === forma} onChange={handleInputChange} className="w-5 h-5 text-accent border-input focus:ring-2 focus:ring-ring transition-all duration-200" required />
                        <span className="text-foreground/90 group-hover:text-foreground transition-colors duration-200">
                          {forma}
                        </span>
                      </label>)}
                  </div>
                </div>

                {/* Colores favoritos */}
                <div>
                  <label htmlFor="colores" className="block text-sm font-semibold text-foreground mb-2">
                    Colores favoritos
                  </label>
                  <input type="text" id="colores" name="colores" value={formData.colores} onChange={handleInputChange} className="w-full px-4 py-3 bg-background border border-input rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring transition-all duration-200" placeholder="Ej: Rosa, azul pastel, dorado..." required />
                </div>

                {/* Estilo de perfume */}
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-3">
                    Estilo de perfume
                  </label>
                  <div className="space-y-3">
                    {['Dulces', 'Amaderados', 'Frescos'].map(perfume => <label key={perfume} className="flex items-center gap-3 cursor-pointer group">
                        <input type="radio" name="perfume" value={perfume} checked={formData.perfume === perfume} onChange={handleInputChange} className="w-5 h-5 text-accent border-input focus:ring-2 focus:ring-ring transition-all duration-200" required />
                        <span className="text-foreground/90 group-hover:text-foreground transition-colors duration-200">
                          {perfume}
                        </span>
                      </label>)}
                  </div>
                </div>

                {/* Submit Button */}
                <button type="submit" disabled={isSubmitting} className="w-full px-8 py-4 bg-accent text-accent-foreground rounded-xl text-lg font-semibold hover:shadow-lg transition-all duration-200 active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none flex items-center justify-center gap-2">
                  {isSubmitting ? <>
                      <div className="w-5 h-5 border-2 border-accent-foreground/20 border-t-accent-foreground rounded-full animate-spin"></div>
                      <span>Procesando...</span>
                    </> : <>
                      <Gift className="w-5 h-5" />
                      <span>¡Crear mi Caja y Pedir por WhatsApp!</span>
                    </>}
                </button>

                <p className="text-sm text-center text-muted-foreground">
                  Al enviar, serás redirigido a WhatsApp con tus preferencias
                </p>
              </form>
            </motion.div>
          </div>
        </section>

        <Footer />
      </div>

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
      `}</style>
    </>;
};
export default HomePage;