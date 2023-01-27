$(document).ready(function(){
    function delay(fn, ms) {
    let timer = 0;
    return function(...args) {
        clearTimeout(timer);
        timer = setTimeout(fn.bind(this, ...args), ms || 0);
    }
    }
    
    function toggleElem(object,divSearch){
    var value = object.val().toLowerCase();
        $(divSearch).filter(function() {
        $(this).toggle($(this).attr('data-original-title').toLowerCase().indexOf(value) > -1);

        if (value !== ''){
            console.log("found");
        }
    });
    };
    
    $('[data-toggle="tooltip"]').tooltip();
    
    $("#searchBar").on("keyup",delay(function(){
    
    toggleElem($(this),"#searchUser *");
    
    },350));
    
    $('#password, #re_password').on('keyup', function () {
    if ($('#password').val() == $('#re_password').val()) {
    
    $('#message').html('Not matching').css('color', 'red');
    
        $("#checkboxRegister").change(function() {
    
        if($(this).is(":checked")){
    
            $('#signUpSubmit').prop("disabled",false);
            $('#signUpSubmit').toggleClass('disabled',false);
    
        } else {
            $('#signUpSubmit').prop("disabled",true);
            $('#signUpSubmit').toggleClass('disabled',true);
        }
    
        }).change();

        } else
        $('#message').html('Matching').css('color', 'green');
    
        $('#signUpSubmit').prop("disabled",true);
        $('#signUpSubmit').toggleClass('disabled',true);
    
    });
    });