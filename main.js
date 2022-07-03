let btn = document.querySelector(".scroll-up");

window.onscroll = function () {
    if (window.scrollY >= 220) {
        btn.style.display = 'block';
    }
    else {
        btn.style.display = 'none';
    };
};
btn.onclick = function () {
    window.scrollTo({
        left: 0,
        top: 0,
        behavior: "smooth"
    });
};
let student_name = document.querySelector("input[name=student_name]").value;
let student_phone = document.querySelector("input[name=student_phone]").value;
let student_email = document.querySelector("input[name=student_email]").value;
let father_email = document.querySelector("input[name=father_email]").value;
let father_phone = document.querySelector("input[name=father_phone]").value;
let father_job_title = document.querySelector("input[name=father_job_title]").value;
let mother_phone = document.querySelector("input[name=mother_phone]").value;
let mother_job_title = document.querySelector("input[name=mother_job_title]").value;
let governorate = document.querySelector("input[name=governorate]").value;
let city = document.querySelector("input[name=city]").value;
let city_center = document.querySelector("input[name=city_center]").value;
let street = document.querySelector("input[name=street]").value;
let gender = document.querySelector("select[name=gender]").value;
let student_section = document.querySelector("select[name=student_section]").value;
let student_school = document.querySelector("input[name=student_school]").value;
let remote_payment = document.querySelector("select[name=remote_payment]").value;
let reservation_type = document.querySelector("select[name=reservation_type]").value;
let group_id = document.querySelector("select[name=group_id]").value;
let button = document.querySelector("#addReservationBtn");
let element = document.getElementById("myPara");
console.log(element);
button.addEventListener("click", function () {
    
    if (student_name === "" || 
        student_phone === "" || 
        student_email === "" ||
        father_email === "" ||
        father_phone === "" ||
        father_job_title === "" ||
        mother_phone === "" ||
        mother_job_title === "" ||
        governorate === "" ||
        city === "" ||
        city_center === "" ||
        street === "" ||
        gender === "" ||
        student_section === "" ||
        remote_payment === "" ||
        reservation_type === "" ||
        group_id === "" 
        ) {
      element.innerHTML = " لم يتم الحجز ";
    }else{
        element.innerHTML = "  تم الحجز بنجاح ";
    }
    
});
