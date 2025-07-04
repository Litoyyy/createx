<script setup lang="ts">
    const props = defineProps<{
        color?: string,
        id?: string,
    }>();
</script>

<template>
    <label :for="`get-color-product-${id}-${color}`" 
        class="color-picker" 
        :style="`--bg-color: ${color}`">
        <input type="radio" :name="`get-color-product-${id}`" :id="`get-color-product-${id}-${color}`">
    </label>
</template>

<style lang="scss">
    .color-picker {
        position: relative;
        input {
            width: 1.5rem;
            height: 1.5rem;
            opacity: 0;
            cursor: pointer;
        }
        &::before {
            content: '';
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            width: 1.5rem;
            height: 1.5rem;
            border: 1px solid $gray-400;
            border-radius: 50%;
            @include transition(border);
            cursor: pointer;
        }
        &::after {
            content: '';
            position: absolute;
            top: 50%;
            left: .3125rem;
            transform: translateY(-50%);
            width: 1rem;
            height: 1rem;
            background-color: var(--bg-color);
            border-radius: 50%;
            cursor: pointer;
        }
        &:has(input:checked) {
            &::before {
                border: 1px solid $primary;
            }
        }
    }
</style>