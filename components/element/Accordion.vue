<script setup lang="ts">
const props = defineProps<{
        type?: 'question' | 'default',
        state?: 'active' | '' | 'opened',
    }>();

    const accordionBody = ref<HTMLElement | null>(null);
    const accordionContent = ref<HTMLElement | null>(null);

    const emit = defineEmits<{
        (event: "update:state", value: string): void;
    }>();

    const updateMaxHeight = () => {
        if (accordionBody.value && accordionContent.value) {
            if(props.state === '') return;
            accordionBody.value.style.maxHeight = accordionContent.value.scrollHeight + 'px';
        };
    };

    const handleAccordion=()=>{
        if(props.state === 'active' || props.state === 'opened') {
            emit("update:state", '');
        } else {
            emit("update:state", 'active');
        };
    };
    
    watch(
        ()=>props.state,
        (newValue)=>{
            if(!accordionBody.value || !accordionContent.value) return;
            if(newValue === 'active' || props.state === 'opened') {
                updateMaxHeight();
            } else {
                accordionBody.value.style.maxHeight = '';
            };
        }
    );

    let resizeObserver: ResizeObserver | null = null;

    onMounted(() => {
        if (accordionContent.value) {
            if(props.state === 'active' || props.state === 'opened') updateMaxHeight();
            
            resizeObserver = new ResizeObserver(() => {
                updateMaxHeight();
            });

            resizeObserver.observe(accordionContent.value);
        }
    });

    onBeforeUnmount(() => {
        if (resizeObserver) {
            resizeObserver.disconnect();
        };
    });
</script>

<template>
    <div class="accordion-item">
        <div class="accordion-item__header" @click="handleAccordion">
            <slot name="header"/>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_14_3160)">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M8.00033 0.666687C8.36852 0.666687 8.66699 0.965164 8.66699 1.33335V7.33335H14.667C15.0352 7.33335 15.3337 7.63183 15.3337 8.00002C15.3337 8.36821 15.0352 8.66669 14.667 8.66669H8.66699V14.6667C8.66699 15.0349 8.36852 15.3334 8.00033 15.3334C7.63213 15.3334 7.33366 15.0349 7.33366 14.6667V8.66669H1.33366C0.965469 8.66669 0.666992 8.36821 0.666992 8.00002C0.666992 7.63183 0.965469 7.33335 1.33366 7.33335H7.33366V1.33335C7.33366 0.965164 7.63213 0.666687 8.00033 0.666687Z" fill="#17696A"/>
            </g>
            <defs>
            <clipPath id="clip0_14_3160">
            <rect width="16" height="16" fill="white"/>
            </clipPath>
            </defs>
            </svg>
        </div>
        <div class="accordion-item__body" ref="accordionBody">
            <div class="accordion-item__content" ref="accordionContent">
                <slot />
            </div>
        </div>
    </div>
</template>

<style lang="scss">
    .accordion-item {
        cursor: pointer;

        &__header {
            @include df_ac;
            justify-content: space-between;
            @include strong_1;
            color: $gray-900;
            svg {
                max-width: 1rem;
                max-height: 1rem;
                @include wh_100;
            }
        }
        &__body {
            max-height: 0;
            overflow-y: hidden;
            transition: max-height 0.3s ease;
        }
    }
</style>