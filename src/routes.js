import Home from './components/home/Home.vue'
import About from './components/about/About.vue'
import Withdrawals from './components/home/withdrawals/Withdrawals.vue'


export const routes = [
    { path: "/home",name: "homeLink",component: Home},
    {path: "/withdrawals", name: "withdrawalsLink", component: Withdrawals},
    { path: "/about",name: "aboutLink",component: About },
    // {path:'*',redirect:'/'}
];