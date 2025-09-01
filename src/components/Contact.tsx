import { useState, type FC, type FormEvent } from 'react';
import { Input, Textarea, Button, Alert } from "@heroui/react";
import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';
import emailjs from "emailjs-com";

interface ContactProps {
    t: (key: string) => string;
}

const Contact: FC<ContactProps> = ({ t }) => {
    const [sent, setSent] = useState(2);

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        e.stopPropagation();
        emailjs.sendForm("service_zh9u9zl", "template_22ugg77", e.currentTarget)
            .then(() => {
                setSent(1)
                setTimeout(() => setSent(2), 30000);
            })
            .catch((err) => {
                console.error("Error al enviar", err);
                setSent(0)
                setTimeout(() => setSent(2), 30000);
            });
    };

    return (
        <motion.section
            id="contact"
            className="py-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}>
            <h2 className="text-3xl font-bold mb-8 text-center">{t('contact.title')}</h2>
            <div className="max-w-md mx-auto">
                {
                    sent === 1 ?
                        <><Alert color="success" title={t('contact.emailSent.success')} /><br /></>
                        :
                        sent === 0 && <><Alert color="danger" title={t('contact.emailSent.error')} /><br /></>
                }
                <form onSubmit={handleSubmit} className="space-y-4">
                    <Input name="name" label={t('contact.form.name')} placeholder={t('contact.form.name')} required />
                    <Input name="email" label={t('contact.form.email')} placeholder={t('contact.form.email')} type="email" required />
                    <Textarea name="message" label={t('contact.form.message')} placeholder={t('contact.form.message')} required />
                    <Button type="submit" color="primary" fullWidth>{t('contact.form.send')}</Button>
                </form>
                <div className="mt-8 flex justify-center space-x-4">
                    <a href="https://github.com/Ignacio27-git" target="_blank" rel="noopener noreferrer">
                        <Icon icon="logos:github-icon" className="text-3xl bg-white rounded-full" />
                    </a>
                    <a href="https://www.linkedin.com/in/ignacio-jimenez-ramirez/" target="_blank" rel="noopener noreferrer">
                        <Icon icon="logos:linkedin-icon" className="text-3xl" />
                    </a>
                </div>
            </div>
        </motion.section>
    );
};

export default Contact;