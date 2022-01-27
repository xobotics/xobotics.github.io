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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
          autem blanditiis sint hic quam ut enim voluptas debitis ex! Quia, in
          officia fuga nulla explicabo sit delectus doloremque nostrum
          perspiciatis.
        </p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque,
          veniam, debitis at expedita illum dolores adipisci deleniti
          dignissimos repellat dolor possimus corrupti aspernatur? Incidunt
          cumque dolore modi quia numquam tempore!
        </p>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
#about-section{
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