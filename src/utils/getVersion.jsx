export default function getVersion() {
    return import.meta.env.VITE_STORYBLOK_IS_PREVIEW ? 'draft' : 'published';
}