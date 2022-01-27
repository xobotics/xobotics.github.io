<template>
  <div>
    <div class="row mx-0 hero-bg-img">
      <div class="col-lg-6 p-5">
        <h1 class="primary-color" style="font-weight: 800; font-size: 4em">
          Robotics & Automation
        </h1>
        <h4>Develops the next generation industrial robots</h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi
          mollitia quas odio! Placeat corporis accusamus nobis, consequuntur ab
          delectus laboriosam voluptatibus expedita officia optio vel odio
          minima. Cupiditate, soluta dolore.
        </p>
        <a href="#services-section" class="btn btn-primary btn-lg mt-3"
          >Get Started</a
        >
        <!--<div class="dotted-bg"></div>-->
      </div>
      <div class="col-lg-6 p-0 img-container">
        <img class="hero-img" src="/img/hero-img.png" alt="Arm" />
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.img-container {
  text-align: center;
}
.hero-img {
  width: 86%;
}
.hero-bg-img {
  background-image: url("/img/hero-bg.png");
  background-position: top;
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 80vh;
  padding: 140px 50px;
}
.dotted-bg {
  background-color: #fff;
  background-image: radial-gradient(circle, #00f 5%, transparent 10%),
    radial-gradient(circle, #00f 5%, transparent 10%);
  background-size: 20px 30px;
  background-position: 0 0, 20px 50px;
}

@media only screen and (max-width: 991px) {
  .hero-bg-img {
    text-align: center;
    padding: 35px 20px;
  }
  .hero-img {
    width: 75%;
  }
}
</style>