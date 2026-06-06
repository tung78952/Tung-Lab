// portfolio.jsx — personal About Me page. Exports to window.
const { useState: useStateP } = React;

function PortfolioPage({ locale, t, onNav, theme }) {
  const copy = PORTFOLIO[locale];
  const textKey = locale === "vi" ? "vi" : "en";
  return (
    <main>
      <PortfolioHero copy={copy} t={t} onNav={onNav} theme={theme} />
      <PortfolioAbout copy={copy} theme={theme} />
      <PortfolioProjects copy={copy} textKey={textKey} />
      <PortfolioSkills copy={copy} />
      <PortfolioAi copy={copy} />
      <PortfolioInterests copy={copy} textKey={textKey} />
      <PortfolioContact copy={copy} />
    </main>
  );
}

function PortfolioHero({ copy, t, onNav, theme }) {
  return (
    <section style={{ position: "relative", overflow: "hidden", background: "var(--bg)" }}>
      <CornerPixels />
      <div className="portfolio-hero" style={{ maxWidth: 1180, margin: "0 auto", padding: "72px 28px 86px", display: "grid", gridTemplateColumns: "1.04fr 0.96fr", gap: 54, alignItems: "center" }}>
        <div>
          <HeroKicker>{copy.hero.kicker}</HeroKicker>
          <h1 style={{ fontFamily: "'Pixelify Sans', sans-serif", fontSize: "clamp(48px, 7vw, 86px)", lineHeight: 0.98, color: "var(--ink)", margin: "0 0 18px" }}>{copy.hero.title}</h1>
          <p style={{ fontSize: 19, color: "var(--ink-soft)", lineHeight: 1.65, maxWidth: 620, margin: 0 }}>{copy.hero.subtitle}</p>
          <div style={{ display: "flex", gap: 14, flexWrap: "wrap", marginTop: 32 }}>
            <Btn variant="primary" size="lg" onClick={() => scrollToId("portfolio-projects")}>{copy.buttons.projects}</Btn>
            <Btn variant="ghost" size="lg" href="https://github.com/tung78952">GitHub</Btn>
            <Btn variant="soft" size="lg" onClick={() => scrollToId("portfolio-contact")}>{t.cta.contact}</Btn>
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div style={{ position: "relative", width: 380, height: 390 }}>
            <div style={{ position: "absolute", inset: 0, background: "radial-gradient(circle at 50% 42%, var(--accent-soft), transparent 65%)" }} />
            <div style={{ position: "absolute", top: 18, left: "50%", transform: "translateX(-50%)", filter: "drop-shadow(0 0 0 #fff) drop-shadow(5px 0 0 #fff) drop-shadow(-5px 0 0 #fff) drop-shadow(0 5px 0 #fff) drop-shadow(0 -5px 0 #fff) drop-shadow(9px 9px 0 var(--accent))" }}>
              <Sprite name={theme === "dark" ? "tungSleepPose" : "tungThumb"} scale={13} />
            </div>
            <div style={{ position: "absolute", left: 2, top: 84, transform: "rotate(-8deg)" }}><Sprite name="bot" scale={6} /></div>
            {theme === "dark" && (
              <div style={{ position: "absolute", right: 42, top: 56, display: "flex", alignItems: "flex-end", gap: 4, fontFamily: "'Pixelify Sans', sans-serif", color: "var(--accent-lt)", lineHeight: 1, transform: "rotate(7deg)" }}>
                <span style={{ fontSize: 18, opacity: 0.55 }}>z</span>
                <span style={{ fontSize: 28, opacity: 0.8 }}>Z</span>
                <span style={{ fontSize: 40 }}>Z</span>
              </div>
            )}
            <div style={{ position: "absolute", bottom: 22, left: "50%", transform: "translateX(-50%)", fontFamily: "ui-monospace, monospace", fontSize: 12, fontWeight: 700, color: "var(--accent-ink)", background: "var(--accent-soft)", border: "2px solid var(--ink)", boxShadow: "4px 4px 0 var(--shadow)", padding: "9px 13px", whiteSpace: "nowrap" }}>{copy.hero.status}</div>
          </div>
        </div>
      </div>
      <PixelEdge color="var(--accent)" align="content" />
    </section>
  );
}

function PortfolioAbout({ copy, theme }) {
  return (
    <section style={{ background: "var(--surface)", padding: "78px 28px" }}>
      <div className="portfolio-two" style={{ maxWidth: 1180, margin: "0 auto", display: "grid", gridTemplateColumns: "0.8fr 1.2fr", gap: 44, alignItems: "center" }}>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div style={{ position: "relative", width: "min(100%, 280px)", minHeight: 300, display: "flex", alignItems: "center", justifyContent: "center" }}>
            {theme === "dark" && <CoffeeSteam />}
            {theme !== "dark" && (
              <div style={{ position: "absolute", right: 14, top: 34, fontFamily: "'Pixelify Sans', sans-serif", fontSize: 44, color: "var(--accent)", transform: "rotate(7deg)", filter: "drop-shadow(2px 2px 0 var(--surface))" }}>?</div>
            )}
            <div style={{
              display: "flex",
              filter: theme === "dark"
                ? "drop-shadow(0 0 0 var(--band-ink)) drop-shadow(4px 0 0 var(--band-ink)) drop-shadow(-4px 0 0 var(--band-ink)) drop-shadow(0 4px 0 var(--band-ink)) drop-shadow(0 -4px 0 var(--band-ink)) drop-shadow(8px 8px 0 #000)"
                : "drop-shadow(0 0 0 #fff) drop-shadow(4px 0 0 #fff) drop-shadow(-4px 0 0 #fff) drop-shadow(0 4px 0 #fff) drop-shadow(0 -4px 0 #fff) drop-shadow(7px 7px 0 var(--accent))"
            }}>
              <Sprite name={theme === "dark" ? "tungCoffee" : "tungConfused"} scale={13} />
            </div>
          </div>
        </div>
        <div>
          <SectionHead kicker="ABOUT ME" title={copy.about.title} />
          <p style={{ fontSize: 18, color: "var(--ink-soft)", lineHeight: 1.75, margin: "20px 0 0", maxWidth: 720 }}>{copy.about.body}</p>
        </div>
      </div>
    </section>
  );
}

function CoffeeSteam() {
  const wisps = [
    { left: 0, top: 20, path: [[1, 3], [1, 2], [2, 2], [2, 1], [1, 1], [1, 0]] },
    { left: 18, top: 8, path: [[1, 4], [2, 3], [2, 2], [1, 2], [1, 1], [2, 0]] },
    { left: 36, top: 24, path: [[1, 3], [2, 3], [2, 2], [1, 1], [1, 0], [0, 0]] }
  ];
  return (
    <div aria-hidden="true" style={{ position: "absolute", left: 120, top: 120, width: 72, height: 84, zIndex: 3, pointerEvents: "none" }}>
      {wisps.map((wisp, i) => (
        <div key={i} className="coffee-steam-wisp" style={{ position: "absolute", left: wisp.left, top: wisp.top, width: 30, height: 50 }}>
          {wisp.path.map(([x, y], j) => (
            <span key={j} style={{ position: "absolute", left: x * 7, top: y * 7, width: 7, height: 7, background: i === 1 ? "var(--accent-lt)" : "var(--band-muted)", opacity: i === 1 ? 0.9 : 0.72 }} />
          ))}
        </div>
      ))}
    </div>
  );
}

function PortfolioProjects({ copy, textKey }) {
  const noteStyles = [
    { paper: "color-mix(in srgb, var(--surface) 88%, #f3c7b5)", tape: "#e6b289", rotate: "-0.7deg" },
    { paper: "color-mix(in srgb, var(--surface) 88%, #d8e4ec)", tape: "#8fb1c8", rotate: "0.8deg" },
    { paper: "color-mix(in srgb, var(--surface) 88%, #f1d28b)", tape: "#cc6b4e", rotate: "-0.35deg" }
  ];
  return (
    <section id="portfolio-projects" style={{ background: "var(--bg)", padding: "78px 28px 92px", position: "relative", overflow: "hidden" }}>
      <div style={{ maxWidth: 1180, margin: "0 auto" }}>
        <SectionHead kicker="PROJECTS" title={copy.projectsTitle} sub={copy.projectsSub} />
        <div className="portfolio-card-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 28, marginTop: 44, alignItems: "stretch" }}>
          {PORTFOLIO.projects.map((project, i) => {
            const note = noteStyles[i % noteStyles.length];
            return (
            <article key={project.name} className="portfolio-card project-note" style={{ "--note-rotate": note.rotate, "--note-hover-rotate": i % 2 ? "1.6deg" : "-1.4deg", position: "relative", background: note.paper, color: "var(--ink)", border: "2px solid var(--ink)", boxShadow: "7px 7px 0 var(--shadow)", padding: "28px 22px 22px", display: "flex", flexDirection: "column", gap: 15, minHeight: 360 }}>
              <div aria-hidden="true" style={{ position: "absolute", top: -14, left: "50%", width: 76, height: 24, transform: "translateX(-50%) rotate(-2deg)", background: note.tape, opacity: 0.82, border: "2px solid color-mix(in srgb, var(--ink) 58%, transparent)", boxShadow: "3px 3px 0 rgba(0,0,0,.18)" }} />
              <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 14 }}>
                <span style={{ display: "inline-flex", alignItems: "center", padding: "5px 9px", border: "2px solid var(--ink)", background: "var(--accent)", color: "#fff", boxShadow: "2px 2px 0 var(--shadow)", fontFamily: "ui-monospace, monospace", fontSize: 10, fontWeight: 800, letterSpacing: "0.12em" }}>{project.type}</span>
                <div style={{ display: "flex", transform: "rotate(3deg)" }}><Sprite name={project.icon} scale={4} /></div>
              </div>
              <h3 style={{ fontFamily: "'Pixelify Sans', sans-serif", color: "var(--ink)", fontSize: 29, lineHeight: 1.02, margin: 0 }}>{project.name}</h3>
              <p style={{ fontSize: 14.5, color: "var(--ink-soft)", lineHeight: 1.62, margin: 0 }}>{project[textKey]}</p>
              <div style={{ borderLeft: "4px solid var(--accent)", padding: "8px 0 8px 12px", background: "color-mix(in srgb, var(--surface) 72%, transparent)" }}>
                <div style={{ fontFamily: "ui-monospace, monospace", fontSize: 10, letterSpacing: "0.13em", fontWeight: 800, color: "var(--accent-ink)", marginBottom: 5 }}>WHAT I LEARNED</div>
                <p style={{ fontSize: 13.5, color: "var(--ink-soft)", lineHeight: 1.45, margin: 0 }}>{project.learned[textKey]}</p>
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 7, marginTop: "auto" }}>
                {project.tags.map((tag, tagIndex) => <TechSticker key={tag} tone={tagIndex % 3}>{tag}</TechSticker>)}
              </div>
              <a className="project-github-link" href={project.repo} target="_blank" rel="noreferrer" style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", alignSelf: "flex-start", gap: 8, marginTop: 2, padding: "10px 14px", border: "2px solid var(--ink)", background: "var(--ink)", color: "var(--surface)", boxShadow: "3px 3px 0 var(--shadow)", textDecoration: "none", fontSize: 13, fontWeight: 800 }}>
                GitHub <span aria-hidden="true">↗</span>
              </a>
            </article>
          );})}
        </div>
      </div>
    </section>
  );
}

function PortfolioSkills({ copy }) {
  return (
    <section style={{ background: "var(--surface)", padding: "78px 28px" }}>
      <div style={{ maxWidth: 1180, margin: "0 auto" }}>
        <SectionHead kicker="STACK" title={copy.skillsTitle} />
        <div className="skills-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 18, marginTop: 34 }}>
          {PORTFOLIO.skills.map((group) => (
            <article key={group.group} style={{ border: "2px solid var(--border)", background: "var(--bg)", padding: 18 }}>
              <h3 style={{ fontFamily: "'Pixelify Sans', sans-serif", color: "var(--ink)", fontSize: 22, margin: "0 0 12px" }}>{group.group}</h3>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {group.items.map((item) => <TechTag key={item}>{item}</TechTag>)}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function PortfolioAi({ copy }) {
  return (
    <section style={{ background: "var(--band)", color: "var(--band-ink)", position: "relative" }}>
      <PixelEdge color="var(--accent)" style={{ height: 40 }} />
      <div className="portfolio-two" style={{ maxWidth: 1180, margin: "0 auto", padding: "30px 28px 84px", display: "grid", gridTemplateColumns: "0.8fr 1.2fr", gap: 44, alignItems: "center" }}>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div style={{ border: "2px solid var(--band-ink)", boxShadow: "6px 6px 0 #000", background: "var(--band-border)", padding: 30 }}>
            <Sprite name="bot" scale={11} />
          </div>
        </div>
        <div>
          <SectionHead kicker="WORKFLOW" title={copy.aiTitle} light />
          <p style={{ fontSize: 18, color: "var(--band-muted)", lineHeight: 1.75, margin: "20px 0 0", maxWidth: 720 }}>{copy.aiBody}</p>
        </div>
      </div>
    </section>
  );
}

function PortfolioInterests({ copy, textKey }) {
  return (
    <section style={{ background: "var(--bg)", padding: "78px 28px 88px" }}>
      <div style={{ maxWidth: 1180, margin: "0 auto" }}>
        <SectionHead kicker="INTERESTS" title={copy.interestsTitle} sub={copy.interestsSub} />
        <div className="interest-grid" style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 16, marginTop: 36 }}>
          {PORTFOLIO.interests.map((item) => <InteractiveInterestCard key={item.id} item={item} textKey={textKey} />)}
        </div>
      </div>
    </section>
  );
}

function InteractiveInterestCard({ item, textKey }) {
  const [effect, setEffect] = useStateP(null);
  const [musicOn, setMusicOn] = useStateP(false);
  const [footballBack, setFootballBack] = useStateP(false);
  const spriteMap = {
    gaming: "interestGaming",
    music: "interestMusic",
    photography: "interestCamera",
    football: footballBack ? "interestFootballBack" : "interestFootball",
    models: "interestModel"
  };
  const click = () => {
    if (item.id === "music") {
      setMusicOn((on) => !on);
      return;
    }
    if (item.id === "football") setFootballBack((back) => !back);
    setEffect({ kind: item.id, key: Date.now() });
    window.setTimeout(() => setEffect(null), item.id === "photography" ? 1300 : 1200);
  };
  return (
    <button type="button" onClick={click} className={`interest-card ${musicOn ? "interest-music-on" : ""}`} style={{ position: "relative", background: "var(--surface)", border: "2px solid var(--ink)", boxShadow: "4px 4px 0 var(--shadow)", padding: 16, minHeight: 300, display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", cursor: "pointer", font: "inherit", color: "inherit", overflow: "hidden" }}>
      <div style={{ position: "relative", height: 178, width: "100%", display: "flex", alignItems: "flex-end", justifyContent: "center", marginBottom: 14 }}>
        <span style={{ position: "absolute", top: 7, left: 7, fontFamily: "ui-monospace, monospace", fontSize: 10, fontWeight: 800, letterSpacing: "0.11em", color: "var(--accent-ink)", background: "var(--accent-soft)", padding: "4px 7px" }}>{musicOn ? "ON" : "CLICK"}</span>
        <Sprite name={spriteMap[item.id] || item.sprite} scale={6} />
        {musicOn && <MusicNotes />}
        {effect && <InterestEffect kind={effect.kind} />}
      </div>
      <h3 style={{ fontFamily: "'Pixelify Sans', sans-serif", fontSize: 23, color: "var(--ink)", margin: "0 0 9px" }}>{item.title}</h3>
      <p style={{ fontSize: 13.5, color: "var(--ink-soft)", lineHeight: 1.55, margin: 0 }}>{item[textKey]}</p>
    </button>
  );
}

function MusicNotes() {
  return (
    <>
      {["♪", "♫", "♪", "♫"].map((note, i) => (
        <span key={i} className="interest-note" style={{ position: "absolute", left: `${34 + i * 18}%`, bottom: 94 + (i % 2) * 16, color: "var(--accent)", fontFamily: "'Pixelify Sans', sans-serif", fontSize: 20 + i * 2, animationDelay: `${i * 0.16}s`, pointerEvents: "none" }}>{note}</span>
      ))}
    </>
  );
}

function InterestEffect({ kind }) {
  if (kind === "photography") {
    return (
      <>
        <span className="interest-flash" style={{ position: "absolute", inset: 0, background: "#fff", zIndex: 4, pointerEvents: "none" }} />
        <span className="interest-polaroid" style={{ position: "absolute", left: "50%", top: "43%", width: 42, height: 52, marginLeft: -21, background: "#fff", border: "3px solid #241f1b", boxShadow: "3px 3px 0 rgba(0,0,0,.25)", zIndex: 5 }}>
          <span style={{ position: "absolute", inset: "5px 5px 15px", background: "linear-gradient(135deg, var(--accent), var(--accent2))" }} />
        </span>
      </>
    );
  }
  if (kind === "gaming") {
    return <span className="interest-glow" style={{ position: "absolute", left: "50%", bottom: 48, width: 112, height: 112, marginLeft: -56, borderRadius: 999, background: "var(--accent2)", mixBlendMode: "screen", filter: "blur(8px)", zIndex: 3, pointerEvents: "none" }} />;
  }
  if (kind === "models") {
    return (
      <>
        <span className="interest-glow" style={{ position: "absolute", left: "50%", bottom: 86, width: 44, height: 12, marginLeft: -22, background: "#7ad6ff", boxShadow: "0 0 14px 5px #7ad6ff", zIndex: 5, pointerEvents: "none" }} />
        {["✦", "✦", "✦"].map((star, i) => <span key={i} className="interest-shimmer" style={{ position: "absolute", left: `${42 + i * 10}%`, bottom: 102 + i * 10, color: "#7ad6ff", fontFamily: "'Pixelify Sans', sans-serif", fontSize: 15 + i * 2, animationDelay: `${i * 0.12}s`, zIndex: 6 }}>{star}</span>)}
      </>
    );
  }
  if (kind === "football") {
    return <span className="interest-goal" style={{ position: "absolute", left: "50%", top: 18, color: "var(--accent)", fontFamily: "'Pixelify Sans', sans-serif", fontSize: 24, textShadow: "2px 2px 0 var(--shadow)", whiteSpace: "nowrap", zIndex: 6 }}>SIUUU!</span>;
  }
  return null;
}

function PortfolioContact({ copy }) {
  return (
    <section id="portfolio-contact" style={{ background: "var(--surface)", padding: "76px 28px 90px" }}>
      <div style={{ maxWidth: 1180, margin: "0 auto" }}>
        <SectionHead kicker="CONTACT" title={copy.contactTitle} sub={copy.contactSub} />
        <div style={{ display: "flex", flexWrap: "wrap", gap: 14, marginTop: 30 }}>
          {PORTFOLIO.contact.map((link) => <Btn key={link.label} variant="ghost" href={link.href}>{link.label}</Btn>)}
        </div>
      </div>
    </section>
  );
}

function TechTag({ children }) {
  return (
    <span style={{ display: "inline-flex", alignItems: "center", padding: "5px 9px", border: "1px solid var(--border)", background: "var(--surface-2)", color: "var(--ink-soft)", fontSize: 12, fontWeight: 700 }}>{children}</span>
  );
}

function TechSticker({ children, tone = 0 }) {
  const bg = tone === 0
    ? "color-mix(in srgb, var(--accent-soft) 76%, var(--surface))"
    : tone === 1
      ? "color-mix(in srgb, var(--accent2) 18%, var(--surface))"
      : "var(--surface-2)";
  return (
    <span style={{ display: "inline-flex", alignItems: "center", padding: "5px 9px", border: "1px solid var(--border)", background: bg, color: "var(--ink)", fontSize: 12, fontWeight: 800, boxShadow: "2px 2px 0 color-mix(in srgb, var(--shadow) 22%, transparent)" }}>{children}</span>
  );
}

Object.assign(window, { PortfolioPage, PortfolioHero, PortfolioAbout, PortfolioProjects, PortfolioSkills, PortfolioAi, PortfolioInterests, PortfolioContact, TechTag, TechSticker });
