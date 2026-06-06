// app.jsx — root: routing + locale + theme
const { useState: useStateA, useEffect: useEffectA } = React;

const SITE_CONFIG = {
  heroVariant: "A",
  cardVariant: "B",
  accent: "#cc6b4e",
  pixelEdges: "on"
};

function Root() {
  const [locale, setLocale] = useStateA("vi");
  const [route, setRoute] = useStateA("home"); // "home" | "fphoto"
  const [theme, setTheme] = useStateA("light"); // "light" | "dark"

  useEffectA(() => {
    const sl = localStorage.getItem("tunglab_locale");
    if (sl === "vi" || sl === "en") setLocale(sl);
    const th = localStorage.getItem("tunglab_theme");
    if (th === "light" || th === "dark") setTheme(th);
  }, []);
  useEffectA(() => { localStorage.setItem("tunglab_locale", locale); document.documentElement.lang = locale; }, [locale]);
  useEffectA(() => { localStorage.setItem("tunglab_theme", theme); document.documentElement.setAttribute("data-theme", theme); }, [theme]);

  const str = STRINGS[locale];
  const toggleTheme = () => setTheme((x) => (x === "dark" ? "light" : "dark"));

  const onNav = (r, anchor) => {
    if (r !== route) {
      setRoute(r);
      window.scrollTo({ top: 0 });
      if (anchor) setTimeout(() => scrollToId(anchor), 60);
    } else if (anchor) {
      scrollToId(anchor);
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const fphoto = APPS.find((a) => a.id === "fphoto");
  const accent = SITE_CONFIG.accent;

  return (
    <div style={{ "--accent": accent }}>
      <Header locale={locale} setLocale={setLocale} t={str} onNav={onNav} route={route} theme={theme} toggleTheme={toggleTheme} />
      {route === "home"
        ? <Home heroVariant={SITE_CONFIG.heroVariant} cardVariant={SITE_CONFIG.cardVariant} locale={locale} t={str} onNav={onNav} pixel={SITE_CONFIG.pixelEdges} theme={theme} />
        : <Detail app={fphoto} locale={locale} t={str} onNav={onNav} theme={theme} />}
      <Footer t={str} onNav={onNav} edgeAlign={route === "home" ? "content" : "center"} theme={theme} />
    </div>
  );
}

function scrollToId(id) {
  const el = document.getElementById(id);
  if (el) {
    const headerHeight = document.querySelector("[data-site-header]")?.offsetHeight || 64;
    const y = el.getBoundingClientRect().top + window.scrollY - headerHeight - 12;
    window.scrollTo({ top: y, behavior: "smooth" });
  }
}

ReactDOM.createRoot(document.getElementById("root")).render(<Root />);
