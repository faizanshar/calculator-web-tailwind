<script>

export default {
  data(){
    return{
      calc: '',
      hasil: 0,
      deleted: ''
    }
  },
  methods: {
    addCalc(v){
      if(this.calc === ''){
        this.calc = v
      } else {
        this.calc = this.calc + '' + v
      }
    },
    sumCalc(){
      try {
        this.hasil = eval(this.calc)
        this.calc = this.hasil
      } catch (error){
        alert('are u stupid ?')
        this.calc = ''
      }
    },
    deleteCalc(){
      const data = this.calc
      this.deleted = data.substring(0,data.length -1)
      this.calc = this.deleted
    },
    test(v){
      this.calc = v
    }
  }
}

</script>

<template>
  <section class="min-h-screen flex flex-wrap Container justify-center">

<!-- left -->
    <div class="w-full md:w-1/2 flex items-center justify-center ">
      <div class="w-3/4 h-3/4 bg-calculator shadow-xl rounded-xl px-4 py-2">
        <div class="w-full h-20 flex items-center justify-end px-3 mt-5 bg-gray-900 rounded">
          <h1 v-if="calc" class="text-2xl font-bold">{{calc}}</h1>
          <h1 v-else class="text-2xl font-bold">0</h1>
        </div>
        <div class="h-4/6 mt-7 flex">
          <div class="w-3/4 flex flex-col">
            <div class="flex h-1/5 items-center justify-evenly">
              <button class="w-1/4 h-4/5 rounded-full bg-buttony shadow-xl font-bold text-base font-ubuntu" @click="calc = ''">C</button>
              <button class="w-1/4 h-4/5 rounded-full bg-buttony shadow-xl font-bold text-base font-ubuntu" @click="addCalc('%')">%</button>
              <button class="w-1/4 h-4/5 rounded-full bg-buttony shadow-xl font-bold text-base font-ubuntu" @click="addCalc('*')">X</button>
            </div>
            <div class="flex h-1/5 items-center justify-evenly">
              <button class="w-1/4 h-3/4 rounded-full bg-buttonc shadow-2xl font-bold text-base font-ubuntu" @click="addCalc('7')">7</button>
              <button class="w-1/4 h-3/4 rounded-full bg-buttonc shadow-2xl font-bold text-base font-ubuntu" @click="addCalc('8')">8</button>
              <button class="w-1/4 h-3/4 rounded-full bg-buttonc shadow-2xl font-bold text-base font-ubuntu" @click="addCalc('9')">9</button>
            </div>
            <div class="flex h-1/5 items-center justify-evenly">
              <button class="w-1/4 h-3/4 rounded-full bg-buttonc shadow-2xl font-bold text-base font-ubuntu" @click="addCalc('4')">4</button>
              <button class="w-1/4 h-3/4 rounded-full bg-buttonc shadow-2xl font-bold text-base font-ubuntu" @click="addCalc('5')">5</button>
              <button class="w-1/4 h-3/4 rounded-full bg-buttonc shadow-2xl font-bold text-base font-ubuntu" @click="addCalc('6')">6</button>
            </div>
            <div class="flex h-1/5 items-center justify-evenly">
              <button class="w-1/4 h-3/4 rounded-full bg-buttonc shadow-2xl font-bold text-base font-ubuntu" @click="addCalc('1')">1</button>
              <button class="w-1/4 h-3/4 rounded-full bg-buttonc shadow-2xl font-bold text-base font-ubuntu" @click="addCalc('2')">2</button>
              <button class="w-1/4 h-3/4 rounded-full bg-buttonc shadow-2xl font-bold text-base font-ubuntu" @click="addCalc('3')">3</button>
            </div>
            <div class="flex h-1/5 items-center justify-evenly">
              <button class="w-2/4 h-3/4 rounded-xl bg-buttonc  font-bold text-base font-ubuntu" @click="addCalc('0')">0</button>
              <button class="w-1/4 h-3/4 rounded-full bg-buttonc shadow-2xl font-bold text-base font-ubuntu" @click="deleteCalc">D</button>
            </div>
          </div>
          <div class="w-1/4">
            <div class="flex h-full flex-col items-start justify-evenly">
              <button class="w-3/4 h-1/6 rounded-full mb-1 bg-buttony shadow-2xl font-bold text-base font-ubuntu" @click="addCalc('/')">/</button>
              <button class="w-3/4 h-1/6 rounded-full mb-1 bg-buttony shadow-2xl font-bold text-base font-ubuntu" @click="addCalc('-')">-</button>
              <button class="w-3/4 h-1/6 rounded-full mb-1 bg-buttony shadow-2xl font-bold text-base font-ubuntu" @click="addCalc('+')">+</button>
              <button class="w-3/4 h-2/6 rounded-xl mb-1 bg-buttony shadow-2xl font-bold text-base font-ubuntu" @click="sumCalc">=</button>
            </div>
          </div>
        </div>
      </div>
    </div>
<!-- end left-->
    <div class="md:w-1/2 md:flex hidden  justify-center items-center">
      <div class="w-5/6 flex flex-col items-center h-3/4">
        <h1 class="font-arvo text-6xl">Simple <tag class="text-buttony font-bold shadow-black">Calculator</tag></h1>
        <h2 class="mt-16 font-semibold font-courgette">"If people don't believe how simple mathematics is, it's because they're not aware of how complex life can be."</h2>
        <h1 class="mt-8">----- John Von Neumann -----</h1>
      </div>
    </div>
  </section>
</template>

<style scoped>
.Container {
  max-width: 800px;
  margin: 0 auto;
}
</style>