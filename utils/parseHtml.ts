export const parseHtml = (value?: string | null) => {
  if (value) {
    return value.replace(/<\/?[^>]+(>|$)/g, "");
  } else {
    return value;
  }
};
