import { defineType, defineField } from 'sanity';

export const aboutSchema = defineType({
    name: 'about',
    title: 'About Page',
    type: 'document',
    fields: [
        defineField({
            name: 'artistName',
            title: 'Artist Name',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'careerStartYear', /** Since Year 2001 */
            title: 'Career Start Year',
            type: 'number',
            description: 'The year the artist tattooing (e.g., 2001)',
            validation: (Rule) => Rule.required().min(1900).max(new Date().getFullYear()),
        }),
        defineField({
            name: 'profileImage',
            title: 'Profile Image',
            type: 'image',
            options: {
                hotspot: true,
            },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'bio',
            title: 'Biography',
            type: 'array',
            of: [{ type: 'block' }],
            description: 'Main bio text - supports rich text formatting',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'specialties', // checklist
            title: 'Specialties',
            type: 'array',
            description: 'Select which tattoo styles you specialize in',
            of: [{ type: 'string' }],
            options: {
                list: [
                    { title: 'Traditional', value: 'traditional' },
                    { title: 'Realism', value: 'realism' },
                    { title: 'Geometric', value: 'geometric' },
                    { title: 'Blackwork', value: 'blackwork' },
                    { title: 'Color Work', value: 'color' },
                    { title: 'Biomechanical', value: 'biomechanical' },
                    { title: 'Watercolor', value: 'watercolor' },
                    { title: 'Japanese', value: 'japanese' },
                    { title: 'Neo-traditional', value: 'neotraditional' },
                    { title: 'Dotwork', value: 'dotwork' },
                    { title: 'Tribal', value: 'tribal' },
                    { title: 'Cover-Ups', value: 'coverups'},
                    { title: 'Custom Designs', value: 'custom' },
                ],
                layout: 'grid',
            }
        }),
        defineField({
            name: 'experience',
            title: 'Experience Timeline',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        {
                            name: 'title',
                            title: 'Position/Title',
                            type: 'string',
                            validation: (Rule) => Rule.required(),
                        },
                        {
                            name: 'startYear',
                            title: 'Start Year',
                            type: 'string',
                            validation: (Rule) => Rule.required(),
                        },
                        {
                            name: 'endYear',
                            title: 'End Year',
                            type: 'string',
                            description: 'Leave as "Present" if current',
                        },
                        {
                            name: 'description',
                            title: 'Description',
                            type: 'text',
                            rows: 3,
                        },
                    ],
                    preview: {
                        select: {
                            title: 'title',
                            startYear: 'startYear',
                            endYear: 'endYear',
                        },
                        prepare({ title, startYear, endYear }) {
                            return {
                                title: title,
                                subtitle: `${startYear} - ${endYear || 'Present'}`,
                            };
                        },
                    },
                },
            ],
        }),
        defineField({
            name: 'studioDescription',
            title: 'Studio Description',
            type: 'text',
            rows: 4,
            description: 'Description of the studio space and atmosphere',
        }),
    ],
    preview: {
        select: {
            title: 'artistName',
            media: 'profileImage',
        },
    },
});