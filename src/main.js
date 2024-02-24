import { createApp } from 'vue'
// import App from './App.vue' // Для табов
// import AppSlots from "@/AppSlots.vue"; //Для слотов
import AppListOfNews from "@/AppListOfNews.vue";
import './theme.css'

const app = createApp(AppListOfNews);

//Глобальнвя регистрация компоненты
// app.component('app-news', AppNews);

app.mount('#app');
