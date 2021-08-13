<template>
  <header>
    <div class="container flex flex-col items-center justify-center mx-auto">
      <div>
        <img class="mt-20" src="../assets/logo.png" alt="">
      </div>
      <div>
        <p class="text-gray-900 mx-5 md:mx-0 md:w-100 text-center text-xl">
          Você está muito próximo da mudar sua forma de
          <a href="" class="underline text-pink-600">vender online.</a>
        </p>
      </div>
      <div>
        <p class="md:w-100 text-sm mx-5 md:mx-0 bg-yellow-100 border-2 border-yellow-300 py-2 px-2 rounded mt-8">
          Lojas que vendem réplicas, caixas surpresa ou produtos com promessa milagrosa, não são permitidas em nossa plataforma.
        </p>
      </div>
      <slot></slot>
    </div>
  </header>
</template>
<script>
export default{

  setup() {
    
  }
}
</script>

