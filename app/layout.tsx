import type React from "react"
import "@/app/globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import Script from "next/script"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "照喜名和也 - プロフィール",
  description: "照喜名和也のプロフィールページ",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>

        {/* Vercel Toolbarを非表示にするためのインラインスクリプト */}
        <Script id="hide-vercel-toolbar" strategy="afterInteractive">
          {`
            (function() {
              // CSSルールを追加
              const style = document.createElement('style');
              style.textContent = \`
                #__next-build-watcher,
                .vercel-toolbar,
                #vercel-toolbar,
                .vercel-badge,
                #vercel-badge,
                #vercel-speed-insights,
                [data-vercel-toolbar],
                [data-vercel-badge],
                [data-vercel-analytics],
                [data-vercel-speed-insights],
                [id*="vercel"],
                [class*="vercel"],
                iframe[src*="vercel"],
                iframe[src*="next"] {
                  display: none !important;
                  visibility: hidden !important;
                  opacity: 0 !important;
                  pointer-events: none !important;
                  position: absolute !important;
                  width: 0 !important;
                  height: 0 !important;
                  overflow: hidden !important;
                  z-index: -9999 !important;
                }
              \`;
              document.head.appendChild(style);
              
              // Vercel関連のグローバル変数を無効化
              if (window) {
                window.__VERCEL_TOOLBAR_CONFIG = { enabled: false };
                window.__NEXT_DATA__ = window.__NEXT_DATA__ || {};
                window.__NEXT_DATA__.nextExport = true;
              }
            })();
          `}
        </Script>
      </body>
    </html>
  )
}
