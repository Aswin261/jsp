const btn = document.getElementById("generate");
const lengthEl = document.getElementById("length");
const uppercaseEl = document.getElementById("uppercase");
const lowercaseEl = document.getElementById("lowercase");
const numberEl = document.getElementById("numbers");
const symbolEl = document.getElementById("symbols");
const clipboardEl = document.getElementById("clipboard");
const resultEl = document.getElementById("result");

const randomFunc = {
  lower: getRandomLower,
  upper: getRandomUpper,
  number: getRandomNumber,
  symbol: getRandomSymbol,
};

clipboardEl.addEventListener("click", () => {
  const password = resultEl.innerText;
  if (!password) {
    return password;
  }
  navigator.clipboard.writeText(password);
  window.alert("password copied to clipboard", password);
});

btn.addEventListener("click", () => {
  const length = lengthEl.value;
  const lower = lowercaseEl.checked;
  const upper = uppercaseEl.checked;
  const number = numberEl.checked;
  const symbol = symbolEl.checked;
  resultEl.innerText = generatePassword(lower, upper, number, symbol, length);
});

function generatePassword(lower, upper, number, symbol, length) {
  generatedPassword = "";
  const typecount = lower + upper + number + symbol;
  //   .log(typecount);
  const typeArr = [{ lower }, { upper }, { number }, { symbol }].filter(
    (item) => Object.values(item)[0]
    //   console.log(Object.values(item)[0]);
  );
  //   console.log(typeArr);
  if (typecount === 0) {
    return "nothing";
  }
  for (let i = 0; i < length; i += typecount) {
    typeArr.forEach((type) => {
      const funcName = Object.keys(type)[0];
      //   console.log(funcName);
      generatedPassword += randomFunc[funcName]();
      console.log(generatedPassword);
    });
  }
  const finalPwd = generatedPassword.slice(0, length);
  return finalPwd;
}

function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}
// .log(getRandomUpper());

function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}
// .log(getRandomNumber());

function getRandomSymbol() {
  const symbol = "!@#$%^&*(){}=<>/,.";
  return symbol[Math.floor(Math.random() * symbol.length)];
  //   return String.fromCharCode(Math.floor(Math.random() * symbol.length));
}
// .log(getRandomSymbol());

//toggler
const toggles = document.querySelectorAll(".toggle");
const good = document.querySelector("#good");
const cheap = document.querySelector("#cheap");
const fast = document.querySelector("#fast");

toggles.forEach((toggle) =>
  toggle.addEventListener("change", (e) => disabler(e.target))
);
function disabler(passed) {
  if (good.checked && cheap.checked && fast.checked) {
    if (good === passed) {
      fast.checked = false;
    }
    if (cheap === passed) {
      good.checked = false;
    }
    if (fast === passed) {
      cheap.checked = false;
    }
  }
}
