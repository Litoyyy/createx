<script setup lang="ts">
    const props = defineProps<{
        id?: string,
        name?: string,
    }>();
</script>

<template>
    <label :for="id || 'custom-checkbox-id'" class="custom-checkbox-label">
        <input type="checkbox" 
            :name="name" 
            :id="id || 'custom-checkbox-id'"
        ><slot/>
    </label>
</template>

<style lang="scss">
    .custom-checkbox-label {
        position: relative;
        @include df_ac;
        gap: .75rem;
        cursor: pointer;

        input {
            opacity: 0;
            max-width: 1rem;
            max-height: 1rem;
            @include wh_100;
        }
        &::before {
            content: '';
            position: absolute;
            left: 0;
            top: 50%;
            transform: translateY(-50%);
            background-color: $white;
            border: 1px solid $gray-600;
            border-radius: .25rem;
            @include transition(background-color, border);
            max-width: 1rem;
            max-height: 1rem;
            @include wh_100;
        }
        &::after {
            content: url('data:image/svg+xml,<svg width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M9.82771 0.195262C10.0574 0.455612 10.0574 0.877722 9.82771 1.13807L3.94536 7.80474C3.71564 8.06509 3.34319 8.06509 3.11347 7.80474L0.17229 4.4714C-0.05743 4.21105 -0.05743 3.78894 0.17229 3.5286C0.40201 3.26825 0.77446 3.26825 1.00418 3.5286L3.52941 6.39052L8.99582 0.195262C9.22554 -0.0650874 9.59799 -0.0650874 9.82771 0.195262Z" fill="white"/></svg>');
            position: absolute;
            top: 15%;
            transform: translateY(-50%);
            left: .25rem;
            width: .625rem;
            height: .5rem;
            border-radius: 50%;
            @include transition(opacity);
            opacity: 0;
        }

        &:has(input:checked) {
            &::before {
                background-color: $primary;
                border: 1px solid $primary;
            }
            &::after {
                opacity: 1;
            }
        }
    }
</style>