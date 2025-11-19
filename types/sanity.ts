export interface Tattoo {
    _id: string;
    _createdAt: string;
    title: string;
    slug: {
        current: string;
    };
    image: {
        asset: {
            _ref: string;
            _type: string;
        };
    };
    style: string;
    description?: string;
    featured?: boolean;
    order: number
}