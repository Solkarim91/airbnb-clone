export interface SmallCardItem {
  distance: string;
  img: string;
  location: string;
}

export interface MediumCardItem {
  img: string;
  title: string;
}

export interface LargeCardItem {
  img: string;
  title: string;
  description: string;
  buttonText: string;
}

export interface InfoCardItem {
  description: string;
  img: string;
  location: string;
  price: string;
  title: string;
  total: string;
  star: number;
}

export interface SearchResult {
  description: string;
  img: string;
  lat: number;
  long: number;
  location: string;
  price: string;
  star: number;
  title: string;
  total: string;
}

export interface IMyMapProps {
  searchResults: SearchResult[];
}
