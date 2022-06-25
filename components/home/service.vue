<template>
  <section id="services-section" class="container mx-auto">
  
    <div class="text-center">
      <h2
        class="primary-color mb-5 text-center"
        style="font-weight: 800; font-size: 4em"
      >
        Services we provide
      </h2>
    </div>
    <div class="flex flex-wrap justify-center">

      <div v-for="(val,i) in services" :key="i" class="cursor-pointer rounded m-3">
        <div class="card ">
          <img :src="val.img" class="card-img-top" :alt="val.title" />
          <div class="card-body p-2">
            <h5 class="card-title">{{ val.title }}</h5>
            <p class="card-text my-2">
              {{ val.text }}
            </p>
            <button class="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
              <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                Learn More
              </span>
            </button>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<script>
export default {
  data(){
    return {
      services:[{
        title:'Robotic Arm',
        text:'Develops Industrial grade Robotic Arm for Smart Industrial Integration',
        link:'#',
        img:'/img/services/1.jpg'
      },
      {
        title:'Process Automation',
        text:'Develops the complete system for process automation.',
        link:'#',
        img:'/img/services/2.png'
      },
      {
        title:'Autonomous Navigation System (ANS)',
        text:'Develops ANS for Multi-Purposed Robotic Systems.',
        link:'#',
        img:'/img/services/3.jpg'
      }]
    }
  }
};
</script>

<style scoped>
#services-section {
  padding: 70px 50px;
}
.card {
  margin: 20px auto;
  width: 20rem;
  text-align: center;
  transition: all 0.5s ease 0s;
}
.card-img-top {
  height: 250px;
  width: auto;
  object-fit: contain;
}
.card:hover {
  box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px,
    rgba(0, 0, 0, 0.22) 0px 10px 10px;
  transform: scale(1.01);
}
</style>