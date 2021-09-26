import { checkUrl, checkUrlRegex } from "./urlChecker";

async function handleSubmit(event) {
  event.preventDefault();

  let formText = document.getElementById("name").value;

  //if (!checkUrl(formText)) {
  if (!checkUrlRegex(formText)) {
    //comment this line to use checkUrl witout regex
    document.getElementById("results").innerHTML = "Invalid Url";
  } else {
    await fetch("http://localhost:8081/analyze", {
      method: "POST",

      body: JSON.stringify({
        url: formText,
      }),

      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then(function (res) {
        if (res.str) {
          return (document.getElementById("results").innerHTML = JSON.stringify(
            res.str
          ));
        }
        const { agreement, confidence, irony, score_tag, sentence_list } =
          res.analysisResult;
        const headingData = { agreement, confidence, irony, score_tag };
        const result = document.getElementById("results");
        const globalHeading = document.createElement("h2");
        globalHeading.textContent = "Global Result:";
        result.appendChild(globalHeading);
        for (const headKey of Object.keys(headingData)) {
          const newElement = document.createElement("p");
          newElement.textContent = `${headKey
            .split("_")
            .join(" ")
            .toUpperCase()}: ${headingData[headKey]}`;
          result.appendChild(newElement);
        }
        const sentenceHeading = document.createElement("h2");
        sentenceHeading.textContent = "Sentence Result:";
        result.appendChild(sentenceHeading);
        console.log(result);
        const sentenceTable = document.createElement("table");
        result.appendChild(sentenceTable);
        const tableHead = sentenceTable.createTHead();
        const headRow = tableHead.insertRow(-1);
        headRow.insertCell(0).outerHTML = "<th>TEXT</th>";
        headRow.insertCell(1).outerHTML = "<th>SCORE TAG</th>";
        headRow.insertCell(2).outerHTML = "<th>AGREEMENT</th>";
        headRow.insertCell(3).outerHTML = "<th>CONFIDENCE</th>";
        for (const sentence of sentence_list) {
          const row = sentenceTable.insertRow(-1);
          let c = 0;
          row.insertCell(c++).textContent = sentence.text;
          row.insertCell(c++).textContent = sentence.score_tag;
          row.insertCell(c++).textContent = sentence.agreement;
          row.insertCell(c++).textContent = sentence.confidence + "%";
        }
      });
  }
}

export { handleSubmit };
