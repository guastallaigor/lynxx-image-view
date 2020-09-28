import { Module, VuexModule, Mutation, Action } from "vuex-module-decorators";

import ImageService from "@/services/ImageService";
import { Image } from "@/interfaces/interfaces";

@Module
export default class ImageStore extends VuexModule {
  private images!: Image[];

  get favoriteImages(): Image[] {
    return this.images.filter((image: Image) => image.favourite);
  }

  @Action({ commit: "setImages" })
  async getAll(): Promise<Image[]> {
    const response: Image[] = await ImageService.getAll();

    return response;
  }

  @Mutation
  setImages(images: Image[]): void {
    let imagesWithLink: Image[] = images;

    if (images) {
      imagesWithLink = [...images].map((it: Image) => ({
        ...it,
        link: `${ImageService.baseURL}/${it.id}`
      }));
    }

    this.images = imagesWithLink;
  }
}
