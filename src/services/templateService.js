import { readFromLocalStorage, writeInLocalStorage } from "./utils";

export const loadTemplates = async () => {
  return new Promise((resolve, reject) => {
    try {
      resolve(readFromLocalStorage("templates"));
    } catch (e) {
      reject(e);
    }
  });
};

export const addTemplate = async template => {
  return new Promise((resolve, reject) => {
    try {
      const templates = readFromLocalStorage("templates") || [];
      templates.push(template);
      writeInLocalStorage("templates", templates);
      resolve(templates);
    } catch (e) {
      reject(e);
    }
  });
};
