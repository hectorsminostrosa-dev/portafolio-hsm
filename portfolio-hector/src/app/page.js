'use client';
import { useState } from 'react';
import { 
  Briefcase, Award, TrendingUp, Mail, Phone, MapPin, 
  ExternalLink, Menu, X, CheckCircle2, MessageSquare, MonitorPlay 
} from 'lucide-react';

export default function Portfolio() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formStatus, setFormStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus('¡Mensaje enviado con éxito! Me pondré en contacto pronto.');
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-emerald-500 selection:text-slate-950">
      
      {/* HEADER / NAVIGATION */}
      <header className="sticky top-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <a href="#" className="text-xl font-bold tracking-tight text-emerald-400">
            Héctor San Martín <span className="text-slate-400 font-light">| Portfolio</span>
          </a>
          
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
            <a href="#perfil" className="hover:text-emerald-400 transition-colors">Perfil</a>
            <a href="#experiencia" className="hover:text-emerald-400 transition-colors">Trayectoria</a>
            <a href="#servicios" className="hover:text-emerald-400 transition-colors">Servicios</a>
            <a href="#proyectos" className="hover:text-emerald-400 transition-colors">Casos de Éxito</a>
            <a href="#contacto" className="px-4 py-2 bg-emerald-500 text-slate-950 font-semibold rounded-lg hover:bg-emerald-400 transition-all">
              Contáctame
            </a>
          </nav>

          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-slate-300 hover:text-white"
            aria-label="Abrir menú"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Nav */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-slate-900 border-b border-slate-800 px-6 py-4 flex flex-col gap-4 text-slate-300">
            <a href="#perfil" onClick={() => setMobileMenuOpen(false)}>Perfil</a>
            <a href="#experiencia" onClick={() => setMobileMenuOpen(false)}>Trayectoria</a>
            <a href="#servicios" onClick={() => setMobileMenuOpen(false)}>Servicios</a>
            <a href="#proyectos" onClick={() => setMobileMenuOpen(false)}>Casos de Éxito</a>
            <a href="#contacto" onClick={() => setMobileMenuOpen(false)} className="text-emerald-400 font-semibold">Contáctame</a>
          </div>
        )}
      </header>

      {/* HERO SECTION */}
      <section className="relative overflow-hidden py-24 lg:py-32 border-b border-slate-900">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(16,185,129,0.15),rgba(255,255,255,0))]"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10 grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold tracking-wide uppercase">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              Disponible para proyectos y consultorías
            </div>
            <h1 className="text-4xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
              Transformo audiencias en <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-200">comunidades activas</span> y fieles.
            </h1>
            <p className="text-lg text-slate-300 max-w-2xl leading-relaxed">
              Periodista y Licenciado en Comunicación Social. Más de 7 años de experiencia elevando el posicionamiento digital, el engagement y la estrategia de contenidos para empresas, medios e industrias B2B.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <a href="#contacto" className="px-6 py-3.5 bg-emerald-500 text-slate-950 font-bold rounded-xl hover:bg-emerald-400 transition-all shadow-lg shadow-emerald-500/20 flex items-center gap-2">
                <MessageSquare size={18} /> Iniciar Conversación
              </a>
              <a href="#proyectos" className="px-6 py-3.5 bg-slate-900 border border-slate-800 text-slate-200 font-medium rounded-xl hover:bg-slate-800 transition-all flex items-center gap-2">
                Ver Casos de Éxito <ExternalLink size={16} />
              </a>
            </div>
          </div>
          
          <div className="lg:col-span-5 flex justify-center">
            <div className="w-full max-w-md bg-gradient-to-br from-slate-900 to-slate-950 p-8 rounded-3xl border border-slate-800 shadow-2xl relative">
              <div className="absolute -top-3 -right-3 bg-emerald-500 text-slate-950 text-xs font-bold px-3 py-1 rounded-full shadow">
                +12k Seguidores LinkedIn
              </div>
              <div className="space-y-4">
                <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 mb-6">
                  <TrendingUp size={32} />
                </div>
                <h3 className="text-xl font-bold text-white">Impacto Comprobado</h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  Crecimiento orgánico sostenido de más del 30% en engagement y optimización de impresiones de marca en entornos B2B corporativos.
                </p>
                <div className="pt-4 border-t border-slate-800 grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-black text-emerald-400">+7 Años</div>
                    <div className="text-xs text-slate-400">Experiencia</div>
                  </div>
                  <div>
                    <div className="text-2xl font-black text-emerald-400">35%</div>
                    <div className="text-xs text-slate-400">Aumento de Impresiones</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PERFIL / SOBRE MÍ */}
      <section id="perfil" className="py-24 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 space-y-6">
            <h2 className="text-xs font-bold tracking-widest text-emerald-400 uppercase">Perfil Profesional</h2>
            <h3 className="text-3xl font-bold text-white tracking-tight">Comunicación estratégica enfocada en resultados reales</h3>
            <p className="text-slate-300 leading-relaxed">
              Titulado de la Universidad Central, combino el rigor periodístico con tácticas punteras de marketing digital, gestión de comunidades y producción audiovisual multiplataforma.
            </p>
            <div className="space-y-3">
              {['Redacción digital y Storytelling avanzado', 'Gestión integral de comunidades (Community Management)', 'Producción y postproducción de video corporativo y Reels', 'Estrategia omnicanal y analítica de métricas'].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 text-sm text-slate-300">
                  <CheckCircle2 className="text-emerald-400 shrink-0" size={18} />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div id="experiencia" className="lg:col-span-7 grid sm:grid-cols-2 gap-6">
            <div className="bg-slate-900/50 border border-slate-800 p-6 rounded-2xl">
              <h4 className="font-bold text-white text-lg mb-2 flex items-center gap-2">
                <Briefcase className="text-emerald-400" size={20} /> Experiencia Actual
              </h4>
              <p className="text-sm text-slate-300 leading-relaxed mb-4">
                <strong>Holding Grupo 02:</strong> Gestión de contenido digital, engineering branding, leasing y campañas de fidelización. Administración de 3 cuentas principales y soporte audiovisual.
              </p>
              <span className="text-xs bg-emerald-500/10 text-emerald-400 px-2.5 py-1 rounded-md font-medium">Dic 2023 - Presente</span>
            </div>

            <div className="bg-slate-900/50 border border-slate-800 p-6 rounded-2xl">
              <h4 className="font-bold text-white text-lg mb-2 flex items-center gap-2">
                <Award className="text-emerald-400" size={20} /> Trayectoria Sólida
              </h4>
              <p className="text-sm text-slate-300 leading-relaxed mb-4">
                Experiencia previa en atención de clientes masivos (Banco Scotiabank vía Media Interactive), streaming educativo (4ID Science) y medios digitales especializados.
              </p>
              <span className="text-xs bg-slate-800 text-slate-300 px-2.5 py-1 rounded-md font-medium">2017 - 2022</span>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICIOS ESPECIALIZADOS */}
      <section id="servicios" className="py-24 bg-slate-900/30 border-y border-slate-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <h2 className="text-xs font-bold tracking-widest text-emerald-400 uppercase">Servicios Especializados</h2>
            <h3 className="text-3xl font-bold text-white">¿Cómo puedo potenciar tu marca?</h3>
            <p className="text-slate-400">Soluciones integrales de comunicación y marketing digital diseñadas para generar impacto y conversión.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-slate-900 border border-slate-800 p-8 rounded-3xl hover:border-emerald-500/50 transition-all group">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 mb-6 group-hover:scale-110 transition-transform">
                <MessageSquare size={24} />
              </div>
              <h4 className="text-xl font-bold text-white mb-3">Community Management</h4>
              <p className="text-sm text-slate-400 leading-relaxed">
                Gestión activa de comunidades, atención multicanal (SAC), moderación y estrategias enfocadas en maximizar el engagement y la lealtad hacia la marca.
              </p>
            </div>

            <div className="bg-slate-900 border border-slate-800 p-8 rounded-3xl hover:border-emerald-500/50 transition-all group">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 mb-6 group-hover:scale-110 transition-transform">
                <TrendingUp size={24} />
              </div>
              <h4 className="text-xl font-bold text-white mb-3">Content & Inbound Marketing</h4>
              <p className="text-sm text-slate-400 leading-relaxed">
                Creación y planificación de contenidos multiplataforma, redacción periodística optimizada (SEO), optimización de LinkedIn corporativo y campañas de posicionamiento.
              </p>
            </div>

            <div className="bg-slate-900 border border-slate-800 p-8 rounded-3xl hover:border-emerald-500/50 transition-all group">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 mb-6 group-hover:scale-110 transition-transform">
                <MonitorPlay size={24} />
              </div>
              <h4 className="text-xl font-bold text-white mb-3">Producción Audiovisual</h4>
              <p className="text-sm text-slate-400 leading-relaxed">
                Grabación, edición y postproducción de Reels, entrevistas, videos corporativos y cobertura de streaming profesional para eventos y seminarios.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PORTAFOLIO / CASOS DE ÉXITO */}
      <section id="proyectos" className="py-24 max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <h2 className="text-xs font-bold tracking-widest text-emerald-400 uppercase">Portafolio y Casos de Éxito</h2>
          <h3 className="text-3xl font-bold text-white">Resultados medibles en proyectos reales</h3>
          <p className="text-slate-400">Migración y consolidación de proyectos previos del portafolio digital original con enfoque profesional.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden flex flex-col justify-between">
            <div className="p-6 space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider">Holding Grupo 02</span>
                <span className="text-xs bg-emerald-500/10 text-emerald-400 px-2 py-0.5 rounded">B2B / Ingeniería</span>
              </div>
              <h4 className="text-xl font-bold text-white">Escalamiento de Cuentas LinkedIn</h4>
              <p className="text-sm text-slate-300 leading-relaxed">
                Crecimiento explosivo de 1.000 a más de 12.000 seguidores en dos cuentas del rubro ingeniería, logrando un aumento del 35% en impresiones y visualizaciones trimestrales.
              </p>
            </div>
            <div className="px-6 py-4 bg-slate-950/50 border-t border-slate-800 flex justify-between items-center text-xs text-slate-400">
              <span>Estrategia de Contenidos & Copywriting</span>
              <span className="text-emerald-400 font-semibold">+30% Engagement</span>
            </div>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden flex flex-col justify-between">
            <div className="p-6 space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider">4ID Science</span>
                <span className="text-xs bg-emerald-500/10 text-emerald-400 px-2 py-0.5 rounded">Streaming & Educación</span>
              </div>
              <h4 className="text-xl font-bold text-white">Dirección de Streaming Académico</h4>
              <p className="text-sm text-slate-300 leading-relaxed">
                Coordinación técnica y de comunicación audiovisual remota para charlas universitarias y ciclos de conferencias científicas.
              </p>
            </div>
            <div className="px-6 py-4 bg-slate-950/50 border-t border-slate-800 flex justify-between items-center text-xs text-slate-400">
              <span>Producción en Vivo</span>
              <span className="text-emerald-400 font-semibold">Remoto / 2021-2022</span>
            </div>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden flex flex-col justify-between">
            <div className="p-6 space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider">Banco Scotiabank</span>
                <span className="text-xs bg-emerald-500/10 text-emerald-400 px-2 py-0.5 rounded">SAC Digital</span>
              </div>
              <h4 className="text-xl font-bold text-white">Gestión de Atención y Soporte Multicanal</h4>
              <p className="text-sm text-slate-300 leading-relaxed">
                Administración de interacciones corporativas en plataformas sociales (Facebook, Instagram, Twitter), asegurando tiempos de respuesta eficientes y tono de marca.
              </p>
            </div>
            <div className="px-6 py-4 bg-slate-950/50 border-t border-slate-800 flex justify-between items-center text-xs text-slate-400">
              <span>Media Interactive</span>
              <span className="text-emerald-400 font-semibold">2019 - 2021</span>
            </div>
          </div>

        </div>
      </section>

      {/* CONTACTO / CTA */}
      <section id="contacto" className="py-24 bg-gradient-to-t from-slate-900 to-slate-950 border-t border-slate-900">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-slate-900 border border-slate-800 p-8 lg:p-12 rounded-3xl shadow-2xl grid lg:grid-cols-2 gap-12">
            
            <div className="space-y-6">
              <h2 className="text-xs font-bold tracking-widest text-emerald-400 uppercase">Contacto Directo</h2>
              <h3 className="text-3xl font-bold text-white">¿Hablamos sobre tu próximo proyecto?</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                Estoy disponible para oportunidades de consultoría, gestión de contenidos o community management en Santiago o de manera remota.
              </p>

              <div className="space-y-4 pt-2">
                <div className="flex items-center gap-3 text-sm text-slate-300">
                  <Mail className="text-emerald-400" size={18} />
                  <span>hectorsminostrosa@gmail.com</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-300">
                  <Phone className="text-emerald-400" size={18} />
                  <span>+56 9 4908 0786</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-300">
                  <MapPin className="text-emerald-400" size={18} />
                  <span>Santiago, Región Metropolitana, Chile</span>
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase mb-2">Nombre</label>
                <input required type="text" className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-emerald-500 transition-colors" placeholder="Tu nombre" />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase mb-2">Correo Electrónico</label>
                <input required type="email" className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-emerald-500 transition-colors" placeholder="correo@empresa.com" />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-300 uppercase mb-2">Mensaje</label>
                <textarea required rows={4} className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-emerald-500 transition-colors resize-none" placeholder="¿Cómo te puedo ayudar?"></textarea>
              </div>
              <button type="submit" className="w-full py-3.5 bg-emerald-500 text-slate-950 font-bold rounded-xl hover:bg-emerald-400 transition-all shadow-lg shadow-emerald-500/20">
                Enviar Mensaje
              </button>
              {formStatus && <p className="text-xs text-emerald-400 text-center font-medium pt-2">{formStatus}</p>}
            </form>

          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-8 bg-slate-950 border-t border-slate-900 text-center text-xs text-slate-500">
        <p>© {new Date().getFullYear()} Héctor San Martín Inostrosa. Periodista & Community Manager. Todos los derechos reservados.</p>
      </footer>

    </div>
  );
}
