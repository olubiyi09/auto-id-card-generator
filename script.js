const cardName = document.querySelector(".card-name");
const displayName = document.querySelector(".display-name");
const displayReg = document.querySelector(".display-reg");
const displayGen = document.querySelector(".display-gen");
const displayDept = document.querySelector(".display-dept");
const regNo = document.querySelector(".card-reg");
const gender = document.querySelector(".card-gender");
const dept = document.querySelector(".card-dept");
const genBtn = document.querySelector(".gen-btn");
const mainContainer = document.querySelector(".main");
const cardSec = document.querySelector(".card-sec");
const file = document.querySelector("#image-input");
const imgDiv = document.querySelector(".display-image");
const myWidth = 535;
const myheight = 500;
// const img = document.querySelector(".photo");
const cardPage = "cardpage.html";

genBtn.addEventListener("click", generateCard);

function generateCard(e) {
  e.preventDefault();

  // FORM VALIDATION
  if (
    cardName.value == "" ||
    regNo.value == "" ||
    gender.value == "" ||
    dept.value == "" ||
    document.querySelector(".img").value == ""
  ) {
    alert("Please enter your complete details");
  } else {
    displayName.innerHTML = " " + cardName.value;
    displayReg.innerHTML = " " + regNo.value;
    displayGen.innerHTML = " " + gender.value;
    displayDept.innerHTML = " " + dept.value;

    mainContainer.style.display = "none";
    cardSec.style.display = "block";
  }
}

file.addEventListener("change", (e) => {
  let imageFile = e.target.files[0];

  let reader = new FileReader();
  reader.readAsDataURL(imageFile);

  // console.log(reader);
  reader.onload = (e) => {
    let imageUrl = e.target.result;

    let image = document.createElement("img");
    image.classList.add("photo");
    image.src = imageUrl;

    image.onload = (e) => {
      const canvas = document.createElement("canvas");
      // let ratio = myWidth / e.target.width;
      canvas.width = myWidth;
      canvas.height = myheight;
      // canvas.height = e.target.height;

      const context = canvas.getContext("2d");
      context.drawImage(image, 0, 0, canvas.width, canvas.height);

      let newImageUrl = context.canvas.toDataURL("image/jpeg", 90);

      let newImage = document.createElement("img");
      newImage.classList.add("photo");
      newImage.src = newImageUrl;

      imgDiv.appendChild(newImage);
    };
  };
});

// file.addEventListener("change", function () {
//   const choosedFile = this.files[0];

//   if (choosedFile) {
//     const reader = new FileReader();

//     reader.addEventListener("load", function () {
//       img.setAttribute("src", reader.result);
//     });

//     reader.readAsDataURL(choosedFile);
//   }
// });
