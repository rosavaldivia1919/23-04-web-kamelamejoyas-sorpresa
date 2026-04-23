import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from '@/components/ui/dialog';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="/" className="font-serif text-2xl md:text-3xl font-semibold text-foreground hover:opacity-80 transition-opacity duration-200">
            kamelamepacksorpresa
          </a>

          <div className="hidden md:flex items-center gap-8">
            <a href="/#oferta" className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors duration-200">Oferta</a>
            <a href="/#mini-perfumes" className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors duration-200">Productos</a>

            <Dialog>
              <DialogTrigger asChild>
                <button className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors duration-200">Preguntas Frecuentes</button>
              </DialogTrigger>
              <DialogContent className="max-w-xl max-h-[85vh] overflow-y-auto">
                <DialogTitle className="font-serif text-2xl font-bold text-foreground">Preguntas Frecuentes (FAQ)</DialogTitle>
                <div className="space-y-4 mt-2 text-left">
                  <div className="bg-muted p-4 rounded-lg">
                    <h3 className="font-semibold text-foreground mb-1">¿Que son estos productos sorpresa?</h3>
                    <p className="text-sm text-foreground/80">Recibimos tus indicaciones y seleccionamos con amor las joyitas y perfumes ideales.</p>
                  </div>
                  <div className="bg-muted p-4 rounded-lg">
                    <h3 className="font-semibold text-foreground mb-1">¿Que pasa si llega danado?</h3>
                    <p className="text-sm text-foreground/80">Dispones de 48h tras la recepcion para mandarnos fotos y repondremos tu articulo afectado.</p>
                  </div>
                  <div className="bg-muted p-4 rounded-lg">
                    <h3 className="font-semibold text-foreground mb-1">¿Cuanto tarda el envio?</h3>
                    <p className="text-sm text-foreground/80">Caja preparada en 1-5 dias. El paquete toma 24-72h (Espana) o 3-7 dias (Europa).</p>
                  </div>
                </div>
              </DialogContent>
            </Dialog>

            <a href="/#personalizar" className="px-6 py-2 bg-accent text-accent-foreground rounded-lg font-medium hover:opacity-90 transition-all duration-200 active:scale-[0.98]">Crear mi Caja</a>
          </div>

          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden p-2 text-foreground hover:bg-muted rounded-lg transition-all duration-200" aria-label="Menu">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-3">
              <a href="/#oferta" onClick={() => setIsMenuOpen(false)} className="px-4 py-2 text-sm font-medium text-foreground/80 hover:text-foreground hover:bg-muted rounded-lg">Oferta</a>
              <a href="/#mini-perfumes" onClick={() => setIsMenuOpen(false)} className="px-4 py-2 text-sm font-medium text-foreground/80 hover:text-foreground hover:bg-muted rounded-lg">Productos</a>

              <Dialog>
                <DialogTrigger asChild>
                  <button className="px-4 py-2 text-left text-sm font-medium text-foreground/80 hover:text-foreground hover:bg-muted rounded-lg w-full">Preguntas Frecuentes</button>
                </DialogTrigger>
                <DialogContent className="max-w-[calc(100%-2rem)] mx-auto max-h-[85vh] overflow-y-auto rounded-xl">
                  <DialogTitle className="font-serif text-xl font-bold text-foreground">Preguntas Frecuentes (FAQ)</DialogTitle>
                  <div className="space-y-4 mt-2 text-left">
                    <div className="bg-muted p-4 rounded-lg">
                      <h3 className="font-semibold text-foreground mb-1">¿Que son?</h3>
                      <p className="text-sm text-foreground/80">Seleccionamos con amor las joyitas y perfumes ideales.</p>
                    </div>
                    <div className="bg-muted p-4 rounded-lg">
                      <h3 className="font-semibold text-foreground mb-1">¿Danado?</h3>
                      <p className="text-sm text-foreground/80">Dispones de 48h para mandarnos fotos.</p>
                    </div>
                    <div className="bg-muted p-4 rounded-lg">
                      <h3 className="font-semibold text-foreground mb-1">¿Tiempo de Envio?</h3>
                      <p className="text-sm text-foreground/80">Toma 24-72h (Espana) o 3-7 dias (Europa).</p>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>

              <a href="/#personalizar" onClick={() => setIsMenuOpen(false)} className="mx-4 px-6 py-2 bg-accent text-accent-foreground rounded-lg font-medium text-center hover:opacity-90">Crear mi Caja</a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
