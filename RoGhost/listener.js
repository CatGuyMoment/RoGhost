chrome.webRequest.onBeforeRequest.addListener(
    function() {
        console.log("he he he ha");
        return {cancel: true};
    },
    {
        urls: ["*://presence.roblox.com/v1/presence/register-app-presence"]
    },
    ["blocking"]
);