import { type FC } from 'react';
import { Card, CardBody, CardFooter, Button, Image } from "@heroui/react";
import { motion } from 'framer-motion';

interface ProjectsProps {
    t: (key: string) => string;
}

const Projects: FC<ProjectsProps> = ({ t }) => {
    const projectIds = [1, 2];

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
                                <Image
                                    src={`https://img.heroui.chat/image/dashboard?w=400&h=300&u=${id}`}
                                    alt={t(`projects.items.${id}.title`)}
                                    className="w-full h-48 object-cover" />
                                <div className="p-4">
                                    <h3 className="text-xl font-semibold mb-2">{t(`projects.items.${id}.title`)}</h3>
                                    <p className="text-sm text-default-500">{t(`projects.items.${id}.description`)}</p>
                                </div>
                            </CardBody>
                            <CardFooter className="justify-between">
                                <Button size="sm">{t('projects.cta.demo')}</Button>
                                <Button size="sm" variant="bordered">{t('projects.cta.code')}</Button>
                            </CardFooter>
                        </Card>
                    </motion.div>
                ))}
            </div>
        </motion.section>
    );
};

export default Projects;