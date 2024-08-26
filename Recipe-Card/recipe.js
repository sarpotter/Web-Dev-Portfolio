const listings = document.getElementById("list-ingred");
const listings2 = document.getElementById("list-instruct");
const button1 = document.getElementById("bttn-ingred");
const button2 = document.getElementById("bttn-instruct");
const downloadButton = document.getElementById("download");
const naming = document.getElementById("first-ingredient");
const input1 = document.getElementById("ingred-input")
const input2 = document.getElementById("instruct-input")
const recipeTitle = document.getElementById("title");

button1.addEventListener("click", () => {
    const ingred = document.createElement("li");
    ingred.classList.add("ingredient");
    ingred.tabIndex = 0;
    listings.appendChild(ingred);
    ingred.innerHTML = input1.value;
    ingred.ariaLabel = input1.value;
    input1.value = "";

    ingred.addEventListener("click", () => {
      ingred.remove();
    });

    ingred.addEventListener("keydown", (e) => {
        if(e.code === "Backspace" || e.code === "Enter") {
          e.preventDefault();
          ingred.remove();
        }
    })
});

input1.addEventListener("keydown", (e) => {
  if(e.code === "Enter") {
    const ingred = document.createElement("li");
    ingred.classList.add("ingredient");
    ingred.tabIndex = 0;
    listings.appendChild(ingred);
    ingred.innerHTML = input1.value;
    ingred.ariaLabel = input1.value;
    input1.value = "";

    ingred.addEventListener("click", () => {
      ingred.remove();
    });

    ingred.addEventListener("keydown", (e) => {
      if(e.code === "Backspace" || e.code === "Enter") {
        e.preventDefault();
        ingred.remove();
      }
    })
      
  }
});

button2.addEventListener("click", () => {
  const instruct = document.createElement("li");
  instruct.classList.add("instruction");
  instruct.tabIndex = 0;
  listings2.appendChild(instruct);
  instruct.innerHTML = input2.value;
  instruct.ariaLabel = input2.value;
  input2.value = "";

  instruct.addEventListener("click", () => {
    instruct.remove();
  });

  instruct.addEventListener("keydown", (e) => {
    if(e.code === "Backspace" || e.code === "Enter") {
      e.preventDefault();
      instruct.remove();
    }
  })
    

})

input2.addEventListener("keydown", (e) => {
  if(e.code === "Enter") {
    const instruct = document.createElement("li");
    instruct.classList.add("instruction");
    instruct.tabIndex = 0;
    listings2.appendChild(instruct);
    instruct.innerHTML = input2.value;
    instruct.ariaLabel = input2.value;
    input2.value = "";

    instruct.addEventListener("click", () => {
      instruct.remove();
    });

    instruct.addEventListener("keydown", (e) => {
      if(e.code === "Backspace" || e.code === "Enter") {
        e.preventDefault();
        instruct.remove();
      }
    })
  }
})

downloadButton.addEventListener("click", () => {
  var recipe = new Object();
  var ingredClass = document.getElementsByClassName("ingredient");
  var instructClass = document.getElementsByClassName("instruction");
  var ingredArray = [];
  var instructArray = [];
  
  for(var i=0; i < ingredClass.length; i++){
      ingredArray.push(String(ingredClass[i].innerHTML));
  }

  for(var j=0; j < instructClass.length; j++) {
      instructArray.push(String(instructClass[j].innerHTML));
  }

  recipe.title = recipeTitle.value;
  recipe.ingredients = ingredArray;
  recipe.instructions = instructArray;

  writeRecipeToFile(recipe);
})

document.getElementById("reset").addEventListener("click", () => {
  input1.value = "";
  input2.value = "";
  recipeTitle.value = "";

  const ingredClass = document.querySelectorAll('.ingredient');
  const instructClass = document.querySelectorAll('.instruction');

  ingredClass.forEach(ing => {
    ing.remove();
  });

  instructClass.forEach(inst => {
    inst.remove();
  });

})

function writeRecipeToFile(recipe) {
    // taking from
    function download(text, filename){
      var blob = new Blob([text], {type: "text/html"});
      var url = window.URL.createObjectURL(blob);
      var a = document.createElement("a");
      a.href = url;
      a.download = filename;
      a.click();
      URL.revokeObjectURL(url);
    }
    const output = `
      <html>
        <head>
          <style>
            :root {
              font-family: Inter, Avenir, Helvetica, Arial, sans-serif;
            }
            h1 {
              background-color: rgb(15,35,57);
              color: white;
              padding: 16px;
              border-top-left-radius: 8px;
              border-top-right-radius: 8px;
            }
            .b-main {
              width: 600px;
              border-radius: 8px;
              box-shadow: 0 1px 3px rgba(0,0,0,.12), 0 1px 2px rgba(0,0,0,.24);
            }
            .b-content {
              padding: 16px;
              display: flex;
              gap: 16px;
            }
            .b-ingredients {
              flex: 1
            }
            .b-instructions {
              flex: 1'
            }
          </style>
        </head>
        <body>
          <main class="b-main">
            <h1>${recipe.title}</h1>
            <div class="b-content">
              <div class="b-ingredients">
                <strong>Ingredients</strong>
                <hr>
                ${
                  recipe.ingredients.map(i => (
                    `
                      <div>${i}</div>
                    `
                  )).join('')
                }
              </div>
              <div class="instructions">
                <strong>Instructions</strong>
                <hr>
                ${
                  recipe.instructions.map((i, index) => (
                    `
                      <div>${index+1}: ${i}</div>
                    `
                  )).join('')
                }
              </div>
            </div>
          </main>
        </body>
      </html>
    `;
    download(output, `recipe-card.html`);
  }
