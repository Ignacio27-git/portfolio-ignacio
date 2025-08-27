import { Fragment, type FC } from 'react';
import { Card, CardBody, Divider } from "@heroui/react";
import { motion } from 'framer-motion';

interface ExperienceProps {
    t: (key: string) => string;
}

const Experience: FC<ExperienceProps> = ({ t }) => {
    return (
        <motion.section
            id="experience"
            className="py-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}>
            <h2 className="text-3xl font-bold mb-8 text-center">{t('experience.title')}</h2>
            <Card className="max-w-3xl mx-auto">
                <CardBody className="space-y-6">
                    {[1, 2, 3].map((index) => (
                        <Fragment key={index}>
                            <div className="flex flex-col md:flex-row gap-4">
                                <div className="md:w-1/3">
                                    <h3 className="text-xl font-semibold">{t(`experience.jobs.${index}.company`)}</h3>
                                    <p className="text-sm text-default-500">{t(`experience.jobs.${index}.period`)}</p>
                                    <p className="text-sm font-medium text-primary">{t(`experience.jobs.${index}.location`)}</p>
                                </div>
                                <div className="md:w-2/3">
                                    <h4 className="text-lg font-medium">{t(`experience.jobs.${index}.position`)}</h4>
                                    <p className="mt-2">{t(`experience.jobs.${index}.description`)}</p>
                                    <div className="flex flex-wrap gap-2 mt-3">
                                        {[1, 2, 3].map((techIndex) => (
                                            <span key={techIndex} className="text-xs px-2 py-1 bg-default-100 rounded-md">
                                                {t(`experience.jobs.${index}.technologies.${techIndex}`)}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            {index < 3 && <Divider className="my-4" />}
                        </Fragment>
                    ))}
                </CardBody>
            </Card>
        </motion.section>
    );
};

export default Experience;