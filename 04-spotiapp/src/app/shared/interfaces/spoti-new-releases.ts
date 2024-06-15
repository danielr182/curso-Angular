import { Album } from "./spoti-tracks";

export interface SpotiNewReleases {
  albums: Albums;
}

export interface Albums {
  href: string;
  items: Album[];
  limit: number;
  next: string;
  offset: number;
  previous: null;
  total: number;
}
