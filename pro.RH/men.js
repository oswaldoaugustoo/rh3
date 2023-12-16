function salvarFormulario() {

    window.location.href = 'resultado.html';
  }
  
  function descartarFormulario() {
   
    document.getElementById("cadastroForm").reset();
    document.getElementById("preview").innerHTML = '';
  }
  
  function previewFoto() {
  
    var input = document.getElementById('foto');
    var preview = document.getElementById('preview');
  
    while (preview.firstChild) {
    }
    preview.removeChild(preview.firstChild);
  
    var files = input.files;
    for (var i = 0; i < files.length; i++) {
      var file = files[i];
      var reader = new FileReader();
  
      reader.onload = function (e) {
        var img = document.createElement('img');
        img.src = e.target.result;
        img.style.maxWidth = '100%';
        preview.appendChild(img);
      };
  
      reader.readAsDataURL(file);
    }
  }


  function preencherDados() {
    var queryParams = new URLSearchParams(window.location.search);
    
    document.getElementById("resultNome").innerText = queryParams.get("nome");
    document.getElementById("resultIdade").innerText = queryParams.get("idade");
    document.getElementById("resultTelefone").innerText = queryParams.get("telefone");
    document.getElementById("resultEmail").innerText = queryParams.get("email");
    document.getElementById("resultQualidades").innerText = queryParams.get("qualidades");
  
    var resultFoto = document.getElementById("resultFoto");
    var fotoPreview = document.getElementById("preview").innerHTML;
    resultFoto.innerHTML = fotoPreview;
  
    var resultCurriculo = document.getElementById("resultCurriculo");
    var curriculoFile = queryParams.get("curriculo");
    resultCurriculo.href = curriculoFile;
    resultCurriculo.innerText = curriculoFile.substring(curriculoFile.lastIndexOf("/") + 1);
  }
  
 
  if (window.location.pathname.includes("resultado.html")) {
    preencherDados();
  }
  