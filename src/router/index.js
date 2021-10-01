import { About } from "../pages/About"
import { Login } from "../pages/Login";
import { PostIdPage } from "../pages/PostIdPage"
import { Posts } from "../pages/Posts"
import { PostsWithLazy } from "../pages/PostsWithLazy"

export const privateRoutes = [
  {path: '/about', component: About, exact: true},
  {path: '/posts', component: PostsWithLazy, exact: true},
  {path: '/posts/:id', component: PostIdPage, exact: true},
];

export const publicRoutes = [
  {path: '/login', component: Login, exact: true},
]

