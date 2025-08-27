import { type FC } from 'react';

interface FooterProps {
    t: (key: string) => string;
}

const Footer: FC<FooterProps> = ({ t }) => {
    return (
        <footer className="bg-content1 py-6">
            <div className="container mx-auto px-4 text-center">
                <p className="text-sm text-gray-500">{t('footer.copyright')}</p>
            </div>
        </footer>
    );
};

export default Footer;