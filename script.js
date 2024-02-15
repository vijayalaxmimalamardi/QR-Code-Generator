const qrText = document.getElementById('qr-text');
const sizes = document.getElementById('sizes');
const generateBtn = document.getElementById('generateBtn');
const downloadBtn = document.getElementById('downloadBtn');
const qrContainer = document.querySelector('.qr-body');

//Initializes a variable size with the default value is sizes dropdown.
let size = sizes.value;
//Adds an event listener to the "Generate" button.
generateBtn.addEventListener('click',(e)=>{
    e.preventDefault();
    isEmptyInput();    //check if the input field is empty before generating the QR code.
});


//Adds an event listener to the sizes select element.
sizes.addEventListener('change',(e)=>{
    size = e.target.value;
    isEmptyInput();
});


// event listener to the "Download" button.
downloadBtn.addEventListener('click', ()=>{
    let img = document.querySelector('.qr-body img');

    if(img !== null){
        let imgAtrr = img.getAttribute('src');
        downloadBtn.setAttribute("href", imgAtrr);
    }
    else{
        downloadBtn.setAttribute("href", `${document.querySelector('canvas').toDataURL()}`);
    }
});

//function: check if the input field is empty.
function isEmptyInput(){
    // if(qrText.value.length > 0){
    //     generateQRCode();
    // }
    // else{
    //     alert("Enter the text or URL to generate your QR code");
    // }
    //If the input field is not empty, it calls the generateQRCode() function to generate the QR code. or empty it shows alert.
    qrText.value.length > 0 ? generateQRCode() : alert("Enter the text or URL to generate your QR code");;
}
//function: generate the QR code.
function generateQRCode(){
    qrContainer.innerHTML = ""; //displays QR code inside qrContainer.
    new QRCode(qrContainer, { //Uses the QRCode library to generate the QR code
        text:qrText.value,
        height:size,
        width:size,
        colorLight:"#fff",
        colorDark:"#000",
    });
}

