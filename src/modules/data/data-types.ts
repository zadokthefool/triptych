interface Entry {
  id: string; // unique
  title: string;
  year: number;
  description: string;
  wikipediaLink: string;
  keywords: string[];
  image: string; // path to image in /public/images
  tags: string[];
  validPrev?: string[]; // IDs of allowed preceding entries
  validNext?: string[]; // IDs of allowed following entries
}

// lib data entry types
export interface EventsEntry extends Entry {
  type: 'event';
}

export interface InventionsEntry extends Entry {
  type: 'invention';
}

export interface PeopleEntry extends Entry {
  type: 'person';
}

export interface PlacesEntry extends Entry {
  type: 'place';
}

export interface ProjectsEntry extends Entry {
  type: 'project';
}
