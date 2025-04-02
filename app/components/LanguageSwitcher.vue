<template>
  <div class="justify-self-start w-44">
    <Select
      :model-value="locale"
      :options="locales"
      option-label="name"
      option-value="code"
      fluid
      size="small"
      @change="handleLanguageSwitch"
    />
  </div>
</template>

<script lang="ts" setup>
const { locales, locale, setLocale } = useI18n();

const handleLanguageSwitch = (event: { value: 'en' | 'ur' }) => {
  const locale = event.value;
  if (!locale) return;
  setLocale(locale);
};
</script>
