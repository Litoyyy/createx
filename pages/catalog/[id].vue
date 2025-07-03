<script setup lang="ts">
    const { categoriesList } = useCategories();
    const { productsList } = useProducts();

    const route = useRoute();
    const id = route.params.id;

    const choosenCategory = ref();
    categoriesList.value.map(item=>{
        if(!item.subCategories.find(item=>item.id === Number(id))) return;
        choosenCategory.value = item.subCategories.find(item=>item.id === Number(id));
    });
</script>

<template>
    <SectionBreadcrumbs :breadcrumbs="[{text: 'Women', link: '/catalog/1/'}, {text: choosenCategory.title}]"/>

    <section>
        <div class="catalog-main-section">
            <div class="catalog-main-section__container container_small margin_bottom">
                <div class="catalog-main-section__filters-block">
                    <div class="catalog-main-section__filters-block__btns">
                        <ElementButton
                            color="primary"
                        ><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_79_5879)">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M11.667 6.33334C12.0352 6.33334 12.3337 6.63182 12.3337 7.00001V14.5C12.3337 14.8682 12.0352 15.1667 11.667 15.1667C11.2988 15.1667 11.0003 14.8682 11.0003 14.5V7.00001C11.0003 6.63182 11.2988 6.33334 11.667 6.33334Z" fill="white"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M11.667 0.833344C12.0352 0.833344 12.3337 1.13182 12.3337 1.50001V3.50001C12.3337 3.8682 12.0352 4.16668 11.667 4.16668C11.2988 4.16668 11.0003 3.8682 11.0003 3.50001V1.50001C11.0003 1.13182 11.2988 0.833343 11.667 0.833344Z" fill="white"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M8.00033 4.83334C8.00033 3.72877 8.89576 2.83334 10.0003 2.83334H13.3337C14.4382 2.83334 15.3337 3.72877 15.3337 4.83334V5.66668C15.3337 6.77125 14.4382 7.66668 13.3337 7.66668H10.0003C8.89576 7.66668 8.00033 6.77125 8.00033 5.66668V4.83334ZM10.0003 4.16668C9.63214 4.16668 9.33366 4.46515 9.33366 4.83334V5.66668C9.33366 6.03487 9.63214 6.33334 10.0003 6.33334H13.3337C13.7018 6.33334 14.0003 6.03487 14.0003 5.66668V4.83334C14.0003 4.46515 13.7018 4.16668 13.3337 4.16668H10.0003Z" fill="white"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M4.33366 11.8333C4.70185 11.8333 5.00033 12.1318 5.00033 12.5V14.5C5.00033 14.8682 4.70185 15.1667 4.33366 15.1667C3.96547 15.1667 3.66699 14.8682 3.66699 14.5V12.5C3.66699 12.1318 3.96547 11.8333 4.33366 11.8333Z" fill="white"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M4.33366 0.833344C4.70185 0.833344 5.00033 1.13182 5.00033 1.50001V9.00001C5.00033 9.3682 4.70185 9.66668 4.33366 9.66668C3.96547 9.66668 3.66699 9.3682 3.66699 9.00001V1.50001C3.66699 1.13182 3.96547 0.833344 4.33366 0.833344Z" fill="white"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M0.666992 10.3333C0.666992 9.22877 1.56242 8.33334 2.66699 8.33334H6.00033C7.1049 8.33334 8.00033 9.22877 8.00033 10.3333V11.1667C8.00033 12.2712 7.10489 13.1667 6.00033 13.1667H2.66699C1.56242 13.1667 0.666992 12.2712 0.666992 11.1667V10.3333ZM2.66699 9.66668C2.2988 9.66668 2.00033 9.96515 2.00033 10.3333V11.1667C2.00033 11.5349 2.2988 11.8333 2.66699 11.8333H6.00033C6.36852 11.8333 6.66699 11.5349 6.66699 11.1667V10.3333C6.66699 9.96515 6.36852 9.66668 6.00033 9.66668H2.66699Z" fill="white"/>
                        </g>
                        <defs>
                        <clipPath id="clip0_79_5879">
                        <rect width="16" height="16" fill="white"/>
                        </clipPath>
                        </defs>
                        </svg>
                        Show filters
                        </ElementButton>
                        <div class="catalog-main-section__filters-block__btns__item">
                            <strong>Sort by</strong>
                            <ElementInput placeholder="popularity">
                                <template #icon>
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M13.1377 5.52861C13.3981 5.78896 13.3981 6.21107 13.1377 6.47141L8.47108 11.1381C8.21073 11.3984 7.78862 11.3984 7.52827 11.1381L2.8616 6.47141C2.60125 6.21107 2.60125 5.78896 2.8616 5.52861C3.12195 5.26826 3.54406 5.26826 3.80441 5.52861L7.99967 9.72387L12.1949 5.52861C12.4553 5.26826 12.8774 5.26826 13.1377 5.52861Z" fill="#424551"/>
                                    </svg>
                                </template>
                            </ElementInput>
                        </div>
                        <div class="catalog-main-section__filters-block__btns__item">
                            <strong>Show</strong>
                            <ElementInput placeholder="12">
                                <template #icon>
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7.99966 0.666656L12.6185 6.66666H3.38086L7.99966 0.666656Z" fill="#1E212C"/>
                                    <path d="M7.99966 15.3333L3.38086 8.83332L12.6185 8.83332L7.99966 15.3333Z" fill="#1E212C"/>
                                    </svg>
                                </template>
                            </ElementInput>
                            <span>products per page</span>
                        </div>
                    </div>
                    <div class="catalog-main-section__filters-block__pagination">
                        <span>1</span>
                        <span>2</span>
                        <span>3</span>
                        <span>...</span>
                        <span>10</span>
                        <span>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M14.7929 6.79289C15.1834 6.40237 15.8166 6.40237 16.2071 6.79289L20.7071 11.2929C21.0976 11.6834 21.0976 12.3166 20.7071 12.7071L16.2071 17.2071C15.8166 17.5976 15.1834 17.5976 14.7929 17.2071C14.4024 16.8166 14.4024 16.1834 14.7929 15.7929L17.5858 13H4C3.44772 13 3 12.5523 3 12C3 11.4477 3.44772 11 4 11H17.5858L14.7929 8.20711C14.4024 7.81658 14.4024 7.18342 14.7929 6.79289Z" fill="#424551"/>
                            </svg>
                        </span>
                    </div>
                </div>
                <div class="catalog-main-section__cards-list">
                    <CardProduct v-for="card in productsList" :res="card"/>
                </div>
                <div class="catalog-main-section__filters-block">
                    <div class="catalog-main-section__filters-block__btns">
                        <div class="catalog-main-section__filters-block__btns__item">
                            <strong>Sort by</strong>
                            <ElementInput placeholder="popularity">
                                <template #icon>
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M13.1377 5.52861C13.3981 5.78896 13.3981 6.21107 13.1377 6.47141L8.47108 11.1381C8.21073 11.3984 7.78862 11.3984 7.52827 11.1381L2.8616 6.47141C2.60125 6.21107 2.60125 5.78896 2.8616 5.52861C3.12195 5.26826 3.54406 5.26826 3.80441 5.52861L7.99967 9.72387L12.1949 5.52861C12.4553 5.26826 12.8774 5.26826 13.1377 5.52861Z" fill="#424551"/>
                                    </svg>
                                </template>
                            </ElementInput>
                        </div>
                        <div class="catalog-main-section__filters-block__btns__item">
                            <strong>Show</strong>
                            <ElementInput placeholder="12">
                                <template #icon>
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M7.99966 0.666656L12.6185 6.66666H3.38086L7.99966 0.666656Z" fill="#1E212C"/>
                                    <path d="M7.99966 15.3333L3.38086 8.83332L12.6185 8.83332L7.99966 15.3333Z" fill="#1E212C"/>
                                    </svg>
                                </template>
                            </ElementInput>
                            <span>products per page</span>
                        </div>
                    </div>
                    <div class="catalog-main-section__filters-block__pagination">
                        <span>1</span>
                        <span>2</span>
                        <span>3</span>
                        <span>...</span>
                        <span>10</span>
                        <span>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M14.7929 6.79289C15.1834 6.40237 15.8166 6.40237 16.2071 6.79289L20.7071 11.2929C21.0976 11.6834 21.0976 12.3166 20.7071 12.7071L16.2071 17.2071C15.8166 17.5976 15.1834 17.5976 14.7929 17.2071C14.4024 16.8166 14.4024 16.1834 14.7929 15.7929L17.5858 13H4C3.44772 13 3 12.5523 3 12C3 11.4477 3.44772 11 4 11H17.5858L14.7929 8.20711C14.4024 7.81658 14.4024 7.18342 14.7929 6.79289Z" fill="#424551"/>
                            </svg>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <SectionForm/>
</template>

<style lang="scss">
    .catalog-main-section {
        &__container {
            @include df_fdc;
            gap: 2rem;
            padding-top: 2rem;
        }
        &__filters-block {
            @include df_ac;
            justify-content: space-between;
            &__btns {
                @include df_ac;
                gap: 3.75rem;
                .button {
                    width: 16rem;   
                }
                &__item {
                    @include df_ac;
                    gap: .75rem;
                    strong {
                        @include strong_1;
                    }
                    span {
                        @include text_2;
                        color: $gray-700;
                    }
                    .field {
                        width: 10.625rem;
                    }
                    &:last-of-type {
                        .field {
                            width: 5.5rem;
                        }
                    }
                }
            }
            &__pagination {
                @include df_ac;
                gap: 1.25rem;
                span {
                    @include strong_1;
                    svg {
                        max-width: 1.5rem;
                        max-height: 1.5rem;
                        @include wh_100;
                    }
                }
            }
            &:last-of-type {
                padding-top: 5rem;
            }
        }
        &__cards-list {
            @include grid(4, 1.875rem);
        }
    }
</style>