import { Component, Vue } from "vue-property-decorator";
import { State, Action } from "vuex-class";

import { Image } from "@/interfaces/interfaces";

@Component
export default class ImageInitializer extends Vue {
  @Action("getAll")
  private getAll!: () => Promise<Image[]>;

  @State(state => state.imageStore.images)
  public images!: Image[];

  created(): void {
    this.getAllImages();
  }

  private async getAllImages(): Promise<void> {
    // * This is here just to decrease the number of requests made to the API
    if (this.images && this.images.length) return;

    await this.getAll();
  }
}
