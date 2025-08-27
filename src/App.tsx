import { useEffect, type FC } from 'react';
import { HeroUIProvider, ToastProvider } from "@heroui/react";
import { I18nextProvider, useTranslation } from 'react-i18next';
import i18nConf from './i18n';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { motion } from 'framer-motion';
import { useTheme } from "@heroui/use-theme";

const App: FC = () => {
    const { theme, setTheme } = useTheme();
    const { t, i18n } = useTranslation();

    useEffect(() => setTheme('dark'), []);

    return (
        <HeroUIProvider>
            <ToastProvider />
            <I18nextProvider i18n={i18nConf}>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="min-h-screen bg-background text-foreground">
                    <Header theme={theme} setTheme={setTheme} t={t} i18n={i18n} />
                    <main className="container mx-auto px-4">
                        <Hero t={t} />
                        <About t={t} />
                        <Projects t={t} />
                        <Contact t={t} />
                    </main>
                    <Footer t={t} />
                </motion.div>
            </I18nextProvider>
        </HeroUIProvider>
    );
};

export default App;