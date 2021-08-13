<template>
  <div class="bg-gray-100 h-screen">
    <nav>
    <ul class="flex flex-wrap justify-center pt-5">
      <li>
        <router-link class="mr-5 text-pink-600 underline" to="/">Dados Pessoais</router-link>
      </li>
      <li>
        <router-link class="mr-5 text-pink-600 underline" to="/address">Endereço de cobrança</router-link>
      </li>
      <li>
        <router-link class="mr-5 text-pink-600 underline" to="/payment-data">Dados para pagamento</router-link>
      </li>
      <li>
        <router-link class="mr-5 text-pink-600 underline" to="/packages">Pacotes</router-link>
      </li>
      <li>
        <router-link class="mr-5 text-pink-600 underline" to="/data-store">Dados da loja</router-link>
      </li>
      <li>
        <router-link class="mr-5 text-pink-600 underline" to="/thanks">Obrigado pela compra</router-link>
      </li>
    </ul>
  </nav>
  <router-view/>
  </div>
</template>
