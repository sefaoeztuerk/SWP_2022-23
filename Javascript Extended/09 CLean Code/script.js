// Function arguments (2 or fewer ideally)

const menuConfig = {
    title:'Foo',
    body:'Bar',
    buttonText:'Baz',
    cancelltable: true
};

function createMenu(menuConfig) {

}

// Functions should do one thing
function emailClients(clients){
   clients
    .filter(isClientActive)
    .forEach(email);
}

function isCLientACtive (client){
    const clientRecord = database.lookup(client);
    return clientRecord.isActive();
}

// Function names should say what they do
function addMonthToDate(month, date){
  
}

const date = new Date();
addMonthToDate(1, date);

// Functions should only be one level of abstraction
function tokenize(code){
    const REGEX = [

    ];

    const statements = code.split(' ');
    const tokens = [];
    REGEXES.forEach((REGEX) =>{
        statements.forEach((statement) =>{
            tokens.push( );
        });
    });
    return tokens;
}

function lexer(tokens){
    const ast = [];
    tokens.forEach((token) => {
        ast.push( );
    });
    return ast;
}

function ParseBetterJSAlternative(code){
    const tokens = tokenize(code);
    const ast = lexer(tokens);
    ast.forEach((node) => {

    });
}

// Remove duplicate code
function showList(employee) {
    developers.forEach((employee) =>{
        const expectedSalary = employee.calculateExpectedSalary();
        const experience = employee.getExperience();

        let portfolio = employee.getGithubLink();

        if (employee.type ==='manager') {
            portfolio = employee.getMBAProjects();
        }

        const data = {
            expectedSalary,
            experience,
            portfolio,
        };
    });
}

// Don't use flags as funtion parameters
function createFile(name) {
    fs.create(`./temp/${name}`);
}

function createTempFile(name) {
    fs.create(name);
}

