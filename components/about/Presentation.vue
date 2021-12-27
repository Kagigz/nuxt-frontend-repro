<script setup lang="ts">
</script>

<template>
  <div id="presentation">
    <div
      class="
        h-full
        flex flex-col
        justify-center
        items-center
        py-24
        background-black
      "
    >
      <div class="title mb-8">ABOUT ME</div>
      <div
        class="
          background-white
          mx-16
          md:mx-24
          lg:mx-48
          small-text
          text-justify
          px-12
          py-8
          dark-grey
        "
      >
        <p class="about-paragraph">
          <span class="red"
            >I started using a computer when I was 4 years old
          </span>
          (it helps that my 2 parents were Software Engineers at the time). I
          liked to play games and most of all online mini-games where you had to
          come back every day to make progress. You usually had a profile that
          you could tweak if you knew how to edit the source code, and that's
          why
          <span class="bold">
            I started learning HTML & CSS when I was 10
          </span>
          - I wanted a page with fancy animations and colors! 🎨
        </p>
        <p class="about-paragraph">
          <span class="red"
            >After that, I was curious to learn how the games themselves were
            made,</span
          >
          so I started learning C++ and programmed my first, very simple, games.
          I absolutely loved it.
          <span class="bold"> That's when I made a promise to myself:</span>
          that I would, one day,
          <span class="bold">
            found my own company that makes software and/or games.
          </span>
          💻
        </p>
        <p class="about-paragraph">
          <span class="red"
            >I'm glad I made that promise when I was still young,</span
          >
          because as I grew up
          <span class="bold"> people kept deterring me:</span> they told me
          Computer Science wasn't for people like me (as in, women) and that it
          was weird that I liked coding. But my heart was already set: I was
          determined to prove all of them wrong. I wanted and still want to show
          everyone that, yes,
          <span class="bold">
            it is possible to love coding AND also love things that would be
            considered "womanly".
          </span>
          💅
        </p>
        <p class="about-paragraph">
          <span class="red">I went on to do pretty standard studies </span>
          for someone who wants to go into Computer Science in France: I went
          through a "prepa" (French preparatory classes for Engineering Schools)
          and got into Telecom SudParis, an Engineering school known for being
          tech-oriented. There,
          <span class="bold"> I learned a lot about soft skills </span> like
          collaboration, communication, design, leadership etc. as I was
          involved in many school initiatives. In parallel,
          <span class="bold"> I honed my technical skills </span> to be able to
          apply to the most prestigious tech companies. ✨
        </p>
        <p class="about-paragraph">
          <span class="red"
            >I did a 6-month end-of-studies internship at Microsoft,
          </span>
          which led to a <span class="bold"> full-time offer </span> in an
          international, customer-facing, Software Engineering team. I also got
          an offer from Google for a similar position but the technology I would
          be working with at Microsoft seemed more interesting, and most of all,
          <span class="bold">
            I would have the opportunity to work on AI projects
          </span>
          - a field I was very interested in. 🤖
        </p>
        <p class="about-paragraph">
          <span class="red">After 3 years at Microsoft </span> during which I
          learned a ton, I felt it was time to try and
          <span class="bold"> get back to my childhood plans:</span> found my
          own company! I decided to jump ship and join a startup studio that
          would
          <span class="bold"> help me launch a startup from scratch </span> .
          That's how Emera was born! With the help of OSS Ventures, which
          introduced me to my co-founder as well, we're going to
          <span class="bold">
            revolutionize client-supplier relationships in the B2B Manufacturing
            Industry.
          </span>
          🏭
        </p>
        <p class="about-paragraph">
          <span class="red">I am now the CTO of Emera, </span> and even though
          that role takes up pretty much all of time
          <span class="bold">
            I try to dedicate a couple hours a week to doing something else
          </span>
          : creating content that you can find on this website. ⌨️
        </p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '~/styles/theme.scss';

.picture {
  height: 100%;
  width: 100%;
  object-fit: cover;
}

.about-paragraph {
  padding-bottom: 8px;
}
</style>
