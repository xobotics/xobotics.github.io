<template>
  <footer class="main-footer" id="footer-section">
    <div class="container">
      <div class="row">
        <div class="col-lg-6">
          <div class="footer-title">CONTACT US</div>
          <div>
            Phone: (+880) 1701-312939<br />
            Email: xobotics.io@gmail.com
          </div>
        </div>

        <div class="col-lg-6 text-end">
          <div class="footer-title">FOLLOW US</div>
          <div>
            <a href="https://www.facebook.com/xobotics" target="_blank">
              <img
                class="footer-icon"
                src="/icons/facebook.png"
                alt="Facebook"
              />
            </a>
          </div>
        </div>
      </div>
      <div class="copy-right text-center mt-5">Copyright © 2022 Xobotics</div>
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style scoped>
.main-footer {
  padding: 70px 50px;
  padding-bottom: 20px;
  background-color: #242424;
  color: #fff;
}
.footer-title {
  color: #ec1c24;
  font-weight: 600;
  font-size: 1.5em;
}
.footer-icon {
  cursor: pointer;
  width: 35px;
  height: auto;
}
</style>