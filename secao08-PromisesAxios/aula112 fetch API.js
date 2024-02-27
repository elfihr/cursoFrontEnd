fetch('aula111Pag04.html').then(resposta => {
  if (resposta.status !==200)throw new Error('Deu erro 404')
  return resposta.text()
})
  .then(html =>console.log(html))
  .catch(e => console.log(e))


const request = obj => {
    return new Promise((resolve, reject) => {
    //1.XHR = xml http request, nome padrão usado(ajax)
      const xhr = new XMLHttpRequest();
      //2.Get:Pegar um conteudo 
      xhr.open(obj.method, obj.url, true);
      xhr.send();
  
      xhr.addEventListener('load', () => {
          //3.Status do get 
        if(xhr.status >= 200 && xhr.status < 300) {
          resolve(xhr.responseText);
        } else {
          reject(xhr.statusText);
        }
      });
    });
  };
  
  document.addEventListener('click', e => {
    const el = e.target;
    const tag = el.tagName.toLowerCase();
  
    if (tag === 'a') {
        //4.preventDefault = Previne que ele va para o Link
      e.preventDefault();
      carregaPagina(el);
    }
  });
  //Carrega Pagina Via AJAX
  async function carregaPagina(el) {
    //8.el é o elemento que o clique esta pegando
    const href = el.getAttribute('href');
   
    const objConfig = {
      //7.Pegando os obj.method, obj.url 
      method: 'GET',
      url: href
    };
    
    //====Promise criada na primeira linha====
    try {
      const response = await request(objConfig);
      carregaResultado(response);
    } catch(e) {
      console.log(e);
    }
    //=======================
  }
  //6.carrega responsta na classe repsultado no HTML?
  function carregaResultado(response) {
    const resultado = document.querySelector('.resultado');
    resultado.innerHTML = response;
  }
  
  //APENAS pra estudo pois o existe o AXEL que é menos verboso