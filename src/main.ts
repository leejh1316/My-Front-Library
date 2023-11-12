import { createApp } from 'vue'
import './style.css'
import { QueryObserver, VueQueryPlugin } from 'vue-query'
import App from './App.vue'
import { router } from './router'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import * as Icons from '@fortawesome/free-solid-svg-icons'
import { createPinia } from 'pinia'
import { VuePopupPlugin } from './lib/popup'
library.add(Icons.faPen, Icons.faTrash)
const app = createApp(App)
            .component('font-awesome-icon', FontAwesomeIcon)
            .use(VuePopupPlugin)
            .use(createPinia())
            .use(router)
            .use(VueQueryPlugin)
            .mount('#app')
