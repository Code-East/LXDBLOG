import Vue from 'vue'
import VueRouter from 'vue-router'
import { getIsLogin } from "network/login";
// 使用路由懒加载导入组件,注意没有大括号
const Home = () =>
    import ("views/home/Home");
const ClassIfy = () =>
    import ("views/classify/ClassIfy");
const FileMe = () =>
    import ("views/fileme/FileMe");
const Login = () =>
    import ("views/login/Login");
const Music = () =>
    import ("views/music/Music");
const Photo = () =>
    import ("views/photo/Photo");
const Time = () =>
    import ("views/time/Time");
const BackStage = () =>
    import ("views/backstage/Backstage");
const Article = () =>
    import ("views/backstage/article/Article");
const ArticleClassIfy = () =>
    import ("views/backstage/articleclassify/ArticleClassIfy");
const Friend = () =>
    import ("views/backstage/friend/Friend");
const PhotoInfo = () =>
    import ("views/backstage/photoinfo/PhotoInfo");
const WriteArticle = () =>
    import ("views/backstage/writearticle/WriteArticle");
const SetArticle = () =>
    import ("views/backstage/setarticle/SetArticle");
const addClassIfy = () =>
    import ("views/backstage/addclassify/addClassIfy");
const setClassIfy = () =>
    import ("views/backstage/setclassify/setClassIfy");

Vue.use(VueRouter)

//定义路由规则
const routes = [
    { path: '/', redirect: 'Home' },
    { path: '/home', component: Home },
    { path: '/time', component: Time },
    { path: '/photo', component: Photo },
    { path: '/music', component: Music },
    { path: '/fileme', component: FileMe },
    { path: '/login', component: Login },
    { path: '/classify', component: ClassIfy },
    {
        path: '/backstage',
        component: BackStage,
        children: [
            { path: '/', redirect: 'Article' },
            { path: 'article', component: Article },
            { path: 'articleclassify', component: ArticleClassIfy },
            { path: 'friend', component: Friend },
            { path: 'photoinfo', component: PhotoInfo },
            { path: 'writearticle', component: WriteArticle },
            { path: 'setarticle/:id', component: SetArticle, },
            { path: 'addclassify', component: addClassIfy, },
            { path: 'setclassify/:id', component: setClassIfy, },

        ]
    }
]

const router = new VueRouter({
    mode: 'hash',
    base: process.env.BASE_URL,
    routes
});

//使用路由守卫，监听每一次路由的跳转，当发现当前跳转到了login页面，就进行判断
router.beforeEach(async(to, from, next) => {
    if (to.path == '/login') {
        //使用浏览器本地存储
        let username = localStorage.getItem('user');
        //使用axios发送一个请求到后端,后端返回true or false，来判断该用户是否登入了
        var isLogin = await getIsLogin({ username });
        if (isLogin.data) {
            //登入了直接进入后台
            console.log('已登入：', isLogin);
            router.replace("/backstage").catch((err) => err);
        } else {
            //未登入进入登入页面
            console.log('未登入：', isLogin);
            next();
        }
    } else {
        next();
    }
});

export default router