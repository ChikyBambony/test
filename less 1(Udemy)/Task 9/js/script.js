window.addEventListener('DOMContentLoaded', function(){
    'use strict';
    let tab = document.querySelectorAll('.info-header-tab'),
        info = document.querySelector('.info-header'),
        tabcontent = document.querySelectorAll('.info-tabcontent');
    
    function hideTabContent(a) {
        for (let i = a; i < tabcontent.length; i++) {
            tabcontent[i].classList.remove('show');
            tabcontent[i].classList.add('hide');
        }
    } 
    
    hideTabContent(1);

    function showTabContent(b) {
        if (tabcontent[b].classList.contains('hide')) {
            tabcontent[b].classList.remove('hide');
            tabcontent[b].classList.add('show');
        }
    }

    info.addEventListener('click', function(event) {
        let target = event.target;
        if (target && target.classList.contains('info-header-tab')){
            for (let i = 0; i < tab.length; i++ ) {
                if (target == tab[i]) {
                    hideTabContent(0);
                    showTabContent(i);
                    break;
                }
            }
        }
    });


    // timer

    let deadline = '2020-02-01';
    function getTimeRemaning(endtime) {
        let t = Date.parse(endtime) - Date.parse(new Date()),
        seconds = Math.floor((t/1000) % 60),
        minutes = Math.floor((t/1000/60) % 60),
        hours = Math.floor((t/(1000*60*60)));
        
        if (t < 0) {
            seconds= '00';
            minutes = '00';
            hours = '00';
        }
        else if (seconds < 10){
            seconds = '0'+ seconds;
        }
        else if (minutes < 10){
            minutes = '0'+ minutes;
        }
        else if (hours < 10){
            hours = '0'+ hours;
        }
        return {
            'total': t,
            'hours' : hours,
            'minutes' : minutes,
            'seconds' : seconds
        };

    }

    function setColck(id, endtime) {
        let timer = document.getElementById(id),
            hours = timer.querySelector('.hours'),
            minutes = timer.querySelector('.minutes'),
            seconds = timer.querySelector('.seconds'),
            timeInterval = setInterval(updateClock, 1000);
            
               
            
        function updateClock () {
            let t = getTimeRemaning (endtime);
            hours.textContent = t.hours;
            minutes.textContent = t.minutes;
            seconds.textContent = t.seconds;

            if (t.total <= 0) {
                clearInterval(timeInterval);
            }
          
        }  
      
    }

    setColck('timer', deadline);
    
    // Modal

    let more = document.querySelector('.more'),
        overlay = document.querySelector('.overlay'),
        infoh = document.querySelector('.info'),
        moreBtn = document.querySelectorAll('.description-btn'),
        close = document.querySelector('.popup-close');
    
        // infoh.addEventListener('click', function(event){
        //     if ( event.target.className == 'info-tabcontent fade show')
        //     {console.log(event.target);}
            
        // });


        more.addEventListener('click', function() {
            overlay.style.display = 'block';
           this.classList.add('more-splash');
           document.body.style.overflow = 'hidden';
        });
        moreBtn.forEach(element => {
            element.addEventListener('click', function() {
                overlay.style.display = 'block';
                this.classList.add('more-splash');
                document.body.style.overflow = 'hidden';
            });
        });

    close.addEventListener('click', function() {
        overlay.style.display = 'none';
        more.classList.remove('more-splash');
        document.body.style.overflow = '';
    });
});