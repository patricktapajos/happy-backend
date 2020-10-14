import Orphanage from "../models/Orphanage";

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
    };
  },

  renderMany(orphs: Orphanage[]) {
    return orphs.map((orphanage) => this.render(orphanage));
  },
};
