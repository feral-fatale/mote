import Link from 'next/link';
import { ContactForm } from './contact-form';
import StarField from '@/components/Starfield';
import Scanlines from '@/components/Scanlines';
import NavBar from '@/components/NavBar';
import Hero from '@/components/Hero';
import Heading from '@/components/Heading';
import Work from '@/components/Work';
import Services from '@/components/Services';
import Footer from '@/components/Footer';

export default function HomePage() {
  return (
    <>
    <StarField />
      <Scanlines />
      <NavBar />

      <section
        id="hero"
        style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          padding: "120px 24px 80px",
          textAlign: "center",
          overflow: "hidden",
          }}
        > 
        <Hero />
      </section>

      {/* ── SERVICES ────────────────────────────────────────────  */}
      <section
        id="services"
        style={{
          padding: "50px 48px",
          maxWidth: 1200,
          margin: "0 auto",
          position: "relative",
          zIndex: 1,
        }}
      >
        <Heading subheading="// What We Do" title="Our Services" />
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: 24,
          }}
        >
        <Services />
        </div>
      </section>

      {/* ── WORK ──────────────────────────────────────────────── */}
      <section
        id="work"
        style={{
          padding: "100px 48px",
          position: "relative",
          zIndex: 1,
          background:
            "linear-gradient(180deg, transparent, #0d0008 20%, #0d0008 80%, transparent)",
        }}
      >
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <Heading subheading="// RECENT MISSIONS">Selected Work</Heading>
          <Work />
        </div>
      </section>


      {/* ── CONTACT ───────────────────────────────────────────── */}
      <section
        id="contact"
        style={{ padding: "100px 48px 120px", position: "relative"}}
      >
        <div style={{ maxWidth: 700, margin: "0 auto" }}>
          <Heading subheading="// OPEN CHANNEL" title="Start a Mission" />
          <ContactForm />
        </div>
      </section>
      
      <Footer />

    </>
  );
}
