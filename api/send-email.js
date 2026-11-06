export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { type, name, company, email, phone, services, budget, subject, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Champs obligatoires manquants.' });
  }

  const isQuote = type === 'quote';

  const emailSubject = isQuote
    ? `[DEVIS GSI] Nouvelle demande de ${name}`
    : `[CONTACT GSI] ${subject || 'Nouveau message'} de ${name}`;

  const htmlContent = isQuote
    ? `
      <h2 style="color:#0B2A6B;">Nouvelle demande de devis — Global Softworks Innovation</h2>
      <table cellpadding="8" cellspacing="0" border="1" bordercolor="#e2e8f0" style="border-collapse:collapse;width:100%;font-family:sans-serif;font-size:14px;">
        <tr><td style="background:#f8fafc;font-weight:bold;width:160px;">Nom</td><td>${name}</td></tr>
        <tr><td style="background:#f8fafc;font-weight:bold;">Entreprise</td><td>${company || 'Non précisé'}</td></tr>
        <tr><td style="background:#f8fafc;font-weight:bold;">Email</td><td>${email}</td></tr>
        <tr><td style="background:#f8fafc;font-weight:bold;">Téléphone</td><td>${phone}</td></tr>
        <tr><td style="background:#f8fafc;font-weight:bold;">Services souhaités</td><td>${services || 'Non précisé'}</td></tr>
        <tr><td style="background:#f8fafc;font-weight:bold;">Budget indicatif</td><td>${budget || 'Non précisé'}</td></tr>
        <tr><td style="background:#f8fafc;font-weight:bold;">Description du projet</td><td>${message}</td></tr>
      </table>
      <p style="color:#64748b;font-size:12px;margin-top:16px;">Ce message a été envoyé depuis le formulaire de devis du site Global Softworks Innovation.</p>
    `
    : `
      <h2 style="color:#0B2A6B;">Nouveau message de contact — Global Softworks Innovation</h2>
      <table cellpadding="8" cellspacing="0" border="1" bordercolor="#e2e8f0" style="border-collapse:collapse;width:100%;font-family:sans-serif;font-size:14px;">
        <tr><td style="background:#f8fafc;font-weight:bold;width:160px;">Nom</td><td>${name}</td></tr>
        <tr><td style="background:#f8fafc;font-weight:bold;">Email</td><td>${email}</td></tr>
        <tr><td style="background:#f8fafc;font-weight:bold;">Téléphone</td><td>${phone || 'Non précisé'}</td></tr>
        <tr><td style="background:#f8fafc;font-weight:bold;">Sujet</td><td>${subject || 'Non précisé'}</td></tr>
        <tr><td style="background:#f8fafc;font-weight:bold;">Message</td><td>${message}</td></tr>
      </table>
      <p style="color:#64748b;font-size:12px;margin-top:16px;">Ce message a été envoyé depuis le formulaire de contact du site Global Softworks Innovation.</p>
    `;

  try {
    const response = await fetch('https://api.brevo.com/v3/smtp/email', {
      method: 'POST',
      headers: {
        'api-key': process.env.BREVO_API_KEY,
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({
        sender: { name: 'Global Softworks Innovation', email: 'thomyashton@gmail.com' },
        to: [{ email: 'thomyashton@gmail.com', name: 'GSI Team' }],
        replyTo: { email: email, name: name },
        subject: emailSubject,
        htmlContent: htmlContent,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error('Brevo API error:', errorData);
      return res.status(500).json({ error: errorData });
    }

    return res.status(200).json({ success: true });
  } catch (err) {
    console.error('Server error:', err);
    return res.status(500).json({ error: err.message });
  }
}
