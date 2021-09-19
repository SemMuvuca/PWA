
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
      { path: ':userId', name: 'Main', props: true, component: () => import('pages/Scanner.vue') },
      { path: ':userId/carrinho', name: 'Carrinho', props: true, component: () => import('pages/Carrinho.vue') },
      { path: ':userId/sobrenos', name: 'Sobrenos', props: true, component: () => import('pages/SobreNos.vue') }
    ]
  },
  {
    path: '/pagamento',
    component: () => import('layouts/PagamentoLayout.vue'),
    children: [
      { path: ':userId/checkout', name: 'Checkout', props: true, component: () => import('pages/pagamento/Checkout.vue') }
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
