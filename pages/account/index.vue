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
                        <h2>My profile</h2>
                        <button>
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M6.0415 3.12533C6.0415 1.97473 6.97424 1.04199 8.12484 1.04199H11.8748C13.0254 1.04199 13.9582 1.97473 13.9582 3.12533V3.54199H18.1248C18.5851 3.54199 18.9582 3.91509 18.9582 4.37533C18.9582 4.83556 18.5851 5.20866 18.1248 5.20866H17.0832V15.6253C17.0832 17.4663 15.5908 18.9587 13.7498 18.9587H6.24984C4.40889 18.9587 2.9165 17.4663 2.9165 15.6253V5.20866H1.87484C1.4146 5.20866 1.0415 4.83556 1.0415 4.37533C1.0415 3.91509 1.4146 3.54199 1.87484 3.54199H6.0415V3.12533ZM7.70817 3.54199H12.2915V3.12533C12.2915 2.89521 12.105 2.70866 11.8748 2.70866H8.12484C7.89472 2.70866 7.70817 2.89521 7.70817 3.12533V3.54199ZM4.58317 5.20866V15.6253C4.58317 16.5458 5.32936 17.292 6.24984 17.292H13.7498C14.6703 17.292 15.4165 16.5458 15.4165 15.6253V5.20866H4.58317ZM9.99984 6.66699C10.4601 6.66699 10.8332 7.04009 10.8332 7.50033L10.8332 15.0003C10.8332 15.4606 10.4601 15.8337 9.99984 15.8337C9.5396 15.8337 9.1665 15.4606 9.1665 15.0003L9.1665 7.50033C9.1665 7.04009 9.5396 6.66699 9.99984 6.66699Z" fill="#FF4242"/>
                            </svg>
                            Delete account
                        </button>
                    </div>
                    <div class="profile-main-section__form">
                        <ElementInput
                            id="profile-main-input-first-name"
                            placeholder="Enter first name"
                        >First name
                        </ElementInput>
                        <ElementInput
                            id="profile-main-input-Last-name"
                            placeholder="Enter last name"
                        >Last name
                        </ElementInput>
                        <ElementInput
                            id="profile-main-input-Email"
                            placeholder="Enter Email"
                            type="email"
                        >Email
                        </ElementInput>
                        <ElementInput
                            id="profile-main-input-Phone"
                            placeholder="Enter Phone"
                        >Phone
                        </ElementInput>
                        <ElementInput
                            id="profile-main-input-New-Password"
                            placeholder="Enter new password"
                            type="password"
                        >New Password
                        <template #icon>
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2.2007 7.09822C4.45412 5.21822 7.04836 4.16667 9.79185 4.16667C12.5353 4.16667 15.1296 5.21822 17.383 7.09822C17.7364 7.39305 18.2619 7.34558 18.5567 6.99218C18.8516 6.63878 18.8041 6.11328 18.4507 5.81845C15.945 3.72796 12.9831 2.5 9.79185 2.5C6.60065 2.5 3.63873 3.72796 1.133 5.81845C0.779606 6.11328 0.73213 6.63878 1.02696 6.99218C1.3218 7.34558 1.8473 7.39305 2.2007 7.09822Z" fill="#9A9CA5"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M3.41748 8.07419C4.91625 6.80886 7.05386 5.625 9.47933 5.625C11.9048 5.625 14.0424 6.80886 15.5412 8.07419C16.2967 8.71204 16.9162 9.39204 17.3539 9.99941C17.5724 10.3025 17.7546 10.5999 17.8857 10.8756C18.0061 11.1289 18.1252 11.4486 18.1252 11.7708C18.1252 12.0931 18.0061 12.4127 17.8857 12.666C17.7546 12.9418 17.5724 13.2392 17.3539 13.5423C16.9162 14.1496 16.2967 14.8296 15.5412 15.4675C14.0424 16.7328 11.9048 17.9167 9.47933 17.9167C7.05386 17.9167 4.91625 16.7328 3.41748 15.4675C2.66195 14.8296 2.0425 14.1496 1.60474 13.5423C1.38629 13.2392 1.20411 12.9418 1.07298 12.666C0.95253 12.4127 0.833496 12.0931 0.833496 11.7708C0.833496 11.4486 0.95253 11.1289 1.07298 10.8756C1.20411 10.5999 1.38629 10.3025 1.60474 9.99941C2.0425 9.39204 2.66195 8.71204 3.41748 8.07419ZM2.50607 11.7708C2.5145 11.7991 2.53395 11.8574 2.57812 11.9503C2.65513 12.1122 2.77992 12.3223 2.95681 12.5677C3.30972 13.0574 3.83438 13.6382 4.49263 14.194C5.82143 15.3158 7.59007 16.25 9.47933 16.25C11.3686 16.25 13.1372 15.3158 14.466 14.194C15.1243 13.6382 15.6489 13.0574 16.0018 12.5677C16.1787 12.3223 16.3035 12.1122 16.3805 11.9503C16.4247 11.8574 16.4442 11.799 16.4526 11.7708C16.4442 11.7426 16.4247 11.6843 16.3805 11.5914C16.3035 11.4295 16.1787 11.2193 16.0018 10.9739C15.6489 10.4843 15.1243 9.90343 14.466 9.3477C14.1865 9.11173 13.8876 8.88407 13.5721 8.67166C13.6879 9.05945 13.7502 9.47038 13.7502 9.89583C13.7502 12.2545 11.838 14.1667 9.47933 14.1667C7.12061 14.1667 5.2085 12.2545 5.2085 9.89583C5.2085 9.47038 5.27071 9.05945 5.38653 8.67166C5.07109 8.88407 4.77213 9.11174 4.49263 9.3477C3.83438 9.90343 3.30972 10.4843 2.95681 10.9739C2.77992 11.2193 2.65513 11.4295 2.57812 11.5914C2.53395 11.6843 2.5145 11.7426 2.50607 11.7708ZM6.87516 9.89583C6.87516 8.45759 8.04109 7.29167 9.47933 7.29167C10.9176 7.29167 12.0835 8.45759 12.0835 9.89583C12.0835 11.3341 10.9176 12.5 9.47933 12.5C8.04109 12.5 6.87516 11.3341 6.87516 9.89583Z" fill="#9A9CA5"/>
                            </svg>
                        </template>
                        </ElementInput>
                        <ElementInput
                            id="profile-main-input-Confirm-Password"
                            placeholder="Confirm Password"
                            type="password"
                        >Confirm Password
                        <template #icon>
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2.2007 7.09822C4.45412 5.21822 7.04836 4.16667 9.79185 4.16667C12.5353 4.16667 15.1296 5.21822 17.383 7.09822C17.7364 7.39305 18.2619 7.34558 18.5567 6.99218C18.8516 6.63878 18.8041 6.11328 18.4507 5.81845C15.945 3.72796 12.9831 2.5 9.79185 2.5C6.60065 2.5 3.63873 3.72796 1.133 5.81845C0.779606 6.11328 0.73213 6.63878 1.02696 6.99218C1.3218 7.34558 1.8473 7.39305 2.2007 7.09822Z" fill="#9A9CA5"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M3.41748 8.07419C4.91625 6.80886 7.05386 5.625 9.47933 5.625C11.9048 5.625 14.0424 6.80886 15.5412 8.07419C16.2967 8.71204 16.9162 9.39204 17.3539 9.99941C17.5724 10.3025 17.7546 10.5999 17.8857 10.8756C18.0061 11.1289 18.1252 11.4486 18.1252 11.7708C18.1252 12.0931 18.0061 12.4127 17.8857 12.666C17.7546 12.9418 17.5724 13.2392 17.3539 13.5423C16.9162 14.1496 16.2967 14.8296 15.5412 15.4675C14.0424 16.7328 11.9048 17.9167 9.47933 17.9167C7.05386 17.9167 4.91625 16.7328 3.41748 15.4675C2.66195 14.8296 2.0425 14.1496 1.60474 13.5423C1.38629 13.2392 1.20411 12.9418 1.07298 12.666C0.95253 12.4127 0.833496 12.0931 0.833496 11.7708C0.833496 11.4486 0.95253 11.1289 1.07298 10.8756C1.20411 10.5999 1.38629 10.3025 1.60474 9.99941C2.0425 9.39204 2.66195 8.71204 3.41748 8.07419ZM2.50607 11.7708C2.5145 11.7991 2.53395 11.8574 2.57812 11.9503C2.65513 12.1122 2.77992 12.3223 2.95681 12.5677C3.30972 13.0574 3.83438 13.6382 4.49263 14.194C5.82143 15.3158 7.59007 16.25 9.47933 16.25C11.3686 16.25 13.1372 15.3158 14.466 14.194C15.1243 13.6382 15.6489 13.0574 16.0018 12.5677C16.1787 12.3223 16.3035 12.1122 16.3805 11.9503C16.4247 11.8574 16.4442 11.799 16.4526 11.7708C16.4442 11.7426 16.4247 11.6843 16.3805 11.5914C16.3035 11.4295 16.1787 11.2193 16.0018 10.9739C15.6489 10.4843 15.1243 9.90343 14.466 9.3477C14.1865 9.11173 13.8876 8.88407 13.5721 8.67166C13.6879 9.05945 13.7502 9.47038 13.7502 9.89583C13.7502 12.2545 11.838 14.1667 9.47933 14.1667C7.12061 14.1667 5.2085 12.2545 5.2085 9.89583C5.2085 9.47038 5.27071 9.05945 5.38653 8.67166C5.07109 8.88407 4.77213 9.11174 4.49263 9.3477C3.83438 9.90343 3.30972 10.4843 2.95681 10.9739C2.77992 11.2193 2.65513 11.4295 2.57812 11.5914C2.53395 11.6843 2.5145 11.7426 2.50607 11.7708ZM6.87516 9.89583C6.87516 8.45759 8.04109 7.29167 9.47933 7.29167C10.9176 7.29167 12.0835 8.45759 12.0835 9.89583C12.0835 11.3341 10.9176 12.5 9.47933 12.5C8.04109 12.5 6.87516 11.3341 6.87516 9.89583Z" fill="#9A9CA5"/>
                            </svg>
                        </template>
                        </ElementInput>
                        <ElementSelect
                            id="profile-main-input-Country"
                            placeholder="Choose country"
                        >Country
                        </ElementSelect>
                        <ElementSelect
                            id="profile-main-input-City"
                            placeholder="Choose city"
                        >City
                        </ElementSelect>
                        <ElementInput
                            id="profile-main-input-Address"
                            placeholder="Enter address"
                        >Address
                        </ElementInput>
                        <ElementInput
                            id="profile-main-input-ZIP-Code"
                            placeholder="Enter ZIP Code"
                        >ZIP Code
                        </ElementInput>
                        <div class="profile-main-section__form__btn">
                            <ElementButton
                                color="primary"
                                size="large"
                            >Save changes
                            </ElementButton>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss">
    .profile-main-section {
        &__container {
            display: flex;
            gap: 8.5rem;
            padding-top: 2.5rem;
            padding-bottom: 11.25rem;
        }
        &__title-block {
            @include df_ac;
            justify-content: space-between;
            h2 {
                @include heading_2;
                color: $gray-900;
            }
            button {
                @include df_ac;
                gap: .5rem;
                color: $danger;
                svg {
                    max-width: 1.25rem;
                    max-height: 1.25rem;
                    @include wh_100;
                }
            }
        }
        &__info-block {
            @include df_fdc;
            gap: 2.5rem;
            width: 100%;
        }
        &__form {
            @include grid(2, 1.5rem);
            column-gap: 1.875rem;
            &__btn {
                padding-top: 1.5rem;
            }
        }
    }
</style>