<script setup lang="ts"></script>

<template>
  <UApp>
    <header class="bg-default/75 backdrop-blur border-b-1 border-default sticky top-0 z-50">
      <div class="w-full mx-auto py-2 px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-3 h-full">
        <h1 class="font-black uppercase">Learning Profile</h1>
        <div class="flex items-center justify-end lg:flex-1 gap-1.5">
          <!-- <LocaleSelect /> -->
          <AppThemeSwitcher />
        </div>
      </div>
    </header>
    <div class="flex min-h-screen">
      <!-- <AppSidebar class="p-2 border-r-1 border-default min-h-full" /> -->
      <main class="p-4 sm:px-6 lg:px-8">
        <NuxtPage />
      </main>
    </div>
  </UApp>
</template>

<style scoped></style>
