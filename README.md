### Example on how to use i18n with React + language button


![Example GIF](https://github.com/Paul-Sizon/i18next-react-example/blob/main/example.gif)

####  Install i18n Libraries

1. **Install the necessary i18n libraries:**
   ```bash
   npm install i18next react-i18next i18next-browser-languagedetector
   ```

2. **Configure i18n**
   - create `src/i18n.js`
     ```javascript
     import i18n from 'i18next';
     import { initReactI18next } from 'react-i18next';
     import LanguageDetector from 'i18next-browser-languagedetector';
     import translationEN from './locales/en/translation.json';
     import translationES from './locales/es/translation.json';

     const resources = {
       en: { translation: translationEN },
       es: { translation: translationES }
     };

     i18n
       .use(LanguageDetector)
       .use(initReactI18next)
       .init({
         resources,
         fallbackLng: 'en',
         interpolation: { escapeValue: false }
       });

     export default i18n;
     ```

3. **Create Translation Files**
   - `src/locales/en/translation.json`
     ```json
     {
       "welcome": "Welcome to our application",
       "description": "This is a sample description"
     }
     ```
   - `src/locales/es/translation.json`
     ```json
     {
       "welcome": "Bienvenido a nuestra aplicación",
       "description": "Esta es una descripción de ejemplo"
     }
     ```

4. **Update `index.js` to wrap App inside I18nextProvider**
   ```javascript
   import React from 'react';
   import ReactDOM from 'react-dom/client';
   import './index.css';
   import App from './App';
   import reportWebVitals from './reportWebVitals';
   import './i18n';
   import { I18nextProvider } from 'react-i18next';
   import i18n from './i18n';

   const root = ReactDOM.createRoot(document.getElementById('root'));
   root.render(
     <React.StrictMode>
       <I18nextProvider i18n={i18n}>
         <App />
       </I18nextProvider>
     </React.StrictMode>
   );

   reportWebVitals();
   ```

5. **Use translation (key from json) inside react components**
   ```javascript
   // src/App.js
   import React from 'react';
   import { useTranslation } from 'react-i18next';

   function App() {
     const { t } = useTranslation();

     return (
       <div className="App">
         <h1>{t('welcome')}</h1>
         <p>{t('description')}</p>
         <LanguageSelector />
       </div>
     );
   }

   export default App;
   ```


### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

