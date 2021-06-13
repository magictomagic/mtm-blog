import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'

const posts_articles_Directory = join(process.cwd(), '_posts/articles')
const posts_notes_Directory = join(process.cwd(), '_posts/notes')

export function getPost_articles_Slugs() {
  return fs.readdirSync(posts_articles_Directory)
}

export function getPost_notes_Slugs() {
  return fs.readdirSync(posts_notes_Directory)
}

export function getPost_articles_BySlug(slug: string, fields: string[] = []) {
  const realSlug = slug.replace(/\.md$/, '')
  const fullPath = join(posts_articles_Directory, `${realSlug}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  type Items = {
    [key: string]: string
  }

  const items: Items = {}

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === 'slug') {
      items[field] = realSlug
    }
    if (field === 'content') {
      items[field] = content
    }

    if (data[field]) {
      items[field] = data[field]
    }
  })

  return items
}

export function getPost_notes_BySlug(slug: string, fields: string[] = []) {
  const realSlug = slug.replace(/\.org$/, '')
  const fullPath = join(posts_notes_Directory, `${realSlug}.org`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  type Items = {
    [key: string]: string
  }

  const items: Items = {}

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === 'slug') {
      items[field] = realSlug
    }
    if (field === 'content') {
      items[field] = content
    }

    if (data[field]) {
      items[field] = data[field]
    }
  })

  return items
}


export function get_articles(fields: string[] = []) {
  const slug_articles = getPost_articles_Slugs()
  // console.log("hhysb: ", slugs)
  const articles = slug_articles
    .filter(slug => slug.indexOf(".md") !== -1)
    .map((slug) => getPost_articles_BySlug(slug, fields))
    // sort articles by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1))

  return articles
  // return {articles, notes}
}

export function get_notes(fields: string[] = []) {
  const slug_notes = getPost_notes_Slugs()
  const notes = slug_notes
    .filter(slug => slug.indexOf(".org") !== -1)
    .map((slug) => getPost_notes_BySlug(slug, fields))
    // sort notes by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1))
  
  return notes
}
