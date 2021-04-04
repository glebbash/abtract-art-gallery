export type Art = {
  name: string;
  author: string;
  image: string;
};

export type ArtWithId = Art & { _id: string };
