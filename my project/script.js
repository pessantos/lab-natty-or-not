document.addEventListener("DOMContentLoaded", () => {
    // Adiciona um botão "Concluir" a cada item de treino
    document.querySelectorAll("ul li").forEach(item => {
        const button = document.createElement("button");
        button.textContent = "Concluir";
        button.style.marginLeft = "10px";
        button.addEventListener("click", () => {
            item.classList.toggle("completed");
            button.textContent = item.classList.contains("completed") ? "Desmarcar" : "Concluir";
        });
        item.appendChild(button);
    });
});

// Adiciona estilo para itens concluídos
const style = document.createElement("style");
style.textContent = `
    .completed {
        text-decoration: line-through;
        color: #999;
    }
`;
document.head.append(style);
