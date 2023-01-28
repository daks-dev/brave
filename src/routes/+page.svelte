<script lang="ts">
  import { confetti } from '@neoconfetti/svelte';
  import { YandexMetrikaHit } from 'daks-svelte';

  const title = 'ИП Храбров А.П. • Официальный сайт';
  const description = 'Официальный сайт индивидуального предпренимателя Храброва Антона Павловича';
</script>

<YandexMetrikaHit
  {title}
  {description} />

<main
  class="flex flex-col justify-center items-center text-center h-screen"
  itemprop="mainContentOfPage">
  <div
    use:confetti={{
      force: 0.77,
      duration: 7777,
      destroyAfterDone: true
    }}
    aria-hidden="true" />
  <h1 class="mb-4 text-5xl xl:text-7xl text-slate-500">Антон Павлович Храбров</h1>
  <h3 class="mb-8 whitespace-nowrap text-lg sm:text-xl xl:text-2xl text-slate-400">
    Индивидуальный Предпрениматель
  </h3>
  <a
    rel="noreferrer nofollow"
    class="button whitespace-nowrap hover:text-gray-100 hover:bg-slate-500"
    href="https://kit.svelte.dev"
    target="_blank">
    2022 &star; Svelte Kit
  </a>
</main>
