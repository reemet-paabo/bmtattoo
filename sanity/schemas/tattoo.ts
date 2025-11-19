import { defineField, defineType } from 'sanity';

export const tattooSchema = defineType({
 name: 'tattoo',
 title: 'Tattoo',
 type: 'document',
 fields: [
    defineField({
        name: 'title',
        title: 'Title',
        type: 'string',
        validation: (Rule) => Rule.required(),
    }),
    defineField({
        name: 'slug',
        title: 'Slug',
        type: 'slug',
        options: {
            source: 'title',
            maxLength: 96,
        },
        validation: (Rule) => Rule.required(),
    }),
    defineField({
        name: 'image',
        title: 'Image',
        type: 'image',
        options: {
            hotspot: true, // Enables image cropping
        },
        validation: (Rule) => Rule.required(),
    }),
    defineField({
        name: 'style',
        title: 'Style',
        type: 'string',
        options: {
            list: [
                { title: 'Traditional', value: 'traditional'},
                { title: 'Realism', value: 'realism'},
                { title: 'Geometric', value: 'geometric'},
                { title: 'Blackwork', value: 'blackwork'},
                { title: 'Color', value: 'color'},
                { title: 'Biomechanical', value: 'biomechanical' },
                { title: 'Watercolor', value: 'watercolor'},
                { title: 'Japanese', value: 'japanese'},
                { title: 'Neo-traditional', value: 'neotraditional'},
                { title: 'Cover-up', value: 'coverup'},
                { title: 'Other', value: 'other'},
            ],
            layout: 'dropdown',
        },
        validation: (Rule) => Rule.required(),
    }),
    defineField({
        name: 'description',
        title: 'Description',
        type: 'text',
        rows: 4,
    }),
    defineField({
        name: 'featured',
        title: 'Featured',
        type: 'boolean',
        description: 'Show this tattoo on the homepage',
        initialValue: false,
    }),
    defineField({
        name: 'order',
        title: 'Display Order',
        type: 'number',
        description: 'Lower nnumbers appear first',
        initialValue: 0,
    }),
 ],

 preview: {
    select: {
        title: 'title',
        style: 'style',
        media: 'image',
    },
    prepare({ title, style, media }) {
        return {
            title: title,
            subtitle: style ? `Style ${style}` : 'No style set',
            media: media,
        };
    },
 },
});