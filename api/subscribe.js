export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { email } = req.body;
  if (!email || !email.includes('@')) {
    return res.status(400).json({ error: 'Adresse email invalide.' });
  }

  const brevoApiKey = process.env.BREVO_API_KEY;
  if (!brevoApiKey) {
    return res.status(500).json({ error: 'Clé API Brevo non configurée.' });
  }

  try {
    // Ajouter le contact dans Brevo (crée le contact s'il n'existe pas)
    const response = await fetch('https://api.brevo.com/v3/contacts', {
      method: 'POST',
      headers: {
        'api-key': brevoApiKey,
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({
        email: email,
        listIds: [2], // Liste par défaut Brevo (ID 2 = "Newsletter")
        updateEnabled: true, // Si déjà existant, on met à jour sans erreur
        attributes: {
          SOURCE: 'Newsletter GSI Site Web',
        },
      }),
    });

    // 204 = déjà existant mis à jour, 201 = nouveau contact créé
    if (response.status === 201 || response.status === 204) {
      return res.status(200).json({ success: true });
    }

    const data = await response.json();

    // Code 'duplicate_parameter' = contact déjà abonné → on considère succès
    if (data.code === 'duplicate_parameter') {
      return res.status(200).json({ success: true });
    }

    console.error('Brevo subscribe error:', data);
    return res.status(500).json({ error: data.message || 'Erreur Brevo.' });

  } catch (err) {
    console.error('Subscribe server error:', err);
    return res.status(500).json({ error: err.message });
  }
}
