require('dotenv').config();

module.exports = async function (context, req) {
  const number = process.env.WHATSAPP_NUMBER || "919966266682";

  const { name, phone, consultationType } = req.body || {};

  if (!consultationType) {
    context.res = {
      status: 400,
      body: { error: "Missing required fields" }
    };
    return;
  }

  const message = encodeURIComponent(
    `Hi, I’d like to book a ${consultationType} consultation.`
  );

  const url = `https://wa.me/${number}?text=${message}`;

  context.res = {
    status: 200,
    headers: {
      "Content-Type": "application/json"
    },
    body: { url }
  };
};
