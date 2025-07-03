<script setup lang="ts">
    const props = defineProps<{
        color?: 'border' | 'primary',
        size?: 'small' | 'basic' | 'large',
        link?: string,
        active?: boolean
    }>();
</script>

<template>
    <NuxtLink v-if="link"
        class="button"
        :data-active="active"
        :to="link"
        :color="color || 'border'"
        :size="size || 'basic'"
    ><slot/>
    </NuxtLink>
    <button v-else
        class="button"
        :data-active="active"
        :color="color || 'border'"
        :size="size || 'basic'"
    ><slot/>
    </button>
</template>

<style lang="scss">
    button {
        cursor: pointer;
        border: none;
        background: none;
        outline: none;
        padding: 0;
    }
    .button {
        @include df_ac_jcc;
        gap: .5rem;
        width: fit-content;
        text-wrap: nowrap;
        cursor: pointer;
        border-radius: .25rem;
        @include transition(background-color, border, border-color, color, opacity);

        box-sizing: border-box;
        -moz-box-sizing: border-box;
        -webkit-box-sizing: border-box;

        svg {
            max-height: 1rem;
            max-width: 1rem;
            @include wh_100;
            path {
                @include transition(fill);
            }
        }
        &[size="small"] {
            height: 2.25rem;
            @include text_3;
            font-weight: 700;
            padding: 0 1.5rem;
        }
        &[size="basic"] {
            height: 2.75rem;
            @include text_2;
            font-weight: 700;
            padding: 0 2rem;
        }
        &[size="large"] {
            height: 3.25rem;
            @include text_1;
            font-weight: 700;
            padding: 0 2.5rem;
        }

        &[color="border"] {
            background-color: rgba(255, 255, 255, 0);
            color: $primary;
            border: 1px solid $primary;
            svg path {
                fill: $primary;
            }
        }
        &[color="primary"] {
            background-color: $primary;
            color: $white;
            svg path {
                fill: $white;
            }
        }
        
        &:hover {
            &[color="primary"] {
                background-color: rgba(255, 255, 255, 0);
                color: $primary;
                border: 1px solid $primary;
                svg path {
                    fill: $primary;
                }
            }
            &[color="border"] {
                background-color: $primary;
                color: $white;
                svg path {
                    fill: $white;
                }
            }
        }
        &:active,
        &[data-active="true"] {
            &[color="border"] {
                opacity: .6;
            }
            &[color="primary"] {
                opacity: .6;
            }
        }
    }
</style>