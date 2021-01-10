/* eslint-disable import/prefer-default-export */
export const IMAGE_GALLERY_TEMPLATES = {
  ONE_IMAGE_FULLSIZE: `grid-template-columns: repeat(1, 1fr); grid-template-areas: "a"; grid-template-rows: repeat(1, 60vh);` /* 3 images in 2 columns (Height "double") */,
  TWO_IMAGES_TWO_COLUMNS: `grid-template-columns: repeat(2, 1fr); grid-template-areas: "a b"; grid-template-rows: repeat(1, 60vh);` /* 3 images in 2 columns (Height "double") */,
  TWO_IMAGES_ROW: `grid-template-columns: repeat(2, 1fr); grid-template-areas: "a ." "a b" ". b"; grid-template-rows: repeat(3, 20vh);` /* 2 images in a row (Height "double") */,
  TWO_IMAGES_ROW_INVERTED: `grid-template-columns: repeat(2, 1fr); grid-template-areas: ". b" "a b" "a ."; grid-template-rows: repeat(3, 20vh);` /* 2 images in a row (Height "double") */,
  THREE_IMAGES_TWO_COLUMNS: `grid-template-columns: repeat(2, 1fr); grid-template-areas: "a b" "a b" "a c" "a c"; grid-template-rows: repeat(4, 20vh);` /* 3 images in 2 columns (Height "double") */,
  THREE_IMAGES_TWO_COLUMNS_INVERTED: `grid-template-columns: repeat(2, 1fr); grid-template-areas: "b a" "b a" "c a" "c a"; grid-template-rows: repeat(4, 20vh);` /* 3 images in 2 columns (Height "double") */,
  THREE_IMAGES_ROW: `grid-template-columns: repeat(3, 1fr); grid-template-areas: "a . c" "a b c" ". b ."; grid-template-rows: repeat(3, 20vh);` /* 3 images in a row (Height "double") */,
  THREE_IMAGES_ROW_INVERTED: `grid-template-columns: repeat(3, 1fr); grid-template-areas: ". b ." "a b c" "a . c"; grid-template-rows: repeat(3, 20vh);` /* 3 images in a row inverted (Height "double") */,
  FOUR_IMAGES_TWO_COLUMNS: `grid-template-columns: repeat(2, 1fr); grid-template-areas: "a b" "a b" "a d" "c d" "c d"; grid-template-rows: repeat(5, 20vh);` /* 4 images in 2 columns (Height "double", "triple") */,
  FOUR_IMAGES_ROW: `grid-template-columns: repeat(4, 1fr); grid-template-areas: "a . c ." "a b c d" ". b . d"; grid-template-rows: repeat(3, 20vh);` /* 4 images in a row (Height "double") */,
  FIVE_IMAGES_MIX_COLUMNS: `grid-template-columns: repeat(6, 1fr); grid-template-areas: "a a a b b b" "a a a b b b" "c c d d e e" "c c d d e e"; grid-template-rows: repeat(4, 20vh);` /* 6 images 3 columns (Height "double", "triple") */,
  SIX_IMAGES_THREE_COLUMNS: `grid-template-columns: repeat(3, 1fr); grid-template-areas: "a b c" "a b c" "a d c" "e d f" "e d f"; grid-template-rows: repeat(5, 20vh);` /* 6 images 3 columns (Height "double", "triple") */,
  SEVEN_IMAGES_THREE_COLUMNS: `grid-template-columns: repeat(3, 1fr); grid-template-areas: "a b c" "a b c" "a d c" "e d g" "e f g" "e f g"; grid-template-rows: repeat(6, 20vh);` /* 7 images 3 columns (Height "double", "triple") */,
};
