
let newUser = {
    user:undefined,
    password: undefined,
    email: undefined,
    type: undefined
};
$(document).ready(()=> {
    console.log("hola"); console.log($());
    getAllInit();
});

function getAllInit(){
    let form = document.getElementById('idfrom');
    console.log(form)
    form.addEventListener('submit', (e)=>{
        e.preventDefault();
        newUser.user = $('#name').val();
        newUser.password = $('#password').val();
        newUser.email = $('#email').val();
        newUser.type = Number($('#type').val());
        console.log(newUser);
        $.post({
            url: pointer.createUser,
            type: 'POST',
            data: newUser,
            datatype:'JSON',
            success: (response) =>{
                console.log(response);
            }
        })
       
      
       
    });

}
