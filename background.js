chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if(message == "getPersons") {
        sendResponse({ response: "Message received in background script!" });
    }

    else if(message == "updatePerson") {
        chrome.storage.local.get("persons", result => {
            if (chrome.runtime.lastError) {
                console.error(chrome.runtime.lastError);
            }
            else {
                console.log(result.persons)
            }
        })
    }
});