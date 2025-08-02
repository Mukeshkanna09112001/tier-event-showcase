import { ClerkProvider } from "@clerk/nextjs";
import "../styles/globals.css";
import ToastProvider from "@/components/Toaster";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
     <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <ClerkProvider>
          <ToastProvider />
          {children}
        </ClerkProvider>
      </body>
    </html>
  );
}
