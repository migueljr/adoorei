<template>
  <Layouters>
    <div class="md:w-101 w-11/12 mt-8 shadow-md p-7 rounded bg-white mb-10 ">
      <h1 class="text-center text-3xl mt-5">Dados para pagamento</h1>
      <p class="text-center text-gray-400 text-sm mt-4">Informe os dados do seu cartão de crédito</p>
      <div class="border-b border-gray-200 mt-4"></div>
      <form action="" class="mt-5">
        <div class="flex flex-col mb-4">
          <label for="">Nome como consta em seu cartão</label>
          <InputMask required mask="9999 9999 9999 9999" class="h-12 px-3 border-2 rounded-xl border-gray-300"/>
        </div>
        <div class="flex flex-col mb-4">
          <label for="">Número do Cartão de Crédito</label>
          <input type="text" class="h-12 px-3 border-2 rounded-xl border-gray-300">
        </div>
        <div class="flex">
            <div class="flex-1 mb-4">
                <label for="">Data de validade</label>
                <InputMask required mask="99" placeholder="MM" class="h-12 border-2 w-11/12 p-3 focus:border-gray-500 rounded-xl border-gray-300"/>
            </div>
            <div class="flex-1 mb-4">
                <label for="" class="invisible">.</label>
                <InputMask required mask="99" placeholder="AA" class="h-12 border-2 w-full p-3 focus:border-gray-500 rounded-xl border-gray-300"/>
            </div>
        </div>
        <div class="flex">
            <div class=" flex-1 mb-4">
                <label for="">Código de Segurança</label>
                <InputMask required mask="999" placeholder="123" class="h-12 border-2 w-11/12 p-3  focus:border-gray-500 rounded-xl border-gray-300"/>
            </div>
            <div class="flex-1 mb-4">
                
            </div>
        </div>
        <div class="flex flex-col justify-center items-center mt-10 text-xs md:text-base">
          <input type="submit" value="PAGAR R$57" class="h-12 px-3 rounded-full bg-pink-600 text-white w-1/2 md:w-1/3 cursor-pointer hover:bg-pink-700">
        </div>
      </form>
    </div>
  </Layouters>
</template>

<script>
import Layouters from './Layouters.vue'
import InputMask from 'primevue/inputmask';
export default {
  name: 'PersonalData',
  components:{
    Layouters,
    InputMask
  }
}
</script>
