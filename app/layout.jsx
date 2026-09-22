import "./globals.css";
import { ThemeProvider } from "../components/ThemeProvider";

export const metadata = {
  title: "PORTFOLIO DE KEVIN",
  description: "Développeur web frontend, titulaire d'une licence obtenue en 2025.",
  openGraph: {
    title: "PORTFOLIO DE KEVIN",
    description: "Développeur web frontend, titulaire d'une licence obtenue en 2025.",
    url: "https://richard-portfolio.vercel.app",
    siteName: "PORTFOLIO DE KEVIN",
    images: [
      {
        url: "/images/about/profile.png",
        width: 1200,
        height: 630,
        alt: "PORTFOLIO DE KEVIN",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "PORTFOLIO DE KEVIN",
    description: "Développeur web frontend, titulaire d'une licence obtenue en 2025.",
    images: ["/images/about/profile.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/favicon.svg" />
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme');if(t==='dark'||(!t&&matchMedia('(prefers-color-scheme:dark)').matches))document.documentElement.classList.add('dark');}catch(e){}})();`,
          }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@300;400;500&family=Great+Vibes&display=swap" rel="stylesheet" />
      </head>
      <body>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
