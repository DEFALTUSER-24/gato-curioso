var userName = "";
var isLoading = false;
var serverUrl = "https://gatocurioso.000webhostapp.com?"; // Reemplazar la URL

/**************************************** On loads ****************************************/

$(document).on("ready", function () {
    InsertDefaultData();

    $('#datosCuriososDiv').on('click', function () {
        SendToAPI("curiosities", new Array(), function (r) {
            $("#datosPop > #randomData").text(r.data.random_data);
            $("#datosPop").popup("open");
        });
    });

    $('a[href="#down"]').on('click', function () {
        $(this).closest("div[data-role='navbar']").find("[data-role='listview']").slideToggle();
        $(this).toggleClass("btn-plus-active");
        $(this).closest("[data-role='page']").find(".lvBackground").fadeToggle();
    });

    $(".lvBackground").on('click', function () {
        $(this).closest("[data-role='page']").find("[data-role='footer']").find("[data-role='listview']").slideToggle();
        $(this).closest("[data-role='page']").find("div[data-role='navbar']").find("ul:nth-child(2)").find("[href='#down']").toggleClass("btn-plus-active");
        $(this).fadeToggle();
    });

    $('[data-role="footer"] > [data-role="navbar"] > ul:nth-child(2) > li > a').on('click', function () {
        if ($(this).attr("href") != "#down") {
            $(this).closest("[data-role='page']").find(".lvBackground").hide();
            $(this).closest("div[data-role='navbar']").find("[data-role='listview']").hide();
            $(this).closest("div[data-role='navbar']").find("ul:nth-child(2)").find("[href='#down']").removeClass("btn-plus-active");
        }
    });

    $('a[href="#addPet"]').on('click', function () {
        $(this).closest("ul[data-role='listview']").hide();
        $(this).closest("div[data-role='navbar']").find("ul:nth-child(2)").find("[href='#down']").removeClass("btn-plus-active");
        $(this).closest("[data-role='page']").find(".lvBackground").fadeOut();
    });

    $('a[href="#pets"]').on('click', function () {
        $(this).closest("ul[data-role='listview']").hide();
        $(this).closest("div[data-role='navbar']").find("ul:nth-child(2)").find("[href='#down']").removeClass("btn-plus-active");
        $(this).closest("[data-role='page']").find(".lvBackground").fadeOut();
    });

    $('a[href="#togglePanel"]').on('click', function () {
        $(this).closest("[data-role='page']").find("div[data-role='panel']").panel("toggle");
    });

    $('#editSelectedPet [name="catName"]').keyup(function () {
        SetSessionData("selectedCatName", $(this).val())
    });

    $('#editSelectedPet [name="catPhone"]').keyup(function () {
        SetSessionData("selectedCatPhone", $(this).val())
    });

    $('#editSelectedPet [name="catChip"]').keyup(function () {
        SetSessionData("selectedCatChip", $(this).val())
    });

    $('#editPetPop input[name="newImg"]').on('change', function (e) {
        var archivoSeleccionado = e.target.files[0],
            tipoDeArchivo = /image.*/;

        if (!archivoSeleccionado.type.match(tipoDeArchivo)) {
            alert("El archivo seleccionado no es una imagen");
            return;
        }

        ToggleLoading();
        var reader = new FileReader();
        reader.readAsDataURL(archivoSeleccionado);
        reader.onload = ConvertImage;
        $("#editPetPop").popup("close");
    });

    $('#addPetPop input[name="newImg"]').on('change', function (e) {
        var archivoSeleccionado = e.target.files[0],
            tipoDeArchivo = /image.*/;

        if (!archivoSeleccionado.type.match(tipoDeArchivo)) {
            alert("El archivo seleccionado no es una imagen");
            return;
        }

        ToggleLoading();
        var reader = new FileReader();
        reader.readAsDataURL(archivoSeleccionado);
        reader.onload = ConvertImage;
        $("#addPetPop").popup("close");
    });

    $("#registerForm").on("submit", function (e) {
        var form = $(this), data = form.serializeArray();
        e.preventDefault();

        SendToAPI("register", data, function (r) {
            if (r.success) {
                SetData("userProfile", {
                    userName: form.find("[name='username']").val(),
                    email: form.find("[name='registerEmail']").val()
                });
                userName = form.find("[name='registerEmail']").val();
                ShowInfoBox("Registro exitoso.", function () {
                    Navigate("#home");
                })
            } else {
                ShowInfoBox(r.data.errorDesc);
            }
        })
    });

    $("#loginForm").on("submit", function (e) {
        var form = $(this), data = form.serializeArray();
        e.preventDefault();

        SendToAPI("login", data,function (r) {
            if (r.success) {
                SetData("userProfile", {
                    userName: r.data.user_name,
                    birthDate: r.data.user_birthdate,
                    Sex: r.data.sex,
                    sexID: r.data.user_sex,
                    email: r.data.user_email
                });
                userName = r.data.user_email;
                form.trigger("reset");
                Navigate("#home");
            } else {
                ShowInfoBox(r.data.errorDesc, function () {
                    form.find("[name='loginEmail']").val("");
                    form.find("[name='loginPassword']").val("");
                });
            }
        },function () {
            form.trigger("reset");
        });
    });
});

$(document).on("pagebeforeshow", function () {
    VerifyUserProfile();

    switch (GetActiveSection()) {
        case "profile":
            {
                var sex = GetProfileData("Sex");
                if (isEmpty(sex))
                    sex = "";

                $(".usersex").children("span").text(sex);
                $(".userbday").children("span").text(FormatDate(GetProfileData("birthDate")));
                $(".useremail").children("span").text(userName);
                CancelSessionEdit();
                break;
            }
        case "profileEdit":
            {
                profileEditBehaviour();
                break;
            }
        case "home":
            {
                HomePetList();
                CancelSessionEdit();
                break;
            }
        case "pets":
            {
                MainPetList();
                CancelSessionEdit();
                break;
            }
        case "addPet":
            {
                ObtainNewPetInfo();
                $("#addPetPop").find("[name='newImg']").val('');
                break;
            }
        case "editSelectedPet":
        case "petSelected":
            {
                ObtainPetInfo();
                $("#editPetPop").find("[name='newImg']").val('');
                break;
            }
        case "petFood":
            {
                GetPetFoodList();
                break;
            }
        case "petpedia":
            {
                CancelSessionEdit();
                break;
            }
        case "addVaccine":
            {
                NewVaccineInfo();
                break;
            }
        case "petVaccines":
            {
                GetPetVaccinesList();
                break;
            }
        case "petVetVisits":
            {
                GetPetVetVisits();
                break;
            }
        case "viewVisitDetails":
            {
                ObtainVisitDetails();
                break;
            }
        case "breedList":
        {
            if ($("#breedListContent").children().length == 0) {
                SendToAPI("breedList", new Array(), function (r) {
                    var row = '<div class="ui-block-a">', finalContent = "", length = Object.keys(r.data).length;
                    for(var i = 0; i < length; i++) {
                        if (i != 0) {
                            if (i % 2 == 0)
                                row = '<div class="ui-block-a">';
                            else
                                row = '<div class="ui-block-b">';
                        }

                        finalContent += row + '<div class="breedCard" id="' + parseInt(i + 1) + '" onclick="SubmitBreedEdit($(this));">' +
                            '<div class="card-inner"><img src="' + r.data[i].picture + '" alt="' + r.data[i].name + '">' +
                            '</div><h2>' + r.data[i].name + '</h2></div></div>';
                    }
                    $("#breedListContent").html(finalContent);
                }, function () {
                    ToggleLoading();
                    Navigate("#home");
                });
            }
            break;
        }
        case "foodList":
        {
            if ($("#foodListContent").children().length == 0) {
                SendToAPI("foodList", new Array(), function (r) {
                    var finalContent = "", length = Object.keys(r.data).length;
                    for(var i = 0; i < length; i++) {
                        finalContent += '<li onclick="AddFoodToPet($(this));" class="ui-li-static ui-body-inherit ui-li-has-thumb ui-first-child foodList foodList-noicon">' +
                            '<img src="' + r.data[i].picture + '" /><a href="#" class="ui-btn-icon-right ">' + r.data[i].name + '</a></li>';
                    }
                    $("#foodListContent").html(finalContent);
                }, function () {
                    ToggleLoading();
                    Navigate("#home");
                });
            }
            break;
        }
        case "vaccineTypes":
        {
            if ($("#vaccineTypeSelection").children().length == 0) {
                SendToAPI("vaccineTypes", new Array(), function (r) {
                    var finalContent = "", length = Object.keys(r.data).length;
                    for(var i = 0; i < length; i++) {
                        finalContent += '<option value="' + r.data[i].id + '">' + r.data[i].type + '</option>';
                    }
                    $("#vaccineTypeSelection").html(finalContent);
                }, function () {
                    ToggleLoading();
                    Navigate("#home");
                });
            }
            break;
        }
        case "catColour":
        {
            if ($("#catColourSelection").children().length == 0) {
                SendToAPI("colourList", new Array(), function (r) {
                    var finalContent = "", length = Object.keys(r.data).length;
                    for(var i = 0; i < length; i++) {
                        finalContent += '<option value="' + r.data[i].id + '">' + r.data[i].colour + '</option>';
                    }
                    $("#catColourSelection").html(finalContent);
                }, function () {
                    ToggleLoading();
                    Navigate("#home");
                });
            }
            break;
        }
        case "catGenre":
        {
            if ($("#catGenreSelection").children().length == 0) {
                SendToAPI("genreList", new Array(), function (r) {
                    var finalContent = "", length = Object.keys(r.data).length;
                    for(var i = 0; i < length; i++) {
                        finalContent += '<option value="' + r.data[i].id + '">' + r.data[i].genre + '</option>';
                    }
                    $("#catGenreSelection").html(finalContent);
                }, function () {
                    ToggleLoading();
                    Navigate("#home");
                });
            }
            break;
        }
    }
});

/**************************************** Funciones generales ****************************************/

function isEmpty(value) {
    return typeof value == 'string' && !value.trim() || typeof value == 'undefined' || value === null;
}

function IsSectionActive(id) {
    return $.mobile.activePage.attr("id") === id;
}

function GetActiveSection() {
    return $.mobile.activePage.attr("id");
}

function Navigate(where) {
    $.mobile.navigate(where);
}

function PressBack() {
    $("#" + GetActiveSection() + " > header > a[data-rel='back']").click();
}

function FormatDate(date) {
    if (!isEmpty(date)) {
        finalDate = date.split("-");
        return finalDate[2] + "/" + finalDate[1] + "/" + finalDate[0];
    }
    else { return ""; }
}

function DaysBetween(date1, date2) {
    return Math.abs(date1.getTime() - date2.getTime()) / (1000 * 60 * 60 * 24);
}

function ConvertImage(e) {
    var imgBase64 = e.target.result;
    var canvas = document.createElement('canvas');
    var ctxCanvas = canvas.getContext('2d');
    if (ctxCanvas) {
        var img = new Image();
        img.src = imgBase64;
        img.onload = function () {
            var ancho = parseInt(img.width);
            var alto = parseInt(img.height);
            canvas.width = ancho;
            canvas.height = alto;
            ctxCanvas.drawImage(img, 0, 0, ancho, alto);
            $("#newPetImg").attr("src", canvas.toDataURL("image/jpeg", 0.5));
            $("#editPetImg").attr("src", canvas.toDataURL("image/jpeg", 0.5));
            SetSessionData("tempImgFile", canvas.toDataURL("image/jpeg", 0.5));
            ToggleLoading();
        }
    }
    else { alert("Error al convertir foto"); }
}

function ToggleLoading() {
    isLoading = !isLoading;
    $(".loader").toggle();
}

function ShowInfoBox(message, onAccept = function () {}) {
    alert(message);
    onAccept();
}

function SendToAPI(get, data, actionOnSuccess = function () {}, actionOnFail = function () {}, shouldToggleLoading = true) {
    if (!isLoading && shouldToggleLoading)
        ToggleLoading();

    if (userName)
        data.push({name: "username", value: userName});

    $.post(serverUrl + get, data, actionOnSuccess)
        .fail(function () {
            ShowInfoBox("Ocurrió un error al ejecutar la solicitud, volvé a intentar más tarde.", actionOnFail());
        })
        .always(function () {
            if (shouldToggleLoading)
                ToggleLoading();
        });
}

/**************************************** localStorage ****************************************/

function GetData(where) {
    var array = JSON.parse(localStorage.getItem(where));
    if (!isEmpty(array))
        return array;
    else
        return false;
}

function SetData(where, array) {
    localStorage.setItem(where, JSON.stringify(array));
}

function InsertDefaultData() {
    if (!GetData("pets")) {
        SetData("userProfile", new Array());
        SetData("pets", new Array());
    }
}

/**************************************** sessionStorage ****************************************/

function GetSessionData(where) {
    var data = sessionStorage.getItem(where);
    if (!isEmpty(data))
        return data;
    else
        return "";
}

function SetSessionData(where, data) {
    sessionStorage.setItem(where, data);
}

function CancelSessionEdit() {
    sessionStorage.clear();
    $("[href='#addPetPop'] > img").attr("src", "img/photo-camera.png");
    $("#addPet").find("[name='catName']").val("");
    $("#addPet").find("[name='catPhone']").val("");
    $("#addPet").find("[name='catChip']").val("");
}

/**************************************** Perfil de usuario  ****************************************/

function Logout() {
    if (confirm("¿Confirmás salida del sistema?")) {
        userName = "";
        SetData("userProfile", new Array());
        SetData("pets", new Array());
        Navigate("#newUser");
    }
}

function ToggleRegisterForm() {
    var loginForm = $("#loginForm");
    var registerForm = $("#registerForm");
    if (registerForm.is(":visible"))
        registerForm.fadeToggle("fast", function () { loginForm.fadeToggle(); });
    else
        loginForm.fadeToggle("fast", function () { registerForm.fadeToggle(); });

    loginForm.trigger("reset");
    registerForm.trigger("reset");
}

function GetProfileData(dataToGet) {
    return GetData("userProfile")[dataToGet];
}

function VerifyUserProfile() {
    userName = GetProfileData("email");
    if (isEmpty(userName)) {
        Navigate("#newUser");
        $(".center-content").fadeIn();
    }
    else {
        $(".center-content").hide();
        if (IsSectionActive("newUser"))
            Navigate("#home");
        else {
            $(".username").each(function () {
                $(this).children("span").text(GetProfileData("userName"));
            });
            if (IsSectionActive("home"))
                document.title = "Home";
        }
    }
}

function SubmitProfileEdit() {
    var inputVal = "", data = new Array(), editing = GetSessionData("editing");
    data.push({name: "editType", value: editing});
    switch (editing) {
        case "profileName":
            {
                inputVal = $("#profileEditName").val();
                if (!isEmpty(inputVal)) {
                    data.push({name: "fieldToEdit", value: "user_name"});
                    data.push({name: "fieldValue", value: inputVal});

                    SendToAPI("editProfile", data, function (r) {
                        if (r.success)
                        {
                            var profile = GetData("userProfile");
                            profile["userName"] = inputVal;
                            SetData("userProfile", profile);
                            Navigate("#profile");
                        }
                        else { ShowInfoBox(r.data.errorDesc); }
                    }, function (r) {
                        ShowInfoBox(r.data.errorDesc);
                    });
                }
                else { alert("El campo no puede estar vacio"); }
                break;
            }
        case "profileSex":
            {
                inputVal = $("#profileEditSex").val();
                if (!isEmpty(inputVal)) {
                    data.push({name: "fieldToEdit", value: "user_sex"});
                    data.push({name: "fieldValue", value: inputVal});

                    SendToAPI("editProfile", data, function (r) {
                        var profile = GetData("userProfile");
                        profile["Sex"] = $("#profileEditSex option:selected").html();
                        profile["sexID"] = inputVal;
                        SetData("userProfile", profile);
                        Navigate("#profile");
                    }, function (r) {
                        ShowInfoBox(r.data.errorDesc);
                    });
                }
                else { alert("El campo no puede estar vacio"); }
                break;
            }
        case "profileBDay":
            {
                inputVal = $("#profileEditDate").val();
                if (!isEmpty(inputVal)) {
                    data.push({name: "fieldToEdit", value: "user_birthdate"});
                    data.push({name: "fieldValue", value: inputVal});

                    SendToAPI("editProfile", data, function (r) {
                        var profile = GetData("userProfile");
                        profile["birthDate"] = inputVal;
                        SetData("userProfile", profile);
                        Navigate("#profile");
                    }, function (r) {
                        ShowInfoBox(r.data.errorDesc);
                    });
                }
                else { alert("El campo no puede estar vacio"); }
                break;
            }
        case "profileEmail":
        {
            inputVal = $("#profileEditEmail").val();
            if (!isEmpty(inputVal)) {
                data.push({name: "fieldToEdit", value: "user_email"});
                data.push({name: "fieldValue", value: inputVal});

                SendToAPI("editProfile", data, function (r) {
                    var profile = GetData("userProfile");
                    profile["email"] = inputVal;
                    userName = inputVal;
                    SetData("userProfile", profile);
                    Navigate("#profile");
                }, function (r) {
                    ShowInfoBox(r.data.errorDesc);
                });
            }
            else { alert("El campo no puede estar vacio"); }
            break;
        }
        case "profilePass":
        {
            inputVal = $("#profileEditPass").val();
            if (!isEmpty(inputVal)) {
                data.push({name: "fieldToEdit", value: "user_password"});
                data.push({name: "fieldValue", value: inputVal});

                SendToAPI("editProfile", data, function (r) {
                    Navigate("#profile");
                }, function (r) {
                    ShowInfoBox(r.data.errorDesc);
                });
            }
            else { alert("El campo no puede estar vacio"); }
            break;
        }
    }
}

function profileEditingCategory(btn) {
    if ($(btn).hasClass("username"))
        SetSessionData("editing", "profileName");
    else if ($(btn).hasClass("usersex"))
        SetSessionData("editing", "profileSex");
    else if ($(btn).hasClass("userbday"))
        SetSessionData("editing", "profileBDay");
    else if ($(btn).hasClass("useremail"))
        SetSessionData("editing", "profileEmail");
    else if ($(btn).hasClass("userpass"))
        SetSessionData("editing", "profilePass");
}

function profileEditBehaviour() {
    $("#profileEditName").closest(".ui-input-text").hide();
    $("#profileEditDate").closest(".ui-input-text").hide();
    $("#profileEditEmail").closest(".ui-input-text").hide();
    $("#profileEditPass").closest(".ui-input-text").hide();
    $(".ui-select").hide();

    switch (GetSessionData("editing")) {
        case "profileName":
            {
                $("#profileEditDesc").text("Ingresa tu nombre");
                $("#profileEditName").closest(".ui-input-text").show();
                $("#profileEditName").val(GetProfileData("userName"));
                break;
            }
        case "profileSex":
            {
                if ($("#profileEditSex").children().length == 0) {
                    SendToAPI("userSexList", new Array(), function (r) {
                        var finalContent = "", length = Object.keys(r.data).length;
                        for(var i = 0; i < length; i++) {
                            finalContent += '<option value="' + r.data[i].id + '">' + r.data[i].sex + '</option>'
                        }
                        $("#profileEditSex").html(finalContent);
                    });
                    $("#profileEditDesc").text("Ingresa tu sexo");
                    $(".ui-select").show();
                    $("#profileEditSex").val(GetProfileData("sexID")).change();
                }
                else
                {
                    $("#profileEditDesc").text("Ingresa tu sexo");
                    $(".ui-select").show();
                    $("#profileEditSex").val(GetProfileData("sexID")).change();
                }
                break;
            }
        case "profileBDay":
            {
                $("#profileEditDesc").text("Ingresa tu fecha de nacimiento");
                $("#profileEditDate").closest(".ui-input-text").show();
                $("#profileEditDate").val(GetProfileData("birthDate"));
                break;
            }
        case "profileEmail":
        {
            $("#profileEditDesc").text("Ingresa tu email");
            $("#profileEditEmail").closest(".ui-input-text").show();
            $("#profileEditEmail").val(userName);
            break;
        }
        case "profilePass":
        {
            $("#profileEditDesc").text("Ingresa tu clave");
            $("#profileEditPass").closest(".ui-input-text").show();
            $("#profileEditPass").val(GetProfileData("password"));
            break;
        }
    }
}

/**************************************** Mascotas ****************************************/

function GetPetData(petid) {
    return GetData("pets")[petid];
}

function HomePetList() {
    var petList = GetData("pets");
    var count = petList.length - 1, dataToWrite = "", petPicture = "";
    var recentVaccines = "", vaccinesCount, recentVetVisits = "", vetVisitsCount;
    for (var i = count; i >= 0; i--) {
        if (petList[i]["info"]["picture"])
            petPicture = petList[i]["info"]["picture"];
        else
            petPicture = "img/photo-camera.png";

        dataToWrite += '<div class="cardplus">' +
            '<a href="#petSelected" onclick="SetSelectedPet(' + i + ')" style="background-image: url(\' ' + petPicture + ' \')">' +
            '</a></div>';

        vaccinesCount = petList[i]["registry"]["vaccines"].length;
        for (var vaccinesID = 0; vaccinesID < vaccinesCount; vaccinesID++) {
            if (DaysBetween(new Date(), new Date(petList[i]["registry"]["vaccines"][vaccinesID]["date"])) <= 15 && DaysBetween(new Date(), new Date(petList[i]["registry"]["vaccines"][vaccinesID]["date"])) > 0)
                recentVaccines += "<p class='mainFont'>" + petList[i]["info"]["name"] + " - " + FormatDate(petList[i]["registry"]["vaccines"][vaccinesID]["date"]) + " - " + petList[i]["registry"]["vaccines"][vaccinesID]["type"] + "</p>";
        }

        vetVisitsCount = petList[i]["registry"]["vet"].length;
        for (var vetVisits = 0; vetVisits < vetVisitsCount; vetVisits++) {
            if (DaysBetween(new Date(), new Date(petList[i]["registry"]["vet"][vetVisits]["visitDate"])) <= 15 && DaysBetween(new Date(), new Date(petList[i]["registry"]["vet"][vetVisits]["visitDate"])) > 0)
                recentVetVisits += "<p class='mainFont'>" + petList[i]["info"]["name"] + " - " + FormatDate(petList[i]["registry"]["vet"][vetVisits]["visitDate"]) + " - " + petList[i]["registry"]["vet"][vetVisits]["vetName"] + "</p>";
        }
    }

    dataToWrite += '<div class="cardplus">' +
        '<a href="#addPet">' +
        '<img class="newCat" src="img/plus-white.png" alt="plus_cat">' +
        '</a></div>';
    $("#petList").html(dataToWrite);

    if (isEmpty(recentVaccines))
        recentVaccines = '<p class="mainFont cardtext">No tenes datos recientes.</p>';

    $("#recentVaccines").html(recentVaccines);

    if (isEmpty(recentVetVisits))
        recentVetVisits = '<p class="mainFont cardtext">No tenes datos recientes.</p>';

    $("#recentVetVisits").html(recentVetVisits);
}

function MainPetList() {
    var petList = GetData("pets");
    var count = petList.length - 1, dataToWrite = "", petPicture = "";
    for (var i = count; i >= 0; i--) {
        if (i % 2 == 0)
            dataToWrite += '<div class="ui-block-b" style="margin-bottom: 30px;">';
        else
            dataToWrite += '<div class="ui-block-a">';

        if (petList[i]["info"]["picture"])
            petPicture = petList[i]["info"]["picture"];
        else
            petPicture = "img/photo-camera.png";

        dataToWrite += '<div class="cardcat">' +
            '<a href="#petSelected" onclick="SetSelectedPet(' + i + ')">' +
            '<span style="background-image: url(\' ' + petPicture + ' \')"></span>' +
            '<span class="mainFont">' + petList[i]["info"]["name"] + '</span></a>' +
            '</div></div>';
    }

    if (count % 2 == 0)
        dataToWrite += '<div class="ui-block-b">';
    else
        dataToWrite += '<div class="ui-block-a">';

    dataToWrite += '<div class="cardAdd">' +
        '<a href="#addPet">' +
        '<img class="newCat" src="img/plus.png" alt="plus_cat">' +
        '</a></div></div>';
    $("#pets").find("#petList").html(dataToWrite);
}

function SetSelectedPet(id) {
    SetSessionData("selectedPetID", id);
}

//----------Editar mascota----------

function ObtainPetInfo() {
    var petData = GetPetData(GetSessionData("selectedPetID")),
        petName = "",
        petBreed = "",
        petBreedFriendlyName = "",
        petBDate = "",
        petColour = "",
        petColourFriendlyName = "",
        petGenre = "",
        petGenreFriendlyName = "",
        petPhone = "",
        petChip = "",
        petPicture = "";

    if (!GetSessionData("selectedCatName")) {
        petName = petData["info"]["name"];
        petBreed = petData["info"]["breed"];
        petBDate = FormatDate(petData["info"]["birthDate"]);
        petColour = petData["info"]["colour"];
        petGenre = petData["info"]["genre"];
        petPhone = petData["info"]["phone"];
        petChip = petData["info"]["chip"];
        petPicture = petData["info"]["picture"];

        if (!petPicture)
            petPicture = "img/photo-camera.png";

        SetSessionData("selectedCatName", petName);
        SetSessionData("selectedBreed", petBreed);
        SetSessionData("selectedBreedForUI", petData["friendlyNames"]["breed"]);
        SetSessionData("selectedDate", petData["info"]["birthDate"]);
        SetSessionData("selectedColour", petColour);
        SetSessionData("selectedColourForUI", petData["friendlyNames"]["colour"]);
        SetSessionData("selectedGenre", petGenre);
        SetSessionData("selectedGenreForUI", petData["friendlyNames"]["genre"]);
        SetSessionData("selectedCatPhone", petPhone);
        SetSessionData("selectedCatChip", petChip);
        SetSessionData("selectedCatPicture", petPicture);
    }
    else {
        petName = GetSessionData("selectedCatName");
        petBDate = FormatDate(GetSessionData("selectedDate"));
        petPhone = GetSessionData("selectedCatPhone");
        petChip = GetSessionData("selectedCatChip");
        petPicture = GetSessionData("selectedCatPicture");

        if (!isEmpty(GetSessionData("tempImgFile")))
            petPicture = GetSessionData("tempImgFile");
    }

    petBreedFriendlyName = GetSessionData("selectedBreedForUI");
    petColourFriendlyName = GetSessionData("selectedColourForUI");
    petGenreFriendlyName = GetSessionData("selectedGenreForUI");

    if (!petPicture)
        petPicture = "img/photo-camera.png";

    $("#editSelectedPet").find("[name='catName']").val(petName);

    $("#editSelectedPet").find(".breedInfo > span").text(petBreedFriendlyName);
    $("#editSelectedPet").find(".catBDate > span").text(petBDate);
    $("#editSelectedPet").find(".catColour > span").text(petColourFriendlyName);
    $("#editSelectedPet").find(".catGenre > span").text(petGenreFriendlyName);
    $("#editSelectedPet").find("[name='catPhone']").val(petPhone);
    $("#editSelectedPet").find("[name='catChip']").val(petChip);
    $("#editSelectedPet").find("#editPetImg").attr("src", petPicture);

    $("#petSelected").find(".catName > h1").text(petName);
    $("#petSelected").find(".catName > small").text(petBreedFriendlyName);
    $("#petSelected").find(".breedInfo > span").text(petBreedFriendlyName);
    $("#petSelected").find(".catBDate > span").text(petBDate);
    $("#petSelected").find(".catColour > span").text(petColourFriendlyName);
    $("#petSelected").find(".catGenre > span").text(petGenreFriendlyName);
    $("#petSelected").find(".catPhone > span").text(petPhone);
    $("#petSelected").find(".catChip > span").text(petChip);
    $("#petSelected").find(".catImg > img").attr("src", petPicture);

    $("#petSelected").find("[href='#petFood'] > span").text(petData["registry"]["food"].length);
    $("#petSelected").find("[href='#petVetVisits'] > span").text(petData["registry"]["vet"].length);
    $("#petSelected").find("[href='#petDewormings'] > span").text(petData["registry"]["deworming"].length);
    $("#petSelected").find("[href='#petVaccines'] > span").text(petData["registry"]["vaccines"].length);
    $("#petSelected").find("[href='#petAllergy'] > span").text(petData["registry"]["allergy"].length);
    $("#petSelected").find("[href='#petDeseases'] > span").text(petData["registry"]["disease"].length);
    $("#petSelected").find("[href='#petTreatments'] > span").text(petData["registry"]["treatments"].length);
}

function ModifyPet() {
    var form = $("#editSelectedPet"),
        petName = form.find("[name='catName']").val(),
        petBreed = GetSessionData("selectedBreed"),
        petBreedFriendlyName = GetSessionData("selectedBreedForUI"),
        petBDate = GetSessionData("selectedDate"),
        petColour = GetSessionData("selectedColour"),
        petColourFriendlyName = GetSessionData("selectedColourForUI"),
        petGenre = GetSessionData("selectedGenre"),
        petGenreFriendlyName = GetSessionData("selectedGenreForUI"),
        petPhone = form.find("[name='catPhone']").val(),
        petChip = form.find("[name='catChip']").val(),
        picture = $('#editPetImg').prop('src');

    if (isEmpty(petName) || isEmpty(petBreed) || isEmpty(petBDate) || isEmpty(petColour) || isEmpty(petGenre)) {
        alert("Faltan completar datos");
    }
    else if (!isEmpty(petName) || !isEmpty(petBreed) || !isEmpty(petBDate) || !isEmpty(petColour) || !isEmpty(petGenre)) {
        var currentPets = GetData("pets");
        currentPets[GetSessionData("selectedPetID")]["info"] = {
            name: petName,
            birthDate: petBDate,
            genre: petGenre,
            breed: petBreed,
            colour: petColour,
            phone: petPhone,
            chip: petChip,
            picture: picture
        }
        currentPets[GetSessionData("selectedPetID")]["friendlyNames"] = {
            breed: petBreedFriendlyName,
            genre: petGenreFriendlyName,
            colour: petColourFriendlyName
        }
        SetData("pets", currentPets);
        var selectedID = GetSessionData("selectedPetID");
        CancelSessionEdit();
        SetSessionData("selectedPetID", selectedID);
        Navigate("#petSelected");
    }
}

function EndPetEdit() {
    if (confirm("¿Salir sin guardar?")) {
        var selectedID = GetSessionData("selectedPetID");
        CancelSessionEdit();
        SetSessionData("selectedPetID", selectedID);
        Navigate("#petSelected");
    }
}

function SearchPhoto(btn) {
    $(btn).closest("div").find("[name='newImg']").click();
}

//----------Nueva mascota----------

function AddNewPet() {
    var form = $("#addPet"),
        catName = form.find("[name='catName']").val(),
        catBDate = GetSessionData("selectedDate"),
        catBreed = GetSessionData("selectedBreed"),
        catBreedFriendlyName = GetSessionData("selectedBreedForUI"),
        catColour = GetSessionData("selectedColour"),
        catColourFriendlyName = GetSessionData("selectedColourForUI"),
        catGenre = GetSessionData("selectedGenre"),
        catGenreFriendlyName = GetSessionData("selectedGenreForUI"),
        catPhone = form.find("[name='catPhone']").val(),
        catChip = form.find("[name='catChip']").val(),
        catImg = !isEmpty($("#newPetImg").prop("src")) ? $("#newPetImg").prop("src") : "img/photo-camera.png";

    if (isEmpty(catName) || isEmpty(catBreed) || isEmpty(catBDate) || isEmpty(catColour) || isEmpty(catGenre)) {
        alert("Faltan completar datos");
    }
    else {
        var currentPets = GetData("pets");
        currentPets.push({
            info: { name: catName, birthDate: catBDate, genre: catGenre, breed: catBreed, colour: catColour, phone: catPhone, chip: catChip, picture: catImg },
            friendlyNames: { breed: catBreedFriendlyName, genre: catGenreFriendlyName, colour: catColourFriendlyName },
            registry: {
                food: [],
                vet: [],
                deworming: [],
                vaccines: [],
                allergy: [],
                disease: [],
                treatments: []
            }
        });
        SetData("pets", currentPets);
        ShowInfoBox("Mascota agregada correctamente", function () {
            Navigate("#pets");
        });
    }
}

function ObtainNewPetInfo() {
    if (!isEmpty(GetSessionData("tempImgFile")))
        $("#addPet").find(".catImg > img").attr("src", GetSessionData("tempImgFile"));

    $("#addPet").find(".breedInfo > span").text(GetSessionData("selectedBreedForUI"));
    $("#addPet").find(".catBDate > span").text(FormatDate(GetSessionData("selectedDate")));
    $("#addPet").find(".catColour > span").text(GetSessionData("selectedColourForUI"));
    $("#addPet").find(".catGenre > span").text(GetSessionData("selectedGenreForUI"));
    SetSessionData("addingNewPet", "true");
}

function SubmitBreedEdit(data) {
    if (!isEmpty(GetSessionData("selectedPetID"))) {
        SetSessionData("selectedBreed", $(data).attr("id"));
        SetSessionData("selectedBreedForUI", $(data).find("h2").text());
        PressBack();
    } else {
        if (!isEmpty(GetSessionData("addingNewPet"))) {
            SetSessionData("selectedBreed", $(data).attr("id"));
            SetSessionData("selectedBreedForUI", $(data).find("h2").text());
            PressBack();
        }
        else {
            var dataToSend = new Array();
            dataToSend.push({name: "selectedBreed", value: $(data).attr("id")})
            SendToAPI("breedDetail", dataToSend, function (r) {
                $("#breedDetail").find("h1").text(r.data.name);
                $("#breedDetail").find("img").attr("src", r.data.picture);
                $("#breedDetail").find("span").text(r.data.description);
                Navigate("#breedDetail");
            });
        }
    }
}

function SubmitBirthDate(input) {
    var value = $(input).closest("main").find("[name='catBDay']").val();
    if (!isEmpty(value)) {
        SetSessionData("selectedDate", value);
        PressBack();
    }
    else
        alert("La fecha seleccionada no es valida");
}

function SubmitPetColour(input) {
    var value = $(input).closest("main").find("[name='catColourSelection']").val();
    SetSessionData("selectedColour", value);
    SetSessionData("selectedColourForUI", $(input).closest("main").find("[name='catColourSelection'] option:selected").html());
    PressBack();
}

function SubmitPetGenre(input) {
    var value = $(input).closest("main").find("[name='catGenreSelection']").val();
    SetSessionData("selectedGenre", value);
    SetSessionData("selectedGenreForUI", $(input).closest("main").find("[name='catGenreSelection'] option:selected").html());
    PressBack();
}

//----------Eliminar mascota----------

function DeletePet() {
    if (confirm("¿Estás seguro de querer eliminar la mascota?, esta acción no se puede deshacer.")) {
        var pets = GetData("pets");
        pets.splice(GetSessionData("selectedPetID"), 1);
        SetData("pets", pets);
        Navigate("#pets");
    }
}

//----------Comidas----------

function GetPetFoodList() {
    var foodList = GetPetData(GetSessionData("selectedPetID"))["registry"]["food"];
    var count = foodList.length, dataToWrite = '<ul data-role="listview listview-informative" class="ui-listview">';
    for (var i = 0; i < count; i++) {
        dataToWrite += '<li onclick="DeleteFoodID(' + i + ', $(this));" class="ui-li-static ui-body-inherit ui-li-has-thumb ui-first-child foodList"><img src="' + foodList[i]["foodPicture"] + '"><a href="#" class="ui-btn-icon-right ui-icon-delete">' + foodList[i]["foodName"] + '</a></li>';
    }
    dataToWrite += "</ul>";

    if (count == 0)
        dataToWrite = "<h1 style='text-align: center;'>No hay datos para mostrar</h1>";

    $("#petFoodList").html(dataToWrite);
}

function AddFoodToPet(elem) {
    if (!isEmpty(GetSessionData("selectedPetID"))) {
        var pets = GetData("pets");
        var foodList = pets[GetSessionData("selectedPetID")]["registry"]["food"];
        foodList.push({ foodName: $(elem).find("a").text(), foodPicture: $(elem).find("img").attr("src") });
        pets[GetSessionData("selectedPetID")]["registry"]["food"] = foodList;
        SetData("pets", pets);
        PressBack();
    }
}

function DeleteFoodID(id, elem) {
    if (confirm("¿Estás seguro de querer eliminar la comida seleccionada?. Esta acción no se puede deshacer")) {
        var foodList = GetPetData(GetSessionData("selectedPetID"))["registry"]["food"], pets = GetData("pets");
        foodList.splice(id, 1);
        pets[GetSessionData("selectedPetID")]["registry"]["food"] = foodList;
        SetData("pets", pets);
        $(elem).remove();

        if ($("#petFoodList > ul").children().length == 0)
            $("#petFoodList").html("<h1 style='text-align: center;'>No hay datos para mostrar</h1>");
    }
}

//----------Visitas veterinario----------

function GetPetVetVisits() {
    var visitList = GetPetData(GetSessionData("selectedPetID"))["registry"]["vet"];
    var count = visitList.length, dataToWrite = '<ul data-role="listview listview-informative" class="ui-listview">';
    for (var i = 0; i < count; i++) {
        dataToWrite += '<li onclick="SetViewingVisit(' + i + ');" class="ui-li-static ui-body-inherit ui-first-child foodList"><a href="#" class="ui-btn-icon-right ui-icon-carat-r">' + FormatDate(visitList[i]["visitDate"]) + '<span class="listview-data">' + visitList[i]["clinicName"] + '</span></a></li>';
    }
    dataToWrite += "</ul>";

    if (count == 0)
        dataToWrite = "<h1 style='text-align: center;'>No hay datos para mostrar</h1>";

    $("#petVisitsList").html(dataToWrite);
}

function AddVetVisit(elem) {
    var cName = $(elem).closest("main").find("[name='clinicName']").val(),
        vDate = $(elem).closest("main").find("[name='visitDate']").val(),
        vName = $(elem).closest("main").find("[name='vetName']").val(),
        diag = $(elem).closest("main").find("[name='diagnostic']").val(),
        desc = $(elem).closest("main").find("[name='description']").val();

    if (isEmpty(cName) || isEmpty(vDate) || isEmpty(diag)) {
        alert("Faltan completar datos");
    }
    else if (!isEmpty(cName) || !isEmpty(vDate) || !isEmpty(diag)) {
        var pets = GetData("pets");
        var visitsList = pets[GetSessionData("selectedPetID")]["registry"]["vet"];
        visitsList.push({ clinicName: cName, visitDate: vDate, vetName: vName, diagnostic: diag, description: desc});
        pets[GetSessionData("selectedPetID")]["registry"]["vet"] = visitsList;
        SetData("pets", pets);

        var seletectedPet = GetSessionData("selectedPetID");
        CancelSessionEdit();
        SetSessionData("selectedPetID", seletectedPet);
        PressBack();

        $(elem).closest("main").find("[name='clinicName']").val(""),
        $(elem).closest("main").find("[name='visitDate']").val(""),
        $(elem).closest("main").find("[name='vetName']").val(""),
        $(elem).closest("main").find("[name='diagnostic']").val(""),
        $(elem).closest("main").find("[name='description']").val("");
    }
}

function SetViewingVisit(id) {
    SetSessionData("viewingVisitID", id);
    Navigate("#viewVisitDetails");
}

function ObtainVisitDetails() {
    var visit = GetPetData(GetSessionData("selectedPetID"))["registry"]["vet"][GetSessionData("viewingVisitID")];

    $("#viewVisitDetails").find(".clinicInfo > span").text(visit["clinicName"]);
    $("#viewVisitDetails").find(".visitInfo > span").text(FormatDate(visit["visitDate"]));
    $("#viewVisitDetails").find(".vetInfo > span").text(visit["vetName"]);
    $("#viewVisitDetails").find('[name="diagnostic"]').val(visit["diagnostic"]);
    $("#viewVisitDetails").find('[name="description"]').val(visit["description"]);
}

function RemoveVetVisit() {
    if (confirm("¿Estás seguro de querer eliminar la visita seleccionada?. Esta acción no se puede deshacer")) {
        var visits = GetPetData(GetSessionData("selectedPetID"))["registry"]["vet"], pets = GetData("pets");
        visits.splice(GetSessionData("viewingVisitID"), 1);
        pets[GetSessionData("selectedPetID")]["registry"]["vet"] = visits;
        SetData("pets", pets);
        PressBack();
    }
}

//----------Vacunas----------

function GetPetVaccinesList() {
    var vaccinesList = GetPetData(GetSessionData("selectedPetID"))["registry"]["vaccines"];
    var count = vaccinesList.length, dataToWrite = '<ul data-role="listview listview-informative" class="ui-listview">';
    for (var i = 0; i < count; i++) {
        dataToWrite += '<li onclick="RemoveVaccine(' + i + ', $(this));" class="ui-li-static ui-body-inherit ui-first-child foodList"><a href="#" class="ui-btn-icon-right ui-icon-delete">' + FormatDate(vaccinesList[i]["date"]) + '<span class="listview-data">' + vaccinesList[i]["friendlyName"] + '</span></a></li>';
    }
    dataToWrite += "</ul>";

    if (count == 0)
        dataToWrite = "<h1 style='text-align: center;'>No hay datos para mostrar</h1>";

    $("#petVaccinesList").html(dataToWrite);
}

function NewVaccineInfo() {
    $("#newVaccineType").text(GetSessionData("tmpVaccineTypeForUI"));
}

function AddVaccine(elem) {
    var vaccineType = GetSessionData("tmpVaccineType"),
        vaccineDate = $(elem).closest("main").find("[name='vaccineDate']").val(),
        vaccineFriendlyName = GetSessionData("tmpVaccineTypeForUI");

    if (isEmpty(vaccineType) || isEmpty(vaccineDate)) {
        alert("Faltan completar datos");
    }
    else if (!isEmpty(vaccineType) || !isEmpty(vaccineDate)) {
        var pets = GetData("pets");
        var vaccinesList = pets[GetSessionData("selectedPetID")]["registry"]["vaccines"];
        vaccinesList.push({ type: vaccineType, date: vaccineDate, friendlyName: vaccineFriendlyName });
        pets[GetSessionData("selectedPetID")]["registry"]["vaccines"] = vaccinesList;
        SetData("pets", pets);
        var seletectedPet = GetSessionData("selectedPetID");
        CancelSessionEdit();
        SetSessionData("selectedPetID", seletectedPet);
        PressBack();
        $("#vaccineDate").val("");
    }
}

function RemoveVaccine(id, elem) {
    if (confirm("¿Estás seguro de querer eliminar la vacuna seleccionada?. Esta acción no se puede deshacer")) {
        var vaccinesList = GetPetData(GetSessionData("selectedPetID"))["registry"]["vaccines"], pets = GetData("pets");
        vaccinesList.splice(id, 1);
        pets[GetSessionData("selectedPetID")]["registry"]["vaccines"] = vaccinesList;
        SetData("pets", pets);
        $(elem).remove();

        if ($("#petVaccinesList > ul").children().length == 0)
            $("#petVaccinesList").html("<h1 style='text-align: center;'>No hay datos para mostrar</h1>");
    }
}

function SubmitVaccineType(elem) {
    SetSessionData("tmpVaccineType", $(elem).closest("main").find("#vaccineTypeSelection").val());
    SetSessionData("tmpVaccineTypeForUI", $(elem).closest("main").find("#vaccineTypeSelection option:selected").html());
    PressBack();
}