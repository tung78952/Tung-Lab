// ui.jsx — Tung Lab shared UI (theme-tokenized). Exports to window.
const { useState, useEffect, useRef } = React;

/* ============================================================
   PIXEL ART RENDERER — values may be CSS vars, so sprites theme.
   ============================================================ */
function PixelArt({ grid, palette, scale = 8, className, style }) {
  const rows = grid.length,cols = grid[0].length;
  return (
    <div className={className} style={{
      display: "grid", gridTemplateColumns: `repeat(${cols}, ${scale}px)`, gridTemplateRows: `repeat(${rows}, ${scale}px)`,
      width: cols * scale, height: rows * scale, imageRendering: "pixelated", ...style, fontSize: "6px"
    }}>
      {grid.flatMap((line, r) => line.split("").map((ch, c) =>
      <div key={`${r}-${c}`} style={{ background: palette[ch] || "transparent", width: scale, height: scale }} />
      ))}
    </div>);

}

/* tokens: O=outline(ink) A=accent L=accent-light W=highlight S=secondary(blue) */
const PAL = { O: "var(--ink)", A: "var(--accent)", L: "var(--accent-lt)", W: "var(--hl)", S: "var(--accent2)" };
const TUNG_POSE_PAL = {
  ".": "transparent",
  K: "#241f1b",
  F: "var(--skin)",
  A: "var(--accent)",
  W: "#fbf2ef",
  Z: "var(--accent)"
};
const INTEREST_PAL = {
  ".": "transparent",
  K: "#241f1b",
  F: "var(--skin)",
  f: "#d49a73",
  A: "var(--accent)",
  W: "#fbf2ef",
  w: "#e9ded9",
  G: "#5b5750",
  M: "#9a948c",
  D: "#1a1815",
  B: "#2b3640",
  H: "#a8c0cc",
  V: "#7ad6ff",
  S: "var(--accent2)",
  P: "#857f77",
  g: "#7fae5e",
  r: "#cf5b50",
  y: "#e8c14a",
  j: "#cf1124",
  n: "#0a7d3f"
};
const SPRITES = {
  camera: { palette: PAL, grid: [
    "....OOOO....", "...OAAAAO...", "..OAAAAAAO..", "..OALWWLAO..",
    ".OOALWWLAOO.", ".OSOAAAAOSO.", ".OSOOAAOOSO.", ".OOOAAAAOOO.",
    "...OAWWAO...", "...OAWWAO...", "..OOO..OOO..", "..OS....SO.."]
  },
  bot: { palette: PAL, grid: [
    "...O..O...", "...O..O...", "..OOOOOO..", ".OAAAAAAO.",
    ".OAWOWOAO.", ".OAWOWOAO.", ".OAAAAAAO.", ".OOAAAAOO.",
    "OSO.OO.OSO", "OSOOAAOOSO", "..OO..OO..", "..OO..OO.."]
  },
  music: { palette: PAL, grid: [
    "....OOOO....", "...OAAAAO...", "..OAWWAAO..", ".OAWWWWAO.",
    ".OAAWWAAO.", ".OOAAAAOO.", "..OAAAAO..", ".OOOAAOOO.",
    "O.SOAAOS.O", "O.SOAAOS.O", "...O..O...", "...O..O..."]
  },
  football: { palette: PAL, grid: [
    "...OOOO.....", "..OAAAAO....", ".OAWWAAO....", ".OAAAAAO....",
    "..OAAAAOO...", "...OOOOAO...", "..OOAAAO....", ".OAAAOO.....",
    ".OAAO..OOO..", "..OO..OAWAO.", ".....OAAAAO", "......OOOO."]
  },
  model: { palette: PAL, grid: [
    "....OOO.....", "...OAAAO....", "..OAWWAO....", "..OAAAO.....",
    "...OOO..OO..", "..OOAAOOAAO.", ".OAAAAAAOO..", ".OAOSSAAO...",
    "..OOAAOO....", "...O..O.....", "..OO..OO....", ".OS....SO..."]
  },
  store: { palette: PAL, grid: [
    "..OOOOOOOO..", ".OAAAAAAAO.", "OAAAAAAAAAO", "OWOWOWOWOWO",
    "OOOOOOOOOOO", "OOWWWWWWWOO", "OOWOOWOOWOO", "OOWOOWOOWOO",
    "OOWWWWWWWOO", "OOOOOOOOOOO", "..OO....OO.", "..OO....OO."]
  },
  exam: { palette: PAL, grid: [
    "..OOOOOOOO..", ".OWWWWWWWO.", ".OWAAAAWWO.", ".OWWWWWWWO.",
    ".OWAAAWWWO.", ".OWWWWWWWO.", ".OWWAAWWWO.", ".OWWWWWWWO.",
    ".OWAAAAWWO.", ".OWWWWWWWO.", ".OOOOOOOO.", "...O..O..."]
  },
  // "?" tile — for unnamed / coming-soon apps
  question: { palette: PAL, grid: [
    "..OOOOOOOO..", ".OWWWWWWWWO.", "OWWAAAAAAWWO", "OWAAWWWWAAWO",
    "OWWWWWWAAWWO", "OWWWWAAAWWWO", "OWWWAAAWWWWO", "OWWWAAWWWWWO",
    "OWWWWWWWWWWO", "OWWWAAWWWWWO", ".OWWAAWWWWO.", "..OOOOOOOO.."]
  },
  // FPhoto logo — shape is locked, outline follows the active theme.
  fphoto: {
    palette: {
      K: "var(--ink)",
      C: "#cc6b4e",
      S: "#e6b289",
      W: "#fbf2ef",
      M: "#8f7567",
      L: "#d9c2b4"
    },
    grid: [
      "KKKKKKKKKKKKKKK",
      "KWWWWWWWWWWWWWK",
      "KWMMMMMMMMMMMWK",
      "KWMCSSSSSSSSMWK",
      "KWMCSLSSWWWCMWK",
      "KWMMMMSSWWWCMWK",
      "KWMMMMSSWWCCMWK",
      "KWMMMMSSCCCCMWK",
      "KWMMMMMMMMMMMWK",
      "KWMMKKKKKKKKKKK",
      "KWMMKCCCCCCCK..",
      "KWMMKSSSSKKK...",
      "KWMMKKKKK......",
      "KWMMK..........",
      "KKKKK.........."]

  },
  // Tung — awake (light): short Korean side-part hair, orange sleeves + white tee, skin forearms, dark pants
  tung: {
    palette: { H: "#241f1b", F: "var(--skin)", E: "#241f1b", A: "var(--accent)", W: "#fbf2ef", P: "#241f1b" },
    grid: [
    "...HHHHHHHHHH...", ".HHHHHHHHHHHHHH.", ".HHHHHHHHHHHHHH.", ".HHHHHHHHHHHHHH.",
    ".HHHHHHHHHHHHHH.", ".HHHHHHHHHHHHHH.", ".HHHHFFFFFFFHHH.", ".HHHFFFFFFFFHHH.",
    ".HHHFFFFFFFFHHH.", ".HHHFFEFFEFFHHH.", ".HHFFFFFFFFFFHH.", ".HFFFFFEEEFFFFH.",
    ".HFFFFFFFFFFFFH.", "..FFFFFFFFFFFF..", "...FFFFFFFFFF...", "....FFFFFFFF....",
    ".AAAWWWWWWWWAAA.", ".AAAWWWWWWWWAAA.", "..AAWWWWWWWWAA..", "..FFWWWWWWWWFF..",
    "..FFWWWWWWWWFF..", "..FFWWWWWWWWFF..", "..FFWWWWWWWWFF..", ".PPPWWWWWWWWPPP.",
    ".PPPPPPPPPPPPPP.", "..PPP....PPP...."]

  },
  // Tung — asleep (dark mode): lying on pillow under an orange blanket, eyes shut
  tungSleep: {
    palette: { O: "var(--ink)", H: "#6b5d4f", F: "var(--skin)", A: "var(--accent)", W: "#d9d2c4", E: "#3a2f26" },
    grid: [
    "..OOOOOO............", ".OHHHHHHO...........", ".OHHHHHHO...........",
    ".OHHHFFFFOOOOOOOOOO.", ".OHFFFFFFOAAAAAAAAO.", ".OFFEEFFFOAAAAAAAAO.",
    ".OFFFFFFFOAAAAAAAAO.", ".OFFFFFFOOAAAAAAAAO.", ".WWWWWWWWOAAAAAAAAO.",
    ".OWWWWWWOOAAAAAAAAO.", ".OOOOOOOOOOOOOOOOOO.", "..OOOOOOOOOOOOOO...."]

  },
  tungThumb: {
    palette: TUNG_POSE_PAL,
    grid: [
      "....KKKKKKKK....",
      "...KKKKKKKKKK...",
      "..KKKKKKKKKKKK..",
      "..KKKKKKKKKKKK..",
      "..KKKKKFFFKKKK..",
      "..KKKFFFFFFFKK..",
      "..KKFFFFFFFFFK..",
      "..KFFKFFFFKFFK..",
      "..KFFFFFFFFFFK..",
      "..KFFFFKKFFFFK..",
      "...KFFFFFFFFK...",
      "....KFFFFFFKFF..",
      "..KAAAWWWWAAFFFF",
      ".KAAAWWWWWWAFFFF",
      ".KAAWWWWWWWWAFFF",
      ".KFFWWWWWWWWWWK.",
      ".KFFWWWWWWWWWWK.",
      ".KFFWWWWWWWWWWK.",
      "..KWWWWWWWWWWK..",
      "..KKKKKKKKKKKK..",
      "..KKKKK..KKKKK.."
    ]
  },
  tungSleepPose: {
    palette: TUNG_POSE_PAL,
    grid: [
      "....KKKKKKKK....",
      "...KKKKKKKKKK...",
      "..KKKKKKKKKKKK..",
      "..KKKKKKKKKKKK..",
      "..KKKKKFFFKKKK..",
      "..KKKFFFFFFFKK..",
      "..KKFFFFFFFFFK..",
      "..KFKKFFFFKKFK..",
      "..KFFFFFFFFFFK..",
      "..KFFFFFKKFFFK..",
      "...KFFFFFFFFK...",
      "....KFFFFFFK....",
      "..KAAAWWWWAAAK..",
      ".KAAAWWWWWWAAAK.",
      ".KAAWWWWWWWWAAK.",
      ".KFFWWWWWWWWFFK.",
      ".KFFWWWWWWWWFFK.",
      ".KFFWWWWWWWWFFK.",
      "..KWWWWWWWWWWK..",
      "..KKKKKKKKKKKK..",
      "..KKKKK..KKKKK.."
    ]
  },
  tungCoffee: {
    palette: { ...TUNG_POSE_PAL, T: "var(--muted)", S: "var(--accent2)" },
    grid: [
      "....KKKKKKKK....",
      "...KKKKKKKKKK...",
      "..KKKKKKKKKKKK..",
      "..KKKKKKKKKKKK..",
      "..KKKKKFFFKKKK..",
      "..KKKFFFFFFFKK..",
      "..KKFFFFFFFFFK..",
      "..KFFKFFFFKFFK..",
      "..KFFFFFFFFFFK..",
      "..KFFFFKKFFFFK..",
      "...KFFFFFFFFK...",
      "....KFFFFFFK....",
      "..KAAAWWWWAAAK..",
      ".KAAAWTWTWWAAAK.",
      ".KAAWWKSSSKKWAK.",
      ".KFFWWKSSSKSKFK.",
      ".KFFWWKSSSKSKFK.",
      ".KFFWWKKSSKKWWK.",
      "..KWWWWWWWWWWK..",
      "..KKKKKKKKKKKK..",
      "..KKKKK..KKKKK.."
    ]
  },
  tungConfused: {
    palette: TUNG_POSE_PAL,
    grid: [
      "....KKKKKKKK....",
      "...KKKKKKKKKK...",
      "..KKKKKKKKKKKK..",
      "..KKKKKKKKKFFF..",
      "..KKKKKFFFKKFF..",
      "..KKKFFFFFFFKF..",
      "..KKFFFFFFFFFKF.",
      "..KFFKFFFFKFFKF.",
      "..KFFFFFFFFFFKA.",
      "..KFFFFKKFFFFKA.",
      "...KFFFFFFFFKAA.",
      "....KFFFFFFKAA..",
      "..KAAAWWWWAAAK..",
      ".KAAAWWWWWWAAAK.",
      ".KAAWWWWWWWWAAK.",
      ".KFFWWWWWWWWWWK.",
      ".KFFWWWWWWWWWWK.",
      ".KFFWWWWWWWWWWK.",
      "..KWWWWWWWWWWK..",
      "..KKKKKKKKKKKK..",
      "..KKKKK..KKKKK.."
    ]
  },
  interestCamera: {
    palette: INTEREST_PAL,
    grid: [
      "...KKKKKKKK.....", "..KKKKKKKKKK....", ".KKKKKKKKKKKK...", ".KKKKKKKKKKKKK..",
      ".KKKKKKfFFFKKK..", ".KKKKfFFFFFFKK..", ".KKKfFFFFFFFFK..", ".KKfFFKFFFFKFK..",
      ".KKfFFFFFFFFFK..", ".KKfFFFFKKFFFK..", "..KKfFFFFFFFK...", "...KfFFFFFFK....",
      "..KAAAWGGGWAAK..", ".KFFWGGDDGGWFFK.", ".KFFWGDHBDGGFFK.", ".KFFWGDBBDGGFFK.",
      ".KFFWGGDDGGWFFK.", ".KFFWWWWWWWWWWK.", "..KWWWWWWWWWWK..", "..KKKKKKKKKKKK..",
      "..KKKKK..KKKKK.."
    ]
  },
  interestMusic: {
    palette: INTEREST_PAL,
    grid: [
      "...PPPPPPPPPP...", "..PKKKKKKKKKKP..", ".PKKKKKKKKKKKKP.", ".PKKKKKKKKKKKKP.",
      ".PKKKKKFFFKKKKP.", "PPKKKFFFFFFFKKPP", "PAKKFFFFFFFFFKAP", "PAKFFKFFFFKFFKAP",
      "PAKFFFFFFFFFFKAP", "PPKFFFFKKFFFFKPP", "..KKFFFFFFFFKK..", "...KFFFFFFFFK...",
      "..KAAAWWWWAAAK..", ".KAAAWWWWWWAAAK.", ".KAAWWWWWWWWAAK.", ".KFFWWWWWWWWFFK.",
      ".KFFWWWWWWWWFFK.", ".KFFWWWWWWWWFFK.", "..KWWWWWWWWWWK..", "..KKKKKKKKKKKK..",
      "..KKKKK..KKKKK.."
    ]
  },
  interestGaming: {
    palette: INTEREST_PAL,
    grid: [
      "..KKKKKKKKKKKK..", "..KSSSSSSSSSSK..", "..KSVVVVVVVSSK..", "..KSVVSSVVVSSK..",
      "..KSVKKKKKKVSK..", "..KSKKKKKKKKSK..", "..KKKKKKKKKKKK..", "...KKKKKKKKKK...",
      "...KKKKKKKKKK...", "...KKKKKKKKKK...", "...KAAWWWWAAK...", "..KFAWWWWWWAFK..",
      "..KFFWWWWWWFFK..", "..KFFWWWWWWFFK..", "...KWWWWWWWWK...", "..KKWWWWWWWWKK..",
      ".KDDKWWWWWWKDDK.", ".KDDDDDDDDDDDDK.", "..KDDDDDDDDDDK..", "...KKKKKKKKKK...",
      "....KSSSSSSK...."
    ]
  },
  interestModel: {
    palette: INTEREST_PAL,
    grid: [
      ".........y..y...........", "........yK..Ky..........", ".......yKK..KKy.........", "......yKKKyyKKKy........",
      ".......KWWWWWWK.........", "......KWWrrrrWWK........", ".....KWWyyyyyyWWK.......", ".....KWWyKyyKyWWK.......",
      ".....KWWWWKKWWWWK.......", "......KWWKrrKWWK........", ".......KWWrrWWK.........", "......KWWWWWWWWK........",
      "...KWWKKKSSKKKWWK.......", "..KWWKrrKSSKrrKWWK......", ".KDDKrrKSSKrrKDDK.......", ".KDDK..KSSK..KDDK.......",
      "..KK...KrrK...KK........", "......KWrWWK............", ".....KWWKKWWK...........", "....KWWK..KWWK..........",
      "...KrrK....KrrK.........", "...KrrK....KrrK.........", "....KK......KK..........", "......KSSSSK............"
    ]
  },
  interestFootball: {
    palette: INTEREST_PAL,
    grid: [
      "....KKKKKKKK....", "...KKKKKKKKKK...", "..KKKKKKKKKKKK..", "..KKKKKKKKKKKK..",
      "..KKKKKFFFKKKK..", "..KKKFFFFFFFKK..", "..KKFFFFFFFFFK..", "..KFFKFFFFKFFK..",
      "..KFFFFFFFFFFK..", "..KFFFFKKFFFFK..", "...KFFFFFFFFK...", "....KFFFFFFK....",
      "..KjjjjnnjjjjK..", ".KjjjjjnnjjjjjK.", ".KjjjjjjjjjjjjK.", ".KFFjjjjjjyjFFK.",
      ".KFFjjjjjjjjFFK.", ".KFFjjjjjjjjFFK.", "..KjjjjjjjjjjK..", "..KnnnnnnnnnnK..",
      "..KKKKK..KKKKK.."
    ]
  },
  interestFootballBack: {
    palette: INTEREST_PAL,
    grid: [
      "....KKKKKKKK....", "...KKKKKKKKKK...", "..KKKKKKKKKKKK..", "..KKKKKKKKKKKK..",
      "..KKKKKKKKKKKK..", "..KKKKKKKKKKKK..", "..KKKKKKKKKKKK..", "..KKKKKKKKKKKK..",
      "..KKKKKKKKKKKK..", "..KKKKKKKKKKKK..", "...KKKKKKKKKK...", "....KFFFFFFK....",
      "..KjjjjjjjjjjK..", "..KFjjWWWWjjFK..", ".KFjjjjjjWjjjFK.", "KFjjjjjjWjjjjjFK",
      "KFjjjjjWjjjjjjFK", "..KjjjjjjjjjjK..", "..KnnnnnnnnnnK..", "..KnnnnnnnnnnK..",
      "..KKKKK..KKKKK.."
    ]
  }
};

function Sprite({ name, scale = 8, className, style }) {
  const s = SPRITES[name] || SPRITES.bot;
  return <PixelArt grid={s.grid} palette={s.palette} scale={scale} className={className} style={style} />;
}

function MascotAsset({ variant = "light", size = "hero", style }) {
  const dims = size === "about"
    ? { width: 196, height: 294 }
    : { width: 168, height: 252 };

  return (
    <img
      alt=""
      src={variant === "dark" ? "assets/mascot-dark.png" : "assets/mascot-light.png"}
      style={{
        display: "block",
        imageRendering: "pixelated",
        objectFit: "fill",
        ...dims,
        ...style
      }}
    />
  );
}

function BrandMascot({ theme, size = "nav" }) {
  const dims = size === "footer"
    ? { width: 42, height: 46 }
    : { width: 48, height: 52 };
  const outline = theme === "dark" || size === "footer"
    ? "drop-shadow(0 0 0 #fff) drop-shadow(2px 0 0 #fff) drop-shadow(-2px 0 0 #fff) drop-shadow(0 2px 0 #fff) drop-shadow(0 -2px 0 #fff)"
    : "none";

  return (
    <img
      alt=""
      src="assets/mascot-point-right.svg"
      style={{ display: "block", imageRendering: "pixelated", objectFit: "contain", filter: outline, ...dims }}
    />);

}

/* ============================================================
   PIXEL MOTIF — stepped pixel edge band
   ============================================================ */
function PixelEdge({ color = "var(--accent)", flip = false, size = 14, height = 56, align = "content", style }) {
  const edge = (
    <div aria-hidden="true" style={{ height, width: "100%", position: "relative", overflow: "hidden", transform: flip ? "scaleY(-1)" : "none", ...style }}>
      <PixelStair color={color} size={size} />
    </div>);

  if (align === "content") {
    return (
      <div aria-hidden="true" style={{ maxWidth: 1180, margin: "0 auto", padding: "0 28px" }}>
        {edge}
      </div>);

  }

  if (align === "center") {
    return (
      <div aria-hidden="true" style={{ maxWidth: 1180, margin: "0 auto", padding: "0 28px", display: "flex", justifyContent: "center" }}>
        <div style={{ width: Math.min(560, 40 * size) }}>
          {edge}
        </div>
      </div>);

  }

  return edge;
}
function PixelStair({ color = "var(--accent)", size = 14 }) {
  const pattern = [4, 2, 3, 1, 2, 4, 1, 3, 2, 1, 3, 2, 4, 1, 2, 3, 1, 2, 4, 2, 1, 3, 2, 4, 1, 2, 3, 1, 4, 2, 3, 1, 2, 4, 1, 3, 2, 1, 3, 2];
  return (
    <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, display: "grid", gridTemplateColumns: `repeat(${pattern.length}, ${size}px)`, justifyContent: "start", alignItems: "end" }}>
      {pattern.map((h, i) =>
      <div key={i} style={{ height: h * size, background: color, opacity: 0.18 + h / 5 * 0.5 }} />
      )}
    </div>);

}

/* ============================================================
   BUTTONS
   ============================================================ */
function Btn({ children, variant = "primary", onClick, href, disabled, accent = "var(--accent)", icon, full, size = "md" }) {
  const pads = size === "lg" ? "16px 30px" : size === "sm" ? "9px 16px" : "13px 24px";
  const fs = size === "lg" ? 17 : size === "sm" ? 13 : 15;
  const base = {
    display: "inline-flex", alignItems: "center", justifyContent: "center", gap: 9, padding: pads,
    fontSize: fs, fontWeight: 700, fontFamily: "'Space Grotesk', sans-serif", borderRadius: 0,
    cursor: disabled ? "not-allowed" : "pointer", border: "2px solid var(--ink)", textDecoration: "none",
    letterSpacing: "0.01em", transition: "transform .12s ease, box-shadow .12s ease", width: full ? "100%" : "auto", whiteSpace: "nowrap"
  };
  const styles = {
    primary: { ...base, background: accent, color: "#fff", boxShadow: "4px 4px 0 var(--shadow)" },
    ghost: { ...base, background: "var(--surface)", color: "var(--ink)", boxShadow: "4px 4px 0 var(--shadow)" },
    soft: { ...base, background: "transparent", color: "var(--ink)", border: "2px solid transparent", boxShadow: "none" },
    disabled: { ...base, background: "var(--surface-2)", color: "var(--muted)", border: "2px solid var(--border)", boxShadow: "none", cursor: "not-allowed" }
  };
  const st = disabled ? styles.disabled : styles[variant];
  const hover = (e, on) => {
    if (disabled || variant === "soft") return;
    e.currentTarget.style.transform = on ? "translate(-2px,-2px)" : "none";
    e.currentTarget.style.boxShadow = on ? "6px 6px 0 var(--shadow)" : "4px 4px 0 var(--shadow)";
  };
  const props = { style: st, onMouseEnter: (e) => hover(e, true), onMouseLeave: (e) => hover(e, false), onClick: disabled ? undefined : onClick };
  if (href && !disabled) return <a href={href} {...props}>{icon}{children}</a>;
  return <button {...props} disabled={disabled}>{icon}{children}</button>;
}

/* ============================================================
   BADGES
   ============================================================ */
function StatusBadge({ status, t }) {
  const map = {
    available: { bg: "var(--accent-soft)", fg: "var(--accent-ink)", dot: "var(--accent)" },
    beta: { bg: "var(--warn-bg)", fg: "var(--warn-ink)", dot: "#d99a2b" },
    "coming-soon": { bg: "var(--surface-2)", fg: "var(--ink-soft)", dot: "var(--muted)" },
    "not-planned": { bg: "var(--surface-2)", fg: "var(--muted)", dot: "var(--border)" }
  };
  const c = map[status] || map["coming-soon"];
  return (
    <span style={{ display: "inline-flex", alignItems: "center", gap: 6, padding: "5px 11px", background: c.bg, color: c.fg, fontSize: 12, fontWeight: 700, borderRadius: 999, letterSpacing: "0.02em" }}>
      <span style={{ width: 7, height: 7, borderRadius: 999, background: c.dot, display: "inline-block" }} />
      {t.status[status]}
    </span>);

}
function PlatformChip({ label, active }) {
  return (
    <span style={{ padding: "4px 10px", fontSize: 12, fontWeight: 600, borderRadius: 6, background: active ? "var(--ink)" : "var(--surface-2)", color: active ? "var(--surface)" : "var(--muted)", fontFamily: "'Space Grotesk', sans-serif" }}>{label}</span>);

}

/* ============================================================
   HEADER
   ============================================================ */
function Header({ locale, setLocale, t, onNav, route, theme, toggleTheme }) {
  const [scrolled, setScrolled] = useState(false);
  const [headerHeight, setHeaderHeight] = useState(0);
  const headerRef = useRef(null);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  useEffect(() => {
    const header = headerRef.current;
    if (!header) return;
    const updateHeight = () => setHeaderHeight(header.offsetHeight);
    updateHeight();
    const ro = new ResizeObserver(updateHeight);
    ro.observe(header);
    window.addEventListener("resize", updateHeight);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", updateHeight);
    };
  }, []);
  return (
    <>
      <header data-site-header ref={headerRef} style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 50, background: scrolled ? "color-mix(in srgb, var(--bg) 86%, transparent)" : "transparent", backdropFilter: scrolled ? "blur(10px)" : "none", borderBottom: scrolled ? "2px solid var(--border)" : "2px solid transparent", transition: "background .2s, border-color .2s" }}>
        <div className="site-header-inner" style={{ maxWidth: 1180, margin: "0 auto", padding: "14px 28px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <button className="site-brand" onClick={() => onNav("home")} style={{ display: "flex", alignItems: "center", gap: 11, background: "none", border: "none", cursor: "pointer", padding: 0 }}>
            <BrandMascot theme={theme} />
            <span className="site-brand-text" style={{ fontFamily: "var(--display-font)", fontSize: 26, fontWeight: 600, color: "var(--ink)", lineHeight: 1 }}>Tung Lab</span>
          </button>
          <nav className="site-nav" style={{ display: "flex", alignItems: "center", gap: 4 }}>
            <NavLink active={route === "home"} onClick={() => onNav("home")}>{t.nav.home}</NavLink>
            <NavLink active={false} onClick={() => onNav("home", "apps")}>{t.nav.apps}</NavLink>
            <NavLink active={route === "about-me"} onClick={() => onNav("about-me")}>{t.nav.aboutMe}</NavLink>
            <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
            <LangSwitch locale={locale} setLocale={setLocale} />
          </nav>
        </div>
      </header>
      <div aria-hidden="true" style={{ height: headerHeight }} />
    </>);

}
function NavLink({ children, active, onClick }) {
  return (
    <button onClick={onClick} className="navlink" style={{ background: "none", border: "none", cursor: "pointer", padding: "8px 14px", fontFamily: "'Space Grotesk', sans-serif", fontSize: 15, fontWeight: 600, color: active ? "var(--accent)" : "var(--ink-soft)" }}>{children}</button>);

}
function ThemeToggle({ theme, toggleTheme }) {
  return (
    <button className="theme-toggle" onClick={toggleTheme} aria-label={theme === "dark" ? "Switch to light" : "Switch to dark"} style={{ marginLeft: 8, width: 40, height: 36, border: "2px solid var(--ink)", background: "var(--surface)", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--ink)" }}>
      {theme === "dark" ? <SunIcon /> : <MoonIcon />}
    </button>);

}
function SunIcon() {
  return <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><circle cx="8" cy="8" r="3" stroke="currentColor" strokeWidth="1.6" /><path d="M8 1v2M8 13v2M1 8h2M13 8h2M3 3l1.4 1.4M11.6 11.6 13 13M13 3l-1.4 1.4M4.4 11.6 3 13" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" /></svg>;
}
function MoonIcon() {
  return <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M13 9.5A5.5 5.5 0 0 1 6.5 3a5.5 5.5 0 1 0 6.5 6.5Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" /></svg>;
}
function LangSwitch({ locale, setLocale }) {
  return (
    <div className="lang-switch" style={{ display: "flex", marginLeft: 8, border: "2px solid var(--ink)" }}>
      {["vi", "en"].map((l) =>
      <button key={l} onClick={() => setLocale(l)} aria-label={l === "vi" ? "Tiếng Việt" : "English"} style={{ padding: "6px 12px", fontFamily: "'Space Grotesk', sans-serif", fontSize: 13, fontWeight: 700, cursor: "pointer", border: "none", background: locale === l ? "var(--ink)" : "var(--surface)", color: locale === l ? "var(--surface)" : "var(--ink)" }}>{l.toUpperCase()}</button>
      )}
    </div>);

}

/* ============================================================
   FOOTER
   ============================================================ */
function Footer({ t, onNav, edgeAlign = "content", theme }) {
  return (
    <footer style={{ background: "var(--band)", color: "var(--band-ink)" }}>
      <PixelEdge color="var(--accent)" flip align={edgeAlign} style={{ height: 40 }} />
      <div style={{ maxWidth: 1180, margin: "0 auto", padding: "10px 28px 56px" }}>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 40, justifyContent: "space-between", alignItems: "flex-start" }}>
          <div style={{ maxWidth: 360 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 11, marginBottom: 14 }}>
              <BrandMascot theme={theme} size="footer" />
              <span style={{ fontFamily: "var(--display-font)", fontSize: 24, color: "var(--band-ink)" }}>Tung Lab</span>
            </div>
            <p style={{ fontSize: 14, lineHeight: 1.65, color: "var(--band-muted)", margin: 0 }}>{t.footer.blurb}</p>
          </div>
          <div style={{ display: "flex", gap: 56, flexWrap: "wrap" }}>
            <FooterCol title={t.nav.apps}>
              <FooterLink onClick={() => onNav("fphoto")}>FPhoto</FooterLink>
              <FooterLink onClick={() => onNav("home", "apps")}>{t.status["coming-soon"]}</FooterLink>
            </FooterCol>
            <FooterCol title="Links">
              <FooterLink href="https://github.com/tung78952">{t.footer.github}</FooterLink>
              <FooterLink onClick={() => onNav("about-me")}>{t.nav.aboutMe}</FooterLink>
              <FooterLink onClick={() => onNav("home", "about")}>{t.nav.about}</FooterLink>
            </FooterCol>
          </div>
        </div>
        <div style={{ marginTop: 44, paddingTop: 22, borderTop: "1px solid var(--band-border)", fontSize: 13, color: "var(--band-muted)" }}>{t.footer.copyright}</div>
      </div>
    </footer>);

}
function FooterCol({ title, children }) {
  return (
    <div>
      <div style={{ fontFamily: "var(--display-font)", fontSize: 16, color: "var(--band-ink)", marginBottom: 14 }}>{title}</div>
      <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>{children}</div>
    </div>);

}
function FooterLink({ children, href, onClick }) {
  const st = { fontSize: 14, color: "var(--band-muted)", textDecoration: "none", cursor: "pointer", background: "none", border: "none", padding: 0, textAlign: "left", fontFamily: "'Space Grotesk', sans-serif" };
  if (href) return <a href={href} style={st} target="_blank" rel="noreferrer">{children}</a>;
  return <button onClick={onClick} style={st}>{children}</button>;
}

/* ---- Screenshot placeholder ---- */
function ShotPlaceholder({ caption, tall }) {
  return (
    <figure style={{ margin: 0 }}>
      <div style={{ position: "relative", aspectRatio: tall ? "3/4" : "16/10", border: "2px solid var(--ink)", boxShadow: "4px 4px 0 var(--shadow)", background: "repeating-linear-gradient(135deg, var(--accent-soft) 0 10px, var(--surface) 10px 20px)", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden" }}>
        <span style={{ fontFamily: "ui-monospace, monospace", fontSize: 12, color: "var(--ink-soft)", background: "var(--surface)", padding: "5px 10px", border: "1px dashed var(--border)" }}>
          screenshot · {caption}
        </span>
      </div>
    </figure>);

}

Object.assign(window, { PixelArt, Sprite, MascotAsset, BrandMascot, SPRITES, PixelEdge, PixelStair, Btn, StatusBadge, PlatformChip, Header, Footer, NavLink, LangSwitch, ThemeToggle, ShotPlaceholder });
