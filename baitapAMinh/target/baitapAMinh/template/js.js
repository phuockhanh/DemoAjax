function addNewCustomer() {
    let name = $('#nameCr').val();
    let email = $('#emailCr').val();
    let pass = $('#passCr').val();
    let pass2 = $('#passCr2').val();
    let phone = $('#phoneCr').val();
    let country_id = $('#countryCr').val();
    let newCountry={
        id:country_id
    }
    let newCustomer = {
        name: name,
        email: email,
        pass: pass,
        phone:phone,
        country:newCountry
    };
    // goi ajax
    $.ajax({
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        type: "POST",
        data: JSON.stringify(newCustomer),
        //tên API
        url: "/customers",
        //xử lý khi thành công
        success: successHandler
    });
    //chặn sự kiện mặc định của thẻ
    event.preventDefault();
}
function getCustomer(customer) {
    return `<tr><td>${customer.id}</td><td>${customer.name}</td><td >${customer.email}</td><td>${customer.phone}</td><td>${customer.country.name}</td>
        <td><a class="edit" title="Edit" data-toggle="modal" href="#myModal"><i class="material-icons">&#xE254;</i></a>
        <a href="${customer.id}" class="delete" title="Delete"><i class="material-icons">&#xE872;</i></a>
            <input type="hidden" id="id" value="${customer.id}"></td></tr>`;
}
function successHandler() {
    $.ajax({
        type: "GET",
        //tên API
        url: "/customers",
        //xử lý khi thành công
        success: function (data) {
            let content = '    <tr class="tr">\n' +
                '        <td>#</td>\n' +
                '        <td>Name</td>\n' +
                '        <td>Email</td>\n' +
                '        <td>Phone</td>\n' +
                '        <td>Country</td>\n' +
                '        <td>Manager</td>\n' +
                '    </tr>';
            for (let i = 0; i < data.length; i++) {
                content += getCustomer(data[i]);
            }
            document.getElementById('customerList').innerHTML = content;
            $("#createForm")[0].reset();
            $('.modal').modal('hide');
            $('.delete').on('click',function(event){
                //lay du lieu
                let a = $(this);
                let id = a.attr("href");

                //============================
                const swalWithBootstrapButtons = Swal.mixin({
                    customClass: {
                        confirmButton: 'btn btn-success',
                        cancelButton: 'btn btn-danger'
                    },
                    buttonsStyling: false
                })

                swalWithBootstrapButtons.fire({
                    title: 'Are you sure?',
                    text: "You won't be able to revert this!",
                    icon: 'warning',
                    showCancelButton: true,
                    confirmButtonText: 'Yes, delete it!',
                    cancelButtonText: 'No, cancel!',
                    reverseButtons: true
                }).then((result) => {
                    if (result.isConfirmed) {
                        swalWithBootstrapButtons.fire(
                            'Deleted!',
                            'Your file has been deleted.',
                            'success',
                        )
                        $.ajax({
                            type: "DELETE",
                            //tên API
                            url: '/customers/'+id,
                            context:this,
                            //xử lý khi thành công
                            success: function (data) {
                                a.parent().parent().remove();
                            }

                        },'json');
                    } else if (
                        /* Read more about handling dismissals below */
                        result.dismiss === Swal.DismissReason.cancel
                    ) {
                        swalWithBootstrapButtons.fire(
                            'Cancelled',
                            'Your imaginary file is safe :)',
                            'error'
                        )
                    }
                })
                event.preventDefault();
            })
            $('.edit').on('click',function (){
                var id = $(this).parent().find('#id').val();
                $.ajax({
                    type:'GET',
                    url:'/customers/api/'+id,
                    success:function (customer){
                        $('#nameEd').val(customer.name);
                        $('#emailEd').val(customer.email);
                        $('#phoneEd').val(customer.phone);
                        $("#countryEd").val(customer.country.id).change();
                        $('#idEd').val(customer.id);
                    }
                })
            })
        }
    });
}
function editCustomer(event) {
    let id = $('#idEd').val();
    let name = $('#nameEd').val();
    let email = $('#emailEd').val();
    let phone = $('#phoneEd').val();
    let country_id = $('#countryEd').val();
    let newCountry={
        id:country_id
    }
    let Customer = {
        name: name,
        email: email,
        phone:phone,
        country:newCountry
    };
    // goi ajax
    $.ajax({
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        type: "POST",
        data: JSON.stringify(Customer),
        //tên API
        url: "/customers/edi/"+id,
        //xử lý khi thành công
        success: successHandler
    });
    //chặn sự kiện mặc định của thẻ
    event.preventDefault();
}
$(document).ready(function() {
    //sư kiện nào thực hiện Ajax
    $('.delete').on('click',function(event){
        //lay du lieu
        let a = $(this);
        let id = a.attr("href");

        //============================
        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
                confirmButton: 'btn btn-success',
                cancelButton: 'btn btn-danger'
            },
            buttonsStyling: false
        })

        swalWithBootstrapButtons.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, cancel!',
            reverseButtons: true
        }).then((result) => {
            if (result.isConfirmed) {
                swalWithBootstrapButtons.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success',
                )
                $.ajax({
                    type: "DELETE",
                    //tên API
                    url: `/customers/${id}`,
                    //xử lý khi thành công
                    success: function (data) {
                        a.parent().parent().remove();
                    }
                });
            } else if (
                /* Read more about handling dismissals below */
                result.dismiss === Swal.DismissReason.cancel
            ) {
                swalWithBootstrapButtons.fire(
                    'Cancelled',
                    'Your imaginary file is safe :)',
                    'error'
                )
            }
        })
        event.preventDefault();
    });
    $('.edit').on('click',function (){
        var id = $(this).parent().find('#id').val();
        $.ajax({
            type:'GET',
            url:'/customers/api/'+id,
            success:function (customer){
                $('#nameEd').val(customer.name);
                $('#idEd').val(customer.id);
                $('#emailEd').val(customer.email);
                $('#phoneEd').val(customer.phone);
                $("#countryEd").val(customer.country.id).change();
            }
        })
    })
})