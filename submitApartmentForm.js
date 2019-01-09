// submitFormID
function submitForm(){
    const AXinstance = axios.create({
        baseURL: 'https://shotafim-6ad19.firebaseio.com//'
    });
    let firstCheck = 1;
    let data = {};

    const firstName = $('#firstnameID')[0].value;
    const lastName = $('#lastnameID')[0].value;
    
    if(firstName === "" || lastName === "" ){
        console.log('required')
        $('.marked').addClass('required');
        firstCheck = 0;
    }
    const agreement = $('#agreementID:checkbox:checked').length;
    if (agreement === 1 && firstCheck === 1){
        data ={agreement:agreement,
                    firstName: firstName,
                    lastName: lastName,
                    timestamp: (new Date()).getTime()   
            }
        AXinstance.post('/apartmentRequest.json', data).then(response => {
            console.log(response);
        }).catch(error =>{
            console.log(error);
        });
    }
}