<template>
  <section id="services-section" class="container">
    <div class="row justify-content-center">
      <div class="col-12">
        <h2
          class="primary-color mb-5 text-center"
          style="font-weight: 800; font-size: 4em"
        >
          Services we provide
        </h2>
      </div>

      <div class="col-lg-4">
        <div class="card">
          <img src="/img/services/1.jpg" class="card-img-top" alt="Arm" />
          <div class="card-body">
            <h5 class="card-title">Robotic Arm</h5>
            <p class="card-text">Develops robotics arm for industries</p>
            <a href="#" class="btn btn-primary">Get quote</a>
          </div>
        </div>
      </div>

      <div class="col-lg-4">
        <div class="card">
          <img src="/img/services/2.png" class="card-img-top" alt="Arm" />
          <div class="card-body">
            <h5 class="card-title">Process Automation</h5>
            <p class="card-text">
              Develops the complete system for process automation.
            </p>
            <a href="#" class="btn btn-primary">Get quote</a>
          </div>
        </div>
      </div>

      <!--<div class="col-lg-4">
        <div class="card">
          <img src="/img/services/1.jpg" class="card-img-top" alt="Arm" />
          <div class="card-body">
            <h5 class="card-title">Robotic Arm</h5>
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
        </div>
      </div>-->
    </div>
  </section>
</template>

<script>
export default {};
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