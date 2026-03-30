"use client";
import { useState, useEffect } from "react";

const services = [
  {
    icon: "/icons/saucer.png",
    title: "Web Experiences",
    description: "Pixel-perfect interfaces engineered for impact. We translate your vision into high-performance web applications that users remember.",
  },
  {
    icon: "/icons/nebula.png",
    title: "AI Integration",
    description: "Embed intelligent systems into your product. We build LLM-powered features, automation pipelines, and smart data layers.",
  },
  {
    icon: "/icons/satelitedish.png",
    title: "API Architecture",
    description: "Scalable backend systems built for the cosmos. REST, GraphQL, and event-driven architectures designed to handle orbit-level load.",
  },
  {
    icon: "/icons/animation_frames/catL1.png",
    title: "Interactive Design",
    description: "Motion, interaction, and delight baked in from day one. From micro-animations to full 3D experiences — we push the browser.",
  },
  {
    icon: "/icons/telescope.png",
    title: "Growth Analytics",
    description: "Data pipelines and dashboards that surface signal from noise. Know your users, your funnel, and your galaxy-scale metrics.",
  },
  {
    icon: "/icons/planet.png",
    title: "Iconic Branding",
    description: "Visual identities, design tokens, and component libraries. Consistent, scalable, and unmistakably yours across every surface.",
  },
];

const ServiceCard = ({ icon, title, description }) => {
  const [hovered, setHovered] = useState(false);
  const [currentFrame, setCurrentFrame] = useState(1);
  const corners = ["topleft", "topright", "botleft", "botright"];

  useEffect(() => {
    if (!hovered || !icon.includes('animation_frames')) return;

    const interval = setInterval(() => {
      setCurrentFrame(prev => (prev % 4) + 1);
    }, 150);

    return () => clearInterval(interval);
  }, [hovered, icon]);

  useEffect(() => {
    if (!hovered) {
      setCurrentFrame(1);
    }
  }, [hovered]);

  const displayIcon = icon.includes('animation_frames')
    ? icon.replace('catL1.png', `catL${currentFrame}.png?frame=${currentFrame}`)
    : icon;

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        border: `2px solid ${hovered ? "#ff69b4" : "#6b1a3a"}`,
        background: hovered
          ? "linear-gradient(135deg, #2a0018 0%, #1a0010 100%)"
          : "linear-gradient(135deg, #1a0010 0%, #0d0008 100%)",
        padding: "32px 28px",
        position: "relative",
        transition: "border-color 0.2s, background 0.3s, transform 0.2s",
        transform: hovered ? "translateY(-4px)" : "none",
        cursor: "default",
        boxShadow: hovered ? "0 8px 32px #ff69b440" : "none",
      }}
    >
        {corners.map((c) => (
        <div
          key={c}
          style={{
            position: "absolute",
            width: 6,
            height: 6,
            background: "#ff69b4",
            top: c.startsWith("top") ? -1 : "auto",
            bottom: c.startsWith("bot") ? -1 : "auto",
            left: c.endsWith("left") ? -1 : "auto",
            right: c.endsWith("right") ? -1 : "auto",
          }}
        />
      ))}
      <div style={{ 
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '20px auto' }}>
        <img
          key={currentFrame}
          src={displayIcon}
          style={{       
            width: '48px', height: '48px' }}
        />
      </div>
      <h3 style={{ 
        fontFamily: "'Orbitron', sans-serif",
          fontSize: 18,
          fontWeight: 700,
          color: "#ffb3cc",
          margin: "0 0 12px",
          textTransform: "uppercase",
          letterSpacing: 2,
        }}>
        {title}
      </h3>
      <p style={{ 
        fontFamily: "'Space Mono', monospace",
          fontSize: 14,
          color: "#a06080",
          lineHeight: 1.8,
          margin: 0,
        }}>
        {description}
      </p>
    </div>
  );
};

const Services = () => {
  return (
    <div style={{ padding: '40px' }}>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '24px',
          maxWidth: '1200px',
          margin: '0 auto',
        }}
      >
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            icon={service.icon}
            title={service.title}
            description={service.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Services;