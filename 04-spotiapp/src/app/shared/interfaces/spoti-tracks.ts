import { Externalurls, Image } from "./spoti-common";

export interface SpotiTracks {
  tracks: Track[];
}

export interface Track {
  album: Album;
  artists: Artist[];
  disc_number: number;
  duration_ms: number;
  explicit: boolean;
  external_ids: Externalids;
  external_urls: Externalurls;
  href: string;
  id: string;
  is_local: boolean;
  is_playable: boolean;
  name: string;
  popularity: number;
  preview_url: null | string;
  track_number: number;
  type: string;
  uri: string;
}

export interface Externalids {
  isrc: string;
}

export interface Album {
  album_type: string;
  artists: Artist[];
  external_urls: Externalurls;
  href: string;
  id: string;
  images: Image[];
  is_playable: boolean;
  name: string;
  release_date: string;
  release_date_precision: string;
  total_tracks: number;
  type: string;
  uri: string;
}

export interface Artist {
  external_urls: Externalurls;
  href: string;
  id: string;
  name: string;
  type: string;
  uri: string;
}

