import { type FC } from 'react';
import { Card, CardBody, CardFooter, Image } from "@heroui/react";
import { motion } from 'framer-motion';
import { Icon } from '@iconify/react';

interface ProjectsProps {
    t: (key: string) => string;
}

const Projects: FC<ProjectsProps> = ({ t }) => {
    const projectIds = [1, 2, 3];

    const skills = [
        { name: 'react', icon: 'logos:react' },
        { name: 'webpack', icon: 'logos:webpack' },
        { name: 'javascript', icon: 'logos:javascript' },
        { name: 'sass', icon: 'logos:sass' },
    ];

    const skills2 = [
        { name: 'react', icon: 'logos:react' },
        { name: 'vite', icon: 'logos:vitejs' },
        { name: 'typescript', icon: 'logos:typescript-icon' },
        { name: 'tailwindcss', icon: 'logos:tailwindcss-icon' },
    ]

    return (
        <motion.section
            id="projects"
            className="py-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}>
            <h2 className="text-3xl font-bold mb-8 text-center">{t('projects.title')}</h2>
            <div className="flex justify-center gap-8 flex-wrap">
                {projectIds.map((id) => (
                    <motion.div
                        key={id}
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.2 }}
                        className='w-full max-w-md'>
                        <Card className="h-full">
                            <CardBody className="p-0">
                                <div className="mx-auto">
                                    <Image
                                        src={`/${id}.png`}
                                        alt={t(`projects.items.${id}.title`)}
                                        className="w-full h-48 object-cover" />
                                </div>
                                <div className="p-4">
                                    <h3 className="text-xl font-semibold mb-2">{t(`projects.items.${id}.title`)}</h3>
                                    <p className="text-sm text-default-500">{t(`projects.items.${id}.description`)}</p>
                                </div>
                                <div className="p-4 flex flex-wrap gap-4 mt-auto">
                                    {(id === 1 || id === 2) && skills.map((skill) => <Icon key={skill.name} icon={skill.icon} className="text-2xl" />)}
                                    {id === 3 && skills2.map((skill) => <Icon key={skill.name} icon={skill.icon} className="text-2xl" />)}
                                </div>
                            </CardBody>
                            <CardFooter className="justify-between">
                                {id === 3 ? <p>{t('projects.cta.private')}</p> : <p>{t('projects.cta.inprogress')}</p>}
                                {/* <>
                                        <Button size="sm">{t('projects.cta.demo')}</Button>
                                        <Button size="sm" variant="bordered">{t('projects.cta.code')}</Button>
                                    </> */}
                            </CardFooter>
                        </Card>
                    </motion.div>
                ))}
            </div>
        </motion.section>
    );
};

export default Projects;