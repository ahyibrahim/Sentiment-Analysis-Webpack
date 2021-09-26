const axios = require("axios");
require("dotenv").config();

const sentimentAnalysis = async (url) => {
  const res = await axios.get("https://api.meaningcloud.com/sentiment-2.1", {
    params: {
      key: process.env.API_KEY,
      lang: "auto",
      ilang: "en",
      url,
    },
  });
  try {
    return res.data;
  } catch (e) {
    console.log("Error", e);
  }
};

module.exports = {
  sentimentAnalysis,
};
