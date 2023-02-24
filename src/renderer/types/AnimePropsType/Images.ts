export enum ImageFormat {
  jpg = 'jpg',
  webp = 'webp',
}

export type Image = {
  image_url: string;
  small_image_url: string;
  large_image_url: string;
};

export type Images = {
  image_url: string;
  small_image_url: string;
  medium_image_url: string;
  large_image_url: string;
  maximum_image_url: string;
};
