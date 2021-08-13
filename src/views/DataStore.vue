<template>
  <Layouters>
    <div class="md:w-101 w-11/12 mt-8 shadow-md p-7 rounded bg-white mb-10">
      <h1 class="text-center text-3xl mt-5">Dados da Loja</h1>
      <p class="text-center text-gray-400 text-sm mt-4">Informe os dados da sua loja</p>
      <div class="border-b border-gray-200 mt-4"></div>
      <form action="" class="mt-5">
        <div class="flex flex-col mb-4">
          <label for="">Dominio da shopify</label>
          <input required type="text" placeholder="Exemplo: https://adoorei.myshopify.com" class="h-12 px-3 border-2 rounded-xl border-gray-300">
        </div>
        <div class="flex flex-col mb-4">
          <label for="">Nome da Loja</label>
          <input required type="text" class="h-12 px-3 border-2 rounded-xl border-gray-300">
        </div>
        <div class="flex flex-col mb-4">
          <label for="">E-mail para seus clientes entrar em contato</label>
          <input type="email" class="h-12 px-3 border-2 rounded-xl border-gray-300">
        </div>
        <div class="flex flex-col mb-4">
          <label for="">Possui CNPJ</label>
          <div class="flex mt-3">
              <div class="cursor-pointer">
                  <input v-model="has_cnpj" name="has_cnpj" value="yes" id="has_cnpj_true" type="radio">
                  <label class="mr-7 ml-1" for="has_cnpj_true">SIM</label>  
              </div>
              <div class="cursor-pointer">
                  <input v-model="has_cnpj" class="form-radio" value="not" name="has_cnpj" id="has_cnpj_false" type="radio">
                  <label class="mr-7 ml-1" for="has_cnpj_false">NÃO</label>  
              </div>
          </div>
        </div>
        <div v-if="has_cnpj=='yes'">
          <div class="flex flex-col mb-4">
          <label for="">CNPJ</label>
          <InputMask required mask="99.999.999/9999-99" class="h-12 px-3 border-2 rounded-xl border-gray-300"/>
        </div>
          <div class="flex flex-col mb-4">
            <label for="">CEP</label>
            <InputMask required v-model="cepDigitado" mask="99999-999" class="h-12 px-3 border-2 rounded-xl border-gray-300"/>
          </div>
          <div class="flex flex-col mb-4">
            <label for="">Endereço</label>
            <input type="text" v-model="dataUser.logradouro" class="h-12 px-3 border-2 rounded-xl border-gray-300">
          </div>
          <div class="flex">
              <div class="flex-1 mb-4">
                  <label for="">Número</label>
                  <input type="text" v-model="dataUser.siafi" class="h-12 border-2 p-3 w-11/12 focus:border-gray-500 rounded-xl border-gray-300">
              </div>
              <div class="flex-1 mb-4">
                  <label for="">Complemento</label>
                  <input type="text" v-model="dataUser.complemento" class="h-12 border-2 p-3 w-full focus:border-gray-500 rounded-xl border-gray-300">
              </div>
          </div>
          <div class="flex">
              <div class=" flex-1 mb-4">
                  <label for="">Estado</label>
                  <input type="text" v-model="dataUser.uf" class="h-12 border-2 w-11/12 p-3 focus:border-gray-500 rounded-xl border-gray-300">
              </div>
              <div class="flex-1 mb-4">
                  <label for="">Cidade</label>
                  <input type="text" v-model="dataUser.localidade" class="h-12 border-2 w-full p-3 focus:border-gray-500 rounded-xl border-gray-300">
              </div>
          </div>
        </div>
        <div class="flex flex-col justify-center items-center mt-10 text-xs md:text-base">
          <input type="submit" value="CONCLUIR" class="h-12 px-3 rounded-full bg-pink-600 text-white w-1/2 md:w-1/3 cursor-pointer hover:bg-pink-700">
        </div>
      </form>
    </div>
  </Layouters>
</template>

<script>
import Layouters from './Layouters.vue'
import InputMask from 'primevue/inputmask';
import { ref } from '@vue/reactivity';
import { onMounted, watch } from '@vue/runtime-core';
export default {
  name: 'PersonalData',
  components:{
    Layouters,
    InputMask
  },
  setup(){
    const has_cnpj = ref(null)

    const dataUser = ref({})

    const cepDigitado = ref('')

    watch(cepDigitado,(now, before)=>{
      if(now.length==9){
        let result = now.split('-').join('')
        if(result.indexOf('_') == -1){
          searchCep()
        }else{
          dataUser.value = {}
        }
      }
      
    })

    

    function searchCep(){
      fetch(`https://viacep.com.br/ws/${cepDigitado.value}/json/`)
      .then(json=>json.json())
      .then(r=> dataUser.value = r)
    }

    onMounted(()=>{

    })

    return {cepDigitado, dataUser, has_cnpj}

  }
}
</script>
