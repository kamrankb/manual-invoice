import { computed } from "vue";

export const findByID = (arr, id) => {
  if(arr.length > 0) {
    return arr.find(item => id == item.id);
  } else {
    return {};
  }
};

export const isJsonString = (str) => {
  try {
    return JSON.parse(str);
  } catch (e) {
      return false;
  }
};

export const siteURL = computed(() => process.env.MIX_BRAND_URL);

export const capitalizeWords = (words) => {
  return words.toLowerCase().replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase());
};