export function useCategories() {
    const categoriesList = ref([
        {
            main_id: 1,
            title: 'Clothes',
            subCategories: [
                {
                    id: 1,
                    title: 'Coats'
                },
                {
                    id: 2,
                    title: 'Jackets'
                },
                {
                    id: 3,
                    title: 'Suits'
                },
                {
                    id: 4,
                    title: 'Dresses'
                },
                {
                    id: 5,
                    title: 'Cardigans & sweaters'
                },
                {
                    id: 6,
                    title: 'Sweatshirts & hoodies'
                },
                {
                    id: 7,
                    title: 'T-shirts & tops'
                },
                {
                    id: 8,
                    title: 'Pants'
                },
                {
                    id: 9,
                    title: 'Jeans'
                },
                {
                    id: 10,
                    title: 'Shorts'
                },
                {
                    id: 11,
                    title: 'Skirts'
                },
                {
                    id: 12,
                    title: 'Lingerie & nightwear'
                },
                {
                    id: 13,
                    title: 'Sportswear'
                },
                {
                    id: 14,
                    title: 'Swimwear'
                },
            ],
        },
        {
            main_id: 2,
            title: 'Shoes',
            subCategories: [
                {
                    id: 15,
                    title: 'Boots',
                },
                {
                    id: 16,
                    title: 'Flat shoes',
                },
                {
                    id: 17,
                    title: 'Heels',
                },
                {
                    id: 18,
                    title: 'Sandals',
                },
                {
                    id: 19,
                    title: 'Mules',
                },
                {
                    id: 20,
                    title: 'Sliders',
                },
                {
                    id: 21,
                    title: 'Slippers',
                },
                {
                    id: 22,
                    title: 'Sneakers',
                },
                {
                    id: 23,
                    title: 'Leather',
                },
            ]
        },
        {
            main_id: 3,
            title: 'Accessories',
            subCategories: [
                {
                    id: 24,
                    title: 'Bags & bagpacks',
                },
                {
                    id: 25,
                    title: 'Hats & scarves',
                },
                {
                    id: 26,
                    title: 'Hair accessories',
                },
                {
                    id: 27,
                    title: 'Belts',
                },
                {
                    id: 28,
                    title: 'Jewellery',
                },
                {
                    id: 29,
                    title: 'Watches',
                },
                {
                    id: 30,
                    title: 'Sunglasses',
                },
                {
                    id: 31,
                    title: 'Purses',
                },
                {
                    id: 32,
                    title: 'Gloves',
                },
                {
                    id: 33,
                    title: 'Socks & tights',
                },
            ]
        }
    ]);

    return {
        categoriesList
    };
}