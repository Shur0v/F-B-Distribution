
export enum ViewMode {
  DESKTOP = 'desktop',
  MOBILE = 'mobile',
}

export interface AnnotationItem {
  id: string;
  target: string;
  note: string;
}

export interface ServiceBlock {
  title: string;
  description: string;
  benefit: string;
}
