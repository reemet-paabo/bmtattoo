import { client } from './sanity-client';
import { Tattoo, About, StudioInfo } from '@/types/sanity';

export async function getDashboardStats() {
    const queries = [
        client.fetch<number>(`count(*[_type == "tattoo"])`),
        client.fetch<number>(`count(*[_type == "tattoo" && featured == true])`),
        client.fetch(`*[_type == "tattoo"] | order(_createdAt desc) [0...5] {
            _id,
            _createdAt,
            title,
            style,
            image,
            featured
            }`),
    ];

    try {
        const [totalTattoos, featuredTattoos, recentTattoos] = await Promise.all(queries);

        return {
            totalTattoos,
            featuredTattoos,
            recentTattoos,
        };
    } catch (error) {
        console.error('Error fetching dashboard stats:', error);
        return {
            totalTattoos: 0,
            featuredTattoos: 0,
            recentTattoos: [],
        };
    }
}
export async function getAboutPage(): Promise<About | null> {
    const query = `
    *[_type == "about"][0] {
        _id,
        artistName,
        careerStartYear,
        profileImage,
        bio,
        specialties,
        experience,
        studioDescription
    }
    `;

    try {
        const about = await client.fetch<About>(query);
        return about;
    } catch (error) {
        console.error('Error fetching about page:', error);
        return null;
    }
}

export async function getStudioInfo(): Promise<StudioInfo | null> {
    const query = `
        *[_type == "studioInfo"][0] {
            _id,
            studioName,
            address,
            phone,
            email,
            hours,
            socialMedia,
            priceRange
        }
    `;

    try {
        const info = await client.fetch<StudioInfo>(query);
        return info;
    } catch (error) {
        console.error('Error fetching studio info', error);
        return null;
    }
}

export async function getTattoos(): Promise<Tattoo[]> {
    const query = `
        *[_type == "tattoo"] | order(order asc, _createdAt desc) {
        _id,
        _createdAt,
        title,
        slug,
        image,
        style,
        description,
        featured,
        order
        }
    `;

    try {
        const tattoos = await client.fetch<Tattoo[]>(query);
        return tattoos;
     } catch (error) {
        console.error('Error fetching tattoos:', error);
        return [];
    }
}

export async function getFeaturedTattoos(): Promise<Tattoo[]> {
    const query = `
        *[_type == "tattoo" && featured == true] | order(order asc) [0...6] {
        _id,
        _createdAt,
        title,
        slug,
        image,
        style,
        description,
        featured,
        order
        }
    `;

    try {
        const tattoos = await client.fetch<Tattoo[]>(query);
        return tattoos;
    } catch (error) {
        console.error('Error fetching featured tattoos', error);
        return [];
    }
}
