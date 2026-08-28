const faqContainer = document.querySelector("#faqContainer");
      const addBtn = document.querySelector("#addBtn");
      const clearBtn = document.querySelector("#clearBtn");

      const questionInput = document.querySelector("#questionInput");
      const answerInput = document.querySelector("#answerInput");

      const faqCount = document.querySelector("#faqCount");

      function updateCount() {
        faqCount.innerText = faqContainer.children.length;
      }

      faqContainer.addEventListener("click", function (e) {
        if (e.target.classList.contains("toggle-btn")) {
          const faq = e.target.parentElement.parentElement;

          const answer = faq.children[1];

          if (answer.style.display === "block") {
            answer.style.display = "none";
            e.target.innerText = "Show Answer";
          } else {
            answer.style.display = "block";
            e.target.innerText = "Hide Answer";
          }
        }

        if (e.target.classList.contains("delete-btn")) {
          const faq = e.target.parentElement;

          faq.remove();

          updateCount();
        }
      });

      addBtn.addEventListener("click", function () {
        const question = questionInput.value.trim();
        const answer = answerInput.value.trim();

        if (question === "" || answer === "") {
          alert("Please enter question and answer");
          return;
        }

        const faq = document.createElement("div");
        faq.classList.add("faq");

        const header = document.createElement("div");
        header.classList.add("faq-header");

        const h3 = document.createElement("h3");
        h3.innerText = question;

        const toggleBtn = document.createElement("button");
        toggleBtn.classList.add("toggle-btn");
        toggleBtn.innerText = "Show Answer";

        header.appendChild(h3);
        header.appendChild(toggleBtn);

        const answerPara = document.createElement("p");
        answerPara.classList.add("answer");
        answerPara.innerText = answer;

        const deleteBtn = document.createElement("button");
        deleteBtn.classList.add("delete-btn");
        deleteBtn.innerText = "Delete";

        faq.appendChild(header);
        faq.appendChild(answerPara);
        faq.appendChild(deleteBtn);

        faqContainer.appendChild(faq);

        questionInput.value = "";
        answerInput.value = "";

        updateCount();
      });

      clearBtn.addEventListener("click", function () {
        faqContainer.innerHTML = "";

        updateCount();
      });