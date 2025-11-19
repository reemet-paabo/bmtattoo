import { client } from './sanity-client';
import { Tattoo } from '@/types/sanity';

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