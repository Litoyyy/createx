<script setup lang="ts">

</script>

<template>
    <SectionBreadcrumbs :breadcrumbs="[{text: 'Contacts'}]"/>
    <section>
        <div class="contacts-main-section">
            <div class="contacts-main-section__container container_small">
                <ContactsMenu/>
                <div class="contacts-main-section__info-block stores">
                    <CardAddress/>
                </div>
            </div>
        </div>
    </section>
    <SectionForm/>
</template>

<style lang="scss">
    .contacts-main-section {
        &__info-block {
            &.stores {
                @include grid(2, 1.875rem);
                row-gap: 3rem;
            }
        }
    }
</style>