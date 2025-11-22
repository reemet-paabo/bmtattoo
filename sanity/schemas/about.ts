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
            name: 'yearsExperience', /** Since Year 2001 */
            title: 'Years of Experience',
            type: 'number',
            validation: (Rule) => Rule.required().min(0),
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
            of: [{ type: 'block'}],
            description: 'Main bio text - supports rich text formatting',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'specialties',
            title: 'Specialties',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        {
                            name: 'title',
                            title: 'Specialty Title',
                            type: 'string',
                            validation: (Rule) => Rule.required(),
                        },
                        {
                            name: 'description',
                            title: 'Description',
                            type: 'text',
                            rows: 3,
                        },
                    ],
                },
            ],
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