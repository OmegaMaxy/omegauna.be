const RESEND_API_KEY = 're_W33GQU8f_4fhUEzM5g79woWtt2tCvW792';

async function a3cd1f_send() {


  const email = document.getElementById('email');
  const fullname = document.getElementById('fullname');
  const tel = document.getElementById('tel');
  const message = document.getElementById('message');

  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${RESEND_API_KEY}`,
    },
    body: JSON.stringify({
      from: 'Acme <form@omegauna.be>',
      to: [email],
      subject: `Form OmegaUna: ${fullname}`,
      html: `
        <main>
            Tel: <strong>${tel}</strong>
            Email: <strong>${email}</strong>
            Message: <p>${message}</p>
        </main>`,
    }),
  });

  if (res.ok) {
    const data = await res.json();
    return Response.json(data);
  }
}
async function a3cd1f_full_send() {


  const email = document.getElementById('email');
  const fullname = document.getElementById('fullname');
  const tel = document.getElementById('tel');
  const message = document.getElementById('message');
  const inquiry = document.getElementById('inquiry');
  const btw = document.getElementById('btw');
  const company_name = document.getElementById('company_name');
  
  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${RESEND_API_KEY}`,
    },
    body: JSON.stringify({
      from: 'Acme <form@omegauna.be>',
      to: [email],
      subject: `Form OmegaUna: ${fullname}`,
      html: `
      <main>
          Tel: <strong>${tel}</strong>
          Email: <strong>${email}</strong>
          Company: <strong>${company_name}</strong>
          BTW: <strong>${btw}</strong>
          Inquiry: <strong>${inquiry}</strong>
          Message: <p>${message}</p>
      </main>`,
    }),
  });

  if (res.ok) {
    const data = await res.json();
    return Response.json(data);
  }
}