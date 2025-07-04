<script setup lang="ts">

</script>

<template>
    <SectionBreadcrumbs :breadcrumbs="[{text: 'Contacts'}]"/>
    <section>
        <div class="contacts-main-section">
            <div class="contacts-main-section__container container_small">
                <ContactsMenu/>
                <div class="contacts-main-section__info-block index">
                    <div class="contacts-main-section__text-block">
                        <p>If you have any questions, concerns or comments, we would love to hear from you! Submit your query using any of the methods below:</p>
                        <div class="contacts-main-section__text-block__contacts">
                            <span>
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M7.08268 2.43522C6.39233 2.43522 5.83268 2.99487 5.83268 3.68522V16.3154C5.83268 17.0058 6.39233 17.5654 7.08268 17.5654H12.916C13.6064 17.5654 14.166 17.0058 14.166 16.3154V3.68522C14.166 2.99487 13.6064 2.43522 12.916 2.43522H12.8465L12.6436 2.92227C12.5142 3.23278 12.2107 3.43504 11.8743 3.43504H8.12435C7.78795 3.43504 7.48454 3.23278 7.35514 2.92227L7.15217 2.43522H7.08268ZM4.16602 3.68522C4.16602 2.07439 5.47185 0.768555 7.08268 0.768555H12.916C14.5268 0.768555 15.8327 2.07439 15.8327 3.68522V16.3154C15.8327 17.9263 14.5268 19.2321 12.916 19.2321H7.08268C5.47185 19.2321 4.16602 17.9263 4.16602 16.3154V3.68522Z" fill="#17696A"/>
                                </svg>
                                (405) 555-0128
                            </span>
                            <span>
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M18.9577 14.9997V5.83301C18.9577 4.45229 17.8384 3.33301 16.4577 3.33301L3.54101 3.33302C2.1603 3.33302 1.04102 4.45231 1.04102 5.83302V14.9997C1.04102 16.3804 2.1603 17.4997 3.54102 17.4997L16.4577 17.4997C17.8384 17.4997 18.9577 16.3804 18.9577 14.9997ZM17.291 7.71589V14.9997C17.291 15.4599 16.9179 15.833 16.4577 15.833H3.54102C3.08078 15.833 2.70768 15.4599 2.70768 14.9997L2.70768 7.71578L8.59366 11.7182C9.44206 12.2952 10.5568 12.2952 11.4052 11.7182L17.291 7.71589ZM17.2815 5.70685C17.2207 5.30648 16.875 4.99967 16.4577 4.99967L3.54101 4.99969C3.1237 4.99969 2.77804 5.30643 2.71719 5.70675L9.53084 10.34C9.81364 10.5323 10.1852 10.5323 10.468 10.34L17.2815 5.70685Z" fill="#17696A"/>
                                </svg>
                                Send us an email
                            </span>
                            <span>
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9.99935 1.66699C5.39727 1.66699 1.66602 5.12116 1.66602 9.38262C1.66602 11.8107 2.87747 13.9764 4.77122 15.391V18.3337L7.60872 16.7764C8.36602 16.9857 9.1681 17.0993 9.99935 17.0993C14.6014 17.0993 18.3327 13.6451 18.3327 9.38366C18.3327 5.1222 14.6014 1.66699 9.99935 1.66699ZM10.8275 12.0576L8.7056 9.79408L4.56497 12.0576L9.12018 7.2222L11.2941 9.48574L15.3827 7.2222L10.8275 12.0576Z" fill="#17696A"/>
                                </svg>
                                Connect on Messenger
                            </span>
                            <span>
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M18.75 4.8106C18.1059 5.08388 17.4148 5.26922 16.6887 5.35196C17.4301 4.92683 17.9976 4.25252 18.2666 3.45149C17.5711 3.84519 16.8035 4.13106 15.9855 4.28603C15.3305 3.61695 14.3988 3.2002 13.3653 3.2002C11.3827 3.2002 9.77523 4.73942 9.77523 6.63674C9.77523 6.90583 9.80694 7.16865 9.86819 7.41997C6.88501 7.2765 4.23973 5.90797 2.46928 3.82843C2.1598 4.33523 1.98374 4.92576 1.98374 5.55613C1.98374 6.74878 2.618 7.8011 3.58033 8.41677C2.992 8.39793 2.43866 8.24296 1.95423 7.98537V8.0283C1.95423 9.69317 3.19213 11.0826 4.83353 11.3989C4.5328 11.4764 4.21568 11.5193 3.88761 11.5193C3.6558 11.5193 3.43161 11.4973 3.2118 11.4554C3.66889 12.8219 4.99429 13.8156 6.56463 13.8428C5.33657 14.7642 3.7881 15.3119 2.10624 15.3119C1.81646 15.3119 1.53103 15.2951 1.25 15.2647C2.83893 16.2417 4.7253 16.8113 6.75273 16.8113C13.3566 16.8113 16.9665 11.5738 16.9665 7.0315L16.9544 6.5865C17.6597 6.1048 18.2699 5.49959 18.75 4.8106Z" fill="#17696A"/>
                                </svg>
                                Tweet us
                            </span>
                        </div>
                    </div>
                    <div class="contacts-main-section__form-block">
                        <span>Or get in touch with us by completing the below form:</span>
                        <div class="contacts-main-section__form-block__form">
                            <ElementInput
                                id="contacts-input-full-name"
                                placeholder="Your full name"
                            >Full Name*
                            </ElementInput>
                            <ElementInput
                                id="contacts-input-email"
                                placeholder="Your working email"
                                type="email"
                            >Email*
                            </ElementInput>
                            <ElementInput
                                id="contacts-input-phone"
                                placeholder="Your phone number"
                            >Phone
                            </ElementInput>
                            <ElementInput
                                id="contacts-input-subject"
                                placeholder="Title your message"
                            >Subject
                            </ElementInput>
                            <ElementInput
                                class="message"
                                id="contacts-input-message"
                                type="textarea"
                                placeholder="Write your message here"
                            >Message*
                            </ElementInput>
                            <div class="contacts-main-section__form-block__form__btn">
                                <ElementButton
                                    size="large"
                                    color="primary"
                                >Send message
                                </ElementButton>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <SectionForm/>
</template>

<style lang="scss">
    .contacts-main-section {
        &__container {
            display: flex;
            gap: 15.75rem;
            padding-top: 2.5rem;
            padding-bottom: 11.25rem;
        }
        &__info-block {
            @include df_fdc;
            width: 100%;
            &.index {
                gap: 3.75rem;
            }
        }
        &__text-block {
            @include df_fdc;
            gap: 2rem;
            p {
                @include strong_1;
                font-size: 1.25rem;
                color: $gray-900;
            }
            &__contacts {
                @include df_fdc;
                gap: .75rem;
                span {
                    @include df_ac;
                    gap: .75rem;
                    cursor: pointer;
                    svg {
                        max-width: 1.25rem;
                        max-height: 1.25rem;
                        @include wh_100;
                    }
                }
            }
        }
        &__form-block {
            @include df_fdc;
            gap: 2rem;
            span {
                @include strong_1;
                font-size: 1.25rem;
                color: $gray-900;
            }
            &__form {
                @include grid(2, 1.5rem);
                column-gap: 1.875rem;
                .message {
                    grid-column: span 2;
                    textarea {
                        height: 6.25rem;
                    }
                }
                &__btn {
                    padding-top: 1.5rem;
                }
            }
        }
    }
</style>