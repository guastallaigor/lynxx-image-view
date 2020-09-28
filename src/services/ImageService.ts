import axios from "axios";

import { Image } from "@/interfaces/interfaces";

class ImageService {
  private base!: string;

  constructor() {
    this.base = process.env.VUE_APP_BASE_API;
  }

  public async getAll(): Promise<Image[]> {
    const { data } = await axios.get(`${this.base}/list`);

    return data;
  }

  get baseURL() {
    return this.base;
  }
}

export default new ImageService();
