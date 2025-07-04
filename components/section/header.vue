<script setup lang="ts">
    const { categoriesList } = useCategories();
    const { productsList } = useProducts();

    const wishlist = useCookie(
        'wishlist',
        {
            default: () => [],
            watch: 'shallow'
        }
    );
    const basket = useCookie(
        'basket',
        {
            default: () => [],
            watch: 'shallow'
        }
    );

    const menuOpened = ref(false);

    const basketList = ref([]);
    const totalPrice = ref();

    basket.value.map(item=>{
        let total = 0;
        basketList.value.push(productsList.value.find(product=> product.id === item.product_id));
        basketList.value.map(item=>{
            total += item.price;
        });
        totalPrice.value = total;
    });

    const deleteFromBasket =(id: number)=>{
        const product = basket.value?.find(item=>item.product_id === id);
        basket.value?.splice(basket.value.indexOf(product), 1);

        basket.value = [...basket.value];
    };

    const addInWishlist =(id: number)=>{
        wishlist.value?.push({product_id: id});

        wishlist.value = [...wishlist.value];
    };

    const basketOpened = ref(false);
</script>

<template>
    <header class="header">
        <div class="header__top">
            <div class="header__top__container container_small">
                <span class="header__top__availability">
                    Available 24/7 at <strong>(405) 555-0128</strong>
                </span>
                <div class="header__top__links">
                    <ElementLink
                        size="small"
                        color="inverse"
                    >Delivery & returns
                    </ElementLink>
                    <ElementLink
                        size="small"
                        color="inverse"
                    >Track order
                    </ElementLink>
                    <ElementLink
                        size="small"
                        color="inverse"
                        link="/blog/"
                    >Blog
                    </ElementLink>
                    <ElementLink
                        size="small"
                        color="inverse"
                    >Contacts
                    </ElementLink>
                </div>
                <div class="header__top__btns">
                    <span class="header__top__btns__link">
                        <img src="/images/icons/flag-usa.svg" alt="flag">
                        <ElementLink
                            size="small"
                            color="inverse"
                        >Eng / USD
                        </ElementLink>
                    </span>
                    <span class="header__top__btns__link">
                        <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M8.00006 2.66667C6.71139 2.66667 5.66673 3.71134 5.66673 5C5.66673 6.28866 6.71139 7.33333 8.00006 7.33333C9.28872 7.33333 10.3334 6.28866 10.3334 5C10.3334 3.71134 9.28872 2.66667 8.00006 2.66667ZM4.33339 5C4.33339 2.97496 5.97501 1.33333 8.00006 1.33333C10.0251 1.33333 11.6667 2.97496 11.6667 5C11.6667 7.02504 10.0251 8.66667 8.00006 8.66667C5.97501 8.66667 4.33339 7.02504 4.33339 5Z" fill="white"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M4.06943 10.6667C3.60722 10.6667 3.24595 10.8917 3.0993 11.2151C2.89632 11.6626 2.71252 12.1955 2.66915 12.7008C2.64976 12.9267 2.74395 13.0932 2.87374 13.1738C3.55985 13.6 5.14965 14.3333 8.00006 14.3333C10.8505 14.3333 12.4403 13.6 13.1264 13.1738C13.2562 13.0932 13.3504 12.9267 13.331 12.7008C13.2876 12.1955 13.1038 11.6626 12.9008 11.2151C12.7542 10.8917 12.3929 10.6667 11.9307 10.6667H4.06943ZM1.88501 10.6644C2.29031 9.77071 3.19533 9.33333 4.06943 9.33333H11.9307C12.8048 9.33333 13.7098 9.77071 14.1151 10.6644C14.3479 11.1777 14.5977 11.8677 14.6594 12.5868C14.7156 13.2416 14.4435 13.9253 13.83 14.3064C12.9276 14.8669 11.0931 15.6667 8.00006 15.6667C4.90699 15.6667 3.07253 14.8669 2.17017 14.3064C1.55666 13.9253 1.2845 13.2416 1.3407 12.5868C1.40242 11.8677 1.65222 11.1777 1.88501 10.6644Z" fill="white"/>
                        </svg>
                        <ElementLink
                            size="small"
                            color="inverse"
                            link="/account/"
                        >Log in / Register
                        </ElementLink>
                    </span>
                </div>
            </div>
        </div>
        <div class="header__main">
            <div class="header__main__container container_small">
                <div class="header__main__nav-block">
                    <NuxtLink to="/" class="header__main__nav-block__logo">
                        <img src="/images/logo.png" alt="logo">
                    </NuxtLink>
                    <div class="header__main__nav-block__links">
                        <ElementLink
                            @click="menuOpened = true"
                        >Women
                        </ElementLink>
                        <ElementLink
                            @click="menuOpened = true"
                        >Men
                        </ElementLink>
                        <ElementLink
                            @click="menuOpened = true"
                        >Girls
                        </ElementLink>
                        <ElementLink
                            @click="menuOpened = true"
                        >Boys
                        </ElementLink>
                        <ElementLink
                            @click="menuOpened = true"
                            color="danger"
                        >Sale
                        </ElementLink>
                    </div>
                </div>
                <div class="header__main__search-block">
                    <ElementInput 
                        id="search-header-input"
                        placeholder="Search for products..."
                    >
                    <template #icon>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_79_3012)">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M7.25004 2.16667C4.44259 2.16667 2.16671 4.44256 2.16671 7.25C2.16671 10.0575 4.44259 12.3333 7.25004 12.3333C8.65263 12.3333 9.92148 11.7662 10.8419 10.8471C11.7641 9.92621 12.3334 8.65523 12.3334 7.25C12.3334 4.44256 10.0575 2.16667 7.25004 2.16667ZM0.833374 7.25C0.833374 3.70618 3.70621 0.833336 7.25004 0.833336C10.7939 0.833336 13.6667 3.70618 13.6667 7.25C13.6667 8.78281 13.1286 10.1909 12.232 11.2942L14.971 14.0282C15.2316 14.2883 15.232 14.7104 14.9719 14.971C14.7118 15.2316 14.2897 15.232 14.0291 14.9718L11.2887 12.2365C10.1862 13.1304 8.78027 13.6667 7.25004 13.6667C3.70621 13.6667 0.833374 10.7938 0.833374 7.25Z" fill="#424551"/>
                        </g>
                        <defs>
                        <clipPath id="clip0_79_3012">
                        <rect width="16" height="16" fill="white"/>
                        </clipPath>
                        </defs>
                        </svg>
                    </template>
                    </ElementInput>
                    <div class="header__main__btns-block">
                        <NuxtLink to="/account/wishlist/" class="header__main__btns-block__btn">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M9.99943 16.5898C6.16688 14.407 4.02934 12.2374 2.9957 10.355C1.93777 8.42834 2.03007 6.80561 2.61712 5.65391C3.82376 3.28663 7.2551 2.52965 9.34574 5.1738L9.99938 6.00051L10.6531 5.17384C12.7441 2.52958 16.1756 3.28669 17.3822 5.6539C17.9693 6.80559 18.0615 8.42831 17.0035 10.355C15.9698 12.2374 13.8322 14.407 9.99943 16.5898ZM9.99946 3.42206C7.05845 0.627386 2.7198 1.78242 1.13223 4.89703C0.260941 6.60637 0.249039 8.81564 1.53478 11.1572C2.80911 13.478 5.34987 15.9276 9.59631 18.2747L9.99942 18.4975L10.4025 18.2747C14.6491 15.9276 17.19 13.478 18.4644 11.1572C19.7503 8.81566 19.7384 6.60638 18.8671 4.89703C17.2795 1.78236 12.9407 0.627429 9.99946 3.42206Z" fill="#424551"/>
                            </svg>
                            <span>{{ wishlist.length }}</span>
                        </NuxtLink>
                        <hr>
                        <button @click="basketOpened = true" class="header__main__btns-block__btn">
                            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M2.8798 2.75735C2.79028 2.7506 2.66604 2.75 2.43306 2.75H0.916667C0.410406 2.75 0 2.3396 0 1.83333C0 1.32707 0.410406 0.916668 0.916667 0.916668H2.43306C2.4417 0.916668 2.45034 0.916667 2.45898 0.916666C2.65575 0.916642 2.85058 0.916618 3.01755 0.929198C3.20335 0.943198 3.41921 0.97608 3.64252 1.07569C3.9568 1.21588 4.22528 1.4417 4.41724 1.72731C4.55364 1.93025 4.62303 2.13729 4.66865 2.31794C4.70966 2.48028 4.74301 2.67223 4.77671 2.8661C4.77818 2.87461 4.77966 2.88312 4.78115 2.89164L4.99956 4.14754L16.9291 4.50066C17.3965 4.51449 17.8005 4.52643 18.1332 4.56307C18.4849 4.6018 18.8336 4.67463 19.168 4.85281C19.6748 5.12281 20.0844 5.54467 20.3393 6.05923C20.5075 6.39882 20.5699 6.74947 20.5982 7.10213C20.625 7.43578 20.625 7.83994 20.625 8.30762V8.37522C20.625 8.81474 20.625 9.19599 20.6004 9.51214C20.5743 9.84742 20.5167 10.1804 20.3631 10.5067C20.1293 11.0034 19.7523 11.4187 19.2804 11.6993C18.9704 11.8836 18.6445 11.973 18.3133 12.0312C18.001 12.0862 17.6216 12.1229 17.1841 12.1652L8.26136 13.0287C7.81293 13.0721 7.4244 13.1097 7.10024 13.1155C6.75679 13.1215 6.41246 13.0948 6.06676 12.9678C5.54832 12.7774 5.09924 12.4352 4.778 11.9859C4.5638 11.6863 4.44668 11.3614 4.36134 11.0287C4.28079 10.7147 4.21392 10.3301 4.13675 9.88626L2.97492 3.20576C2.935 2.97623 2.91312 2.85393 2.89114 2.76688C2.89036 2.76379 2.8896 2.76086 2.88887 2.75807C2.88601 2.75783 2.88298 2.75759 2.8798 2.75735ZM5.32019 5.99117L5.93719 9.53892C6.02181 10.0254 6.07681 10.3378 6.13719 10.5732C6.19478 10.7978 6.24033 10.879 6.26935 10.9196C6.37643 11.0694 6.52612 11.1834 6.69894 11.2469C6.74577 11.2641 6.83624 11.2865 7.06799 11.2824C7.31098 11.2781 7.62676 11.2482 8.11829 11.2007L16.9745 10.3436C17.4543 10.2972 17.762 10.2668 17.9956 10.2257C18.2181 10.1865 18.3011 10.1486 18.3435 10.1234C18.5008 10.0299 18.6264 9.89148 18.7044 9.72593C18.7254 9.68134 18.7551 9.59503 18.7726 9.36981C18.791 9.13338 18.7917 8.82418 18.7917 8.34213C18.7917 7.83017 18.791 7.50029 18.7708 7.24883C18.7515 7.0082 18.7187 6.91799 18.6964 6.87299C18.6115 6.70147 18.4749 6.56085 18.306 6.47085C18.2617 6.44724 18.1725 6.41181 17.9325 6.38539C17.6818 6.35777 17.3521 6.34732 16.8403 6.33217L5.32019 5.99117Z" fill="#424551"/>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M7.79167 16.0417C7.28541 16.0417 6.875 16.4521 6.875 16.9583C6.875 17.4646 7.28541 17.875 7.79167 17.875C8.29793 17.875 8.70833 17.4646 8.70833 16.9583C8.70833 16.4521 8.29793 16.0417 7.79167 16.0417ZM5.04167 16.9583C5.04167 15.4395 6.27288 14.2083 7.79167 14.2083C9.31045 14.2083 10.5417 15.4395 10.5417 16.9583C10.5417 18.4771 9.31045 19.7083 7.79167 19.7083C6.27288 19.7083 5.04167 18.4771 5.04167 16.9583Z" fill="#424551"/>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M16.5 16.0417C15.9937 16.0417 15.5833 16.4521 15.5833 16.9583C15.5833 17.4646 15.9937 17.875 16.5 17.875C17.0063 17.875 17.4167 17.4646 17.4167 16.9583C17.4167 16.4521 17.0063 16.0417 16.5 16.0417ZM13.75 16.9583C13.75 15.4395 14.9812 14.2083 16.5 14.2083C18.0188 14.2083 19.25 15.4395 19.25 16.9583C19.25 18.4771 18.0188 19.7083 16.5 19.7083C14.9812 19.7083 13.75 18.4771 13.75 16.9583Z" fill="#424551"/>
                            </svg>
                            <span class="badge">{{ basket.length }}</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <div class="header__sub">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M10.4714 2.86193C10.2111 2.60158 9.78897 2.60158 9.52862 2.86193L4.86195 7.5286C4.6016 7.78895 4.6016 8.21106 4.86195 8.47141L9.52862 13.1381C9.78897 13.3984 10.2111 13.3984 10.4714 13.1381C10.7318 12.8777 10.7318 12.4556 10.4714 12.1953L6.27616 8L10.4714 3.80474C10.7318 3.54439 10.7318 3.12228 10.4714 2.86193Z" fill="white"/>
            </svg>
            <div><strong>Up to 70% Off. </strong><span> Shop our latest sale styles</span></div>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M5.52864 2.86203C5.78899 2.60168 6.2111 2.60168 6.47145 2.86203L11.1381 7.52869C11.3985 7.78904 11.3985 8.21115 11.1381 8.4715L6.47145 13.1382C6.2111 13.3985 5.78899 13.3985 5.52864 13.1382C5.26829 12.8778 5.26829 12.4557 5.52864 12.1954L9.7239 8.0001L5.52864 3.80483C5.26829 3.54448 5.26829 3.12237 5.52864 2.86203Z" fill="white"/>
            </svg>
        </div>
        <Transition name="menu">
            <div class="header__menu" v-if="menuOpened">
                <div class="header__menu__container container_small">
                    <div class="header__menu__info-block">
                        <div class="header__menu__info-block__list">
                            <ElementLink
                                size="small"
                            >New collection
                            </ElementLink>
                            <ElementLink
                                size="small"
                            >Best Sellers
                            </ElementLink>
                            <ElementLink
                                size="small"
                            >Plus Size
                            </ElementLink>
                            <ElementLink
                                size="small"
                                color="danger"
                            >Sale up to 70%
                            </ElementLink>
                        </div>
                        <div class="header__menu__info-block__list" v-for="mainCategory in categoriesList">
                            <ElementLink
                                :link="`/catalog/${mainCategory.main_id}/`"
                            >{{ mainCategory.title }}
                            </ElementLink>
                            <ElementLink v-for="category in mainCategory.subCategories"
                                :link="`/catalog/${category.id}/`"
                                size="small"
                            >{{ category.title }}
                            </ElementLink>
                        </div>
                    </div>
                    <hr>
                    <div class="header__menu__card-sale">
                        <div class="header__menu__card-sale__image">
                            <img src="/images/hero/hero-image-5.png" alt="card sale image">
                        </div>
                        <span>Back to school. Sale up to 50%</span>
                        <ElementButton
                            size="small"
                        >See offers
                        </ElementButton>
                    </div>
                </div>
            </div>
        </Transition>
        <Transition name="menu">
            <div class="header__menu-basket" v-if="basketOpened">
                <div class="header__menu-basket__main">
                    <div class="header__menu-basket__header">
                        Your cart ({{ basket.length }})
                        <svg @click="basketOpened = false"
                        width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M4.29289 4.29293C4.68342 3.90241 5.31658 3.90241 5.70711 4.29293L12 10.5858L18.2929 4.29293C18.6834 3.90241 19.3166 3.90241 19.7071 4.29293C20.0976 4.68346 20.0976 5.31662 19.7071 5.70715L13.4142 12L19.7071 18.2929C20.0976 18.6835 20.0976 19.3166 19.7071 19.7071C19.3166 20.0977 18.6834 20.0977 18.2929 19.7071L12 13.4142L5.70711 19.7071C5.31658 20.0977 4.68342 20.0977 4.29289 19.7071C3.90237 19.3166 3.90237 18.6835 4.29289 18.2929L10.5858 12L4.29289 5.70714C3.90237 5.31662 3.90237 4.68346 4.29289 4.29293Z" fill="#787A80"/>
                        </svg>
                    </div>
                    <hr>
                    <div class="header__menu-basket__cards-list">
                        <template v-for="item in basketList">
                            <div class="header__menu-basket__cards-list__item">
                                <div class="header__menu-basket__cards-list__item__image">
                                    <img :src="item.image" alt="product image">
                                </div>
                                <div class="header__menu-basket__cards-list__item__info-block">
                                    <span>{{ item.title }}
                                        <svg @click="deleteFromBasket(item.id)"
                                        width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clip-path="url(#clip0_14_2191)">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M4.83398 2.50001C4.83398 1.57954 5.58018 0.833344 6.50065 0.833344H9.50065C10.4211 0.833344 11.1673 1.57954 11.1673 2.50001V2.83334H14.5007C14.8688 2.83334 15.1673 3.13182 15.1673 3.50001C15.1673 3.8682 14.8688 4.16668 14.5007 4.16668H13.6673V12.5C13.6673 13.9728 12.4734 15.1667 11.0007 15.1667H5.00065C3.52789 15.1667 2.33398 13.9728 2.33398 12.5V4.16668H1.50065C1.13246 4.16668 0.833984 3.8682 0.833984 3.50001C0.833984 3.13182 1.13246 2.83334 1.50065 2.83334H4.83398V2.50001ZM6.16732 2.83334H9.83398V2.50001C9.83398 2.31592 9.68475 2.16668 9.50065 2.16668H6.50065C6.31656 2.16668 6.16732 2.31592 6.16732 2.50001V2.83334ZM3.66732 4.16668V12.5C3.66732 13.2364 4.26427 13.8333 5.00065 13.8333H11.0007C11.737 13.8333 12.334 13.2364 12.334 12.5V4.16668H3.66732ZM8.00065 5.33334C8.36884 5.33334 8.66732 5.63182 8.66732 6.00001L8.66732 12C8.66732 12.3682 8.36884 12.6667 8.00065 12.6667C7.63246 12.6667 7.33399 12.3682 7.33399 12L7.33398 6.00001C7.33398 5.63182 7.63246 5.33334 8.00065 5.33334Z" fill="#787A80"/>
                                        </g>
                                        <defs>
                                        <clipPath id="clip0_14_2191">
                                        <rect width="16" height="16" fill="white"/>
                                        </clipPath>
                                        </defs>
                                        </svg>
                                    </span>
                                    <div class="header__menu-basket__cards-list__item__info-block__price-block">
                                        <ElementInput new-value="1">
                                            <template #icon>
                                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M7.99966 0.666656L12.6185 6.66666H3.38086L7.99966 0.666656Z" fill="#1E212C"/>
                                                <path d="M7.99966 15.3333L3.38086 8.83332L12.6185 8.83332L7.99966 15.3333Z" fill="#1E212C"/>
                                                </svg>
                                            </template>
                                        </ElementInput>
                                        <div class="header__menu-basket__cards-list__item__info-block__price-block__price">
                                            {{ item.price }}
                                        </div>
                                    </div>
                                    <div class="header__menu-basket__cards-list__item__info-block__fav-btn" @click="addInWishlist(item.id)">
                                        <span>Move to</span>
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M7.99925 13.2718C4.93321 11.5256 3.22318 9.78989 2.39626 8.28394C1.54992 6.74262 1.62377 5.44443 2.0934 4.52307C3.05872 2.62925 5.80378 2.02366 7.4763 4.13899L7.99921 4.80035L8.52217 4.13902C10.195 2.02361 12.9402 2.62929 13.9055 4.52307C14.3751 5.44442 14.4489 6.74259 13.6025 8.28393C12.7756 9.78988 11.0654 11.5256 7.99925 13.2718ZM7.99928 2.73759C5.64647 0.501854 2.17555 1.42588 0.905488 3.91757C0.20846 5.28504 0.198939 7.05246 1.22753 8.92569C2.247 10.7823 4.2796 12.742 7.67675 14.6197L7.99924 14.7979L8.32173 14.6197C11.719 12.742 13.7517 10.7823 14.7712 8.92571C15.7999 7.05248 15.7904 5.28505 15.0934 3.91757C13.8233 1.42583 10.3523 0.501888 7.99928 2.73759Z" fill="#424551"/>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <hr>
                        </template>
                    </div>
                </div>
                <div class="header__menu-basket__btn-block">
                    <hr>
                    <div class="header__menu-basket__btn-block__price-block">
                        Subtotal:
                        <span>${{ totalPrice }}</span>
                    </div>
                    <ElementButton
                        size="large"
                        color="primary"
                    >Checkout
                    </ElementButton>
                </div>
            </div>
        </Transition>
    </header>
    <div class="inset" @click="()=>{
        menuOpened = false;
        basketOpened = false;
    }" v-if="menuOpened || basketOpened"></div>
</template>

<style lang="scss">
    header {
        z-index: 51;
        position: sticky;
        top: 0;
        .header {
            &__top {
                background-color: $gray-900;
                color: $white;
                padding: .75rem 0;
                &__container {
                    @include df_ac;
                    justify-content: space-between;
                }
                &__availability {
                    opacity: .6;
                    @include text_2;
                    strong {
                        @include strong_2;
                    }
                }
                &__links {
                    opacity: .6;
                    @include df_ac;
                    gap: 2rem;
                }
                &__btns {
                    @include df_ac;
                    gap: 2.5rem;
                    &__link {
                        @include df_ac;
                        gap: .5rem;
                        img, svg {
                            max-width: 1rem;
                            max-height: 1rem;
                            @include wh_100;
                            object-fit: contain;
                        }
                        svg {
                            opacity: .6;
                        }
                        .link {
                            opacity: .6;
                        }
                    }
                }
            }
            &__main {
                background-color: $white;
                &__container {
                    @include df_ac;
                    justify-content: space-between;
                    padding: 1.25rem 0;
                }
                &__nav-block {
                    @include df_ac;
                    gap: 3.75rem;
                    &__logo {
                        max-width: 8.125rem;
                        max-height: 1.375rem;
                        @include wh_100;
                        img {
                            @include wh_100;
                        }
                    }
                    &__links {
                        @include df_ac;
                        gap: 2.5rem;
                    }
                }
                &__search-block {
                    @include df_ac;
                    gap: 3rem;
                    .field {
                        width: 23.75rem;
                    }
                }
                &__btns-block {
                    @include df_ac;
                    gap: 1.25rem;
                    hr {
                        border: 0;
                        border-left: 1px solid #DADBDD80;
                        height: 1.375rem;
                    }
                    &__btn {
                        @include df_ac;
                        gap: .5rem;
                        @include text_2;
                        .badge {
                            @include df_ac_jcc;
                            border-radius: .25rem;
                            width: 1.5rem;
                            height: 1.25rem;
                            color: $white;
                            background-color: $success;
                        }
                    }
                }
            }
            &__sub {
                @include df_ac_jcc;
                gap: .75rem;
                padding: .5rem 0;
                background-color: $primary;
                color: $white;
                svg {
                    max-width: 1rem;
                    max-height: 1rem;
                    @include wh_100;
                }
                span {
                    @include text_3;
                    text-decoration: underline;
                }
                strong {
                    @include text_3;
                    font-weight: 900;
                }
            }
            &__menu {
                position: absolute;
                top: calc(100% - 2.375rem);
                background-color: $white;
                width: 100%;
                padding-bottom: 2.5rem;
                &__container {
                    display: flex;
                    justify-content: space-between;
                }
                &__info-block {
                    display: flex;
                    gap: 1.875rem;
                    &__list {
                        @include df_fdc;
                        gap: .5rem;
                        width: 11.25rem;
                    }
                }
                &__card-sale {
                    @include df_fdc;
                    gap: 1rem;
                    &__image {
                        height: 17.8125rem;
                        aspect-ratio: 1;
                        img {
                            @include wh_100;
                            aspect-ratio: 1;
                        }
                    }
                    span {
                        @include text_2;
                        font-weight: 700;
                    }
                }
                hr {
                    border: 0;
                    border-left: 1px solid #DADBDD;
                }
            }
            &__menu-basket {
                @include df_fdc;
                justify-content: space-between;
                position: absolute;
                height: 100dvh;
                width: 22rem;
                right: 0;
                top: 0;
                background-color: $white;
                hr {
                    border: 0;
                    border-top: 1px solid $gray-300
                }
                &__main {
                    @include df_fdc;
                    gap: 1.5rem;
                }
                &__header {
                    @include df_ac;
                    justify-content: space-between;
                    padding: 2rem 1.5rem;
                    padding-bottom: 0;
                    @include strong_1;
                    font-size: 1.25rem;
                    color: $gray-900;
                    svg {
                        cursor: pointer;
                        max-width: 1.5rem;
                        max-height: 1.5rem;
                        @include wh_100;
                    }
                }
                &__cards-list {
                    @include df_fdc;
                    gap: 1rem;
                    &__item {
                        display: flex;
                        gap: 1rem;
                        padding: 0 1.5rem;
                        &__image {
                            max-width: 5rem;
                            max-height: 5rem;
                            @include wh_100;
                            img {
                                @include wh_100;
                            }
                        }
                        &__info-block {
                            @include df_fdc;
                            gap: .75rem;
                            span {
                                @include df_ac;
                                justify-content: space-between;
                                @include strong_1;
                                font-size: .875rem;
                                svg {
                                    max-width: 1rem;
                                    max-height: 1rem;
                                    @include wh_100;
                                }
                            }
                            &__price-block {
                                @include df_ac;
                                gap: 1rem;
                                .field {
                                    max-width: 5rem;
                                    .input-label {
                                        padding: .75rem .5625rem;
                                    }
                                }
                                &__price {
                                    @include strong_1;
                                    color: $gray-900;
                                }
                            }
                            &__fav-btn {
                                @include df_ac;
                                gap: .5rem;
                                @include strong_1;
                                font-size: .75rem;
                                cursor: pointer;
                                svg {
                                    max-width: 1rem;
                                    max-height: 1rem;
                                    @include wh_100;
                                }
                            }
                        }
                        
                    }
                }
                &__btn-block {
                    @include df_fdc;
                    gap: 1.25rem;
                    padding: 2rem 1.5rem;
                    padding-top: 0;
                    &__price-block {
                        @include df_ac;
                        justify-content: space-between;
                        color: $gray-700;
                        span {
                            @include strong_1;
                            font-size: 1.25rem;
                            color: $gray-900;
                        }
                    }
                }
            }
        }
    }
    .inset {
        z-index: 50;
        position: fixed;
        inset: 0;
        background-color: rgba(0, 0, 0, .32);
    }
</style>