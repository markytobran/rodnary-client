<script setup lang="ts">
import { computed, ref } from 'vue'
import addtoWatchListBtn from '@/components/AddToWatchListBtn.vue'
import IconSubtitle from '@/components/icons/IconSubtitle.vue'
import IconVideoBtn from '@/components/icons/IconVideoBtn.vue'

const props = defineProps({
  videoData: Object,
  showDescription: Boolean,
})

const showIframe = ref(false)
const isSubtitle = props.videoData?.subtitles.length > 0

const dynamicVideoRoute = computed(() => `/video/${props.videoData?._id}`)

const reducedTitle = computed(() => props.videoData?.title.substring(0, 52))

const modifiedTime = computed(() => {
  const year = props.videoData?.publishedAt.substring(0, 4)
  const month = props.videoData?.publishedAt.substring(5, 7)
  return `${month}/${year}`
})

const reducedDescription = computed(() => props.videoData.description.substring(0, 136))

const flagPath = computed(
  () => new URL(`../assets/img/flags/${props.videoData?.videoLanguage}.png`, import.meta.url).href
)

const subFishingType = computed(
  () => new URL(`../assets/img/card-icons/${props.videoData?.subFishing}.jpg`, import.meta.url).href
)

const waterType = computed(
  () => new URL(`../assets/img/card-icons/${props.videoData?.water}.jpg`, import.meta.url).href
)

const isNewVideo = computed(() => {
  const today = new Date()
  const createdAt = new Date(props.videoData?.publishedAt)
  const week = 604800
  const sub = (today - createdAt) / 1000

  return sub <= week
})

function togglePictureToIframe() {
  showIframe.value = true
}
</script>
//Figure img and figure captionre atirni
<template>
  <div
    :class="
      showDescription
        ? 'h-96 rounded-lg video-card cursor-pointer video-card-effect hover:z-50'
        : 'h-44 rounded-lg video-card cursor-pointer video-card-without-description hover:z-50'
    "
  >
    <div v-if="!showIframe" class="h-44 w-full rounded-lg relative z-40 overflow-hidden" @click="togglePictureToIframe">
      <img :src="videoData?.coverImgLink" class="w-full h-full" loading="lazy" />
      <span
        class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-12 w-16 ease-in-out duration-100 bg-icon-grey hover:bg-secondary-color rounded-xl flex justify-center items-center"
      >
        <IconVideoBtn class="ml-1 h-7 w-7" color="white" />
      </span>
      <span
        v-if="isNewVideo"
        class="absolute top-5 -right-8 text-xl bg-average-pink text-black font-bold rotate-45 w-32 text-center"
      >
        NEW
      </span>
    </div>
    <iframe
      v-else
      class="h-44 w-full rounded-lg"
      :src="'https://www.youtube.com/embed/' + videoData?.videoID + '?autoplay=1'"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
      loading="lazy"
    />
    <RouterLink
      :to="dynamicVideoRoute"
      :class="
        showDescription
          ? 'h-60 w-full bg-primary-color rounded-lg -mt-1 flex'
          : 'h-60 w-full bg-primary-color rounded-lg -mt-1 flex video-card-description-hover-effect'
      "
    >
      <div class="w-5/6 pt-4 pl-3 pr-2 relative">
        <div class="flex relative">
          <h1 class="text-gray-100 pb-4 pt-1 font-bold w-5/6 text-left">
            {{ reducedTitle }}
          </h1>
          <!-- <addtoWatchListBtn class="h-11 w-11 bg-secondary-color text-white rounded-full flex justify-center items-center absolute right-0 top-2" /> -->
        </div>
        <p class="text-gray-100 text-xs font-light pb-5 text-left break-words">
          {{ reducedDescription }}
        </p>
        <img src="@/assets/img/logo/rodnary-logo.png" alt="Rodnary-logo" class="h-10 w-18 absolute bottom-3 left-3" />
        <span class="h-8 w-15 absolute -bottom-2 left-24 text-gray-100 text-xs font-semibold">{{
          videoData?.videoLength
        }}</span>
        <span class="h-8 w-15 absolute -bottom-2 right-16 text-gray-100 text-xs font-semibold">{{ modifiedTime }}</span>
        <IconSubtitle v-if="isSubtitle" />
      </div>
      <div class="h-full w-1/6 bg-primary-color-light rounded-lg flex flex-col justify-between items-center pt-3 pb-2">
        <img :src="flagPath" :alt="`${videoData?.videoLanguage} flag`" class="h-10 w-16 -mt-2" />
        <img
          :src="subFishingType"
          :alt="videoData?.subFishingType"
          class="h-14 w-14 rounded-full border-4 border-secondary-color"
        />
        <img
          :src="waterType"
          :alt="videoData?.waterType"
          class="h-14 w-14 rounded-full border-4 border-secondary-color"
        />
      </div>
    </RouterLink>
  </div>
</template>

<style scoped>
.video-card {
  box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.4);
  transform: translateY(20%);
  transition: all 0.3s;
}

.video-card-effect:hover {
  box-shadow: 0 54px 99px rgba(0 0 0 / 70%);
  transform: scale(1.08);
}

.video-card-without-description:hover {
  transform: translateY(-0%);
}

.video-card-description-hover-effect {
  transform: translateY(-80%);
  opacity: 0;
  transition-delay: 250ms;
  transition: all 0.3s linear;
}

.video-card:hover .video-card-description-hover-effect {
  opacity: 1;
  transform: translateY(0%);
}
</style>
