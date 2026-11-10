export type StyleCategory = 
  | 'todos'
  | 'contemporaneo'
  | 'organico'
  | 'minimalismo-quente'
  | 'classico-renovado';

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: StyleCategory;
  categoryLabel: string;
  location: string;
  year: string;
  coverImage: string;
  galleryImages: string[];
  description: string;
  curationHighlights: string[];
  scope: string;
}

export interface JourneyStep {
  step: string;
  title: string;
  subtitle: string;
  description: string;
  deliverables: string[];
}

export interface Modality {
  id: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  deliverables: string[];
  scopeNote?: string;
  isPopular?: boolean;
}

export interface Professional {
  id: string;
  name: string;
  role: string;
  focusArea: string;
  image: string;
  bio: string;
  isBioPending?: boolean;
}
