import { useState, type ChangeEvent, type FormEvent } from 'react';

type ContactForm = { name: string; email: string; message: string };
const emptyForm: ContactForm = { name: '', email: '', message: '' };

export function useContact() {
  const [formData, setFormData] = useState<ContactForm>(emptyForm);
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    window.setTimeout(() => {
      setSubmitted(true);
      setFormData(emptyForm);
      window.setTimeout(() => setSubmitted(false), 5000);
    }, 800);
  };
  const handleInputChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
  };
  return { formData, submitted, handleSubmit, handleInputChange };
}
