const superCarsLtdNZData = {
    "dealerships" : []
}

function AddDealership(){
    dealership = {"employees" : [], "cars" : []};
    superCarsLtdNZData.dealerships.push(dealership);
}

function AddEmployee(dealershipIndex, name, position, salary){
    superCarsLtdNZData.dealerships[dealershipIndex].employees.push({
        "name" : name, 
        "position" : position, 
        "salary" : salary
    });
}

function AddCar(dealershipIndex, model, make, year, price){
    superCarsLtdNZData.dealerships[dealershipIndex].cars.push({
        "model" : model,
        "make" : make,
        "year" : year,
        "price" : price
    });
}

AddDealership();
AddDealership();

AddEmployee(0, "John", "Mechanic", 98000);
AddEmployee(0, "Stacey", "Accountant", 85000);
AddCar(0, "Vitz", "Toyota", 2005, 4500);
AddCar(0, "Carola", "Toyota", 2007, 6700);
AddCar(0, "Caravan", "Nissan", 2003, 11000);

AddEmployee(1, "Mike", "Sales Rep", 116000);
AddEmployee(1, "Terry", "Accountant", 82000);
AddCar(1, "Murano", "Nissan", 2019, 25900);
AddCar(1, "X4", "BMW", 2023, 59900);
AddCar(1, "Maverick", "Ford", 2017, 43900);

console.log(superCarsLtdNZData);
console.log(superCarsLtdNZData.dealerships[0].employees[1]);
console.log(superCarsLtdNZData.dealerships[0].cars);
