/**
 * Compteur de cafés — Google Apps Script
 *
 * 1. Allez sur https://script.google.com et créez un nouveau projet.
 * 2. Collez ce code, puis Enregistrer.
 * 3. Déployer > Nouveau déploiement > Application Web.
 *    - "Exécuter en tant que" : Moi
 *    - "Personnes ayant accès" : Tout le monde
 * 4. Copiez l'URL se terminant par /exec.
 * 5. Collez-la dans .env.local (GOOGLE_SHEET_WEBAPP_URL)
 *    et dans les variables d'environnement de Vercel.
 *
 * L'URL /dev de test ne fonctionne que pour vous ;
 * seule l'URL /exec est utilisable par le site.
 */

const PROPERTY_KEY = 'COFFEE_COUNT';

function doGet() {
  return jsonResponse(getCount());
}

function doPost(e) {
  let count = getCount();
  try {
    const body = JSON.parse(e?.postData?.contents || '{}');
    if (body.action === 'increment') {
      count++;
      setCount(count);
    }
  } catch (err) {
    return jsonResponse({ count, error: String(err) });
  }
  return jsonResponse(count);
}

function getCount() {
  const raw = PropertiesService.getScriptProperties().getProperty(PROPERTY_KEY);
  const num = Number(raw);
  return Number.isFinite(num) ? num : 0;
}

function setCount(n) {
  PropertiesService.getScriptProperties().setProperty(PROPERTY_KEY, String(n));
}

function jsonResponse(payload) {
  return ContentService.createTextOutput(JSON.stringify({ count: payload.count ?? 0 }))
    .setMimeType(ContentService.MimeType.JSON);
}