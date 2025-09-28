function encodeAndDecodeMessages() {
    const [encodeButton, decodeButton] = document.querySelectorAll("button");
    const [senderArea, receiveArea] = document.querySelectorAll("textarea");

    encodeButton.addEventListener('click', onEncode);
    
    decodeButton.addEventListener('click', onDecode);

    function onEncode() {
            let encodedString = "";
        let sendedText = senderArea.value;

        for (let letter of sendedText) {
            let letterCode = letter.charCodeAt(0);
            let newLetter = String.fromCharCode(letterCode + 1);
            encodedString += newLetter;
        }

            senderArea.value = '';
            receiveArea.value = encodedString;
    }

    function onDecode(event) {
        let decodedString = '';
        let receivedText = receiveArea.value;

        for (let letter of receivedText) {
            let letterCode = letter.charCodeAt(0);
            let newLetter = String.fromCharCode(letterCode - 1);
            decodedString += newLetter;
        }

        receiveArea.value = decodedString;
    }
}