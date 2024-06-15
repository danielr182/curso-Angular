import { Externalurls, Image } from "./spoti-common";

export interface SpotiArtists {
  artists: Artists;
}

export interface Artists {
  href: string;
  items: ArtistItem[];
  limit: number;
  next: string;
  offset: number;
  previous: null;
  total: number;
}

export interface ArtistItem {
  external_urls: Externalurls;
  followers: Followers;
  genres: string[];
  href: string;
  id: string;
  images: Image[];
  name: string;
  popularity: number;
  type: string;
  uri: string;
}



export interface Followers {
  href: null;
  total: number;
}

