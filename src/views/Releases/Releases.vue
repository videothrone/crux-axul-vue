<template>
  <ul class="content__releases">
    <li class="content__releases-card" v-for="release in content.releases" :key="release.id">
      <RouterLink :to="{ name: 'ReleaseDetails', params: {
          releaseDetails: release.id,
          releaseLink: release.releaseLink,
          releaseImg: release.releaseImg,
          releaseArtist: release.releaseArtist,
          releaseTitle: release.releaseTitle,
          releaseBandcampEmbbed: release.releaseBandcampEmbbed,
          releaseNumber: release.releaseNumber,
          releaseBlurb: release.releaseBlurb,
          releaseProducer: release.releaseProducer,
          releaseMastering: release.releaseMastering,
          releaseArtwork: release.releaseArtwork,
        }}">
        <img :src="`/src/assets/img/${release.releaseImg}`" />
        <div>{{ release.releaseArtist }} - {{ release.releaseTitle }}</div>
        <div class="content__releases-card-cat">→ {{ release.releaseNumber }}</div>
      </RouterLink>
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      content: {
        releases: [
          {
            id: 'fever-bells',
            releaseLink: 'https://cruxaxul.bandcamp.com/album/fever-bells',
            releaseImg: 'CXA001_thumb.jpg',
            releaseArtist: 'Lymbs',
            releaseTitle: 'Fever Bells',
            releaseBandcampEmbbed:
              'https://bandcamp.com/EmbeddedPlayer/album=3244739003/size=small/bgcol=333333/linkcol=e99708/transparent=true/',
            releaseNumber: 'CXA001',
            releaseBlurb: `✺ World anxiety fueled into four mutant techno excursions. ✺`,
            releaseProducer: 'Produced by Lymbs',
            releaseMastering: 'Simon Hawemann',
            releaseArtwork: 'Artwork by Sarah Kowalewski',
          },
          {
            id: 'new-anxieties',
            releaseLink: 'https://cruxaxul.bandcamp.com/album/new-anxieties',
            releaseImg: 'CXA002_thumb.jpg',
            releaseArtist: 'VA',
            releaseTitle: 'New Anxieties',
            releaseBandcampEmbbed:
              'https://bandcamp.com/EmbeddedPlayer/album=2598648964/size=small/bgcol=ffffff/linkcol=0687f5/transparent=true/',
            releaseNumber: 'CXA002',
            releaseBlurb: `<p>✺ 2019 AD. The Arctic Circle and the Amazon are on fire, fascism is
            on the rise again, the gap between the richest and the poorest is
            still widening. New anxieties need to be addressed.</p><p>Crux Axul has
            invited seven musicians to write and record a piece of music
            motivated by the way they perceive the world changing around them at
            a seemingly ever-increasing pace.</p><p> From Silicone's flickering
            exercise in melodic modular experimentation, to YS' contemporary
            take on Musique Concrète, to Shannon Soundquist's longform drone
            meditation, New Anxieties offers seven takes on a world in turmoil
            that are each as unique as they are coherent as a whole. ✺</p>`,
            releaseProducer: 'Produced by Lymbs',
            releaseMastering: 'Simon Hawemann',
            releaseArtwork: 'Artwork by Sarah Kowalewski',
          },
          {
            id: 'among-nights-feral-laws',
            releaseLink: 'https://cruxaxul.bandcamp.com/album/among-nights-feral-laws',
            releaseImg: 'CXA003_thumb.jpg',
            releaseArtist: 'Sankt & Lymbs',
            releaseTitle: 'Among Nights / Feral Laws',
            releaseBandcampEmbbed:
              'https://bandcamp.com/EmbeddedPlayer/album=185696397/size=small/bgcol=ffffff/linkcol=0687f5/transparent=true/',
            releaseNumber: 'CXA003',
            releaseBlurb: `<p>✺ Sankt (aka Shō) and Lymbs team up for a split EP consisting of original tracks and reciprocal remixes.</p>
            <p>Lymbs' Feral Laws commences the split with murky strings, but soon picks up feverish momentum via juddering hi-hats and mutant
              breakbeats until it dissolves into a mire of ambience and bass sweeps. Sankt refracts Feral Laws' thunder into a myriad splinter
              shards and recasts those into a bass-heavy and ice-cold stepper full of caustic twists and turns. His own Among Nights continues
              this approach with a cavernous skeletal throb accompanied by glassy percussion and ghostly synth occurrences.
              This throb is slowed down to a glacial crawl in Lymbs' closing remix, lurching forward with fluttering cymbals and replicant
              nostalgia before it tumbles and floats into oblivion. ✺</p>`,
            releaseProducer: '',
            releaseMastering: 'Simon Hawemann',
            releaseArtwork: 'Artwork by Sarah Kowalewski',
          },
          {
            id: 'teal-tear',
            releaseLink: 'https://cruxaxul.bandcamp.com/album/teal-tear',
            releaseImg: 'CXA004_thumb.jpeg',
            releaseArtist: 'Opalglas',
            releaseTitle: 'Teal / Tear',
            releaseBandcampEmbbed:
              'https://bandcamp.com/EmbeddedPlayer/album=4063673329/size=small/bgcol=ffffff/linkcol=0687f5/transparent=true/',
            releaseNumber: 'CXA004',
            releaseBlurb: `<p>✺ Opalglas debuts on Crux Axul with Teal / Tear, an EP full of molten bass pressure, dread techno and occasional gestures towards deliverance.</p>
            <p>Teal / Tear is the first more substantial release under the Opalglas alias by polymath C. Kolf, best known for his work in metal projects like Valborg or Owl.
              Here he channels his interests in bass heavy fringe electronics into five tracks of scorched earth rumble and fleeting melodic shimmer.</p>
              This throb is slowed down to a glacial crawl in Lymbs' closing remix, lurching forward with fluttering cymbals and replicant
            <p> The opener Teal and its counterpart, the closer Tear, are exemplary of this. While they seem to buckle under the sheer force of their basslines, that force
              eventually gives way to rushes of harmony and ambience. In contrast to the almost elliptical nature of these tracks, the ones in between are more propulsive
              exercises in restraint and texture. Retrait pulses relentlessly around its negative space, Pericon feels like a John Carpenter thumper trapped
              in a blown out techno cage and Redolent's pads could almost be blissful, if they weren't steadily swallowed by waves of insectile hiss. ✺</p>`,
            releaseProducer: 'C. Kolf / Summer 2020',
            releaseMastering: 'M. Siegenhort',
            releaseArtwork: 'Artwork by Sarah Kowalewski / Design by Ferenc Petöcz',
          },
          {
            id: 'inganical',
            releaseLink: 'https://cruxaxul.bandcamp.com/album/inganical',
            releaseImg: 'CXA005_thumb.jpeg',
            releaseArtist: 'Opalglas',
            releaseTitle: 'Inganical',
            releaseBandcampEmbbed:
              'https://bandcamp.com/EmbeddedPlayer/album=3473179485/size=small/bgcol=ffffff/linkcol=e99708/transparent=true/',
            releaseNumber: 'CXA005',
            releaseBlurb: `<p>✺ Sankt returns to the fold with Inganical, his first full EP under the moniker. Over seven ever-morphing tracks, Sankt strains the organic and inorganic into various angular new forms. </p>
            <p>Ghosts opens Inganical with eerie granular pads and takes shape quite quickly before bursting into a flurry of breaks. Combustor on the other hand instantly delivers industrial-grade footwork, groaning and
              moaning for every inch of its life. The title track expands on this formula in an equally agitated but more glitched-out way, shifting between thudding metallic clanks and more playful textural details.
              Those details come to the fore with disembodied voices floating in and out of the spectrum on the following Zwischen, the EP's fragile midpoint, which soon dissipates into feedback and unease.</p>
            <p>Hydrangea picks up the pace again with its reframed EBM bassline and howling sirens, barreling relentlessly forward, only taking a fleeting pause at an uncanny waterfall. Continuing the onslaught, Goons
              squelches and squeaks, like a malfunctioning machine on its last legs, while Fogbow provides airy but cold breaks combined with a moody yet catchy bassline. At last S S S S (aka Samuel Savenberg) supplies
              an additional scorching remix of Fowbow, sharpening its edges even more. ✺</p>`,
            releaseProducer: 'Florian Sankt',
            releaseMastering: 'Alberto Bertelli ',
            releaseArtwork: 'Artwork by Ferenc Petöcz',
          },
          {
            id: 'crux-i-terminal-beaches',
            releaseLink: 'https://cruxaxul.bandcamp.com/album/crux-i-terminal-beaches',
            releaseImg: 'CXA006_thumb.jpg',
            releaseArtist: 'Lymbs',
            releaseTitle: 'Crux I: Terminal Beaches',
            releaseBandcampEmbbed:
              'https://bandcamp.com/EmbeddedPlayer/album=872982270/size=small/bgcol=333333/linkcol=e99708/transparent=true/',
            releaseNumber: 'CXA006',
            releaseBlurb: `<p>✺ We are proud to present Crux, our new singles series with its eyes and heart firmly on the
              dancefloor. Crux Axul's co-founder Lymbs opens the series and sets the direction it is going to be headed in.</p>
              <p>The title track Terminal Beaches is arguably Lymbs' most melodic work to date, intricately woven around
                reverb-drenched choir shivers that are as haunting as they are catchy. As submerged drums and strings surface
                from below, the track reveals itself to be a rattling stepper, that, while interspersed with various frantic breaks,
                never loses sight of its widescreen melancholia.</p>
              <p>Slouching Towards Oblivion, the single's other side, introduces its breakbeat pressure with a gnashing bassline
                and ominously glittering pads before erupting midway into a swirling arpeggio and battering snares and kicks.
                Morphing its way through various different manifestations of menacing torque, the track disintegrates finally with
                a dense cloud of cavernous choir and strings. ✺</p>`,
            releaseProducer: 'Lymbs',
            releaseMastering: 'Alberto Bertelli at Parallels',
            releaseArtwork: 'Artwork by Ferenc Petöcz',
          },
          {
            id: 'crux-ii-angles-morts',
            releaseLink: 'https://cruxaxul.bandcamp.com/album/crux-ii-angles-morts',
            releaseImg: 'CXA007_thumb.jpg',
            releaseArtist: 'Sankt',
            releaseTitle: 'Crux II: Angles Morts',
            releaseBandcampEmbbed:
              'https://bandcamp.com/EmbeddedPlayer/album=717727169/size=small/bgcol=333333/linkcol=fe7eaf/transparent=true/',
            releaseNumber: 'CXA007',
            releaseBlurb: `<p>✺ Wiry subterranean clunks announce Angles Morts, the second part of our ongoing Crux singles
              series by Sankt. Bending and twitching, these throbs manifest as shapeshifting jungle contortions, sometimes cheeky,
              but mostly straightforward. Demented choral phrases underline the wobble and bluster, before a desolate pad motif
              is woven into its fabric, giving the push and pull a more sullen tone.</p>
              <p>On the single's more explorative B-side Thousand Yard Stare, ambient roil and spalls of turmoil take turns.
                Here, scuttling and filtered drums dance around frosty dub-techno atmospherics, only to erratically and like a
                force of nature break into bursts of breakbeat recoil. Towards the end, both sides collapse into each other,
                and as their hissing seams fall apart, only ambience remains. ✺</p>`,
            releaseProducer: 'Florian Sankt',
            releaseMastering: 'Alberto Bertelli at Parallels',
            releaseArtwork: 'Artwork by Ferenc Petöcz',
          },
          {
            id: 'crux-iii-3-ht-xon',
            releaseLink: 'https://cruxaxul.bandcamp.com/album/crux-iii-3-ht-xon',
            releaseImg: 'CXA008_thumb.jpg',
            releaseArtist: 'Circular Square',
            releaseTitle: 'Crux III: 3-​HT​-​(​xon)',
            releaseBandcampEmbbed:
              'https://bandcamp.com/EmbeddedPlayer/album=1757471793/size=small/bgcol=333333/linkcol=9a64ff/transparent=true/',
            releaseNumber: 'CXA008',
            releaseBlurb: `<p>✺ The third entry into our Crux singles series comes from Circular Square, currently one of
              Brussel's secret gems, but clearly on the verge of blowing up. Circular Square's seemingly natural skill at
              crafting exciting interzones of bass-heavy club acrobatics and melodic realms, prime his productions both for
              adventurous dancefloors and deeper home immersion.</p>
              <p>As the central piece, 3​-​HT​-​(​xon) finds an equilibrium between its surgical drum stitches, swaths of glassy
                chimes and rapturous flutes. That balance tips a bit as lush, almost pastoral elements come to the fore half-way
                through, before the drums regain their ground.</p>
              <p>Swiveling hi-hats surround a mighty, prowling bass on GBS_02x, an expertly crafted minimalist and stealthy
                pouncer, that successfully wrings every last drop of momentum out of its carefully selected components. As an
                welcome addition, Leese's snakey flip reconstructs its stagger into a rolling parade of tribal percussion,
                intermittent vocal stabs and cavernous drop-outs, mastering the fine art of remixing that is true to the original,
                while still bearing the unmistakable handwriting of the remixer. ✺</p>`,
            releaseProducer: 'Circular Square',
            releaseMastering: 'Alberto Bertelli',
            releaseArtwork: 'Artwork by Ferenc Petöcz',
          },
          {
            id: 'crux-iv-odd-arches',
            releaseLink: 'https://cruxaxul.bandcamp.com/album/crux-iv-odd-arches',
            releaseImg: 'CXA009_thumb.jpg',
            releaseArtist: 'Fels',
            releaseTitle: 'Crux IV: Odd Arches',
            releaseBandcampEmbbed:
              'https://bandcamp.com/EmbeddedPlayer/album=1757471793/size=small/bgcol=333333/linkcol=9a64ff/transparent=true/',
            releaseNumber: 'CXA009',
            releaseBlurb: `<p>✺ A self-described native in the nether realm of “broken beats and emo pads”, Swiss fellow Fels
              delivers the fourth entry into our Crux singles series, here with two excursions into more minimalist, but equally
              detailed bassweight tension.</p>
              <p>A garbled cluster of voices, jostling hi-hats and finally, a booming bass drum unfurl on the eponymous Odd Arches,
                a razor-sharp half-step work-out with a mean streak. Continuously ramping up, yet never resorting to cheap theatrics,
                the focus remains on its forward-creeping atmosphere and low-frequency pressure.</p>
              <p>The flipside, Bending, ups the ante with twitching percussion, a salvo of breakbeats and laser lashes on top.
                The frenzy is grounded by a similar attention to drum dynamics and subterranean heaviness, but as it spins out the
                track knows when to take the bass off its hinges. ✺</p>`,
            releaseProducer: 'Fels',
            releaseMastering: 'Alberto Bertelli',
            releaseArtwork: 'Artwork by Ferenc Petöcz',
          },
        ],
      },
    };
  },
};
</script>

<style lang="scss">
@use 'sass-mq/mq';

:root {
  --content-card-font-color: black;
}

.content__releases {
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(2, 1fr);
  list-style: none;
  margin: 0;
  padding-left: 0;
  width: 100%;

  @include mq.mq($from: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
  }
}

.content__releases .content__releases-card {
  background-color: var(--main-color);
}

.content__releases .content__releases-card:hover {
  background-color: var(--sec-color);
  color: var(--content-card-font-color);
}

.content__releases .content__releases-card:hover div {
  color: var(--content-card-font-color);
}

.content__releases .content__releases-card div {
  line-height: 1.2;
  color: var(--content-card-font-color);
  padding-left: 1rem;
}

.content__releases .content__releases-card div:nth-child(3) {
  margin-top: 0.3rem;
  margin-bottom: 1rem;
}

.content__releases .content__releases-card img {
  max-width: 100%;
  margin-bottom: 0.5rem;
}

.content__releases .content__releases-card-cat {
  font-size: 1.4rem;
  color: var(--content-card-font-color);

  @include mq.mq($from: l) {
    font-size: 1.6rem;
  }
}

.content_links {
  display: block;
  font-size: 1.6rem;
  margin-top: 2rem;
}

.content_links hr.hrr_releases {
  border: none;
  border-top: 0.15rem dashed var(--sec-color);
  margin: 1rem 0;
}
</style>
