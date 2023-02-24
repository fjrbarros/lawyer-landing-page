import { useState } from 'react';
import { mountWhatsappUrl } from '../../../../utils/mountWhatsappUrl';
import { validateContactForm } from '../../../../utils/validateContactForm';
import * as Styles from './Contact.styles';

export interface IContactForm {
  name: string;
  email: string;
  message: string;
}

const defaultValues: IContactForm = {
  name: '',
  email: '',
  message: '',
};

export const ContactForm = () => {
  const [values, setValues] = useState(defaultValues);
  const [errors, setErrors] = useState(defaultValues);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValues(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const _errors: any = {};
    validateContactForm(values, (field, text) => (_errors[field] = text));
    setErrors(_errors);
    if (Object.keys(_errors).length) return;
    const whatsappUrl = mountWhatsappUrl(values);
    console.log(whatsappUrl);
    window.open(whatsappUrl, '_blank');
    setValues(defaultValues);
  };

  return (
    <Styles.FormBox id="contact-form">
      <Styles.Form onSubmit={handleSubmit}>
        <Styles.H3>Fale com a gente</Styles.H3>
        <Styles.InputBox>
          <Styles.Input
            type="text"
            name="name"
            placeholder="Nome completo"
            onChange={handleChange}
            value={values.name}
            error={!!errors.name}
          />
          {!!errors.name && (
            <Styles.InputError>{errors.name}</Styles.InputError>
          )}
        </Styles.InputBox>
        <Styles.InputBox>
          <Styles.Input
            type="text"
            name="email"
            placeholder="E-mail"
            onChange={handleChange}
            value={values.email}
            error={!!errors.email}
          />
          {!!errors.email && (
            <Styles.InputError>{errors.email}</Styles.InputError>
          )}
        </Styles.InputBox>
        <Styles.InputBox>
          <Styles.TextArea
            type="text"
            name="message"
            placeholder="Sua mensagem"
            onChange={handleChange}
            value={values.message}
            error={!!errors.message}
          />
          {!!errors.message && (
            <Styles.InputError>{errors.message}</Styles.InputError>
          )}
        </Styles.InputBox>
        <Styles.Submit type="submit" value="Enviar" />
      </Styles.Form>
    </Styles.FormBox>
  );
};
