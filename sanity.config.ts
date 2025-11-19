import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { visionTool } from '@sanity/vision';
import { schemas } from './sanity/schemas';

export default defineConfig({
    name: 'default',
    title: 'BM Tattoo Studio',

    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'PROJECT_ID',
    dataset: 'production',

    plugins: [
        structureTool(),
        visionTool(),
    ],

    schema: {
        types: schemas
    }
})