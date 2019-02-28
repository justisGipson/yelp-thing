export interface Result {
    image_url: string,
    name: string,
    rating: number,
    price: string,
    location: {
        address1: string,
        city: string,
        zip_code: string,
        country: string,
        state: string,
        display_address: string[]
    },
    display_phone: string,
    transactions: string[]
}