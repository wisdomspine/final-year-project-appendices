const parent = document.querySelector(".row .col");
const segments = parent.querySelectorAll(".row .col");
const map = {};
segments.forEach((segment) => {
  const segmentTitle = segment.querySelector("h3").innerText;
  const rows = segment.querySelectorAll("table tr");
  const records = [];
  rows.forEach((row, index) => {
    const cols = row.querySelectorAll("td");
    if (index == 1 || cols.length != 2) return;

    records.push({
      field: cols[0].innerText,
      description: cols[1].innerText,
      segmentCode: segmentTitle,
    });
  });
  map[segmentTitle] = { segment: segmentTitle, fields: records };
});
