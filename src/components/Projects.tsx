import React from 'react';
import { Card, CardBody, CardFooter, Button, Image } from "@heroui/react";
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const Projects: React.FC = () => {
    const { t } = useTranslation();

    const projects = [
        { id: 1, title: 'Project 1', description: 'Description for Project 1', image: 'https://img.heroui.chat/image/dashboard?w=400&h=300&u=1' },
        { id: 2, title: 'Project 2', description: 'Description for Project 2', image: 'https://img.heroui.chat/image/dashboard?w=400&h=300&u=2' },
        { id: 3, title: 'Project 3', description: 'Description for Project 3', image: 'https://img.heroui.chat/image/dashboard?w=400&h=300&u=3' },
        { id: 4, title: 'Project 4', description: 'Description for Project 4', image: 'https://img.heroui.chat/image/dashboard?w=400&h=300&u=4' },
        { id: 5, title: 'Project 5', description: 'Description for Project 5', image: 'https://img.heroui.chat/image/dashboard?w=400&h=300&u=5' },
        { id: 6, title: 'Project 6', description: 'Description for Project 6', image: 'https://img.heroui.chat/image/dashboard?w=400&h=300&u=6' },
    ];

    return (
        <motion.section
            id="projects"
            className="py-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <h2 className="text-3xl font-bold mb-8 text-center">{t('projects.title')}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project) => (
                    <motion.div
                        key={project.id}
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.2 }}
                    >
                        <Card className="h-full">
                            <CardBody className="p-0">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-48 object-cover"
                                />
                                <div className="p-4">
                                    <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                                    <p className="text-sm text-gray-500">{project.description}</p>
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