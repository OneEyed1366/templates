<template>
  <article>
    Localized Component!
    <footer>
      Existing: {{ $t('hello') }}
      <br />
      Missing: {{ $t('missing') }}
    </footer>
  </article>
</template>
