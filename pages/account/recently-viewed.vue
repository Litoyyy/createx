<script setup lang="ts">
    const { productsList } = useProducts();

</script>

<template>
    <SectionBreadcrumbs :breadcrumbs="[{text: 'Account', link: '/account/'}, {text: 'My profile '}]"/>
    <section>
        <div class="profile-main-section">
            <div class="profile-main-section__container container_small">
                <AccountMenu/>
                <div class="profile-main-section__info-block">
                    <div class="profile-main-section__title-block">
                        <h2>Recently viewed</h2>
                        <button>
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M6.0415 3.12533C6.0415 1.97473 6.97424 1.04199 8.12484 1.04199H11.8748C13.0254 1.04199 13.9582 1.97473 13.9582 3.12533V3.54199H18.1248C18.5851 3.54199 18.9582 3.91509 18.9582 4.37533C18.9582 4.83556 18.5851 5.20866 18.1248 5.20866H17.0832V15.6253C17.0832 17.4663 15.5908 18.9587 13.7498 18.9587H6.24984C4.40889 18.9587 2.9165 17.4663 2.9165 15.6253V5.20866H1.87484C1.4146 5.20866 1.0415 4.83556 1.0415 4.37533C1.0415 3.91509 1.4146 3.54199 1.87484 3.54199H6.0415V3.12533ZM7.70817 3.54199H12.2915V3.12533C12.2915 2.89521 12.105 2.70866 11.8748 2.70866H8.12484C7.89472 2.70866 7.70817 2.89521 7.70817 3.12533V3.54199ZM4.58317 5.20866V15.6253C4.58317 16.5458 5.32936 17.292 6.24984 17.292H13.7498C14.6703 17.292 15.4165 16.5458 15.4165 15.6253V5.20866H4.58317ZM9.99984 6.66699C10.4601 6.66699 10.8332 7.04009 10.8332 7.50033L10.8332 15.0003C10.8332 15.4606 10.4601 15.8337 9.99984 15.8337C9.5396 15.8337 9.1665 15.4606 9.1665 15.0003L9.1665 7.50033C9.1665 7.04009 9.5396 6.66699 9.99984 6.66699Z" fill="#FF4242"/>
                            </svg>
                            Delete all
                        </button>
                    </div>
                    <div class="profile-main-section__products-list">
                        <template v-for="(item, index) in productsList">
                            <CardProduct v-if="index < 4"
                                :res="item"
                            />
                        </template>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>