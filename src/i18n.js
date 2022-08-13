import Vue from 'vue';
import VueI18n from 'vue-i18n';

Vue.use(VueI18n);

function loadLocaleMessages() {
  // const locales = require.context('./locales', true, /[A-Za-z0-9-_,\s]+\.json$/i);
  // locales.keys().forEach(key => {
  //   const matched = key.match(/([A-Za-z0-9-_]+)\./i);
  //   if (matched && matched.length > 1) {
  //     const locale = matched[1];
  //     messages[locale] = locales(key);
  //   }
  // });
  const locales = require.context('@/locales', true, /\.json$/);
  const messages = {};
  for (const file of locales.keys()) {
    if (file === './index.js') continue; // index.js 파일 제외
    const path = file.replace(/(\.\/|\.json$)/g, '').split('/');
    path.reduce((o, s, i) => {
      if (o[s]) return o[s];
      o[s] = i + 1 === path.length ? locales(file) : {};
      return o[s];
    }, messages);
  }
  return messages;
}

export default new VueI18n({
  locale: 'ko',
  fallbackLocale: 'ko',
  messages: loadLocaleMessages(),
  silentTranslationWarn: true,
});
