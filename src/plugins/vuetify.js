import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import '@/styles/scss/_index.scss'; // _index.scss를 한번만 불러오면 자동으로 css로 컴파일 해줌
import { en, ko } from 'vuetify/es5/locale';

Vue.use(Vuetify);

export default new Vuetify({
  lang: {
    locales: { ko, en },
    current: 'ko',
  },
  theme: {
    default: 'light',
    themes: {
      light: {
        primary: '#316e5e',
        primaryLight: '#00A981',
        primaryDark: '#1F2E2A',
        primaryDarker: '#242D2A',
        blackLight: '#444',
        secondary: '#FF9736',
        error: '#EF4242',
        success: '#1CC966',
        inputBG: '#fcfcfc',
        tableBGWhite: '#f8f7fa',
        white: '#fff',
      },
      dark: {
        primary: '#2196F3',
        secondary: '#424242',
        accent: '#FF4081',
        error: '#FF5252',
        info: '#2196F3',
        success: '#4CAF50',
        warning: '#FB8C00',
      },
    },
  },
});
