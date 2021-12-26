<script setup lang="ts">
const state = reactive({
  bounce: false,
  imgIndex: 1,
})

const getImgPath = () => {
  const image = '1'
  return `/assets/imgs/me/${state.imgIndex}.jpg`
}

const imgEl = ref(null)

const setImgIndex = (event: any) => {
  const posX = event.x
  const posY = event.y
  const height = imgEl.value.clientHeight / 2
  const width = imgEl.value.clientWidth / 2
  const zones = [-45, 16, 32, 48, 64, 80, 100, 112, 128, 144, 160, 176, 180]
  const x = posX - width
  const y = height - posY
  const rad = Math.atan2(y, x)
  const deg = rad * (180 / Math.PI)
  let index = 1
  if (deg >= -180 && deg < -135) {
    index = 12
  } else if (deg >= -135 && deg < -45) {
    index = 1
  } else {
    for (let i = 0; i < zones.length; i++)
      if (deg > zones[i] && deg <= zones[i + 1]) index = i + 2
  }

  if (index === 13) index = 12
  state.imgIndex = index
}

const resetImgIndex = () => {
  state.imgIndex = 1
}

const setBounce = (bounce: boolean) => {
  state.bounce = bounce
}

const getArrowClass = () => {
  let className = 'red click'
  if (state.bounce) className += ' animate-bounce-hover'
  return className
}
</script>

<template>
  <div class="md:h-screen grid md:grid-cols-2">
    <div class="md:h-screen md:order-last">
      <div class="h-full flex flex-col justify-center items-center pt-16">
        <div class="title">
          <div class="red-filled mb-8">HELLO THERE</div>
        </div>
        <div class="px-24 text-center">
          <p class="paragraph">
            My name is <span class="bold">Katia Gil Guzman</span>, and I'm a
            <span class="bold"
              >French Software Engineer turned Entrepreneur</span
            >. After working at <span class="bold">Microsoft for 3 years</span>,
            I am now the <span class="bold">CTO of Emera</span>, a startup I
            co-founded in April 2021. I love
            <span class="bold">learning new skills</span>, especially when they
            are technology-related, and
            <span class="bold">sharing those learnings</span> to help others.
          </p>
        </div>
        <div
          class="mt-24 flex justify-center items-center flex-col"
          @mouseenter="setBounce(true)"
          @mouseleave="setBounce(false)"
        >
          <div class="cta red mb-1">LATEST NEWS</div>
          <div
            :class="getArrowClass()"
            v-html="$feathericons['arrow-down'].toSvg()"
          ></div>
        </div>
      </div>
    </div>
    <div
      ref="imgEl"
      class="md:h-screen"
      @mousemove="setImgIndex"
      @mouseleave="resetImgIndex"
    >
      <img :src="getImgPath()" class="pictures" />
    </div>
  </div>
</template>

<style lang="scss">
@import '~/styles/theme.scss';

.pictures {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
