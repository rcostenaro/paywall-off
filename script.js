chrome.browserAction.onClicked.addListener(injetarScript);

function injetarScript(tab) {

    chrome.tabs.executeScript({
        file: "inject.js"
    });

}
