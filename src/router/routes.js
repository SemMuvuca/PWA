
const routes = [
  {
    path: '/',
    component: () => import('layouts/RegisterLoginLayout.vue'),
    children: [
      { path: '', name: 'Raiz', component: () => import('pages/apresentacao/Apresentacao.vue') },
      { path: 'login', name: 'Login', component: () => import('pages/apresentacao/Login.vue') },
      { path: 'registro', name: 'Registro', component: () => import('pages/apresentacao/Registro.vue') },
    ]
  },
  {
    path: '/main',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', name: 'Main', component: () => import('pages/Scanner.vue') },
      { path: '/carrinho', name: 'Carrinho', component: () => import('pages/Carrinho.vue') },
      { path: '/sobrenos', name: 'Sobrenos', component: () => import('pages/SobreNos.vue') }
    ]
  },
  {
    path: '/pagamento',
    component: () => import('layouts/PagamentoLayout.vue'),
    children: [
      { path: '/checkout', name: 'Checkout', component: () => import('pages/pagamento/Checkout.vue') }
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
