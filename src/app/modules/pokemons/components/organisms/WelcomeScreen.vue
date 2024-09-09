<template>
    <div class="flex flex-col justify-center gap-12 items-center h-screen">
        <Image src="https://ejmmfpedrflhokpmwdrc.supabase.co/storage/v1/object/public/test/assets/Pokemon.svg"
            alt="Pikachu" />
        <WelcomeMessage />
        <div class="mt-6">
            <Button primary>
                <router-link :to="{ name: 'pokemonList' }">
                    Get started
                </router-link>
            </Button>
        </div>
    </div>
</template>

<script lang="ts" setup>
import Image from '../atoms/Image.vue';
import WelcomeMessage from '../molecules/WelcomeMessage.vue';
import BottomNavigation from '../molecules/BottomNavigation.vue';
import Button from '../atoms/Button.vue';
import Input from '../atoms/Input.vue';

</script>

<style scoped>
/* Customize as needed */
</style>