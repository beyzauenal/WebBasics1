export default function App() {
  return (
    <div className="min-h-screen bg-[#0B0F19] text-white">
      {/* Background glow */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -top-40 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-gradient-to-tr from-fuchsia-500/25 via-sky-500/20 to-emerald-400/20 blur-3xl" />
        <div className="absolute -bottom-48 right-[-120px] h-[560px] w-[560px] rounded-full bg-gradient-to-tr from-sky-500/18 via-purple-500/18 to-pink-500/18 blur-3xl" />
      </div>

      {/* Topbar */}
      <header className="sticky top-0 z-30 border-b border-white/10 bg-[#0B0F19]/70 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
          <div className="flex items-center gap-3">
            <div className="grid h-11 w-11 place-items-center rounded-2xl bg-white/10 ring-1 ring-white/10">
              <span className="text-sm font-semibold tracking-wide">AX</span>
            </div>
            <div className="leading-tight">
              <div className="text-xs text-white/60">HTL · Web Basics</div>
              <h1 className="text-lg font-semibold tracking-tight">
                Autix Konfigurator
              </h1>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <span className="hidden rounded-full bg-white/5 px-3 py-1 text-xs text-white/70 ring-1 ring-white/10 sm:inline">
              Sprint: In Progress
            </span>

            <button className="rounded-xl bg-white/10 px-4 py-2 text-sm font-medium text-white ring-1 ring-white/10 hover:bg-white/15 active:scale-[0.99]">
              Speichern
            </button>

            <button className="rounded-xl bg-white px-4 py-2 text-sm font-semibold text-[#0B0F19] hover:bg-white/90 active:scale-[0.99]">
              Reset
            </button>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="relative mx-auto grid max-w-6xl gap-4 px-4 py-6 lg:grid-cols-12">
        {/* Sidebar */}
        <aside className="lg:col-span-3">
          <div className="rounded-3xl bg-white/5 p-3 ring-1 ring-white/10 backdrop-blur-xl">
            <div className="mb-3 px-2 text-xs font-semibold uppercase tracking-wider text-white/60">
              Konfiguration
            </div>

            <nav className="space-y-2">
              {/* Active */}
              <button className="group w-full rounded-2xl bg-gradient-to-r from-white/12 to-white/6 px-4 py-3 text-left ring-1 ring-white/10 hover:from-white/15 hover:to-white/8">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="grid h-9 w-9 place-items-center rounded-xl bg-white/10 ring-1 ring-white/10">
                      🚘
                    </span>
                    <div>
                      <div className="text-sm font-semibold">Modell</div>
                      <div className="text-xs text-white/60">Basis wählen</div>
                    </div>
                  </div>
                  <span className="rounded-full bg-white/10 px-2 py-1 text-[11px] text-white/70 ring-1 ring-white/10">
                    aktiv
                  </span>
                </div>
              </button>

              <button className="group w-full rounded-2xl bg-white/5 px-4 py-3 text-left ring-1 ring-white/10 hover:bg-white/8">
                <div className="flex items-center gap-3">
                  <span className="grid h-9 w-9 place-items-center rounded-xl bg-white/10 ring-1 ring-white/10">
                    🎨
                  </span>
                  <div>
                    <div className="text-sm font-semibold">Farbe</div>
                    <div className="text-xs text-white/60">Lack & Finish</div>
                  </div>
                </div>
              </button>

              <button className="group w-full rounded-2xl bg-white/5 px-4 py-3 text-left ring-1 ring-white/10 hover:bg-white/8">
                <div className="flex items-center gap-3">
                  <span className="grid h-9 w-9 place-items-center rounded-xl bg-white/10 ring-1 ring-white/10">
                    🛞
                  </span>
                  <div>
                    <div className="text-sm font-semibold">Felgen</div>
                    <div className="text-xs text-white/60">Style & Größe</div>
                  </div>
                </div>
              </button>

              <button className="group w-full rounded-2xl bg-white/5 px-4 py-3 text-left ring-1 ring-white/10 hover:bg-white/8">
                <div className="flex items-center gap-3">
                  <span className="grid h-9 w-9 place-items-center rounded-xl bg-white/10 ring-1 ring-white/10">
                    ✅
                  </span>
                  <div>
                    <div className="text-sm font-semibold">Summary</div>
                    <div className="text-xs text-white/60">Überblick</div>
                  </div>
                </div>
              </button>
            </nav>

            <div className="mt-4 rounded-2xl bg-white/5 p-3 ring-1 ring-white/10">
              <div className="text-xs font-semibold text-white/70">
                Nächster Schritt
              </div>
              <div className="mt-1 text-xs text-white/60">
                Tabs + State verbinden (Modell/Farbe/Felgen).
              </div>
            </div>
          </div>
        </aside>

        {/* Center Preview */}
        <section className="lg:col-span-6">
          <div className="rounded-3xl bg-white/5 p-4 ring-1 ring-white/10 backdrop-blur-xl">
            <div className="mb-3 flex items-center justify-between">
              <div>
                <div className="text-xs font-semibold uppercase tracking-wider text-white/60">
                  Live Preview
                </div>
                <h2 className="mt-1 text-lg font-semibold tracking-tight">
                  Dein Auto im Showroom
                </h2>
              </div>

              <span className="rounded-full bg-emerald-400/15 px-3 py-1 text-xs text-emerald-200 ring-1 ring-emerald-300/20">
                Live
              </span>
            </div>

            {/* Showroom */}
            <div className="relative overflow-hidden rounded-3xl ring-1 ring-white/10">
              <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-white/0 to-white/5" />
              <div className="absolute -left-24 -top-24 h-64 w-64 rounded-full bg-sky-500/15 blur-3xl" />
              <div className="absolute -right-24 -bottom-24 h-64 w-64 rounded-full bg-fuchsia-500/15 blur-3xl" />

              <div className="relative grid place-items-center px-6 py-12">
                <div className="grid w-full max-w-lg gap-4">
                  <div className="rounded-3xl bg-white/5 p-8 ring-1 ring-white/10">
                    <div className="text-center">
                      <div className="text-4xl">🚗</div>
                      <div className="mt-3 text-xl font-semibold">
                        Auto Preview
                      </div>
                      <div className="mt-1 text-sm text-white/60">
                        (Hier später Auto-Bild / SVG / 3D Viewer)
                      </div>

                      <div className="mt-6 flex flex-wrap justify-center gap-2">
                        <span className="rounded-full bg-white/5 px-3 py-1 text-xs text-white/70 ring-1 ring-white/10">
                          Modell: Standard
                        </span>
                        <span className="rounded-full bg-white/5 px-3 py-1 text-xs text-white/70 ring-1 ring-white/10">
                          Farbe: —
                        </span>
                        <span className="rounded-full bg-white/5 px-3 py-1 text-xs text-white/70 ring-1 ring-white/10">
                          Felgen: —
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* mini cards */}
                  <div className="grid gap-3 sm:grid-cols-2">
                    <div className="rounded-2xl bg-white/5 p-4 ring-1 ring-white/10">
                      <div className="text-xs text-white/60">Aktiv</div>
                      <div className="mt-1 text-sm font-semibold">
                        Modell auswählen
                      </div>
                    </div>
                    <div className="rounded-2xl bg-white/5 p-4 ring-1 ring-white/10">
                      <div className="text-xs text-white/60">Hinweis</div>
                      <div className="mt-1 text-sm font-semibold">
                        Preis wird automatisch berechnet
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Right Price Panel */}
        <aside className="lg:col-span-3">
          <div className="rounded-3xl bg-white/5 p-4 ring-1 ring-white/10 backdrop-blur-xl">
            <div className="flex items-start justify-between">
              <div>
                <div className="text-xs font-semibold uppercase tracking-wider text-white/60">
                  Preis
                </div>
                <h2 className="mt-1 text-lg font-semibold tracking-tight">
                  Kalkulation
                </h2>
              </div>
              <span className="grid h-10 w-10 place-items-center rounded-2xl bg-white/10 ring-1 ring-white/10">
                €
              </span>
            </div>

            <div className="mt-4 space-y-3">
              <div className="rounded-2xl bg-white/5 p-4 ring-1 ring-white/10">
                <div className="text-xs text-white/60">Basis</div>
                <div className="mt-1 text-2xl font-semibold">€ 25.000</div>
              </div>

              <div className="rounded-2xl bg-white/5 p-4 ring-1 ring-white/10">
                <div className="text-xs text-white/60">Optionen</div>
                <div className="mt-1 text-2xl font-semibold">€ 0</div>
              </div>

              <div className="rounded-2xl bg-gradient-to-r from-white to-white/85 p-4 text-[#0B0F19]">
                <div className="text-xs font-semibold text-black/60">
                  Gesamt
                </div>
                <div className="mt-1 text-2xl font-bold">€ 25.000</div>
              </div>
            </div>

            <div className="mt-4 rounded-2xl bg-white/5 p-4 ring-1 ring-white/10">
              <div className="text-xs font-semibold text-white/70">
                Schnell-Auswahl
              </div>

              <div className="mt-3 flex flex-wrap gap-2">
                <button className="rounded-xl bg-white/10 px-3 py-2 text-sm font-medium ring-1 ring-white/10 hover:bg-white/15 active:scale-[0.99]">
                  Sport
                </button>
                <button className="rounded-xl bg-white/10 px-3 py-2 text-sm font-medium ring-1 ring-white/10 hover:bg-white/15 active:scale-[0.99]">
                  Rot
                </button>
                <button className="rounded-xl bg-white/10 px-3 py-2 text-sm font-medium ring-1 ring-white/10 hover:bg-white/15 active:scale-[0.99]">
                  20"
                </button>
              </div>
            </div>

            <p className="mt-4 text-xs text-white/50">
              Next: Buttons mit State verbinden + Summary-Panel.
            </p>
          </div>
        </aside>

        {/* Footer */}
        <section className="lg:col-span-12">
          <div className="rounded-3xl bg-white/5 p-4 text-sm text-white/70 ring-1 ring-white/10">
            <span className="font-semibold text-white">Autix</span> · React +
            Tailwind · Modern UI · HTL
          </div>
        </section>
      </main>
    </div>
  );
}