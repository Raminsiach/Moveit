$(document).ready(function() {
    var popGroup = document.querySelectorAll('#popGroup line');
    var circle = document.querySelector('#circle');
    var tick = document.querySelector('#tick1');
    var tick2 = document.querySelector('#tick2');

    $('.succeed').click(function() {
        $('.success-modal').addClass('visible');
        Moveit.put(popGroup, {
          start: '0%',
          end: '0%',
          visibility: 0
        });
        Moveit.put(tick, {
          start: '0%',
          end: '0%',
          visibility: 0
        });
        Moveit.put(tick2, {
          start: '0%',
          end: '0%',
          visibility: 0
        });
        Moveit.put(circle, {
          start: '0%',
          end: '0%',
          visibility: 0
        });

        Moveit.animate(circle, {
            visibility: 1,
            start: '0%',
            end: '100%',
            duration: 1,
            delay: 0,
            timing: 'ease-out'
        })
        Moveit.animate(tick, {
            visibility: 1,
            start: '0%',
            end: '100%',
            duration: 0.2,
            delay: 0.5,
            timing: 'ease-out'
        })
        Moveit.animate(tick2, {
            visibility: 1,
            start: '0%',
            end: '80%',
            duration: 0.2,
            delay: 0.7,
            timing: 'ease-out'
        })
        Moveit.animate(popGroup, {
            visibility: 1,
            start: '20%',
            end: '60%',
            duration: 0.2,
            delay: 1.,
            timing: 'ease-in'
        }).animate(popGroup, {
            visibility: 1,
            start: '100%',
            end: '100%',
            duration: 0.2,
            delay: 1.2,
            timing: 'ease-in-out'
        });
    });
    $('.continue').click(function() {
        $('.success-modal').removeClass('visible');
    })
});
