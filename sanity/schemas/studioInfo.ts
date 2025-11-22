import { defineType, defineField } from 'sanity';

export const studioInfoSchema = defineType({
    name: 'studioInfo',
    title: 'Studio Information',
    type: 'document',
    fields: [
        defineField({
            name: 'studioName',
            title: 'Studio Name',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'address',
            title: 'Address',
            type: 'object',
            fields: [
                {
                    name: 'street',
                    title: 'Street Address',
                    type: 'string',
                },
                {
                    name: 'city',
                    title: 'City',
                    type: 'string',
                },
                {
                    name: 'postalCode',
                    title: 'Postal Code',
                    type: 'string',
                },
                {
                    name: 'country',
                    title: 'Country',
                    type: 'string',
                },
            ],
        }),
        defineField({
            name: 'phone',
            title: 'Phone Number',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'email',
            title: 'Email',
            type: 'string',
            validation: (Rule) => Rule.required().email(),
        }),
        defineField({
            name: 'hours',
            title: 'Opening Hours',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        {
                            name: 'days',
                            title: 'Day(s)',
                            type: 'string',
                            description: 'e.g., "Monday - Friday" or "Saturday"',
                        },
                        {
                            name: 'hours',
                            title: 'Hours',
                            type: 'string',
                            description: 'e.g., "12:00 - 20:00" or "Closed"',
                        },
                    ],
                    preview: {
                        select: {
                            days: 'days',
                            hours: 'hours',
                        },
                        prepare({ days, hours }) {
                            return {
                                title: days,
                                subtitle: hours,
                            };
                        },
                    },
                },
            ],
        }),
        defineField({
            name: 'socialMedia',
            title: 'Social Media',
            type: 'object',
            fields: [
                {
                    name: 'instagram',
                    title: 'Instagram URL',
                    type: 'url',
                },
                {
                    name: 'facebook',
                    title: 'Facebook URL',
                    type: 'url',
                },
                {
                    name: 'tiktok',
                    title: 'TikTok URL',
                    type: 'url',
                },
            ],
        }),
        defineField({
            name: 'priceRange',
            title: 'Price Range',
            type: 'string',
            options: {
                list: [
                    { title: '$', value: '$' },
                    { title: '$$', value: '$$'},
                    { title: '$$$', value: '$$$'},
                    { title: '$$$$', value: '$$$$'},
                ],
            },
        }),
    ],
    preview: {
        select: {
            title: 'studioName',
            subtitle: 'email',
        },
    },
})