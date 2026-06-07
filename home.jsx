// home.jsx — Home page (theme-tokenized). Hero A locked, Card B locked (variants kept). Exports to window.

function Hero({ variant, t, onNav, pixel, theme }) {
  if (variant === "B") return <HeroCentered t={t} onNav={onNav} pixel={pixel} />;
  if (variant === "C") return <HeroAsymmetric t={t} onNav={onNav} pixel={pixel} />;
  return <HeroSplit t={t} onNav={onNav} pixel={pixel} theme={theme} />;
}

function HeroKicker({ children }) {
  return (
    <div style={{ display: "inline-flex", alignItems: "center", gap: 8, marginBottom: 20 }}>
      <span style={{ width: 8, height: 8, background: "var(--accent)" }} />
      <span style={{ fontFamily: "ui-monospace, monospace", fontSize: 12, letterSpacing: "0.22em", color: "var(--accent)", fontWeight: 700 }}>{children}</span>
    </div>
  );
}
function HeroStats({ t }) {
  const items = [["1", t.hero.stat1], ["100%", t.hero.stat2], ["0", t.hero.stat3]];
  return (
    <div style={{ display: "flex", gap: 30, marginTop: 38, flexWrap: "wrap" }}>
      {items.map(([n, l], i) => (
        <div key={i}>
          <div style={{ fontFamily: "var(--display-font)", fontSize: 30, color: "var(--ink)", lineHeight: 1 }}>{n}</div>
          <div style={{ fontSize: 13, color: "var(--muted)", marginTop: 4 }}>{l}</div>
        </div>
      ))}
    </div>
  );
}

// ---- A: split (LOCKED default) ----
function HeroSplit({ t, onNav, pixel, theme }) {
  return (
    <section style={{ position: "relative", overflow: "hidden", background: "var(--bg)" }}>
      {pixel !== "off" && <CornerPixels />}
      <div style={{ maxWidth: 1180, margin: "0 auto", padding: "70px 28px 90px", display: "grid", gridTemplateColumns: "1.05fr 0.95fr", gap: 50, alignItems: "center" }} className="hero-grid">
        <div>
          <HeroKicker>{t.hero.kicker}</HeroKicker>
          <h1 style={{ fontFamily: "var(--display-font)", fontSize: "clamp(48px, 7vw, 88px)", lineHeight: 0.98, color: "var(--ink)", margin: "0 0 18px", letterSpacing: "-0.01em" }}>{t.hero.title}</h1>
          <p style={{ fontSize: 22, fontWeight: 600, color: "var(--ink)", margin: "0 0 14px", lineHeight: 1.35 }}>{t.hero.tagline}</p>
          <p style={{ fontSize: 17, color: "var(--ink-soft)", lineHeight: 1.6, margin: 0, maxWidth: 460 }}>{t.hero.desc}</p>
          <div style={{ display: "flex", gap: 14, marginTop: 32, flexWrap: "wrap" }}>
            <Btn variant="primary" size="lg" onClick={() => onNav("home", "apps")}>{t.hero.primary}</Btn>
            <Btn variant="ghost" size="lg" onClick={() => onNav("fphoto")}>{t.hero.secondary}</Btn>
          </div>
          <HeroStats t={t} />
        </div>
        <MascotScene theme={theme} onClick={() => onNav("about-me")} />
      </div>
      <PixelEdge color="var(--accent)" align="content" />
    </section>
  );
}

// ---- B: centered ----
function HeroCentered({ t, onNav }) {
  return (
    <section style={{ position: "relative", overflow: "hidden", background: "var(--bg)", textAlign: "center" }}>
      <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(var(--accent-soft) 1px, transparent 1px), linear-gradient(90deg, var(--accent-soft) 1px, transparent 1px)", backgroundSize: "32px 32px", maskImage: "radial-gradient(ellipse 70% 60% at 50% 40%, #000 30%, transparent 75%)", WebkitMaskImage: "radial-gradient(ellipse 70% 60% at 50% 40%, #000 30%, transparent 75%)" }} />
      <div style={{ position: "relative", maxWidth: 820, margin: "0 auto", padding: "78px 28px 92px" }}>
        <div style={{ display: "flex", justifyContent: "center", marginBottom: 26 }}><Sprite name="bot" scale={9} /></div>
        <div style={{ display: "flex", justifyContent: "center" }}><HeroKicker>{t.hero.kicker}</HeroKicker></div>
        <h1 style={{ fontFamily: "var(--display-font)", fontSize: "clamp(52px, 8vw, 96px)", lineHeight: 0.98, color: "var(--ink)", margin: "0 0 18px" }}>{t.hero.title}</h1>
        <p style={{ fontSize: 23, fontWeight: 600, color: "var(--ink)", margin: "0 auto 14px", maxWidth: 560, lineHeight: 1.35 }}>{t.hero.tagline}</p>
        <p style={{ fontSize: 17, color: "var(--ink-soft)", lineHeight: 1.6, margin: "0 auto", maxWidth: 520 }}>{t.hero.desc}</p>
        <div style={{ display: "flex", gap: 14, marginTop: 32, flexWrap: "wrap", justifyContent: "center" }}>
          <Btn variant="primary" size="lg" onClick={() => onNav("home", "apps")}>{t.hero.primary}</Btn>
          <Btn variant="ghost" size="lg" onClick={() => onNav("fphoto")}>{t.hero.secondary}</Btn>
        </div>
      </div>
      <PixelEdge color="var(--accent)" />
    </section>
  );
}

// ---- C: gradient asymmetric ----
function HeroAsymmetric({ t, onNav }) {
  return (
    <section style={{ position: "relative", overflow: "hidden", background: "linear-gradient(160deg, var(--accent) 0%, var(--band) 100%)" }}>
      <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(#ffffff14 1px, transparent 1px), linear-gradient(90deg, #ffffff14 1px, transparent 1px)", backgroundSize: "28px 28px", opacity: 0.5 }} />
      <div style={{ position: "relative", maxWidth: 1180, margin: "0 auto", padding: "76px 28px 92px", display: "grid", gridTemplateColumns: "1fr 0.9fr", gap: 48, alignItems: "center" }} className="hero-grid">
        <div>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, marginBottom: 20 }}>
            <span style={{ width: 8, height: 8, background: "#fff" }} />
            <span style={{ fontFamily: "ui-monospace, monospace", fontSize: 12, letterSpacing: "0.22em", color: "#fff", fontWeight: 700, opacity: 0.9 }}>{t.hero.kicker}</span>
          </div>
          <h1 style={{ fontFamily: "var(--display-font)", fontSize: "clamp(50px, 7.5vw, 94px)", lineHeight: 0.98, color: "#fff", margin: "0 0 18px" }}>{t.hero.title}</h1>
          <p style={{ fontSize: 22, fontWeight: 600, color: "#fff", margin: "0 0 14px", lineHeight: 1.35 }}>{t.hero.tagline}</p>
          <p style={{ fontSize: 17, color: "rgba(255,255,255,0.86)", lineHeight: 1.6, margin: 0, maxWidth: 440 }}>{t.hero.desc}</p>
          <div style={{ display: "flex", gap: 14, marginTop: 32, flexWrap: "wrap" }}>
            <Btn variant="ghost" size="lg" onClick={() => onNav("home", "apps")}>{t.hero.primary}</Btn>
            <a onClick={() => onNav("fphoto")} style={{ display: "inline-flex", alignItems: "center", gap: 8, color: "#fff", fontWeight: 700, fontSize: 16, cursor: "pointer", padding: "13px 4px", borderBottom: "2px solid rgba(255,255,255,0.4)" }}>{t.hero.secondary} →</a>
          </div>
        </div>
        <div style={{ position: "relative", height: 320 }}>
          <FloatCartridge sprite="wave" style={{ top: 0, right: 30, transform: "rotate(-5deg)" }} label="02" />
          <FloatCartridge sprite="spark" style={{ bottom: 10, right: 120, transform: "rotate(6deg)" }} label="03" />
          <FloatCartridge sprite="camera" style={{ top: 70, right: 0, transform: "rotate(2deg)", zIndex: 2 }} label="FPhoto" big onClick={() => onNav("fphoto")} />
        </div>
      </div>
      <PixelEdge color="var(--bg)" flip style={{ height: 40 }} />
    </section>
  );
}
function FloatCartridge({ sprite, style, label, big, onClick }) {
  return (
    <div onClick={onClick} style={{ position: "absolute", width: big ? 200 : 130, background: "var(--surface)", border: "2px solid var(--ink)", boxShadow: "6px 6px 0 var(--shadow)", padding: big ? 20 : 14, cursor: onClick ? "pointer" : "default", ...style }}>
      <div style={{ display: "flex", justifyContent: "center", marginBottom: 10 }}><Sprite name={sprite} scale={big ? 7 : 5} /></div>
      <div style={{ fontFamily: "var(--display-font)", fontSize: big ? 22 : 15, textAlign: "center", color: "var(--ink)" }}>{label}</div>
    </div>
  );
}

function MascotScene({ theme, onClick }) {
  const asleep = theme === "dark";
  return (
    <button aria-label="Open About Me" onClick={onClick} style={{ position: "relative", display: "flex", justifyContent: "center", width: "100%", background: "none", border: "none", padding: 0, cursor: "pointer" }}>
      <div className="hero-mascot-frame" style={{ position: "relative", width: 380, height: 380 }}>
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(circle at 50% 45%, var(--accent-soft), transparent 65%)" }} />
        {asleep ? (
          <>
            <div style={{ position: "absolute", top: 26, right: 24, transform: "rotate(6deg)", opacity: 0.85 }}><Sprite name="fphoto" scale={5} /></div>
            <div style={{ position: "absolute", top: 44, left: 16, transform: "rotate(-8deg)", opacity: 0.8 }}><Sprite name="question" scale={5} /></div>
            <div style={{ position: "absolute", bottom: 150, right: 70, transform: "rotate(5deg)", opacity: 0.8 }}><Sprite name="question" scale={5} /></div>
            <div style={{ position: "absolute", bottom: 40, left: "50%", transform: "translateX(-52%)" }}><Sprite name="tungSleep" scale={9} /></div>
            <div style={{ position: "absolute", top: 180, left: "40%", display: "flex", alignItems: "flex-end", gap: 4, fontFamily: "var(--display-font)", color: "var(--accent-lt)", lineHeight: 1, transform: "rotate(-6deg)" }}>
              <span style={{ fontSize: 22, opacity: 0.55 }}>z</span>
              <span style={{ fontSize: 32, opacity: 0.8 }}>Z</span>
              <span style={{ fontSize: 46 }}>Z</span>
            </div>
          </>
        ) : (
          <>
            <div style={{ position: "absolute", top: 0, left: "50%", transform: "translateX(-55%)", zIndex: 2 }}><MascotAsset size="hero" /></div>
            <div style={{ position: "absolute", top: 28, right: 4, transform: "rotate(6deg)" }}><Sprite name="fphoto" scale={6} /></div>
            <div style={{ position: "absolute", top: 40, left: 0, transform: "rotate(-7deg)" }}><Sprite name="question" scale={6} /></div>
            <div style={{ position: "absolute", bottom: 60, right: 14, transform: "rotate(5deg)" }}><Sprite name="question" scale={6} /></div>
          </>
        )}
        <div style={{ position: "absolute", bottom: 18, left: "50%", transform: "translateX(-50%)", display: "flex", flexDirection: "column", alignItems: "center" }}>
          <div style={{ width: 260, height: 16, background: "var(--accent)", opacity: 0.22 }} />
          <div style={{ width: 220, height: 14, background: "var(--accent)", opacity: 0.4 }} />
          <div style={{ width: 180, height: 12, background: "var(--accent)", opacity: 0.6 }} />
        </div>
      </div>
    </button>
  );
}
function CornerPixels() {
  const blocks = [[0, 0], [14, 0], [0, 14], [28, 0], [14, 14], [0, 28], [42, 0], [28, 14]];
  return (
    <div aria-hidden="true" style={{ position: "absolute", top: 18, right: 18, width: 70, height: 70 }}>
      {blocks.map(([x, y], i) => (
        <div key={i} style={{ position: "absolute", left: x, top: y, width: 14, height: 14, background: "var(--accent)", opacity: 0.15 + (i % 4) * 0.12 }} />
      ))}
    </div>
  );
}

/* ============================================================
   APP CARD VARIANTS
   ============================================================ */
function AppCard({ app, variant, locale, t, onNav }) {
  const accent = ACCENTS[app.accent]?.base || "var(--accent)";
  const c = app.content[locale];
  const isLive = app.status === "available";
  const win = app.platforms?.windows;
  const props = { app, accent, c, isLive, win, locale, t, onNav };
  if (variant === "A") return <CardClean {...props} />;
  if (variant === "C") return <CardRow {...props} />;
  return <CardCartridge {...props} />;
}

function PlatformRow({ platforms, t }) {
  const order = ["windows", "macos", "linux"];
  return (
    <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
      {order.filter((p) => platforms?.[p]).map((p) => (
        <PlatformChip key={p} label={platforms[p].label} active={platforms[p].status === "available"} />
      ))}
    </div>
  );
}

function CardClean({ app, accent, c, isLive, win, t, onNav }) {
  return (
    <article className="appcard" style={{ background: "var(--surface)", border: "2px solid var(--ink)", boxShadow: "5px 5px 0 var(--shadow)", padding: 24, display: "flex", flexDirection: "column", gap: 16 }}>
      <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 12 }}>
        <div style={{ display: "flex" }}><Sprite name={app.pixelLogo} scale={6} /></div>
        <StatusBadge status={app.status} t={t} />
      </div>
      <div>
        <h3 style={{ fontFamily: "var(--display-font)", fontSize: 26, color: "var(--ink)", margin: "0 0 6px" }}>{app.name}</h3>
        <p style={{ fontSize: 14.5, color: "var(--ink-soft)", lineHeight: 1.55, margin: 0 }}>{c.tagline}</p>
      </div>
      <PlatformRow platforms={app.platforms} t={t} />
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: "auto", paddingTop: 8, gap: 10 }}>
        <span style={{ fontFamily: "ui-monospace, monospace", fontSize: 12, color: "var(--muted)" }}>{isLive ? `v${app.version}` : t.status["coming-soon"]}</span>
        {isLive ? <Btn variant="primary" accent={accent} size="sm" onClick={() => onNav("fphoto")}>{t.cta.details} →</Btn> : <Btn variant="primary" disabled size="sm">{t.status["coming-soon"]}</Btn>}
      </div>
    </article>
  );
}

// B: cartridge (LOCKED default)
function CardCartridge({ app, accent, c, isLive, win, t, onNav }) {
  return (
    <article className="appcard" style={{ border: "2px solid var(--ink)", boxShadow: "5px 5px 0 var(--shadow)", display: "flex", flexDirection: "column", overflow: "hidden", background: "var(--surface)" }}>
      <div style={{ background: accent, padding: "18px 20px 26px", position: "relative" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
          <div style={{ display: "flex" }}><Sprite name={app.pixelLogo} scale={6} /></div>
          <span style={{ display: "inline-flex", alignItems: "center", gap: 6, padding: "5px 11px", background: "rgba(0,0,0,0.18)", color: "#fff", fontSize: 12, fontWeight: 700, borderRadius: 999 }}>
            <span style={{ width: 7, height: 7, borderRadius: 999, background: "#fff" }} />{t.status[app.status]}
          </span>
        </div>
        <div style={{ position: "absolute", bottom: -2, left: 0, right: 0, display: "flex" }}>
          {Array.from({ length: 24 }).map((_, i) => (
            <div key={i} style={{ flex: 1, height: 10, background: i % 2 ? "var(--surface)" : accent }} />
          ))}
        </div>
      </div>
      <div style={{ padding: 22, display: "flex", flexDirection: "column", gap: 14, flex: 1 }}>
        <div>
          <h3 style={{ fontFamily: "var(--display-font)", fontSize: 26, color: "var(--ink)", margin: "0 0 6px" }}>{app.name}</h3>
          <p style={{ fontSize: 14.5, color: "var(--ink-soft)", lineHeight: 1.55, margin: 0 }}>{c.tagline}</p>
        </div>
        <PlatformRow platforms={app.platforms} t={t} />
        <div style={{ display: "flex", gap: 10, marginTop: "auto", paddingTop: 6 }}>
          {isLive ? (
            <>
              <Btn variant="primary" accent={accent} size="sm" onClick={() => onNav("fphoto")}>{t.cta.details}</Btn>
              <Btn variant="ghost" size="sm" href={win?.url} icon={<DownloadIcon />}>{t.cta.download}</Btn>
            </>
          ) : <Btn variant="primary" disabled size="sm" full>{t.status["coming-soon"]}</Btn>}
        </div>
      </div>
    </article>
  );
}

function CardRow({ app, accent, c, isLive, win, t, onNav }) {
  return (
    <article className="appcard-row" style={{ gridColumn: "1 / -1", background: "var(--surface)", border: "2px solid var(--ink)", boxShadow: "5px 5px 0 var(--shadow)", padding: 26, display: "grid", gridTemplateColumns: "auto 1fr auto", gap: 28, alignItems: "center" }}>
      <div style={{ display: "flex" }}><Sprite name={app.pixelLogo} scale={8} /></div>
      <div>
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 8, flexWrap: "wrap" }}>
          <h3 style={{ fontFamily: "var(--display-font)", fontSize: 30, color: "var(--ink)", margin: 0 }}>{app.name}</h3>
          <StatusBadge status={app.status} t={t} />
          {isLive && <span style={{ fontFamily: "ui-monospace, monospace", fontSize: 12, color: "var(--muted)" }}>v{app.version}</span>}
        </div>
        <p style={{ fontSize: 15.5, color: "var(--ink-soft)", lineHeight: 1.55, margin: "0 0 12px", maxWidth: 560 }}>{c.shortDescription || c.tagline}</p>
        <PlatformRow platforms={app.platforms} t={t} />
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 10, minWidth: 180 }} className="cardrow-cta">
        {isLive ? (
          <>
            <Btn variant="primary" accent={accent} onClick={() => onNav("fphoto")} full>{t.cta.details}</Btn>
            <Btn variant="ghost" href={win?.url} icon={<DownloadIcon />} full>{t.cta.download}</Btn>
          </>
        ) : <Btn variant="primary" disabled full>{t.status["coming-soon"]}</Btn>}
      </div>
    </article>
  );
}

function DownloadIcon() {
  return (<svg width="15" height="15" viewBox="0 0 16 16" fill="none" style={{ display: "block" }}><path d="M8 1v9M8 10L4.5 6.5M8 10l3.5-3.5M2 13h12" stroke="currentColor" strokeWidth="2" strokeLinecap="square" /></svg>);
}

/* ============================================================
   GALLERY + ABOUT + HOME
   ============================================================ */
function Gallery({ apps, cardVariant, locale, t, onNav }) {
  return (
    <section id="apps" style={{ background: "var(--bg)", padding: "76px 28px 84px" }}>
      <div style={{ maxWidth: 1180, margin: "0 auto" }}>
        <SectionHead kicker={t.gallery.kicker} title={t.gallery.title} sub={t.gallery.sub} />
        <div className="gallery-grid" style={{ display: "grid", gridTemplateColumns: cardVariant === "C" ? "1fr" : "repeat(3, 1fr)", gap: 26, marginTop: 40 }}>
          {apps.map((app) => <AppCard key={app.id} app={app} variant={cardVariant} locale={locale} t={t} onNav={onNav} />)}
        </div>
      </div>
    </section>
  );
}

function SectionHead({ kicker, title, sub, light }) {
  return (
    <div>
      <div style={{ display: "inline-flex", alignItems: "center", gap: 8, marginBottom: 12 }}>
        <span style={{ width: 8, height: 8, background: light ? "var(--accent-lt)" : "var(--accent)" }} />
        <span style={{ fontFamily: "ui-monospace, monospace", fontSize: 12, letterSpacing: "0.2em", color: light ? "var(--accent-lt)" : "var(--accent)", fontWeight: 700 }}>{kicker}</span>
      </div>
      <h2 style={{ fontFamily: "var(--display-font)", fontSize: "clamp(34px, 5vw, 52px)", color: light ? "var(--band-ink)" : "var(--ink)", margin: "0 0 10px", lineHeight: 1 }}>{title}</h2>
      {sub && <p style={{ fontSize: 17, color: light ? "var(--band-muted)" : "var(--ink-soft)", margin: 0, maxWidth: 540 }}>{sub}</p>}
    </div>
  );
}

function About({ t, theme, onNav }) {
  const isDark = theme === "dark";
  return (
    <section id="about" style={{ background: "var(--band)", color: "var(--band-ink)", position: "relative" }}>
      <PixelEdge color="var(--accent)" style={{ height: 40 }} />
      <div style={{ maxWidth: 1180, margin: "0 auto", padding: "20px 28px 80px", display: "grid", gridTemplateColumns: "0.8fr 1.2fr", gap: 50, alignItems: "center" }} className="hero-grid">
        <div style={{ display: "flex", justifyContent: "center" }}>
          {isDark
            ? (
              <div style={{ position: "relative", width: 260, height: 150, display: "flex", alignItems: "center", justifyContent: "center", transform: "translateY(45px)" }}>
                <Sprite name="tungSleep" scale={11} />
                <div style={{ position: "absolute", top: -50, left: 116, display: "flex", alignItems: "flex-end", gap: 4, fontFamily: "var(--display-font)", color: "var(--accent-lt)", lineHeight: 1, transform: "rotate(-6deg)" }}>
                  <span style={{ fontSize: 20, opacity: 0.55 }}>z</span>
                  <span style={{ fontSize: 30, opacity: 0.78 }}>Z</span>
                  <span style={{ fontSize: 42 }}>Z</span>
                </div>
              </div>
            )
            : (
              <div style={{ display: "flex", filter: "drop-shadow(0 0 0 #fff) drop-shadow(4px 0 0 #fff) drop-shadow(-4px 0 0 #fff) drop-shadow(0 4px 0 #fff) drop-shadow(0 -4px 0 #fff) drop-shadow(8px 8px 0 var(--accent))" }}>
                <MascotAsset size="about" />
              </div>
            )}
        </div>
        <div>
          <SectionHead kicker="ABOUT" title={t.about.title} light />
          <p style={{ fontSize: 18, color: "var(--band-muted)", lineHeight: 1.7, margin: "18px 0 0", maxWidth: 540 }}>{t.about.body}</p>
          <div style={{ marginTop: 28, paddingTop: 24, borderTop: "1px solid var(--band-border)" }}>
            <h3 style={{ fontFamily: "var(--display-font)", fontSize: 28, color: "var(--band-ink)", margin: "0 0 10px" }}>{t.about.ctaTitle}</h3>
            <p style={{ fontSize: 15.5, color: "var(--band-muted)", lineHeight: 1.65, margin: "0 0 18px", maxWidth: 560 }}>{t.about.ctaDesc}</p>
            <Btn variant="ghost" onClick={() => onNav("about-me")}>{t.cta.aboutMe}</Btn>
          </div>
        </div>
      </div>
    </section>
  );
}

function Home({ heroVariant, cardVariant, locale, t, onNav, pixel, theme }) {
  return (
    <main>
      <Hero variant={heroVariant} t={t} onNav={onNav} pixel={pixel} theme={theme} />
      <Gallery apps={APPS} cardVariant={cardVariant} locale={locale} t={t} onNav={onNav} />
      <About t={t} theme={theme} onNav={onNav} />
    </main>
  );
}

Object.assign(window, { Hero, Home, Gallery, AppCard, SectionHead, About, DownloadIcon });
