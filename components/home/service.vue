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
          <img src="/img/services/1.jpg" class="card-img-top" alt="Robotic Arm" />
          <div class="card-body">
            <h5 class="card-title">Robotic Arm</h5>
            <p class="card-text">
              Develops Industrial grade Robotic Arm for Smart Industrial
              Integration
            </p>
            <a href="#" class="btn btn-primary">Get quote</a>
          </div>
        </div>
      </div>

      <div class="col-lg-4">
        <div class="card">
          <img src="/img/services/2.png" class="card-img-top" alt="Process Automation" />
          <div class="card-body">
            <h5 class="card-title">Process Automation</h5>
            <p class="card-text">
              Develops the complete system for process automation.
            </p>
            <a href="#" class="btn btn-primary">Get quote</a>
          </div>
        </div>
      </div>

      <div class="col-lg-4">
        <div class="card">
          <img src="/img/services/3.jpg" class="card-img-top" alt="ANS" />
          <div class="card-body">
            <h5 class="card-title">Autonomous Navigation System (ANS)</h5>
            <p class="card-text">
              Develops ANS for Multi-Purposed Robotic Systems.
            </p>
            <a href="#" class="btn btn-primary">Get quote</a>
          </div>
        </div>
      </div>
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