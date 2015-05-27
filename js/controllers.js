angular.module('starter.controllers', ['ionic', 'angular-carousel'])

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

.controller('Configuracoes', function($scope) {
  $scope.post = JSON.parse(window.localStorage['post'] || '{}');  

})

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

.controller('Orgaospublicos', function($scope, $stateParams, $http, $ionicPopup, $ionicLoading) { 
       $ionicLoading.show({
            content: 'Carregando Unidades',
            animation: 'fade-in',
            showBackdrop: true,
            maxWidth: 200,
            showDelay: 0
          });
      
        $http.get('http://www.ddd37.com.br/app/listagens/orgaospublicos')
            .error(function(data){
                $ionicLoading.hide();
               console.log(data);
            })
            .success(function(data){
                $ionicLoading.hide();
                $scope.registros = data;
            });
}) 

.controller('Aciasam', function($scope, $stateParams, $http, $ionicPopup, $ionicLoading) { 
       $ionicLoading.show({
            content: 'Carregando Unidades',
            animation: 'fade-in',
            showBackdrop: true,
            maxWidth: 200,
            showDelay: 0
          });
      
        $http.get('http://www.ddd37.com.br/app/listagens/aciasam/')
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

.controller('Inicial', function($scope, $sce) {
  $scope.siteartemaiz            = $sce.trustAsResourceUrl("http://www.artemaiz.com/");

})
   
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

.controller('VerDetalhes', function($scope, $stateParams, $ionicPopup, Chats) { 
 
$scope.myInterval = 3000;
  $scope.slides = [
    {
      image: 'http://lorempixel.com/400/200/'
    },
    {
      image: 'http://lorempixel.com/400/200/food'
    },
    {
      image: 'http://lorempixel.com/400/200/sports'
    },
    {
      image: 'http://lorempixel.com/400/200/people'
    }
  ];
 

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
