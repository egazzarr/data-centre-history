// video about
function playVideo() {
    var video = document.getElementById("myVideo");
    video.play();

    // Nascondi il pulsante di play dopo aver avviato la riproduzione
    var playButton = document.getElementById("playButton");
    playButton.style.display = "none";
}

// landing page
function redirectToHome() {
    window.location.href = "home.html";
}


document.addEventListener('DOMContentLoaded', function () {
    const navbar = document.querySelector('nav');
    const leftBox = document.getElementById('leftBox');
    const rightBox = document.getElementById('rightBox');

    window.addEventListener('scroll', function () {
        const navbarHeight = navbar.offsetHeight;
        const leftBoxTop = leftBox.getBoundingClientRect().top;
        const rightBoxTop = rightBox.getBoundingClientRect().top;

        // Verifica se il box di sinistra è sotto la navbar
        if (leftBoxTop < navbarHeight) {
            navbar.style.color = 'transparent'; // Rendi il testo trasparente
            navbar.style.webkitTextFillColor = 'red'; // Cambia il colore del testo usando una proprietà specifica di WebKit
            navbar.style.mixBlendMode = 'difference'; // Applica l'effetto di esclusione
        } else if (rightBoxTop < navbarHeight) {
            navbar.style.color = 'blue'; // Cambia il colore della navbar per il box di destra
            navbar.style.mixBlendMode = 'difference'; // Applica l'effetto di esclusione
        } else {
            navbar.style.color = 'black'; // Ripristina il colore predefinito del testo
            navbar.style.mixBlendMode = 'normal'; // Ripristina la modalità di miscelazione predefinita
        }
    });
});



document.addEventListener("DOMContentLoaded", function() {
    const clickableColumns = document.querySelectorAll('.clickable');
    const rightBox = document.querySelector('.right-box img');

    clickableColumns.forEach(column => {
        column.addEventListener('click', function() {
            const imagePath = column.dataset.image;
            rightBox.src = imagePath;
        });
    });
});


document.addEventListener("DOMContentLoaded", function() {
    // Trova tutte le voci cliccabili delle colonne REFERENCE e DESCRIPTION
    var clickableItems = document.querySelectorAll(".clickable");

    // Itera su ogni voce cliccabile
    clickableItems.forEach(function(item) {
        // Aggiungi un gestore di eventi per il clic
        item.addEventListener("click", function() {
            // Rimuovi la classe sottolineata da tutti gli elementi cliccabili
            clickableItems.forEach(function(item) {
                item.classList.remove("underline");
            });

            // Aggiungi la classe sottolineata all'elemento cliccato
            item.classList.add("underline");

            // Ottieni l'elenco di immagini associate dalla data attributo
            var imageUrls = item.getAttribute("data-image").split(',');
            var imageUrls = item.getAttribute("data-video").split(',');

            // Trova il box destro
            var rightBox = document.querySelector('.right-box');

            // Svuota il contenuto del box destro
            rightBox.innerHTML = '';

            // Itera su ogni URL dell'immagine e crea un elemento immagine per ciascuno
            imageUrls.forEach(function(url) {
                var imageElement = document.createElement("img");
                imageElement.src = url.trim(); // Rimuovi spazi bianchi intorno all'URL
                imageElement.alt = "Image";

                // Aggiungi un salto di riga prima di ogni immagine
                rightBox.appendChild(document.createElement("br"));
                
                // Aggiungi l'immagine al box destro
                rightBox.appendChild(imageElement);
            });
        });
    });
});




document.addEventListener("DOMContentLoaded", function() {
    const clickableItems = document.querySelectorAll('.clickable');
    const rightBoxImg = document.querySelector('.right-box img');

    clickableItems.forEach(item => {
        item.addEventListener('click', function(event) {
            event.preventDefault(); // Previeni il comportamento predefinito del link

            // Rimuovi la classe 'clicked' da tutti gli elementi cliccabili
            clickableItems.forEach(element => {
                element.classList.remove('clicked');
            });

            // Aggiungi la classe 'clicked' all'elemento cliccato
            item.classList.add('clicked');

            // Cambia l'immagine nel right-box
            const imagePath = item.dataset.image;
            rightBoxImg.src = imagePath;
        });
    });
});




// document.addEventListener("DOMContentLoaded", function() {
//     const nameItems = document.querySelectorAll('.column:nth-child(3) .clickable');
//     const rightBox = document.querySelector('.right-box');

//     nameItems.forEach(item => {
//         item.addEventListener('click', function(event) {
//             event.preventDefault(); // Previeni il comportamento predefinito del link

//             // Rimuovi la classe 'active' da tutti gli elementi 'clickable' nella colonna 'NAME'
//             nameItems.forEach(item => {
//                 item.classList.remove('active');
//             });

//             // Aggiungi la classe 'active' all'elemento cliccato
//             item.classList.add('active');

//             // Cancella il contenuto del right box
//             rightBox.innerHTML = '';

//             // Crea la griglia di immagini nel right box
//             const imageGrid = document.createElement('div');
//             imageGrid.classList.add('grid-container');

//             // Ottieni l'attributo 'data-type' dell'elemento cliccato
//             const dataType = item.getAttribute('data-type');

//             // Aggiungi immagini alla griglia in base al tipo di dati
//             if (dataType === 'griglia1') {
//                 // Aggiungi immagini per la prima griglia
//                 for (let i = 1; i <= 38; i++) {
//                     const image = document.createElement('img');
//                     image.src = `imggg/${i}.jpg`;
//                     image.alt = `Image ${i}`;
//                     imageGrid.appendChild(image);
//                 }
//             } else if (dataType === 'griglia2') {
//                 // Aggiungi immagini per la seconda griglia
//                 for (let i = 39; i <= 62; i++) {
//                     const image = document.createElement('img');
//                     image.src = `imggg/${i}.jpg`;
//                     image.alt = `Image ${i}`;
//                     imageGrid.appendChild(image);
//                 }
//             } else if (dataType === 'griglia3') {
//                 // Aggiungi immagini per la terza griglia
//                 for (let i = 63; i <= 86; i++) {
//                     const image = document.createElement('img');
//                     image.src = `imggg/${i}.jpg`;
//                     image.alt = `Image ${i}`;
//                     imageGrid.appendChild(image);
//                 }
//             } else if (dataType === 'griglia4') {
//                 // Aggiungi immagini per la terza griglia
//                 for (let i = 87; i <= 116; i++) {
//                     const image = document.createElement('img');
//                     image.src = `imgggg/${i}.jpg`;
//                     image.alt = `Image ${i}`;
//                     imageGrid.appendChild(image);
//                 }
//             }  
//             // Aggiungi la griglia di immagini al right box
//             rightBox.appendChild(imageGrid);
//         });
//     });
// });




window.onload = function() {
    var video = document.getElementById('myVideo');
    if (window.innerWidth <= 600) {
        video.play();
    }
};


document.addEventListener("DOMContentLoaded", function() {
    const clickableItems = document.querySelectorAll('.clickable');
    const rightBox = document.querySelector('.right-box');
    const leftBox = document.querySelector('.left-box');

    clickableItems.forEach(item => {
        item.addEventListener('click', function(event) {
            // Prevent the default link behavior
            event.preventDefault(); 
            
            // Check if the window width is less than or equal to 780px
            if (window.innerWidth <= 780) {
                // Hide the left-box
                leftBox.style.display = 'none';
                
                // Show the right-box
                rightBox.style.display = 'block';
                // Set the width of the right-box to 100% of the screen
                rightBox.style.width = '100%';
            }

            // Get the image or video paths from the data-image attribute
            const mediaPaths = item.dataset.image.split(',').map(path => path.trim());

            // Clear the content of the right box
            rightBox.innerHTML = '';

            // Iterate through each media path
            mediaPaths.forEach((path, index) => {
                // Create either an image or video element based on the file extension
                if (path.toLowerCase().endsWith('.jpg') || path.toLowerCase().endsWith('.jpeg') || path.toLowerCase().endsWith('.png')) {
                    // Create an image element
                    const imageElement = document.createElement('img');
                    imageElement.src = path;
                    imageElement.alt = "Image";
                    rightBox.appendChild(imageElement);
                } else if (path.toLowerCase().endsWith('.mp4') || path.toLowerCase().endsWith('.mkv')) {
                    // Create a video element
                    const videoElement = document.createElement('video');
                    videoElement.src = path;
                    videoElement.controls = true;
                    rightBox.appendChild(videoElement);
                }

                // Add space between images
                if (index !== mediaPaths.length - 1) {
                    const br = document.createElement('br');
                    br.style.marginBottom = '1cm'; // Add margin to create space
                    rightBox.appendChild(br);
                }
            });

        });
    });
});



$('.dot:nth-child(1)').click(function(){
    $('.inside').animate({
      'width' : '20%'
    }, 500);
  });
  $('.dot:nth-child(2)').click(function(){
    $('.inside').animate({
      'width' : '40%'
    }, 500);
  });
  $('.dot:nth-child(3)').click(function(){
    $('.inside').animate({
      'width' : '60%'
    }, 500);
  });
  $('.dot:nth-child(4)').click(function(){
    $('.inside').animate({
      'width' : '80%'
    }, 500);
  });
  if ($('#switch1').not(':checked')){
    $('.modal').wrap('<div class="mask"></div>')
      $('.mask').click(function(){
        $(this).fadeOut(300);
        $('.mask article').animate({
          'top' : '-100%'
        }, 300)
      });
  
      $('.dot').click(function(){
        var modal = $(this).attr('id');
        $('.mask').has('article.' + modal).fadeIn(300);
        $('.mask article.' + modal).fadeIn(0).animate({
          'top' : '10%'
        }, 300);
      });
  }
  $("#switch1").click(function(){
    if ($('#switch1').is(':checked')){
      $('.modal').unwrap('<div class="mask"></div>');
      $('.modal').hide();
      $('.modal').addClass('nobox');
      $('.dot').click(function(){
      var modal = $(this).attr('id');
      $('article.nobox').hide()
      $('article.nobox.' + modal).fadeIn(200)
      });
    } else {
      $('article').removeClass("nobox");
      $('.modal').wrap('<div class="mask"></div>')
      $('.mask').click(function(){
        $(this).fadeOut(300);
        $('.mask article').animate({
          'top' : '-100%'
        }, 300)
      });
  
      $('.dot').click(function(){
        var modal = $(this).attr('id');
        $('.mask').has('article.' + modal).fadeIn(300);
        $('.mask article.' + modal).fadeIn(0).animate({
          'top' : '10%'
        }, 300);
      });
    }
  })