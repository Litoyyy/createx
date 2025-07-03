<script setup lang="ts">

</script>

<template>
    <SectionBreadcrumbs
        :breadcrumbs="[{text: 'Fashion blog', link: '/blog/'}]"
    />
    <section>
        <div class="blog-main-section">
            <div class="blog-main-section__container container_small margin_bottom">
                <div class="blog-main-section__info-block">
                    <h1>Fashion blog</h1>
                    <div class="blog-main-section__list">
                        <CardBlog type="default"/>
                        <CardBlog type="default"/>
                        <CardBlog type="default"/>
                        <CardBlog type="default"/>
                        <div class="blog-main-section__pagination">
                            <span>1</span>
                            <span>2</span>
                            <span>3</span>
                            <span>4</span>
                            <span>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M14.7929 6.79289C15.1834 6.40237 15.8166 6.40237 16.2071 6.79289L20.7071 11.2929C21.0976 11.6834 21.0976 12.3166 20.7071 12.7071L16.2071 17.2071C15.8166 17.5976 15.1834 17.5976 14.7929 17.2071C14.4024 16.8166 14.4024 16.1834 14.7929 15.7929L17.5858 13H4C3.44772 13 3 12.5523 3 12C3 11.4477 3.44772 11 4 11H17.5858L14.7929 8.20711C14.4024 7.81658 14.4024 7.18342 14.7929 6.79289Z" fill="#424551"/>
                                </svg>
                            </span>
                        </div>
                    </div>
                </div>
                <div class="blog-main-section__side-bar">
                    <ElementInput 
                        id="search-header-input"
                        placeholder="Search the blog..."
                    >
                    <template #icon>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_79_3012)">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M7.25004 2.16667C4.44259 2.16667 2.16671 4.44256 2.16671 7.25C2.16671 10.0575 4.44259 12.3333 7.25004 12.3333C8.65263 12.3333 9.92148 11.7662 10.8419 10.8471C11.7641 9.92621 12.3334 8.65523 12.3334 7.25C12.3334 4.44256 10.0575 2.16667 7.25004 2.16667ZM0.833374 7.25C0.833374 3.70618 3.70621 0.833336 7.25004 0.833336C10.7939 0.833336 13.6667 3.70618 13.6667 7.25C13.6667 8.78281 13.1286 10.1909 12.232 11.2942L14.971 14.0282C15.2316 14.2883 15.232 14.7104 14.9719 14.971C14.7118 15.2316 14.2897 15.232 14.0291 14.9718L11.2887 12.2365C10.1862 13.1304 8.78027 13.6667 7.25004 13.6667C3.70621 13.6667 0.833374 10.7938 0.833374 7.25Z" fill="#424551"/>
                        </g>
                        <defs>
                        <clipPath id="clip0_79_3012">
                        <rect width="16" height="16" fill="white"/>
                        </clipPath>
                        </defs>
                        </svg>
                    </template>
                    </ElementInput>
                    <hr>
                    <div class="blog-main-section__side-bar__item">
                        <h4>Blog Categories</h4>
                        <div class="blog-main-section__side-bar__item__list">
                            <div class="blog-main-section__side-bar__item__list__item">
                                <ElementLink>All</ElementLink>
                                <span>23</span>
                            </div>
                            <div class="blog-main-section__side-bar__item__list__item">
                                <ElementLink>Fashion</ElementLink>
                                <span>3</span>
                            </div>
                            <div class="blog-main-section__side-bar__item__list__item">
                                <ElementLink>Designers</ElementLink>
                                <span>7</span>
                            </div>
                            <div class="blog-main-section__side-bar__item__list__item">
                                <ElementLink>Lifestyle</ElementLink>
                                <span>4</span>
                            </div>
                            <div class="blog-main-section__side-bar__item__list__item">
                                <ElementLink>Celebrity style</ElementLink>
                                <span>9</span>
                            </div>
                        </div>
                    </div>
                    <hr>
                    <div class="blog-main-section__side-bar__item">
                        <h4>Featured Posts</h4>
                        <div class="blog-main-section__side-bar__item__cards">
                            <div class="blog-main-section__side-bar__item__cards__card">
                                <div class="blog-main-section__side-bar__item__cards__card__image">
                                    <img src="/images/post/post-image-3.jpg" alt="post image">
                                </div>
                                <div class="blog-main-section__side-bar__item__cards__card__text-block">
                                    <span>
                                        <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M8.66699 4.83366C8.66699 4.46547 8.36851 4.16699 8.00033 4.16699C7.63213 4.16699 7.33366 4.46547 7.33366 4.83366V8.50033C7.33366 8.67714 7.4039 8.84671 7.52892 8.97173L9.52892 10.9717C9.78927 11.2321 10.2114 11.2321 10.4717 10.9717C10.7321 10.7114 10.7321 10.2893 10.4717 10.0289L8.66699 8.22418V4.83366Z" fill="#787A80"/>
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M8.00033 1.16699C3.95024 1.16699 0.666992 4.45024 0.666992 8.50033C0.666992 12.5504 3.95024 15.8337 8.00033 15.8337C12.0504 15.8337 15.3337 12.5504 15.3337 8.50033C15.3337 4.45024 12.0504 1.16699 8.00033 1.16699ZM2.00033 8.50033C2.00033 5.18662 4.68662 2.50033 8.00033 2.50033C11.314 2.50033 14.0003 5.18662 14.0003 8.50033C14.0003 11.814 11.314 14.5003 8.00033 14.5003C4.68662 14.5003 2.00033 11.814 2.00033 8.50033Z" fill="#787A80"/>
                                        </svg>July 5, 2020
                                    </span>
                                    14 Items From End-of-Spring Sales Are Sure to Spark Joy
                                </div>
                            </div>
                            <div class="blog-main-section__side-bar__item__cards__card">
                                <div class="blog-main-section__side-bar__item__cards__card__image">
                                    <img src="/images/post/post-image-1.jpg" alt="post image">
                                </div>
                                <div class="blog-main-section__side-bar__item__cards__card__text-block">
                                    <span>
                                        <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M8.66699 4.83366C8.66699 4.46547 8.36851 4.16699 8.00033 4.16699C7.63213 4.16699 7.33366 4.46547 7.33366 4.83366V8.50033C7.33366 8.67714 7.4039 8.84671 7.52892 8.97173L9.52892 10.9717C9.78927 11.2321 10.2114 11.2321 10.4717 10.9717C10.7321 10.7114 10.7321 10.2893 10.4717 10.0289L8.66699 8.22418V4.83366Z" fill="#787A80"/>
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M8.00033 1.16699C3.95024 1.16699 0.666992 4.45024 0.666992 8.50033C0.666992 12.5504 3.95024 15.8337 8.00033 15.8337C12.0504 15.8337 15.3337 12.5504 15.3337 8.50033C15.3337 4.45024 12.0504 1.16699 8.00033 1.16699ZM2.00033 8.50033C2.00033 5.18662 4.68662 2.50033 8.00033 2.50033C11.314 2.50033 14.0003 5.18662 14.0003 8.50033C14.0003 11.814 11.314 14.5003 8.00033 14.5003C4.68662 14.5003 2.00033 11.814 2.00033 8.50033Z" fill="#787A80"/>
                                        </svg>April 9, 2020
                                    </span>
                                    Best Fashion Instagrams of the Week
                                </div>
                            </div>
                            <div class="blog-main-section__side-bar__item__cards__card">
                                <div class="blog-main-section__side-bar__item__cards__card__image">
                                    <img src="/images/post/post-image-2.jpg" alt="post image">
                                </div>
                                <div class="blog-main-section__side-bar__item__cards__card__text-block">
                                    <span>
                                        <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M8.66699 4.83366C8.66699 4.46547 8.36851 4.16699 8.00033 4.16699C7.63213 4.16699 7.33366 4.46547 7.33366 4.83366V8.50033C7.33366 8.67714 7.4039 8.84671 7.52892 8.97173L9.52892 10.9717C9.78927 11.2321 10.2114 11.2321 10.4717 10.9717C10.7321 10.7114 10.7321 10.2893 10.4717 10.0289L8.66699 8.22418V4.83366Z" fill="#787A80"/>
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M8.00033 1.16699C3.95024 1.16699 0.666992 4.45024 0.666992 8.50033C0.666992 12.5504 3.95024 15.8337 8.00033 15.8337C12.0504 15.8337 15.3337 12.5504 15.3337 8.50033C15.3337 4.45024 12.0504 1.16699 8.00033 1.16699ZM2.00033 8.50033C2.00033 5.18662 4.68662 2.50033 8.00033 2.50033C11.314 2.50033 14.0003 5.18662 14.0003 8.50033C14.0003 11.814 11.314 14.5003 8.00033 14.5003C4.68662 14.5003 2.00033 11.814 2.00033 8.50033Z" fill="#787A80"/>
                                        </svg>March 12, 2020
                                    </span>
                                    Top 10 Looks from the Venice Film Festival
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr>
                    <div class="blog-main-section__side-bar__item">
                        <h4>Tags</h4>
                        <div class="blog-main-section__side-bar__item__tags-list">
                            <div class="blog-main-section__side-bar__item__tags-list__tag">
                                #trends
                            </div>
                            <div class="blog-main-section__side-bar__item__tags-list__tag">
                                #inspiration
                            </div>
                            <div class="blog-main-section__side-bar__item__tags-list__tag">
                                #designers
                            </div>
                            <div class="blog-main-section__side-bar__item__tags-list__tag">
                                #kidsfashion
                            </div>
                            <div class="blog-main-section__side-bar__item__tags-list__tag">
                                #streetstyle
                            </div>
                            <div class="blog-main-section__side-bar__item__tags-list__tag">
                                #models
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss">
    .blog-main-section {
        &__container {
            display: flex;
            gap: 4.875rem;
            padding-top: 2rem;
        }
        &__info-block {
            @include df_fdc;
            gap: 2rem;
        }
        &__list {
            @include df_fdc;
            gap: 3.75rem;
        }
        &__pagination {
            @include df_ac;
            gap: 1.25rem;
            @include strong_1;
            svg {
                max-width: 1.5rem;
                max-height: 1.5rem;
                @include wh_100;
            }
        }
        &__side-bar {
            min-width: 21.375rem;
            @include df_fdc;
            gap: 2rem;
            hr {
                border: 0;
                border-top: 1px solid $gray-300;
            }
            &__item {
                @include df_fdc;
                gap: 1.5rem;
                color: $gray-900;
                h4 {
                    @include heading_4;
                }
                &__list {
                    @include df_fdc;
                    gap: .5rem;
                    &__item {
                        @include df_ac;
                        justify-content: space-between;
                    }
                }
                &__cards {
                    @include df_fdc;
                    gap: 1.5rem;
                    &__card {
                        display: flex;
                        gap: 1.25rem;
                        &__image {
                            height: 6.25rem;
                            min-width: 6.25rem;
                            aspect-ratio: 1;
                            border-radius: .25rem;
                            overflow: hidden;
                            img {
                                @include wh_100;
                                aspect-ratio: 1;
                            }
                        }
                        &__text-block {
                            @include df_fdc;
                            gap: .25rem;
                        }
                    }
                }
                &__tags-list {
                    display: flex;
                    flex-wrap: wrap;
                    gap: .75rem;
                    &__tag {
                        @include df_ac_jcc;
                        padding: .375rem 1rem;
                        border-radius: .25rem;
                        @include strong_2;
                        font-weight: 700;
                        color: $gray-700;
                        border: 1px solid $gray-400;
                    }
                }
            }
        }
    }
</style>