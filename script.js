var request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v2/all")
request.send();
request.onload = function(){
    var result=JSON.parse(request.response)
// a.Get all the countries from the Asia continent /region using the Filter function
    var res1=result.filter((ele)=>ele.region=='Asia');
    console.log(res1);
// b.Get all the countries with a population of less than 2 lakhs using Filter function
    var res2=result.filter((ele)=>ele.population<200000);
    console.log(res2);

// c.Print the following details name, capital, flag using forEach function
    result.forEach(ele => console.log(ele.name,ele.capital,ele.flags));

// d.Print the country which uses US Dollars as currency

    let res4 = result.filter((dollar) => (dollar.currencies[0].name === "United States dollar"))
    console.log(res4)
    
}