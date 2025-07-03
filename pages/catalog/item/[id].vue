<script setup lang="ts">
    const { productsList } = useProducts();

    const choosenItem = ref();

    const route = useRoute();
    const id = route.params.id;

    choosenItem.value = productsList.value.find(item=>item.id === Number(id));
    
    const displayedVariant = ref(1);
    console.log(choosenItem.value);
</script>

<template>
    <SectionBreadcrumbs :breadcrumbs="[{text: 'Women', link: '/catalog/1/'}, {text: 'Clothes', link: '/catalog/1/'}, {text: choosenItem?.title}]"/>
    <section>
        <div class="product-main-section">
            <div class="product-main-section__container container_small">
                <div class="product-main-section__title-block">
                    <h1>{{ choosenItem.title }}</h1>
                    <span>
                        <strong>Art. No.</strong>
                        183260098
                    </span>
                </div>
                <div class="product-main-section__btns-block">
                    <label for="product-dispay-1" class="product-main-section__btns-block__btn">
                        General info
                        <input type="radio" name="product-display" id="product-dispay-1" :checked="displayedVariant === 1" @click="displayedVariant = 1">
                    </label>
                    <label for="product-dispay-2" class="product-main-section__btns-block__btn">
                        Product details
                        <input type="radio" name="product-display" id="product-dispay-2" :checked="displayedVariant === 2" @click="displayedVariant = 2">
                    </label>
                    <label for="product-dispay-3" class="product-main-section__btns-block__btn">
                        Reviews <sup>12</sup>
                        <input type="radio" name="product-display" id="product-dispay-3" :checked="displayedVariant === 3" @click="displayedVariant = 3">
                    </label>
                </div>
                <hr>
                <div class="product-main-section__main-block">
                    <div class="product-main-section__images-block">
                        <div class="product-main-section__images-block__main">
                            <img :src="choosenItem.image" alt="product block">
                            <button class="product-main-section__images-block__main__btn prev">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M9.20711 17.2071C8.81658 17.5976 8.18342 17.5976 7.79289 17.2071L3.29289 12.7071C2.90237 12.3166 2.90237 11.6834 3.29289 11.2929L7.79289 6.79289C8.18342 6.40237 8.81658 6.40237 9.20711 6.79289C9.59763 7.18342 9.59763 7.81658 9.20711 8.20711L6.41421 11L20 11C20.5523 11 21 11.4477 21 12C21 12.5523 20.5523 13 20 13L6.41421 13L9.20711 15.7929C9.59763 16.1834 9.59763 16.8166 9.20711 17.2071Z" fill="#424551"/>
                                </svg>
                            </button>
                            <button class="product-main-section__images-block__main__btn next">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M9.20711 17.2071C8.81658 17.5976 8.18342 17.5976 7.79289 17.2071L3.29289 12.7071C2.90237 12.3166 2.90237 11.6834 3.29289 11.2929L7.79289 6.79289C8.18342 6.40237 8.81658 6.40237 9.20711 6.79289C9.59763 7.18342 9.59763 7.81658 9.20711 8.20711L6.41421 11L20 11C20.5523 11 21 11.4477 21 12C21 12.5523 20.5523 13 20 13L6.41421 13L9.20711 15.7929C9.59763 16.1834 9.59763 16.8166 9.20711 17.2071Z" fill="#424551"/>
                                </svg>
                            </button>
                        </div>
                        <div class="product-main-section__images-block__list">
                            <img :src="choosenItem.image" alt="product block">
                        </div>
                    </div>
                    <div class="product-main-section__info-block">
                        <div class="product-main-section__info-block__main">

                        </div>
                        <div class="product-main-section__info-block__accordions">

                        </div>
                        <div class="product-main-section__info-block__cards">
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <SectionProducts type="primary-bg" title="You may be interested in"/>
    <SectionProducts type="default" title="Recently viewed"/>
    <SectionForm/>
</template>

<style lang="scss">
    .product-main-section {
        &__container {
            @include df_fdc;
            gap: 1.25rem;
            padding-top: 2rem;
        }
        &__title-block {
            @include df_ac;
            justify-content: space-between;
            span {
                color: $gray-700;
                strong {
                    font-weight: 700;
                }
            }
        }
        &__btns-block {
            @include df_ac;
            gap: .75rem;
            padding-top: .75rem;
            &__btn {
                @include df_ac_jcc;
                @include strong_1;
                padding: .625rem 1.25rem;
                border-style: solid;
                border-width: 1px;
                border-color: rgba(255, 255, 255, 0);
                color: $gray-700;
                @include transition(border-color, color);
                border-radius: .25rem;
                cursor: pointer;
                input {
                    position: absolute;
                    scale: 0;
                    opacity: 0;
                }
                &:has(input:checked) {
                    border-color: $primary;
                    color: $primary;
                }
            }
        }
        hr {
            border: 0;
            border-top: 1px solid $gray-300;
        }
        &__main-block {
            padding-top: .75rem;
        }
        &__images-block {
            @include df_fdc;
            gap: 1.25rem;
            &__main {
                position: relative;
                max-height: 37.5rem;
                max-width: 37.5rem;
                @include wh_100;
                border-radius: .25rem;
                overflow: hidden;
                img {
                    @include wh_100;
                    object-fit: cover;
                }
                &__btn {
                    z-index: 5;
                    position: absolute;
                    top: 50%;
                    transform: translateY(-50%);
                    @include df_ac_jcc;
                    background-color: $white;
                    height: 3rem;
                    aspect-ratio: 1;
                    border-radius: 50%;
                    @include transition(background-color);
                    svg {
                        max-width: 1.5rem;
                        max-height: 1.5rem;
                        @include wh_100;
                        path {
                            @include transition(fill);
                        }
                    }
                    &:hover {
                        svg path{
                            fill: $white;
                        }
                        background-color: $primary;
                    }
                    &.prev {
                        left: 2rem;
                    }
                    &.next {
                        right: 2rem;
                        svg {
                            transform: rotateY(180deg);
                        }
                    }
                }
            }
            &__list {
                @include df_ac;
                gap: 1.25rem;
                img {
                    max-height: 6.5rem;
                    height: 100%;
                    aspect-ratio: 1;
                    object-fit: cover;
                    border-radius: .25rem;
                    border: 1px solid $primary;
                }
            }
        }
        &__info-block {
            @include df_fdc;
            gap: 3rem;
        }
    }
</style>