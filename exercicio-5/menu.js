let opcao = ""

do {
    opcao = prompt(
        "Seja bem-vindo(a)\n " +
        "\nEscolha ma das opções abaixo:" +
        "\n1. opção Um" +
        "\n2. opção Dois" +
        "\n3. opção Três" +
        "\n4. opção Quatro" +
        "\n5. Encerrar"
    )


    switch (opcao) {
        case "1":
        alert("Você escolheu a opção 1")
        break
        case "2":
            alert("Você escolheu a opção 2")
            break
        case "3":
            alert("Você escolheu a opção 3")
            break
        case "4":
            alert("Você escolheu a opção 4")
            break
        case "5":
            alert("Você escolheu encerrar.")
            alert("Encerrando...")
            break
        default:
            alert("Opção inválida")
    }
    } while (opcao !== "5")