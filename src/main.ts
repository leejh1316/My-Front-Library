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
import { VueSlidePlugin } from './lib/slide'
library.add(Icons.faPen, Icons.faTrash, Icons.faPlay)
const app = createApp(App)
            .component('Icon', FontAwesomeIcon)
            .use(VuePopupPlugin)
            .use(VueSlidePlugin)
            .use(createPinia())
            .use(router)
            .use(VueQueryPlugin)
            .mount('#app')
