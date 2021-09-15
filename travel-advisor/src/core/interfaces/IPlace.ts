export interface IPlace {
    address: string
    awards: [{[key: string]: string| number}]
    latitude: string
    location_id: string
    location_string: string
    longitude: string
    name: string
    num_reviews: string
    parent_display_name: string
    phone: string
    photo: {[key: string]: any}
    price_level: string
    ranking: string
    rating: string
    raw_ranking: string
    web_url: string
    website: string
    cuisine: [{[key: string]: string| number}]

}
