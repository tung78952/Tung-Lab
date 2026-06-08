// fphoto.jsx — App detail page (theme-tokenized). Exports to window.

function Detail({ app, locale, t, onNav, theme }) {
  const accent = ACCENTS[app.accent]?.base || "var(--accent)";
  const c = app.content[locale];
  const baseWin = app.platforms?.windows;
  const [downloadMeta, setDownloadMeta] = useState(null);
  const win = baseWin && downloadMeta ? { ...baseWin, ...downloadMeta } : baseWin;
  const [selectedShotId, setSelectedShotId] = useState(null);
  const selectedShot = app.screenshots.find((shot) => shot.id === selectedShotId);
  const selectedShotSrc = selectedShot ? shotSrc(selectedShot, theme) : null;

  useEffect(() => {
    if (!selectedShotId) return;
    const onKeyDown = (event) => {
      if (event.key === "Escape") setSelectedShotId(null);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [selectedShotId]);

  useEffect(() => {
    if (!app.releaseApiUrl || !baseWin?.fileName) return;
    let cancelled = false;

    fetch(app.releaseApiUrl, { headers: { Accept: "application/vnd.github+json" } })
      .then((response) => response.ok ? response.json() : Promise.reject(new Error("Release metadata unavailable")))
      .then((release) => {
        const asset = release.assets?.find((item) => item.name === baseWin.fileName);
        if (!asset || cancelled) return;
        setDownloadMeta({
          fileName: asset.name,
          fileSize: formatFileSize(asset.size),
          url: asset.browser_download_url || baseWin.url
        });
      })
      .catch(() => {});

    return () => { cancelled = true; };
  }, [app.releaseApiUrl, baseWin?.fileName, baseWin?.url]);

  return (
    <main>
      <div style={{ background: "var(--bg)", paddingTop: 18 }}>
        <div style={{ maxWidth: 1180, margin: "0 auto", padding: "0 28px" }}>
          <button onClick={() => onNav("home", "apps")} style={{ display: "inline-flex", alignItems: "center", gap: 7, background: "none", border: "none", cursor: "pointer", color: "var(--muted)", fontSize: 14, fontWeight: 600, fontFamily: "'Space Grotesk', sans-serif", padding: 0 }}>← {t.cta.back}</button>
        </div>
      </div>

      {/* ===== HERO ===== */}
      <section style={{ background: "var(--bg)", position: "relative", overflow: "hidden" }}>
        <div style={{ maxWidth: 1180, margin: "0 auto", padding: "34px 28px 60px", display: "grid", gridTemplateColumns: "1fr 0.82fr", gap: 48, alignItems: "start" }} className="detail-grid">
          <div>
            <div className="detail-title-block" style={{ display: "flex", alignItems: "center", gap: 18, marginBottom: 22 }}>
              <div style={{ display: "flex" }}><Sprite name={app.pixelLogo} scale={9} /></div>
              <div>
                <div className="detail-title-row" style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 6 }}>
                  <h1 style={{ fontFamily: "var(--display-font)", fontSize: 48, color: "var(--ink)", margin: 0, lineHeight: 1 }}>{app.name}</h1>
                  <StatusBadge status={app.status} t={t} />
                </div>
                <span style={{ fontFamily: "ui-monospace, monospace", fontSize: 13, color: "var(--muted)" }}>v{app.version}</span>
              </div>
            </div>
            <p style={{ fontSize: 22, fontWeight: 600, color: "var(--ink)", lineHeight: 1.4, margin: "0 0 16px", maxWidth: 520 }}>{c.tagline}</p>
            <p style={{ fontSize: 16.5, color: "var(--ink-soft)", lineHeight: 1.65, margin: 0, maxWidth: 540 }}>{c.longDescription}</p>
            <div style={{ display: "flex", gap: 8, marginTop: 24, flexWrap: "wrap" }}>
              {["windows", "macos", "linux"].filter((p) => app.platforms?.[p]).map((p) => (
                <PlatformChip key={p} label={app.platforms[p].label} active={app.platforms[p].status === "available"} />
              ))}
            </div>
          </div>
          <DownloadPanel app={app} accent={accent} win={win} locale={locale} t={t} />
        </div>
        <PixelEdge color="var(--accent)" />
      </section>

      {/* ===== SCREENSHOTS ===== */}
      <section style={{ background: "var(--surface)", padding: "64px 28px" }}>
        <div style={{ maxWidth: 1180, margin: "0 auto" }}>
          <SectionHead kicker="UI" title={t.section.screenshots} />
          <div className="shots-scroll" style={{ display: "grid", gridAutoFlow: "column", gridAutoColumns: "minmax(340px, 1fr)", gap: 22, marginTop: 34, overflowX: "auto", paddingBottom: 10 }}>
            {app.screenshots.map((s) => {
              const src = shotSrc(s, theme);
              return (
              <div key={s.id} style={{ position: "relative" }}>
                {src
                  ? <button type="button" className="shot-link" onClick={() => setSelectedShotId(s.id)} style={{ display: "block", width: "100%", padding: 0, cursor: "zoom-in", border: "2px solid var(--ink)", boxShadow: "4px 4px 0 var(--shadow)", overflow: "hidden", background: "var(--surface-2)", transformOrigin: "center center", transition: "transform .22s ease, box-shadow .22s ease", willChange: "transform" }}>
                      <img src={src} alt={s.caption[locale]} loading="lazy" style={{ display: "block", width: "100%", height: "auto" }} />
                    </button>
                  : <ShotPlaceholder caption={s.caption[locale]} />}
                <figcaption style={{ fontSize: 13.5, color: "var(--muted)", marginTop: 10, fontWeight: 600 }}>{s.caption[locale]}</figcaption>
              </div>
              );
            })}
          </div>
        </div>
      </section>

      {selectedShot && selectedShotSrc && (
        <div role="dialog" aria-modal="true" aria-label={selectedShot.caption[locale]} onClick={() => setSelectedShotId(null)} style={{ position: "fixed", inset: 0, zIndex: 100, background: "rgba(0,0,0,0.58)", display: "flex", alignItems: "center", justifyContent: "center", padding: 24 }}>
          <div onClick={(event) => event.stopPropagation()} style={{ width: "min(94vw, 1180px)", maxHeight: "88vh", background: "var(--surface)", border: "2px solid var(--ink)", boxShadow: "8px 8px 0 var(--shadow)", display: "flex", flexDirection: "column", overflow: "hidden" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 16, padding: "12px 14px", borderBottom: "2px solid var(--border)", background: "var(--surface)" }}>
              <div style={{ fontSize: 14, fontWeight: 700, color: "var(--ink)" }}>{selectedShot.caption[locale]}</div>
              <button type="button" onClick={() => setSelectedShotId(null)} aria-label="Close image preview" style={{ width: 34, height: 34, border: "2px solid var(--ink)", background: "var(--surface)", color: "var(--ink)", cursor: "pointer", fontSize: 20, lineHeight: 1, fontWeight: 700, boxShadow: "3px 3px 0 var(--shadow)" }}>×</button>
            </div>
            <div style={{ padding: 12, background: "var(--surface-2)", overflow: "auto", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <img src={selectedShotSrc} alt={selectedShot.caption[locale]} style={{ display: "block", maxWidth: "100%", maxHeight: "78vh", width: "auto", height: "auto", objectFit: "contain" }} />
            </div>
          </div>
        </div>
      )}

      {/* ===== FEATURES + USAGE ===== */}
      <section style={{ background: "var(--bg)", padding: "64px 28px" }}>
        <div style={{ maxWidth: 1180, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 50 }} className="detail-grid">
          <div>
            <SectionHead kicker="WHAT IT DOES" title={t.section.features} />
            <ul style={{ listStyle: "none", padding: 0, margin: "30px 0 0", display: "flex", flexDirection: "column", gap: 14 }}>
              {c.features.map((f, i) => (
                <li key={i} style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
                  <span style={{ flexShrink: 0, marginTop: 5, width: 12, height: 12, background: "var(--accent)" }} />
                  <span style={{ fontSize: 15.5, color: "var(--ink-soft)", lineHeight: 1.55 }}>{f}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <SectionHead kicker="QUICK START" title={t.section.usage} />
            <ol style={{ listStyle: "none", padding: 0, margin: "30px 0 0", display: "flex", flexDirection: "column", gap: 12 }}>
              {c.usageSteps.map((s, i) => (
                <li key={i} style={{ display: "flex", gap: 16, alignItems: "flex-start", background: "var(--surface)", border: "2px solid var(--border)", padding: "14px 16px" }}>
                  <span style={{ flexShrink: 0, width: 30, height: 30, background: "var(--ink)", color: "var(--surface)", fontFamily: "var(--display-font)", fontSize: 17, display: "flex", alignItems: "center", justifyContent: "center" }}>{i + 1}</span>
                  <span style={{ fontSize: 15.5, color: "var(--ink-soft)", lineHeight: 1.5, paddingTop: 3 }}>{s}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* ===== SPECS + NOTES ===== */}
      <section style={{ background: "var(--surface)", padding: "64px 28px 72px" }}>
        <div style={{ maxWidth: 1180, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 50 }} className="detail-grid">
          <div>
            <SectionHead kicker="SPECS" title={t.section.release} />
            <div style={{ marginTop: 28, border: "2px solid var(--ink)", boxShadow: "5px 5px 0 var(--shadow)" }}>
              <SpecRow label={t.detail.version} value={`v${app.version}`} />
              <SpecRow label={t.detail.released} value={fmtDate(app.releaseDate, locale)} />
              <SpecRow label={t.detail.file} value={win?.fileName} mono />
              <SpecRow label={t.detail.size} value={win?.fileSize} />
              <SpecRow label={t.detail.minos} value={win?.minimumOs} last />
            </div>
            <a href={app.releasePage} target="_blank" rel="noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: 7, marginTop: 16, fontSize: 14, fontWeight: 600, color: "var(--accent)", textDecoration: "none" }}>{t.detail.releaseNotes} ↗</a>
          </div>
          <div>
            <SectionHead kicker="HEADS UP" title={t.section.notes} />
            <ul style={{ listStyle: "none", padding: 0, margin: "28px 0 0", display: "flex", flexDirection: "column", gap: 12 }}>
              {c.notes.map((n, i) => (
                <li key={i} style={{ display: "flex", gap: 13, alignItems: "flex-start", background: "var(--warn-bg)", border: "2px solid var(--warn-border)", padding: "14px 16px" }}>
                  <span style={{ flexShrink: 0, marginTop: 1, fontSize: 15 }}>⚠️</span>
                  <span style={{ fontSize: 14.5, color: "var(--warn-ink)", lineHeight: 1.55 }}>{n}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ===== FOOTER CTA ===== */}
      <section style={{ background: "linear-gradient(160deg, var(--accent) 0%, var(--band) 100%)", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(#ffffff14 1px, transparent 1px), linear-gradient(90deg, #ffffff14 1px, transparent 1px)", backgroundSize: "28px 28px", opacity: 0.5 }} />
        <div style={{ position: "relative", maxWidth: 760, margin: "0 auto", padding: "70px 28px 80px", textAlign: "center" }}>
          <div style={{ display: "flex", justifyContent: "center", marginBottom: 22 }}><Sprite name={app.pixelLogo} scale={8} /></div>
          <h2 style={{ fontFamily: "var(--display-font)", fontSize: "clamp(32px, 5vw, 48px)", color: "#fff", margin: "0 0 12px" }}>{t.footerCta.title}</h2>
          <p style={{ fontSize: 17, color: "rgba(255,255,255,0.88)", margin: "0 0 28px" }}>{t.footerCta.desc}</p>
          <Btn variant="ghost" size="lg" href={win?.url} icon={<DownloadIcon />}>{t.footerCta.btn}</Btn>
          <div style={{ marginTop: 14, fontFamily: "ui-monospace, monospace", fontSize: 12.5, color: "rgba(255,255,255,0.78)" }}>{win?.fileName} · {win?.fileSize}</div>
        </div>
      </section>
    </main>
  );
}

function DownloadPanel({ app, accent, win, locale, t }) {
  const order = ["windows", "macos", "linux"];
  return (
    <div className="dl-panel" style={{ position: "sticky", top: 90, background: "var(--surface)", border: "2px solid var(--ink)", boxShadow: "6px 6px 0 var(--shadow)" }}>
      <div style={{ background: "var(--ink)", color: "var(--surface)", padding: "14px 20px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <span style={{ fontFamily: "var(--display-font)", fontSize: 20 }}>{t.section.download}</span>
        <span style={{ fontFamily: "ui-monospace, monospace", fontSize: 12, color: "var(--accent-lt)" }}>v{app.version}</span>
      </div>
      <div style={{ padding: 20, display: "flex", flexDirection: "column", gap: 12 }}>
        {win?.status === "available" && (
          <div>
            <Btn variant="primary" accent={accent} href={win.url} icon={<DownloadIcon />} full size="lg">{t.cta.downloadWin}</Btn>
            <div style={{ marginTop: 8, fontFamily: "ui-monospace, monospace", fontSize: 12, color: "var(--muted)", textAlign: "center" }}>{win.fileName} · {win.fileSize}</div>
          </div>
        )}
        <div style={{ display: "flex", flexDirection: "column", gap: 8, marginTop: 4 }}>
          {order.filter((p) => app.platforms?.[p] && p !== "windows").map((p) => {
            const plat = app.platforms[p];
            return (
              <div key={p} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "11px 14px", border: "2px solid var(--border)", background: "var(--surface-2)" }}>
                <span style={{ fontSize: 14, fontWeight: 600, color: "var(--ink-soft)" }}>{plat.label}</span>
                <StatusBadge status={plat.status} t={t} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function SpecRow({ label, value, mono, last }) {
  if (!value) return null;
  return (
    <div style={{ display: "flex", justifyContent: "space-between", gap: 16, padding: "13px 18px", borderBottom: last ? "none" : "1px solid var(--border)" }}>
      <span style={{ fontSize: 14, color: "var(--muted)", fontWeight: 600 }}>{label}</span>
      <span style={{ fontSize: 14, color: "var(--ink)", fontWeight: 600, fontFamily: mono ? "ui-monospace, monospace" : "inherit", textAlign: "right" }}>{value}</span>
    </div>
  );
}

function shotSrc(shot, theme) {
  return theme === "dark" ? shot.srcDark : shot.srcLight;
}

function formatFileSize(bytes) {
  if (!Number.isFinite(bytes) || bytes <= 0) return null;
  const mb = bytes / (1024 * 1024);
  return `${mb >= 100 ? mb.toFixed(1) : Math.round(mb)} MB`;
}

function fmtDate(iso, locale) {
  if (!iso) return "—";
  const d = new Date(iso);
  return d.toLocaleDateString(locale === "vi" ? "vi-VN" : "en-US", { year: "numeric", month: "short", day: "numeric" });
}

Object.assign(window, { Detail, DownloadPanel, SpecRow, shotSrc, formatFileSize, fmtDate });
