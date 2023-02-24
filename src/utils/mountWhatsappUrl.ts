import { IContactForm } from '../pages/home/sub-components/contact/ContactForm';

export const mountWhatsappUrl = (values: IContactForm) => {
  let whatsappUrl = `https://wa.me/5548992007613/?text=`;

  const name = encodeURI(`Nome: ${values.name}`);
  const email = encodeURI(`E-mail: ${values.email}`);
  const message = encodeURI(`Mensagem: ${values.message}`);

  whatsappUrl += encodeURI(`${name} ${email} ${message}`);

  return whatsappUrl;
};
