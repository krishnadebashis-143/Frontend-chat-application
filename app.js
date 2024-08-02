function sendMessage() {
    var messageInput = document.getElementById("messageInput");
    var message = messageInput.value.trim();

    if (message === "") {
        return;
    }

    var messageContainer = document.createElement("div");
    messageContainer.classList.add("message", "sent");
    messageContainer.innerText = message;

    var chatBox = document.getElementById("chatBox");
    var messages = chatBox.querySelector(".message-container");
    messages.appendChild(messageContainer);

    messageInput.value = "";

    // Scroll to the bottom
    chatBox.scrollTop = chatBox.scrollHeight;
}
