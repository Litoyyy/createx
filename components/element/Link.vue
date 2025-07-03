<script setup lang="ts">
    const props = defineProps<{
        size?: 'basic' | 'small',
        color?: 'primary' | 'inverse' | 'danger',
        link?: string,
    }>();
</script>

<template>
    <NuxtLink v-if="link"
        class="link"
        :to="link"
        :color="color || 'primary'"
        :size="size || 'basic'"
    ><slot/>
    </NuxtLink>
    <button v-else
        class="link"
        :color="color || 'primary'"
        :size="size || 'basic'"
    ><slot/>    
    </button>
</template>

<style lang="scss">
    .link {
        display: flex;
        cursor: pointer;
        text-decoration: none;
        @include transition(color);
        text-wrap: nowrap;

        &[size="basic"] {
            @include strong_1;
        }
        &[size="small"] {
            @include text_2;
        }

        &[color="primary"] {
            color: $gray-800;
            &:hover {
                color: $primary;
            }
        }
        &[color="inverse"] {
            color: $white;
            &:hover {
                color: $gray-600;
            }
        }
        &[color="danger"] {
            color: $danger;
            &:hover {
                color: $gray-600;
            }
        }
    }
</style>