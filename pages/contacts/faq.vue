<script setup lang="ts">
    const questions = ref([
        {
            header: 'Do I need to register to place an order?',
            text: 'Adipiscing nunc arcu enim elit mattis eu placerat proin. Imperdiet elementum faucibus dignissim purus. Fusce parturient diam magna ullamcorper morbi semper massa ac facilisis.',
            state: ''
        },
        {
            header: 'What is the estimated delivery time?',
            text: 'Adipiscing nunc arcu enim elit mattis eu placerat proin. Imperdiet elementum faucibus dignissim purus. Fusce parturient diam magna ullamcorper morbi semper massa ac facilisis.',
            state: ''
        },
        {
            header: 'How can I pay for my order?',
            text: 'Adipiscing nunc arcu enim elit mattis eu placerat proin. Imperdiet elementum faucibus dignissim purus. Fusce parturient diam magna ullamcorper morbi semper massa ac facilisis.',
            state: ''
        },
        {
            header: 'Can I get a refund if the price has changed since I ordered it?',
            text: 'Adipiscing nunc arcu enim elit mattis eu placerat proin. Imperdiet elementum faucibus dignissim purus. Fusce parturient diam magna ullamcorper morbi semper massa ac facilisis.',
            state: ''
        },
        {
            header: 'Do you refund delivery charges if I return something?',
            text: 'Adipiscing nunc arcu enim elit mattis eu placerat proin. Imperdiet elementum faucibus dignissim purus. Fusce parturient diam magna ullamcorper morbi semper massa ac facilisis.',
            state: ''
        },
        {
            header: 'What documents will be provided with the order?',
            text: 'Adipiscing nunc arcu enim elit mattis eu placerat proin. Imperdiet elementum faucibus dignissim purus. Fusce parturient diam magna ullamcorper morbi semper massa ac facilisis.',
            state: ''
        },
        {
            header: 'Can I return the order to the courier if anything does not suit me?',
            text: 'Adipiscing nunc arcu enim elit mattis eu placerat proin. Imperdiet elementum faucibus dignissim purus. Fusce parturient diam magna ullamcorper morbi semper massa ac facilisis.',
            state: ''
        },
        {
            header: 'What should I do if my order hasnt been delivered yet?',
            text: 'Adipiscing nunc arcu enim elit mattis eu placerat proin. Imperdiet elementum faucibus dignissim purus. Fusce parturient diam magna ullamcorper morbi semper massa ac facilisis.',
            state: ''
        },
        {
            header: 'What is your Returns Policy?',
            text: 'Adipiscing nunc arcu enim elit mattis eu placerat proin. Imperdiet elementum faucibus dignissim purus. Fusce parturient diam magna ullamcorper morbi semper massa ac facilisis.',
            state: ''
        },
    ])
</script>

<template>
    <SectionBreadcrumbs :breadcrumbs="[{text: 'Contacts'}]"/>
    <section>
        <div class="contacts-main-section">
            <div class="contacts-main-section__container container_small">
                <ContactsMenu/>
                <div class="contacts-main-section__info-block faq">
                    <template v-for="item in questions">
                        <ElementAccordion
                            v-model:state="item.state"
                        ><template #header>{{ item.header }}</template>{{ item.text }}
                        </ElementAccordion>
                        <hr>
                    </template>
                </div>
            </div>
        </div>
    </section>
    <SectionForm/>
</template>

<style lang="scss">
    .contacts-main-section {
        &__info-block {
            &.faq {
                @include df_fdc;
                gap: 1.25rem;
                hr {
                    border: 0;
                    border-top: 1px solid $gray-300;
                    &:last-of-type {
                        display: none;
                    }
                }
            }
        }
    }
</style>