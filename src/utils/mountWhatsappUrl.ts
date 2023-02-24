import { IContactForm } from '../pages/home/sub-components/contact/ContactForm';

export const mountWhatsappUrl = (values: IContactForm) => {
  let whatsappUrl = `https://wa.me/5548991729253/?text=`;
  const message = encodeURIComponent(
    `Nome: ${values.name}\nE-mail: ${values.email}\nMensagem: ${values.message}`,
  );

  whatsappUrl += message;

  return whatsappUrl;
};
