<template>
  <div class="container" style="margin-bottom:200px">
    <div class="text-center my-5">
      <h1>Meet Our Team</h1>
      <p>
        <!--Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam quae
        sit nulla incidunt tenetur soluta enim, similique vero ex, officia fuga
        quis, aperiam exercitationem iste? Nobis vel similique ab mollitia!-->
      </p>
    </div>
    <div class="my-5 row justify-content-center">
      <div class="col-lg-3">
        <div class="card">
          <img src="/img/team/akib_zaman.jpg" class="card-img-top" alt="Akib Zaman" />
          <div class="card-body">
            <h5 class="card-title">Akib Zaman</h5>
            <p class="card-text">Director & CEO</p>
          </div>
        </div>
      </div>
      <div class="col-lg-3">
        <div class="card">
          <img src="/img/team/ahasan.jpg" class="card-img-top" alt="Ahasan" />
          <div class="card-body">
            <h5 class="card-title">Ahasan Siddique</h5>
            <p class="card-text">Chief Operating Officer</p>
          </div>
        </div>
      </div>
      <div class="col-lg-3">
        <div class="card">
          <img src="/img/team/tanjim.jpg" class="card-img-top" alt="Tanjim" />
          <div class="card-body">
            <h5 class="card-title">Shoeb Ahmed</h5>
            <p class="card-text">Chief Technology Officer</p>
          </div>
        </div>
      </div>
      <div class="col-lg-3">
        <div class="card">
          <img src="/img/team/shafayet.jpg" class="card-img-top" alt="Shafayet" />
          <div class="card-body">
            <h5 class="card-title">Shafayetul Islam</h5>
            <p class="card-text">Principal Hardware Officer</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.card {
  margin: 20px auto;
  padding: 15px;
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