//app/terms/page.tsx

export const metadata = {
  title: "Termini e Condizioni | M & M Yachting",
  description:
    "Termini e condizioni di utilizzo dei servizi di noleggio imbarcazioni di M & M Yachting.",
};

export default function Terms() {
  return (
    <div className="min-h-screen bg-black text-white px-6 py-16">
      <div className="max-w-4xl mx-auto space-y-8">

        <h1 className="text-3xl font-light tracking-widest">
          Termini e Condizioni
        </h1>

        <p className="text-sm opacity-70">
          Ultimo aggiornamento: {new Date().toLocaleDateString("it-IT")}
        </p>

        <section>
          <h2 className="text-xl font-semibold mb-2">1. Oggetto del servizio</h2>
          <p>
            M & M Yachting offre servizi di prenotazione e noleggio di
            imbarcazioni da diporto nel Golfo di Napoli, Capri,
            Costiera Amalfitana e aree limitrofe.
          </p>
          <p className="mt-2">
            Attraverso l'applicazione e il sito web gli utenti possono
            consultare le imbarcazioni disponibili, verificare le
            disponibilità e richiedere una prenotazione.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">2. Creazione account</h2>
          <p>
            Per utilizzare alcune funzionalità del servizio può essere
            richiesta la creazione di un account personale.
          </p>
          <p className="mt-2">
            L'utente è responsabile della veridicità dei dati forniti e
            della sicurezza delle proprie credenziali di accesso.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">3. Procedura di prenotazione</h2>
          <p>
            L’utente può richiedere la prenotazione di un’imbarcazione
            selezionando la data e il servizio desiderato.
          </p>

          <p className="mt-2">
            La procedura di prenotazione avviene nelle seguenti fasi:
          </p>

          <ul className="list-disc ml-6 mt-3 space-y-2 opacity-90">
            <li>
              invio della richiesta di prenotazione tramite l'applicazione
            </li>
            <li>
              verifica della disponibilità e invio della conferma da parte
              di M & M Yachting
            </li>
            <li>
              eventuale completamento dei dati necessari alla stipula
              del contratto di noleggio
            </li>
            <li>
              firma del contratto digitale tramite sistema di verifica OTP
              (One Time Password)
            </li>
          </ul>

          <p className="mt-3">
            La prenotazione si considera completata solo dopo la firma
            del contratto di noleggio e la conferma finale da parte di
            M & M Yachting.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">4. Contratto di noleggio</h2>
          <p>
            Il contratto di noleggio definisce le condizioni specifiche
            relative all’utilizzo dell’imbarcazione, inclusi durata,
            costi, responsabilità e eventuali limitazioni.
          </p>

          <p className="mt-2">
            Il contratto viene firmato digitalmente dall’utente tramite
            un sistema di verifica OTP inviato al numero di telefono
            o indirizzo email associato all’account.
          </p>

          <p className="mt-2">
            La firma digitale tramite OTP equivale ad accettazione
            formale del contratto.
          </p>
        </section>

        <section>
  <h2 className="text-xl font-semibold mb-2">5. Conferma della prenotazione</h2>

  <p>
    Dopo la richiesta di prenotazione, M & M Yachting verificherà la
    disponibilità dell’imbarcazione e invierà all’utente una conferma.
  </p>

  <p className="mt-2">
    Per completare la prenotazione potrebbe essere richiesto
    il completamento dei dati necessari alla stipula del
    contratto di noleggio.
  </p>

  <p className="mt-2">
    Una volta firmato il contratto tramite sistema di verifica OTP
    (One Time Password), la prenotazione sarà considerata completata.
  </p>

  <p className="mt-2">
    Eventuali condizioni economiche, modalità di pagamento o
    ulteriori dettagli relativi al noleggio saranno indicati
    nel contratto di noleggio o comunicati direttamente
    all’utente durante il processo di prenotazione.
  </p>
</section>

        <section>
          <h2 className="text-xl font-semibold mb-2">6. Responsabilità dell’utente</h2>
          <p>
            L’utente si impegna a utilizzare l’imbarcazione nel rispetto
            delle normative vigenti e delle condizioni stabilite nel
            contratto di noleggio.
          </p>

          <p className="mt-2">
            L’utente è responsabile di eventuali danni causati
            dall’utilizzo improprio dell’imbarcazione durante il
            periodo di noleggio.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">7. Limitazione di responsabilità</h2>
          <p>
            M & M Yachting non potrà essere ritenuta responsabile
            per eventuali interruzioni del servizio dovute a cause
            di forza maggiore, condizioni meteo avverse o
            circostanze fuori dal proprio controllo.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">8. Modifiche ai termini</h2>
          <p>
            M & M Yachting si riserva il diritto di modificare
            i presenti Termini e Condizioni in qualsiasi momento.
          </p>

          <p className="mt-2">
            Eventuali modifiche saranno pubblicate su questa pagina
            e diventeranno efficaci dalla data di aggiornamento.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">9. Contatti</h2>
          <p>
            Per qualsiasi informazione relativa ai presenti
            Termini e Condizioni è possibile contattare:
          </p>

          <p className="mt-2">
            <strong>M & M Yachting</strong>
            <br />
            Email: info@memyachting.com
            <br />
            Website: https://memyachting.com
          </p>
        </section>

      </div>
    </div>
  );
}