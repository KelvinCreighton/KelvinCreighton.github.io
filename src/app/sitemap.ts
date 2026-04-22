import { MetadataRoute } from 'next'
import { projectNavigationData } from '@/components/projectNavigationData'

export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  // Replace with your actual deployed domain
  const baseUrl = 'https://kelvincreighton.ca'

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    {
      url: `${baseUrl}/projects`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/resume`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.7,
    },
  ]

  const projectRoutes: MetadataRoute.Sitemap = Object.values(projectNavigationData)
    .flat()
    .map((project) => ({
      url: `${baseUrl}${project.href}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    }))

  return [...staticRoutes, ...projectRoutes]
}
