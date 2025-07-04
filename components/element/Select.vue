<script setup lang="ts">
    const props = defineProps<{
        id?: string,
        placeholder?: string,
        optionsArray?: Array<Object>
    }>();

    const selectRef = ref<HTMLDivElement | null>(null);

    const menuOpened = ref(false);

    const selectedValue = ref();

    const openSelect = () => {
        menuOpened.value = true;
        setTimeout(() => {
            document.addEventListener('click', checkForClose);
        }, 300);
    };

    function checkForClose(event: Event) {
        const targetElem = (event.target as any);
        if(!!selectRef.value && !selectRef.value.contains(targetElem)) {
            closeSelect();
        };
    };
    const closeSelect = () => {
        menuOpened.value = false;
        document.removeEventListener('click', checkForClose);
    };
</script>

<template>
    <div class="select"
        ref="selectRef"
    >
        <ElementInput
            :id="id"
            :placeholder="placeholder"
            :on-focus="openSelect"
            v-model:newValue="selectedValue"
        >
        <slot/>
        <template #icon>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M13.1387 5.52858C13.3991 5.78892 13.3991 6.21103 13.1387 6.47138L8.47206 11.1381C8.21171 11.3984 7.7896 11.3984 7.52925 11.1381L2.86258 6.47138C2.60223 6.21103 2.60223 5.78892 2.86258 5.52858C3.12293 5.26823 3.54504 5.26823 3.80539 5.52858L8.00065 9.72384L12.1959 5.52858C12.4563 5.26823 12.8784 5.26823 13.1387 5.52858Z" fill="#424551"/>
            </svg>
        </template>
        </ElementInput>
        <Transition name="select-menu">
            <div class="select__menu" v-if="menuOpened">
                <div 
                    class="select__menu__item" 
                    v-for="option in optionsArray" 
                    :key="option"
                    @click="()=>{
                        closeSelect()
                        selectedValue = option
                    }"
                >{{ option }}
                </div>
            </div>
        </Transition>
    </div>
</template>

<style lang="scss">
    .select {
        position: relative;
        @include df_fdc;
        &__menu {
            z-index: 15;
            position: absolute;
            top: 4.25rem;
            min-width: 100%;
            max-height: 10rem;
            overflow-y: auto;
            @include df_fdc;
            background-color: $white;
            border: 1px solid $gray-400;
            &:has(.option) {
                border-radius: .5rem;    
            }
            &__item {
                display: flex;
                padding: .5rem;
                background-color: $white;
                @include transition(background-color, color);
                cursor: pointer;
                &:hover {
                    background-color: $gray-300;
                }
            }
        }
    }
    .select-menu-enter-active,
    .select-menu-leave-active {
        @include transition(opacity, transform);
    }

    .select-menu-enter-from,
    .select-menu-leave-to {
        opacity: 0;
        transform: translateY(-2rem);
    }
</style>