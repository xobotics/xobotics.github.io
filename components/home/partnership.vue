<template>
  <section class="container mx-auto" id="partnership-section">
    <div class="text-center">
      <h2
        class="primary-color mb-5 text-center"
        style="font-weight: 800; font-size: 4em"
      >
        Our Partners
      </h2>
    </div>
    <div class="grid md:grid-cols-2 justify-items-center">
      <div class="partner-img-container">
        <img
          class="partner-logo"
          src="/img/partner/ict-division.png"
          alt="ICT Division"
        />
      </div>
      <div class="partner-img-container">
        <img
          class="partner-logo"
          src="/img/partner/startup-bd.jpg"
          alt="Startup BD"
        />
      </div>
      <!--<div class="col-lg-3 partner-img-container">
        <img
          class="partner-logo"
          src="/img/partner/startup-bd.jpg"
          alt="Startup BD"
        />
      </div>
      <div class="col-lg-3 partner-img-container">
        <img
          class="partner-logo"
          src="/img/partner/startup-bd.jpg"
          alt="Startup BD"
        />
      </div>-->
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
#partnership-section {
  padding: 70px 50px;
}
.partner-img-container {
  text-align: center;
}
.partner-logo {
  width: 300px;
  margin: auto;
}
</style>