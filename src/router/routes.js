
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Scanner.vue') },
      { path: 'checkout', name: 'checkout', component: () => import('src/pages/Checkout.vue') },
      { path: 'carrinho', name: 'carrinho', component: () => import('pages/Carrinho.vue') },
      { path: 'sobreNos', name: 'sobrenos', component: () => import('pages/SobreNos.vue') },
    ]
  },
  {
    path: '/pagamento',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: 'form', component: () => import('pages/PagamentoForm.vue') }
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
