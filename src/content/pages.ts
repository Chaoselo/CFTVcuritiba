import { servicesContent } from "./services";
import { camerasContent } from "./cameras";
import { segmentsContent } from "./segments";
import { citiesContent } from "./cities";

export const pagesContent = {
  ...servicesContent,
  ...camerasContent,
  ...segmentsContent,
  ...citiesContent,
};
