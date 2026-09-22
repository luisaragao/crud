let pessoas = []
let indiceEditando = -1

function adicionar() {
  let nome = document.getElementById("input-nome").value
  let email = document.getElementById("input-email").value
  let idade = document.getElementById("input-idade").value

  if (nome === "" || email === "" || idade === "") {
    alert("Preencha todos os campos!")
    return
  }

  if (indiceEditando === -1) {
    pessoas.push({ nome, email, idade })
  } else {
    pessoas[indiceEditando] = { nome, email, idade }
    indiceEditando = -1
    document.getElementById("btn-adicionar").innerText = "Adicionar"
  }

  limparInputs()
  renderizar()
}

function limparInputs() {
  document.getElementById("input-nome").value = ""
  document.getElementById("input-email").value = ""
  document.getElementById("input-idade").value = ""
}

function renderizar() {
  let tabela = document.getElementById("tabela")
  tabela.innerHTML = ""

  for (let i = 0; i < pessoas.length; i++) {
    tabela.innerHTML += `
      <tr>
        <td>${pessoas[i].nome}</td>
        <td>${pessoas[i].email}</td>
        <td>${pessoas[i].idade}</td>
        <td>
          <button onclick="editar(${i})">Editar</button>
          <button onclick="deletar(${i})">Deletar</button>
        </td>
      </tr>
    `
  }
}

function editar(i) {
  indiceEditando = i
  document.getElementById("input-nome").value = pessoas[i].nome
  document.getElementById("input-email").value = pessoas[i].email
  document.getElementById("input-idade").value = pessoas[i].idade
  document.getElementById("btn-adicionar").innerText = "Salvar"
}

function deletar(i) {
  pessoas.splice(i, 1)
  renderizar()
}