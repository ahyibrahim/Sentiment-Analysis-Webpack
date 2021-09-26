const meaningCloud = require("./meaningCloud");

async function analyzeArticle(req, res) {
  try {
    const { body } = req;
    const { url } = body;

    const analysisResult = await meaningCloud.sentimentAnalysis(url);
    res.status(200).json({
      message: "URL Recieved",
      analysisResult,
    });
  } catch (e) {
    console.log(e);
    res.status(500).send(`Internal Server Error: ${e.message}`);
  }
}

module.exports = {
  analyzeArticle,
};
