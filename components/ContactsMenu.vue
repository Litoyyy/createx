<script setup lang="ts">
    const route = useRoute();
</script>

<template>
    <div class="contacts-menu">
        <NuxtLink to="/contacts/" class="contacts-menu__item" :data-active="route.path === '/contacts/'">
            Contact Us
        </NuxtLink>
        <NuxtLink to="/contacts/stores/" class="contacts-menu__item" :data-active="route.path === '/contacts/stores/'">
            Outlet Stores
        </NuxtLink>
        <NuxtLink to="/contacts/faq/" class="contacts-menu__item" :data-active="route.path === '/contacts/faq/'">
            FAQ
        </NuxtLink>
    </div>
</template>

<style lang="scss">
    .contacts-menu {
        @include df_fdc;
        gap: 1.25rem;
        min-width: 10.625rem;
        &__item {
            @include heading_3;
            color: $gray-600;
            @include transition(color);
            &:hover {
                color: $gray-400;
            }
            &:active,
            &[data-active="true"] {
                color: $primary;
            }
        }
    }
</style>