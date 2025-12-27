import { Header } from './Header';
import { Footer } from './Footer';
import { Toaster } from '../ui/sonner';

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="flex flex-col min-h-screen font-body bg-background text-foreground">
      <Header />
      <main className="flex-grow pt-20">
        {children}
      </main>
      <Footer />
      <Toaster />
    </div>
  );
}
