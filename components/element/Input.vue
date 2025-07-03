<script setup lang="ts">
    const props = defineProps<{
        id?: string,
        placeholder?: string,
    }>();
</script>

<template>
    <div class="field">
        <div class="field__title" v-if="$slots.default">
            <slot/>
        </div>
        <label class="input-label"
            :for="id || 'input-default-id'"
        >
            <input type="text"
                :id="id || 'input-default-id'"
                :placeholder="placeholder"
            >
            <div class="input-label__icon" v-if="$slots.icon">
                <slot name="icon"/>
            </div>
        </label>
    </div>
</template>

<style lang="scss">
    .field {
        @include df_fdc;
        gap: .5rem;
        &__title {
            @include text_2;
            color: $gray-800;
        }
        .input-label {
            @include df_ac;
            gap: 1rem;
            padding: .75rem 1rem;
            border: 1px solid $gray-400;
            background-color: $white;
            border-radius: .25rem;
            cursor: text;
            input {
                background-color: unset;
                width: 100%;
                @include text_1;
                color: $gray-800;
                &::placeholder {
                    color: $gray-600;
                }
            }

            &__icon {
                cursor: pointer;
                max-width: 1rem;
                max-height: 1rem;
                @include wh_100;
                svg {
                    @include wh_100;
                }
            }
        }
    }
</style>