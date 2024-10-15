// src/translations.js
const PROJECT_ID = 'cm2ata8190001l1e8tqnz4ymv'; // Tu ID de proyecto en Traducila

export async function getTranslations(lang) {
    const url = `https://traducila.vercel.app/api/translations/${PROJECT_ID}/${lang}`;
    const response = await fetch(url);

    if (!response.ok) {
        throw new Error('Error al obtener las traducciones');
    }
    
    const data = await response.json();
    localStorage.setItem('translations', JSON.stringify(data));
}

export function getPhrase(key) {
    const translations = JSON.parse(localStorage.getItem('translations'));
    return translations ? translations[key] || key : key;
}

export async function changeLanguage(lang) {
    await getTranslations(lang);
    localStorage.setItem('currentLanguage', lang);
}


