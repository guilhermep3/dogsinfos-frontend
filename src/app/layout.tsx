import type { Metadata } from "next";
import "./globals.css";
import { Footer } from "@/components/layout/footer";
import { QueryProvider } from "@/providers/queryClient";

export const metadata: Metadata = {
  title: "DogsInfos",
  description: "Informações sobre cachorros",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`antialiased`}>
        <QueryProvider>
          {children}
          <Footer />
        </QueryProvider>
      </body>
    </html>
  );
}
