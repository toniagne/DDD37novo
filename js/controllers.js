angular.module('starter.controllers', ['ionic', 'ionic.contrib.ui.tinderCards'])

.controller('DashCtrl', function($scope) {})

.controller('ChatsCtrl', function($scope, Chats) {
  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  }
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})


.controller('Pesquisas', function($scope) {})

.controller('CardCtrl', function($scope, $ionicSwipeCardDelegate) {
  $scope.goAway = function() {
    var card = $ionicSwipeCardDelegate.getSwipeableCard($scope);
    card.swipe();
  };
})
        
.controller('Fastfood', function($scope, $stateParams, $http, $ionicPopup, $ionicLoading) { 
       $ionicLoading.show({
            content: 'Carregando Unidades',
            animation: 'fade-in',
            showBackdrop: true,
            maxWidth: 200,
            showDelay: 0
          });
      
         $http.get('http://www.ddd37.com.br/app/listagens/fastfood/', {params: {cidade: "Lagoa da Prata"}})
            .error(function(data){
                $ionicLoading.hide();
               console.log(data);
            })
            .success(function(data){
                $ionicLoading.hide();
                $scope.registros = data;
            });
})  

.controller('PesquisasCidade', function($scope, $stateParams, $http, $ionicPopup, $ionicLoading) {
	 $scope.cidadeSelecionada = $stateParams.cidadeSel;
	 $http.get('http://www.ddd37.com.br/app/listagens/banners/', {params: {cidade: $stateParams.cidadeSel}})
               .then(        
                function(res){
                  $scope.BannersCidade  = res.data;              
                }); 

     $scope.pesquisar = function(text){
     	 $ionicLoading.show({
            content: 'Carregando Unidades',
            animation: 'fade-in',
            showBackdrop: true,
            maxWidth: 200,
            showDelay: 0
          });
     	
         $http.get('http://www.ddd37.com.br/app/listagens/geral', {params: {cidade: $stateParams.cidadeSel, termo: text}})
            .error(function(data){
                $ionicLoading.hide();
               console.log(data);
            })
            .success(function(data){
                $ionicLoading.hide();
                $scope.registros = data;
            });
     }

})

.controller('Inicial', function($scope) {})
   

.controller('Curtaeganhe', function($scope, $stateParams, $http, $ionicPopup, $ionicLoading) { 
       $ionicLoading.show({
            content: 'Carregando Unidades',
            animation: 'fade-in',
            showBackdrop: true,
            maxWidth: 200,
            showDelay: 0
          });
      
         $http.get('http://www.ddd37.com.br/app/listagens/promocoes')
            .error(function(data){
                $ionicLoading.hide();
               console.log(data);
            })
            .success(function(data){
                $ionicLoading.hide();
                $scope.registros = data;
            });
})  

.controller('Eventos', function($scope, $stateParams, $http, $ionicPopup, $ionicLoading) { 
       $ionicLoading.show({
            content: 'Carregando Unidades',
            animation: 'fade-in',
            showBackdrop: true,
            maxWidth: 200,
            showDelay: 0
          });
      
         $http.get('http://www.ddd37.com.br/app/listagens/eventos/')
            .error(function(data){
                $ionicLoading.hide();
               console.log(data);
            })
            .success(function(data){
                $ionicLoading.hide();
                $scope.registros = data;
            });
})  

.controller('Classificados', function($scope) {})

.controller('CardCtrl', function($scope, TDCardDelegate) {
  $scope.cardSwipedLeft = function(index) {
    console.log('LEFT SWIPE');
    $scope.addCard();
  };
  $scope.cardSwipedRight = function(index) {
    console.log('RIGHT SWIPE');
    $scope.addCard();
  };

})

.controller('VerDetalhes', function($scope, $stateParams, $ionicPopup, Chats, TDCardDelegate) { 

   var cards  = [{
    title: 'Swipe down to clear the card',
    image: 'img/pic.png'
  }, {
    title: 'Where is this?',
    image: 'img/pic.png'
  }, {
    title: 'What kind of grass is this?',
    image: 'img/pic2.png'
  }, {
    title: 'What beach is this?',
    image: 'img/pic3.png'
  }, {
    title: 'What kind of clouds are these?',
    image: 'img/pic4.png'
  }]; 
var cardTypes = [
    { image: 'https://pbs.twimg.com/profile_images/546942133496995840/k7JAxvgq.jpeg' },
    { image: 'https://pbs.twimg.com/profile_images/514549811765211136/9SgAuHeY.png' },
    { image: 'https://pbs.twimg.com/profile_images/491995398135767040/ie2Z_V6e.jpeg' },
  ];

  $scope.cards = Array.prototype.slice.call(cardTypes, 0);

  $scope.cardDestroyed = function(index) {
    $scope.cards.splice(index, 1);
  };

  $scope.addCard = function() {
    var newCard = cardTypes[Math.floor(Math.random() * cardTypes.length)];
    newCard.id = Math.random();
    $scope.cards.push(angular.extend({}, newCard));
  }
 


     $scope.favoritar = function (data){
      var itens   =   data.split("*"); 
      var arrObjetos = [{strNome:itens[1], strEndereco:itens[2], strTelefone1:itens[3], strTelefone2:itens[4], strTelefone3:itens[5], pic:itens[6]}];
       Chats.incluiFavoritos(arrObjetos);    
          
    return $ionicPopup.alert({
                       title: 'ATENÇÃO.',
                       template: 'Você incluiu <b>'+itens[1]+'</b> na sua lista de favoritos.<br><br> Para você visualizar sua lista de favoritos, acesso o menu suspenso e toque em FAVORITOS.'
                     });
    }
  $scope.chat = Chats.get($stateParams.contato);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  }

 


});
