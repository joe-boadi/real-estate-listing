import NavBar from '@/app/components/NavBar/page';
import HeroComponent from './components/HeroPage/page';
import Footer from '@/app/components/Footer/page'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between font-sans">
        <NavBar />
        <HeroComponent />
        <Footer />
    </main>
  );
}
