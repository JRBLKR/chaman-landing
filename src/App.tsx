import { useState, useEffect } from "react";

const fontLink = document.createElement("link");
fontLink.href = "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap";
fontLink.rel = "stylesheet";
document.head.appendChild(fontLink);

const styleEl = document.createElement("style");
styleEl.textContent = `
  html { scroll-behavior: smooth; }
  @media (max-width: 768px) {
    .desktop-nav { display: none !important; }
  }
`;
document.head.appendChild(styleEl);

const C = {
  creme: "#FAF8F3",
  white: "#FFFFFF",
  green: "#1FA960",
  forest: "#1A3D2B",
  badge: "#F4FEB8",
  text: "#3D3D35",
};

const DEMO_MAILTO = "mailto:hello@chaman-ai.fr?subject=Demande%20de%20d%C3%A9mo%20Chaman";

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav style={{
      background: "#fff",
      borderBottom: scrolled ? "1px solid #e8e4db" : "1px solid transparent",
      boxShadow: scrolled ? "0 1px 12px rgba(0,0,0,0.06)" : "none",
      transition: "all 0.3s ease",
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 50,
      padding: "0 24px",
    }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", height: 64 }}>
        <a href="#" style={{ display: "inline-block" }}><img src="/logo-vert.png" alt="Chaman" style={{ height: 32, width: "auto" }} /></a>

        <div style={{ display: "flex", alignItems: "center", gap: 36 }} className="desktop-nav">
          {[
            { label: "Mission", href: "#mission" },
            { label: "Solution", href: "#solution" },
            { label: "Exemple", href: "#exemple" },
            { label: "Tarifs", href: "#tarifs" },
          ].map((l) => (
            <a key={l.href} href={l.href} style={{ color: C.text, fontSize: "0.9rem", fontFamily: "Inter, sans-serif", textDecoration: "none", fontWeight: 500 }}
              onMouseEnter={e => (e.currentTarget.style.color = C.green)}
              onMouseLeave={e => (e.currentTarget.style.color = C.text)}>
              {l.label}
            </a>
          ))}
        </div>

        <a href={DEMO_MAILTO} style={{
          background: C.green, color: "#fff", fontSize: "0.875rem",
          fontWeight: 700, fontFamily: "Inter, sans-serif",
          padding: "10px 22px", borderRadius: 8, textDecoration: "none",
        }} className="desktop-nav">
          Demander une démo
        </a>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section style={{
      background: C.forest,
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      position: "relative",
      overflow: "hidden",
      backgroundImage: `
        radial-gradient(ellipse at 15% 60%, rgba(31,169,96,0.25) 0%, transparent 55%),
        radial-gradient(ellipse at 85% 25%, rgba(244,254,184,0.08) 0%, transparent 45%),
        radial-gradient(ellipse at 70% 85%, rgba(31,169,96,0.12) 0%, transparent 40%)
      `,
    }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "120px 24px 80px", width: "100%", position: "relative" }}>
        <h1 style={{
          fontFamily: "Inter, sans-serif",
          fontWeight: 800,
          fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
          lineHeight: 1.1,
          letterSpacing: "-0.04em",
          margin: "0 0 28px 0",
        }}>
          <span style={{ display: "block", color: C.creme }}>Détectez vos savings Achats.</span>
          <span style={{ display: "block", color: C.creme }}>Générez un plan d'actions.</span>
          <span style={{ display: "block", color: C.badge }}>En quelques minutes.</span>
        </h1>

        <p style={{
          color: "#fff",
          fontSize: "1.05rem",
          lineHeight: 1.8,
          fontFamily: "Inter, sans-serif",
          margin: "0 0 32px 0",
          maxWidth: 680,
        }}>
          Chaman analyse vos données de commandes et génère automatiquement un plan d'actions priorisé par impact. Ce que fait un cabinet de conseil en six semaines, Chaman le fait en quelques minutes.
        </p>

        <div style={{ display: "flex", alignItems: "flex-start", gap: 24, flexWrap: "wrap" }}>
          <a href="#exemple" style={{
            display: "inline-block",
            background: C.badge,
            color: C.forest,
            fontWeight: 700,
            fontSize: "0.95rem",
            fontFamily: "Inter, sans-serif",
            padding: "13px 28px",
            borderRadius: 8,
            textDecoration: "none",
            flexShrink: 0,
          }}>
            Voir un exemple
          </a>

          <div style={{ background: C.green, borderRadius: 14, padding: "12px 22px" }}>
            <div style={{ color: "#fff", fontFamily: "Inter, sans-serif", fontWeight: 800, fontSize: "1.8rem", lineHeight: 1, letterSpacing: "-0.03em" }}>595 k€</div>
            <div style={{ color: "#fff", fontSize: "0.8rem", fontFamily: "Inter, sans-serif", marginTop: 4 }}>identifiés sur 80M€ d'achats</div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Mission() {
  return (
    <section id="mission" style={{ background: C.creme, padding: "100px 24px" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ maxWidth: 680, marginBottom: 56 }}>
          <p style={{ color: C.forest, fontWeight: 700, fontSize: "0.8rem", letterSpacing: "0.1em", fontFamily: "Inter, sans-serif", marginBottom: 16, textTransform: "uppercase" }}>Notre mission</p>
          <h2 style={{ fontFamily: "Inter, sans-serif", fontWeight: 800, color: C.green, lineHeight: 1.15, letterSpacing: "-0.03em", fontSize: "clamp(2rem, 3.5vw, 2.8rem)", margin: 0 }}>
            Vos données Achats sont là, mais pas les savings.
          </h2>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 20, marginBottom: 24 }}>
          {[
            { title: "Les dashboards montrent le passé", text: "Les tableaux de bord de vos outils P2P montrent ce qui s'est passé. Pas ce qu'il faut faire." },
            { title: "Les opportunités restent invisibles", text: "Les savings existent dans chaque périmètre, mais ils restent invisibles faute d'analyse systématique." },
            { title: "Pas le temps de transformer", text: "Les équipes Achats n'ont ni le temps ni les moyens de transformer la donnée brute en plan d'actions." },
          ].map((item) => (
            <div key={item.title} style={{ background: C.badge, borderRadius: 16, padding: "36px 32px" }}>
              <h3 style={{ color: C.forest, fontWeight: 700, fontSize: "1rem", fontFamily: "Inter, sans-serif", marginBottom: 12, marginTop: 0 }}>{item.title}</h3>
              <p style={{ color: C.forest, lineHeight: 1.7, fontSize: "0.9rem", fontFamily: "Inter, sans-serif", margin: 0, opacity: 0.75 }}>{item.text}</p>
            </div>
          ))}
        </div>

        <div style={{ background: C.green, borderRadius: 16, padding: "28px 36px", textAlign: "center" }}>
          <p style={{ color: "#fff", fontSize: "1.15rem", fontFamily: "Inter, sans-serif", margin: 0, fontWeight: 500 }}>
            Chaman aide les entreprises à passer de la donnée à l'action.
          </p>
        </div>
      </div>
    </section>
  );
}

function Solution() {
  return (
    <section id="solution" style={{ background: C.white, padding: "100px 24px" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ maxWidth: 680, marginBottom: 64 }}>
          <p style={{ color: C.forest, fontWeight: 700, fontSize: "0.8rem", letterSpacing: "0.1em", fontFamily: "Inter, sans-serif", marginBottom: 16, textTransform: "uppercase" }}>Comment ça marche</p>
          <h2 style={{ fontFamily: "Inter, sans-serif", fontWeight: 800, color: C.green, lineHeight: 1.15, letterSpacing: "-0.03em", fontSize: "clamp(2rem, 3.5vw, 2.8rem)", margin: 0 }}>
            Un plan d'actions prêt à l'emploi en 3 étapes.
          </h2>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 40, marginBottom: 40 }}>
          {[
            { step: "1", label: "Détection automatique", text: "Chaman identifie les opportunités cachées dans vos POs : fragmentation fournisseurs, maverick spend, variation de prix, dépendances critiques." },
            { step: "2", label: "Priorisation par impact", text: "Chaque opportunité est scorée et classée selon son potentiel de gain estimé. Les quick wins remontent en premier." },
            { step: "3", label: "Plan d'actions concret", text: "Pour chaque opportunité : une mission définie, un effort estimé et les livrables associés." },
          ].map((item) => (
            <div key={item.step}>
              <div style={{ background: C.badge, color: C.forest, width: 44, height: 44, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 800, fontSize: "1rem", fontFamily: "Inter, sans-serif", marginBottom: 20 }}>
                {item.step}
              </div>
              <h3 style={{ color: C.forest, fontWeight: 700, fontSize: "1.05rem", fontFamily: "Inter, sans-serif", marginBottom: 12, marginTop: 0 }}>{item.label}</h3>
              <p style={{ color: C.text, lineHeight: 1.7, fontSize: "0.9rem", fontFamily: "Inter, sans-serif", margin: 0 }}>{item.text}</p>
            </div>
          ))}
        </div>

        <div style={{ background: C.green, borderRadius: 14, padding: "20px 28px", display: "flex", alignItems: "center", gap: 16 }}>
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
            <polyline points="17 8 12 3 7 8"/>
            <line x1="12" y1="3" x2="12" y2="15"/>
          </svg>
          <div>
            <p style={{ color: "#fff", fontWeight: 700, fontSize: "0.95rem", fontFamily: "Inter, sans-serif", margin: "0 0 2px 0" }}>Zéro intégration</p>
            <p style={{ color: "#fff", fontSize: "0.875rem", fontFamily: "Inter, sans-serif", margin: 0 }}>Un simple export Excel ou CSV suffit. Aucun projet IT, aucune connexion à votre SI.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Exemple() {
  return (
    <section id="exemple" style={{ background: C.creme, padding: "100px 24px" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ maxWidth: 680, marginBottom: 56 }}>
          <p style={{ color: C.forest, fontWeight: 700, fontSize: "0.8rem", letterSpacing: "0.1em", fontFamily: "Inter, sans-serif", marginBottom: 16, textTransform: "uppercase" }}>Exemple</p>
          <h2 style={{ fontFamily: "Inter, sans-serif", fontWeight: 800, color: C.green, lineHeight: 1.15, letterSpacing: "-0.03em", fontSize: "clamp(2rem, 3.5vw, 2.8rem)", margin: "0 0 16px 0" }}>
            80M€ d'Achats Indirects analysés.
          </h2>
          <p style={{ color: C.text, fontSize: "1rem", lineHeight: 1.7, fontFamily: "Inter, sans-serif", margin: 0 }}>
            4 opportunités détectées automatiquement, en moins de 5 minutes.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 16, marginBottom: 20 }}>
          {[
            { type: "Fragmentation Fournisseurs", famille: "Fournitures de bureau", detail: "6 fournisseurs actifs sur la même famille.", gain: "180 000 €", gainLabel: "Potentiel de consolidation" },
            { type: "Maverick Spend", famille: "Prestations IT", detail: "34% des commandes passées hors contrat.", gain: "320 000 €", gainLabel: "Économies par remise en conformité" },
            { type: "Variation de Prix", famille: "Transport express", detail: "Écart de prix de 28% sur des prestations identiques entre deux entités.", gain: "95 000 €", gainLabel: "Gain chiffré" },
            { type: "Dépendance Fournisseur", famille: "Maintenance industrielle", detail: "Un seul fournisseur représente 91% du spend sur cette famille.", gain: "Risque identifié", gainLabel: "Appel d'offres recommandé" },
          ].map((item, i) => (
            <div key={i} style={{ background: C.white, border: "1px solid #e8e4db", borderRadius: 16, padding: "24px 22px", display: "flex", flexDirection: "column" }}>
              <div style={{ background: C.badge, color: C.forest, fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.05em", padding: "4px 10px", borderRadius: 20, display: "inline-block", marginBottom: 14, alignSelf: "flex-start", fontFamily: "Inter, sans-serif" }}>
                {item.type}
              </div>
              <p style={{ color: C.forest, fontWeight: 700, fontSize: "0.92rem", fontFamily: "Inter, sans-serif", marginBottom: 8, marginTop: 0 }}>{item.famille}</p>
              <p style={{ color: C.text, fontSize: "0.85rem", lineHeight: 1.6, fontFamily: "Inter, sans-serif", flexGrow: 1, marginBottom: 16, marginTop: 0 }}>{item.detail}</p>
              <div style={{ borderTop: "1px solid #e8e4db", paddingTop: 14 }}>
                <div style={{ color: C.green, fontWeight: 800, fontSize: "1.3rem", fontFamily: "Inter, sans-serif", letterSpacing: "-0.02em" }}>{item.gain}</div>
                <div style={{ color: C.text, fontSize: "0.76rem", fontFamily: "Inter, sans-serif", marginTop: 2 }}>{item.gainLabel}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Encart total : fond vert Chaman, tout en blanc */}
        <div style={{ background: C.green, borderRadius: 16, padding: "28px 36px", display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: 20 }}>
          <p style={{ color: "#fff", fontWeight: 700, fontSize: "1.1rem", fontFamily: "Inter, sans-serif", margin: 0 }}>Total savings potentiels identifiés</p>
          <p style={{ color: "#fff", fontWeight: 800, fontSize: "2.4rem", fontFamily: "Inter, sans-serif", letterSpacing: "-0.03em", margin: 0 }}>595 000 €</p>
        </div>
      </div>
    </section>
  );
}

function Souverainete() {
  return (
    <section style={{ background: C.white, padding: "100px 24px" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 64, alignItems: "center" }}>
        <div>
          <p style={{ color: C.forest, fontWeight: 700, fontSize: "0.8rem", letterSpacing: "0.1em", fontFamily: "Inter, sans-serif", marginBottom: 16, textTransform: "uppercase" }}>Souveraineté des données</p>
          <h2 style={{ fontFamily: "Inter, sans-serif", fontWeight: 800, color: C.green, lineHeight: 1.15, letterSpacing: "-0.03em", fontSize: "clamp(2rem, 3vw, 2.5rem)", margin: "0 0 20px 0" }}>
            Vos données restent en Europe.
          </h2>
          <p style={{ color: C.text, lineHeight: 1.75, fontFamily: "Inter, sans-serif", fontSize: "0.95rem", margin: 0 }}>
            Chaman respecte les standards de souveraineté les plus stricts.
          </p>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          {[
            { title: "Hébergement 100% européen", text: "Toutes vos données sont stockées et traitées au sein de l'UE." },
            { title: "IA souveraine", text: "Chaman utilise Mistral AI, modèle français dont les serveurs sont localisés en Europe." },
            { title: "Données non partagées", text: "Vos données sont utilisées exclusivement pour générer vos recommandations. Jamais partagées ni revendues." },
            { title: "Accès restreint", text: "Vous seul avez accès à vos analyses." },
          ].map((item, i) => (
            <div key={i} style={{ background: C.badge, borderRadius: 12, padding: "18px 20px" }}>
              <p style={{ color: C.forest, fontWeight: 700, fontSize: "0.9rem", fontFamily: "Inter, sans-serif", margin: "0 0 4px 0" }}>{item.title}</p>
              <p style={{ color: C.forest, fontSize: "0.85rem", lineHeight: 1.6, fontFamily: "Inter, sans-serif", margin: 0, opacity: 0.75 }}>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Roadmap() {
  const steps = [
    { date: "Aujourd'hui", text: "Analyse des données de commandes, détection automatique des opportunités, plan d'actions priorisé.", active: true },
    { date: "Été 2026", text: "Assistant conversationnel pour creuser chaque opportunité et simuler des scénarios.", active: false },
    { date: "Fin 2026", text: "Import des factures pour enrichir l'analyse et débloquer de nouvelles règles de détection.", active: false },
    { date: "S1 2027", text: "Sourcing autonome : de la détection à l'appel d'offres.", active: false },
    { date: "S2 2027", text: "Benchmarks sectoriels anonymisés.", active: false },
  ];

  return (
    <section style={{ background: C.creme, padding: "100px 24px" }}>
      <div style={{ maxWidth: 700, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <p style={{ color: C.forest, fontWeight: 700, fontSize: "0.8rem", letterSpacing: "0.1em", fontFamily: "Inter, sans-serif", marginBottom: 16, textTransform: "uppercase" }}>Roadmap</p>
          <h2 style={{ fontFamily: "Inter, sans-serif", fontWeight: 800, color: C.green, lineHeight: 1.15, letterSpacing: "-0.03em", fontSize: "clamp(2rem, 3.5vw, 2.8rem)", margin: 0 }}>
            Une plateforme en évolution continue.
          </h2>
        </div>
        <div style={{ position: "relative" }}>
          <div style={{ position: "absolute", left: 112, top: 0, bottom: 0, width: 2, background: "#e0dbd0" }} />
          <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
            {steps.map((step, i) => (
              <div key={i} style={{ display: "flex", gap: 24, alignItems: "flex-start" }}>
                <div style={{ minWidth: 100, textAlign: "right", paddingTop: 2 }}>
                  <span style={{
                    background: step.active ? C.green : C.white,
                    color: step.active ? "#fff" : C.forest,
                    border: `1.5px solid ${step.active ? C.green : "#e0dbd0"}`,
                    fontSize: "0.78rem", fontWeight: 700, fontFamily: "Inter, sans-serif",
                    padding: "4px 10px", borderRadius: 20, display: "inline-block",
                  }}>{step.date}</span>
                </div>
                <div style={{ position: "relative", paddingLeft: 20, paddingTop: 4 }}>
                  <div style={{ position: "absolute", left: -5, top: 7, width: 10, height: 10, borderRadius: "50%", background: step.active ? C.green : "#e0dbd0", border: `2px solid ${C.creme}` }} />
                  <p style={{ color: step.active ? C.forest : C.text, fontWeight: step.active ? 600 : 400, fontSize: "0.9rem", lineHeight: 1.65, fontFamily: "Inter, sans-serif", margin: 0 }}>
                    {step.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Tarifs() {
  return (
    <section id="tarifs" style={{ background: C.white, padding: "100px 24px" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <p style={{ color: C.forest, fontWeight: 700, fontSize: "0.8rem", letterSpacing: "0.1em", fontFamily: "Inter, sans-serif", marginBottom: 16, textTransform: "uppercase" }}>Tarifs</p>
          <h2 style={{ fontFamily: "Inter, sans-serif", fontWeight: 800, color: C.green, lineHeight: 1.15, letterSpacing: "-0.03em", fontSize: "clamp(2rem, 3.5vw, 2.8rem)", margin: 0 }}>
            Démarrez en 2 semaines
          </h2>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 24 }}>
          {/* Pilote : fond vert forêt, écriture blanche */}
          <div style={{ background: C.forest, borderRadius: 20, padding: "40px 36px" }}>
            <p style={{ color: "#fff", fontWeight: 700, fontSize: "0.8rem", letterSpacing: "0.1em", textTransform: "uppercase", fontFamily: "Inter, sans-serif", margin: "0 0 20px 0" }}>Pilote</p>
            <div style={{ color: "#fff", fontWeight: 800, fontSize: "2.8rem", letterSpacing: "-0.03em", fontFamily: "Inter, sans-serif", lineHeight: 1 }}>5 000 €</div>
            <p style={{ color: "#fff", fontSize: "0.85rem", fontFamily: "Inter, sans-serif", margin: "8px 0 32px 0" }}>HT · Déductible de votre première année d'abonnement</p>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 14 }}>
              {["Questionnaire de qualification en amont", "Entretien de cadrage (30 min) — 1 macro-famille", "Import de votre export Excel ou CSV", "Rapport complet avec opportunités priorisées", "Plan d'actions prêt à l'emploi", "Réunion de restitution (1h)"].map((item, i) => (
                <li key={i} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                  <span style={{ color: "#fff", fontWeight: 700, lineHeight: 1.5 }}>✓</span>
                  <span style={{ color: "#fff", fontSize: "0.88rem", lineHeight: 1.55, fontFamily: "Inter, sans-serif" }}>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Abonnement : fond vert Chaman, écriture blanche */}
          <div style={{ background: C.green, borderRadius: 20, padding: "40px 36px", display: "flex", flexDirection: "column" }}>
            <p style={{ color: "#fff", fontWeight: 700, fontSize: "0.8rem", letterSpacing: "0.1em", textTransform: "uppercase", fontFamily: "Inter, sans-serif", margin: "0 0 20px 0" }}>Abonnement annuel</p>
            <div style={{ color: "#fff", fontWeight: 800, fontSize: "2.8rem", letterSpacing: "-0.03em", fontFamily: "Inter, sans-serif", lineHeight: 1 }}>10 000 €</div>
            <p style={{ color: "#fff", fontSize: "0.85rem", fontFamily: "Inter, sans-serif", margin: "8px 0 32px 0" }}>HT / an · Sans engagement au-delà</p>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 14, flexGrow: 1 }}>
              {["Analyses illimitées sur votre périmètre", "Toutes les règles de détection incluses", "Mises à jour et nouvelles fonctionnalités", "Support dédié"].map((item, i) => (
                <li key={i} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                  <span style={{ color: "#fff", fontWeight: 700, lineHeight: 1.5 }}>✓</span>
                  <span style={{ color: "#fff", fontSize: "0.88rem", lineHeight: 1.55, fontFamily: "Inter, sans-serif" }}>{item}</span>
                </li>
              ))}
            </ul>
            <a href={DEMO_MAILTO} style={{
              display: "block", marginTop: 36,
              background: "#fff", color: C.forest,
              fontWeight: 700, fontSize: "0.95rem", fontFamily: "Inter, sans-serif",
              padding: "14px 24px", borderRadius: 10, textAlign: "center", textDecoration: "none",
            }}>
              Demander une démo
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer style={{ background: C.forest, borderTop: "1px solid rgba(250,248,243,0.1)", padding: "32px 24px" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: 16 }}>
        <img src="/logo-blanc.png" alt="Chaman" style={{ height: 28, width: "auto" }} />
        <a href="mailto:hello@chaman-ai.fr" style={{ color: "#fff", fontSize: "0.82rem", fontFamily: "Inter, sans-serif", textDecoration: "none" }}>hello@chaman-ai.fr</a>
        <p style={{ color: "#fff", fontSize: "0.78rem", fontFamily: "Inter, sans-serif", margin: 0 }}>© Chaman</p>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div style={{ fontFamily: "Inter, system-ui, sans-serif" }}>
      <Nav />
      <Hero />
      <Mission />
      <Solution />
      <Exemple />
      <Souverainete />
      <Roadmap />
      <Tarifs />
      <Footer />
    </div>
  );
}
