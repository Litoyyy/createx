<script lang="ts" setup>
    import 'swiper/swiper-bundle.css';

    import { useProducts } from '~/composables/useProducts';

    const { productsList } = useProducts();

    const heroSlides = ref([
        {
            heading_title: 'New collection',
            title: 'Menswear 2020',
        }, 
        {
            heading_title: 'New shoping',
            title: 'Womenswear 2024',
        }, 
        {
            heading_title: 'New arrivals',
            title: 'Lastest arrivals',
        }, 
        {
            heading_title: 'New shoping',
            title: 'Womenswear 2024',
        }
    ]);


    const heroSliderRef = ref(null);
    const { next, prev }  = useSwiper(heroSliderRef, {
        slidesPerView: 1,
    });

    const arrivalsSliderRef = ref(null);
    const { to, activeIndex } = useSwiper(arrivalsSliderRef, {
        slidesPerView: 6,
        spaceBetween: 30,
    });

    const salesProducts = productsList.value.filter(item=>item.sale);

    const salesSliderRef = ref(null);
    const salesSlider = useSwiper(salesSliderRef, {
        slidesPerView: 3,
        spaceBetween: 30,
    });
</script>

<template>
    <section>
        <div class="hero-section">
            <div class="hero-section__container">
                <button class="hero-section__btn prev" @click="prev(300)">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M9.20711 17.2071C8.81658 17.5976 8.18342 17.5976 7.79289 17.2071L3.29289 12.7071C2.90237 12.3166 2.90237 11.6834 3.29289 11.2929L7.79289 6.79289C8.18342 6.40237 8.81658 6.40237 9.20711 6.79289C9.59763 7.18342 9.59763 7.81658 9.20711 8.20711L6.41421 11L20 11C20.5523 11 21 11.4477 21 12C21 12.5523 20.5523 13 20 13L6.41421 13L9.20711 15.7929C9.59763 16.1834 9.59763 16.8166 9.20711 17.2071Z" fill="#424551"/>
                    </svg>
                </button>
                <button class="hero-section__btn next" @click="next(300)">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M9.20711 17.2071C8.81658 17.5976 8.18342 17.5976 7.79289 17.2071L3.29289 12.7071C2.90237 12.3166 2.90237 11.6834 3.29289 11.2929L7.79289 6.79289C8.18342 6.40237 8.81658 6.40237 9.20711 6.79289C9.59763 7.18342 9.59763 7.81658 9.20711 8.20711L6.41421 11L20 11C20.5523 11 21 11.4477 21 12C21 12.5523 20.5523 13 20 13L6.41421 13L9.20711 15.7929C9.59763 16.1834 9.59763 16.8166 9.20711 17.2071Z" fill="#424551"/>
                    </svg>
                </button>
                <ClientOnly>
                    <swiper-container ref="heroSliderRef" :init="false">
                        <swiper-slide
                            v-for="(slide, idx) in heroSlides"
                        >
                        <div class="hero-section__slide"  style="background-image: url('/images/hero/hero-image-1.png');">
                            <div class="hero-section__slide__info-block container_small">
                                <div class="hero-section__slide__title-block">
                                    <span>{{ slide.heading_title }}</span>
                                    <h1>{{ slide.title }}</h1>
                                </div>
                                <div class="hero-section__slide__btns-block">
                                    <ElementButton 
                                        size="large"
                                        link="/catalog/1/"
                                    >Shop sale
                                    </ElementButton>
                                    <ElementButton 
                                        link="/catalog/1/"
                                        size="large"
                                        color="primary"
                                    >Shop the menswear
                                    </ElementButton>
                                </div>
                                <div class="hero-section__slide__paginator">
                                    <div class="hero-section__slide__paginator__item" v-for="(page, index) in heroSlides" :data-active="index === idx">
                                        0{{ index + 1 }}
                                        <hr>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </swiper-slide>
                    </swiper-container>
                </ClientOnly>
            </div>
        </div>
    </section>
    <section style="position: relative; z-index: 10;">
        <div class="sub-hero-section">
            <div class="sub-hero-section__container container_small">
                <NuxtLink to="/catalog/1/" class="sub-hero-section__item">
                    <div class="sub-hero-section__item__image">
                        <img src="/images/hero/hero-image-2.png" alt="hero image">
                    </div>
                    For women
                </NuxtLink>
                <NuxtLink to="/catalog/1/" class="sub-hero-section__item">
                    <div class="sub-hero-section__item__image">
                        <img src="/images/hero/hero-image-3.png" alt="hero image">
                    </div>
                    For men
                </NuxtLink>
                <NuxtLink to="/catalog/1/" class="sub-hero-section__item">
                    <div class="sub-hero-section__item__image">
                        <img src="/images/hero/hero-image-4.png" alt="hero image">
                    </div>
                    For kids
                </NuxtLink>
            </div>
        </div>
    </section>
    <section>
        <div class="new-arrivals-section">
            <div class="new-arrivals-section__container container margin_top">
                <div class="new-arrivals-section__title-block">
                    <h1>New arrivals</h1>
                    <span>
                        Check out our latest arrivals for the upcoming season
                        <NuxtLink :to="'/catalog/'">See the collection here</NuxtLink>
                    </span>
                </div>
                <ClientOnly>
                    <swiper-container ref="arrivalsSliderRef" :init="false">
                        <swiper-slide
                            v-for="(slide, idx) in productsList"
                        >
                        <CardProduct
                            :res="slide"
                        />
                        </swiper-slide>
                    </swiper-container>
                </ClientOnly>
                <div class="new-arrivals-section__dots-block">
                    <div class="new-arrivals-section__dots-block__item" @click="to(1, 300)" :data-active="activeIndex === 1"></div>
                    <div class="new-arrivals-section__dots-block__item" @click="to(2, 300)" :data-active="activeIndex === 2"></div>
                    <div class="new-arrivals-section__dots-block__item" @click="to(3, 300)" :data-active="activeIndex === 3"></div>
                    <div class="new-arrivals-section__dots-block__item" @click="to(4, 300)" :data-active="activeIndex === 4"></div>
                    <div class="new-arrivals-section__dots-block__item" @click="to(5, 300)" :data-active="activeIndex === 5"></div>
                    <div class="new-arrivals-section__dots-block__item" @click="to(6, 300)" :data-active="activeIndex === 6"></div>
                </div>
            </div>
        </div>
    </section>
    <section>
        <div class="banners-section">
            <div class="banners-section__container container margin_top">
                <div class="banners-section__stroke">
                    <div class="banners-section__item first small" style="background-image: url('/images/banners/banner-1.png');">
                        <div class="banners-section__item__title-block">
                            <span>Summer Collections</span>
                            <h2>Sale Up to 70%</h2>
                        </div>
                        <ElementButton
                            link="/catalog/1/"
                        >Explore new prices
                        </ElementButton>
                    </div>
                    <div class="banners-section__item second" style="background-image: url('/images/banners/banner-2.png');">
                        <div class="banners-section__item__title-block">
                            <span>Deal of the week</span>
                            <h2>Stay Warm With Our New Sweaters</h2>
                            <ElementButton
                                link="/catalog/1/"
                            >Shop now
                            </ElementButton>
                        </div>
                        <div class="banners-section__item__title-block">
                            <span>Limited time offer</span>
                            <div class="banners-section__item__title-block__list">
                                <div class="banners-section__item__title-block__item">
                                    <h3>06</h3>
                                    <span>Days</span>
                                </div>
                                <div class="banners-section__item__title-block__item">
                                    <h3>18</h3>
                                    <span>Hours</span>
                                </div>
                                <div class="banners-section__item__title-block__item">
                                    <h3>24</h3>
                                    <span>Mins</span>
                                </div>
                                <div class="banners-section__item__title-block__item">
                                    <h3>12</h3>
                                    <span>Sec</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="banners-section__stroke">
                    <div class="banners-section__item third" style="background-image: url('/images/banners/banner-3.png');">
                        <div class="banners-section__item__title-block">
                            <span>New collection</span>
                            <h2>Shoes & Bags autumn / winter 2020 </h2>
                        </div>
                        <ElementButton
                        >See offers
                        </ElementButton>
                    </div>
                    <div class="banners-section__item fourth small">
                        <div class="banners-section__item__title-block">
                            <span>For All new Email Subscribers</span>
                            <h2>Get 5% Off & Free Delivery </h2>
                        </div>
                        <div class="banners-section__item__input">
                            <ElementInput
                                placeholder="Your working email"
                            >Email
                            </ElementInput>
                            <button>
                                Subscribe
                            </button>
                        </div>
                        <p>*Sign up to be the first to hear about exclusive deals, special offers and upcoming collections.</p>
                        <div class="banners-section__item__image">
                            <img src="/images/banners/banner-4.png" alt="banner image">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section>
        <div class="popular-categories-section">
            <div class="popular-categories-section__container container_small margin">
                <div class="popular-categories-section__title">
                    <h1>Popular categories</h1>
                </div>
                <div class="popular-categories-section__list">
                    <div class="popular-categories-section__item">
                        <div class="popular-categories-section__item__image">
                            <img src="/images/popular-caterories/popular-categories-1.jpg" alt="popular category">
                        </div>
                        <span>Tops</span>
                    </div>
                    <div class="popular-categories-section__item">
                        <div class="popular-categories-section__item__image">
                            <img src="/images/popular-caterories/popular-categories-2.jpg" alt="popular category">
                        </div>
                        <span>T-shirts</span>
                    </div>
                    <div class="popular-categories-section__item">
                        <div class="popular-categories-section__item__image">
                            <img src="/images/popular-caterories/popular-categories-3.jpg" alt="popular category">
                        </div>
                        <span>Caps</span>
                    </div>
                    <div class="popular-categories-section__item">
                        <div class="popular-categories-section__item__image">
                            <img src="/images/popular-caterories/popular-categories-4.jpg" alt="popular category">
                        </div>
                        <span>Sandals</span>
                    </div>
                    <div class="popular-categories-section__item">
                        <div class="popular-categories-section__item__image">
                            <img src="/images/popular-caterories/popular-categories-5.jpg" alt="popular category">
                        </div>
                        <span>Jackets</span>
                    </div>
                    <div class="popular-categories-section__item">
                        <div class="popular-categories-section__item__image">
                            <img src="/images/popular-caterories/popular-categories-6.jpg" alt="popular category">
                        </div>
                        <span>Coats</span>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <SectionProducts title="Trending now" btn-link="/catalog/1/" btn="Explore top sales" type="primary-bg"/>
    <section>
        <div class="sales-section">
            <div class="sales-section__container container_small">
                <div class="sales-section__title-block">
                    <h1>Sale up to 70%</h1>
                    <div class="sales-section__title-block__btns">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" @click="salesSlider?.slidePrev()">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M9.20711 17.2071C8.81658 17.5976 8.18342 17.5976 7.79289 17.2071L3.29289 12.7071C2.90237 12.3166 2.90237 11.6834 3.29289 11.2929L7.79289 6.79289C8.18342 6.40237 8.81658 6.40237 9.20711 6.79289C9.59763 7.18342 9.59763 7.81658 9.20711 8.20711L6.41421 11L20 11C20.5523 11 21 11.4477 21 12C21 12.5523 20.5523 13 20 13L6.41421 13L9.20711 15.7929C9.59763 16.1834 9.59763 16.8166 9.20711 17.2071Z" fill="#424551"/>
                        </svg>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" @click="salesSlider?.slideNext()">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M9.20711 17.2071C8.81658 17.5976 8.18342 17.5976 7.79289 17.2071L3.29289 12.7071C2.90237 12.3166 2.90237 11.6834 3.29289 11.2929L7.79289 6.79289C8.18342 6.40237 8.81658 6.40237 9.20711 6.79289C9.59763 7.18342 9.59763 7.81658 9.20711 8.20711L6.41421 11L20 11C20.5523 11 21 11.4477 21 12C21 12.5523 20.5523 13 20 13L6.41421 13L9.20711 15.7929C9.59763 16.1834 9.59763 16.8166 9.20711 17.2071Z" fill="#424551"/>
                        </svg>
                    </div>
                </div>
                <ClientOnly>
                    <swiper-container ref="salesSliderRef" :init="false">
                        <swiper-slide
                            v-for="(slide, idx) in salesProducts"
                        >
                        <CardProduct
                            :res="slide"
                        />
                        </swiper-slide>
                    </swiper-container>
                </ClientOnly>
                <div class="sales-section__btn-block">
                    <ElementButton
                        link="/catalog/1/"
                        size="large"
                    >See all sale products
                    </ElementButton>
                </div>
            </div>
        </div>
    </section>
    <section>
        <div class="cta-mobile-app">
            <div class="cta-mobile-app__container container_small">
                <div class="cta-mobile-app__image-block">
                    <img src="/images/cta-mobile-app.png" alt="cta-image">
                </div>
                <div class="cta-mobile-app__info-block">
                    <h2>Enjoy mobile shopping with our Createx Store App!</h2>
                    <div class="cta-mobile-app__info-block__images">
                        <div class="cta-mobile-app__info-block__images__item">
                            <img src="/images/icons/app-store.png" alt="app-store">
                        </div>
                        <div class="cta-mobile-app__info-block__images__item">
                            <img src="/images/icons/google-play.png" alt="google-play">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section>
        <div class="services-section">
            <div class="services-section__container container_small margin_small_top">
                <div class="services-section__item">
                    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M40.5 34.3125C39.464 34.3125 38.625 35.1515 38.625 36.1875C38.625 37.2235 39.464 38.0625 40.5 38.0625C41.536 38.0625 42.375 37.2235 42.375 36.1875C42.375 35.1515 41.536 34.3125 40.5 34.3125Z" fill="#17696A"/>
                    <path d="M39.5625 26.8125C39.045 26.8125 38.625 27.2325 38.625 27.75C38.625 28.2675 39.045 28.6875 39.5625 28.6875C40.08 28.6875 40.5 28.2675 40.5 27.75C40.5 27.2325 40.08 26.8125 39.5625 26.8125Z" fill="#17696A"/>
                    <path d="M11.8125 34.3125C10.7765 34.3125 9.9375 35.1515 9.9375 36.1875C9.9375 37.2235 10.7765 38.0625 11.8125 38.0625C12.8485 38.0625 13.6875 37.2235 13.6875 36.1875C13.6875 35.1515 12.8485 34.3125 11.8125 34.3125Z" fill="#17696A"/>
                    <path d="M44.0596 23.1226L42.4431 16.6567C43.0177 16.1071 43.3125 15.3779 43.3125 14.625C43.3125 13.0741 42.0509 11.8125 40.5 11.8125H33V9C33 7.4491 31.7384 6.1875 30.1875 6.1875H2.8125C1.2616 6.1875 0 7.4491 0 9V33.375C0 34.9259 1.2616 36.1875 2.8125 36.1875H6.1875C6.1875 39.2893 8.71069 41.8125 11.8125 41.8125C14.9143 41.8125 17.4375 39.2893 17.4375 36.1875H34.875C34.875 39.2893 37.3982 41.8125 40.5 41.8125C43.6018 41.8125 46.125 39.2893 46.125 36.1875C46.125 36.134 46.1224 36.0809 46.121 36.0275C47.2141 35.6418 48 34.5985 48 33.375V27.75C48 25.4194 46.2905 23.4814 44.0596 23.1226ZM40.7054 17.4375L42.1117 23.0625H34.3257L36.4753 20.9128C36.8416 20.5466 36.8416 19.9534 36.4753 19.5872C36.1091 19.2209 35.5159 19.2209 35.1497 19.5872L33 21.7365V17.4375H40.7054ZM41.4375 14.625C41.4375 15.1425 41.0175 15.5625 40.5 15.5625H33V13.6875H40.5C41.0171 13.6875 41.4375 14.1079 41.4375 14.625ZM11.8125 39.9375C9.74487 39.9375 8.0625 38.2551 8.0625 36.1875C8.0625 34.0917 9.77527 32.4375 11.8125 32.4375C13.8545 32.4375 15.5625 34.0961 15.5625 36.1875C15.5625 38.2551 13.8801 39.9375 11.8125 39.9375ZM17.1156 34.3125C16.3326 32.1002 14.2134 30.5625 11.8125 30.5625C9.41052 30.5625 7.29053 32.1013 6.50903 34.3125H2.8125C2.29541 34.3125 1.875 33.8921 1.875 33.375V9C1.875 8.48291 2.29541 8.0625 2.8125 8.0625H30.1875C30.7046 8.0625 31.125 8.48291 31.125 9V34.3125H17.1156ZM40.5 39.9375C38.4324 39.9375 36.75 38.2551 36.75 36.1875C36.75 34.0917 38.4628 32.4375 40.5 32.4375C42.542 32.4375 44.25 34.0961 44.25 36.1875C44.25 38.2551 42.5676 39.9375 40.5 39.9375ZM45.7365 34.1334C44.9048 32.0175 42.8357 30.5625 40.5 30.5625C38.098 30.5625 35.978 32.1013 35.1965 34.3125H33V24.9375H43.3125C44.5345 24.9375 45.5768 25.7212 45.9639 26.8125H43.3125C42.7947 26.8125 42.375 27.2322 42.375 27.75C42.375 28.2678 42.7947 28.6875 43.3125 28.6875H46.125V33.375C46.125 33.6866 45.9712 33.9628 45.7365 34.1334Z" fill="#17696A"/>
                    <path d="M16.5 11.8125C11.8477 11.8125 8.0625 15.5977 8.0625 20.25C8.0625 24.9023 11.8477 28.6875 16.5 28.6875C21.1523 28.6875 24.9375 24.9023 24.9375 20.25C24.9375 15.5977 21.1523 11.8125 16.5 11.8125ZM16.5 26.8125C12.8815 26.8125 9.9375 23.8685 9.9375 20.25C9.9375 16.6315 12.8815 13.6875 16.5 13.6875C20.1185 13.6875 23.0625 16.6315 23.0625 20.25C23.0625 23.8685 20.1185 26.8125 16.5 26.8125Z" fill="#17696A"/>
                    <path d="M20.25 19.3125H17.4375V16.5C17.4375 15.9822 17.0178 15.5625 16.5 15.5625C15.9822 15.5625 15.5625 15.9822 15.5625 16.5V20.25C15.5625 20.7678 15.9822 21.1875 16.5 21.1875H20.25C20.7678 21.1875 21.1875 20.7678 21.1875 20.25C21.1875 19.7322 20.7678 19.3125 20.25 19.3125Z" fill="#17696A"/>
                    </svg>
                    <div class="services-section__item__text-block">
                        <span>Fast Worldwide Shipping</span>
                        Get free shipping over $250
                    </div>
                </div><hr>
                <div class="services-section__item">
                    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M28.6904 22.5C29.2079 22.5 29.6279 22.08 29.6279 21.5625C29.6279 21.045 29.2079 20.625 28.6904 20.625C28.1719 20.625 27.7529 21.045 27.7529 21.5625C27.7529 22.08 28.1719 22.5 28.6904 22.5Z" fill="#17696A"/>
                    <path d="M19.3154 22.5C19.8329 22.5 20.2529 22.08 20.2529 21.5625C20.2529 21.045 19.8329 20.625 19.3154 20.625C18.7969 20.625 18.3779 21.045 18.3779 21.5625C18.3779 22.08 18.7969 22.5 19.3154 22.5Z" fill="#17696A"/>
                    <path d="M3.375 45.0048V47.0625C3.375 47.5803 3.79468 48 4.3125 48H43.6875C44.2053 48 44.625 47.5803 44.625 47.0625V45.0029C44.625 41.2745 42.5306 37.8289 38.6547 36.4142C40.0554 35.1907 40.9069 33.3984 40.9069 31.4604C40.9069 30.943 40.4872 30.5229 39.9694 30.5229C37.7142 30.5229 35.8136 28.9281 35.3558 26.8125H38.0654C39.6145 26.8125 40.875 25.5509 40.875 24V19.6875C40.875 18.4647 40.0909 17.4221 39 17.0358V15C39 6.72913 32.2723 0 24.0029 0C15.7145 0 9 6.70789 9 15V17.0372C7.90906 17.425 7.125 18.4673 7.125 19.6875V24C7.125 25.5509 8.38806 26.8125 9.94043 26.8125H12.6442C12.1871 28.9281 10.2883 30.5229 8.0354 30.5229C7.51758 30.5229 7.0979 30.943 7.0979 31.4604C7.0979 33.401 7.95154 35.1951 9.35596 36.4193C5.495 37.8351 3.375 41.3156 3.375 45.0048ZM38.9528 32.3196C38.6609 33.8917 37.5791 35.2262 36.0674 35.8257L30.3878 35.0881L29.781 32.7166C31.5516 31.6578 32.9626 30.1619 33.9082 28.4059C34.7904 30.4501 36.6852 31.9662 38.9528 32.3196ZM31.5168 16.875C28.927 16.875 26.8198 14.7415 26.8198 12.119C26.8198 11.6012 26.4001 11.1815 25.8823 11.1815C25.3649 11.1815 24.9448 11.6012 24.9448 12.119C24.9448 14.7415 22.8376 16.875 20.2471 16.875H14.6279C14.6279 11.7056 18.8335 7.5 24.0029 7.5C29.1823 7.5 33.3779 11.6917 33.3779 16.875H31.5168ZM14.625 18.75H20.2471C22.6362 18.75 24.7317 17.4576 25.8823 15.5292C27.033 17.4576 29.1281 18.75 31.5168 18.75H33.375V23.0625C33.375 26.6085 31.411 29.8118 28.2499 31.422C26.9271 32.0958 25.4982 32.4375 24.0029 32.4375C22.5117 32.4375 21.0872 32.0984 19.7681 31.4297C18.8829 30.9811 18.0769 30.3966 17.3719 29.6913C15.6006 27.921 14.625 25.5667 14.625 23.0625V18.75ZM19.9611 33.5647C21.2446 34.0605 22.5996 34.3125 24.0029 34.3125C25.4117 34.3125 26.7719 34.0583 28.0609 33.5574L28.656 35.8846C28.3436 38.2057 26.3745 39.9375 24.0121 39.9375C21.65 39.9375 19.6809 38.2064 19.3678 35.8861L19.9611 33.5647ZM39 24C39 24.5171 38.5807 24.9375 38.0654 24.9375H35.25V18.75H38.0654C38.5807 18.75 39 19.1704 39 19.6875V24ZM24.0029 1.875C31.2385 1.875 37.125 7.76294 37.125 15V16.875H35.2529C35.2529 10.6593 30.2223 5.625 24.0029 5.625C17.7997 5.625 12.7529 10.6718 12.7529 16.875H10.875V15C10.875 7.74829 16.7472 1.875 24.0029 1.875ZM9 24V19.6875C9 19.1715 9.42114 18.7511 9.94043 18.75H12.75V24.9375H9.94043C9.42188 24.9375 9 24.5171 9 24ZM14.0933 28.4033C14.6071 29.3525 15.2611 30.2329 16.0463 31.0173C16.7069 31.6783 17.4434 32.2496 18.2402 32.7253L17.6364 35.0885L11.941 35.8275C10.4275 35.2277 9.34424 33.8925 9.052 32.3196C11.3188 31.9658 13.2125 30.4482 14.0933 28.4033ZM11.8418 37.7307L11.9451 37.7175H11.9458C11.9465 37.7172 11.9473 37.7172 11.948 37.7172L17.6781 36.9738C18.4373 39.7947 20.9956 41.8125 24.0121 41.8125C27.0286 41.8125 29.5865 39.7947 30.3453 36.9734C30.631 37.0107 28.8402 36.7782 36.1813 37.7311C40.2913 38.265 42.75 41.3452 42.75 45.0029V46.125H5.25V45.0048C5.25 41.4155 7.70728 38.2676 11.8418 37.7307Z" fill="#17696A"/>
                    <path d="M21.4963 28.9434C22.2833 29.3144 23.1267 29.5026 24.0023 29.5026C24.8578 29.5026 25.6843 29.3221 26.4599 28.9661C26.9305 28.7504 27.1367 28.1938 26.9206 27.7232C26.7049 27.2526 26.1483 27.046 25.6777 27.2621C25.1493 27.5045 24.5857 27.6276 24.0026 27.6276C23.4054 27.6276 22.8308 27.4998 22.2957 27.2475C21.8274 27.0266 21.2689 27.2273 21.0481 27.6957C20.8272 28.1641 21.0279 28.7229 21.4963 28.9434Z" fill="#17696A"/>
                    <path d="M32.4404 43.6875H36.1904C36.7083 43.6875 37.1279 43.2678 37.1279 42.75C37.1279 42.2322 36.7083 41.8125 36.1904 41.8125H32.4404C31.9226 41.8125 31.5029 42.2322 31.5029 42.75C31.5029 43.2678 31.9226 43.6875 32.4404 43.6875Z" fill="#17696A"/>
                    <path d="M39.9375 41.8125C40.455 41.8125 40.875 42.2325 40.875 42.75C40.875 43.2675 40.455 43.6875 39.9375 43.6875C39.42 43.6875 39 43.2675 39 42.75C39 42.2325 39.42 41.8125 39.9375 41.8125Z" fill="#17696A"/>
                    </svg>
                    <div class="services-section__item__text-block">
                        <span>24/7 Customer Support</span>
                        Friendly 24/7 customer support
                    </div>
                </div><hr>
                <div class="services-section__item">
                    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_79_2529)">
                    <path d="M23.9905 27.2813C24.509 27.2813 24.9298 26.8612 24.9298 26.3438C24.9298 25.8263 24.509 25.4062 23.9905 25.4062C23.472 25.4062 23.0511 25.8263 23.0511 26.3438C23.0511 26.8612 23.472 27.2813 23.9905 27.2813Z" fill="#17696A"/>
                    <path d="M23.454 47.7318C23.6172 47.8482 23.8084 47.9064 24 47.9064C24.1915 47.9064 24.3827 47.8482 24.5459 47.7318C34.1165 40.9089 43.726 37.9151 43.726 23.8764V6.49596C43.726 6.00853 43.3513 5.6024 42.8648 5.56175L40.4233 5.35814C34.8258 4.89268 29.3189 3.05649 24.4979 0.0487979C24.1933 -0.141266 23.8066 -0.141266 23.502 0.0487979C18.6806 3.05649 13.1738 4.89268 7.57627 5.3585L5.1351 5.56175C4.64819 5.6024 4.27393 6.00853 4.27393 6.49596V23.8764C4.27393 38.311 15.233 41.8709 23.454 47.7318ZM6.1526 7.35838L7.73259 7.22691C13.435 6.7523 19.0461 4.92857 24 1.94394C28.9535 4.92857 34.5649 6.7523 40.267 7.22691L41.8473 7.35838V23.8764C41.8473 36.5352 33.3959 39.2514 23.9985 45.8216C15.7511 40.108 6.1526 36.8655 6.1526 23.8764V7.35838Z" fill="#17696A"/>
                    <path d="M23.4526 40.9171C23.7938 41.1497 24.2235 41.1328 24.5475 40.8926C33.0511 35.0182 38.0901 33.0853 38.0901 23.8773V11.581C38.0901 11.117 37.7499 10.7226 37.2902 10.6537C32.7946 9.97955 28.4681 8.58319 24.4308 6.50347C24.1402 6.35369 23.7942 6.37273 23.5278 6.52434C19.5019 8.59307 15.1894 9.98248 10.7099 10.6537C10.2502 10.7226 9.91003 11.1166 9.91003 11.581V23.8773C9.91003 33.1721 15.429 35.4532 23.4526 40.9171ZM11.7887 12.3804C15.6954 11.7209 19.4733 10.5347 23.0512 8.84832V22.5937C23.0512 23.1115 23.4717 23.5312 23.9905 23.5312C24.5093 23.5312 24.9298 23.1115 24.9298 22.5937V8.83953C28.5129 10.53 32.2978 11.7194 36.2114 12.3804V23.8773C36.2114 31.4982 32.6346 33.1597 24.9298 38.3602V30.0937C24.9298 29.5759 24.5093 29.1562 23.9905 29.1562C23.4717 29.1562 23.0512 29.5759 23.0512 30.0937V38.3873C15.8524 33.6046 11.7887 31.5608 11.7887 23.8773V12.3804Z" fill="#17696A"/>
                    </g>
                    <defs>
                    <clipPath id="clip0_79_2529">
                    <rect width="48" height="48" fill="white"/>
                    </clipPath>
                    </defs>
                    </svg>
                    <div class="services-section__item__text-block">
                        <span>Money Back Guarantee</span>
                        We return money within 30 days
                    </div>
                </div><hr>
                <div class="services-section__item">
                    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M24 33.375C23.4825 33.375 23.0625 33.795 23.0625 34.3125C23.0625 34.83 23.4825 35.25 24 35.25C24.5175 35.25 24.9375 34.83 24.9375 34.3125C24.9375 33.795 24.5175 33.375 24 33.375Z" fill="#17696A"/>
                    <path d="M45.1875 18.375H41.8125C41.8125 15.2505 41.8125 7.39746 41.8125 4.3125C41.8125 2.7616 40.5509 1.5 39 1.5H2.8125C1.2616 1.5 0 2.7616 0 4.3125V26.8125C0 28.3634 1.2616 29.625 2.8125 29.625H6.1875V43.6875C6.1875 45.2384 7.4491 46.5 9 46.5H45.1875C46.7384 46.5 48 45.2384 48 43.6875V21.1875C48 19.6366 46.7384 18.375 45.1875 18.375ZM1.875 9H39.9375V12.75H1.875V9ZM2.8125 3.375H39C39.5171 3.375 39.9375 3.79541 39.9375 4.3125V7.125H1.875V4.3125C1.875 3.79541 2.29541 3.375 2.8125 3.375ZM2.8125 27.75C2.29541 27.75 1.875 27.3296 1.875 26.8125V14.625H39.9375V18.375H9C7.4491 18.375 6.1875 19.6366 6.1875 21.1875V27.75H2.8125ZM46.125 43.6875C46.125 44.2046 45.7046 44.625 45.1875 44.625H9C8.48291 44.625 8.0625 44.2046 8.0625 43.6875V21.1875C8.0625 20.6704 8.48291 20.25 9 20.25H45.1875C45.7046 20.25 46.125 20.6704 46.125 21.1875V43.6875Z" fill="#17696A"/>
                    <path d="M37.125 24C36.1029 24 35.1174 24.3354 34.3121 24.9393C33.5076 24.3354 32.5225 24 31.5 24C28.9153 24 26.8125 26.1028 26.8125 28.6875C26.8125 31.2722 28.9153 33.375 31.5 33.375C32.5225 33.375 33.5079 33.0396 34.3121 32.4357C35.1174 33.0396 36.1029 33.375 37.125 33.375C39.7097 33.375 41.8125 31.2722 41.8125 28.6875C41.8125 26.1028 39.7097 24 37.125 24ZM28.6875 28.6875C28.6875 27.1366 29.9491 25.875 31.5 25.875C32.3064 25.875 33.0747 26.2222 33.6083 26.8275C33.6083 26.8279 33.6086 26.8282 33.609 26.8286C34.0627 27.3417 34.3125 28.002 34.3125 28.6875C34.3125 29.373 34.0627 30.0333 33.6083 30.5475C33.0747 31.1528 32.3064 31.5 31.5 31.5C29.9491 31.5 28.6875 30.2384 28.6875 28.6875ZM37.125 31.5C36.5636 31.5 36.0205 31.3312 35.5616 31.0247C35.9685 30.3186 36.1875 29.514 36.1875 28.6875C36.1875 27.861 35.9685 27.0564 35.5616 26.3503C36.0205 26.0438 36.5636 25.875 37.125 25.875C38.6759 25.875 39.9375 27.1366 39.9375 28.6875C39.9375 30.2384 38.6759 31.5 37.125 31.5Z" fill="#17696A"/>
                    <path d="M16.5 39H12.75C12.2322 39 11.8125 39.4197 11.8125 39.9375C11.8125 40.4553 12.2322 40.875 12.75 40.875H16.5C17.0178 40.875 17.4375 40.4553 17.4375 39.9375C17.4375 39.4197 17.0178 39 16.5 39Z" fill="#17696A"/>
                    <path d="M24 39H20.25C19.7322 39 19.3125 39.4197 19.3125 39.9375C19.3125 40.4553 19.7322 40.875 20.25 40.875H24C24.5178 40.875 24.9375 40.4553 24.9375 39.9375C24.9375 39.4197 24.5178 39 24 39Z" fill="#17696A"/>
                    <path d="M31.5 39H27.75C27.2322 39 26.8125 39.4197 26.8125 39.9375C26.8125 40.4553 27.2322 40.875 27.75 40.875H31.5C32.0178 40.875 32.4375 40.4553 32.4375 39.9375C32.4375 39.4197 32.0178 39 31.5 39Z" fill="#17696A"/>
                    <path d="M39 39H35.25C34.7322 39 34.3125 39.4197 34.3125 39.9375C34.3125 40.4553 34.7322 40.875 35.25 40.875H39C39.5178 40.875 39.9375 40.4553 39.9375 39.9375C39.9375 39.4197 39.5178 39 39 39Z" fill="#17696A"/>
                    <path d="M12.75 35.25H20.25C20.7678 35.25 21.1875 34.8303 21.1875 34.3125C21.1875 33.7947 20.7678 33.375 20.25 33.375H12.75C12.2322 33.375 11.8125 33.7947 11.8125 34.3125C11.8125 34.8303 12.2322 35.25 12.75 35.25Z" fill="#17696A"/>
                    </svg>
                    <div class="services-section__item__text-block">
                        <span>Secure Online Payment</span>
                        Accept all major credit cards
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section>
        <div class="instagram-section">
            <div class="instagram-section__container container_small margin_top">
                <div class="instagram-section__info-block">
                    <span>Follow us on Instagram</span>
                    <h1>@createx_store</h1>
                    <ElementButton
                        size="large"
                    ><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21.9804 7.88005C21.9335 6.81738 21.7617 6.0868 21.5155 5.45374C21.2616 4.78176 20.8709 4.18014 20.359 3.68002C19.8589 3.1721 19.2533 2.77743 18.5891 2.52745C17.9524 2.28127 17.2256 2.10943 16.1629 2.06257C15.0923 2.01175 14.7524 2 12.0371 2C9.32169 2 8.98182 2.01175 7.91517 2.05861C6.8525 2.10546 6.12192 2.27746 5.48901 2.52348C4.81688 2.77743 4.21527 3.16814 3.71514 3.68002C3.20723 4.18014 2.81271 4.78573 2.56257 5.44992C2.3164 6.0868 2.14455 6.81341 2.0977 7.87609C2.04688 8.9467 2.03513 9.28658 2.03513 12.002C2.03513 14.7173 2.04688 15.0572 2.09373 16.1239C2.14058 17.1865 2.31258 17.9171 2.55876 18.5502C2.81271 19.2221 3.20723 19.8238 3.71514 20.3239C4.21527 20.8318 4.82085 21.2265 5.48504 21.4765C6.12192 21.7226 6.84853 21.8945 7.91136 21.9413C8.97785 21.9883 9.31788 21.9999 12.0332 21.9999C14.7486 21.9999 15.0885 21.9883 16.1551 21.9413C17.2178 21.8945 17.9484 21.7226 18.5813 21.4765C19.9254 20.9568 20.9881 19.8941 21.5077 18.5502C21.7538 17.9133 21.9258 17.1865 21.9726 16.1239C22.0195 15.0572 22.0312 14.7173 22.0312 12.002C22.0312 9.28658 22.0273 8.9467 21.9804 7.88005ZM20.1794 16.0457C20.1363 17.0225 19.9723 17.5499 19.8355 17.9015C19.4994 18.7728 18.8079 19.4643 17.9366 19.8004C17.585 19.9372 17.0538 20.1012 16.0808 20.1441C15.0259 20.1911 14.7095 20.2027 12.041 20.2027C9.37252 20.2027 9.05217 20.1911 8.0011 20.1441C7.02434 20.1012 6.4969 19.9372 6.14527 19.8004C5.71168 19.6402 5.31701 19.3862 4.99667 19.0541C4.66457 18.7298 4.41062 18.3391 4.25037 17.9055C4.11362 17.5539 3.94956 17.0225 3.90667 16.0497C3.85967 14.9948 3.84807 14.6783 3.84807 12.0097C3.84807 9.34122 3.85967 9.02087 3.90667 7.96995C3.94956 6.99319 4.11362 6.46575 4.25037 6.11412C4.41062 5.68038 4.66457 5.28586 5.00064 4.96536C5.3248 4.63327 5.7155 4.37931 6.14923 4.21921C6.50087 4.08247 7.03228 3.9184 8.00506 3.87537C9.05996 3.82851 9.37648 3.81676 12.0448 3.81676C14.7173 3.81676 15.0337 3.82851 16.0848 3.87537C17.0615 3.9184 17.589 4.08247 17.9406 4.21921C18.3742 4.37931 18.7689 4.63327 19.0892 4.96536C19.4213 5.28967 19.6753 5.68038 19.8355 6.11412C19.9723 6.46575 20.1363 6.99701 20.1794 7.96995C20.2262 9.02484 20.238 9.34122 20.238 12.0097C20.238 14.6783 20.2262 14.9908 20.1794 16.0457Z" fill="#17696A"/>
                    <path d="M12.0371 6.86423C9.20066 6.86423 6.89934 9.1654 6.89934 12.002C6.89934 14.8385 9.20066 17.1397 12.0371 17.1397C14.8736 17.1397 17.1748 14.8385 17.1748 12.002C17.1748 9.1654 14.8736 6.86423 12.0371 6.86423ZM12.0371 15.3347C10.1969 15.3347 8.70435 13.8422 8.70435 12.002C8.70435 10.1617 10.1969 8.66924 12.0371 8.66924C13.8773 8.66924 15.3698 10.1617 15.3698 12.002C15.3698 13.8422 13.8773 15.3347 12.0371 15.3347Z" fill="#17696A"/>
                    <path d="M18.5775 6.6611C18.5775 7.32346 18.0405 7.86053 17.3779 7.86053C16.7156 7.86053 16.1785 7.32346 16.1785 6.6611C16.1785 5.99858 16.7156 5.46167 17.3779 5.46167C18.0405 5.46167 18.5775 5.99858 18.5775 6.6611Z" fill="#17696A"/>
                    </svg>
                    Follow instagram
                    </ElementButton>
                </div>
                <div class="instagram-section__images-block">
                    <div class="instagram-section__images-block__image">
                        <img src="/images/instagram/insta-1.png">
                    </div>
                    <div class="instagram-section__images-block__image">
                        <img src="/images/instagram/insta-2.png">
                    </div>
                    <div class="instagram-section__images-block__image">
                        <img src="/images/instagram/insta-3.png">
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section>
        <div class="blog-section">
            <div class="blog-section__container container_small margin_top">
                <div class="blog-section__title-block">
                    <h1>Fashion blog</h1>
                    <ElementButton
                        link="/blog/"
                    >View blog
                    </ElementButton>
                </div>
                <div class="blog-section__cards">
                    <CardBlog/>
                    <CardBlog/>
                </div>
            </div>
        </div>
    </section>
    <section>
        <div class="brands-section">
            <div class="brands-section__container container_small margin_small">
                <div class="brands-section__item">
                    <img src="/images/brands/brand-logo-1.png" alt="brand-logo">
                </div>
                <div class="brands-section__item">
                    <img src="/images/brands/brand-logo-2.png" alt="brand-logo">
                </div>
                <div class="brands-section__item">
                    <img src="/images/brands/brand-logo-3.png" alt="brand-logo">
                </div>
                <div class="brands-section__item">
                    <img src="/images/brands/brand-logo-4.png" alt="brand-logo">
                </div>
                <div class="brands-section__item">
                    <img src="/images/brands/brand-logo-5.png" alt="brand-logo">
                </div>
                <div class="brands-section__item">
                    <img src="/images/brands/brand-logo-6.png" alt="brand-logo">
                </div>
            </div>
        </div>
    </section>
    <SectionForm/>
</template>

<style lang="scss">
    section {
        .hero-section {
            position: relative;
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
            &__slide {
                height: 50rem;
                &__info-block {
                    @include df_fdc;
                    gap: 3.75rem;
                    padding-top: 8.75rem;
                }
                &__title-block {
                    span {
                        @include text_2;
                        font-size: 1.125rem;
                        font-weight: 700;
                        letter-spacing: 1px;
                        text-transform: uppercase;
                    }
                    h1 {
                        font-size: 4.5rem;
                    }
                }
                &__btns-block {
                    @include df_ac;
                    gap: 1.5rem;
                }
                &__paginator {
                    @include df_ac;
                    gap: .25rem;
                    padding-top: 7.5rem;
                    &__item {
                        @include df_fdc;
                        gap: .75rem;
                        @include heading_3;
                        width: 11.125rem;
                        opacity: .6;
                        hr {
                            width: 100%;
                            border: 0;
                            border-top: 2px solid $gray-800;
                        }
                        &[data-active="true"] {
                            opacity: 1;
                        }
                    }
                }
            }
        }
        .sub-hero-section {
            &__container {
                display: flex;
                gap: 1.875rem;
                margin-top: -3.75rem
            }
            &__item {
                @include df_fdc;
                gap: 1rem;
                @include strong_1;
                font-size: 1.25rem;
                text-align: center;
                &__image {
                    aspect-ratio: 1;
                    width: 100%;
                    img {
                        @include wh_100;
                        object-fit: contain;
                    }
                }
            }
        }
        .new-arrivals-section {
            &__title-block {
                @include df_fdc;
                width: 100%;
                gap: 1.5rem;
                text-align: center;
                padding-bottom: 3.75rem;
                span {
                    @include df_fdc;
                    gap: .25rem;
                    @include text_1;
                    font-size: 1.125rem;
                    color: $gray-700;
                    a {
                        color: $primary;
                        text-decoration: underline;
                    }
                }
            }
            &__dots-block {
                @include df_ac_jcc;
                gap: .75rem;
                padding-top: 5rem;
                &__item {
                    cursor: pointer;
                    content: '';
                    width: 1.875rem;
                    height: 3px;
                    background-color: $gray-500;
                    &[data-active="true"] {
                        background-color: $gray-800;
                    }
                }
            }
        }
        .banners-section {
            &__container {
                @include df_fdc;
                gap: 1rem;
            }
            &__stroke {
                @include df_ac;
                gap: 1rem;
            }
            &__item {
                @include df_fdc;
                gap: 2.5rem;
                padding: 3.75rem;
                min-height: 31.25rem;
                width: 100%;
                &__title-block {
                    @include df_fdc;
                    gap: .75rem;
                    color: $gray-900;
                    span {
                        @include text_2;
                        font-weight: 700;
                        letter-spacing: 1px;
                        text-transform: uppercase;
                    }
                    h2 {
                        @include heading_2;
                    }
                    &__list {
                        @include df_ac;
                        gap: 1.5rem;
                    }
                    &__item {
                        @include df_fdc;
                        gap: .25rem;
                        h3 {
                            @include heading_3;
                        }
                    }
                }
                &.second {
                    justify-content: space-between;
                    .banners-section__item {
                        &__title-block {
                            max-width: 22.625rem;
                            .button {
                                margin-top: 1.75rem;
                            }
                        }
                    }
                }
                &.third {
                    .banners-section__item {
                        &__title-block {
                            max-width: 19.6875rem;
                        }
                    }
                }
                &.fourth {
                    position: relative;
                    background-color: $gray-300;
                    .banners-section__item {
                        &__title-block {
                            z-index: 1;
                        }
                        &__image {
                            position: absolute;
                            bottom: 0;
                            right: 0;
                            max-width: 27.5rem;
                            max-height: 23.75rem;
                            @include wh_100;
                            img {
                                @include wh_100;
                            }
                        }
                        &__input {
                            z-index: 1;
                            display: flex;
                            align-items: flex-end;
                            width: 22.5rem;
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
                    p {
                        z-index: 1;
                        max-width: 22.5rem;
                        @include text_2;
                    }
                }
                &.small {
                    max-width: 45.9375rem
                }
            }
        }
        .popular-categories-section {
            &__container {
                @include df_fdc;
                gap: 3.75rem;
            }
            &__title {
                width: 100%;
                text-align: center;
            }
            &__list {
                @include df_ac;
                justify-content: space-between;
            }
            &__item {
                @include df_fdc;
                gap: 1.5rem;
                text-align: center;
                @include strong_1;
                color: $gray-900;
                font-size: 1.25rem;
                &__image {
                    aspect-ratio: 1;
                    max-height: 11.25rem;
                    height: 100%;
                    img {
                        @include wh_100;
                        border-radius: 50%;
                    }
                }
            }
        }
        .sales-section {
            &__container {
                margin-top: 6.25rem;
            }
            &__title-block {
                @include df_ac;
                justify-content: space-between;
                padding-bottom: 3.75rem;
                &__btns {
                    @include df_ac;
                    gap: 1.5rem;
                    svg {
                        cursor: pointer;
                        max-width: 1.5rem;
                        max-height: 1.5rem;
                        @include wh_100;
                        &:last-of-type {
                            transform: rotateY(180deg);
                        }
                    }
                }
            }
            &__btn-block {
                @include df_ac_jcc;
                margin-top: 5rem;
            }
        }
        .cta-mobile-app {
            background-color: $gray-900;
            &__container {
                position: relative;
                display: flex;
                justify-content: flex-end;
                padding: 3.75rem 0;
                margin-top: 9.375rem;
            }
            &__image-block {
                position: absolute;
                left: 0;
                top: -1.875rem;
                width: 30.625rem;
                height: 20.625rem;
                img {
                    @include wh_100;
                    object-fit: contain;
                }
            }
            &__info-block {
                @include df_fdc;
                gap: 3rem;
                color: $white;
                max-width: 37.5rem;
                h2 {
                    @include heading_2;
                }
                &__images {
                    @include df_ac;
                    gap: 1.5rem;
                    &__item {
                        width: 10.125rem;
                        height: 3rem;
                        cursor: pointer;
                        @include transition(opacity);
                        &:hover {
                            opacity: .6;
                        }
                        img {
                            @include wh_100;
                            object-fit: contain;
                        }
                    }
                }
            }
        }
        .services-section {
            &__container {
                display: flex;
                justify-content: space-between;
            }
            hr {
                border: 0;
                border-left: 1px solid #DADBDD;
            }
            &__item {
                @include df_fdc_ac;
                gap: 1.5rem;
                text-align: center;
                min-width: 15rem;
                max-width: 15rem;
                svg {
                    max-width: 3rem;
                    max-height: 3rem;
                    @include wh_100;
                }
                &__text-block {
                    @include df_fdc;
                    gap: .5rem;
                    @include text_1;
                    color: $gray-700;
                    span {
                        @include strong_1;
                        font-size: 1.25rem;
                        color: $gray-900;
                    }
                }
            }
        }
        .instagram-section {
            &__container {
                display: flex;
                justify-content: space-between;
            }
            &__info-block {
                @include df_fdc;
                gap: .5rem;
                span {
                    @include strong_1;
                    text-transform: uppercase;
                    color: $gray-900;
                }
                h1 {
                    padding-bottom: 3.25rem;
                    color: $gray-900;
                }
            }
            &__images-block {
                @include df_ac;
                gap: .9375rem;
                &__image {
                    max-width: 16.25rem;
                    max-height: 16.25rem;
                    @include wh_100;
                    aspect-ratio: 1;
                    img {
                        @include wh_100;
                        object-fit: contain;
                        aspect-ratio: 1;
                    }
                }
            }
        }
        .blog-section {
            &__container {
                @include df_fdc;
                gap: 3.75rem;
            }
            &__title-block {
                @include df_ac;
                justify-content: space-between;
            }
            &__cards {
                @include grid(2, 1.875rem);
            }
        }
        .brands-section {
            &__container {
                @include df_ac;
                justify-content: space-between;
                
            }
            &__item {
                display: flex;
                width: 7.5rem;
                height: 4rem;
                img {
                    @include wh_100;
                    object-fit: contain;
                }
            }
        }
    }
</style>