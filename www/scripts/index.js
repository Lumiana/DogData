//Creating a database
$(document).on("ready", function () {
    databaseHandler.createDatabase();
});  

//Adding a user in table
function addUser() {
    var name = $("#txtUser").val();    
    var password = $("#txtPassword").val();            
    if (!name) {
        alert("Email is required");    
    }
    else {         
        var r = confirm("Username: " + name);        
        if (r == true) {
            userHandler.addUser(name, password);
            $("#txtUser").val("");
            $("#txtPassword").val("");
            location.href = "tabs.html"
            showInfo();
        }
    }
}

//Adding dog info into the database table
function addInfo() {
    var name = $("#txtName").val();
    var breed = $("#txtBreed").val();
    var breeder = $("#txtBreeder").val();
    if (!name) {
        alert("Name is required");
    }
    else {
        var r = confirm("Dog name: " + name + ", Breed:" + breed + ", Breeder:" + breeder);
        if (r == true) {
            $("#txtName").val("");
            $("#txtBreed").val("");
            $("#txtBreeder").val("");
            infoHandler.addInfo(name, breed, breeder);
            parent.document.querySelector('#frame').src = 'home.html';

        }
    }
}

//load content into iframe component
function loadframe(frame, uri) {
    document.querySelector('#' + frame).src = uri;
}
