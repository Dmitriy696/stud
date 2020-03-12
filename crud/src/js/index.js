const id = document.getElementById('ID');
const age = document.getElementById('age');
const lastName = document.getElementById('lastName');
const firstName = document.getElementById('firstName');
const email = document.getElementById('email');
const phone = document.getElementById('phone');

const creatBtn = document.getElementById('create');
const updateBtn = document.getElementById('update');
const deleteBtn = document.getElementById('delete');

let personState = JSON.parse(localStorage.getItem('person_state'));
const radioBtn = document.getElementsByName('radio-group');

const users = [];
const usersId = [];

function checkAllInputs(arg1, arg2, arg3, arg4) {
    let localBoll;
    if (arg1 !== '' && arg2 !== '' && arg3 !== '' && arg4 !== '') {
        localBoll = true;
    } else if (arg1 === '' || arg2 === '' || arg3 === '' || arg4 === '') {
        localBoll = false;
    }
    return (localBoll);
}

function checkId(arg) {
    let localBoll;
    if(isFinite(arg)) {
        localBoll = true;
    } else {
        localBoll = false;
    }
    return (localBoll);
}

function checkAge(arg) {
    let localBoll;
    if(isFinite(arg)) {
        localBoll = true;
    } else {
        localBoll = false;
    }
    return (localBoll);
}

function checkFirstAndLastName(arg1, arg2) {
    let localBoll;
    if(!isFinite(arg1) && !isFinite(arg2)) {
        localBoll = true;
    } else {
        localBoll = false;
    }
    return (localBoll);
}

function checkIdValueOfID(value, arr) {
    let count = 0;
    let localBoll = true;
    if(arr.includes(value, 0) === true) {
        count++;
    }
    arr.push(value);
    if(count === 0) {
        return (localBoll);
    } else {
        return (!localBoll)
    }
}

function create() {
    if (!checkAllInputs(id.value, firstName.value, lastName.value, age.value)) {
        alert('Fill in all the fields!');
    } else if (!checkId(id.value)) {
        alert('ID must be a number!');
    } else if (!checkAge(age.value)) {
        alert('Age must be a number!');
    } else if (!checkFirstAndLastName(firstName.value, lastName.value)) {
        alert('First and last name field must not be a number!');
    } else if (!checkIdValueOfID(id.value, usersId)) {
        alert('A user with that id already exists!');
    } else {
        if(radioBtn[0].checked) {
            let user = {
                id: id.value,
                firstName: firstName.value,
                lastName: lastName.value,
                age: age.value,
                email: email.value,
                phone: phone.value
            };

            users.push(user);

            localStorage.setItem('person_state', JSON.stringify(users));

            const myDiv = document.getElementById('myDiv');
            const div = document.createElement('div');
            const div1 = document.createElement('div');
            const div2 = document.createElement('div');
            const div3 = document.createElement('div');
            const div4 = document.createElement('div');
            const div5 = document.createElement('div');
            const div6 = document.createElement('div');
            const div7 = document.createElement('div');

            div.className = 'user';
            div.id = user.id;

            div1.innerText = user.id;
            div2.innerText = user.firstName;
            div3.innerText =  user.lastName;
            div4.innerText = user.age;
            div5.innerText = user.email;
            div6.innerText = user.phone;

            div1.className = 'column id';
            div2.className = 'column first';
            div3.className = 'column last';
            div4.className = 'column age';
            div5.className = 'column email';
            div6.className = 'column phone';
            div7.className = 'user_line';

            div.append(div1);
            div.append(div2);
            div.append(div3);
            div.append(div4);
            div.append(div5);
            div.append(div6);
            div.append(div7);

            myDiv.append(div);
        } else if(radioBtn[1].checked) {
            alert('Index DB');
        } else {
            alert('Choose LS or IDB');
        }
    }
}

function update() {
    if (!checkAllInputs(id.value, firstName.value, lastName.value, age.value)) {
        alert('Запоните все поля');
    } else {
        if (usersId.length !== 0) {
            for (let i = 0; i < users.length; i++) {
                if (id.value === users[i].id) {
                    users[i].firstName = firstName.value;
                    users[i].lastName = lastName.value;
                    users[i].age = age.value;
                    users[i].email = email.value;
                    users[i].phone = phone.value;
                    let updateBlock = document.getElementById(id.value);
                    updateBlock.innerHTML = `<div class="column id">${users[i].id}</div><div class="column firstName">${users[i].firstName}</div><div class="column lastName">${users[i].lastName}</div><div class="column age">${users[i].age}</div><div class="column email">${users[i].email}</div><div class="column phone">${users[i].phone}</div>`;
                    updateBlock.className = 'user';
                    updateBlock.id = users[i].id;
                    localStorage.setItem('person_state', JSON.stringify(users));
                }
            }
        } else {
            for (let i = 0; i < personState.length; i++) {
                if (id.value === personState[i].id) {
                    personState[i].firstName = firstName.value;
                    personState[i].lastName = lastName.value;
                    personState[i].age = age.value;
                    personState[i].email = email.value;
                    personState[i].phone = phone.value;
                    let updateBlock = document.getElementById(id.value);
                    updateBlock.innerHTML = `<div class="column id">${personState[i].id}</div><div class="column firstName">${personState[i].firstName}</div><div class="column lastName">${personState[i].lastName}</div><div class="column age">${personState[i].age}</div><div class="column email">${personState[i].email}</div><div class="column phone">${personState[i].phone}</div>`;
                    updateBlock.className = 'user';
                    updateBlock.id = personState[i].id;
                    localStorage.setItem('person_state', JSON.stringify(personState));
                }
            }
        }
    }
}
function readLS() {
    if (radioBtn[0].checked) {
        const myDiv = document.getElementById('myDiv');
        for (let i = 0; i < personState.length; i++) {
            const div = document.createElement('div');
            div.className = 'user';
            div.id = personState[i].id;
            div.innerHTML += `<div class="column id">${personState[i].id}</div><div class="column first">${personState[i].firstName}</div><div class="column last">${personState[i].lastName}</div><div class="column age">${personState[i].age}</div><div class="column email">${personState[i].email}</div><div class="column phone">${personState[i].phone}</div>`;
            myDiv.append(div);
        }
    }
}

function dlt() {
    if(radioBtn[0].checked) {
        if (usersId.length !== 0) {
            if (usersId.indexOf(id.value) !== -1) {
                let elem = document.getElementById(id.value);
                elem.remove();
                for (let i = 0; i < users.length; i++) {
                    if (id.value === users[i].id) {
                        users.splice(i, 1);
                    }
                }
                for (let i = 0; i < usersId.length; i++) {
                    usersId.splice(i, 1);
                }
            }
            localStorage.setItem('person_state', JSON.stringify(users));
        } else {
            let cloneOfPersonState;
            cloneOfPersonState = personState;
            for (let i = 0; i < personState.length; i++) {
                if (id.value === personState[i].id) {
                    cloneOfPersonState.splice(i, 1);
                    let elem = document.getElementById(id.value);
                    elem.remove();
                }
            }
            localStorage.setItem('person_state', JSON.stringify(cloneOfPersonState));
        }
    } else if(radioBtn[1].checked) {
        alert('Oh, IDB is not ready :(');
    } else {
        alert('Choose LS or IDB');
    }
}

creatBtn.addEventListener('click', create);
radioBtn[0].addEventListener('click', readLS);
// updateBtn.addEventListener("click", update);
deleteBtn.addEventListener("click", dlt);