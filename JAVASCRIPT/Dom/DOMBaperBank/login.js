//step-1: add click event by button click

document.getElementById('btn-submit').addEventListener('click', function()
{
    //step-2: get emailAddress
    const emailField = document.getElementById('user-email');
    const email = emailField.value;
    
    //step-3: get password
    //3.a : set id on the html element
    //3.b : get the element
    //3.c : get the value from the element

    const passwordField = document.getElementById('user-password');

    const password = passwordField.value;

    //step-4: verify email and password
    if(email === 'niloybiswass097@gmail.com' && password === '2024Niloy')
    {
        window.location.href = 'bank.html';
    }
    else
    {
        alert('Wrong Password');
    }

})