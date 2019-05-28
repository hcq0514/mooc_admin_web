import Home from '@/module/home/page/home.vue'
// eslint-disable-next-line camelcase
import page_list from '@/module/cms/page/page_list.vue'
import add_page from '@/module/cms/page/add_page.vue'

export default [{
  path: '/cms',
  component: Home,
  name: 'CMS内容管理',
  hidden: false,
  children: [
    {path: '/cms/page/list', name: '页面列表', component: page_list, hidden: false},
    {path: '/cms/page/add', name: '新增页面', component: add_page, hidden: true}
  ]
}
]
