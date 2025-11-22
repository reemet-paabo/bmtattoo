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

export interface About {
    _id: string;
    artistName: string;
    yearsExperience: number;
    profileImage: {
        asset: {
            _ref: string;
            _type: string;
        };
    };
    bio: any[]; //Rich text blocks
    specialties?: Array<{
        title: string;
        description?: string;
    }>;
    experience?: Array<{
        title: string;
        startYear: string;
        endYear?: string;
        description?: string;
    }>;
    studioDescription?: string;
}

export interface StudioInfo {
    _id: string;
    studioName: string;
    address?: {
        street?: string;
        city?: string;
        postalCode?: string;
        country?: string;
    };
    phone: string;
    email: string;
    hours?: Array<{
        days: string;
        hours: string;
    }>;
    socialMedia?: {
        instagram?: string;
        facebook?: string;
        tiktok?: string;
    };
    priceRange?: string;
}