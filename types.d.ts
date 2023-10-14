export interface Post {
  _id: string;
  title: string;
  author: Author;
  categories: Category[];
  slug: Slug;
  _createdAt: Date;
  _rev: string;
  mainImage: MainImage;
  publishedAt: Date;
  body: Body[];
  _updatedAt: Date;
  _type: string;
}

export interface Author {
  _rev: string;
  _type: string;
  name: string;
  bio: Body[];
  _id: string;
  _updatedAt: Date;
  slug: Slug;
  _createdAt: Date;
}

export interface Body {
  markDefs: any[];
  children: Child[];
  _type: string;
  style: string;
  _key: string;
}

export interface Child {
  marks: string[];
  text: string;
  _key: string;
  _type: string;
}

export interface Slug {
  current: string;
  _type: string;
}

export interface Category {
  _rev: string;
  _type: string;
  description: string;
  _id: string;
  title: string;
  _updatedAt: Date;
  _createdAt: Date;
}

export interface MainImage {
  _type: string;
  alt: string;
  asset: Asset;
}

export interface Asset {
  _ref: string;
  _type: string;
}
