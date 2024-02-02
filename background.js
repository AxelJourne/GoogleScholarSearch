chrome.runtime.onInstalled.addListener(function () {
  chrome.contextMenus.create({
    id: "googleScholarSearch", // Unique identifier
    title: "Recherche sur Google Scholar",
    contexts: ["selection"],
  });
});

chrome.contextMenus.onClicked.addListener(function (info, tab) {
  if (info.menuItemId === "googleScholarSearch") {
    searchGoogleScholar(info, tab);
  }
});

function searchGoogleScholar(info, tab) {
  var selectedText = info.selectionText;
  var url =
    "https://scholar.google.com/scholar?q=" + encodeURIComponent(selectedText);
  chrome.tabs.create({ url: url });
}
