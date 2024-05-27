const cityName=document.getElementById('cityName');
const city_name=document.getElementById('city_name');
const submitbtn=document.getElementById('submitbtn');
const temp_status=document.getElementById('temp_status');
const temp=document.getElementById('temp');

const datahide=document.querySelector('.middle_layer');


const getInfo =async(event)=>{
    event.preventDefault();
    let cityval=cityName.value;

    if(cityval=='')
    {
        city_name.innerText=`plz write the name before search`;
        datahide.classList.add('data_hide');
    }
    else
    {
        
        try{
            let url=`https://api.openweathermap.org/data/2.5/weather?q=${cityval}&appid=19b53b66cc187e6f820408f255c7c3a4`;
            const response=await fetch(url);
            const data=await response.json();
            console.log(data);
            const arrdata=[data];

            city_name.innerHTML=`${arrdata[0].name}`;
            temp_real_val.innerText=arrdata[0].main.temp;
            temp_status.innerText=arrdata[0].weather[0].main;

            let tempMod=arrdata[0].weather[0].main;

            if(tempMod=="Sunny")
                {
                    temp_status.innerHTML="<i class='fas fa-sun' style='color:#eccc68'></i>"
                }
                else if(tempMod=="Clouds")
                {
                    temp_status.innerHTML="<i class='fas fa-cloud' style='color:#f1f2f6'></i>";
                }
    
                else if(tempMod=="Rainy")
                {
                    temp_status.innerHTML="<i class='fas fa-rain' style='color:#a4b0be'></i>";
                }
                else
                {
                    temp_status.innerHTML="<i class='fas fa-sun' style='color:#44c3de'></i>";
                }
                datahide.classList.add('data_hide');
               
        }
        catch
        {
            city_name.innerText=`plz enter the city name properly`;
            datahide.classList.add('data_hide');
        }
    }
}


submitbtn.addEventListener('click',getInfo);