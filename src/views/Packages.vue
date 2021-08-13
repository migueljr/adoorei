<template>
  <Layouters>
    <div class="container grid grid-cols-1 md:grid-cols-3 gap-10">
        <div class="mt-8 shadow-md p-7 mx-5 md:mx-0 px-10 rounded-xl bg-white ">
            <h1 class="text-center text-3xl mt-5 font-semibold">Validando</h1>
            <h2 class="text-center text-xl text-pink-600 mt-5">R$ <span class="text-4xl font-bold">7</span>/mês</h2>
            <p class="text-center text-md mt-4">+2,5% por pedido pago</p>
            <div class="border-b border-gray-200 mt-4"></div>
            <ul class="mt-5 text-gray-600 text-base">
                <li class="mb-4">Checkout Personalizável</li>
                <li class="mb-4">Pagamento via mercadopago, cloudfox, appmax, hubsale, cielo e pagseguro.</li>
                <li class="mb-4">Recuperação de carrinho via sms ou email</li>
                <li class="mb-4">Recuperação de boletos via sms ou email</li>
                <li class="mb-4">Order Bump</li>
                <li class="mb-4">Cros-sell no checkout</li>
            </ul>
            <p class="text-center mt-20">
                <a class="py-4 px-10 rounded-full text-center bg-pink-600 text-white cursor-pointer hover:bg-pink-700">
                    CONTRATAR
                </a>
            </p>
        </div>
        <div class="mt-8 shadow-md p-7 mx-5 md:mx-0 rounded-xl bg-pink-600 text-white">
            <h1 class="text-center text-3xl mt-5 font-semibold text-green-400">Acertei</h1>
            <h2 class="text-center text-xl text-blue-300 mt-5">R$ <span class="text-4xl font-bold">27</span>/mês</h2>
            <p class="text-center text-md mt-4">+1,5% por pedido pago</p>
            <div class="border-b border-gray-200 mt-4"></div>
            <ul class="mt-5 text-white text-base">
                <li class="mb-4">Todas as funçoes do plano Validando e Acertei</li>
                <li class="mb-4">Recuperação de carrinho via sms, email, whatsapp e ligação telefônica</li>
                <li class="mb-4">Recuperação de boletos via sms, email, whatsapp e ligação telefônica</li>
                <li class="mb-4">Oferta na página e boleto para pagamento via cartão</li>
                <li class="mb-4">Gerente de contas exclusivo</li>
            </ul>
            <p class="text-center mt-20">
                <a class="py-4 px-10 rounded-full text-center bg-black text-white cursor-pointer hover:bg-gray-700">
                    CONTRATAR
                </a>
            </p>
        </div>
        <div class="mt-8 shadow-md p-7 mx-5 md:mx-0 rounded-xl bg-white mb-10 md:mb-0">
            <h1 class="text-center text-3xl mt-5 font-semibold">Escala</h1>
            <h2 class="text-center text-xl text-pink-600 mt-5">R$ <span class="text-4xl font-bold">57</span>/mês</h2>
            <p class="text-center text-md mt-4">+1,5% por pedido pago</p>
            <div class="border-b border-gray-200 mt-4"></div>
            <ul class="mt-5 text-gray-600 text-base">
                <li class="mb-4 text-gray-400">Todas as funçoes do plano Validando e Acertei</li>
                <li class="mb-4">Recuperação de carrinho via sms, email, whatsapp e ligação telefônica</li>
                <li class="mb-4">Recuperação de boletos via sms, email, whatsapp e ligação telefônica</li>
                <li class="mb-4">Oferta na página e boleto para pagamento via cartão</li>
                <li class="mb-4">Gerente de contas exclusivo</li>
            </ul>
            <p class="text-center mt-20">
                <a class="py-4 px-10 rounded-full text-center bg-pink-600 text-white cursor-pointer hover:bg-pink-700">
                    CONTRATAR
                </a>
            </p>
        </div>
    </div>
  </Layouters>
</template>

<script>
import Layouters from './Layouters.vue'
export default {
  name: 'PersonalData',
  components:{
    Layouters
  }
}
</script>
