import './globals.css';

export const metadata = {
  title: 'Héctor San Martín | Periodista & Community Manager',
  description: 'Portafolio profesional de Héctor San Martín Inostrosa. Especialista en marketing digital, community management y estrategia de contenidos.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className="dark">
      <body className="bg-slate-950 text-slate-100 antialiased">{children}</body>
    </html>
  );
}
