import { defineType } from 'sanity';

export const template = defineType({
  name: 'tattoo',
  title: 'Tattoo',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
    },
  ],
});