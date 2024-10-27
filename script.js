const professionalsData = {
    pedreiro: [
      { name: "João Silva", rating: 4, comment: "Ótimo profissional, muito caprichoso!" },
      { name: "Carlos Souza", rating: 5, comment: "Excelente trabalho, recomendo!" }
    ],
    pintor: [
      { name: "Roberto Lima", rating: 3, comment: "Bom, mas atrasou um pouco." },
      { name: "Fernanda Costa", rating: 4, comment: "Trabalho bem feito e no prazo." }
    ],
    montador: [
      { name: "Marcos Oliveira", rating: 4, comment: "Muito cuidadoso com os móveis." },
      { name: "Ana Santos", rating: 5, comment: "Rápida e eficiente, trabalho impecável!" }
    ],
    drywall: [
      { name: "Lucas Almeida", rating: 2, comment: "Poderia ter feito um trabalho mais limpo." },
      { name: "Rafael Correia", rating: 3, comment: "Serviço razoável." }
    ],
    eletricista: [
      { name: "Pedro Menezes", rating: 5, comment: "Muito experiente, resolveu rápido!" },
      { name: "Alice Carvalho", rating: 4, comment: "Trabalho seguro e bem feito." }
    ],
    ar_condicionado: [
      { name: "Mário Santos", rating: 3, comment: "Instalação ok, mas faltou pontualidade." },
      { name: "Julia Lima", rating: 4, comment: "Ótima instalação, recomendo." }
    ]
  };
  
  function displayProfessionals() {
    const service = document.getElementById("serviceSelect").value;
    const professionalList = document.getElementById("professionalList");
    professionalList.innerHTML = '';
  
    if (service && professionalsData[service]) {
      // Ordena profissionais por rating de maior para menor
      const sortedProfessionals = professionalsData[service].sort((a, b) => b.rating - a.rating);
  
      sortedProfessionals.forEach(pro => {
        const professionalDiv = document.createElement("div");
        professionalDiv.className = "professional";
  
        const name = document.createElement("h3");
        name.textContent = pro.name;
        professionalDiv.appendChild(name);
  
        const ratingDiv = document.createElement("div");
        ratingDiv.className = "rating";
        ratingDiv.innerHTML = `Nota: <span class="stars">${"★".repeat(pro.rating)}${"☆".repeat(5 - pro.rating)}</span>`;
        professionalDiv.appendChild(ratingDiv);
  
        // Adiciona comentário
        const commentDiv = document.createElement("div");
        commentDiv.className = "comment";
        commentDiv.innerHTML = `<span class="comment-title">Comentário:</span> ${pro.comment}`;
        professionalDiv.appendChild(commentDiv);
  
        professionalList.appendChild(professionalDiv);
      });
    }
  }