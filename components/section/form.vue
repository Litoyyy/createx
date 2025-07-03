<script setup lang="ts">

</script>

<template>
    <section>
        <div class="form-section">
            <div class="form-section__container container_small">
                <div class="form-section__form">
                    <h1>Subscribe for updates</h1>
                    <span>Subscribe for exclusive early sale access and new arrivals.</span>
                    <div class="form-section__form__btns">
                        <label for="women-checkbox" class="form-section__form__btns__btn">
                            Women
                            <input type="radio" name="form-radio" id="women-checkbox" checked>
                        </label>
                        <label for="men-checkbox" class="form-section__form__btns__btn">
                            Men
                            <input type="radio" name="form-radio" id="men-checkbox">
                        </label>
                        <label for="girls-checkbox" class="form-section__form__btns__btn">
                            Girls
                            <input type="radio" name="form-radio" id="girls-checkbox">
                        </label>
                        <label for="boys-checkbox" class="form-section__form__btns__btn">
                            Boys
                            <input type="radio" name="form-radio" id="boys-checkbox">
                        </label>
                    </div>
                    <div class="form-section__form__input">
                        <ElementInput
                            placeholder="Your working email"
                        >Email
                        </ElementInput>
                        <button>
                            Subscribe
                        </button>
                    </div>
                    <ElementCheckbox
                        id="agree"
                    >I agree to receive communications from Createx Store.
                    </ElementCheckbox>
                </div>
                <div class="form-section__image-block">
                    <img src="/images/form-callback.png" alt="callback-image">
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss">
    .form-section {
        background-color: $gray-200;
        &__container {
            @include df_ac;
            justify-content: space-between;
            padding: 4rem 0;
        }
        &__form {
            @include df_fdc;
            gap: 1.5rem;
            h1 {
                @include heading_1;
            }
            span {
                @include text_1;
                font-size: 1.25rem;
                color: $gray-700;
            }
            &__btns {
                @include df_ac;
                gap: .75rem;
                padding: .75rem 0;
                &__btn {
                    display: flex;
                    padding: .375rem 1rem;
                    @include text_2;
                    font-weight: 700;
                    border-radius: .25rem;
                    border: 1px solid $gray-400;
                    color: $gray-700;
                    @include transition(border, background-color, color);
                    background-color: rgba(255, 255, 255, 0);
                    cursor: pointer;
                    &:has(input:checked) {
                        color: $white;
                        border: 1px solid $primary;
                        background-color: $primary;
                    }
                    input {
                        position: absolute;
                        opacity: 0;
                        scale: 0;
                    }
                }
            }
            &__input {
                display: flex;
                align-items: flex-end;
                width: 30.9375rem;
                .field {
                    width: 100%;
                    .input-label {
                        border-radius: .25rem 0 0 .25rem;
                    }
                }
                button {
                    color: $white;
                    @include text_1;
                    font-weight: 700;
                    background-color: $primary;
                    height: 3rem;
                    width: 9.625rem;
                    border-radius: 0 .25rem .25rem 0;
                }
            }
        }
        &__image-block {
            max-width: 28.75rem;
            max-height: 28.75rem;
            @include wh_100;
            img {
                @include wh_100;
                object-fit: contain;
            }
        }
    }
</style>