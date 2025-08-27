import { type FC } from 'react';
import { Button, Image } from "@heroui/react";
import { motion } from 'framer-motion';

interface HeroProps {
    t: (key: string) => string;
}

const Hero: FC<HeroProps> = ({t}) => {
    return (
        <motion.section
            id="home"
            className="flex flex-col items-center justify-center min-h-screen text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}>
            <Image src="/yo.JPG" alt={t('hero.name')} className="rounded-full w-40 h-42 mb-8" />
            <h1 className="text-4xl font-bold mb-4">{t('hero.greeting')} <span className="text-primary">{t('hero.name')}</span></h1>
            <p className="text-xl mb-8">{t('hero.title')}</p>
            <div className="flex gap-4">
                <Button color="primary" href="#projects">{t('hero.cta.projects')}</Button>
                {/* https://www.canva.com/design/DAGxRKA7dU8/nc2uXOL15_r1uM3sHSIhkw/view?utm_content=DAGxRKA7dU8&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h057a426197 */}
                <Button variant="bordered" color="primary">{t('hero.cta.cv')}</Button>
            </div>
        </motion.section>
    );
};

export default Hero;