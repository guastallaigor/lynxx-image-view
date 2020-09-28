interface Resolution {
  width: number;
  height: number;
}

export interface Image {
  name: string;
  id: string;
  resolution: Resolution;
  favourite: boolean;
  link?: string;
}

export interface BasicStyle {
  maxWidth: string;
  maxHeight: string;
}
