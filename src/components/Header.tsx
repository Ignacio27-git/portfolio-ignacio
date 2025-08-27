import { type FC } from 'react';
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Switch } from "@heroui/react";
import { Icon } from '@iconify/react';

interface HeaderProps {
    theme: string;
    setTheme: (theme: 'light' | 'dark') => void;
    t: (key: string) => string;
    i18n: { changeLanguage: (lng: string) => void; language: string; };
}

const Header: FC<HeaderProps> = ({ theme, setTheme, t, i18n }) => {
    const changeLanguage = (lng: string) => i18n.changeLanguage(lng);
    const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light');

    return (
        <Navbar className="bg-background/80 backdrop-blur-md fixed top-0 z-50" maxWidth="xl">
            <NavbarBrand>
                <p className="font-bold text-inherit">{t('hero.name')}</p>
            </NavbarBrand>
            <NavbarContent className="hidden sm:flex gap-4" justify="center">
                <NavbarItem>
                    <Link color="foreground" href="#home">{t('header.home')}</Link>
                </NavbarItem>
                <NavbarItem>
                    <Link color="foreground" href="#about">{t('header.about')}</Link>
                </NavbarItem>
                <NavbarItem>
                    <Link color="foreground" href="#projects">{t('header.projects')}</Link>
                </NavbarItem>
                <NavbarItem>
                    <Link color="foreground" href="#contact">{t('header.contact')}</Link>
                </NavbarItem>
            </NavbarContent>
            <NavbarContent justify="end">
                <Switch
                    defaultSelected
                    size="sm"
                    color="primary"
                    startContent={<Icon icon="lucide:sun" />}
                    endContent={<Icon icon="lucide:moon" />}
                    isSelected={theme === 'dark'}
                    onValueChange={toggleTheme} />
                <Dropdown>
                    <DropdownTrigger>
                        <Button variant="flat" startContent={<Icon icon="lucide:globe" />}>{i18n.language.toUpperCase()}</Button>
                    </DropdownTrigger>
                    <DropdownMenu aria-label="Language selection">
                        <DropdownItem key="en" onClick={() => changeLanguage('en')}>English</DropdownItem>
                        <DropdownItem key="es" onClick={() => changeLanguage('es')}>Español</DropdownItem>
                        <DropdownItem key="fr" onClick={() => changeLanguage('fr')}>Français</DropdownItem>
                        <DropdownItem key="de" onClick={() => changeLanguage('de')}>Deutsch</DropdownItem>
                    </DropdownMenu>
                </Dropdown>
            </NavbarContent>
        </Navbar>
    );
};

export default Header;