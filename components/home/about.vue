<template>
  <section id="about-section" class="container">
    <div class="row">
      <div class="col-lg-4 about-img-container">
        <img class="about-img" src="/img/about-img.jpg" alt="Arm" />
      </div>
      <div class="col-lg-8 p-5">
        <h2 class="primary-color" style="font-weight: 800; font-size: 4em">
          What we do?
        </h2>
        <h4>Robotics Development</h4>
        <p>
          Our Vision is to be the Forerunner in Bangladesh’s Robotics and
          Automation sector by manufacturing high quality products and
          delivering reliable services based on cutting edge technologies.
        </p>
        <p>
          XOBOTICS is dedicated to offer industrial and military grade robotics
          and automation solution ensuring high-quality products and reliable
          maintenance services.
        </p>
        <!--<p>
          XOBOTICS, a system integrator in Bangladesh, was founded in 2021 with
          the collaboration of 'ICT Division' and 'Startup Bangladesh' and is
          recognized for its high professional quality of work, dependability,
          and level of service. The firm came into being as a result of the rise
          of numerous industries in Bangladesh.
        </p>
        <p>
          XOBOTICS was founded on and is dedicated to offering a complete
          industrial business solution that ensures concurrent prosperity by
          providing genuine and efficient services and supply of high-quality
          products. At XOBOTICS, our vision is to be the ace champion in
          Bangladesh's industrial solutions sector by delivering reliable and
          international quality service and products based on cutting-edge
          technology.
        </p>-->
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
#about-section {
  padding: 70px 50px;
}
.about-img {
  width: 100%;
}
@media only screen and (max-width: 991px) {
  .about-img-container {
    order: 2;
  }
}
</style>