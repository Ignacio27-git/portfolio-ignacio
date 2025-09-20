import { type FC } from 'react';
import { Card, CardBody } from "@heroui/react";
import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';

interface AboutProps {
    t: (key: string) => string;
}

const About: FC<AboutProps> = ({ t }) => {
    const skills = [
        { name: 'react', icon: 'logos:react' },
        { name: 'vite', icon: 'logos:vitejs' },
        { name: 'webpack', icon: 'logos:webpack' },
        { name: 'javascript', icon: 'logos:javascript' },
        { name: 'typescript', icon: 'logos:typescript-icon' },
        { name: 'sass', icon: 'logos:sass' },
        { name: 'tailwindcss', icon: 'logos:tailwindcss-icon' },
        { name: 'html', icon: 'logos:html-5' },
        { name: 'git', icon: 'logos:git-icon' },
        { name: 'github', icon: 'logos:github-copilot' },
    ];

    return (
        <motion.section
            id="about"
            className="py-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}>
            <h2 className="text-3xl font-bold mb-8 text-center">{t('about.title')}</h2>
            <Card className="max-w-3xl mx-auto">
                <CardBody>
                    <p className="text-lg mb-6">{t('about.description1')}</p>
                    <p className="text-lg mb-6">{t('about.description2')}</p>
                    <div className="flex flex-wrap justify-center gap-4">
                        {skills.map((skill) => (
                            <div key={skill.name} className="flex items-center gap-2">
                                <Icon icon={skill.icon} className="text-2xl" />
                                <span>{t(`about.skills.${skill.name}`)}</span>
                            </div>
                        ))}
                    </div>
                </CardBody>
            </Card>
        </motion.section>
    );
};

export default About;