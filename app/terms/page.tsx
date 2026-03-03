export const metadata = {
  title: "Termini e Condizioni | M & M Yachting",
  description:
    "Termini e condizioni di utilizzo dei servizi di noleggio yacht di M & M Yachting.",
};

export default function Terms() {
  return (
    <div className="min-h-screen bg-black text-white px-6 py-16">
      <div className="max-w-4xl mx-auto space-y-8">

        <h1 className="text-3xl font-light tracking-widest">
          Termini e Condizioni
        </h1>

        <section>
          <h2 className="text-xl font-semibold mb-2">1. Oggetto del servizio</h2>
          <p>
            M & M Yachting offre servizi di noleggio imbarcazioni
            nel Golfo di Napoli e Costiera Amalfitana.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">2. Prenotazioni</h2>
          <p>
            Le prenotazioni sono soggette a disponibilità.
            Il cliente riceverà conferma via email.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">3. Pagamenti</h2>
          <p>
            I pagamenti devono essere effettuati secondo le modalità indicate
            al momento della prenotazione.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">4. Responsabilità</h2>
          <p>
            Il cliente è responsabile dell’utilizzo corretto dell’imbarcazione
            durante il periodo di noleggio.
          </p>
        </section>

      </div>
    </div>
  );
}