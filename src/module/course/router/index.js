import Home from '@/module/home/page/home.vue'
// eslint-disable-next-line camelcase
import category_list from '@/module/course/page/category_list.vue'

export default [{
  path: '/course',
  component: Home,
  name: '课程管理',
  hidden: false,
  children: [
    {path: '/course/category/list', name: '课程分类', component: category_list, hidden: false},
  ]
}
]
