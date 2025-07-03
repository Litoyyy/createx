<script setup lang="ts">
    import 'swiper/swiper-bundle.css';

    import { useProducts } from '~/composables/useProducts';

    const props = defineProps<{
        title?: string,
        type?: 'primary-bg' | 'default',
        btn?: string,
        btnLink?: string
    }>();

    const { productsList } = useProducts();

    const productsSliderRef = ref(null);
    const { next, prev, isBeginning, isEnd } = useSwiper(productsSliderRef, {
        slidesPerView: 3,
        spaceBetween: 30,
    });

</script>

<template>
    <section>
        <div class="products-slider-section" :data-type="type || 'default'">
            <div class="products-slider-section__container container_small">
                <div class="products-slider-section__title-block">
                    <h1>{{ title }}</h1>
                    <div class="products-slider-section__title-block__btns">
                        <button class="products-slider-section__title-block__btns__btn" @click="prev(300)">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M9.20711 17.2071C8.81658 17.5976 8.18342 17.5976 7.79289 17.2071L3.29289 12.7071C2.90237 12.3166 2.90237 11.6834 3.29289 11.2929L7.79289 6.79289C8.18342 6.40237 8.81658 6.40237 9.20711 6.79289C9.59763 7.18342 9.59763 7.81658 9.20711 8.20711L6.41421 11L20 11C20.5523 11 21 11.4477 21 12C21 12.5523 20.5523 13 20 13L6.41421 13L9.20711 15.7929C9.59763 16.1834 9.59763 16.8166 9.20711 17.2071Z" fill="#424551"/>
                            </svg>
                        </button>
                        <button class="products-slider-section__title-block__btns__btn" @click="next(300)">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M9.20711 17.2071C8.81658 17.5976 8.18342 17.5976 7.79289 17.2071L3.29289 12.7071C2.90237 12.3166 2.90237 11.6834 3.29289 11.2929L7.79289 6.79289C8.18342 6.40237 8.81658 6.40237 9.20711 6.79289C9.59763 7.18342 9.59763 7.81658 9.20711 8.20711L6.41421 11L20 11C20.5523 11 21 11.4477 21 12C21 12.5523 20.5523 13 20 13L6.41421 13L9.20711 15.7929C9.59763 16.1834 9.59763 16.8166 9.20711 17.2071Z" fill="#424551"/>
                            </svg>
                        </button>
                    </div>
                </div>
                <ClientOnly>
                    <swiper-container ref="productsSliderRef" :init="false">
                        <swiper-slide
                            v-for="(slide, idx) in productsList"
                        >
                        <CardProduct
                            :res="slide"
                        />
                        </swiper-slide>
                    </swiper-container>
                </ClientOnly>
                <div class="products-slider-section__btn-block" v-if="!!btn">
                    <ElementButton
                        :link="btnLink"
                        size="large"
                    >{{ btn }}
                    </ElementButton>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss">
    .products-slider-section {
        &[data-type="default"] {
            .products-slider-section__container {
                padding-top: 5rem;
                padding-bottom: 11.25rem;
            }
        }
        &[data-type="primary-bg"] {
            background-color: $gray-300;
            .products-slider-section__container {
                padding-top: 5rem;
                padding-bottom: 6.25rem;
                &:has(.button) {
                    padding-bottom: 5rem;
                }
            }
        }
        &__title-block {
            @include df_ac;
            justify-content: space-between;
            padding-bottom: 3.75rem;
            &__btns {
                @include df_ac;
                gap: .75rem;
                &__btn {
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
                    &:last-of-type {
                        svg {
                            transform: rotateY(180deg);
                        }
                    }
                }
            }
        }
        &__btn-block {
            @include df_ac_jcc;
            padding-top: 5rem;
            width: 100%;
        }
    }
</style>