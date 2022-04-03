'use strict';


(() => {
 const FIGURES_ENG=['rock','scissors','paper'];
 const FIGURES_RUS=['камень','ножницы','бумага'];
 const QUESTIONS_ENG=['','']
 const QUESTIONS_RUS=['','']

 function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}
  const Get_Figure=lang => {

  } ;
  const game=(language)  => {
  
      const result={
          player:0,
          computer:0
      };
   const langNAMES= language==='EN' || language==='ENG' ? FIGURES_ENG:FIGURES_RUS;
   const langQUESTIONS= language==='EN' || language==='ENG' ? QUESTIONS_ENG:QUESTIONS_RUS;
    return function start() {
      let  selectedOurIndex=-1;
      let selectWord = prompt("Усложненное задание 1  Чего вы выберите камень(к..) ножница(н..) бумаг(б..) ?", "");
      console.log('Чего вы выберите камень(к..) ножница(н..) бумаг(б..) ', selectWord);
         if ('камень'.indexOf(selectWord)==0)
         {
           console.log('ок камень');
           selectedOurIndex=0;
        //   alert('ок камень');
         }
         else if ('ножницы'.indexOf(selectWord)==0)
         {
           console.log('ок ножницы');
        //  alert('ок ножницы');
           selectedOurIndex=1;
           
         }
         else if ('бумага'.indexOf(selectWord)==0)
         {
           selectedOurIndex=2;
           console.log('ок бумага');
          // alert('ок бумага');
         }      
         else
         {
           start();
           return;
         } 
           
         let selectedtheirindex=getRandomIntInclusive(0,2);                
          if (selectedtheirindex==selectedOurIndex)
            {
               alert( 'Computer выбрал '+langNAMES[selectedtheirindex]+ " Вы выбрали "+langNAMES[selectedOurIndex]+ ' Ничье');
            }
            else   if ((selectedOurIndex+1==selectedtheirindex) || ((selectedtheirindex==0) && (selectedOurIndex==2)))
             { 
                 alert('Computer выбрал '+langNAMES[selectedtheirindex]+ " Вы выбрали "+langNAMES[selectedOurIndex] +' Вы выграли');
                 result.player++;
             }
             else  if ((selectedOurIndex==selectedtheirindex+1) || ((selectedtheirindex==2) && (selectedOurIndex==0)))
               {
                   alert('Computer выбрал '+langNAMES[selectedtheirindex]+ " Вы выбрали "+langNAMES[selectedOurIndex]+ ' Сomputer выграл');
                   result.computer++;
               }
            
 
     

             if (confirm('Закончить игру'))
             {
                if (confirm("Вы уверены"))
                 {
                  alert('ЧЕЛОВЕК '+result.player+' ВЫГРАЛ '+'\n КОМПЬЮТОР '+result.computer+' выграл');  
                  result.player=0;
                  result.computer=0;
                  return;  // этот return жизнь без этого никак .не будеть правилно работать
                 } 
                    else 
                    {
                      start();  
                    }       
             }
             else 
             { 
              start();              // recursive 
             }
      }
    }
  window.RPS=game;
})();

