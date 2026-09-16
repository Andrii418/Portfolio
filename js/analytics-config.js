/**
 * Konfiguracja analityki portfolio.
 *
 * TRYB LOKALNY (domyślny): dane w localStorage — działa od razu, idealny do testów.
 * Admin czyta te same dane w tej samej przeglądarce / origin.
 *
 * TRYB SUPABASE (produkcja, wielu odwiedzających):
 * 1. Utwórz projekt na https://supabase.com
 * 2. Uruchom SQL z pliku js/supabase-schema.sql w SQL Editor
 * 3. Wklej URL i anon key poniżej
 * 4. Ustaw storageMode: 'supabase'
 */
window.PORTFOLIO_ANALYTICS_CONFIG = {
  storageMode: 'local', // 'local' | 'supabase'

  supabaseUrl: '',
  supabaseAnonKey: '',

  /** Kontakt do wykrywania kopiowania (lead) */
  trackedContacts: [
    'andrewtorianyk@gmail.com',
    'jan@kowalski.dev'
  ],

  /** Maks. zdarzeń trzymanych lokalnie */
  localEventLimit: 2000,

  /** Interwał zapisu aktywnego czasu (ms) */
  activeTimeIntervalMs: 5000
};
