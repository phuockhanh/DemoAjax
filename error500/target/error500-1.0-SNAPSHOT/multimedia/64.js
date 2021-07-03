document.addEventListener("DOMContentLoaded",function() {
    var province = document.getElementById('province');
    window.onload = function(){
        $.ajax({
            url:'https://dev-online-gateway.ghn.vn/shiip/public-api/master-data/province',
            headers:{
                'token':'6c596e03-d052-11eb-86d6-d6ee83481554',
                'Content-Type':'application/json'
            },
            method:'GET',
            dataType:'json',
            success:function(reponse){
                console.log('success: ');
                console.log(reponse.data);
                var str = "<option selected>Tỉnh thành</option>";
                for(var i=0;i<reponse.data.length;i++){
                    console.log(reponse.data[i].ProvinceName);
                    str=str+"<option class='provinceId' data-province='"+reponse.data[i].ProvinceID+"'>"+
                        reponse.data[i].ProvinceName+"</option>"
                }
                province.innerHTML = str;
            }
        })
    }
},false)
function changeFunc(){
    var selectBox = document.getElementById("province");
    var selectedValue = selectBox.options[selectBox.selectedIndex].getAttribute('data-province');
    var district = document.getElementById("district");
    $.ajax({
        url:'https://dev-online-gateway.ghn.vn/shiip/public-api/master-data/district',
        headers:{
            'token':'6c596e03-d052-11eb-86d6-d6ee83481554',
            'Content-Type':'application/json'
        },
        method:'GET',
        dataType:'json',
        success:function(reponse){
            var str = "<option selected>Quận huyện</option>";
            for(var i=0;i<reponse.data.length;i++){
                if(reponse.data[i].ProvinceID==selectedValue){
                    str=str+"<option class='districtId' data-district='"+reponse.data[i].DistrictID+"'>"+
                        reponse.data[i].DistrictName+"</option>"
                }
            }
            district.innerHTML = str;
        }
    })
}
function changeFuncDistrict(){
    var selectBox = document.getElementById("district");
    var selectedValue = selectBox.options[selectBox.selectedIndex].getAttribute('data-district');
    var ward = document.getElementById("ward");
    $.ajax({
        url:'https://dev-online-gateway.ghn.vn/shiip/public-api/master-data/ward?district_id='+selectedValue,
        headers:{
            'token':'6c596e03-d052-11eb-86d6-d6ee83481554',
            'Content-Type':'application/json'
        },
        method:'GET',
        dataType:'json',
        success:function(reponse){
            var str = "<option selected>Phường xã</option>";
            for(var i=0;i<reponse.data.length;i++){
                str=str+"<option class='wardId' data-ward='"+reponse.data[i].WardCode+"'>"+
                    reponse.data[i].WardName+"</option>"
            }
            ward.innerHTML = str;
        }
    })
}