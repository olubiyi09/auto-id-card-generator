const cardName = document.querySelector(".card-name");
const displayName = document.querySelector(".display-name");
const displayReg = document.querySelector(".display-reg");
const displayGen = document.querySelector(".display-gen");
const displayDept = document.querySelector(".display-dept");
const regNo = document.querySelector(".card-reg");
const gender = document.querySelector(".card-gender");
const dept = document.querySelector(".card-dept");
const studentImg = document.querySelector(".id-img");
const genBtn = document.querySelector(".gen-btn");
const mainContainer = document.querySelector(".main");
const cardSec = document.querySelector(".card-sec");
const cardPage = "cardpage.html";

genBtn.addEventListener("click", generateCard);

function generateCard(e) {
  e.preventDefault();

  // FORM VALIDATION
  if (
    cardName.value == "" ||
    regNo.value == "" ||
    gender.value == "" ||
    dept.value == ""
    // || document.querySelector(".img").value == ""
  ) {
    alert("Please enter your complete details");
  } else {
    // window.open(cardPage);
  }

  displayName.innerHTML = " " + cardName.value;
  displayReg.innerHTML = " " + regNo.value;
  displayGen.innerHTML = " " + gender.value;
  displayDept.innerHTML = " " + dept.value;
  //   console.log(cardName.value);
  mainContainer.style.display = "none";
  cardSec.style.display = "block";

  //   getcard();

  //   let newCard = {
  //     thename: cardName.value,
  //     registrationno: regNo.value,
  //     thegender: gender.value,
  //     department: dept.value,
  //   };

  //   cardsObj.push(newCard);
  //   localStorage.setItem("cards", JSON.stringify(cardsObj));

  //   displayCard();
}

// function getcard() {
//   let cards = localStorage.getItem("cards");
//   if (cards == null) {
//     cardsObj = [];
//   } else {
//     cardsObj = JSON.parse(cards);
//   }
// }

// function displayCard() {
//   getcard();

//   let html = "";
//   cardsObj.forEach(function (element) {
//     html += `
//       <div class="top">
//         <h1 class="id-header">ABC COLLEGE NIGERIA</h1>
//         <p>A Great Place To Learn</p>
//         <img class="id-img" src="./images/seyi (2).jpeg" alt="" />
//       </div>

//       <div class="down">
//         <div class="down-wrapper">
//           <div class="card-name">
//             <strong>Name:</strong> ${element.thename}
//           </div>
//           <div class="card-reg"><strong>Reg No:</strong> ${element.registrationno}</div>
//           <div class="card-gender"><strong>Gender:</strong> ${element.thegender}</div>
//           <div class="card-dept">
//             <strong>Dept:</strong> ${element.department}
//           </div>
//         </div>
//       </div>
//       <footer class="sec-footer">
//         School address: No 12 abc estate, Nigeria
//       </footer>

//         `;
//   });
//   //   let cardElm = document.querySelector(".card-wrapper");

//   if (cardsObj.length != 0) {
//     // cardWrapper.innerHTML = html;
//     console.log(cardWrapper);
//   }
//   console.log(html);
// }

// displayCard();
