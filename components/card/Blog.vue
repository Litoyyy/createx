<script setup lang="ts">
    const props = defineProps<{
        type?: 'shadow' | 'default',
    }>();
</script>

<template>
    <NuxtLink class="blog-card" :data-type="type || 'shadow'">
        <div class="blog-card__image-block">
            <img src="/images/news-image.png" alt="blog-image">
        </div>
        <div class="blog-card__info-block">
            <div class="blog-card__info-block__title" v-if="type === 'shadow' || !type">
                Bag Trends for Summer 2020
            </div>
            <div class="blog-card__info-block__tags">
                <span>Fashion</span><hr>
                <span>August 24, 2020</span><hr>
                <span>
                    <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M14.6153 7.54508C14.5204 8.2029 14.2954 8.82813 13.9619 9.40307C13.9869 9.54541 13.9997 9.6893 13.9997 9.8338C13.9997 10.3357 13.8543 10.816 13.5849 11.2524C13.4504 11.4702 13.4158 11.7255 13.4025 11.8941C13.3873 12.0874 13.3924 12.2989 13.4062 12.502C13.4217 12.7299 13.4497 12.9692 13.4818 13.195C13.2216 13.1191 12.9395 13.0429 12.6704 12.9821C12.4465 12.9316 12.2174 12.8886 12.0099 12.8672C11.8289 12.8485 11.5674 12.834 11.3335 12.9096C10.8221 13.0749 10.2594 13.1671 9.66636 13.1671C8.96109 13.1671 8.31335 13.0419 7.74559 12.8245C7.60903 12.8307 7.47147 12.8338 7.33301 12.8338C6.52993 12.8338 5.75701 12.7282 5.03385 12.533C6.08516 13.7489 7.81828 14.5005 9.66636 14.5005C10.3883 14.5005 11.0812 14.3896 11.7198 14.1859C11.7209 14.186 11.723 14.1859 11.726 14.1859C11.7424 14.1856 11.7879 14.1847 11.8729 14.1934C12.0067 14.2072 12.1786 14.2381 12.377 14.2828C12.7719 14.3719 13.2157 14.5033 13.5615 14.6131C14.2949 14.8459 15.0056 14.2059 14.8745 13.4617C14.8181 13.1413 14.7595 12.7504 14.7365 12.4117C14.7249 12.2414 14.7236 12.1016 14.7317 11.999C14.7351 11.9565 14.7394 11.9299 14.7421 11.9157C15.1172 11.2944 15.333 10.587 15.333 9.8338C15.333 8.98477 15.0693 8.20946 14.6153 7.54508Z" fill="#787A80"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M3.73109 4.29894C2.83245 4.98613 2.33306 5.88822 2.33306 6.8335C2.33306 7.30486 2.45577 7.75883 2.68599 8.18098C2.77367 8.34177 2.79854 8.50763 2.80744 8.61991C2.81714 8.74234 2.8123 8.86818 2.80166 8.98585C2.78034 9.22142 2.72949 9.48835 2.66849 9.75125C2.59715 10.0588 2.50572 10.3868 2.41296 10.6947C2.76512 10.5667 3.15003 10.4355 3.51493 10.3291C3.80985 10.243 4.10767 10.1684 4.37274 10.1265C4.60108 10.0904 4.93243 10.0549 5.2177 10.1536C5.85792 10.3751 6.57411 10.5002 7.33306 10.5002C8.76451 10.5002 10.0358 10.0557 10.935 9.36805C11.8337 8.68086 12.3331 7.77877 12.3331 6.8335C12.3331 5.88822 11.8337 4.98613 10.935 4.29894C10.0358 3.61127 8.76451 3.16683 7.33306 3.16683C5.90162 3.16683 4.63034 3.61127 3.73109 4.29894ZM2.92116 3.23979C4.07283 2.3591 5.63489 1.8335 7.33306 1.8335C9.03123 1.8335 10.5933 2.3591 11.745 3.23979C12.8973 4.12096 13.6664 5.38554 13.6664 6.8335C13.6664 8.28146 12.8973 9.54603 11.745 10.4272C10.5933 11.3079 9.03123 11.8335 7.33306 11.8335C6.43769 11.8335 5.58244 11.6875 4.80591 11.4219C4.80513 11.4241 4.74215 11.4179 4.58098 11.4434C4.39521 11.4728 4.15809 11.5304 3.88836 11.609C3.35138 11.7657 2.74835 11.9873 2.28902 12.1661C1.49327 12.4758 0.682633 11.7115 0.95074 10.8975C1.09284 10.466 1.26043 9.92072 1.36966 9.44992C1.42468 9.21275 1.46039 9.01336 1.47375 8.86569C1.47839 8.81443 1.47958 8.77707 1.47932 8.75181C1.17246 8.16543 0.99973 7.51699 0.99973 6.8335C0.99973 5.38554 1.76887 4.12096 2.92116 3.23979Z" fill="#787A80"/>
                    </svg>No comments
                </span>
            </div>
            <div class="blog-card__info-block__title" v-if="type === 'default'">
                Bag Trends for Summer 2020
            </div>
            <div class="blog-card__info-block__text">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis, error saepe deserunt doloremque nesciunt maxime accusantium laborum, esse consectetur aspernatur sint perspiciatis dolorum ullam eum dolor minus? Corrupti, labore suscipit.
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis, error saepe deserunt doloremque nesciunt maxime accusantium laborum, esse consectetur aspernatur sint perspiciatis dolorum ullam eum dolor minus? Corrupti, labore suscipit.
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corporis, error saepe deserunt doloremque nesciunt maxime accusantium laborum, esse consectetur aspernatur sint perspiciatis dolorum ullam eum dolor minus? Corrupti, labore suscipit.
            </div>
        </div>
    </NuxtLink>
</template>

<style lang="scss">
    .blog-card {
        @include df_fdc;
        &[data-type="shadow"] {
            background-color: $white;
            border-radius: .25rem;
            box-shadow: 0 .25rem .25rem #1E212C08;
            .blog-card__info-block {
                gap: .75rem;
                padding: 1.5rem;
            }
            .blog-card__image-block {
                border-radius: .25rem .25rem 0 0;
                overflow: hidden;
            }
        }
        &[data-type="default"] {
            gap: 1rem;
            .blog-card__info-block {
                gap: .5rem;
            }
            .blog-card__image-block {
                border-radius: .25rem;
                overflow: hidden;
            }
        }
        cursor: pointer;
        &__image-block {
            aspect-ratio: 100 / 51;
            img {
                aspect-ratio: 100 / 51;
                @include wh_100;
                object-fit: cover;
            }
        }
        &__info-block {
            @include df_fdc;
            
            &__title {
                @include strong_1;
                font-size: 1.25rem;
            }
            &__tags {
                @include df_ac;
                gap: .75rem;
                @include text_2;
                color: $gray-700;
                hr {
                    border: 0;
                    height: .75rem;
                    border-left: 1px solid $gray-700;
                }
                span {
                    @include df_ac;
                    gap: .5rem;
                    text-wrap: nowrap;
                    svg {
                        max-width: 1rem;
                        max-height: 1rem;
                        @include wh_100;
                    }
                }
            }
            &__text {
                display: -webkit-box;
                -webkit-line-clamp: 2;
                -webkit-box-orient: vertical;
                overflow: hidden;
            }
        }
        &:hover {
            .blog-card__info-block__title {
                color: $primary;
            }
        }
    }
</style>