//  check the input if it begin with +234
//  it it does then check the next the digits to confirm the network
//  it it begin with 0 then check the next 3 digit to confirm the mobile network
//  else display not  nigerian mobile network




// dataset to get the network operators inial digits
const mtn = [
  803, 806, 703, 706, 813, 816, 810, 814, 903, 906, 913, 916, 7025, 7026, 704,
];
const airtel = [802, 808, 708, 812, 701, 902, 901, 904, 907, 912];
const nineMobile = [809, 818, 817, 909, 908];
const glo = [805, 807, 705, 815, 811, 905, 915];
const network = document.querySelector(".network");
const networkLogo = document.querySelector("#network_logo");
const networkTitle = document.querySelector(".network_title");
const phoneNumberInput = document.querySelector("#phone");

let m, a, n, g;
function checkMobileNetwork(digit) {
  const toNumber = Number(digit);

  const checkmtn = mtn.find((num) => {
    return num === toNumber;
  });
  if (checkmtn) {
    return (m = "/assets/images/mtn.png+MTN");
  }

  const checkGlo = glo.find((num) => num === toNumber);

  if (checkGlo) {
    return (g = "/assets/images/glo.png+Glo");
  }

  const checkNineMobile = nineMobile.find((num) => num === toNumber);

  if (checkNineMobile) {
    return (n = "/assets/images/9mobile.jpeg+9Mobile");
  }
  const checkAirtel = airtel.find((num) => num === toNumber);
  if (checkAirtel) {
    return (a = "/assets/images/airtel.jpg+Airtel");
  }

  return m || a || g || n;
}

function displayNetwork(image) {
  if (!image) return;
  const [logo, title] = image.split("+");
  const elm = ` <section class=" network_logo--container">
                                <img id="network_logo"  alt=" Network logo" src=${logo}   >
                
                
                            </section>
                            
                            <section class=" network_title">
                             
                                <h2>${title}</h2>
                
                
                            </section>
                
                       `;
  network.innerHTML = elm;
}

phoneNumberInput.addEventListener("input", function (e) {
  m = "";
  n = "";
  a = "";
  g = "";
  const value = phoneNumberInput.value;
  const firstFourDigit = value.slice(0, 4);
  const frstDigit = value.slice(0, 1);
  const nextThreeDigit = value.slice(1, 4).split("");
  const nextFourDigit = value.slice(4, 7).split("");
  const nextFourdigitfromCountryCode = value.slice(4, 8).split("");
  const nextFourDigitFromNormalPhone = value.slice(1, 5).split("");
  if (firstFourDigit === "+234" && nextFourdigitfromCountryCode.length === 4) {
    const ans = checkMobileNetwork(nextFourdigitfromCountryCode.join(""));
    displayNetwork(ans);
  } else if (firstFourDigit === "+234" && nextFourDigit.length === 3) {
    const anss = checkMobileNetwork(nextFourDigit.join(""));
    displayNetwork(anss);
  } else if (frstDigit === "0" && nextFourDigitFromNormalPhone.length === 4) {
    const myass = checkMobileNetwork(nextFourDigitFromNormalPhone.join(""));
    displayNetwork(myass);
  } else if (frstDigit === "0" && nextThreeDigit.length === 3) {
    const asss = checkMobileNetwork(
      checkMobileNetwork(nextThreeDigit.join(""))
    );
    displayNetwork(asss);
  }
});
