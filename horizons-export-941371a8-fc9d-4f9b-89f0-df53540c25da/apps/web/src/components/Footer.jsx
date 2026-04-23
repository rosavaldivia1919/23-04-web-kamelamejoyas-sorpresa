import React from 'react';
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from '@/components/ui/dialog';

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <span className="font-serif text-2xl font-semibold">kamelamepacksorpresa</span>
            <p className="text-sm mt-2 opacity-80">Mystery Boxes personalizadas con amor</p>
          </div>

          <div className="text-center md:text-right">
            <div className="flex justify-center md:justify-end gap-3 mb-4">
              <a href="https://www.tiktok.com/@kamelamejoyas/video/7626005100976196886" target="_blank" rel="noopener noreferrer" className="p-2 bg-background text-foreground rounded-full hover:bg-accent hover:text-accent-foreground transition-colors duration-200">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" /></svg>
              </a>
              <a href="https://www.instagram.com/kamelamejoyas/" target="_blank" rel="noopener noreferrer" className="p-2 bg-background text-foreground rounded-full hover:bg-accent hover:text-accent-foreground transition-colors duration-200">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
            </div>
            <p className="text-sm opacity-80 mb-2">Contacto: kamelamejoyas@gmail.com</p>
            <p className="text-xs opacity-60">© {new Date().getFullYear()} kamelamepacksorpresa.</p>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-secondary-foreground/20 text-center">
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-3 text-xs opacity-80">

            <Dialog>
              <DialogTrigger asChild><button className="hover:underline hover:opacity-100 transition-opacity duration-200">Aviso Legal</button></DialogTrigger>
              <DialogContent className="max-w-2xl max-h-[85vh] overflow-y-auto">
                <DialogTitle className="font-serif text-2xl font-bold">Aviso Legal</DialogTitle>
                <div className="space-y-4 text-sm text-left mt-4 text-foreground">
                  <h3 className="font-semibold">1. Datos Identificativos</h3>
                  <p>Titular: Rosa Valdivia Monge<br />Actividad: Venta de cajas sorpresa<br />Email: kamelamejoyas@gmail.com</p>
                  <h3 className="font-semibold mt-4">2. Legal</h3>
                  <p>El diseno y los articulos estan protegidos. La intencion de compra implica la aceptacion de este aviso.</p>
                </div>
              </DialogContent>
            </Dialog>

            <Dialog>
              <DialogTrigger asChild><button className="hover:underline hover:opacity-100 transition-opacity duration-200">Privacidad</button></DialogTrigger>
              <DialogContent className="max-w-2xl max-h-[85vh] overflow-y-auto text-left text-foreground">
                <DialogTitle className="font-serif text-2xl font-bold">Politica de Privacidad</DialogTitle>
                <div className="space-y-4 text-sm mt-4">
                  <p>En cumplimiento con el RGPD, los datos solicitados (nombre, email y telefono) tienen el uso unico de procesar y enviar tus pedidos.</p>
                </div>
              </DialogContent>
            </Dialog>

            <Dialog>
              <DialogTrigger asChild><button className="hover:underline hover:opacity-100 transition-opacity duration-200">Envios</button></DialogTrigger>
              <DialogContent className="max-w-2xl max-h-[85vh] overflow-y-auto text-left text-foreground">
                <DialogTitle className="font-serif text-2xl font-bold">Politica de Envios</DialogTitle>
                <div className="space-y-4 text-sm mt-4">
                  <p>Realizamos envios a toda Espana y Europa.</p>
                  <ul className="list-disc pl-5 mt-2 space-y-2">
                    <li><strong>Preparacion:</strong> Entre 1 y 5 dias laborables.</li>
                    <li><strong>Espana:</strong> El envio toma 24-72h una vez depositado en mensajeria.</li>
                    <li><strong>Europa:</strong> De 3 a 7 dias habiles aproximadamente.</li>
                  </ul>
                </div>
              </DialogContent>
            </Dialog>

            <Dialog>
              <DialogTrigger asChild><button className="hover:underline hover:opacity-100 transition-opacity duration-200">Devoluciones</button></DialogTrigger>
              <DialogContent className="max-w-2xl max-h-[85vh] overflow-y-auto text-left text-foreground">
                <DialogTitle className="font-serif text-2xl font-bold">Devoluciones</DialogTitle>
                <div className="space-y-4 text-sm mt-4">
                  <div className="bg-muted p-4 rounded-lg border">
                    <p className="font-medium">Debido a la naturaleza artesanal (Mystery Box), NO se aceptan devoluciones por cambio de opinion o desistimiento.</p>
                  </div>
                  <p>Solo procesamos incidencias si el producto llega danado o roto. Dispones de 48h desde la recepcion para mandarnos fotos del producto por email.</p>
                </div>
              </DialogContent>
            </Dialog>

            <Dialog>
              <DialogTrigger asChild><button className="hover:underline hover:opacity-100 transition-opacity duration-200">Terminos</button></DialogTrigger>
              <DialogContent className="max-w-2xl max-h-[85vh] overflow-y-auto text-left text-foreground">
                <DialogTitle className="font-serif text-2xl font-bold">Terminos y Condiciones</DialogTitle>
                <div className="space-y-4 text-sm mt-4">
                  <p>Al efectuar una compra, aceptas estar adquiriendo productos sorpresa y artesanales (no existen dos cajas identicas). El pago debe efectuarse en su totalidad para comenzar la preparacion de los mismos.</p>
                </div>
              </DialogContent>
            </Dialog>

          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
