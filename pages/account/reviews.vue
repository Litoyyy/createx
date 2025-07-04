<script setup lang="ts">

</script>

<template>
    <SectionBreadcrumbs :breadcrumbs="[{text: 'Account', link: '/account/'}, {text: 'My profile '}]"/>
    <section>
        <div class="profile-main-section">
            <div class="profile-main-section__container container_small">
                <AccountMenu/>
                <div class="profile-main-section__info-block">
                    <div class="profile-main-section__title-block">
                        <h2>My reviews</h2>
                        <div class="profile-main-section__title-block__input">
                            <strong>Sort by</strong>
                            <ElementInput placeholder="popularity">
                                <template #icon>
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M13.1377 5.52861C13.3981 5.78896 13.3981 6.21107 13.1377 6.47141L8.47108 11.1381C8.21073 11.3984 7.78862 11.3984 7.52827 11.1381L2.8616 6.47141C2.60125 6.21107 2.60125 5.78896 2.8616 5.52861C3.12195 5.26826 3.54406 5.26826 3.80441 5.52861L7.99967 9.72387L12.1949 5.52861C12.4553 5.26826 12.8774 5.26826 13.1377 5.52861Z" fill="#424551"/>
                                    </svg>
                                </template>
                            </ElementInput>
                        </div>
                    </div>
                    <div class="profile-main-section__reviews-list">
                        <div class="profile-main-section__reviews-list__for">
                            For:
                            <span>Chrono watch with blue leather belt</span>
                        </div>
                        <CardReview/><hr>
                        <div class="profile-main-section__reviews-list__for">
                            For:
                            <span>Modal-blend trenchcoat</span>
                        </div>
                        <CardReview/><hr>
                        <div class="profile-main-section__reviews-list__for">
                            For:
                            <span>Denim shorts</span>
                        </div>
                        <CardReview/><hr>
                        <div class="profile-main-section__reviews-list__for">
                            For:
                            <span>Modal-blend trenchcoat</span>
                        </div>
                        <CardReview/>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss">
    .profile-main-section {
        &__title-block {
            &__input {
                @include df_ac;
                gap: .75rem;
                @include strong_1;
                .field {
                    max-width: 10.625rem;
                }
            }
        }
        &__reviews-list {
            @include df_fdc;
            gap: 1.25rem;
            &__for {
                @include df_ac;
                gap: .5rem;
                color: $gray-700;
                span {
                    @include strong_1;
                    color: $primary;
                }
            }
            hr {
                border: 0;
                border-top: 1px solid $gray-300;
            }
        }
    }
</style>