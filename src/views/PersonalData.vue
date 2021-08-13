<template>
  <Layouters>
    <div class="md:w-101 w-11/12 mt-8 shadow-md p-7 rounded bg-white mb-10">
      <h1 class="text-center text-3xl mt-5">Dados pessoais</h1>
      <p class="text-center text-gray-400 text-sm mt-4">informe seus dados pessoais</p>
      <div class="border-b border-gray-200 mt-4"></div>
      <form action="" class="mt-5">
        <div class="flex flex-col mb-4">
          <label for="">Nome completo</label>
          <input required type="text" class="h-12 px-3 border-2 rounded-xl border-gray-300">
        </div>
        <div class="flex flex-col mb-4">
          <label for="">CPF</label>
          <InputMask required mask="999.999.999-99" class="h-12 px-3 border-2 rounded-xl border-gray-300"/>
        </div>
        <div class="flex flex-col mb-4">
          <label for="">E-MAIL</label>
          <input type="email" required class="h-12 px-3 border-2 rounded-xl border-gray-300">
        </div>
        <div class="flex flex-col mb-4">
          <label for="">CELULAR</label>
          <InputMask required mask="(99) 99999-9999" class="h-12 px-3 border-2 rounded-xl border-gray-300"/>
        </div>
        <div class="flex flex-col justify-center items-center mt-10 text-xs md:text-base">
          <input type="submit" value="CONTINUAR" class="h-12 px-3 rounded-full bg-pink-600 text-white w-1/3 cursor-pointer hover:bg-pink-700">
        </div>
      </form>
    </div>
  </Layouters>
</template>

<script>
import InputMask from 'primevue/inputmask';
import Layouters from './Layouters.vue'
export default {
  name: 'PersonalData',
  components:{
    Layouters,
    InputMask
  }
}
</script>
