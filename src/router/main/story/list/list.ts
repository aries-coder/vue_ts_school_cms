const list = () => import('@/views/main/story/list/index.vue')
// const listDetail = () => import('@/views/main/story/list-detail/index.vue')

export default {
  path: '/main/story/list',
  name: 'list',
  component: list,
  children: [

  ]
}
