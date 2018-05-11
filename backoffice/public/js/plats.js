function changeDisponibility(courseId) {
    var url = "http://localhost:8080/api/courses?_id=";
    var completeURL = url.concat(courseId);
    console.log(completeURL);
    $.ajax({
        url: completeURL,
        method: 'GET',
        dataType: "json"
    }).done(function(data) {
        data.forEach(course => {
            if (course.disponibility)
            course.disponibility = false;
            else 
            course.disponibility = true;
            

            console.log(course.disponibility);
            patchCourse(course);
        });
    }).fail(function () {
        console.log("failed to get this course");
    });
}

function patchCourse(coursePatched) {
    $.ajax({
        url: "http://localhost:8080/api/courses",
        method: 'PATCH',
        data: coursePatched,
        dataType: "json"
    }).done(function(data) {
            console.log("course disponibility patched + new dispo : " + data.disponibility);  
    }).fail(function () {
        console.log("failed to patch course");
    });
}