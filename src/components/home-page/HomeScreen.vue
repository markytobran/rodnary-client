<template>
  <section class="h-full w-full home-background bg-no-repeat bg-cover bg-left-bottom relative z-10">
    <img
      id="leaf1"
      class="w-12 h-12 absolute bottom-1/3 left-20 transform rotate-90 leafs"
      src="@/assets/img/home-page/leaf1.png"
      alt="autumn-leaf"
    />
    <img
      id="leaf2"
      class="w-10 h-10 absolute bottom-1/3 right-12 leafs"
      src="@/assets/img/home-page/leaf2.png"
      alt="autumn-leaf"
    />
    <img
      id="leaf3"
      src="@/assets/img/home-page/autumn-leaf.png"
      alt="autumn-leaf"
      class="w-12 h-12 absolute bottom-5/6 md:bottom-1/12 left-1/12 md:left-1/4 transform rotate-180"
    />
    <img
      id="leaf4"
      class="w-12 h-12 absolute bottom-1/3 right-1/3 transform rotate-90 leafs"
      src="@/assets/img/home-page/leaf1.png"
      alt="autumn-leaf"
    />
    <img
      id="leaf5"
      class="w-10 h-10 absolute bottom-2/3 left-48 leafs"
      alt="autumn-leaf"
      src="@/assets/img/home-page/leaf2.png"
    />
    <img
      id="leaf6"
      src="@/assets/img/home-page/autumn-leaf.png"
      alt="autumn-leaf"
      class="w-12 h-12 absolute bottom-4/12 md:bottom-1/12 right-1/4 md:right-1/3 transform rotate-180"
    />
    <p class="absolute bottom-3 right-52 text-white font-bold font-serif">
      Happiness isn't found, it's created within us
    </p>
  </section>
</template>

<style scoped>
.home-background {
  background-image: url('@/assets/img/home-page/home_background.jpg');
}

.leafs {
  filter: drop-shadow(22px -12px 7px rgba(0, 0, 0, 0.5));
}

#leaf1,
#leaf4 {
  animation: leaf1 5s infinite alternate-reverse;
}

#leaf2,
#leaf5 {
  animation: leaf2 5s infinite alternate-reverse;
}

#leaf3,
#leaf6 {
  animation: leaf3 5s infinite alternate-reverse;
}

@keyframes leaf1 {
  from {
    transform: translateY(40px) rotate(90deg);
  }
  to {
    transform: translateY(0) rotate(120deg);
  }
}

@keyframes leaf2 {
  from {
    transform: translateY(0) rotate(110deg);
  }
  to {
    transform: translateY(20px) rotate(120deg);
  }
}

@keyframes leaf3 {
  from {
    transform: translateY(0) rotate(0deg);
  }
  to {
    transform: translateY(40px) rotate(80deg);
  }
}

@media (max-width: 1100px) {
  .home-background {
    background-image: url('@/assets/img/home-page/home_background-tablet.jpg');
  }
}

@media (max-width: 600px) {
  .home-background {
    background-image: url('@/assets/img/home-page/home_background-mobile.jpg');
  }
}
</style>
