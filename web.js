// dropdown- navigation bar
function dropdown_navigation_bar(){
    let arr_car = ["FOSSIL","CITIZEN","ORIENT","SEIKO","CASIO"];
    for(let i of arr_car)
    {
        document.getElementsByClassName("dropdown-navigationbar")[0].innerHTML += `<div class="car"><p>`+i+`</p></div>`;
    }    
}
// navigation-l
function dropdown(a,stt)
{
    if(a.drop.length!= 0)
    {
        for (let drop of a.drop)
        {
            document.getElementsByClassName("dropdown-navigationbar")[stt].innerHTML += `<div class="tt"><p><i class="fas fa-angle-right"></i> `+drop+`</p>
            </div>`;
        }
    }
}
let arr_navigation = [
    {
        id : "nam",
        name:"Nam",
        drop :[],
        img : "./sanpham/Nam/dong-ho-nam-banner.webp",
        intro : "“Cùng với sự phát triển không ngừng của thời trang thế giới, rất nhiều thương hiệu cho ra đời những mẫu đồng hồ nam chính hãng đa dạng về phong cách, kiểu dáng, màu sắc, kích cỡ… Một chiếc đồng hồ nam cao cấp chính hãng khắc họa một giá trị đích thực khi nói đến phụ kiện xa xỉ dành cho phái mạnh. Hiện nay, đồng hồ là phụ kiện thời trang thiết yếu đối với những người đàn ông hiện đại. Trên cổ tay của những người đàn ông thành đạt luôn dành vị trí cho một chiếc đồng hồ nam cao cấp.”"
    }
    ,
    {
        id : "nu",
        name : "Nữ",
        drop : [],
        img : "./sanpham/Nam/dong-ho-nu-1.webp",
        intro : "“Phụ nữ luôn có những yêu cầu cao về phong cách trang phục, phụ kiện bên ngoài của họ. Đặc biệt khi nói về đồng hồ nữ cao cấp thì phái đẹp luôn yêu cầu phải có sự hài hòa về kiểu dáng, màu sắc, sự khéo léo và đặc biệt phải có độ chính xác cao, chất lượng tốt. Đối với những phụ nữ hiện đại thì một chiếc đồng hồ nữ chính hãng không thể thiếu trên cổ tayọ, không chỉ đơn giản là để xem giờ mà nhằm tôn vinh vẻ đẹp của họ mà thôi. “"
    }
    ,
   {    
        id : "couple",
        name : "Cặp Đôi",
        drop : [],
        img : "./sanpham/Nam/banner-doi.webp",
        intro : "” Đồng hồ đôi đẹp là sự “chắp cánh” tốt nhất cho tình yêu của hai bạn để bước thêm một nấc thang mới. Đồng hồ đôi (cặp) còn là món quà hết sức ý nghĩa và là vật có thể lưu giữ được những khoảng khắc thời gian lãng mạn trong tình yêu của hai bạn. Vậy thì bạn còn đợi chờ gì nữa, hãy lựa chọn ngay đồng hồ cặp chính hãng đẹp nhất cho một nửa của mình. Bạn sẽ thấy sức mạnh diệu kì đến từ món quà tặng tuyệt vời này, nó không chỉ nằm ở giá trị vật chất mà đồng hồ cặp (đôi) còn mang những giá trị tinh thần hết sức ý nghĩa mà sẽ làm tình yêu đôi lứa bùng cháy dữ dội … “"

    },
    {
        id : "phu_kien",
        name :"Phụ Kiện",
        drop : ["Dây da","Dây kim loại","Đồ trang sức","Hộp xoay"]
    },
    {
        id : "dich_vu",
        name :"Dịch Vụ",
        drop : ["In Logo","Khắc laze","Đính kim cương"]
    },
    {
        id : "infomation_call",
        name :"Liên Hệ",
        drop: ["Về shop","Thông tin liên hệ"]
    }
];
// hjhj
function navigation_l(){
    let a = 1;
    let count = 1; 
    for(let i of arr_navigation)
    {
        let title = i.name;
        if(count <= 3)
        {
            document.getElementsByClassName("navigation-l")[0].innerHTML += 
            `<b onclick= "Load_Page_All_Products('`+i.id+`')" class="navigation-list-first">
            <div >
                <p><h4 class="img-next">`+i.name+`</h4></p>
                <div class="dropdown-navigationbar">
                </div>
            
            </div>
            </b>
            `;
            dropdown(i,a);
            a++;
        }
        else{
            document.getElementsByClassName("navigation-l")[0].innerHTML += 
            `<b class="navigation-list-first">
            <div >
                <p><h4 class="img-next">`+i.name+`</h4></p>
                <div class="dropdown-navigationbar">
                </div>
            
            </div>
            </b>
            `;
            dropdown(i,a);
            a++;
        }
        count ++;
    }
}
//#region Brands
    let Brands = [
        {
            id : "casio",
            name_brand : "Casio",
            gender : "nam"
        },
        {
            id : "citizen",
            name_brand : "Citizen",
            gender : "nam"
        }
        ,
        {
            id : "OP",
            name_brand : "Olym Pianus (Olympia Star)",
            gender : "nam"
        }
        ,{
            id : "doxa",
            name_brand : "Doxa",
            gender : "nam"
        }
        ,{
            id : "tissot",
            name_brand : "Tissot",
            gender : "nam"
        }
        ,{
            id : "logines",
            name_brand : "Logines",
            gender : "nam"
        }
        ,
        {
            id : "saga_nu",
            name_brand : "Saga",
            gender : "nu"
        },
        {
            id : "casio_nu",
            name_brand : "Casio",
            gender : "nu"
        },
        {
            id : "fouettle_nu",
            name_brand : "Fouettlé",
            gender : "nu"
        },
        {
            id : "citizen_nu",
            name_brand : "Citizen",
            gender : "nu"
        },
        {
            id : "doxa_nu",
            name_brand : "Doxa",
            gender : "nu"
        }
];
function Load_brands(product,vitri)
{
    for(let brand of Brands)
    {
        if(brand.gender == product)
        {
            document.getElementsByClassName("list-car-tide")[vitri].innerHTML += `<li><p onclick="Load_Product_Brand(3,'`+brand.name_brand+`','`+product+`',`+vitri+`,'Sort_product')">`+ brand.name_brand+`</p></li>`;
        }
    }
    
}


function Load_brands_gender(gender)
{
    document.getElementById("brand").innerHTML = "";
    for(let brand of Brands)
    {
        if(brand.gender == gender)
        document.getElementById("brand").innerHTML += `<div class = "check check_brand"><input type="checkbox"  id="`+brand.id+`" class = "brand_check" onclick = "Load_product_brand_sort('`+brand.name_brand+`','`+gender+`','`+brand.id+`')"> `+brand.name_brand+` </input></div>`;
    }
}
//#endregion
//#region San pham
let brands_products = [
    {
        name : "Casio",
        img: "./sanpham/Nam/Casio-Logo.webp"
    },
    {
        name : "Citizen",
        img: "./sanpham/Nam/Citizen-Logo.webp"
    },
    {
        name : "Olym Pianus (Olympia Star)",
        img: "./sanpham/Nam/Olympia-Star-Logo.webp"
    },
    {
        name : "Saga",
        img: "./sanpham/Nam/saga_logo.webp"
    },
]
function Find_Brand(name_brand)
{
    for(brand_products of brands_products)
    {
        if(brand_products.name == name_brand)
            return brand_products.img;
    }
}
let products = [];
//load product
function Load_data_product_in_firestore(){
    db.collection("products").get().then((product)=>{
        product.forEach((item)=>{
            products.push(item.data());
        })
    });
}

Load_data_product_in_firestore();

function Load_Product_Brand(a,brand,gender,vitri,nameclass)
{
    document.getElementsByClassName(nameclass)[vitri].innerHTML ="";
    let s = 0;
    let sl = parseInt(a);//so luong san pham
    for(let i of products)
    {
        if(s == sl)
        return;
        let value_string = "";
        if(i.discount != 0)
        {
            value_string = add_String(i.value-i.value*(i.discount/100));
        }
        else{
            value_string = add_String(i.value);
        }
        if(i.brand == brand && i.gender == gender)
        {
            document.getElementsByClassName(nameclass)[vitri].innerHTML += 
        `<a href="#trang_ct_block" class="sp-cartide-1" id="`+i.id+`" onclick="CT_Product('`+i.id+`')">
        <div class="sp-cartide-bg">
            <img src="`+ i.img_list[0]+`" alt="">
            <p>`+i.name+`</p>
            <div class="start-icon" id="start-icon_`+i.id+`">
            </div>
            <div class="value" id="value_product_`+i.id+`">
                <b>`+value_string+` ₫</b>
                
            </div>
            <div class="btn-shipping">
                <button>
                    <i class="fas fa-shopping-bag"></i>
                    <b>ADD TO CART</b>
                </button>
            </div>    
        </div>
        </a>`;
        start_vote1("start-icon_"+i.id);
        s++;
        if(i.discount !=0)
        document.getElementById("value_product_"+i.id).innerHTML += `<b class="discount_block">-`+i.discount+` %</b>`;
        }
    }
}

function load_product(a,gender,vitri,nameclass){//so luong san pham gioi tinh, vi tri, ten class
    let s = 0;
    let sl = parseInt(a);//so luong san pham
    product_sort = [];
    for(let i of products)
    {
        if(s == sl)
        return;
        let value_string = "";
        if(i.discount != 0)
        {
            value_string = add_String(i.value-i.value*(i.discount/100));
        }
        else{
            value_string = add_String(i.value);
        }
        if(i.gender == gender)
        {
            document.getElementsByClassName(nameclass)[vitri].innerHTML += 
        `<a href="#trang_ct_block" class="sp-cartide-1" id="`+i.id+`" onclick="CT_Product('`+i.id+`')">
        <div class="sp-cartide-bg">
            <img src="`+ i.img_list[0]+`" alt="">
            <p>`+i.name+`</p>
            <div class="start-icon" id = "start-icon_`+i.id+`">
            </div>
            <div class="value" id="value_product_`+i.id+`">
                <b>`+value_string+` ₫</b>
                
            </div>
            <div class="btn-shipping">
                <button>
                    <i class="fas fa-shopping-bag"></i>
                    <b>ADD TO CART</b>
                </button>
            </div>    
        </div>
        
        </a>`;
        start_vote1("start-icon_"+i.id);
        s++;
        if(i.discount !=0)
        document.getElementById("value_product_"+i.id).innerHTML += `<b class="discount_block">-`+i.discount+` %</b>`;
        product_sort.push(i); //fix
        }
    }
    array_tam = product_sort;
    return s;
}

// chi tiet san pham 
function reverse(string)
{
    let a = "";
    for(let i = string.length -1 ;i>=0;i--)
    {
        a += string[i];
    }
    return a;
}
function add_String(value)
{
    let b = value.toString();
    let value_string = "";
    let dem = 1;
    for(let i = b.length-1 ;i >= 0;i--)
    {
        value_string += b[i];
        if(dem%3==0)
        value_string += ".";
        dem ++;
    }
    b = reverse( value_string);
    return b;
}
function Load_discount(value,discount)
{
    let value_string = add_String(value);
    let a = value - value*(discount/100);
    let discount_string = add_String(a);
    if(discount != 0 )
    {
        document.getElementById("price").innerHTML += 
        `<p class="price_load">`+value_string+` ₫ </p>
        <p class="discount"> `+discount_string+` ₫</p>
        <b class="discount_block">-`+discount+` %</b>`;
        
    }
    else{
        document.getElementById("price").innerHTML += `
        <p class="discount"> `+value_string+` ₫</p>`;
    }
}
function CT_Product_Exit()
{
    document.getElementById("block_page_inf").innerHTML = "";
    document.getElementById("block_page_inf").innerHTML += `<div id="trang_ct_block" class="trang_ct_class">
    <div class="trang_ct" id="inf_product">
        
    </div>
</div>`;
}
function CT_Product(id)
{
    document.getElementById("inf_product").innerHTML = "";
    db.collection("products").doc(id).get().then((data)=>{
        let product = data.data();
        document.getElementById("inf_product").innerHTML +=
            `<div><p id="Exit" onclick="CT_Product_Exit()"></p></div>
            <div class="title_sp">
                <h2><p id = "product_name">`+product.name+`</p></h2>
            </div>
            <div class="ct_sp">
                <div class="img_sp">
                    <img src="`+product.img_list[2]+`" class="list-img-sp img_1_3">
                    <img src="`+product.img_list[2]+`" class = "img_product_ img_3" >
                    
                    <img src="`+product.img_list[1]+`" class="list-img-sp img_1_2">
                    <img src="`+product.img_list[1]+`" class = "img_product_ img_2">

                    <img src="`+product.img_list[0]+`" class="list-img-sp img_1_1">
                    <img src="`+product.img_list[0]+`" alt="" class = "img_product_ img_1">
                </div>
    
                <div class="inf_sp">
                    <p>THÔNG TIN SẢN PHẨM</p>
                    <div id="start-icon1">
                        
                    </div>
                    
                    <p>(3 đánh giá của khách hàng)</p>
                    <p>Mã số sản phẩm : <p class="id_sp">BI1050-81A</p></p>
                    <div id="price">
                        
                    </div>
                    
                    <p class="page_inf">`+product.inf+`</p>
                    
                </div>
                <div class="brand">
                    <div class="img_brand">
                        <div class="img_brand_1">
                            <p>THƯƠNG HIỆU</p>
                            <img src="`+Find_Brand(product.brand)+`" alt="">
                        </div>
                    </div>
                    <div class="guarantee">
                        <p>MÔ TẢ SẢN PHẨM</p>
                    </div>
                    <div class="list_guarantee">
                        
                        <div class="guarantee_1">
                            <div class="list_guarantee_1">
                                <b>Thương Hiệu : </b> `+product.brand+`
                            </div>
                            <div class="list_guarantee_1">
                                <b>Số Hiệu Sản Phẩm : </b> ME3167
                            </div>
                            <div class="list_guarantee_1">
                                <b>Xuất Xứ : </b> `+product.Xuat_xu+`
                            </div>
                            <div class="list_guarantee_1">
                                <b>Giới Tính : </b> `+product.gender+`
                            </div>
                            <div class="list_guarantee_1">
                                <b>Kính : </b> `+product.kinh+`
                            </div>
                            <div class="list_guarantee_1">
                                <b>Máy : </b> `+product.may+`
                            </div>
                            <div class="list_guarantee_1">
                                <b>Bảo Hành : </b> `+product.bao_hanh+`
                            </div>
                            <div class="list_guarantee_1">
                                <b>Đường kính Mặt Số : </b> `+product.duong_kinh+`
                            </div>
                            <div class="list_guarantee_1">
                                <b>Dây đeo : </b>`+product.day+`
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>`;

        if(product.so_luong != 0)
        {
            document.getElementsByClassName("inf_sp")[0].innerHTML += `<button class="btn_add_in"  onclick = "add_giohang('`+product.id+`',`+product.so_luong+`,`+product.price+`)"><b>Thêm vào giỏ hàng</b></button>`;
        }
        else{
            document.getElementsByClassName("inf_sp")[0].innerHTML += `<p class="Sold_out">Đã hết hàng</p>`;
        }
        start_vote1("start-icon1");
        Load_discount(product.value,product.discount);
        return;
    })
    
}
//#endregion

//#region xac nhan
function add_giohang(id_product,so_luong,price)
{
    if(auth.currentUser == null)
    {
        alert("Bạn chưa đăng nhập");
        return;
    }
    else{
        db.collection("customer").where("username","==",auth.currentUser.displayName).get().then((user)=>{
            let user_data ;
            user.forEach((data)=>{
                user_data = data;
            });
            var temp_giohang = user_data.data().gio_hang;
            let flag = true;
            for(let product of temp_giohang)
            {
                if(product.id == id_product)
                {
                    if(so_luong >= product.so_luong + 1)
                    {
                        product.so_luong ++;
                        flag = false;
                        break;
                    }
                    else{
                        alert("Vượt quá số lượng trong kho hàng !!!");
                        return;
                    }
                }
            }
            
            if(flag == true)
            {
                if(so_luong != 0)
                {
                    let temp_product = {
                        id : id_product,
                        so_luong : 1,
                        value : price
                    }
                    temp_giohang.push(temp_product);
                }
                else
                {
                    alert("Vượt quá số lượng trong kho hàng !!!");
                    return;
                }
            }
            db.collection("customer").doc(user_data.id).update({
                gio_hang : temp_giohang
            })
            .then(()=>{
                alert("Thêm giỏ hàng thành công !!!");
            })

        });
    }
}
//#endregion

//#region  tao ra ngoi sao

function start_vote1(name_id){
    for(let i = 0; i<5 ;i++)
    {
        document.getElementById(name_id).innerHTML += `<i class="far fa-star size-start"></i>`;
    }
}

//#endregion
//#region  title
function Load_Title(title)
{
    document.getElementById("title").innerHTML += `<b>`+title+`</b>`;
}
//#endregion
//#region sort theo checksort

let product_sort = [];
let array_tam = [];

function load_product_sorted(vitri,nameclass){//so luong san pham gioi tinh, vi tri, ten class  // sua o day 
    document.getElementsByClassName(nameclass)[vitri].innerHTML = "";
    for(let i of product_sort)
    {
        let value_string = "";
        if(i.discount != 0)
        {
            value_string = add_String(i.value-i.value*(i.discount/100));
        }
        else{
            value_string = add_String(i.value);
        }
            document.getElementsByClassName(nameclass)[vitri].innerHTML += 
        `<a href="#trang_ct_block" class="sp-cartide-1" id="`+i.id+`" onclick="CT_Product('`+i.id+`')">
        <div class="sp-cartide-bg">
            <img src="`+ i.img_list[0]+`" alt="">
            <p>`+i.name+`</p>
            <div class="start-icon" id = "start-icon_`+i.id+`">
            </div>
            <div class="value" id="value_product_`+i.id+`">
                <b>`+value_string+` ₫</b>
                
            </div>
            <div class="btn-shipping">
                <button>
                    <i class="fas fa-shopping-bag"></i>
                    <b>ADD TO CART</b>
                </button>
            </div>    
        </div>
        
        </a>`;
        start_vote1("start-icon_"+i.id);
        if(i.discount !=0)
        document.getElementById("value_product_"+i.id).innerHTML += `<b class="discount_block">-`+i.discount+` %</b>`;
    }
}

let array_push = [];
function sort_brand()
{
    array_push = [];
    for(let fl of floags)
    {
        if(fl.id == "brand" && fl.value != "")
        {
            let tam = "";
            for(let i of fl.array)
            {
                if(i.id == fl.value)
                {
                    
                    tam = i.name_brand;
                    break;
                }
            }
            for(let product of product_sort)
                {
                    if(product.brand == tam)
                    array_push.push(product);
                }
                product_sort = array_push;
                return;
        }
    }
}

function sort_value()
{
    array_push = [];
    for(let fl of floags)
    {

        if(fl.id == "value" && fl.value != "")
        {
            let from,to;
            for(let i of fl.array)
            {
                
                if(i.id == fl.value)
                {
                    from = i.from;
                    to = i.to
                    break;
                }
            }
            for(let product of product_sort)
                {
                    if(product.price > from && product.price < to)
                    array_push.push(product);
                }
                product_sort = array_push;
                return;
        }
    }
}

function sort_cl()
{
    array_push = [];
    for(let fl of floags)
    {
        if(fl.id == "cl" && fl.value != "")
        {
            let tam = "";
            for(let i of fl.array)
            {
                if(i.id == fl.value)
                {
                    tam = i.name;
                    break;
                }
            }
            for(let product of product_sort)
                {
                    if(product.day == tam)
                    array_push.push(product);
                }
                product_sort = array_push;
                return;
        }
    }
}

function sort_cl_matkinh()
{
    array_push = [];
    for(let fl of floags)
    {
        if(fl.id == "cl_Mat_Kinh" && fl.value != "")
        {
            let tam = "";
            for(let i of fl.array)
            {
                if(i.id == fl.value)
                {
                    tam = i.name;
                    break;
                }
            }
            for(let product of product_sort)
                {
                    if(product.kinh == tam)
                    array_push.push(product);
                }
                product_sort = array_push;
                return;
        }
    }
}

function sort_may()
{
    array_push = [];
    for(let fl of floags)
    {
        if(fl.id == "machine" && fl.value != "")
        {
            let tam = "";
            for(let i of fl.array)
            {
                if(i.id == fl.value)
                {
                    tam = i.name;
                    break;
                }
            }
            for(let product of product_sort)
                {
                    if(product.may == tam)
                    array_push.push(product);
                }
                product_sort = array_push;
                return;
        }
    }
}

function Sort_tang()
{
    
    for(let i = 0 ; i < product_sort.length; i++)
    {
        console.log(product_sort.length);
        for(let j = i + 1 ; j< product_sort.length ; j++)
        {
            if(product_sort[i].price > product_sort[j].price)
            {
                let tam = product_sort[i];
                product_sort[i] = product_sort[j];
                product_sort[j] = tam;
            }
        }
    }
    load_product_sorted(0,"list_products");
}

function Sort_giam()
{
    
    for(let i = 0 ; i < product_sort.length; i++)
    {
        console.log(product_sort.length);
        for(let j = i + 1 ; j< product_sort.length ; j++)
        {
            if(product_sort[i].price < product_sort[j].price)
            {
                let tam = product_sort[i];
                product_sort[i] = product_sort[j];
                product_sort[j] = tam;
            }
        }
    }
    load_product_sorted(0,"list_products");
}
function Check_sort_tang_or_giam()
{
    if(document.getElementById("sorts").value == "tang")
    {
        Sort_tang();
        return ;
    }
    if(document.getElementById("sorts").value == "giam")
    {
        Sort_giam();
        return;
    }
}
//#endregion
//#region Load Sort
let floags = [
    {
        id : "brand",
        name : "THƯƠNG HIỆU",
        floag : true,
        value : "",
        show : "",
        scroll : "scroll_x_y",
        array : [
            {
                id : "casio",
                name_brand : "Casio",
                gender : "nam" //test
            },
            {
                id : "citizen",
                name_brand : "Citizen",
                gender : "nam"
            }
            ,
            {
                id : "OP",
                name_brand : "Olym Pianus (Olympia Star)",
                gender : "nam"
            }
            ,{
                id : "doxa",
                name_brand : "Doxa",
                gender : "nam"
            }
            ,{
                id : "tissot",
                name_brand : "Tissot",
                gender : "nam"
            }
            ,{
                id : "logines",
                name_brand : "Logines",
                gender : "nam"
            }
            ,
            {
                id : "saga_nu",
                name_brand : "Saga",
                gender : "nu"
            },
            {
                id : "casio_nu",
                name_brand : "Casio",
                gender : "nu"
            },
            {
                id : "fouettle_nu",
                name_brand : "Fouettlé",
                gender : "nu"
            },
            {
                id : "citizen_nu",
                name_brand : "Citizen",
                gender : "nu"
            },
            {
                id : "doxa_nu",
                name_brand : "Doxa",
                gender : "nu"
            }
    ]
    }
    ,{
        id : "value",
        name : "LỌC THEO GIÁ",
        floag : true,
        value : "",
        show : "",
        scroll : "scroll_x_y",
        array : [
            {
                id : "value_1",
                from : 0,
                to : 2000000
            },
            {
                id : "value_2",
                from : 2000000,
                to : 4000000
            },
            {
                id : "value_3",
                from : 4000000,
                to : 6000000
            },
            {
                id : "value_4",
                from : 6000000,
                to : 8000000
            },
            {
                id : "value_5",
                from : 8000000,
                to : 10000000
            },
            {
                id : "value_6",
                from : 10000000,
                to : 20000000
            },
            {
                id : "value_7",
                from : 20000000,
                to : 30000000
            },
            {
                id : "value_8",
                from : 30000000,
                to : 40000000
            }
        ]
    },
    {
        id : "cl",
        name : "CHẤT LIỆU DÂY",
        floag : true,
        value : "",
        show : "",
        scroll : "scroll_x_y",
        array : [
            {
                name : "Da",
                id : "cl_1"
            },
            {
                name : "Thép Không Gỉ",
                id : "cl_2"
            }
            ,
            {
                name : "Lưới",
                id : "cl_3"
            }
            ,
            {
                name : "Vải",
                id : "cl_4"
            },
            {
                name : "Da Cá Sấu",
                id : "cl_5"
            },
            {
                name : "Nhựa",
                id : "cl_6"
            },
            {
                name : "Cao Su",
                id : "cl_7"
            }
        ]
    },
    {
        id : "cl_Mat_Kinh",
        name : "CHẤT LIỆU MẶT KÍNH",
        floag : true,
        value : "",
        show : "",
        scroll : "",
        array : [
            {
                name : "Cứng",
                id : "cl_Mat_Kinh_1"
            }
            ,
            {
                name : "Sapphire",
                id : "cl_Mat_Kinh_2"
            },
            {
                name : "Nhựa",
                id : "cl_Mat_Kinh_3"
            }
        ]
    }
    ,{
        id : "machine",
        name : "BỘ MÁY & NĂNG LƯỢNG",
        floag : true,
        value : "",
        show : "",
        scroll : "",
        array : [
            {
                name : "Quartz",
                id : "machine_1"
            }
            ,
            {
                name : "Automatic",
                id : "machine_2"
            },
            {
                name : "Năng Lượng Ánh Sáng",
                id : "machine_3"
            },
            {
                name : "Vừa Pin - Vừa Tự Động",
                id : "machine_4"
            }
        ]
    }
];

function check_sort()
{
    sort_brand();
    sort_value();
    sort_cl();
    sort_cl_matkinh();
    sort_may();
    load_product_sorted(0,"list_products");
}

function Load_product_brand_sort(id,sort_id) //toi uu id : name trong input sort_id : id trong floags
{
    
    if(document.getElementById(id).checked == true)
    {
        document.getElementById(sort_id).className= "";
        for(let fl of floags)
        {
            if(fl.id == sort_id)
            {
                for(let a of fl.array)
                {
                    if(a.id == id)
                    {
                        fl.value = a.id;
                        check_sort();
                        break;
                    }
                }
            }
        }

        //fix lai function nay
        let arrays = document.getElementsByClassName("check_"+sort_id);
        let s = 0;
        for(let brand of arrays)
        {
            let floag =  document.getElementsByClassName(sort_id+"_check")[s].checked;
            if(floag == false)
            {
                brand.style.display = "none";
            }
            s++;
        }
    }
    else{ //load san pham
        let arrays = document.getElementsByClassName("check_"+sort_id);
                    let s = 0;
                    for(let brand of arrays)
                        {
                            let floag =  document.getElementsByClassName(sort_id+"_check")[s].checked;
                            if(floag == false)
                            {
                            brand.style.display = "block";
                            }
                            s++;
                        }
                    
                    for(let fl of floags)
                    {
                        if(fl.id == sort_id)
                        {
                            fl.value = "";
                            if(fl.scroll != "")
                            document.getElementById(sort_id).className = "scroll_x_y";
                            product_sort = array_tam;
                            check_sort();
                            return;
                        }
                    }
                    
                }
                
}
function Load_Sort(gender)
{
    for(let Sort of floags)
    {
        document.getElementById("left_body").innerHTML += `
        <div class="border_top_bottom">
            <p><b>`+Sort.name+`</b></p>
            <div class="`+Sort.scroll+`" id="`+Sort.id+`"></div>
        </div>`;
        Load_brands_gender(gender,Sort.id);
    }   
}
function Load_brands_gender(gender,id_sort)
{
    document.getElementById(id_sort).innerHTML = "";
    for(let floag of floags)
    {
        if(floag.id == id_sort)
        {
            if(floag.id == "brand")
            {
                for(let title of floag.array)
                {
                    if(title.gender == gender)
                    {
                        document.getElementById(id_sort).innerHTML += `
                        <div class = "check check_brand">
                            <input type="checkbox"  id="`+title.id+`" class = "brand_check" onclick = "Load_product_brand_sort('`+title.id+`','`+floag.id+`')"> </input>
                            <label for="`+title.id+`"> `+title.name_brand+`</label>
                        </div>`;
                    }
                }
            }
            else
            if(floag.id == "value")
            {
                for(let title of floag.array)
                {
                    document.getElementById(id_sort).innerHTML += `
                    <div class = "check check_value">
                        <input type="checkbox"  id="`+title.id+`" class = "value_check" onclick = "Load_product_brand_sort('`+title.id+`','`+floag.id+`')"> </input>
                        <label for="`+title.id+`"> `+add_String(title.from)+` - `+add_String(title.to)+` </label>
                    </div>`;
                }
            }
            else{
                for(let title of floag.array)
                {
                    document.getElementById(id_sort).innerHTML += `
                    <div class = "check check_`+floag.id+`">
                        <input type="checkbox"  id="`+title.id+`" class = "`+floag.id+`_check" onclick = "Load_product_brand_sort('`+title.id+`','`+floag.id+`')"></input>
                        <label for="`+title.id+`">  `+title.name+`  </label>
                    </div>`;
                }
            }
            
        }
        
    }
}
//#endregion

//#region from sign-in
let form_sign_ins = [
    {
        name : "User Name",
        id : "username",
        limit : 'placeholder="Tên đăng nhập" autocomplete="off" required',
        type : "text"
    },
    {
        name : "PassWord",
        id : "password",
        limit : 'minlength="6" placeholder="Mật khẩu" autocomplete="off" required',
        type : "password" 
    }
    ,
    {
        name : "Email",
        id : "email",
        limit : 'placeholder="Địa chỉ email" autocomplete="off" required',
        type : "email"
    },
    {
        name : "Full Name",
        id : "fullname",
        limit : 'placeholder="Tên người dùng" autocomplete="off" required',
        type : "text"
    },
    {
        name : "Phone Number",
        id : "phonenumber",
        limit : 'placeholder="Số điện thoại" autocomplete="off" onkeypress="return event.charCode >= 48 && event.charCode <= 57"',
        type : "text"
    },
    {
        name : "Address",
        id : "address",
        limit : 'placeholder="Tên người dùng" autocomplete="off" required',
        type : "text"
    }];

function Form_sign_and_login(floag)
{
    if(floag == true)
    {
        for(let i = 0;i<2;i++)
        {
            if(i != 1)
            {
                document.getElementById("text_box_account").innerHTML += `<input type="text" id="`+form_sign_ins[i].id+`" placeholder="Tên đăng nhập" autocomplete="off" required>`;
            }
            else
            {
                document.getElementById("text_box_account").innerHTML += `<input type="password" id="`+form_sign_ins[i].id+`" minlength="6" placeholder="Mật khẩu" autocomplete="off" required>`;
            }
            document.getElementById("inf_account").innerHTML += `<p>`+form_sign_ins[i].name+` : </p>`;
            
        }
    }
    else
    {
        for(let i = 0;i<form_sign_ins.length;i++)
        {
            document.getElementById("inf_account").innerHTML += `<p>`+form_sign_ins[i].name+` : </p>`;
            document.getElementById("text_box_account").innerHTML += `<input type="`+form_sign_ins[i].type+`" id="`+form_sign_ins[i].id+`" `+form_sign_ins[i].limit +`>`
        }
    }
}

function Form_sign_and_login_checked(floag)
{

    if(floag == true)
    {
        for(let i = 0;i<form_sign_ins.length;i++)
        {
            if(i!=1)
            document.getElementById("inf_account").innerHTML += `<p>`+form_sign_ins[i].name+` : </p>`;
        }
        if(auth.currentUser != null)
        {
            db.collection("customer").where("username","==",auth.currentUser.displayName).get().then((data)=>{
                let temp_user;
                data.forEach((user)=>{
                    temp_user = user.data();
                })
                // console.log(temp_user);//test
                document.getElementById("TB").innerHTML = "";
                document.getElementById("text_box_account").innerHTML += `<input type="text" value="`+temp_user.username+`" disabled>`;
                document.getElementById("text_box_account").innerHTML += `<input type="text" value="`+temp_user.email+`" disabled>`;            
                document.getElementById("text_box_account").innerHTML += `<input type="text" value="`+temp_user.fullname+`" disabled>`;
                document.getElementById("text_box_account").innerHTML += `<input type="text" value="`+temp_user.address+`" disabled>`;
                document.getElementById("text_box_account").innerHTML += `<input type="text" value="`+temp_user.phonenumber+`" disabled>`;
            });
        }
        
    }
}

function Sign_and_login(number)
{
    document.getElementById("sign-in-account").innerHTML = "";
    document.getElementById("sign-in-account").innerHTML += `
    <form class="form-sign-in">
            <a href="#" id="btn-exit"></a>
            <div id="login">
                
            </div>
            <div id="center">

            </div>
            <div id="btn">    
                <div id ="TB">
                </div>
            </div>
    </form>
    `;
    if(number == 2) //Login
    {
        document.getElementById("btn-exit").innerHTML = `<i class="far fa-times-circle" onclick="Sign_and_login(2)"></i>`;
        document.getElementById("login").innerHTML += `<h2>Login</h2>`;
        document.getElementById("center").innerHTML += `<div id="form">
        <div id="inf_account"></div>
        <div id="text_box_account"></div>`
        Form_sign_and_login(true);
        document.getElementById("btn").innerHTML += `
        <div id="btn-login">
        <button><b onclick="Check_Account()">Login</b></button>
        </div>
        <i><b onclick="Sign_and_login(3)">Chưa có tài khoản ?</b></i>`
    }
    else if(number == 3)//sign up
    {
        document.getElementById("btn-exit").innerHTML = `<i class="far fa-times-circle" onclick="Sign_and_login(2)"></i>`;
        document.getElementById("login").innerHTML += `<h2>Sign Up</h2>`;
        document.getElementById("center").innerHTML += `<div id="form">
        <div id="inf_account"></div>
        <div id="text_box_account"></div>`
        Form_sign_and_login(false);
        document.getElementById("btn").innerHTML += `
        <div id="btn-login">
        <button><b onclick="Sign_In()">Sign In</b></button>
        </div>`
    }
    else{
        document.getElementById("btn-exit").innerHTML = `<i class="far fa-times-circle" onclick="Sign_and_login(4)"></i>`;
        document.getElementById("login").innerHTML += `<h2>Thông Tin TK</h2>`;
        document.getElementById("center").innerHTML += `<div id="form">
        <div id="inf_account"></div>
        <div id="text_box_account"></div>`
        Form_sign_and_login_checked(true);
        document.getElementById("btn").innerHTML += `
        <div id="btn-login">
        <button><b onclick="Sign_out()">Đăng xuất</b></button>
        </div>`
    };
}
//#endregion

//#region Check_sign_and login

function Check_Account()
{
    document.getElementById("TB").innerHTML = "";
    let user = document.getElementById("username").value;
    let pass = document.getElementById("password").value;

    if(user != "" && pass != "" && pass.length >= 6)
    {
        db.collection("customer").where("username","==",user).get().then((user)=>{
            let email_customer ;
            user.forEach((data)=>{
                email_customer = data.data().email;
            })
            auth.signInWithEmailAndPassword(email_customer, pass)
            .then((userCredential) => {
                alert("đăng nhập thành công");
                document.getElementById("sign_in_and_login").innerHTML = "";
                document.getElementById("sign_in_and_login").innerHTML += auth.currentUser.displayName;
                Sign_and_login(4);
                admin();
            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                console.log(errorCode);
                document.getElementById("TB").innerHTML = "";
                document.getElementById("TB").innerHTML +=`<i>Sai tài khoản hoặc mật khẩu</i>`;
            });
        });
        
    }
    
}
//#endregion

//#region Dang xuat
function Sign_out(){
    document.getElementById("sign_in_and_login").innerHTML = "";
    document.getElementById("sign_in_and_login").innerHTML += `REGISTER or SIGN IN`;

    Sign_and_login(2);
    auth.signOut();
}
//#endregion

//#region Sign_in
function Sign_In()
{
    let user = document.getElementById("username").value;
    let pass = document.getElementById("password").value;
    let full = document.getElementById("fullname").value;
    let phone = document.getElementById("phonenumber").value;
    let address = document.getElementById("address").value;
    let email = document.getElementById("email").value;

    if(user != "" && pass != "" && full != "" && phone != "" && address != "" && email != "")
    {
        db.collection("customer").where("username","==",user).get().then((temp_data)=>{
            let temp_dem = 0;
            temp_data.forEach((data)=>{
                temp_dem++;
            })
    
            if(temp_dem == 0){
                db.collection("customer").where("email","==",email).get().then((data)=>{
                    temp_dem =0;
                    data.forEach((temp)=>{
                        temp_dem++;
                    })
                    if(temp_dem == 0 )
                    {
                        console.log("hello");
                        db.collection("customer").doc().set({
                            username : user,
                            password : pass,
                            email : email,
                            fullname : full,
                            phonenumber : phone,
                            address : address,
                            gio_hang : [],
                            style : "customer",
                            date_submitted : new Date()
                        }).then((docRef)=>{
                            console.log(docRef);
                            auth.createUserWithEmailAndPassword(email,pass).then((userCredential)=>{
                                //login
                                auth.currentUser.updateProfile({
                                    displayName: user
                                });
                            })
                            auth.signOut();
                            alert("Đăng kí thành công");
                            Sign_and_login(2);
                        }).catch((error)=>{
                            console.log(error);
                        })
                    }
                    else{
                        document.getElementById("TB").innerHTML = "";
                        document.getElementById("TB").innerHTML +=`<i>Email đã được dùng</i>`;
                        return;
                    }
                })
            }
            else{
                document.getElementById("TB").innerHTML = "";
                document.getElementById("TB").innerHTML +=`<i>Tên tài khoản đã tồn tại</i>`;
                return;
            }
        })
    }
}
//#endregion

//#region Load Head
function Load_Head()
{
    document.getElementsByClassName("header")[0].innerHTML ="";
    document.getElementsByClassName("header")[0].innerHTML += `
    <!-- Navigation bar -->
        <div class="navigation-bar">
            <div class="task">
                <div class="task1">
                    <i class="fas fa-user-circle"></i>
                    <a href="#sign-in-account" id="sign_in_and_login">REGISTER or SIGN IN</a>
                </div>
            </div>
            <div class="menu">
                <div class="logo">
                    <p>LOGO</p>
                </div>
                <div class="infor">
                    <input type="text" placeholder=" ENTER YOUR KEYWORD " class="search">
                    <div class="inform">
                        <i class="fas fa-phone-square icon-call"></i>
                        <div class="call-me">
                            <b>800-140-1000s</b>
                            <p>Mon-Fri: 8:00-17:00</p>
                        </div>
                        <div class="icon-heart-shopping">
                            <i class="fas fa-shopping-basket icon icon-relative" onclick = "Load_giohang()"></i>
                            <i class="fas fa-circle icon-circle"></i>
                            <!-- So luong mua hang -->
                            <div><b id="number"></b></div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="navigation-l">
                
                <div class="head-navigation">
                    <b class="category">
                        <span class="fas fa-align-left"></span>
                        <span class="category-n"><b>THƯƠNG HIỆU</b></span> 
                    </b>
                    
                    <div class="dropdown-navigationbar">
                        <!-- dung js de ra cac thuong hieu -->
                        <script>  </script>    
                    </div>
                    
                </div>
                    <b class="navigation-list-first" onclick = "Load_Body()">
                        <h4><b >TRANG CHỦ</b></h4>
                    </b>
                <script></script>
            </div>
        </div>
        
        `;
        
        if(auth.currentUser != null)
        {
            document.getElementById("sign_in_and_login").innerHTML = auth.currentUser.displayName;
        }

        navigation_l();
        dropdown_navigation_bar();
}
//#endregion

//#region Load_body
function Load_Body()
{
    document.getElementById("link_css").href = "";
    document.getElementById("link_css").href = "./web.css";
    document.getElementById("body").innerHTML ="";
    document.getElementById("body").innerHTML += `
    <div class="trang_chu">
            <img src="./brands/banner-trang-chu-tet-2021-1536x447.jpg" alt="">
    </div>
    <div class="background-body">
    <div class="information-shop">
        <div class="information-dlivery">
            <i class="fas fa-globe color-icon"></i>
            <div class="font-color">
                <b>GIAO HÀNG TOÀN QUỐC</b>
                <P>Với chi nhánh trải khắp đất nước</P>
            </div>
        </div>
        <div class="information-shipping">
            <i class="fas fa-shipping-fast color-icon"></i>
            <div class="font-color">
                <b>MIỄN PHÍ VẬN CHUYỂN</b>
                <P>Bạn không cần lo lắng về chi phí vận chuyển.</P>
            </div>
        </div>
        <div class="information-moneyback">
            <i class="fas fa-shipping-fast color-icon"></i>
            <div class="font-color">
                <b>CHÍNH SÁCH ĐỔI TRẢ</b>
                <P>Đổi trả trong vòng 30 ngày nếu do lỗi từ nhà sản xuất</P>
            </div>
        </div>
    </div>
    <div>
        <h1 class="title_body"><hr> NHỮNG MẪU ĐỒNG HỒ BÁN CHẠY NHẤT NĂM <hr></h1>
    </div>
    <div class="sp-cartide">
        <div class="sp-cartide-l">
            <div class="menu-cartide">
                <b>Đồng Hồ </b>
                <div>
                    <b>Nam</b>
                </div>
            </div>
            <div>
                <ul class="list-car-tide">
                    <script></script>
                </ul>
            </div>
        
        </div>
        <span class="Sort_product"></span>
        <script></script>
        <i class="fas fa-chevron-circle-right size_next" onclick = "Load_Page_All_Products('nam');"></i>
    </div> 
    <div class="sp-cartide">
        <div class="sp-cartide-l">
            <div class="menu-cartide">
                <b>Đồng Hồ</b>
                <div>
                    <b>Nữ</b>
                </div>
            </div>
            <div>
                <ul class="list-car-tide">
                    <script></script>
                </ul>
                
            </div>
        </div>
        <span class="Sort_product">

        </span>
        <script></script>
        <i class="fas fa-chevron-circle-right size_next" onclick = "Load_Page_All_Products('nu');"></i>
</div>

<div id="gio_hang"></div>`;
Load_brands("nam",0);
load_product(3,"nam",0,"Sort_product");
Load_brands("nu",1);
load_product(3,"nu",1,"Sort_product");
}
//#endregion

//#region Load_footer
function Load_Footer()
{
    document.getElementsByClassName("footer")[0].innerHTML = "";
    document.getElementsByClassName("footer")[0].innerHTML += `
    <div class="padding_footer">
            <div class="subscribe">
                <div>
                    <i class="fas fa-envelope-open-text icon-letter"></i>
                </div>
                <div class="subscribe-im">
                    <b>SIGN FOR NEWSLETTERS</b>
                    <b><p>Be the First to Know. Sign up for newsletter today</p></b>
                </div>
                <div class="text-box">
                    <input type="text" placeholder="Enter your email address">
                    <button>Subcride</button>
                </div>
            </div>
            <div class="footer">
                <div class="contact-us bg-footer">
                    <b class="title-footer">ContactUs</b>
                    <div class="flex">
                        <i class="fas fa-mobile-alt icon-contact"></i>
                        <div class="footer1">
                            <p>Call Customer Services, We support 24/7 :</p>
                            <b>84-0123-456-789</b>
                        </div>
                    </div>
                    <div class="flex">
                        <i class="fas fa-map-marker-alt icon-contact"></i>
                        <div class="footer1">
                            <b>Address:</b>
                            <p>PO Box 1622 Vissaosang Street West</p>
                        </div>
                    </div>
                    <div class="flex">
                        <i class="fas fa-envelope-open-text icon-contact"></i>
                        <div class="footer1">
                            <b>Email:</b>
                            <p>Support@domain.com</p>
                        </div>
                    </div>
                </div>
                <div class="custumer-service bg-footer">
                    <b class="title-footer">Customer Service</b>
                    <ul class="list">
                        <li><a href="">Contact us</a></li>
                        <li><a href="">Help and advice</a></li>
                        <li><a href="">Shipping & Return</a></li>
                        <li><a href="">Terms and conditions</a></li>
                        <li><a href="">Refund Policy</a></li>
                        <li><a href="">Delivery information</a></li>
                        
                    </ul>
                </div>
                <div class="information bg-footer1">
                    <b class="title-footer">Information</b>
                    <ul class="list">
                        <li><a href="">About us</a></li>
                        <li><a href="">Testimonials</a></li>
                        <li><a href="">My Account</a></li>
                        <li><a href="">Payments & Returns</a></li>
                        <li><a href="">View Catalogues Online</a></li>
                        <li><a href="">Our Sitemap</a></li>
                    </ul>
                </div>
            </div>
        
            <div class="block">
                <div class="left-footer">
                    <b>Copyright &#169; 2019 </b>
                </div>
                <div class="right-footer">
                    <i class="fab fa-cc-mastercard v"></i>
                    <i class="fab fa-cc-mastercard v"></i>
                    <i class="fab fa-paypal v"></i>
                    <i class="fab fa-google-pay v"></i>
                </div>
                
            </div>
        </div>`;

}
//#endregion

//#region Load_trang chu
function Load_Trang_Chu()
{
    document.getElementById("main").innerHTML = "";
    document.getElementById("main").innerHTML += `<!-- Dang nhap - Dang ki tai khoan -->
    <div class="confirm-accepted"></div>
    <div id="List-order-incart"></div>
    <div class="option">
      <i class="fas fa-plus-circle plus_incart"></i>
      <div class="drop_option">
        <div class="shopping-cart" onclick = "Load_list_order()">
            <img src="./img/shopping-cart.png" alt="">
          <p>Đơn hàng</p>
        </div>
      </div>
    </div>
    <div id="sign-in-account" class="sign-in"></div>
    <!-- Header -->
    <div class="header"></div>
    <div id="body"></div>
    <div id="footer_title">
        <div class="footer"></div>
    </div>
    
    <div id="block_page_inf" onclick="CT_Product_Exit()">
        <div id="trang_ct_block" class="trang_ct_class">
            <div class="trang_ct" id="inf_product">
                
            </div>
        </div>
    </div>`;
    if(auth.currentUser != null){
        Sign_and_login(4);
    }
    else{
        Sign_and_login(2);
    }
    Load_Head();
    Load_Body();
    Load_Footer();
}
//#endregion


// Trang chi tiet san pham
//#region Load trang chi tiet
function Load_Title_Inf_Product(name)
{
    for(let i of arr_navigation)
    {
        if(i.id == name)
        {
            document.getElementsByClassName("page_inf")[0].innerHTML += `<img src="`+i.img+`" alt="" class="img-banner" >
            <p><i>`+i.intro+`</i></p>`;
            document.getElementById("title").innerHTML += `<b>Đồng Hồ `+i.name+`</b>`;
            return;
        }
    }
}
function Load_kq(name){
    let s = load_product(15,name,0,"list_products");//them san pham o day
    if(s <= 15)
    {
       document.getElementById("number_sort").innerHTML += `Hiện thị 1-`+s+` của `+s+` kết quả : `; 
       Load_Number_sort(s);
    }
    else{
        document.getElementById("number_sort").innerHTML += `Hiện thị 1-15 của `+s+` kết quả : `;
        Load_Number_sort(s); 
    }
}
function Load_Number_sort(number){
    let s = number;
    let a= 1;
    document.getElementsByClassName("sort_2")[0].innerHTML += `<a href="" class="number_page">&raquo;</a>`;
    if(number > 15)
    {
        while(s != 0)
        {
        document.getElementsByClassName("sort_2")[0].innerHTML +=`<a href="" class="number_page">`+a+`</a>`;
        s /= 15;
        a++;
        }
    }
    else
    {
        document.getElementsByClassName("sort_2")[0].innerHTML +=`<a href="" class="number_page">1</a>`;
    }
    
    document.getElementsByClassName("sort_2")[0].innerHTML += `<a href="" class="number_page">&laquo;</a>`;
}
//#endregion 

//#region Load_page_all_products
function Load_Page_All_Products(id)//theo gender
{
    document.getElementById("link_css").href = "";
    document.getElementById("link_css").href = "./web_listsp.css";
    document.getElementById("body").innerHTML = "";
    document.getElementById("body").innerHTML +=`
    <div id="title"> 
    </div>
    <div class="body">
        <!-- Left -->
        <div id="left_body">
            <script>Load_Sort("Nam")</script>
        </div>
        <!-- Right -->
        <div id="right_body">
            <div id="padding">
            <div class="page_inf">
            </div>
            <!-- Load san pham -->
            <div class="product">
                <div class="sort_list">
                    <div class="sort_1">
                        <label for="sorts" id="number_sort"></label>
                        <select name="sorts" id="sorts" onchange="Check_sort_tang_or_giam()">
                            <option value="New">Mới nhất</option>
                            <option value="giam">Theo giá : Từ cao tới thấp</option>
                            <option value="tang" >Theo giá : Từ thấp tới cao</option>
                        </select>
                    </div>
                    <div class="sort_2">
                    </div>
                </div>
                <div class="list_products">
                </div>
            </div>
        </div>
        </div>    
    </div>
    <div class="social_page">
        <p>SOCIAL PAGE : </p>
        <ul id="Social">
            <a href="https://www.facebook.com/profile.php?id=100008122305731"><i class="fab fa-facebook-square"></i></a>
            <a href=""><i class="fab fa-instagram"></i></a>
            <a href=""><i class="fab fa-youtube-square"></i></a>
            <a href=""><i class="fab fa-skype"></i></a>
        </ul>
    </div>
    <div id="gio_hang"></div>`;
    Load_Sort(id);
    Load_Title_Inf_Product(id);
    Load_kq(id); 
}
//#endregion


//#region Load gio hang
function Exit_giohang()
{
    document.getElementById("gio_hang").style.display = "none";
}

function Load_giohang()
{
    if(auth.currentUser != null)
    {
        document.getElementById("gio_hang").style.display = "flex";
        db.collection("customer").where("username","==",auth.currentUser.displayName).get().then((list)=>{
            let account;

            list.forEach((user)=>{
                account = user.data();
            });
            Load_list_giohang(account.gio_hang);
            return;
        })
    }
    else{
        alert("ban chưa có đăng nhập !!!");
    }
    
}
function Load_discount_giohang(value,price,vitri)
{
    if(value == price)
    {
        document.getElementsByClassName("value_product_giohang")[vitri].innerHTML +=`<p class="discount_sp">`+add_String(value)+` ₫</p>`;
        return;
    }
    else
    {
        document.getElementsByClassName("value_product_giohang")[vitri].innerHTML += `
        <p class="value_sp">`+add_String(value)+` ₫</p>
        <p class="discount_sp">`+add_String(price)+` ₫</p>`;
    }
}

function Load_soluong_tang(vitri,vitri2,value,id)
{
    let a = parseInt(document.getElementById(vitri).value);

    db.collection("customer").where("username","==",auth.currentUser.displayName).get().then((data)=>{
        let user_temp;
        data.forEach((user)=>{
            user_temp = user;
        })
        let temp_giohang = user_temp.data().gio_hang;
        let temp_soluong;

        products.forEach((product)=>{
            if(product.id == id)
            {
                temp_soluong = product.so_luong;
            }
        })
        temp_giohang.forEach((product)=>{
            if(product.id == id){
                if(temp_soluong > a)
                {
                    a++;
                    document.getElementById(vitri).value = '';
                    document.getElementById(vitri).value = a;
                    product.so_luong = a;
                    console.log(user_temp.id);
                }
                else{
                    alert("không đủ sồ lượng trong kho");
                }
            }
            db.collection("customer").doc(user_temp.id).update({
                gio_hang : temp_giohang
            }).then(()=>{
                Load_value_giohang(vitri,vitri2,value);
            })
        })
    })
}

function Load_soluong_giam(vitri,vitri2,value,id)
{
    let a = parseInt(document.getElementById(vitri).value);
    a--;
    if(a!=0)
    {
        let user = document.getElementById("sign_in_and_login").innerHTML;
        document.getElementById(vitri).value = '';
        document.getElementById(vitri).value = a;
        db.collection("customer").where("username","==",auth.currentUser.displayName).get().then((data)=>{
            let user_temp;
            data.forEach((user)=>{
                user_temp = user;
            })
            let temp_giohang = user_temp.data().gio_hang;

            temp_giohang.forEach((product)=>{
                if(product.id == id)
                {
                    product.so_luong = a;
                }
            })

            db.collection("customer").doc(user_temp.id).update({
                gio_hang : temp_giohang
            }).then(()=>{
                Load_value_giohang(vitri,vitri2,value);
            })

        })
    }
}

function Load_value_giohang(vitri,vitri2,value)
{
    
    let a = parseInt(document.getElementById(vitri).value);
    document.getElementById(vitri2).innerHTML = "";
    document.getElementById(vitri2).innerHTML += ``+add_String(a*value)+` ₫`;
    Load_sum_all();
}

function Load_product_delete(id)
{
    let user = document.getElementById("sign_in_and_login").innerHTML;
    let a=[];
    db.collection("customer").where("username","==",auth.currentUser.displayName).get().then((data)=>{
        let user_temp;
        data.forEach((user)=>{
            user_temp = user;
        })

        let temp_giohang = user_temp.data().gio_hang;
        let count = 0;
        temp_giohang.forEach((product)=>{
            if(product.id == id)
            {
                temp_giohang.splice(count,1);
            }
            count ++;
        })

        //update data
        db.collection("customer").doc(user_temp.id).update({
            gio_hang : temp_giohang
        })
        .then(()=>{
            console.log("xoa gio hang thanh cong!!!");
            Load_giohang();
            Load_sum_all();
        })

        
    })
}

function Load_sum_all(){
    let user = document.getElementById("sign_in_and_login").innerHTML;
    let sum = 0;
    db.collection("customer").where("username","==",auth.currentUser.displayName).get().then((data)=>{
        let user_temp ;
        data.forEach((user)=>{
            user_temp = user;
        })

        let temp_giohang = user_temp.data().gio_hang;
        temp_giohang.forEach((product)=>{
            sum += product.value * product.so_luong;
        })
        console.log(sum);
        document.getElementById("sum_all_sp").innerHTML = '';
        document.getElementById("sum_all_sp").innerHTML = add_String(sum) +` ₫`;
    })
    
}

function Load_ct_sp_Exit()
{
    document.getElementsByClassName("gio_hang_background")[0].style.display = "block";
    document.getElementsByClassName("ct_product_giohang_1")[0].style.display = "none";
    document.getElementsByClassName("ct_product_giohang_1")[0].innerHTML = "";
}

function Load_ct_sp(id)
{
    let a = parseInt(id);
    document.getElementsByClassName("ct_product_giohang_1")[0].style.display = "block";
    document.getElementsByClassName("ct_product_giohang_1")[0].innerHTML = "";

    db.collection("products").doc(id).get().then((data)=>{
        let product = data.data();
        document.getElementsByClassName("ct_product_giohang_1")[0].innerHTML +=
            `
            <div><i class="far fa-times-circle" id="Exit" onclick="Load_ct_sp_Exit()"></i></div>
            <div class="title_sp">
                <h2><p id = "product_name">`+product.name+`</p></h2>
            </div>
            <div class="ct_sp">
                <div class="img_sp">
                    <img src="`+product.img_list[2]+`" class="list-img-sp img_1_3">
                    <img src="`+product.img_list[2]+`" class = "img_product_ img_3" >
                    
                    <img src="`+product.img_list[1]+`" class="list-img-sp img_1_2">
                    <img src="`+product.img_list[1]+`" class = "img_product_ img_2">

                    <img src="`+product.img_list[0]+`" class="list-img-sp img_1_1">
                    <img src="`+product.img_list[0]+`" alt="" class = "img_product_ img_1">
                </div>
    
                <div class="inf_sp">
                    <p>THÔNG TIN SẢN PHẨM</p>
                    <div id="start-icon1">
                        
                    </div>
                    
                    <p>(3 đánh giá của khách hàng)</p>
                    <p>Mã số sản phẩm : <p class="id_sp">BI1050-81A</p></p>
                    <div id="price">
                        
                    </div>
                    
                    <p class="page_inf">`+product.inf+`</p>
                </div>
                <div class="brand">
                    <div class="img_brand">
                        <div class="img_brand_1">
                            <p>THƯƠNG HIỆU</p>
                            <img src="`+Find_Brand(product.brand)+`" alt="">
                        </div>
                    </div>
                    <div class="guarantee">
                        <p>MÔ TẢ SẢN PHẨM</p>
                    </div>
                    <div class="list_guarantee">
                        
                        <div class="guarantee_1">
                            <div class="list_guarantee_1">
                                <b>Thương Hiệu : </b> `+product.brand+`
                            </div>
                            <div class="list_guarantee_1">
                                <b>Số Hiệu Sản Phẩm : </b> ME3167
                            </div>
                            <div class="list_guarantee_1">
                                <b>Xuất Xứ : </b> `+product.Xuat_xu+`
                            </div>
                            <div class="list_guarantee_1">
                                <b>Giới Tính : </b> `+product.gender+`
                            </div>
                            <div class="list_guarantee_1">
                                <b>Kính : </b> `+product.kinh+`
                            </div>
                            <div class="list_guarantee_1">
                                <b>Máy : </b> `+product.may+`
                            </div>
                            <div class="list_guarantee_1">
                                <b>Bảo Hành : </b> `+product.bao_hanh+`
                            </div>
                            <div class="list_guarantee_1">
                                <b>Đường kính Mặt Số : </b> `+product.duong_kinh+`
                            </div>
                            <div class="list_guarantee_1">
                                <b>Dây đeo : </b>`+product.day+`
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>`;
        start_vote1("start-icon1");
        Load_discount(product.value,product.discount);
        return;
    })
}

function Load_CT_giohang(id)
{
    document.getElementsByClassName("gio_hang_background")[0].style.display = "none";
    Load_ct_sp(id);
}

function Load_Thanh_toan()
{
    db.collection("customer").where("username","==",auth.currentUser.displayName).get().then((data)=>{
        let user_temp;
        data.forEach((user)=>{
            user_temp = user;
        })
        let date_submmited = new Date();
        if(user_temp.data().gio_hang.length > 0)
        {
            db.collection("order").add({
                id_user : user_temp.id,
                date_submitted : date_submmited,
                list_product_incart : user_temp.data().gio_hang
            })
            .then(()=>{
                //update so luong san pham
                user_temp.data().gio_hang.forEach((product)=>{
                    for(let temp_product of products)
                    {
                        if(temp_product.id == product.id){
                            db.collection("products").doc(product.id).update({
                                so_luong : temp_product.so_luong - product.so_luong
                            })

                        }
                    }
                })
    
                //update gio hang
                db.collection("customer").doc(user_temp.id).update({
                    gio_hang : []
                })
                .then(()=>{
                    alert("Thanh toán thành công !!!");
                    Load_giohang();//test
                    products = [];
                    Load_data_product_in_firestore();
                })
                
            })
        }
        else{
            alert("Không có sản phẩm trong giỏ hàng !!!");
        }
    })
}

function Load_list_giohang(array_product)
{
    document.getElementById("gio_hang").innerHTML = "";
    document.getElementById("gio_hang").innerHTML += `<div class="gio_hang_background">
    <div class="giohang_header">
        <h2>Giỏ Hàng</h2>
        <i class="far fa-times-circle Exit_btn" onclick ="Exit_giohang()"></i>
        
    </div>
    <div class="title_giohang">
        <h3 class="name_title_sp">Sản Phẩm</h3>
        <h3 class="name_title_value">Giá / Discount</h3>
        <h3 class="name_title_value">Số Lượng</h3>
        <h3 class="name_title_price">Số Tiền</h3>
    </div>
    <div class="List_sp_giohang">
    </div>
    <div class="sum_value">
        <h2>Tổng Tiền: </h2>
        <h1 id="sum_all_sp"></h1>
        <button onclick = "check_confirm_checkout('Bạn có muốn đặt hàng những sản phẩm này ?')">Mua Hàng</button>
    </div>
</div>
    <div class = "ct_product_giohang_1" >
    </div>`;

    let vitri = 0;
    for(let product of array_product)
    {
        for(let a of products)
        {
            if(a.id == product.id)
            {
                document.getElementsByClassName("List_sp_giohang")[0].innerHTML +=
                `<div class="product_giohang">
                    <div class="ct_product_giohang" id = "`+a.id+`" onclick = "Load_CT_giohang('`+a.id+`')">
                        <img src="`+a.img_list[0]+`" alt="" >
                        <p class="name_product_giohang">`+a.name+`</p>
                    </div>
                    <div class="value_product_giohang">
                    </div>
                    <div class="so_luong">
                        <p class="so_luong_1" onclick = "Load_soluong_giam('so_luong_2_`+a.id+`','sum_product_`+a.id+`','`+a.price+`','`+product.id+`')">-</p>
                        <input type="text"  class="so_luong_2" id="so_luong_2_`+a.id+`"  value = "`+product.so_luong+`">
                        <p class="so_luong_1" onclick = "Load_soluong_tang('so_luong_2_`+a.id+`','sum_product_`+a.id+`','`+a.price+`','`+product.id+`')">+</p>
                    </div>
                    <p class="sum_product" id = "sum_product_`+a.id+`">`+add_String(a.price * product.so_luong)+` ₫ </p>
                    <i class="fas fa-trash-alt icon_delete" id = "delete_`+a.id+`" onclick = "check_confirm_delete_product('Bạn thực sự muốn xóa sản phẩm này ?','`+product.id+`')"> Xóa</i>
                    </div>
                </div>`;
                Load_discount_giohang(a.value,a.price,vitri);

                vitri++;
                break;
            }
        }
            
    }
    Load_sum_all();
}
//#endregion

//#region Them san pham
function admin()
{
    let user = auth.currentUser.displayName;
    db.collection("customer").where("username","==",user).get().then((account)=>{
        let temp_account ;
        account.forEach((user_account)=>{
            temp_account = user_account;
        })
        if(temp_account.style == "Admin")
            {
                document.getElementById("btn-login").innerHTML += `<button><b onclick="">Admin</b></button>`;
            }
    });
}
//#endregion
function render_order(array_list,dem){
    let sum = 0;
    for(let product of array_list){

        db.collection("products").doc(product.id).get().then((doc)=>{
            document.getElementsByClassName("list-product-order")[dem].innerHTML += `
            <div class="order-product">
                    <img src="`+doc.data().img_list[0]+`" alt="">
                    <div class="info-product-order-bg border-bottom">
                        <div class="info-product-order ">
                            <div class="name-pd-order">
                                <p>`+doc.data().name+`</p>
                            </div>
                            <div class="amount-pd-order"><p>Số lượng : `+product.so_luong+`</p></div>
                            <div class="price-pd-order">`+add_String(product.value*product.so_luong)+` ₫</div>
                        </div>
                    </div>
            </div>`;
        });
        sum+= product.value*product.so_luong;
    }
    return sum;
}
function buble_sort(temp_list)
{
    let list_render_product =[];
    temp_list.forEach((order)=>{
        let temp = {
            id : order.id,
            data : order.data()
        }
        list_render_product.push(temp);
    })
    for (let i = 0; i < list_render_product.length - 1; i++)
    {
        for (let j = 0; j < list_render_product.length - i - 1; j++)
        {
            if (list_render_product[j].data.date_submmited.seconds < list_render_product[j+1].data.date_submmited.seconds) 
            {
                // swap arr[j+1] và arr[i]
                console.log("chuyen ");
                let temp = list_render_product[j];
                list_render_product[j] = list_render_product[j + 1];
                list_render_product[j + 1] = temp;
            }
        }
    }
    return list_render_product;
}
function Load_list_order(){
    document.getElementById("List-order-incart").innerHTML = '';
    document.getElementById("List-order-incart").innerHTML += `
    <div class="order">
        <div class="order-back">
            <div class="list-order">
                <div class="close-button" onclick="close_tab_order()">
                    <i class="far fa-times-circle" ></i>
                </div>
                <div class="title-order">ĐƠN HÀNG</div>
                <div class="list-order-status">
                    
                    <div class="show-order">    
                        <div class="list-order-accept show-order-bg">
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>`;
    document.getElementsByClassName("order")[0].style.display = "flex";

    db.collection("customer").where("username","==",auth.currentUser.displayName).get().then((data)=>{
        let user_temp ;
        data.forEach((user)=>{
            user_temp = user;
        })
        console.log(user_temp.id);
        let count = 0;
        db.collection("order").where("id_user","==",user_temp.id).get().then((data_order)=>{
            let temp_list_order = buble_sort(data_order);
            temp_list_order.forEach((order)=>{
                document.getElementsByClassName("show-order-bg")[0].innerHTML += `
                    <div class="list-order-info">
                        <div class="list-order-info-left">
                            <div class="title-order-info">
                                <p>Mã đơn hàng : #`+order.id+`</p>
                                <p></p>
                            </div>
                            <div class="list-product-order">
                            </div>
                        </div>
                        <div class="list-order-info-right">
                            <div class="list-order-info-right-bg">
                                <div class="order-cart">
                                    <p class="title-or">Tổng giá trị sản phẩm</p>
                                    <p class="sum-price-order"></p>
                                </div>
                                <div class="order-cart">
                                    <div class="shipper-type">
                                        <p class="title-or">Phí vận chuyển</p>
                                        <p class="type-ship-cash"></p>
                                    </div>
                                    <p class="ship-cash"> ₫</p>
                                </div>
                                <div class="order-cart">
                                    <div class="payment">
                                        <p class="title-or">Số tiền phải thanh toán</p>
                                        <p>Thanh toán khi giao hàng (COD)</p>
                                    </div>
                                    <p class="ship-code"> ₫</p>
                                </div>
                                <p class="cancel-order"> 
                                
                                </p>
                            </div>
                        </div>
                    </div>`;
                let sum =0;
                sum = render_order(order.data.list_product_incart,count);
                
                document.getElementsByClassName("ship-cash")[count].innerHTML =add_String("15000") + "₫";
                let sum_checkout = add_String(sum + Number(45000));
                document.getElementsByClassName("sum-price-order")[count].innerHTML = add_String(sum) + " ₫";
                document.getElementsByClassName("ship-code")[count].innerHTML = sum_checkout + " ₫";

                count++;
            })
           
        })
    })  
}

function close_tab_order(){
    document.getElementsByClassName("order")[0].style.display = "none";
}

// check comfirm
function render_From_confirm(message)
{
    document.getElementsByClassName("confirm-accepted")[0].style.display = "flex";
    document.getElementsByClassName("confirm-accepted")[0].innerHTML = "";
    document.getElementsByClassName("confirm-accepted")[0].innerHTML += `<div class="pop-up-comfirm">
    <p>`+message+`</p>
    <div class="selection-bool">
        <input type="submit" value="Đồng ý" onclick = "" id="accept">
        <input type="submit" value="Trở về" id ="cancel">
    </div>
    </div>`;
}

function check_confirm_delete_product(message,id_product)
{
    render_From_confirm(message);
    
    document.getElementById("accept").addEventListener("click",()=>{
        Load_product_delete(id_product)
        document.getElementsByClassName("confirm-accepted")[0].style.display = "none";
        document.getElementsByClassName("confirm-accepted")[0].innerHTML = "";
    });
    document.getElementById("cancel").addEventListener("click",()=>{
        document.getElementsByClassName("confirm-accepted")[0].style.display = "none";
        document.getElementsByClassName("confirm-accepted")[0].innerHTML = "";
    });
}

function check_confirm_checkout(message)
{
    db.collection("customer").where("username","==",auth.currentUser.displayName).get().then((data)=>{
        let user_temp;
        data.forEach((user)=>{
            user_temp = user;
        })
        if(user_temp.data().gio_hang.length > 0)
        {
            render_From_confirm(message);
            document.getElementById("accept").addEventListener("click",()=>{
                Load_Thanh_toan();
                document.getElementsByClassName("confirm-accepted")[0].style.display = "none";
                document.getElementsByClassName("confirm-accepted")[0].innerHTML = "";
            });
            document.getElementById("cancel").addEventListener("click",()=>{
                document.getElementsByClassName("confirm-accepted")[0].style.display = "none";
                document.getElementsByClassName("confirm-accepted")[0].innerHTML = "";
            });
        }
        else{
            alert("Không có sản phẩm trong giỏ hàng !!!");
        }
    });
    
}