export type ImageFormat = {
  image_url: string;
  small_image_url?: string;
};

export type Images = {
  jpg: ImageFormat;
  webp: ImageFormat;
};
