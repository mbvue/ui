const KEY = 'mbvue-docs-language';
const cached = localStorage.getItem(KEY);
let language = cached && cached !== '' ? cached : 'zh-CN';

export default {
    get: () => {
        return language;
    },

    set: lang => {
        if (lang === 'zh-CN' || lang === 'en-US') {
            language = lang;
            localStorage.setItem(KEY, language);
        }
    }
};
