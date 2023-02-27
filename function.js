var doces = document.getElementById("doces")
var contato = document.getElementById("contato")
var sobre = document.getElementById("sobre")
var local = document.getElementById("local")
var imgmain2 = document.getElementById("imgmain2")
var paragrafo1 = document.getElementById("paragrafo1")
var paragrafo2 = document.getElementById("paragrafo2")
var paragrafo3 = document.getElementById("paragrafo3")
var paragrafo4 = document.getElementById("paragrafo4")
var paragrafo5 = document.getElementById("paragrafo5")
var main1 = document.getElementById("mainimg")
var main2 = document.getElementById("divmainimg")
var maintext = document.getElementById("maintext")


doces.addEventListener("click", (event)=>{
    event.preventDefault()
    imgmain2.setAttribute("src", "cone-trufado-beijinho.jpg")
    paragrafo1.style.display = "none"
    paragrafo2.style.display = "none"
    paragrafo3.style.display = "none"
    paragrafo4.style.display = "none"
    paragrafo5.style.display = "none"
    imgmain2.style.display = ""
    main1.style.display = ""
    main2.style.display = ""
    imgmain2.style.backgroundColor = "#747F7F"
    main2.style.gap = "1rem"
    maintext.style.display = "none"
})

sobre.addEventListener("click", (event)=>{
    event.preventDefault()
    imgmain2.setAttribute("src", "cone-trufado-beijinho.jpg")
    paragrafo1.style.display = ""
    paragrafo1.innerText = "Bem Vindo ao CL Doces!"
    paragrafo2.style.display = ""
    paragrafo3.style.display = ""
    paragrafo4.style.display = ""
    paragrafo5.style.display = ""
    paragrafo2.innerText = "Olá, me chamo Cláudia e junto de meu Filho, Lucas, vendemos maravilhosos doces, feitos para melhorar seu dia!"
    paragrafo3.innerText = "Trabalhamos com Doces para situações casuais."
    paragrafo4.innerText = "Número de Telefone"
    paragrafo5.innerText = "Email"
    paragrafo4.style.display = ""
    imgmain2.style.display = "none"
    main1.style.display = "none"
    main2.style.display = "none"
    maintext.style.display = ""
})

contato.addEventListener("click", (event)=>{
    event.preventDefault()
    imgmain2.setAttribute("src", "cone-trufado-beijinho.jpg")
    paragrafo1.style.display = ""
    paragrafo2.style.display = "none"
    paragrafo3.style.display = "none"
    paragrafo1.innerText = "Nos chame nas nossas Redes de Contato!"
    paragrafo4.innerText = "Número de Telefone"
    paragrafo5.innerText = "Email"
    paragrafo4.style.display = ""
    paragrafo5.style.display = ""
    imgmain2.style.display = "none"
    main1.style.display = "none"
    main2.style.display = "none"
    maintext.style.display = ""
})

local.addEventListener("click", (event)=>{
    event.preventDefault()
    imgmain2.setAttribute("src", "cone-trufado-beijinho.jpg")
    paragrafo1.style.display = ""
    paragrafo2.style.display = ""
    paragrafo3.style.display = ""
    paragrafo1.innerText = "Localidades onde Trabalhamos:"
    paragrafo2.innerText = "Rio de Janeiro ➔"
    paragrafo3.innerText = "Duque de Caxias ➔"
    paragrafo4.innerText = "Doutor Laureano ➔"
    paragrafo5.innerText = "Rua da Gávea 138"
    paragrafo4.style.display = ""
    paragrafo5.style.display = ""
    imgmain2.style.display = "none"
    main1.style.display = "none"
    main2.style.display = "none"
    maintext.style.display = ""
})
