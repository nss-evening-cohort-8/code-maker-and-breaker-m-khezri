const EncodeTextInput = document.getElementById("encodeText");
const EncodeBTN = document.getElementById("ToSecretBTN");

const printToDom = (stringToPrint, whereToPrint) => {
    document.getElementById(whereToPrint).innerHTML += stringToPrint;
    }
    
    const PrintEncode = (EncodeText) => {   
        const getText = EncodeTextInput.Value;
        const char = getText.charCodeAt(0);
        document.getElementById("encodeResult").innerHTML = char;
        
        printToDom(domString, 'encodeResult'); 
    }

    EncodeBTN.addEventListener("click", (e) =>  { 
    
        PrintEncode();

        });