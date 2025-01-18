import { createAppSlice } from "@/lib/createAppSlice";

export const productSlice = createAppSlice({
  name: "product",
  initialState: {
    id: "",
    title: "",
    image: "",
    subtitle: "",
    brand: "",
    retailer: "",
    details: [],
    tags: [],
  },
  reducers: {
    setProduct: (state, action) => {
      const { id, title, image, subtitle, brand, retailer, details, tags } =
        action.payload;
      state.id = id;
      state.title = title;
      state.image = image;
      state.subtitle = subtitle;
      state.brand = brand;
      state.retailer = retailer;
      state.details = details;
      state.tags = tags;
    },
  },
});

export const { setProduct } = productSlice.actions;
