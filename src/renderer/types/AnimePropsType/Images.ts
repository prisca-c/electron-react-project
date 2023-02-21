export enum ImageFormat {
  jpg = 'jpg',
  webp = 'webp',
}

export type Image = {
  image_url: string | null;
  small_image_url: string | null;
  large_image_url: string | null;
};

export type Images = {
  image_url: string | null;
  small_image_url: string | null;
  medium_image_url: string | null;
  large_image_url: string | null;
  maximum_image_url: string | null;
};
