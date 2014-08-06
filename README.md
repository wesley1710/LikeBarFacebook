LikeBarFacebook
===============

Like Bar do Facebook com Avatar e botão curtir alinhados verticalmente com as fotos dos seguidores.

<h3>Como Usar</h3>

Este LikeBar foi feito para ser simples e fácil de usar tendo duas maneiras de ser usado, bastando apenas incluir o arquivo likebar.min.js no seu código:

```html
<script src="js/likebar.min.js"></script>
```

e inicializá-lo de uma das formar abaixo:

<h4>1 - Via HTML5</h4> 
Você deve atribuir a classe "likebarcontent" no elemento onde o Like Bar será exibido e criar um atributo "data-url" contendo a url completa da Fan Page do Facebook.

Exemplo: 
```html
<div class="likebarcontent" data-url="https://www.facebook.com/MinhaFanPage"></div>
```
        

<h4>2 - Via Jquery</h4>
```js
$("elemento").likeBar(settings);
```
