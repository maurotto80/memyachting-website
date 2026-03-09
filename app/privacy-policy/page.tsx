//app/privacy-policy/page.tsx

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
            Il titolare del trattamento dei dati è <strong>M & M Yachting</strong>.
            Per qualsiasi richiesta relativa alla privacy è possibile contattarci a:
            <br />
            <strong>info@memyachting.com</strong>
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">2. Dati raccolti</h2>
          <p>
            Durante l'utilizzo dell'applicazione possiamo raccogliere alcune
            informazioni personali necessarie per fornire i servizi di prenotazione
            e gestione delle imbarcazioni.
          </p>

          <p className="mt-2">
            I dati raccolti possono includere:
          </p>

          <ul className="list-disc ml-6 mt-2 space-y-1 opacity-90">
            <li>Nome e cognome</li>
            <li>Indirizzo email</li>
            <li>Numero di telefono</li>
            <li>Dati relativi alle prenotazioni effettuate</li>
          </ul>

          <p className="mt-3">
            Alcuni dati aggiuntivi come indirizzo, città, CAP o luogo di nascita
            possono essere richiesti solo quando necessario per completare
            una prenotazione o per finalità contrattuali.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">3. Finalità del trattamento</h2>
          <p>I dati personali vengono trattati esclusivamente per:</p>

          <ul className="list-disc ml-6 mt-2 space-y-1 opacity-90">
            <li>creare e gestire l’account utente</li>
            <li>gestire le prenotazioni delle imbarcazioni</li>
            <li>fornire assistenza clienti</li>
            <li>inviare comunicazioni relative alle prenotazioni</li>
            <li>adempiere agli obblighi legali</li>
            <li>migliorare il funzionamento dell'applicazione</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">4. Condivisione dei dati</h2>
          <p>
            I dati personali non vengono venduti o ceduti a terzi.
          </p>

          <p className="mt-2">
            Alcune informazioni possono essere condivise esclusivamente quando
            necessario per l’erogazione del servizio, ad esempio con:
          </p>

          <ul className="list-disc ml-6 mt-2 space-y-1 opacity-90">
            <li>operatori o proprietari delle imbarcazioni coinvolte nella prenotazione</li>
            <li>fornitori di servizi tecnici (hosting e infrastruttura)</li>
            <li>autorità competenti quando richiesto dalla legge</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">5. Conservazione dei dati</h2>
          <p>
            I dati personali vengono conservati solo per il tempo necessario
            a fornire i servizi richiesti e per adempiere agli obblighi
            normativi e fiscali previsti dalla legge.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">6. Sicurezza</h2>
          <p>
            Adottiamo misure tecniche e organizzative adeguate per proteggere
            i dati personali da accessi non autorizzati, perdita o utilizzo improprio.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">7. Diritti dell’utente</h2>
          <p>
            In conformità al Regolamento Europeo GDPR, gli utenti hanno il diritto di:
          </p>

          <ul className="list-disc ml-6 mt-2 space-y-1 opacity-90">
            <li>accedere ai propri dati personali</li>
            <li>richiederne la modifica o l’aggiornamento</li>
            <li>richiederne la cancellazione</li>
            <li>limitare o opporsi al trattamento</li>
            <li>richiedere la portabilità dei dati</li>
          </ul>

          <p className="mt-3">
            Per esercitare questi diritti è possibile scrivere a:
            <br />
            <strong>info@memyachting.com</strong>
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">8. Cancellazione account</h2>
          <p>
            Gli utenti possono richiedere la cancellazione del proprio account
            e dei dati associati contattandoci all’indirizzo email indicato.
            I dati verranno eliminati salvo obblighi legali di conservazione.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-2">9. Minori</h2>
          <p>
            Il servizio non è destinato a utenti di età inferiore ai 18 anni.
            Non raccogliamo consapevolmente dati personali di minori.
          </p>
        </section>

      </div>
    </div>
  );
}