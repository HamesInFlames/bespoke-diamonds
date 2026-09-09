import type { CollectionSlug } from './site'

interface CollectionDetail {
  shortDescription: string
  title: string
  pieces: [{ name: string; image: string }, ...{ name: string; image: string }[]]
}

export const collectionDetails: Record<CollectionSlug, CollectionDetail> = {
  "rings": {
    "shortDescription": "From a first promise to forever.",
    "title": "A ring with your story at its heart.",
    "pieces": [
      {
        "name": "Yellow gold solitaire",
        "image": "/images/collections/rings-1.jpg"
      },
      {
        "name": "Pavé solitaire",
        "image": "/images/collections/rings-2.jpg"
      },
      {
        "name": "Diamond halo",
        "image": "/images/collections/rings-3.jpg"
      }
    ]
  },
  "wedding-bands": {
    "shortDescription": "A lifetime, beautifully expressed.",
    "title": "A daily reminder of an extraordinary promise.",
    "pieces": [
      {
        "name": "Classic diamond band",
        "image": "/images/collections/wedding-bands-1.jpg"
      },
      {
        "name": "Rose gold diamond band",
        "image": "/images/collections/wedding-bands-2.jpg"
      },
      {
        "name": "Shared-prong diamond band",
        "image": "/images/collections/wedding-bands-3.jpg"
      }
    ]
  },
  "bracelets": {
    "shortDescription": "A little brilliance in every gesture.",
    "title": "Effortless brilliance, from day to evening.",
    "pieces": [
      {
        "name": "Gold tennis bracelet",
        "image": "/images/collections/bracelets-1.jpg"
      },
      {
        "name": "Diamond tennis bracelet",
        "image": "/images/collections/bracelets-2.jpeg"
      },
      {
        "name": "Blue and white stone bracelet",
        "image": "/images/collections/bracelets-3.jpg"
      }
    ]
  },
  "watches": {
    "shortDescription": "Considered details. Timeless character.",
    "title": "Discover timepieces with a personal point of view.",
    "pieces": [
      {
        "name": "Rectangular bracelet watch",
        "image": "/images/collections/watches-1.jpg"
      },
      {
        "name": "Mechanical dress watch",
        "image": "/images/collections/watches-2.jpg"
      },
      {
        "name": "Gold bracelet watch",
        "image": "/images/collections/watches-3.jpg"
      }
    ]
  },
  "earrings": {
    "shortDescription": "The finishing touch, made personal.",
    "title": "Beautifully matched. Effortlessly worn.",
    "pieces": [
      {
        "name": "Diamond halo studs",
        "image": "/images/collections/earrings-1.jpg"
      },
      {
        "name": "Three-stone drop earrings",
        "image": "/images/collections/earrings-2.jpg"
      },
      {
        "name": "Geometric drop earrings",
        "image": "/images/collections/earrings-3.jpg"
      }
    ]
  },
  "necklaces": {
    "shortDescription": "Keep something meaningful close.",
    "title": "A signature piece to wear close to your heart.",
    "pieces": [
      {
        "name": "Solitaire diamond necklace",
        "image": "/images/collections/necklaces-1.jpg"
      },
      {
        "name": "Graduated diamond necklace",
        "image": "/images/collections/necklaces-2.jpg"
      },
      {
        "name": "Gold drop pendant",
        "image": "/images/collections/necklaces-3.jpg"
      }
    ]
  }
}
