
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Scanner.vue') },
      { path: 'carrinho', name: 'carrinho', component: () => import('pages/Carrinho.vue') },
      { path: 'sobreNos', name: 'sobrenos', component: () => import('pages/SobreNos.vue') },
    ]
  },
  {
    path: '/pagamento',
    component: () => import('layouts/PagamentoLayout.vue'),
    children: [
      { path: 'checkout', component: () => import('pages/Checkout.vue') }
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
