//  check the input if it begins with +234
//  if it does then check the next digits to confirm the network
//  if it begins with 0 then check the next 3 digits to confirm the mobile network
//  else display not nigerian mobile network

// dataset to get the network operators initial digits

const mtn = [
  803, 806, 703, 706, 813, 816, 810, 814, 903, 906, 913, 916, 7025, 7026, 704,
];
const airtel = [802, 808, 708, 812, 701, 902, 901, 904, 907, 912];
const nineMobile = [809, 818, 817, 909, 908];
const glo = [805, 807, 705, 815, 811, 905, 915];
const network = document.querySelector(".network");
const networkLogo = document.querySelector("#network_logo");
const networkWriteUp = document.querySelector("#networkWriteUp");
const phoneNumberInput = document.querySelector("#phone");
const body = document.querySelector(".body");

const originBgColour = "#f0f0f0";
=======

networkWriteUp.style.display = "block";
networkLogo.style.display = "none";

const networkLogoLinks = {
  mtn: "/assets/images/mtn.png+MTN+#ffda29",
  glo: "/assets/images/glo.png+Glo+#72AE49",
  nineMobile: "/assets/images/9mobile.jpeg+9Mobile+#006400",
  airtel: "/assets/images/airtel.jpg+Airtel+#FF0000",
};
function checkMobileNetwork(digit) {
  const toNumber = Number(digit);
  const checkMtn = mtn.find((num) => num === toNumber) && networkLogoLinks.mtn;
  const checkGlo = glo.find((num) => num === toNumber) && networkLogoLinks.glo;
  const checkNineMobile =
    nineMobile.find((num) => num === toNumber) && networkLogoLinks.nineMobile;
  const checkAirtel =
    airtel.find((num) => num === toNumber) && networkLogoLinks.airtel;
  let lastCheck = checkMtn || checkGlo || checkNineMobile || checkAirtel;
  return lastCheck;
}

function displayNetwork(image) {
  if (!image) return;
  const [logo, title, colour] = image.split("+");
  networkWriteUp.style.display = "none";
  networkLogo.setAttribute("src", logo);
  networkLogo.style.display = "block";
  body.style.backgroundColor = colour
}

phoneNumberInput.addEventListener("input", (e) => {
  mtnImageAndTitle = "";
  airtelImageAndTitle = "";
  nMobileImageAndTitle = "";
  gloImageAndTitle = "";
  const value = phoneNumberInput.value;

  const firstFourDigit = value.slice(0, 4);
  const frstDigit = value.slice(0, 1);
  const nextThreeDigit = value.slice(1, 4).split("");
  const secondThreeDigit = value.slice(4, 7).split("");
  const secondFourdigitfromCountryCode = value.slice(4, 8).split("");
  const nextFourDigitFromNormalPhone = value.slice(1, 5).split("");
  if (
    firstFourDigit === "+234" &&
    secondFourdigitfromCountryCode.length === 4
  ) {
    const numCode = checkMobileNetwork(secondFourdigitfromCountryCode.join(""));
    displayNetwork(numCode);
  } else if (firstFourDigit === "+234" && secondThreeDigit.length === 3) {
    const numCode = checkMobileNetwork(secondThreeDigit.join(""));
    displayNetwork(numCode);
  } else if (frstDigit === "0" && nextFourDigitFromNormalPhone.length === 4) {
    const numCode = checkMobileNetwork(nextFourDigitFromNormalPhone.join(""));
    displayNetwork(numCode);
  } else if (frstDigit === "0" && nextThreeDigit.length === 3) {
    const numCode = checkMobileNetwork(nextThreeDigit.join(""));
    displayNetwork(numCode);
  }
  if (firstFourDigit === "+234" && value.length < 7) {
    networkWriteUp.style.display = "block";
    networkLogo.style.display = "none";
    body.style.backgroundColor = originBgColour;
    // clear the image if input is less than 7
  }
  if (frstDigit === "0" && value.length < 4) {
    networkWriteUp.style.display = "block";
    networkLogo.style.display = "none";
    body.style.backgroundColor = originBgColour;
    // clear the image if input is less than 6
  }
});
