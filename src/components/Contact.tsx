import React from 'react';
import { Input, Textarea, Button } from "@heroui/react";
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';

const Contact: React.FC = () => {
    const { t } = useTranslation();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission
    };

    return (
        <motion.section
            id="contact"
            className="py-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <h2 className="text-3xl font-bold mb-8 text-center">{t('contact.title')}</h2>
            <div className="max-w-md mx-auto">
                <form onSubmit={handleSubmit} className="space-y-4">
                    <Input
                        label={t('contact.form.name')}
                        placeholder={t('contact.form.name')}
                        required
                    />
                    <Input
                        label={t('contact.form.email')}
                        placeholder={t('contact.form.email')}
                        type="email"
                        required
                    />
                    <Textarea
                        label={t('contact.form.message')}
                        placeholder={t('contact.form.message')}
                        required
                    />
                    <Button type="submit" color="primary" fullWidth>
                        {t('contact.form.send')}
                    </Button>
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