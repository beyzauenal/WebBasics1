export default function App() {
  const models = [
    {
      name: "Limousinen",
      text: "Elegante Modelle für Alltag und Komfort",
      image:
        "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80",
    },
    {
      name: "SUV & Geländewagen",
      text: "Mehr Präsenz, mehr Raum, mehr Überblick",
      image:
        "https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=1200&q=80",
    },
    {
      name: "Kompaktklasse",
      text: "Modern, urban und sportlich",
      image:
        "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80",
    },
  ];

  const userStories = [
    "Als Nutzer möchte ich eine Startseite sehen, um die Website zu verstehen.",
    "Als Nutzer möchte ich ein Automodell auswählen können, um es zu konfigurieren.",
    "Als Nutzer möchte ich zwischen den Bereichen Farbe, Felgen und Licht wechseln können.",
    "Als Nutzer möchte ich meine aktuelle Auswahl jederzeit sehen können.",
    "Als Nutzer möchte ich meine Konfiguration zurücksetzen können.",
    "Als Nutzer möchte ich den Preis automatisch berechnet bekommen.",
    "Als Nutzer möchte ich eine Zusammenfassung meiner Konfiguration sehen.",
    "Als Nutzer möchte ich meine Konfiguration speichern können.",
    "Als Nutzer möchte ich die Website auf Handy und Desktop nutzen können.",
    "Als Nutzer möchte ich eine einfache und übersichtliche Bedienung haben.",
  ];

  return (
    <div className="min-h-screen bg-[#111111] text-white">
      {/* Header */}
      <header className="border-b border-white/10 bg-[#0d0d0d]">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <div>
            <p className="text-xs uppercase tracking-[0.28em] text-white/40">
              Autix
            </p>
            <h1 className="mt-1 text-2xl font-semibold tracking-tight">
              Fahrzeugkonfigurator
            </h1>
          </div>

          <div className="hidden items-center gap-3 md:flex">
            <button className="border border-white/15 px-4 py-2 text-sm text-white/80 transition hover:bg-white hover:text-black">
              Speichern
            </button>
            <button className="border border-white/15 px-4 py-2 text-sm text-white/80 transition hover:bg-white/10">
              Reset
            </button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="border-b border-white/10 bg-gradient-to-r from-[#0f0f0f] via-[#1a1a1a] to-[#202020]">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 py-14 lg:grid-cols-2">
          <div>
            <p className="text-sm uppercase tracking-[0.25em] text-white/45">
              Startseite
            </p>
            <h2 className="mt-3 max-w-xl text-4xl font-semibold leading-tight md:text-5xl">
              Konfiguriere dein Fahrzeug einfach, modern und übersichtlich.
            </h2>
            <p className="mt-5 max-w-lg text-base leading-7 text-white/65">
              Wähle ein Modell, passe Farbe, Felgen und Licht an und behalte
              Preis sowie Zusammenfassung jederzeit im Blick.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <button className="bg-white px-5 py-3 text-sm font-semibold text-black transition hover:bg-white/90">
                Modell auswählen
              </button>
              <button className="border border-white/15 px-5 py-3 text-sm text-white transition hover:bg-white/10">
                Mehr erfahren
              </button>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 rounded-sm bg-gradient-to-r from-transparent via-white/5 to-transparent" />
            <img
              src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=1400&q=80"
              alt="Auto"
              className="h-[280px] w-full object-cover object-center shadow-2xl md:h-[380px]"
            />
          </div>
        </div>
      </section>

      {/* Model Selection */}
      <section className="mx-auto max-w-7xl px-6 py-10">
        <div className="mb-6 flex items-end justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.25em] text-white/45">
              Modelle
            </p>
            <h3 className="mt-2 text-3xl font-semibold tracking-tight">
              Automodell auswählen
            </h3>
          </div>
        </div>

        <div className="space-y-6">
          {models.map((model, index) => (
            <div
              key={index}
              className="group relative overflow-hidden border border-white/10 bg-[#181818]"
            >
              <div className="grid min-h-[250px] items-center lg:grid-cols-[1.1fr_1fr]">
                <div className="z-10 p-8 md:p-10">
                  <p className="text-sm text-white/55">Modell entdecken</p>
                  <h4 className="mt-2 text-3xl font-semibold md:text-4xl">
                    {model.name}
                  </h4>
                  <p className="mt-3 max-w-md text-sm leading-6 text-white/65">
                    {model.text}
                  </p>

                  <button className="mt-6 border border-white/15 px-5 py-3 text-sm font-medium text-white transition hover:bg-white hover:text-black">
                    Konfigurieren
                  </button>
                </div>

                <div className="relative h-[250px] lg:h-full">
                  <img
                    src={model.image}
                    alt={model.name}
                    className="absolute inset-0 h-full w-full object-cover opacity-90 transition duration-500 group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-[#181818] via-[#181818]/65 to-transparent lg:from-transparent lg:via-transparent lg:to-[#181818]/10" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Configurator Layout */}
      <section className="border-t border-white/10 bg-[#141414]">
        <div className="mx-auto grid max-w-7xl gap-6 px-6 py-10 lg:grid-cols-12">
          {/* Left Navigation */}
          <aside className="lg:col-span-3">
            <div className="border border-white/10 bg-[#1a1a1a] p-4">
              <p className="text-sm uppercase tracking-[0.25em] text-white/45">
                Bereiche
              </p>

              <div className="mt-4 space-y-2">
                <button className="w-full border border-white bg-white px-4 py-4 text-left text-black">
                  <div className="text-sm font-semibold">Modell</div>
                  <div className="text-xs text-black/60">Fahrzeugbasis</div>
                </button>

                <button className="w-full border border-white/10 px-4 py-4 text-left text-white transition hover:bg-white/5">
                  <div className="text-sm font-semibold">Farbe</div>
                  <div className="text-xs text-white/50">Lack auswählen</div>
                </button>

                <button className="w-full border border-white/10 px-4 py-4 text-left text-white transition hover:bg-white/5">
                  <div className="text-sm font-semibold">Felgen</div>
                  <div className="text-xs text-white/50">Design & Größe</div>
                </button>

                <button className="w-full border border-white/10 px-4 py-4 text-left text-white transition hover:bg-white/5">
                  <div className="text-sm font-semibold">Licht</div>
                  <div className="text-xs text-white/50">Lichtpakete</div>
                </button>

                <button className="w-full border border-white/10 px-4 py-4 text-left text-white transition hover:bg-white/5">
                  <div className="text-sm font-semibold">Zusammenfassung</div>
                  <div className="text-xs text-white/50">Alles im Überblick</div>
                </button>
              </div>
            </div>
          </aside>

          {/* Main Preview */}
          <main className="lg:col-span-6">
            <div className="border border-white/10 bg-[#1a1a1a] p-5">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div>
                  <p className="text-sm uppercase tracking-[0.25em] text-white/45">
                    Aktuelle Auswahl
                  </p>
                  <h3 className="mt-2 text-2xl font-semibold">
                    Dein Fahrzeug
                  </h3>
                </div>

                <span className="border border-white/10 px-3 py-1 text-xs text-white/60">
                  Live Preview
                </span>
              </div>

              <div className="mt-5 overflow-hidden border border-white/10 bg-[#111111]">
                <img
                  src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1400&q=80"
                  alt="Preview Auto"
                  className="h-[300px] w-full object-cover md:h-[420px]"
                />
              </div>

              <div className="mt-5 grid gap-3 sm:grid-cols-3">
                <div className="border border-white/10 bg-[#151515] p-4">
                  <p className="text-xs text-white/45">Modell</p>
                  <p className="mt-1 text-sm font-semibold">Limousine</p>
                </div>
                <div className="border border-white/10 bg-[#151515] p-4">
                  <p className="text-xs text-white/45">Farbe</p>
                  <p className="mt-1 text-sm font-semibold">Schwarz Metallic</p>
                </div>
                <div className="border border-white/10 bg-[#151515] p-4">
                  <p className="text-xs text-white/45">Felgen</p>
                  <p className="mt-1 text-sm font-semibold">20 Zoll Sport</p>
                </div>
              </div>
            </div>
          </main>

          {/* Price + Summary */}
          <aside className="lg:col-span-3">
            <div className="space-y-6">
              <div className="border border-white/10 bg-[#1a1a1a] p-4">
                <p className="text-sm uppercase tracking-[0.25em] text-white/45">
                  Preis
                </p>
                <div className="mt-4 space-y-3">
                  <div className="border border-white/10 bg-[#151515] p-4">
                    <p className="text-xs text-white/45">Basispreis</p>
                    <p className="mt-1 text-2xl font-semibold">€ 52.000</p>
                  </div>
                  <div className="border border-white/10 bg-[#151515] p-4">
                    <p className="text-xs text-white/45">Optionen</p>
                    <p className="mt-1 text-2xl font-semibold">€ 6.500</p>
                  </div>
                  <div className="bg-white p-4 text-black">
                    <p className="text-xs text-black/55">Gesamtpreis</p>
                    <p className="mt-1 text-2xl font-bold">€ 58.500</p>
                  </div>
                </div>
              </div>

              <div className="border border-white/10 bg-[#1a1a1a] p-4">
                <p className="text-sm uppercase tracking-[0.25em] text-white/45">
                  Aktionen
                </p>

                <div className="mt-4 space-y-3">
                  <button className="w-full bg-white px-4 py-3 text-sm font-semibold text-black transition hover:bg-white/90">
                    Konfiguration speichern
                  </button>
                  <button className="w-full border border-white/10 px-4 py-3 text-sm text-white transition hover:bg-white/5">
                    Zusammenfassung ansehen
                  </button>
                  <button className="w-full border border-white/10 px-4 py-3 text-sm text-white transition hover:bg-white/5">
                    Zurücksetzen
                  </button>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* User Stories / Requirements */}
      <section className="border-t border-white/10 bg-[#111111]">
        <div className="mx-auto max-w-7xl px-6 py-10">
          <p className="text-sm uppercase tracking-[0.25em] text-white/45">
            Anforderungen
          </p>
          <h3 className="mt-2 text-3xl font-semibold tracking-tight">
            User Stories
          </h3>

          <div className="mt-8 grid gap-4 lg:grid-cols-2">
            {userStories.map((story, index) => (
              <div
                key={index}
                className="flex items-start gap-4 border border-white/10 bg-[#181818] p-4"
              >
                <div className="mt-1 h-5 w-5 border border-white/70" />
                <p className="text-lg leading-8 text-white/85">{story}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-[#0d0d0d]">
        <div className="mx-auto max-w-7xl px-6 py-5 text-sm text-white/45">
          Autix · HTML Grundlayout · modern · responsive · übersichtlich
        </div>
      </footer>
    </div>
  );
}