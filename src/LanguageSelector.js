import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import Flag from 'react-world-flags';
import './LanguageSelector.css';

const LANGUAGE_SELECTOR_ID = 'language-selector';

const LanguageSelector = () => {
    const { i18n } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);
    const languages = [
        { key: "en", name: "English", flag: "US" },
        { key: "es", name: "Español", flag: "ES" }
    ];
    const selectedLanguage = languages.find(language => language.key === i18n.language);

    const handleLanguageChange = async (language) => {
        await i18n.changeLanguage(language.key);
        setIsOpen(false);
    };

    useEffect(() => {
        const handleWindowClick = (event) => {
            const target = event.target.closest('button');
            if (target && target.id === LANGUAGE_SELECTOR_ID) {
                return;
            }
            setIsOpen(false);
        };
        window.addEventListener('click', handleWindowClick);
        return () => {
            window.removeEventListener('click', handleWindowClick);
        }
    }, []);

    if (!selectedLanguage) {
        return null;
    }

    return (
        <div className="language-selector-container">
            <div className="language-selector">
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    type="button"
                    className="language-selector-button"
                    id={LANGUAGE_SELECTOR_ID}
                    aria-haspopup="true"
                    aria-expanded={isOpen}
                >
                    <Flag code={selectedLanguage.flag} style={{ width: 20, height: 20, marginRight: 8 }} />
                    {selectedLanguage.name}
                    <svg
                        className="language-selector-icon"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                    >
                        <path
                            fillRule="evenodd"
                            d="M10.293 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L10 12.586l3.293-3.293a1 1 0 011.414 1.414l-4 4z"
                            clipRule="evenodd"
                        />
                    </svg>
                </button>
                {isOpen && (
                    <div className="language-selector-dropdown" role="menu" aria-orientation="vertical" aria-labelledby="language-selector">
                        <div className="language-selector-options" role="none">
                            {languages.map((language) => (
                                <button
                                    key={language.key}
                                    onClick={() => handleLanguageChange(language)}
                                    className={`language-option ${selectedLanguage.key === language.key ? "selected" : ""}`}
                                    role="menuitem"
                                >
                                    <Flag code={language.flag} style={{ width: 20, height: 20, marginRight: 8 }} />
                                    <span>{language.name}</span>
                                </button>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default LanguageSelector;
