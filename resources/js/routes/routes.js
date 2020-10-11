import home from "../components/backend/home";
import categories from "../components/backend/category/manage";
import addcategory from "../components/backend/category/create"
export const routes=[
//routes name
    {path:'/home',component:home},
    {path:'/categories',component:categories},
    {path:'/add-category',component:addcategory},
];
