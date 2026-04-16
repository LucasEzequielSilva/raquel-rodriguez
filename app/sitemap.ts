import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: 'https://raquelrodriguez.com.ar', lastModified: new Date(), changeFrequency: 'weekly', priority: 1 },
    { url: 'https://raquelrodriguez.com.ar/pacientes', lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
  ]
}
