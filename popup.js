document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('createAccountN').addEventListener('click', function() {
    chrome.windows.create({ url: ["https://account.proton.me/signup", "https://facebook.com/signup"], incognito: true });
    chrome.windows.create({ url: ["https://account.proton.me/signup", "https://facebook.com/signup"], incognito: true });
    chrome.windows.create({ url: ["https://account.proton.me/signup", "https://facebook.com/signup"], incognito: true });
    chrome.windows.create({ url: ["https://account.proton.me/signup", "https://facebook.com/signup"], incognito: true });
    chrome.windows.create({ url: ["https://account.proton.me/signup", "https://facebook.com/signup"], incognito: true });
  });
  document.getElementById('createAccountH').addEventListener('click', function() {
    chrome.tabs.create({ url: "https://account.proton.me/signup"});
    chrome.tabs.create({ url: "https://facebook.com/signup"});
  });
});