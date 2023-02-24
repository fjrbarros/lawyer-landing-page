import { IContactForm } from '../pages/home/sub-components/contact/ContactForm';

export const mountWhatsappUrl = (values: IContactForm) => {
  let whatsappUrl = `https://wa.me/5548992007613/?text=`;
  const message = encodeURIComponent(
    `Nome: ${values.name} \n E-mail: ${values.email} \n Mensagem: ${values.message}`,
  );

  whatsappUrl += message;

  return whatsappUrl;
};
