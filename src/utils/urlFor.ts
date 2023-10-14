import imageUrlBuilder from "@sanity/image-url";
import { client } from "../../sanity/lib/client";

const builder = imageUrlBuilder(client);

const urlFor = (source: any) => {
  return builder.image(source);
};

export default urlFor;
