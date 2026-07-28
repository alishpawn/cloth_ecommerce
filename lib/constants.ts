export const contact = {
  PHONE: "+977 986-0409801",
  EMAIL: "buttastore01@gmail.com",
};

export const social = {
  INSTAGRAM: "buttastore",
  FACEBOOK: "buttastore",
};

export const WHATSAPP = {
  NUMBER: "9779860409801",
  DISPLAY: "+977 9860409801",
  DEFAULT_MESSAGE: "Hello ButtaStore — I'd like to know more.",
  get url() {
    return `https://wa.me/${this.NUMBER}?text=${encodeURIComponent(this.DEFAULT_MESSAGE)}`;
  },
} as const;
