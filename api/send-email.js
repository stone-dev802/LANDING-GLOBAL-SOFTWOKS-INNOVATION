export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { type, name, company, email, phone, services, budget, subject, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Champs obligatoires manquants.' });
  }

  const isQuote = type === 'quote';
  const companySender = {
    name: 'Global Softworks Innovation',
    email: 'globalsoftworksinnovation@gmail.com',
  };

  // 1. E-mail pour l'équipe GSI (reçu sur globalsoftworksinnovation@gmail.com)
  const teamSubject = isQuote
    ? `[DEVIS GSI] Nouvelle demande de ${name} ${company ? `(${company})` : ''}`
    : `[CONTACT GSI] ${subject || 'Nouveau message'} de ${name}`;

  const teamHtml = isQuote
    ? `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #1e293b;">
        <div style="background: #0B2A6B; padding: 20px; border-radius: 12px 12px 0 0; color: white;">
          <h2 style="margin: 0; font-size: 20px; color: #FBBF24;">Nouvelle demande de devis</h2>
          <p style="margin: 5px 0 0 0; font-size: 13px; color: #cbd5e1;">Reçue depuis le site web Global Softworks Innovation</p>
        </div>
        <div style="background: #ffffff; padding: 24px; border: 1px solid #e2e8f0; border-top: none; border-radius: 0 0 12px 12px;">
          <table cellpadding="10" cellspacing="0" border="1" bordercolor="#e2e8f0" style="border-collapse: collapse; width: 100%; font-size: 14px;">
            <tr><td style="background: #f8fafc; font-weight: bold; width: 140px;">Client</td><td><strong>${name}</strong></td></tr>
            <tr><td style="background: #f8fafc; font-weight: bold;">Entreprise</td><td>${company || 'Non précisé'}</td></tr>
            <tr><td style="background: #f8fafc; font-weight: bold;">Email</td><td><a href="mailto:${email}">${email}</a></td></tr>
            <tr><td style="background: #f8fafc; font-weight: bold;">Téléphone</td><td><a href="tel:${phone}">${phone}</a></td></tr>
            <tr><td style="background: #f8fafc; font-weight: bold;">Services</td><td><strong>${services || 'Non précisé'}</strong></td></tr>
            <tr><td style="background: #f8fafc; font-weight: bold;">Budget</td><td>${budget || 'Non précisé'}</td></tr>
            <tr><td style="background: #f8fafc; font-weight: bold;">Description</td><td style="white-space: pre-line;">${message}</td></tr>
          </table>
          <div style="margin-top: 20px; text-align: center;">
            <a href="mailto:${email}?subject=Re: Votre demande de devis chez Global Softworks Innovation" 
               style="display: inline-block; background: #0B2A6B; color: white; padding: 10px 20px; border-radius: 8px; text-decoration: none; font-weight: bold; font-size: 13px;">
              Répondre directement au client
            </a>
          </div>
        </div>
      </div>
    `
    : `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #1e293b;">
        <div style="background: #0B2A6B; padding: 20px; border-radius: 12px 12px 0 0; color: white;">
          <h2 style="margin: 0; font-size: 20px; color: #FBBF24;">Nouveau message de contact</h2>
          <p style="margin: 5px 0 0 0; font-size: 13px; color: #cbd5e1;">Reçu depuis le formulaire de contact</p>
        </div>
        <div style="background: #ffffff; padding: 24px; border: 1px solid #e2e8f0; border-top: none; border-radius: 0 0 12px 12px;">
          <table cellpadding="10" cellspacing="0" border="1" bordercolor="#e2e8f0" style="border-collapse: collapse; width: 100%; font-size: 14px;">
            <tr><td style="background: #f8fafc; font-weight: bold; width: 140px;">Expéditeur</td><td><strong>${name}</strong></td></tr>
            <tr><td style="background: #f8fafc; font-weight: bold;">Email</td><td><a href="mailto:${email}">${email}</a></td></tr>
            <tr><td style="background: #f8fafc; font-weight: bold;">Téléphone</td><td><a href="tel:${phone}">${phone || 'Non précisé'}</a></td></tr>
            <tr><td style="background: #f8fafc; font-weight: bold;">Sujet</td><td>${subject || 'Non précisé'}</td></tr>
            <tr><td style="background: #f8fafc; font-weight: bold;">Message</td><td style="white-space: pre-line;">${message}</td></tr>
          </table>
          <div style="margin-top: 20px; text-align: center;">
            <a href="mailto:${email}?subject=Re: ${subject || 'Votre message sur Global Softworks Innovation'}" 
               style="display: inline-block; background: #0B2A6B; color: white; padding: 10px 20px; border-radius: 8px; text-decoration: none; font-weight: bold; font-size: 13px;">
              Répondre directement au client
            </a>
          </div>
        </div>
      </div>
    `;

  // 2. E-mail automatique de confirmation / feedback pour le CLIENT
  const clientSubject = isQuote
    ? `Confirmation de réception de votre demande de devis — Global Softworks Innovation`
    : `Nous avons bien reçu votre message — Global Softworks Innovation`;

  const clientHtml = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #1e293b; line-height: 1.6;">
      <div style="background: #0B2A6B; padding: 28px 24px; border-radius: 12px 12px 0 0; text-align: center; color: white;">
        <h1 style="margin: 0; font-size: 22px; font-weight: 900; letter-spacing: 0.5px;">GLOBAL SOFTWORKS <span style="color: #FBBF24;">INNOVATION</span></h1>
        <p style="margin: 6px 0 0 0; font-size: 12px; color: #93c5fd; text-transform: uppercase; letter-spacing: 1px;">Innover • Développer • Sécuriser • Ensemble</p>
      </div>
      
      <div style="background: #ffffff; padding: 30px 24px; border: 1px solid #e2e8f0; border-top: none; border-radius: 0 0 12px 12px;">
        <h2 style="color: #0B2A6B; font-size: 18px; margin-top: 0;">Bonjour ${name},</h2>
        
        <p style="font-size: 14px; color: #334155;">
          ${isQuote 
            ? "Nous vous remercions pour l'intérêt que vous portez à <strong>Global Softworks Innovation</strong>. Nous avons bien reçu votre demande de devis."
            : "Merci d'avoir contacté <strong>Global Softworks Innovation</strong>. Nous vous confirmons la bonne réception de votre message."}
        </p>

        <p style="font-size: 14px; color: #334155;">
          Notre équipe technique analyse attentivement votre demande et s'engage à vous répondre sous <strong>24 heures ouvrées</strong> avec des propositions adaptées à vos objectifs.
        </p>

        <div style="background: #f8fafc; border-left: 4px solid #FBBF24; padding: 16px; border-radius: 0 8px 8px 0; margin: 24px 0;">
          <h3 style="margin: 0 0 10px 0; font-size: 13px; text-transform: uppercase; letter-spacing: 0.5px; color: #64748b;">Récapitulatif de votre demande :</h3>
          <ul style="margin: 0; padding-left: 18px; font-size: 13px; color: #334155;">
            ${isQuote ? `<li><strong>Services souhaités :</strong> ${services || 'Non précisé'}</li>` : ''}
            ${isQuote ? `<li><strong>Budget estimé :</strong> ${budget || 'Non précisé'}</li>` : ''}
            ${!isQuote && subject ? `<li><strong>Sujet :</strong> ${subject}</li>` : ''}
            <li><strong>Message :</strong> <em>« ${message.length > 200 ? message.substring(0, 200) + '...' : message} »</em></li>
          </ul>
        </div>

        <div style="text-align: center; margin: 28px 0;">
          <p style="font-size: 13px; color: #64748b; margin-bottom: 12px;">Vous avez un besoin urgent ? Discutez directement avec un ingénieur :</p>
          <a href="https://wa.me/237691862447" 
             style="display: inline-block; background: #25D366; color: white; padding: 12px 24px; border-radius: 50px; text-decoration: none; font-weight: bold; font-size: 13px;">
            💬 Échanger sur WhatsApp (+237 691 862 447)
          </a>
        </div>

        <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 28px 0;" />

        <div style="font-size: 12px; color: #64748b;">
          <strong>Global Softworks Innovation</strong><br/>
          📍 Yaoundé, Cameroun<br/>
          📞 +237 691 862 447 / +237 670 092 318<br/>
          💬 <a href="https://wa.me/237691862447" style="color: #25D366;">WhatsApp : +237 691 862 447</a><br/>
          🌐 <a href="https://landing-global-softwoks-innovation-eight.vercel.app/" style="color: #0B2A6B;">landing-global-softwoks-innovation-eight.vercel.app</a>
        </div>
      </div>
    </div>
  `;

  try {
    const brevoApiKey = process.env.BREVO_API_KEY;
    if (!brevoApiKey) {
      console.error('BREVO_API_KEY environment variable missing.');
      return res.status(500).json({ error: 'Clé API Brevo non configurée côté serveur.' });
    }

    const brevoHeaders = {
      'api-key': brevoApiKey,
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    };

    // Envoi 1 : Notification interne vers votre boîte globalsoftworksinnovation@gmail.com
    const teamEmailReq = fetch('https://api.brevo.com/v3/smtp/email', {
      method: 'POST',
      headers: brevoHeaders,
      body: JSON.stringify({
        sender: companySender,
        to: [{ email: 'globalsoftworksinnovation@gmail.com', name: 'Global Softworks Innovation' }],
        replyTo: { email: email, name: name },
        subject: teamSubject,
        htmlContent: teamHtml,
      }),
    });

    // Envoi 2 : Accusé de réception automatique au client
    const clientFeedbackReq = fetch('https://api.brevo.com/v3/smtp/email', {
      method: 'POST',
      headers: brevoHeaders,
      body: JSON.stringify({
        sender: companySender,
        to: [{ email: email, name: name }],
        replyTo: companySender,
        subject: clientSubject,
        htmlContent: clientHtml,
      }),
    });

    const [teamRes, clientRes] = await Promise.all([teamEmailReq, clientFeedbackReq]);

    if (!teamRes.ok) {
      const err = await teamRes.json();
      console.error('Erreur Brevo (Notification équipe):', err);
      return res.status(500).json({ error: err });
    }

    if (!clientRes.ok) {
      const err = await clientRes.json();
      console.warn('Avertissement Brevo (Accusé client):', err);
    }

    return res.status(200).json({ success: true });
  } catch (err) {
    console.error('Server error:', err);
    return res.status(500).json({ error: err.message });
  }
}
