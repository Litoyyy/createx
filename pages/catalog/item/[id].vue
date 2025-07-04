<script setup lang="ts">
    const { productsList } = useProducts();

    const choosenItem = ref();

    const route = useRoute();
    const id = route.params.id;

    choosenItem.value = productsList.value.find(item=>item.id === Number(id));
    
    const displayedVariant = ref(1);

    const salesPrice = ref();
    const getSalesPrice =()=> {
        if(choosenItem.value.sale) {
            salesPrice.value = choosenItem.value.price - (choosenItem.value.price / 100 * choosenItem.value.sale);
        };
    };

    const basket = useCookie(
        'basket',
        {
            default: () => [],
            watch: 'shallow'
        }
    );

    const wishlist = useCookie(
        'wishlist',
        {
            default: () => [],
            watch: 'shallow'
        }
    );

    const wishlisted = ref(false);

    const handleWishlist =()=> {
        if(wishlisted.value) {
            const product = wishlist.value?.find(item=>item.product_id === choosenItem.value.id);
            wishlist.value?.splice(wishlist.value.indexOf(product), 1);
            wishlisted.value = false;
        } else {
            wishlist.value?.push({product_id: choosenItem.value.id});
            wishlisted.value = true;
        };

        wishlist.value = [...wishlist.value];
    };

    const basketed = ref(false);

    const handleBasket =()=> {
        if(basketed.value) {
            const product = basket.value?.find(item=>item.product_id === choosenItem.value.id);
            basket.value?.splice(basket.value.indexOf(product), 1);
            basketed.value = false;
        } else {
            basket.value?.push({product_id: choosenItem.value.id});
            basketed.value = true;
        };

        basket.value = [...basket.value];
    };

    onMounted(()=>{
        getSalesPrice();

        wishlist.value?.map(item=>{
            if(item.product_id === choosenItem.value.id) wishlisted.value = true;
        });
        basket.value?.map(item=>{
            if(item.product_id === choosenItem.value.id) basketed.value = true;
        });
    });
</script>

<template>
    <SectionBreadcrumbs :breadcrumbs="[{text: 'Women', link: '/catalog/1/'}, {text: 'Clothes', link: '/catalog/1/'}, {text: choosenItem?.title}]"/>
    <section>
        <div class="product-main-section">
            <div class="product-main-section__container container_small margin_bottom">
                <div class="product-main-section__title-block">
                    <h1>{{ choosenItem.title }}</h1>
                    <span>
                        <strong>Art. No.</strong>
                        183260098
                    </span>
                </div>
                <div class="product-main-section__btns-block">
                    <label for="product-dispay-1" class="product-main-section__btns-block__btn">
                        General info
                        <input type="radio" name="product-display" id="product-dispay-1" :checked="displayedVariant === 1" @click="displayedVariant = 1">
                    </label>
                    <label for="product-dispay-2" class="product-main-section__btns-block__btn">
                        Product details
                        <input type="radio" name="product-display" id="product-dispay-2" :checked="displayedVariant === 2" @click="displayedVariant = 2">
                    </label>
                    <label for="product-dispay-3" class="product-main-section__btns-block__btn">
                        Reviews <sup>12</sup>
                        <input type="radio" name="product-display" id="product-dispay-3" :checked="displayedVariant === 3" @click="displayedVariant = 3">
                    </label>
                </div>
                <hr>
                <div class="product-main-section__main-block" v-if="displayedVariant === 1">
                    <div class="product-main-section__images-block">
                        <div class="product-main-section__images-block__main">
                            <img :src="choosenItem.image" alt="product block">
                            <button class="product-main-section__images-block__main__btn prev">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M9.20711 17.2071C8.81658 17.5976 8.18342 17.5976 7.79289 17.2071L3.29289 12.7071C2.90237 12.3166 2.90237 11.6834 3.29289 11.2929L7.79289 6.79289C8.18342 6.40237 8.81658 6.40237 9.20711 6.79289C9.59763 7.18342 9.59763 7.81658 9.20711 8.20711L6.41421 11L20 11C20.5523 11 21 11.4477 21 12C21 12.5523 20.5523 13 20 13L6.41421 13L9.20711 15.7929C9.59763 16.1834 9.59763 16.8166 9.20711 17.2071Z" fill="#424551"/>
                                </svg>
                            </button>
                            <button class="product-main-section__images-block__main__btn next">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M9.20711 17.2071C8.81658 17.5976 8.18342 17.5976 7.79289 17.2071L3.29289 12.7071C2.90237 12.3166 2.90237 11.6834 3.29289 11.2929L7.79289 6.79289C8.18342 6.40237 8.81658 6.40237 9.20711 6.79289C9.59763 7.18342 9.59763 7.81658 9.20711 8.20711L6.41421 11L20 11C20.5523 11 21 11.4477 21 12C21 12.5523 20.5523 13 20 13L6.41421 13L9.20711 15.7929C9.59763 16.1834 9.59763 16.8166 9.20711 17.2071Z" fill="#424551"/>
                                </svg>
                            </button>
                        </div>
                        <div class="product-main-section__images-block__list">
                            <img :src="choosenItem.image" alt="product block">
                        </div>
                    </div>
                    <div class="product-main-section__info-block">
                        <div class="product-main-section__info-block__main">
                            <div class="product-main-section__info-block__main__price-block">
                                <div class="product-main-section__info-block__main__price-block__price" v-if="choosenItem.sale">
                                    <div class="product-main-section__info-block__main__price-block__price__sale">
                                        ${{ salesPrice }}
                                    </div>
                                    <span>${{ choosenItem.price }}</span>
                                    <div class="product-main-section__info-block__main__price-block__price__sale-tag">
                                        -{{ choosenItem.sale }}%
                                    </div>
                                </div>
                                <div class="product-main-section__info-block__main__price-block__price" v-else>
                                    <span class="product-main-section__info-block__main__price-block__price__main">${{ choosenItem.price }}</span>
                                </div>
                                <div class="product-main-section__info-block__main__price-block__reviews-block" v-if="choosenItem.rating">
                                    <div class="product-main-section__info-block__main__price-block__reviews-block__rating">
                                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" v-if="choosenItem.score >= 1">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M5.93208 1.28395C6.33735 0.349362 7.66273 0.349361 8.068 1.28395L9.29394 4.11107L12.3615 4.40338C13.3756 4.50001 13.7852 5.76052 13.0216 6.43476L10.7116 8.47433L11.3816 11.4821C11.603 12.4764 10.5308 13.2555 9.65359 12.7376L7.00004 11.171L4.34649 12.7376C3.46929 13.2555 2.39703 12.4764 2.6185 11.4821L3.28844 8.47433L0.978516 6.43476C0.214907 5.76052 0.62447 4.50001 1.63855 4.40338L4.70614 4.11108L5.93208 1.28395Z" fill="#F89828"/>
                                        </svg>
                                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" v-else>
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M5.93208 1.28419C6.33735 0.349606 7.66273 0.349605 8.068 1.28419L9.29394 4.11132L12.3615 4.40363C13.3756 4.50026 13.7852 5.76076 13.0216 6.435L10.7116 8.47457L11.3816 11.4824C11.603 12.4767 10.5308 13.2557 9.65359 12.7378L7.00004 11.1712L4.34649 12.7378C3.46929 13.2557 2.39703 12.4767 2.6185 11.4824L3.28844 8.47457L0.978516 6.435C0.214907 5.76076 0.62447 4.50026 1.63855 4.40363L4.70614 4.11132L5.93208 1.28419ZM8.22598 4.57442L7.00004 1.74729L5.7741 4.57442C5.60543 4.96339 5.23862 5.2299 4.81656 5.27011L1.74897 5.56242L4.05889 7.60199C4.3767 7.8826 4.51681 8.31382 4.42464 8.72764L3.7547 11.7354L6.40825 10.1688C6.77334 9.95328 7.22674 9.95328 7.59183 10.1688L10.2454 11.7354L9.57544 8.72764C9.48327 8.31382 9.62338 7.8826 9.94119 7.60199L12.2511 5.56242L9.18352 5.27011C8.76146 5.2299 8.39465 4.96339 8.22598 4.57442Z" fill="#B3B7BC"/>
                                        </svg>
                                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" v-if="choosenItem.score >= 2">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M5.93208 1.28395C6.33735 0.349362 7.66273 0.349361 8.068 1.28395L9.29394 4.11107L12.3615 4.40338C13.3756 4.50001 13.7852 5.76052 13.0216 6.43476L10.7116 8.47433L11.3816 11.4821C11.603 12.4764 10.5308 13.2555 9.65359 12.7376L7.00004 11.171L4.34649 12.7376C3.46929 13.2555 2.39703 12.4764 2.6185 11.4821L3.28844 8.47433L0.978516 6.43476C0.214907 5.76052 0.62447 4.50001 1.63855 4.40338L4.70614 4.11108L5.93208 1.28395Z" fill="#F89828"/>
                                        </svg>
                                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" v-else>
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M5.93208 1.28419C6.33735 0.349606 7.66273 0.349605 8.068 1.28419L9.29394 4.11132L12.3615 4.40363C13.3756 4.50026 13.7852 5.76076 13.0216 6.435L10.7116 8.47457L11.3816 11.4824C11.603 12.4767 10.5308 13.2557 9.65359 12.7378L7.00004 11.1712L4.34649 12.7378C3.46929 13.2557 2.39703 12.4767 2.6185 11.4824L3.28844 8.47457L0.978516 6.435C0.214907 5.76076 0.62447 4.50026 1.63855 4.40363L4.70614 4.11132L5.93208 1.28419ZM8.22598 4.57442L7.00004 1.74729L5.7741 4.57442C5.60543 4.96339 5.23862 5.2299 4.81656 5.27011L1.74897 5.56242L4.05889 7.60199C4.3767 7.8826 4.51681 8.31382 4.42464 8.72764L3.7547 11.7354L6.40825 10.1688C6.77334 9.95328 7.22674 9.95328 7.59183 10.1688L10.2454 11.7354L9.57544 8.72764C9.48327 8.31382 9.62338 7.8826 9.94119 7.60199L12.2511 5.56242L9.18352 5.27011C8.76146 5.2299 8.39465 4.96339 8.22598 4.57442Z" fill="#B3B7BC"/>
                                        </svg>
                                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" v-if="choosenItem.score >= 3">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M5.93208 1.28395C6.33735 0.349362 7.66273 0.349361 8.068 1.28395L9.29394 4.11107L12.3615 4.40338C13.3756 4.50001 13.7852 5.76052 13.0216 6.43476L10.7116 8.47433L11.3816 11.4821C11.603 12.4764 10.5308 13.2555 9.65359 12.7376L7.00004 11.171L4.34649 12.7376C3.46929 13.2555 2.39703 12.4764 2.6185 11.4821L3.28844 8.47433L0.978516 6.43476C0.214907 5.76052 0.62447 4.50001 1.63855 4.40338L4.70614 4.11108L5.93208 1.28395Z" fill="#F89828"/>
                                        </svg>
                                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" v-else>
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M5.93208 1.28419C6.33735 0.349606 7.66273 0.349605 8.068 1.28419L9.29394 4.11132L12.3615 4.40363C13.3756 4.50026 13.7852 5.76076 13.0216 6.435L10.7116 8.47457L11.3816 11.4824C11.603 12.4767 10.5308 13.2557 9.65359 12.7378L7.00004 11.1712L4.34649 12.7378C3.46929 13.2557 2.39703 12.4767 2.6185 11.4824L3.28844 8.47457L0.978516 6.435C0.214907 5.76076 0.62447 4.50026 1.63855 4.40363L4.70614 4.11132L5.93208 1.28419ZM8.22598 4.57442L7.00004 1.74729L5.7741 4.57442C5.60543 4.96339 5.23862 5.2299 4.81656 5.27011L1.74897 5.56242L4.05889 7.60199C4.3767 7.8826 4.51681 8.31382 4.42464 8.72764L3.7547 11.7354L6.40825 10.1688C6.77334 9.95328 7.22674 9.95328 7.59183 10.1688L10.2454 11.7354L9.57544 8.72764C9.48327 8.31382 9.62338 7.8826 9.94119 7.60199L12.2511 5.56242L9.18352 5.27011C8.76146 5.2299 8.39465 4.96339 8.22598 4.57442Z" fill="#B3B7BC"/>
                                        </svg>
                                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" v-if="choosenItem.score >= 4">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M5.93208 1.28395C6.33735 0.349362 7.66273 0.349361 8.068 1.28395L9.29394 4.11107L12.3615 4.40338C13.3756 4.50001 13.7852 5.76052 13.0216 6.43476L10.7116 8.47433L11.3816 11.4821C11.603 12.4764 10.5308 13.2555 9.65359 12.7376L7.00004 11.171L4.34649 12.7376C3.46929 13.2555 2.39703 12.4764 2.6185 11.4821L3.28844 8.47433L0.978516 6.43476C0.214907 5.76052 0.62447 4.50001 1.63855 4.40338L4.70614 4.11108L5.93208 1.28395Z" fill="#F89828"/>
                                        </svg>
                                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" v-else>
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M5.93208 1.28419C6.33735 0.349606 7.66273 0.349605 8.068 1.28419L9.29394 4.11132L12.3615 4.40363C13.3756 4.50026 13.7852 5.76076 13.0216 6.435L10.7116 8.47457L11.3816 11.4824C11.603 12.4767 10.5308 13.2557 9.65359 12.7378L7.00004 11.1712L4.34649 12.7378C3.46929 13.2557 2.39703 12.4767 2.6185 11.4824L3.28844 8.47457L0.978516 6.435C0.214907 5.76076 0.62447 4.50026 1.63855 4.40363L4.70614 4.11132L5.93208 1.28419ZM8.22598 4.57442L7.00004 1.74729L5.7741 4.57442C5.60543 4.96339 5.23862 5.2299 4.81656 5.27011L1.74897 5.56242L4.05889 7.60199C4.3767 7.8826 4.51681 8.31382 4.42464 8.72764L3.7547 11.7354L6.40825 10.1688C6.77334 9.95328 7.22674 9.95328 7.59183 10.1688L10.2454 11.7354L9.57544 8.72764C9.48327 8.31382 9.62338 7.8826 9.94119 7.60199L12.2511 5.56242L9.18352 5.27011C8.76146 5.2299 8.39465 4.96339 8.22598 4.57442Z" fill="#B3B7BC"/>
                                        </svg>
                                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" v-if="choosenItem.score === 5">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M5.93208 1.28395C6.33735 0.349362 7.66273 0.349361 8.068 1.28395L9.29394 4.11107L12.3615 4.40338C13.3756 4.50001 13.7852 5.76052 13.0216 6.43476L10.7116 8.47433L11.3816 11.4821C11.603 12.4764 10.5308 13.2555 9.65359 12.7376L7.00004 11.171L4.34649 12.7376C3.46929 13.2555 2.39703 12.4764 2.6185 11.4821L3.28844 8.47433L0.978516 6.43476C0.214907 5.76052 0.62447 4.50001 1.63855 4.40338L4.70614 4.11108L5.93208 1.28395Z" fill="#F89828"/>
                                        </svg>
                                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" v-else>
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M5.93208 1.28419C6.33735 0.349606 7.66273 0.349605 8.068 1.28419L9.29394 4.11132L12.3615 4.40363C13.3756 4.50026 13.7852 5.76076 13.0216 6.435L10.7116 8.47457L11.3816 11.4824C11.603 12.4767 10.5308 13.2557 9.65359 12.7378L7.00004 11.1712L4.34649 12.7378C3.46929 13.2557 2.39703 12.4767 2.6185 11.4824L3.28844 8.47457L0.978516 6.435C0.214907 5.76076 0.62447 4.50026 1.63855 4.40363L4.70614 4.11132L5.93208 1.28419ZM8.22598 4.57442L7.00004 1.74729L5.7741 4.57442C5.60543 4.96339 5.23862 5.2299 4.81656 5.27011L1.74897 5.56242L4.05889 7.60199C4.3767 7.8826 4.51681 8.31382 4.42464 8.72764L3.7547 11.7354L6.40825 10.1688C6.77334 9.95328 7.22674 9.95328 7.59183 10.1688L10.2454 11.7354L9.57544 8.72764C9.48327 8.31382 9.62338 7.8826 9.94119 7.60199L12.2511 5.56242L9.18352 5.27011C8.76146 5.2299 8.39465 4.96339 8.22598 4.57442Z" fill="#B3B7BC"/>
                                        </svg>
                                    </div>
                                    12 reviews
                                </div>
                            </div>
                            <div class="product-main-section__info-block__main__color-picker" v-if="!!choosenItem.colors && choosenItem.colors.length > 0">
                                <span>Color</span>
                                <div class="product-main-section__info-block__main__color-picker__block">
                                    <ElementColorPicker v-for="item in choosenItem.colors"
                                        :color="item"
                                        :id="choosenItem.id"
                                    />
                                </div>
                            </div>
                            <div class="product-main-section__info-block__main__size-picker">
                                <ElementSelect
                                    placeholder="Please select"
                                    :options-array="choosenItem.sizes"
                                >Size
                                </ElementSelect>
                                <span>
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clip-path="url(#clip0_14_3171)">
                                    <path d="M15.2234 10.7393C15.2233 10.7393 15.2233 10.7393 15.2234 10.7393L9.46254 7.13899C9.3621 7.07622 9.24601 7.04291 9.12759 7.04291H8.63303V6.77427C9.61113 6.49812 10.33 5.59757 10.33 4.53229C10.33 3.24803 9.28524 2.20319 8.00098 2.20319C6.71668 2.20319 5.67188 3.24803 5.67188 4.53229C5.67188 4.88136 5.95485 5.16434 6.30393 5.16434C6.653 5.16434 6.93598 4.88136 6.93598 4.53229C6.93598 3.94505 7.41371 3.46729 8.00098 3.46729C8.58821 3.46729 9.06593 3.94505 9.06593 4.53229C9.06593 5.11952 8.58817 5.59728 8.00098 5.59728C7.6519 5.59728 7.36892 5.88026 7.36892 6.22933V7.04291H6.87437C6.75594 7.04291 6.63986 7.07622 6.53941 7.13899L0.778584 10.7393C0.291685 11.0437 0.000976562 11.5681 0.000976562 12.1424C0.000976562 13.0547 0.743189 13.7969 1.65548 13.7969H14.3464C15.2588 13.7969 16.001 13.0547 16.001 12.1424C16.001 11.5681 15.7103 11.0437 15.2234 10.7393ZM14.3464 12.5328H1.65548C1.44022 12.5328 1.26508 12.3576 1.26508 12.1424C1.26508 12.0069 1.33367 11.8831 1.44856 11.8113L7.0556 8.30702H8.94631L14.5534 11.8113C14.6683 11.8831 14.7369 12.0069 14.7369 12.1424C14.7369 12.3576 14.5617 12.5328 14.3464 12.5328Z" fill="#424551"/>
                                    </g>
                                    <defs>
                                    <clipPath id="clip0_14_3171">
                                    <rect width="16" height="16" fill="white" transform="translate(0.000976562)"/>
                                    </clipPath>
                                    </defs>
                                    </svg>
                                    Size chart
                                </span>
                            </div>
                            <div class="product-main-section__info-block__main__btns-block">
                                <ElementInput placeholder="12">
                                    <template #icon>
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M7.99966 0.666656L12.6185 6.66666H3.38086L7.99966 0.666656Z" fill="#1E212C"/>
                                        <path d="M7.99966 15.3333L3.38086 8.83332L12.6185 8.83332L7.99966 15.3333Z" fill="#1E212C"/>
                                        </svg>
                                    </template>
                                </ElementInput>
                                <ElementButton
                                    class="basket"
                                    color="primary"
                                    @click="handleBasket"
                                    :active="basketed"
                                    ><svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M2.5944 2.00518C2.52929 2.00028 2.43894 1.99984 2.2695 1.99984H1.16667C0.798477 1.99984 0.5 1.70136 0.5 1.33317C0.5 0.964984 0.798477 0.666507 1.16667 0.666507H2.2695C2.27578 0.666507 2.28207 0.666506 2.28835 0.666505C2.43146 0.666488 2.57315 0.66647 2.69458 0.67562C2.82971 0.685801 2.9867 0.709715 3.14911 0.782161C3.37767 0.884118 3.57293 1.04835 3.71254 1.25606C3.81174 1.40366 3.8622 1.55423 3.89538 1.68561C3.9252 1.80368 3.94946 1.94328 3.97397 2.08427C3.97504 2.09046 3.97612 2.09666 3.9772 2.10285L4.13605 3.01623L12.812 3.27305C13.152 3.2831 13.4458 3.29179 13.6878 3.31844C13.9436 3.34661 14.1971 3.39957 14.4404 3.52916C14.809 3.72552 15.1068 4.03233 15.2922 4.40655C15.4145 4.65352 15.46 4.90854 15.4805 5.16503C15.5 5.40768 15.5 5.70161 15.5 6.04174V6.09091C15.5 6.41056 15.5 6.68783 15.4821 6.91776C15.4631 7.1616 15.4213 7.40379 15.3095 7.6411C15.1395 8.00231 14.8653 8.30436 14.5221 8.50839C14.2967 8.64244 14.0597 8.70745 13.8188 8.74984C13.5917 8.7898 13.3157 8.8165 12.9975 8.84728L6.50826 9.47527C6.18213 9.50685 5.89956 9.5342 5.66381 9.53835C5.41403 9.54274 5.1636 9.52334 4.91219 9.43098C4.53514 9.29247 4.20854 9.04364 3.97491 8.71688C3.81913 8.499 3.73395 8.26271 3.67188 8.02072C3.6133 7.79233 3.56467 7.51264 3.50854 7.18984L2.66358 2.3313C2.63455 2.16437 2.61864 2.07542 2.60265 2.01212C2.60208 2.00987 2.60153 2.00773 2.601 2.00571C2.59891 2.00553 2.59672 2.00536 2.5944 2.00518ZM4.36923 4.35705L4.81796 6.93724C4.8795 7.29107 4.9195 7.51826 4.96341 7.68946C5.00529 7.85275 5.03842 7.91187 5.05953 7.94139C5.1374 8.05031 5.24627 8.13326 5.37195 8.17943C5.40602 8.19194 5.47181 8.20819 5.64036 8.20522C5.81708 8.20211 6.04674 8.18037 6.40421 8.14578L12.8451 7.52247C13.1941 7.4887 13.4178 7.46657 13.5877 7.43668C13.7495 7.40821 13.8099 7.38065 13.8407 7.36234C13.9551 7.29433 14.0465 7.19364 14.1032 7.07324C14.1184 7.04081 14.1401 6.97804 14.1528 6.81425C14.1662 6.6423 14.1667 6.41742 14.1667 6.06684C14.1667 5.69451 14.1662 5.4546 14.1515 5.27171C14.1374 5.09671 14.1136 5.0311 14.0974 4.99838C14.0356 4.87364 13.9363 4.77136 13.8135 4.70591C13.7812 4.68874 13.7164 4.66298 13.5418 4.64376C13.3595 4.62367 13.1197 4.61607 12.7475 4.60506L4.36923 4.35705Z" fill="white"/>
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M6.16667 11.6665C5.79848 11.6665 5.5 11.965 5.5 12.3332C5.5 12.7014 5.79848 12.9998 6.16667 12.9998C6.53486 12.9998 6.83333 12.7014 6.83333 12.3332C6.83333 11.965 6.53486 11.6665 6.16667 11.6665ZM4.16667 12.3332C4.16667 11.2286 5.0621 10.3332 6.16667 10.3332C7.27124 10.3332 8.16667 11.2286 8.16667 12.3332C8.16667 13.4377 7.27124 14.3332 6.16667 14.3332C5.0621 14.3332 4.16667 13.4377 4.16667 12.3332Z" fill="white"/>
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M12.5 11.6665C12.1318 11.6665 11.8333 11.965 11.8333 12.3332C11.8333 12.7014 12.1318 12.9998 12.5 12.9998C12.8682 12.9998 13.1667 12.7014 13.1667 12.3332C13.1667 11.965 12.8682 11.6665 12.5 11.6665ZM10.5 12.3332C10.5 11.2286 11.3954 10.3332 12.5 10.3332C13.6046 10.3332 14.5 11.2286 14.5 12.3332C14.5 13.4377 13.6046 14.3332 12.5 14.3332C11.3954 14.3332 10.5 13.4377 10.5 12.3332Z" fill="white"/>
                                    </svg>
                                    <template v-if="basketed">Remove from cart</template>
                                    <template v-else>Add to cart</template>
                                </ElementButton>
                                <ElementButton
                                    @click="handleWishlist"
                                    :active="wishlisted"
                                    ><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M8.00023 13.2718C4.93419 11.5255 3.22415 9.78986 2.39724 8.28391C1.5509 6.74259 1.62474 5.4444 2.09438 4.52304C3.0597 2.62922 5.80476 2.02363 7.47727 4.13895L8.00019 4.80032L8.52315 4.13899C10.1959 2.02358 12.9412 2.62926 13.9065 4.52304C14.3761 5.44439 14.4499 6.74256 13.6035 8.2839C12.7765 9.78985 11.0664 11.5255 8.00023 13.2718ZM8.00025 2.73756C5.64745 0.501824 2.17652 1.42585 0.906464 3.91754C0.209436 5.28501 0.199915 7.05243 1.22851 8.92566C2.24797 10.7823 4.28058 12.742 7.67773 14.6197L8.00022 14.7979L8.32271 14.6197C11.72 12.742 13.7527 10.7823 14.7722 8.92568C15.8009 7.05245 15.7914 5.28502 15.0944 3.91753C13.8243 1.4258 10.3533 0.501857 8.00025 2.73756Z" fill="#17696A"/>
                                    </svg>
                                    <template v-if="wishlisted">Unfavourite</template>
                                    <template v-else>Favourite</template>
                                </ElementButton>
                            </div>
                        </div>
                        <div class="product-main-section__info-block__accordions">
                            <ElementAccordion>
                                <template #header>
                                    Delivery
                                </template>
                                <template>
                                    Free standard shipping on orders over $35 before tax, plus free returns.
                                </template>
                            </ElementAccordion>
                            <hr>
                            <ElementAccordion>
                                <template #header>
                                    Return
                                </template>
                                <template>
                                    You have 60 days to return the item(s) using any of the following methods:
                                </template>
                            </ElementAccordion>
                            <hr>
                            <span>
                                Share:
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14.6354 0.837128L12.321 0.833313C9.72086 0.833313 8.04054 2.60422 8.04054 5.34517V7.42544H5.71352C5.51244 7.42544 5.34961 7.5929 5.34961 7.79946V10.8135C5.34961 11.0201 5.51263 11.1874 5.71352 11.1874H8.04054V18.7928C8.04054 18.9994 8.20337 19.1666 8.40445 19.1666H11.4405C11.6416 19.1666 11.8045 18.9992 11.8045 18.7928V11.1874H14.5253C14.7264 11.1874 14.8892 11.0201 14.8892 10.8135L14.8903 7.79946C14.8903 7.70028 14.8519 7.6053 14.7837 7.53511C14.7156 7.46492 14.6227 7.42544 14.5262 7.42544H11.8045V5.66197C11.8045 4.81437 12.0011 4.38409 13.0759 4.38409L14.635 4.38352C14.8359 4.38352 14.9987 4.21606 14.9987 4.00969V1.21095C14.9987 1.00478 14.8361 0.837509 14.6354 0.837128Z" fill="#787A80"/>
                                </svg>
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M18.75 4.81042C18.1059 5.0837 17.4148 5.26904 16.6887 5.35178C17.4301 4.92665 17.9976 4.25233 18.2666 3.45131C17.5711 3.845 16.8035 4.13088 15.9855 4.28585C15.3305 3.61676 14.3988 3.20001 13.3653 3.20001C11.3827 3.20001 9.77523 4.73923 9.77523 6.63656C9.77523 6.90565 9.80694 7.16847 9.86819 7.41979C6.88501 7.27632 4.23973 5.90778 2.46928 3.82825C2.1598 4.33505 1.98374 4.92558 1.98374 5.55595C1.98374 6.74859 2.618 7.80092 3.58033 8.41658C2.992 8.39775 2.43866 8.24278 1.95423 7.98519V8.02812C1.95423 9.69298 3.19213 11.0825 4.83353 11.3987C4.5328 11.4762 4.21568 11.5191 3.88761 11.5191C3.6558 11.5191 3.43161 11.4971 3.2118 11.4552C3.66889 12.8217 4.99429 13.8154 6.56463 13.8426C5.33657 14.7641 3.7881 15.3117 2.10624 15.3117C1.81646 15.3117 1.53103 15.2949 1.25 15.2646C2.83893 16.2415 4.7253 16.8111 6.75273 16.8111C13.3566 16.8111 16.9665 11.5736 16.9665 7.03132L16.9544 6.58631C17.6597 6.10462 18.2699 5.49941 18.75 4.81042Z" fill="#787A80"/>
                                </svg>
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10.2512 0.833313C5.19014 0.834077 2.5 4.05391 2.5 7.5648C2.5 9.19267 3.4162 11.2239 4.8832 11.8678C5.30168 12.055 5.24629 11.8266 5.60631 10.4592C5.63478 10.3454 5.62016 10.2468 5.52785 10.1407C3.43082 7.73209 5.1186 2.78049 9.95192 2.78049C16.9469 2.78049 15.6399 12.3919 11.1689 12.3919C10.0165 12.3919 9.15803 11.4935 9.42959 10.3821C9.75883 9.05822 10.4035 7.63508 10.4035 6.68096C10.4035 4.27621 6.7956 4.63295 6.7956 7.81918C6.7956 8.80384 7.14639 9.46843 7.14639 9.46843C7.14639 9.46843 5.98556 14.1252 5.77017 14.9952C5.40553 16.468 5.8194 18.8522 5.85556 19.0577C5.87787 19.1707 6.00556 19.2066 6.07711 19.1134C6.19173 18.9645 7.59488 16.9768 7.98797 15.5399C8.13106 15.0166 8.71801 12.893 8.71801 12.893C9.10495 13.5866 10.2204 14.1672 11.4089 14.1672C14.9445 14.1672 17.5 11.081 17.5 7.2516C17.4877 3.5803 14.3237 0.833313 10.2512 0.833313V0.833313Z" fill="#787A80"/>
                                </svg>
                            </span>
                        </div>
                        <div class="product-main-section__info-block__cards">
                            <div class="product-main-section__info-block__cards__item">
                                <img src="/images/payment-card/visa.png" alt="payment card">
                            </div>
                            <div class="product-main-section__info-block__cards__item">
                                <img src="/images/payment-card/master-card.png" alt="payment card">
                            </div>
                            <div class="product-main-section__info-block__cards__item">
                                <img src="/images/payment-card/pay-pal.png" alt="payment card">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="product-main-section__details-block" v-if="displayedVariant === 2">
                    <div class="product-main-section__details-block__text">
                        <span>Details</span>
                        <p>Id habitant tempor aliquam vulputate enim velit tincidunt sed. Urna sed facilisis nulla feugiat amet venenatis. Id suspendisse ut quis tellus aliquam pellentesque neque, semper donec.</p>
                        <ul>
                            <li>Brand: Jordan</li>
                            <li>Color: gray / red / yellow</li>
                            <li>Mid-cut design</li>
                            <li>Lace-up fastening </li>
                            <li>Rubber outsole pods for durability and traction</li>
                            <li>Moulded grooves in forefoot offer added flexibility</li>
                            <li>Padded cuff with inner nodes designed to offer comfort and support around the Achilles tendon</li>
                        </ul>
                        <hr>
                        <span>Fabric</span>
                        <ul>
                            <li>Upper: 50% real leather, 50% textile</li>
                            <li>Lining: 100% textile</li>
                            <li>Sole: 100% other materials</li>
                        </ul>
                        <hr>
                        <span>Care</span>
                        <ul>
                            <li>Hand wash only (30°)</li>
                            <li>No ironing</li>
                            <li>Do not use any bleach</li>
                            <li>Do not tumble dry</li>
                        </ul>
                    </div>
                    <CardProduct
                        :res="choosenItem"
                    />
                </div>
                <div class="product-main-section__reviews-block" v-if="displayedVariant === 3">
                    <div class="product-main-section__reviews-block__main">
                        <div class="product-main-section__reviews-block__info-block">
                            <div class="product-main-section__reviews-block__info-block__text">
                                <h2>12 reviews</h2>
                                <div class="product-main-section__reviews-block__info-block__text__stars">
                                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M5.93208 1.28395C6.33735 0.349362 7.66273 0.349361 8.068 1.28395L9.29394 4.11107L12.3615 4.40338C13.3756 4.50001 13.7852 5.76052 13.0216 6.43476L10.7116 8.47433L11.3816 11.4821C11.603 12.4764 10.5308 13.2555 9.65359 12.7376L7.00004 11.171L4.34649 12.7376C3.46929 13.2555 2.39703 12.4764 2.6185 11.4821L3.28844 8.47433L0.978516 6.43476C0.214907 5.76052 0.62447 4.50001 1.63855 4.40338L4.70614 4.11108L5.93208 1.28395Z" fill="#F89828"/>
                                    </svg>
                                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M5.93208 1.28395C6.33735 0.349362 7.66273 0.349361 8.068 1.28395L9.29394 4.11107L12.3615 4.40338C13.3756 4.50001 13.7852 5.76052 13.0216 6.43476L10.7116 8.47433L11.3816 11.4821C11.603 12.4764 10.5308 13.2555 9.65359 12.7376L7.00004 11.171L4.34649 12.7376C3.46929 13.2555 2.39703 12.4764 2.6185 11.4821L3.28844 8.47433L0.978516 6.43476C0.214907 5.76052 0.62447 4.50001 1.63855 4.40338L4.70614 4.11108L5.93208 1.28395Z" fill="#F89828"/>
                                    </svg>
                                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M5.93208 1.28395C6.33735 0.349362 7.66273 0.349361 8.068 1.28395L9.29394 4.11107L12.3615 4.40338C13.3756 4.50001 13.7852 5.76052 13.0216 6.43476L10.7116 8.47433L11.3816 11.4821C11.603 12.4764 10.5308 13.2555 9.65359 12.7376L7.00004 11.171L4.34649 12.7376C3.46929 13.2555 2.39703 12.4764 2.6185 11.4821L3.28844 8.47433L0.978516 6.43476C0.214907 5.76052 0.62447 4.50001 1.63855 4.40338L4.70614 4.11108L5.93208 1.28395Z" fill="#F89828"/>
                                    </svg>
                                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M5.93208 1.28395C6.33735 0.349362 7.66273 0.349361 8.068 1.28395L9.29394 4.11107L12.3615 4.40338C13.3756 4.50001 13.7852 5.76052 13.0216 6.43476L10.7116 8.47433L11.3816 11.4821C11.603 12.4764 10.5308 13.2555 9.65359 12.7376L7.00004 11.171L4.34649 12.7376C3.46929 13.2555 2.39703 12.4764 2.6185 11.4821L3.28844 8.47433L0.978516 6.43476C0.214907 5.76052 0.62447 4.50001 1.63855 4.40338L4.70614 4.11108L5.93208 1.28395Z" fill="#F89828"/>
                                    </svg>
                                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M5.93208 1.28395C6.33735 0.349362 7.66273 0.349361 8.068 1.28395L9.29394 4.11107L12.3615 4.40338C13.3756 4.50001 13.7852 5.76052 13.0216 6.43476L10.7116 8.47433L11.3816 11.4821C11.603 12.4764 10.5308 13.2555 9.65359 12.7376L7.00004 11.171L4.34649 12.7376C3.46929 13.2555 2.39703 12.4764 2.6185 11.4821L3.28844 8.47433L0.978516 6.43476C0.214907 5.76052 0.62447 4.50001 1.63855 4.40338L4.70614 4.11108L5.93208 1.28395Z" fill="#F89828"/>
                                    </svg>
                                </div>
                                <span>
                                    9 out of 12 (75%) <br>
                                    Customers recommended this product
                                </span>
                            </div>
                            <div class="product-main-section__reviews-block__info-block__image">
                                <img src="/images/breakdown.png">
                            </div>
                        </div>
                        <div class="product-main-section__reviews-block__btns-block">
                            <ElementButton
                                color="primary"
                            >Leave a review
                            </ElementButton>
                            <span>
                                Sort by
                                <ElementSelect
                                    placeholder="Please select"
                                    :options-array="choosenItem.sizes"
                                />
                            </span>
                        </div>
                        <div class="product-main-section__reviews-block__cards">
                            <CardReview type="other"/><hr>
                            <CardReview type="other"/><hr>
                            <CardReview type="other"/><hr>
                            <CardReview type="other"/>
                        </div>
                    </div>
                    <CardProduct
                        :res="choosenItem"
                    />
                </div>
            </div>
        </div>
    </section>
    <SectionProducts type="primary-bg" title="You may be interested in"/>
    <SectionProducts type="default" title="Recently viewed"/>
    <SectionForm/>
</template>

<style lang="scss">
    .product-main-section {
        &__container {
            @include df_fdc;
            gap: 1.25rem;
            padding-top: 2rem;
        }
        &__title-block {
            @include df_ac;
            justify-content: space-between;
            span {
                color: $gray-700;
                strong {
                    font-weight: 700;
                }
            }
        }
        &__btns-block {
            @include df_ac;
            gap: .75rem;
            padding-top: .75rem;
            &__btn {
                @include df_ac_jcc;
                @include strong_1;
                padding: .625rem 1.25rem;
                border-style: solid;
                border-width: 1px;
                border-color: rgba(255, 255, 255, 0);
                color: $gray-700;
                @include transition(border-color, color);
                border-radius: .25rem;
                cursor: pointer;
                input {
                    position: absolute;
                    scale: 0;
                    opacity: 0;
                }
                &:has(input:checked) {
                    border-color: $primary;
                    color: $primary;
                }
            }
        }
        hr {
            border: 0;
            border-top: 1px solid $gray-300;
        }
        &__main-block {
            display: flex;
            gap: 6.5rem;
            padding-top: .75rem;
        }
        &__images-block {
            @include df_fdc;
            gap: 1.25rem;
            width: 100%;
            &__main {
                position: relative;
                max-height: 37.5rem;
                max-width: 37.5rem;
                @include wh_100;
                border-radius: .25rem;
                overflow: hidden;
                img {
                    @include wh_100;
                    object-fit: cover;
                }
                &__btn {
                    z-index: 5;
                    position: absolute;
                    top: 50%;
                    transform: translateY(-50%);
                    @include df_ac_jcc;
                    background-color: $white;
                    height: 3rem;
                    aspect-ratio: 1;
                    border-radius: 50%;
                    @include transition(background-color);
                    svg {
                        max-width: 1.5rem;
                        max-height: 1.5rem;
                        @include wh_100;
                        path {
                            @include transition(fill);
                        }
                    }
                    &:hover {
                        svg path{
                            fill: $white;
                        }
                        background-color: $primary;
                    }
                    &.prev {
                        left: 2rem;
                    }
                    &.next {
                        right: 2rem;
                        svg {
                            transform: rotateY(180deg);
                        }
                    }
                }
            }
            &__list {
                @include df_ac;
                gap: 1.25rem;
                img {
                    max-height: 6.5rem;
                    height: 100%;
                    aspect-ratio: 1;
                    object-fit: cover;
                    border-radius: .25rem;
                    border: 1px solid $primary;
                }
            }
        }
        &__info-block {
            @include df_fdc;
            gap: 3rem;
            width: 100%;
            max-width: 32.75rem;
            &__main {
                @include df_fdc;
                gap: 1.5rem;
                &__price-block {
                    display: flex;
                    justify-content: space-between;
                    &__price {
                        @include df_ac;
                        gap: .75rem;
                        @include heading_4;
                        color: $gray-900;
                        span {
                            @include text_1;
                            color: $gray-700;
                            font-size: 1.125rem;
                            text-decoration: line-through;
                        }
                        &__sale {
                            color: $danger;
                        }
                        &__sale-tag {
                            @include df_ac_jcc;
                            @include strong_1;
                            color: $white;
                            background-color: $danger;
                            border-radius: .25rem;
                            width: 3.25rem;
                            height: 1.75rem;
                        }
                        &__main {
                            font-size: 1.5rem !important;
                            font-weight: 700 !important;
                            line-height: 130% !important;
                            text-decoration: none !important;
                            color: $gray-900 !important;
                        }
                    }
                    &__reviews-block {
                        @include df_fdc;
                        gap: .5rem;
                        @include text_2;
                        color: $gray-700;
                        &__rating {
                            @include df_ac;
                            gap: .125rem;
                            svg {
                                max-width: .875rem;
                                max-height: .875rem;
                                @include wh_100;
                            }
                        }
                    }
                }
                &__color-picker {
                    span {
                        @include text_2;
                    }
                }
                &__size-picker {
                    @include df_ac;
                    justify-content: space-between;
                    .select {
                        max-width: 21.75rem;
                        width: 100%;
                    }
                    .field {
                        &__title {
                            @include text_2;
                        }
                    }
                    span {
                        cursor: pointer;
                        @include df_ac;
                        gap: .5rem;
                        @include text_2;
                        svg {
                            max-width: 1rem;
                            max-height: 1rem;
                            @include wh_100;
                        }
                    }
                }
                &__btns-block {
                    @include df_ac;
                    gap: 1.5rem;
                    margin-top: .5rem;
                    .field {
                        max-width: 5.5rem;
                    }
                    .basket {
                        max-width: 15.25rem;
                        width: 100%;
                    }
                }
            }
            &__accordions {
                @include df_fdc;
                gap: 1.25rem;
                hr {
                    border: 0;
                    border-top: 1px solid $gray-300;
                }
                span {
                    @include df_ac;
                    gap: 1rem;
                    @include strong_1;
                    color: $gray-900;
                }
            }
            &__cards {
                @include df_ac;
                gap: 1.5rem;
                &__item {
                    max-width: 7.5rem;
                    max-height: 4rem;
                    @include wh_100;
                    img {
                        @include wh_100;
                    }
                }
            }
        }
        &__details-block {
            display: flex;
            gap: 6.5rem;
            &__text {
                min-width: 46rem;
                width: 100%;
                @include df_fdc;
                span {
                    @include strong_1;
                    font-size: 1.25rem;
                    color: $gray-900;
                    padding-bottom: 1rem;
                }
                p {
                    padding-bottom: 1rem;
                }
                ul {
                    list-style: inside;
                    padding-bottom: 1.5rem;
                    li {
                        padding-bottom: .25rem;
                    }
                }
                hr {
                    padding-bottom: 1.5rem;
                }
            }
            .product-card {
                width: 100%;
            }
        }
        &__reviews-block {
            display: flex;
            gap: 6.5rem;
            &__main {
                min-width: 46rem;
                width: 100%;
                @include df_fdc;
                gap: 3.75rem;
            }
            &__info-block {
                display: flex;
                gap: 5rem;
                &__text {
                    @include df_fdc;
                    gap: 1.25rem;
                    max-width: 14.6875rem;
                    width: 100%;
                    &__stars {
                        @include df_ac;
                        gap: .125rem;
                        svg {
                            max-width: .875rem;
                            max-height: .875rem;
                            @include wh_100;
                        }
                    }
                    h2 {
                        @include heading_2;
                        color: $gray-900
                    }
                    span {
                        @include text_2;
                        color: $gray-700;
                    }
                }
            }
            &__btns-block {
                @include df_ac;
                justify-content: space-between;
                padding-top: 1.25rem;
                .select {
                    max-width: 10.625rem;
                }
                span {
                    @include df_ac;
                    gap: .75rem;
                    @include strong_1;
                }
            }
            &__cards {
                @include df_fdc;
                gap: 2rem;
                hr {
                    border: 0;
                    border-top: 1px solid $gray-300;
                }
            }
            .product-card {
                width: 100%;
            }
        }
    }
</style>