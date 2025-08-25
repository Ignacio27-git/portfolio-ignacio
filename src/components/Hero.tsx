import React from 'react';
import { Button, Image } from "@heroui/react";
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
    const { t } = useTranslation();

    return (
        <motion.section
            id="home"
            className="flex flex-col items-center justify-center min-h-screen text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <Image
                src="/yo.JPG"
                alt={t('hero.name')}
                className="rounded-full w-40 h-42 mb-8"
            />
            <h1 className="text-4xl font-bold mb-4">
                {t('hero.greeting')} <span className="text-primary">{t('hero.name')}</span>
            </h1>
            <p className="text-xl mb-8">{t('hero.title')}</p>
            <div className="flex gap-4">
                <Button color="primary" href="#projects">
                    {t('hero.cta.projects')}
                </Button>
                <Button variant="bordered" color="primary">
                    {t('hero.cta.cv')}
                </Button>
            </div>
        </motion.section>
    );
};

export default Hero;