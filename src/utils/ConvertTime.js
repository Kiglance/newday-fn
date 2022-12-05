export const convertTime = (time) => {
  return new Date(time).toLocaleDateString("en-gb", {
    year: "numeric",
    month: "short",
    day: "numeric",
    // weekday: "long",
  });
};

// lang: en-gb or en-us
