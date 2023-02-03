//variávei globais que podem ser utilizadas em qualquer lugar do código

var entrada, texto;

//função que inicaliza
function setup(){
    createCanvas(windowWidth, windowHeight); //largura e altura ajustam automáticamente
    background("#008F8C");

    entrada = createInput();
    entrada.position (windowWidth/2-120, windowHeight/2);

    texto = createElement('h3', 'Informe um Carro');
    texto.position(windowWidth/2-150, windowHeight/2-50);
}

//função que executa
function draw(){

   //variável local, só pode ser utilizada dentro desta função
   var num = entrada.value(); 

   switch (num) {
    case 'hyundai':
        //faça alguma coisa
        //var textResp = createElement('h3', 'É par');
        //textResp.position(windowWidth/2+80, windowHeight/2-20);
        recarregar();
        break;
    case 'jeep':
        //var textResp = createElement('h3', 'É par');
        //textResp.position(windowWidth/2+80, windowHeight/2-20);
        recarregar();
        break;
    case 'ford':
        //var textResp = createElement('h3', 'É par');
        //textResp.position(windowWidth/2+80, windowHeight/2-20);
        recarregar();
        break;
    case 'nissan':
        //var textResp = createElement('h3', 'É par');
        //textResp.position(windowWidth/2+80, windowHeight/2-20);
        recarregar();
        break;
    case 'peugeot':
        //var textResp = createElement('h3', 'É par');
        //textResp.position(windowWidth/2+80, windowHeight/2-20);
        recarregar();
        break;
    case 'porsche':
        //var textResp = createElement('h3', 'É par');
        //textResp.position(windowWidth/2+80, windowHeight/2-20);
        recarregar();
        break;
    default:
        break;
   }
}


function recarregar(){
    swal
    (
        {
            title: `LOOOOOL`,
            imageUrl: 
                "https://gartic.com.br/imgs/mural/is/isaah_gata/memes.png",
            imageSize: "150x150",
            confirmButtonText: "Clique para reiniciar"
        },
        function(isConfirm){
            if(isConfirm){
                Location.reload(); //função que recarrega a página
            }
        }
    )
}