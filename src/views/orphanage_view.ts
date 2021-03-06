import Orphanage from "../models/Orphanage";
import imagesView from "./images_view";

export default {
  render(orphanage: Orphanage) {
    return {
      id: orphanage.id,
      name: orphanage.name,
      about: orphanage.about,
      latitude: orphanage.latitude,
      longitude: orphanage.longitude,
      instructions: orphanage.instructions,
      opening_hours: orphanage.opening_hours,
      open_on_weekends: orphanage.open_on_weekends,
      images: imagesView.renderMany(orphanage.images),
    };
  },

  renderMany(orphs: Orphanage[]) {
    return orphs.map((orphanage) => this.render(orphanage));
  },
};
