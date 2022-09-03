<template>
  <div class="ab ak lg:a1z/12 mx-auto">
      <div>
        <h2
          class="wow fadeInUp a2n a2o a1P a2p a1k dark:aT sm:a2q sm:a2p"
          data-wow-delay="0s"
        >
          {{ news.title }}
        </h2>
        <div
          class="wow fadeInUp a1W aa a1L ac ah a26 a27 a28 a2r dark:a1I dark:a28"
          data-wow-delay="0s"
        >
          <div class="aa a1L ac">
            <div class="a2s aa ac">
              <p class="aa ac aQ dark:aS">
                <span class="a2t a2u dark:aT">
                  <svg width="21" height="21" viewBox="0 0 21 21" class="a1B">
                    <path
                      d="M6.125 10.5H7.875V12.25H6.125V10.5ZM18.375 5.25V17.5C18.375 17.9641 18.1906 18.4092 17.8624 18.7374C17.5342 19.0656 17.0891 19.25 16.625 19.25H4.375C3.40375 19.25 2.625 18.4625 2.625 17.5V5.25C2.625 4.78587 2.80937 4.34075 3.13756 4.01256C3.46575 3.68437 3.91087 3.5 4.375 3.5H5.25V1.75H7V3.5H14V1.75H15.75V3.5H16.625C17.0891 3.5 17.5342 3.68437 17.8624 4.01256C18.1906 4.34075 18.375 4.78587 18.375 5.25ZM4.375 7H16.625V5.25H4.375V7ZM16.625 17.5V8.75H4.375V17.5H16.625ZM13.125 12.25V10.5H14.875V12.25H13.125ZM9.625 12.25V10.5H11.375V12.25H9.625ZM6.125 14H7.875V15.75H6.125V14ZM13.125 15.75V14H14.875V15.75H13.125ZM9.625 15.75V14H11.375V15.75H9.625Z"
                    />
                  </svg>
                </span>
                {{ news.date }}
              </p>
            </div>
          </div>
        </div>
        <div>
          <p
            class="wow fadeInUp a1W a1F a1R a2v aQ dark:aS sm:aO sm:a2v lg:a1F lg:a2v xl:aO xl:a2v"
            data-wow-delay="0s"
          >
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat.
          </p>
          <div class="wow fadeInUp a1W ab a2c au" data-wow-delay="0s">
            <img :src="news.img" alt="image" class="a2w ab au a2x a2y" />
          </div>
          <p
            class="wow fadeInUp a2n a1F a1R a2v aQ dark:aS sm:aO sm:a2v lg:a1F lg:a2v xl:aO xl:a2v"
            data-wow-delay="0s"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
            enim lobortis scelerisque fermentum. Neque sodales ut etiam sit
            amet. Ligula ullamcorper
            <strong class="aR dark:aT"> malesuada </strong>
            proin libero nunc consequat interdum varius. Quam pellentesque nec
            nam aliquam sem et tortor consequat. Pellentesque adipiscing commodo
            elit at imperdiet.
          </p>
          <p
            class="wow fadeInUp a1W a1F a1R a2v aQ dark:aS sm:aO sm:a2v lg:a1F lg:a2v xl:aO xl:a2v"
            data-wow-delay="0s"
          >
            Semper auctor neque vitae tempus quam pellentesque nec.
            <span class="aR a2z dark:aT"> Amet dictum sit amet justo </span>
            donec enim diam. Varius sit amet mattis vulputate enim nulla aliquet
            porttitor. Odio pellentesque diam volutpat commodo sed.
          </p>
          <h3
            class="a2A wow fadeInUp a1W a1P a2p a1k dark:aT sm:a2B sm:a2p lg:a1O lg:a2p xl:a2B xl:a2p"
            data-wow-delay="0s"
          >
            _____
          </h3>
          <p
            class="wow fadeInUp a1W a1F a1R a2v aQ dark:aS sm:aO sm:a2v lg:a1F lg:a2v xl:aO xl:a2v"
            data-wow-delay="0s"
          >
            consectetur adipiscing elit in voluptate velit esse cillum dolore eu
            fugiat nulla pariatur. Excepteur sint occaecat mattis vulputate
            cupidatat.
          </p>
          <ul class="wow fadeInUp a1W a2C a2D aS" data-wow-delay="0s">
            <li class="a2s a1F a1R aQ dark:aS sm:aO lg:a1F xl:aO">
              Consectetur adipiscing elit in voluptate velit.
            </li>
            <li class="a2s a1F a1R aQ dark:aS sm:aO lg:a1F xl:aO">
              Mattis vulputate cupidatat.
            </li>
            <li class="a2s a1F a1R aQ dark:aS sm:aO lg:a1F xl:aO">
              Vulputate enim nulla aliquet porttitor odio pellentesque
            </li>
            <li class="a2s a1F a1R aQ dark:aS sm:aO lg:a1F xl:aO">
              Ligula ullamcorper malesuada proin
            </li>
          </ul>
          <p
            class="wow fadeInUp a1W a1F a1R a2v aQ dark:aS sm:aO sm:a2v lg:a1F lg:a2v xl:aO xl:a2v"
            data-wow-delay="0s"
          >
            consectetur adipiscing elit in voluptate velit esse cillum dolore eu
            fugiat nulla pariatur. Excepteur sint occaecat mattis vulputate
            cupidatat.
          </p>
          <!--<div class="wow fadeInUp ac ah sm:aa" data-wow-delay="0s">
            <div class="a2K">
              <h5 class="a2d a1j a1R aQ dark:aS">Popular Tags :</h5>
              <div class="aa ac">
                <a
                  href="javascript:void(0)"
                  class="a1p aV ac a1t a1u a1v am ak aQ hover:a1A hover:aT dark:a3 dark:aS dark:hover:a1A dark:hover:aT"
                >
                  Design
                </a>
                <a
                  href="javascript:void(0)"
                  class="a1p aV ac a1t a1u a1v am ak aQ hover:a1A hover:aT dark:a3 dark:aS dark:hover:a1A dark:hover:aT"
                >
                  Development
                </a>
                <a
                  href="javascript:void(0)"
                  class="a1p aV ac a1t a1u a1v am ak aQ hover:a1A hover:aT dark:a3 dark:aS dark:hover:a1A dark:hover:aT"
                >
                  Info
                </a>
              </div>
            </div>
            <div class="a2K">
              <h5 class="a2d a1j a1R aS sm:a2L">Share this post :</h5>
              <div class="aa ac sm:ap">
                <a
                  href="javascript:void(0)"
                  class="aV a2M a2N ac a1t a1u a1v aQ hover:a1A hover:aT dark:a3 dark:aS dark:hover:a1A dark:hover:aT sm:a2O"
                >
                  <svg width="16" height="16" viewBox="0 0 16 16" class="a1B">
                    <path
                      d="M14.3442 0H1.12455C0.499798 0 0 0.497491 0 1.11936V14.3029C0 14.8999 0.499798 15.4222 1.12455 15.4222H14.2942C14.919 15.4222 15.4188 14.9247 15.4188 14.3029V1.09448C15.4688 0.497491 14.969 0 14.3442 0ZM4.57316 13.1089H2.29907V5.7709H4.57316V13.1089ZM3.42362 4.75104C2.67392 4.75104 2.09915 4.15405 2.09915 3.43269C2.09915 2.71133 2.69891 2.11434 3.42362 2.11434C4.14833 2.11434 4.74809 2.71133 4.74809 3.43269C4.74809 4.15405 4.19831 4.75104 3.42362 4.75104ZM13.1947 13.1089H10.9206V9.55183C10.9206 8.7061 10.8956 7.58674 9.72108 7.58674C8.52156 7.58674 8.34663 8.53198 8.34663 9.47721V13.1089H6.07255V5.7709H8.29665V6.79076H8.32164C8.64651 6.19377 9.37122 5.59678 10.4958 5.59678C12.8198 5.59678 13.2447 7.08925 13.2447 9.12897V13.1089H13.1947Z"
                    />
                  </svg>
                </a>
                <a
                  href="javascript:void(0)"
                  class="a2O aV a2M a2N ac a1t a1u a1v aQ hover:a1A hover:aT dark:a3 dark:aS dark:hover:a1A dark:hover:aT"
                >
                  <svg width="18" height="14" viewBox="0 0 18 14" class="a1B">
                    <path
                      d="M15.5524 2.26027L16.625 1.0274C16.9355 0.693493 17.0202 0.436644 17.0484 0.308219C16.2016 0.770548 15.4113 0.924658 14.9032 0.924658H14.7056L14.5927 0.821918C13.9153 0.282534 13.0685 0 12.1653 0C10.1895 0 8.6371 1.48973 8.6371 3.21062C8.6371 3.31336 8.6371 3.46747 8.66532 3.57021L8.75 4.0839L8.15726 4.05822C4.54435 3.95548 1.58065 1.13014 1.10081 0.642123C0.310484 1.92637 0.762097 3.15925 1.24194 3.92979L2.20161 5.36815L0.677419 4.5976C0.705645 5.67637 1.15726 6.52397 2.03226 7.14041L2.79435 7.65411L2.03226 7.93665C2.5121 9.24658 3.58468 9.78596 4.375 9.99144L5.41935 10.2483L4.43145 10.8647C2.85081 11.8921 0.875 11.8151 0 11.738C1.77823 12.8682 3.89516 13.125 5.3629 13.125C6.46371 13.125 7.28226 13.0223 7.47984 12.9452C15.3831 11.25 15.75 4.82877 15.75 3.54452V3.36473L15.9194 3.26199C16.879 2.44007 17.2742 2.00342 17.5 1.74658C17.4153 1.77226 17.3024 1.82363 17.1895 1.84932L15.5524 2.26027Z"
                    />
                  </svg>
                </a>
                <a
                  href="javascript:void(0)"
                  class="a2O aV a2M a2N ac a1t a1u a1v aQ hover:a1A hover:aT dark:a3 dark:aS dark:hover:a1A dark:hover:aT"
                >
                  <svg width="9" height="18" viewBox="0 0 9 18" class="a1B">
                    <path
                      d="M8.13643 7H6.78036H6.29605V6.43548V4.68548V4.12097H6.78036H7.79741C8.06378 4.12097 8.28172 3.89516 8.28172 3.55645V0.564516C8.28172 0.254032 8.088 0 7.79741 0H6.02968C4.11665 0 2.78479 1.58064 2.78479 3.92339V6.37903V6.94355H2.30048H0.65382C0.314802 6.94355 0 7.25403 0 7.70564V9.7379C0 10.1331 0.266371 10.5 0.65382 10.5H2.25205H2.73636V11.0645V16.7379C2.73636 17.1331 3.00273 17.5 3.39018 17.5H5.66644C5.81174 17.5 5.93281 17.4153 6.02968 17.3024C6.12654 17.1895 6.19919 16.9919 6.19919 16.8226V11.0927V10.5282H6.70771H7.79741C8.11222 10.5282 8.35437 10.3024 8.4028 9.96371V9.93548V9.90726L8.74182 7.95968C8.76604 7.7621 8.74182 7.53629 8.59653 7.31048C8.54809 7.16935 8.33016 7.02823 8.13643 7Z"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>-->
        </div>
      </div>
    </div>
</template>
<script>
export default{
  props:['news']
}
</script>