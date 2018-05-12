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

function changeStatus(orderId) {
    var url = "http://localhost:8080/api/orders?_id=";
    var completeURL = url.concat(orderId);
    $.ajax({
        url: completeURL,
        method: 'GET',
        dataType: "json"
    }).done(function(data) {
        data.forEach(order => {
            order.prepared = true;
            patchOrder(order);
        });
    }).fail(function () {
        console.log("failed to get this order");
    });
}

function patchOrder(orderPatched) {
    $.ajax({
        url: "http://localhost:8080/api/orders",
        method: 'PATCH',
        data: orderPatched,
        dataType: "json"
    }).done(function(data) {
            console.log("order status patched + new status : " + data.prepared);  
    }).fail(function () {
        console.log("failed to patch order");
    });
}