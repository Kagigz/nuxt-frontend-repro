<script setup lang="ts">
const talks = [
  {
    date: '12-2020',
    event: 'Asynconf',
    title: 'Create a bot for your videogames',
    description:
      'Learn how to create a bot on Azure with the Bot Framework Composer & integrate it in Unity to use in your videogames.',
  },
  {
    date: '12-2020',
    event: 'Virtual Azure Community Day',
    title: 'Infuse AI in your apps: easier done than said',
    description:
      'Leverage the Azure Cognitive Services no-code tools and APIs to easily add AI to your apps',
  },
  {
    date: '11-2020',
    event: 'All Around Azure (France)',
    title: 'Boost client engagement with Conversational AI',
    description:
      "Discover Azure's Conversational AI platform to build bots for your customers \n(Disclaimer: this talk was not created by me and I only delivered it in French)",
  },
  {
    date: '04-2020',
    event: 'MS France Tech3',
    title: 'Find out where your money goes with invoice recognition and NLP',
    description:
      'Learn how to use Azure Form Recognizer to automatically extract content from your invoices and how to cluster the results into different categories using the CamemBERT model.',
  },

  {
    date: '01-2020',
    event: 'Women in Tech @ Microsoft',
    description:
      'Discover tech roles at Microsoft and hear about the experience of Microsoft female employees',
  },
  {
    date: '11-2019',
    event: 'MS Ignite / Duchess Community Popup',
    description:
      'Hear from a CTO, a Cloud architect & a Software Engineer about the challenges they face in their jobs',
  },
]
</script>

<template>
  <div class="min-h-screen md:py-8 md:px-12">
    <h1 class="title mt-10 md:mt-16 ml-4 md:ml-10 mb-8">
      TALKS & PRESENTATIONS.
    </h1>
    <div class="container w-full h-full py-12 px-6 md:px-12">
      <div
        v-for="(n, i) in talks"
        :key="i"
        class="relative wrap overflow-hidden h-full"
      >
        <div
          class="
            border-2-2
            absolute
            border-opacity-20 border-gray-700
            h-full
            border
            left-4
            md:left-12
          "
        ></div>
        <div class="mb-8 flex items-center w-full px-2 md:px-10">
          <div
            class="z-20 flex items-center background-grey w-4 h-4 rounded-full"
          ></div>
          <div class="w-full md:w-1/2 px-6 md:px-12 py-4">
            <h3 class="mb-1 bold red medium-text">
              {{ n.event }}
            </h3>
            <h4 v-if="n.title" class="medium-text mt-1 mb-1">
              {{ n.title }}
            </h4>
            <div class="mb-2 dark-grey small-text">
              {{ n.date }}
            </div>
            <p class="paragraph">
              {{ n.description }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
