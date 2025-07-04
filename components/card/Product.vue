<script setup lang="ts">
    const props = defineProps<{
        res: object,
    }>();

    const salesPrice = ref();
    const getSalesPrice =()=> {
        if(props.res.sale) {
            salesPrice.value = props.res.price - (props.res.price / 100 * props.res.sale);
        };
    };

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
            const product = wishlist.value?.find(item=>item.product_id === props.res.id);
            wishlist.value?.splice(wishlist.value.indexOf(product), 1);
            wishlisted.value = false;
        } else {
            wishlist.value?.push({product_id: props.res.id});
            wishlisted.value = true;
        };

        wishlist.value = [...wishlist.value];
    };

    const basket = useCookie(
        'basket',
        {
            default: () => [],
            watch: 'shallow'
        }
    );

    const basketed = ref(false);

    const handleBasket =()=> {
        if(basketed.value) {
            const product = basket.value?.find(item=>item.product_id === props.res.id);
            basket.value?.splice(basket.value.indexOf(product), 1);
            basketed.value = false;
        } else {
            basket.value?.push({product_id: props.res.id});
            basketed.value = true;
        };

        basket.value = [...basket.value];
    };

    onMounted(()=>{
        getSalesPrice();
        wishlist.value?.map(item=>{
            if(item.product_id === props.res.id) wishlisted.value = true;
        });
        basket.value?.map(item=>{
            if(item.product_id === props.res.id) basketed.value = true;
        });
    }); 
</script>

<template>
    
    <div class="product-card">
        <div class="product-card__image-block">
            <div class="product-card__image-block__sale-tag" v-if="res.sale">
                -{{ res.sale }}%
            </div>
            <div class="product-card__image-block__rating-block" v-if="!!res.score" :data-rated="res.score">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" v-if="res.score >= 1">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M5.93208 1.28395C6.33735 0.349362 7.66273 0.349361 8.068 1.28395L9.29394 4.11107L12.3615 4.40338C13.3756 4.50001 13.7852 5.76052 13.0216 6.43476L10.7116 8.47433L11.3816 11.4821C11.603 12.4764 10.5308 13.2555 9.65359 12.7376L7.00004 11.171L4.34649 12.7376C3.46929 13.2555 2.39703 12.4764 2.6185 11.4821L3.28844 8.47433L0.978516 6.43476C0.214907 5.76052 0.62447 4.50001 1.63855 4.40338L4.70614 4.11108L5.93208 1.28395Z" fill="#F89828"/>
                </svg>
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" v-else>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M5.93208 1.28419C6.33735 0.349606 7.66273 0.349605 8.068 1.28419L9.29394 4.11132L12.3615 4.40363C13.3756 4.50026 13.7852 5.76076 13.0216 6.435L10.7116 8.47457L11.3816 11.4824C11.603 12.4767 10.5308 13.2557 9.65359 12.7378L7.00004 11.1712L4.34649 12.7378C3.46929 13.2557 2.39703 12.4767 2.6185 11.4824L3.28844 8.47457L0.978516 6.435C0.214907 5.76076 0.62447 4.50026 1.63855 4.40363L4.70614 4.11132L5.93208 1.28419ZM8.22598 4.57442L7.00004 1.74729L5.7741 4.57442C5.60543 4.96339 5.23862 5.2299 4.81656 5.27011L1.74897 5.56242L4.05889 7.60199C4.3767 7.8826 4.51681 8.31382 4.42464 8.72764L3.7547 11.7354L6.40825 10.1688C6.77334 9.95328 7.22674 9.95328 7.59183 10.1688L10.2454 11.7354L9.57544 8.72764C9.48327 8.31382 9.62338 7.8826 9.94119 7.60199L12.2511 5.56242L9.18352 5.27011C8.76146 5.2299 8.39465 4.96339 8.22598 4.57442Z" fill="#B3B7BC"/>
                </svg>
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" v-if="res.score >= 2">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M5.93208 1.28395C6.33735 0.349362 7.66273 0.349361 8.068 1.28395L9.29394 4.11107L12.3615 4.40338C13.3756 4.50001 13.7852 5.76052 13.0216 6.43476L10.7116 8.47433L11.3816 11.4821C11.603 12.4764 10.5308 13.2555 9.65359 12.7376L7.00004 11.171L4.34649 12.7376C3.46929 13.2555 2.39703 12.4764 2.6185 11.4821L3.28844 8.47433L0.978516 6.43476C0.214907 5.76052 0.62447 4.50001 1.63855 4.40338L4.70614 4.11108L5.93208 1.28395Z" fill="#F89828"/>
                </svg>
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" v-else>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M5.93208 1.28419C6.33735 0.349606 7.66273 0.349605 8.068 1.28419L9.29394 4.11132L12.3615 4.40363C13.3756 4.50026 13.7852 5.76076 13.0216 6.435L10.7116 8.47457L11.3816 11.4824C11.603 12.4767 10.5308 13.2557 9.65359 12.7378L7.00004 11.1712L4.34649 12.7378C3.46929 13.2557 2.39703 12.4767 2.6185 11.4824L3.28844 8.47457L0.978516 6.435C0.214907 5.76076 0.62447 4.50026 1.63855 4.40363L4.70614 4.11132L5.93208 1.28419ZM8.22598 4.57442L7.00004 1.74729L5.7741 4.57442C5.60543 4.96339 5.23862 5.2299 4.81656 5.27011L1.74897 5.56242L4.05889 7.60199C4.3767 7.8826 4.51681 8.31382 4.42464 8.72764L3.7547 11.7354L6.40825 10.1688C6.77334 9.95328 7.22674 9.95328 7.59183 10.1688L10.2454 11.7354L9.57544 8.72764C9.48327 8.31382 9.62338 7.8826 9.94119 7.60199L12.2511 5.56242L9.18352 5.27011C8.76146 5.2299 8.39465 4.96339 8.22598 4.57442Z" fill="#B3B7BC"/>
                </svg>
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" v-if="res.score >= 3">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M5.93208 1.28395C6.33735 0.349362 7.66273 0.349361 8.068 1.28395L9.29394 4.11107L12.3615 4.40338C13.3756 4.50001 13.7852 5.76052 13.0216 6.43476L10.7116 8.47433L11.3816 11.4821C11.603 12.4764 10.5308 13.2555 9.65359 12.7376L7.00004 11.171L4.34649 12.7376C3.46929 13.2555 2.39703 12.4764 2.6185 11.4821L3.28844 8.47433L0.978516 6.43476C0.214907 5.76052 0.62447 4.50001 1.63855 4.40338L4.70614 4.11108L5.93208 1.28395Z" fill="#F89828"/>
                </svg>
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" v-else>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M5.93208 1.28419C6.33735 0.349606 7.66273 0.349605 8.068 1.28419L9.29394 4.11132L12.3615 4.40363C13.3756 4.50026 13.7852 5.76076 13.0216 6.435L10.7116 8.47457L11.3816 11.4824C11.603 12.4767 10.5308 13.2557 9.65359 12.7378L7.00004 11.1712L4.34649 12.7378C3.46929 13.2557 2.39703 12.4767 2.6185 11.4824L3.28844 8.47457L0.978516 6.435C0.214907 5.76076 0.62447 4.50026 1.63855 4.40363L4.70614 4.11132L5.93208 1.28419ZM8.22598 4.57442L7.00004 1.74729L5.7741 4.57442C5.60543 4.96339 5.23862 5.2299 4.81656 5.27011L1.74897 5.56242L4.05889 7.60199C4.3767 7.8826 4.51681 8.31382 4.42464 8.72764L3.7547 11.7354L6.40825 10.1688C6.77334 9.95328 7.22674 9.95328 7.59183 10.1688L10.2454 11.7354L9.57544 8.72764C9.48327 8.31382 9.62338 7.8826 9.94119 7.60199L12.2511 5.56242L9.18352 5.27011C8.76146 5.2299 8.39465 4.96339 8.22598 4.57442Z" fill="#B3B7BC"/>
                </svg>
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" v-if="res.score >= 4">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M5.93208 1.28395C6.33735 0.349362 7.66273 0.349361 8.068 1.28395L9.29394 4.11107L12.3615 4.40338C13.3756 4.50001 13.7852 5.76052 13.0216 6.43476L10.7116 8.47433L11.3816 11.4821C11.603 12.4764 10.5308 13.2555 9.65359 12.7376L7.00004 11.171L4.34649 12.7376C3.46929 13.2555 2.39703 12.4764 2.6185 11.4821L3.28844 8.47433L0.978516 6.43476C0.214907 5.76052 0.62447 4.50001 1.63855 4.40338L4.70614 4.11108L5.93208 1.28395Z" fill="#F89828"/>
                </svg>
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" v-else>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M5.93208 1.28419C6.33735 0.349606 7.66273 0.349605 8.068 1.28419L9.29394 4.11132L12.3615 4.40363C13.3756 4.50026 13.7852 5.76076 13.0216 6.435L10.7116 8.47457L11.3816 11.4824C11.603 12.4767 10.5308 13.2557 9.65359 12.7378L7.00004 11.1712L4.34649 12.7378C3.46929 13.2557 2.39703 12.4767 2.6185 11.4824L3.28844 8.47457L0.978516 6.435C0.214907 5.76076 0.62447 4.50026 1.63855 4.40363L4.70614 4.11132L5.93208 1.28419ZM8.22598 4.57442L7.00004 1.74729L5.7741 4.57442C5.60543 4.96339 5.23862 5.2299 4.81656 5.27011L1.74897 5.56242L4.05889 7.60199C4.3767 7.8826 4.51681 8.31382 4.42464 8.72764L3.7547 11.7354L6.40825 10.1688C6.77334 9.95328 7.22674 9.95328 7.59183 10.1688L10.2454 11.7354L9.57544 8.72764C9.48327 8.31382 9.62338 7.8826 9.94119 7.60199L12.2511 5.56242L9.18352 5.27011C8.76146 5.2299 8.39465 4.96339 8.22598 4.57442Z" fill="#B3B7BC"/>
                </svg>
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" v-if="res.score === 5">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M5.93208 1.28395C6.33735 0.349362 7.66273 0.349361 8.068 1.28395L9.29394 4.11107L12.3615 4.40338C13.3756 4.50001 13.7852 5.76052 13.0216 6.43476L10.7116 8.47433L11.3816 11.4821C11.603 12.4764 10.5308 13.2555 9.65359 12.7376L7.00004 11.171L4.34649 12.7376C3.46929 13.2555 2.39703 12.4764 2.6185 11.4821L3.28844 8.47433L0.978516 6.43476C0.214907 5.76052 0.62447 4.50001 1.63855 4.40338L4.70614 4.11108L5.93208 1.28395Z" fill="#F89828"/>
                </svg>
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" v-else>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M5.93208 1.28419C6.33735 0.349606 7.66273 0.349605 8.068 1.28419L9.29394 4.11132L12.3615 4.40363C13.3756 4.50026 13.7852 5.76076 13.0216 6.435L10.7116 8.47457L11.3816 11.4824C11.603 12.4767 10.5308 13.2557 9.65359 12.7378L7.00004 11.1712L4.34649 12.7378C3.46929 13.2557 2.39703 12.4767 2.6185 11.4824L3.28844 8.47457L0.978516 6.435C0.214907 5.76076 0.62447 4.50026 1.63855 4.40363L4.70614 4.11132L5.93208 1.28419ZM8.22598 4.57442L7.00004 1.74729L5.7741 4.57442C5.60543 4.96339 5.23862 5.2299 4.81656 5.27011L1.74897 5.56242L4.05889 7.60199C4.3767 7.8826 4.51681 8.31382 4.42464 8.72764L3.7547 11.7354L6.40825 10.1688C6.77334 9.95328 7.22674 9.95328 7.59183 10.1688L10.2454 11.7354L9.57544 8.72764C9.48327 8.31382 9.62338 7.8826 9.94119 7.60199L12.2511 5.56242L9.18352 5.27011C8.76146 5.2299 8.39465 4.96339 8.22598 4.57442Z" fill="#B3B7BC"/>
                </svg>
            </div>
            <button class="product-card__image-block__fav-btn" @click="handleWishlist" :data-active="wishlisted">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M7.99956 13.272C4.93352 11.5257 3.22348 9.79004 2.39657 8.2841C1.55023 6.74277 1.62407 5.44459 2.09371 4.52322C3.05902 2.6294 5.80409 2.02382 7.4766 4.13914L7.99952 4.8005L8.52248 4.13917C10.1953 2.02376 12.9405 2.62945 13.9058 4.52322C14.3754 5.44457 14.4492 6.74275 13.6028 8.28408C12.7759 9.79003 11.0657 11.5257 7.99956 13.272ZM7.99958 2.73775C5.64678 0.502007 2.17585 1.42603 0.905793 3.91772C0.208765 5.28519 0.199244 7.05261 1.22784 8.92585C2.2473 10.7825 4.27991 12.7422 7.67706 14.6199L7.99955 14.7981L8.32204 14.6199C11.7193 12.7422 13.752 10.7825 14.7716 8.92586C15.8002 7.05263 15.7907 5.2852 15.0937 3.91772C13.8236 1.42599 10.3526 0.502041 7.99958 2.73775Z" fill="#787A80"/>
                </svg>
            </button>
            <NuxtLink :to="`/catalog/item/${res.id}/`">
                <img :src="res.image" alt="product image">
            </NuxtLink>
        </div>
        <div class="product-card__info-block">
            <div class="product-card__info-block__title">
                {{ res.title }}
            </div>
            <div class="product-card__info-block__price" v-if="res.sale">
                <div class="product-card__info-block__price__sale">
                    ${{ salesPrice }}
                </div>
                <span>${{ res.price }}</span>
            </div>
            <div class="product-card__info-block__price" v-else>
                ${{ res.price }}
            </div>
            <div class="product-card__info-block__add-block">
                <div class="product-card__info-block__add-block__choose-block">
                    <div class="product-card__info-block__add-block__sizes" v-if="!!res.sizes && res.sizes.length > 0"> 
                        <label :for="`get-size-product-${res.id}-${item}`" 
                            class="product-card__info-block__add-block__sizes__item" 
                            v-for="item in res.sizes">
                            {{ item }}
                            <input type="radio" 
                                :name="`get-size-product-${res.id}`" 
                                :id="`get-size-product-${res.id}-${item}`"
                            >
                        </label>
                    </div>
                    <div class="product-card__info-block__add-block__colors" v-if="!!res.colors && res.colors.length > 0">
                        <ElementColorPicker v-for="item in res.colors" 
                            :color="item"
                            :id="res.id"
                        />
                    </div>
                </div>
                <ElementButton
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
            </div>
        </div>
    </div>

</template>

<style lang="scss">
    .product-card {
        &__image-block {
            position: relative;
            aspect-ratio: 57 / 64;
            border-radius: .25rem .25rem 0 0;
            overflow: hidden;
            img {
                @include wh_100;
                object-fit: cover;
                aspect-ratio: 57 / 64;
            }
            &__sale-tag {
                @include df_ac_jcc;
                position: absolute;
                left: 1rem;
                top: 1rem;
                @include strong_1;
                color: $white;
                background-color: $danger;
                border-radius: .25rem;
                width: 3.25rem;
                height: 1.75rem
            }
            &__rating-block {
                @include df_ac;
                gap: .125rem;
                position: absolute;
                top: 1rem;
                right: 1rem;
                svg {
                    max-width: .875rem;
                    max-height: .875rem;
                    @include wh_100;
                }
            }
            &__fav-btn {
                position: absolute;
                bottom: 1rem;
                right: 1rem;
                @include df_ac_jcc;
                width: 2rem;
                height: 2rem;
                background-color: $white;
                border-radius: 50%;
                @include transition(background-color);
                svg {
                    max-width: 1rem;
                    max-height: 1rem;
                    @include wh_100;
                    path {
                        @include transition(fill);
                    }
                }
                &:hover {
                    background-color: $gray-400;
                }
                &[data-active="true"] {
                    background-color: $primary;
                    svg path {
                        fill: $white;
                    }
                }
            }
        }
        &__info-block {
            position: relative;
            @include df_fdc;
            padding: 1rem;
            border-radius: 0 0 .25rem .25rem;
            &__title {
                @include text_1;
                font-size: 1.125rem;
                padding-bottom: .5rem;
            }
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
            }
            &__add-block {
                @include df_fdc;
                gap: 1.25rem;
                opacity: 0;
                height: 0;
                @include transition(opacity);
                &__choose-block {
                    @include df_ac;
                    justify-content: space-between;
                    padding-top: 1.25rem;
                }
                &__sizes {
                    @include df_ac;
                    gap: .5rem;
                    &__item {
                        @include df_ac_jcc;
                        height: 1.5rem;
                        aspect-ratio: 1;
                        @include text_3;
                        border-width: 1px;
                        border-style: solid;
                        border-color: $gray-400;
                        @include transition(color, border-color);
                        border-radius: .25rem;
                        cursor: pointer;
                        input {
                            position: absolute;
                            opacity: 0;
                            scale: 0;
                        }
                        &:has(input:checked) {
                            border-color: $primary;
                        }
                    }
                }
                &__colors {
                    @include df_ac;
                    gap: .5rem;
                }
                .button {
                    width: 100%;
                }
            }
        }

        &:hover {
            .product-card {
                &__info-block { 
                    width: 100%;
                    background-color: $white;
                    box-shadow: 0 .25rem .25rem #1E212C0D;
                    &__add-block {
                        opacity: 1;
                        height: 100%;
                        height: fit-content;
                    }
                }
            }
        }
    }
</style>