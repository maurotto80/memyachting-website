export const metadata = {
  title: "Privacy Policy | M & M Yachting",
  description:
    "Informativa sulla privacy di M & M Yachting. Scopri come raccogliamo, utilizziamo e proteggiamo i tuoi dati personali.",
};

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-black text-white px-6 py-16">
      <div className="max-w-4xl mx-auto space-y-8">

        <h1 className="text-3xl font-light tracking-widest">
          Privacy Policy
        </h1>

        <p className="text-sm opacity-70">
          Ultimo aggiornamento: {new Date().toLocaleDateString("it-IT")}
        </p>

        <section>
          <h2 className="text-xl font-semibold mb-2">1. Titolare del trattamento</h2>
          <p>
            Il titolare del trattamento è M & M Yachting,
            con sede operativa nel Golfo di Napoli.
            Per qualsiasi richiesta: info@memyachting.com
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">2. Dati raccolti</h2>
          <p>
            Possiamo raccogliere dati personali quali nome, cognome, email,
            numero di telefono e dati relativi alle prenotazioni effettuate.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">3. Finalità del trattamento</h2>
          <p>
            I dati vengono utilizzati esclusivamente per:
            gestione prenotazioni,
            assistenza clienti,
            comunicazioni operative,
            adempimenti legali.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">4. Conservazione dei dati</h2>
          <p>
            I dati sono conservati per il tempo necessario a fornire il servizio
            e adempiere agli obblighi di legge.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">5. Diritti dell’utente</h2>
          <p>
            L’utente può richiedere accesso, modifica o cancellazione dei propri dati
            scrivendo a info@memyachting.com.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">6. Sicurezza</h2>
          <p>
            Adottiamo misure tecniche e organizzative adeguate
            per proteggere i dati personali.
          </p>
        </section>

      </div>
    </div>
  );
}