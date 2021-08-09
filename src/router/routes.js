
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: 'scanner', component: () => import('pages/Scanner.vue') },
      { path: 'carrinho', component: () => import('pages/Carrinho.vue') },
      { path: 'sobreNos', component: () => import('pages/SobreNos.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
