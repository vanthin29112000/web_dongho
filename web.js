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
    for(let i of arr_navigation)
    {
        let title = i.name;

        document.getElementsByClassName("navigation-l")[0].innerHTML += 
        `<b onclick= Load_Page_All_Products("`+i.name+`"); class="navigation-list-first">
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
}
//#region Brands
    let Brands = [
        {
            id : "casio",
            name_brand : "Casio",
            gender : "Nam"
        },
        {
            id : "citizen",
            name_brand : "Citizen",
            gender : "Nam"
        }
        ,
        {
            id : "OP",
            name_brand : "Olym Pianus (Olympia Star)",
            gender : "Nam"
        }
        ,{
            id : "doxa",
            name_brand : "Doxa",
            gender : "Nam"
        }
        ,{
            id : "tissot",
            name_brand : "Tissot",
            gender : "Nam"
        }
        ,{
            id : "logines",
            name_brand : "Logines",
            gender : "Nam"
        }
        ,
        {
            id : "saga_nu",
            name_brand : "Saga",
            gender : "Nữ"
        },
        {
            id : "casio_nu",
            name_brand : "Casio",
            gender : "Nữ"
        },
        {
            id : "fouettle_nu",
            name_brand : "Fouettlé",
            gender : "Nữ"
        },
        {
            id : "citizen_nu",
            name_brand : "Citizen",
            gender : "Nữ"
        },
        {
            id : "doxa_nu",
            name_brand : "Doxa",
            gender : "Nữ"
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
let products = [
    {
        id : "1",
        name : "CASIO EFR-526L-1AVUDF",
        brand : "Casio",
        Xuat_xu : "Nhật Bản",
        gender: "Nam",
        so_luong : 3,
        img_list : ["./sanpham/Nam/Casio/nam_1.webp","./sanpham/Nam/Casio/nam_1.1.webp","./sanpham/Nam/Casio/nam_1.2.webp"],
        value : 3196000,
        discount : 0,
        price : 3196000,
        kinh : "Cứng",
        may : "Quartz",
        bao_hanh : "1 Năm",
        duong_kinh : "43.8mm",
        day : "Da",
        inf : "Đồng hồ Casio EFR-526L-1AVUDF có vỏ kim loại bằng chất liệu thép không gỉ tinh tế, kim chỉ và vạch số được phủ phản quang nổi bật trên nền số màu đen mạnh mẽ, có ô lịch ngày vị trí 3h, dây đeo da màu đen có vân đem lãi vẻ lịch lãm.",
        vote : 5,
        comment : []
    }
    ,
    {
        id : "2",
        name : "CASIO MTP-1384L-1AVDF",
        brand : "Casio",
        Xuat_xu : "Nhật Bản",
        gender: "Nam",
        so_luong : 4,
        img_list : ["./sanpham/Nam/Casio/nam_2.webp","./sanpham/Nam/Casio/nam_2.1.webp","./sanpham/Nam/Casio/nam_2.2.webp"],
        value : 1974000,
        discount : 5,
        price : 1974000 - 1974000*(5/100),
        kinh : "Cứng",
        may : "Quartz",
        bao_hanh : "1 Năm",
        duong_kinh : "41mm",
        day : "Da",
        inf : "Đồng hồ Casio MTP-1384L-1AVDF với mặt đồng hồ tròn truyền thống, màu đồng của kim chỉ và vạch chỉ giờ cùng niềng sang trọng, nổi bật trên nền đen mặt số, dây đeo da nâu thanh lịch, lịch lãm.",
        vote : 5,
        comment : []
    }
    ,
    {
        id : "3",
        name : "CITIZEN BU2026-65H",
        brand : "Citizen",
        Xuat_xu : "Nhật Bản",
        gender: "Nam",
        so_luong : 5,
        img_list : ["./sanpham/Nam/Casio/nam_3.webp","./sanpham/Nam/Casio/nam_3.1.webp","./sanpham/Nam/Casio/nam_3.2.webp"],
        value : 13800000,
        discount : 0,
        price : 13800000,
        kinh : "Cứng",
        may : "Năng Lượng Ánh Sáng",
        bao_hanh : "1 Năm",
        duong_kinh : "43mm",
        day : "Da",
        inf : "Đồng hồ Citizen BU2026-65H có mặt số tròn lớn với viền kim loại bo tròn tinh tế quanh nền số màu đen mạnh mẽ, kim chỉ và vạch số sắc nét nổi bật, dây đeo demi vàng hồng cho phái mạnh.",
        vote : 5,
        comment : []
    },
    {
        id : "4",
        name : "CITIZEN NH8363-14H",
        brand : "Citizen",
        Xuat_xu : "Nhật Bản",
        gender: "Nam",
        so_luong : 2,
        img_list : ["./sanpham/Nam/Casio/nam_4.webp","./sanpham/Nam/Casio/nam_4.1.webp","./sanpham/Nam/Casio/nam_4.2.webp"],
        value : 5780000,
        discount : 15,
        price : 5780000 - 5780000*(15/100),
        kinh : "Cứng",
        may : "Automatic",
        bao_hanh : "1 Năm",
        duong_kinh : "41mm",
        day : "Da",
        inf : "Đồng hồ nam Citizen NH8363-14H với phong cách cổ điển dành cho nam, kim chỉ và chữ số mạ vàng sang trọng nổi bật trên nền đen nam tính, kết hợp cùng với dây đeo bằng da nâu tạo vẻ sang trọng hoài cổ cho phái nam.",
        vote : 5,
        comment : []
    }
    ,
    {
        id : "5",
        name : "OP 990-17AMS-T",
        brand : "Olym Pianus (Olympia Star)",
        Xuat_xu : "Nhật Bản",
        gender: "Nam",
        so_luong : 3,
        img_list : ["./sanpham/Nam/Casio/nam_5.webp","./sanpham/Nam/Casio/nam_5.1.webp","./sanpham/Nam/Casio/nam_5.2.webp"],
        value : 4050000,
        discount : 9,
        price : 4050000 - 4050000*(9/100),
        kinh : "Cứng",
        may : "Automatic",
        bao_hanh : "1 Năm",
        duong_kinh : "42mm",
        day : "Thép Không Gỉ",
        inf : "Đồng hồ Olym Pianus (Olympia Star) 990-17AMS-T có vỏ và dây đeo kim loại màu bạc sáng bóng, kim chỉ và vạch số độc đáo nổi bật trên nền số màu trắng trang nhã, tạo nên phụ kiện thời trang sang trọng.",
        vote : 5,
        comment : []
    }
    ,
    {
        id : "6",
        name : "OP 58092MSK-T",
        brand : "Olym Pianus (Olympia Star)",
        Xuat_xu : "Nhật Bản",
        gender: "Nam",
        so_luong : 2,
        img_list : ["./sanpham/Nam/Casio/nam_6.webp","./sanpham/Nam/Casio/nam_6.1.webp","./sanpham/Nam/Casio/nam_6.2.webp"],
        value : 3250000,
        discount : 50,
        price : 3250000 - 3250000*(50/100),
        kinh : "Sapphire",
        may : "Quartz",
        bao_hanh : "2 Năm",
        duong_kinh : "38mm",
        day : "Thép Không Gỉ",
        inf : "Đồng hồ Olym Pianus (Olympia Star) 58092MSK-T kích thước mặt số tròn to nam tính, dưới lớp kính Sapphire nổi bật với kim chỉ giây thiết kế kiểu không đồng trục tách ra 1 ô riêng biệt.",
        vote : 5,
        comment : []
    }
    ,{
        id : "7",
        name : "SAGA 53375 SVMWBL-2",
        brand : "Saga",
        Xuat_xu : "Mỹ",
        gender: "Nữ",
        so_luong : 3,
        img_list : ["./sanpham/Nam/Casio/nu_1.webp","./sanpham/Nam/Casio/nu_1.1.webp"],
        value : 11709000,
        discount : 20,
        price : 11709000 - 11709000*(20/100),
        kinh : "Sapphire ",
        may : "Quartz",
        bao_hanh : "2 Năm",
        duong_kinh : "34mm",
        day : "Da",
        inf : "Mẫu Saga 53375 SVMWBL-2 phiên bản đính đá Swarovski sang trọng trên nền mặt số size 34mm tone màu trắng xà cừ thời trang trẻ trung dành cho phái đẹp.",
        vote : 5,
        comment : []
    }
    ,{
        id : "8",
        name : "SAGA 80737 RGMRRG-2L",
        brand : "Saga",
        Xuat_xu : "Mỹ",
        gender: "Nữ",
        so_luong : 4,
        img_list : ["./sanpham/Nam/Casio/nu_2.webp","./sanpham/Nam/Casio/nu_2.1.webp"],
        value : 5624000,
        discount : 10,
        price : 5624000 - 5624000*(10/100),
        kinh : "Cứng",
        may : "Quartz",
        bao_hanh : "2 Năm",
        duong_kinh : "20mm",
        day : "Thép Không Gỉ",
        inf : "Mẫu Saga 80737 RGMRRG-2L mặt số vuông tone màu đỏ xà cừ kết hợp cùng thiết kế đơn giản 2 kim thời trang trẻ trung cho phái đẹp.",
        vote : 5,
        comment : []
    }
    ,{
        id : 9,
        name : "SAGA 53482 TTRSVTTR-2",
        brand : "Saga",
        Xuat_xu : "Mỹ",
        gender: "Nữ",
        so_luong : 4,
        img_list : ["./sanpham/Nam/Casio/nu_3.webp","./sanpham/Nam/Casio/nu_3.1.webp","./sanpham/Nam/Casio/nu_3.2.webp"],
        value : 4104000,
        discount : 17,
        price : 4104000 - 4104000*(17/100),
        kinh : "Cứng",
        may : "Quartz",
        bao_hanh : "2 Năm",
        duong_kinh : "27mm",
        day : "Thép Không Gỉ",
        inf : "Mẫu Saga 53482 TTRSVTTR-2 phiên bản đính đá pha lê Swarovski thời trang sang trọng trên chi tiết vỏ viền đồng hồ kết hợp thiết kế trẻ trung đơn giản chức năng 3 kim.",
        vote : 5,
        comment : []
    }
    ,{
        id : 10,
        name : "CASIO SHE-4505SG-7ADR",
        brand : "Casio",
        Xuat_xu : "Nhật Bản",
        gender: "Nữ",
        so_luong : 3,
        img_list : ["./sanpham/Nam/Casio/nu_4.webp","./sanpham/Nam/Casio/nu_4.1.jpg","./sanpham/Nam/Casio/nu_4.2.jpg"],
        value : 6862000,
        discount : 13,
        price : 6862000 - 6862000*(13/100),
        kinh : "Sapphire",
        may : "Quartz",
        bao_hanh : "1 Năm",
        duong_kinh : "30.6mm",
        day : "Thép Không Gỉ",
        inf : "Đồng hồ Casio SHE-4505SG-7ADR thiết kế dành cho nữ, kim chỉ và vạch số thiết kế thời trang kết hợp với dây đeo kim loại mạ bạc như 1 phụ kiện thời trang cho các bạn nữ.",
        vote : 5,
        comment : []
    }
    ,{
        id : 11,
        name : "CASIO SHE-3043SG-7AUDR",
        brand : "Casio",
        Xuat_xu : "Nhật Bản",
        gender: "Nữ",
        so_luong : 9,
        img_list : ["./sanpham/Nam/Casio/nu_5.webp","./sanpham/Nam/Casio/nu_5.1.webp","./sanpham/Nam/Casio/nu_5.2.jpg"],
        value : 6486000,
        discount : 10,
        price : 6486000 - 6486000*(10/100),
        kinh : "Cứng",
        may : "Quartz",
        bao_hanh : "1 Năm",
        duong_kinh : "30.6mm",
        day : "Thép Không Gỉ",
        inf : "Đồng hồ Casio SHE-4505SG-7ADR thiết kế dành cho nữ, kim chỉ và vạch số thiết kế thời trang kết hợp với dây đeo kim loại mạ bạc như 1 phụ kiện thời trang cho các bạn nữ.",
        vote : 5,
        comment : []
    }
    ,{
        id : 12,
        name : "CASIO SHE-3511SG-7AUDR",
        brand : "Casio",
        Xuat_xu : "Nhật Bản",
        gender: "Nữ",
        so_luong : 4,
        img_list : ["./sanpham/Nam/Casio/nu_6.webp","./sanpham/Nam/Casio/nu_6.1.webp","./sanpham/Nam/Casio/nu_6.2.jpg"],
        value : 6040000,
        discount : 15,
        price : 6040000 - 6040000*(15/100),
        kinh : "Sapphire",
        may : "Quartz",
        bao_hanh : "1 Năm",
        duong_kinh : "35.2mm",
        day : "Thép Không Gỉ",
        inf : "Mẫu Casio SHE-3511SG-7AUDR nổi bật với phiên bản mặt kính chất liệu Sapphire với size mặt 35mm, mặt số gia công tinh xảo đính 8 viên pha lê tạo nên vẻ đẹp thời trang.",
        vote : 5,
        comment : []
    }
]
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
        `<a href="#trang_ct_block" class="sp-cartide-1" id="`+i.id+`" onclick="CT_Product(`+i.id+`)">
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
        `<a href="#trang_ct_block" class="sp-cartide-1" id="`+i.id+`" onclick="CT_Product(`+i.id+`)">
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
    let a = parseInt(id);
    document.getElementById("inf_product").innerHTML = "";
    for(product of products)
    {
        console.log("hello")
        if(product.id == a)
        {

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
                    <button class="btn_add_in"  onclick = "add_giohang()"><b>Thêm vào giỏ hàng</b></button>
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
        }
    }
}
//#endregion

//#region xac nhan
function add_giohang()
{
    let name = document.getElementById("sign_in_and_login").innerHTML;
    if(name == "REGISTER or SIGN IN")
    {
        alert("Bạn chưa đăng nhập");
        return;
    }
    else{
        for(let account of account_infs)
        {
            if(account.username == name)
            {
                let product_name = document.getElementById("product_name").innerHTML;
                for(let product of account.gio_hang)
                {
                    if(product.name == product_name)
                    {
                        for(let a of products)
                        {
                            if(a.name == product.name)
                            {
                                if(product.so_luong < a.so_luong)
                                {
                                    console.log(a.so_luong)
                                    product.so_luong++;
                                    alert("them gio hang thanh cong!!!");
                                    return;
                                }
                                else{
                                    alert("Không đủ số lượng trong kho !!! ");
                                    return;
                                }
                                
                            }
                            
                        }
                    }
                }
                {
                    for(let product of products)
                    {
                        if(product.name == product_name)
                        {
                            let tam = 0;
                            for(let b of account.gio_hang)
                            {
                                if(b.name == product_name)
                                {
                                    tam = b.so_luong;
                                    console.log(tam);
                                }
                            }
                            if(product.so_luong - tam> 0)
                            {
                                let a = {
                                    name : product_name,
                                    so_luong : 1
                                }
                                account.gio_hang.push(a);
                                alert("them gio hang thanh cong!!!");
                                return;
                            }
                            else{
                                alert("Không đủ số lượng trong kho!!!");
                                return;
                            }
                        }
                    }
                    
                }
            }
        }
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
        `<a href="#trang_ct_block" class="sp-cartide-1" id="`+i.id+`" onclick="CT_Product(`+i.id+`)">
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
                gender : "Nam"
            },
            {
                id : "citizen",
                name_brand : "Citizen",
                gender : "Nam"
            }
            ,
            {
                id : "OP",
                name_brand : "Olym Pianus (Olympia Star)",
                gender : "Nam"
            }
            ,{
                id : "doxa",
                name_brand : "Doxa",
                gender : "Nam"
            }
            ,{
                id : "tissot",
                name_brand : "Tissot",
                gender : "Nam"
            }
            ,{
                id : "logines",
                name_brand : "Logines",
                gender : "Nam"
            }
            ,
            {
                id : "saga_nu",
                name_brand : "Saga",
                gender : "Nữ"
            },
            {
                id : "casio_nu",
                name_brand : "Casio",
                gender : "Nữ"
            },
            {
                id : "fouettle_nu",
                name_brand : "Fouettlé",
                gender : "Nữ"
            },
            {
                id : "citizen_nu",
                name_brand : "Citizen",
                gender : "Nữ"
            },
            {
                id : "doxa_nu",
                name_brand : "Doxa",
                gender : "Nữ"
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
                        document.getElementById(id_sort).innerHTML += `<div class = "check check_brand"><input type="checkbox"  id="`+title.id+`" class = "brand_check" onclick = "Load_product_brand_sort('`+title.id+`','`+floag.id+`')"> `+title.name_brand+` </input></div>`;
                    }
                }
            }
            else
            if(floag.id == "value")
            {
                for(let title of floag.array)
                {
                    document.getElementById(id_sort).innerHTML += `<div class = "check check_value"><input type="checkbox"  id="`+title.id+`" class = "value_check" onclick = "Load_product_brand_sort('`+title.id+`','`+floag.id+`')"> `+add_String(title.from)+` - `+add_String(title.to)+`  </input></div>`;
                }
            }
            else{
                for(let title of floag.array)
                {
                    document.getElementById(id_sort).innerHTML += `<div class = "check check_`+floag.id+`"><input type="checkbox"  id="`+title.id+`" class = "`+floag.id+`_check" onclick = "Load_product_brand_sort('`+title.id+`','`+floag.id+`')"> `+title.name+` </input></div>`;
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
        id : "username"
    },
    {
        name : "PassWord",
        id : "password" 
    }
    ,
    {
        name : "Full Name",
        id : "fullname"
    },
    {
        name : "Phone Number",
        id : "phonenumber"
    },
    {
        name : "Address",
        id : "address"
    }];

function Form_sign_and_login(floag)
{
    if(floag == true)
    {
        for(let i = 0;i<2;i++)
        {
            if(i != 1)
            {
                document.getElementById("text_box_account").innerHTML += `<input type="text" id="`+form_sign_ins[i].id+`">`;
            }
            else
            {
                document.getElementById("text_box_account").innerHTML += `<input type="password" id="`+form_sign_ins[i].id+`">`;
            }
            document.getElementById("inf_account").innerHTML += `<p>`+form_sign_ins[i].name+` : </p>`;
            
        }
    }
    else
    {
        for(let i = 0;i<form_sign_ins.length;i++)
        {
            document.getElementById("inf_account").innerHTML += `<p>`+form_sign_ins[i].name+` : </p>`;
            document.getElementById("text_box_account").innerHTML += `<input type="text" id="`+form_sign_ins[i].id+`">`
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
        let user = document.getElementById("sign_in_and_login").innerHTML;
        for(let account of account_infs)
        {
            if(account.username == user)
            {
                document.getElementById("text_box_account").innerHTML += `<input type="text" value="`+account.username+`" disabled>`;
                document.getElementById("text_box_account").innerHTML += `<input type="text" value="`+account.fullname+`" disabled>`;
                document.getElementById("text_box_account").innerHTML += `<input type="text" value="`+account.address+`" disabled>`;
                document.getElementById("text_box_account").innerHTML += `<input type="text" value="`+account.phonenumber+`" disabled>`;
            }
        }
    }
}

function Sign_and_login(number)
{
    document.getElementById("sign-in-account").innerHTML = "";
    document.getElementById("sign-in-account").innerHTML += `
    <div class="form-sign-in">
            <a href="#" id="btn-exit"><b onclick="">X</b></a>
            <div id="login">
                
            </div>
            <div id="center">

            </div>
            <div id="btn">    
                <div id ="TB">
                </div>
            </div>
            </div>
        </div>
    `;
    if(number == 2) //Login
    {
        document.getElementById("btn-exit").innerHTML = `<b onclick="Sign_and_login(2)">X</b>`;
        document.getElementById("login").innerHTML += `<h2>Login</h2>`;
        document.getElementById("center").innerHTML += `<div id="form">
        <div id="inf_account"></div>
        <div id="text_box_account"></div>`
        Form_sign_and_login(true);
        document.getElementById("btn").innerHTML += `<i><b onclick="Sign_and_login(3)">Chưa có tài khoản ?</b></i>
        <div id="btn-login">
        <button><b onclick="Check_Account()">Login</b></button>
        </div>`
    }
    else if(number == 3)//sign up
    {
        document.getElementById("btn-exit").innerHTML = `<b onclick="Sign_and_login(2)">X</b>`;
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
        document.getElementById("btn-exit").onlick = "Sign_and_login(4)";
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
let account_infs = [
    {
        id : "1",
        username : "vanthin",
        password : "123",
        fullname : "Phan Van Thin",
        phonenumber : "123456789",
        address : "123 nguyen",
        gio_hang : [
           
        ],
        style : "Admin" 
    }
]
function Log_In_Account(user,pass)
{
    for(let account of account_infs)
    {
        if(account.username == user && account.password == pass)
            return true;
    }
    return false;
}
function Check_Account()
{
    let user = document.getElementById("username").value;
    let pass = document.getElementById("password").value;
    if (Log_In_Account(user,pass) == true)
    {
        alert("đăng nhập thành công");
        document.getElementById("sign_in_and_login").innerHTML = "";
        document.getElementById("sign_in_and_login").innerHTML += user;
        Sign_and_login(4);
        admin();
    }
    else{
        document.getElementById("TB").innerHTML = "";
        document.getElementById("TB").innerHTML +=`<i>Sai tài khoản hoặc mật khẩu</i>`;
    }
}
//#endregion

//#region Dang xuat
function Sign_out(){
    document.getElementById("sign_in_and_login").innerHTML = "";
    document.getElementById("sign_in_and_login").innerHTML += `REGISTER or SIGN IN`;

    Sign_and_login(2);
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
    for(let account of account_infs)
    {
        if(account.username == user)
        {
            document.getElementById("TB").innerHTML = "";
            document.getElementById("TB").innerHTML +=`<i>Tên tài khoản đã tồn tại</i>`;
            return;
        }
    }
    let object_account = {
        id : account_infs.length,
        username : user,
        password : pass,
        fullname : full,
        phonenumber : phone,
        address : address,
        gio_hang : [],
        style : ""
    }
    alert("Đăng kí thành công");
    account_infs.push(object_account);
    Sign_and_login(2);
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
        navigation_l();
        dropdown_navigation_bar();
}
//#endregion

//#region Load_body
function Load_Body()
{
    document.getElementById("link_css").href = "";
    document.getElementById("link_css").href = "http://127.0.0.1:5500/web-designer/web.css";
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
        <i class="fas fa-chevron-circle-right size_next" onclick = "Load_Page_All_Products('Nam');"></i>
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
        <i class="fas fa-chevron-circle-right size_next" onclick = "Load_Page_All_Products('Nữ');"></i>
</div>

<div id="gio_hang"></div>`;
Load_brands("Nam",0);
load_product(3,"Nam",0,"Sort_product");
Load_brands("Nữ",1);
load_product(3,"Nữ",1,"Sort_product");
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
    Sign_and_login(2);
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
        if(i.name == name)
        {
            document.getElementsByClassName("page_inf")[0].innerHTML += `<img src="`+i.img+`" alt="" class="img-banner" >
            <p><i>`+i.intro+`</i></p>`;
            document.getElementById("title").innerHTML += `<b>Đồng Hồ `+name+`</b>`;
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
function Load_Page_All_Products(name)//theo gender
{
    document.getElementById("link_css").href = "";
    document.getElementById("link_css").href = "http://127.0.0.1:5500/web-designer/web_listsp.css";
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
    Load_Sort(name);
    Load_Title_Inf_Product(name);
    Load_kq(name);
}
//#endregion


//#region Load gio hang
function Exit_giohang()
{
    document.getElementById("gio_hang").style.display = "none";
}

function Load_giohang()
{
    
    let user = document.getElementById("sign_in_and_login").innerHTML;
    if(user != "REGISTER or SIGN IN")
    {
        document.getElementById("gio_hang").style.display = "block";
        for(let account of account_infs)
        {
            if(account.username == user)
            {
                console.log(account.gio_hang);
                Load_list_giohang(account.gio_hang);
                return;
            }
        }
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

function Load_soluong_tang(vitri,vitri2,value,name)
{
    let user = document.getElementById("sign_in_and_login").innerHTML;
    let a = parseInt(document.getElementById(vitri).value);
    for(let product of products)
    {
        if(product.name == name)
        {
            if(product.so_luong > a)
            {
                a ++;
                document.getElementById(vitri).value = '';
                document.getElementById(vitri).value = a;
                for(let account of account_infs)
                {
                    if(account.username == user)
                    for(let product of account.gio_hang)
                    {
                        if(product.name == name)
                        {
                            product.so_luong = a;
                            break;
                        }
                    }
                }
                Load_value_giohang(vitri,vitri2,value);
            }
            else{
                alert("không đủ sồ lượng trong kho");
            }
        }

    }
    
}

function Load_soluong_giam(vitri,vitri2,value,name)
{
    let a = parseInt(document.getElementById(vitri).value);
    a --;
    if(a!=0)
    {
        let user = document.getElementById("sign_in_and_login").innerHTML;
        document.getElementById(vitri).value = '';
        document.getElementById(vitri).value = a;

        for(let account of account_infs)
        {
            if(account.username == user)
            for(let product of account.gio_hang)
            {
                if(product.name == name)
                {
                    product.so_luong = a;
                    break;
                }
            }
        }
    Load_value_giohang(vitri,vitri2,value);
    }
}

function Load_value_giohang(vitri,vitri2,value)
{
    
    let a = parseInt(document.getElementById(vitri).value);
    console.log(a);
    document.getElementById(vitri2).innerHTML = "";
    console.log(value);
    document.getElementById(vitri2).innerHTML += ``+add_String(a*value)+` ₫`;
    Load_sum_all();
}

function Load_product_delete(name)
{
    let user = document.getElementById("sign_in_and_login").innerHTML;
    let a=[];
    for(let account of account_infs)
    {
        if(account.username == user)
        {
            
            for(let product of account.gio_hang)
            {
                if(product.name != name)
                {
                    a.push(product);
                }
            }
            account.gio_hang =a;
            Load_giohang();
            return;
        }
        
    }
    Load_sum_all();
}

function Load_sum_all(){
    let user = document.getElementById("sign_in_and_login").innerHTML;
    let sum = 0;
    for(let account of account_infs)
    {
        if(account.username == user)
        {
            for(let product of account.gio_hang)
            {
                for(let a of products)
                {
                    if(a.name == product.name)
                    {
                        sum += a.price * product.so_luong;
                        break;
                    }
                }
            }
        }
    }
    document.getElementById("sum_all_sp").innerHTML = '';
    document.getElementById("sum_all_sp").innerHTML = add_String(sum) +` ₫`;
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
    for(product of products)
    {
        if(product.id == a)
        {

            document.getElementsByClassName("ct_product_giohang_1")[0].innerHTML +=

            `
            <div><p id="Exit" onclick="Load_ct_sp_Exit()">X</p></div>
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
        }
    }
}

function Load_CT_giohang(id)
{
    document.getElementsByClassName("gio_hang_background")[0].style.display = "none";
    Load_ct_sp(id);
}

function Load_Thanh_toan()
{
    let user = document.getElementById("sign_in_and_login").innerHTML;
    for(let account of account_infs)
    {
        if(account.username == user)
        {
            for(let product of account.gio_hang)
            {
                for(let a of products)
                {
                    if(a.name == product.name)
                    a.so_luong -= product.so_luong; 
                }
            }
            account.gio_hang = [];
            break;
        }
    }
    Load_giohang();
}

function Load_list_giohang(array_product)
{
    document.getElementById("gio_hang").innerHTML = "";
    document.getElementById("gio_hang").innerHTML += `<div class="gio_hang_background">
    <div class="giohang_header">
        <h2>Giỏ Hàng</h2>
        <h2 class="Exit_btn" onclick ="Exit_giohang()">X</h2>
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
        <button onclick = "Load_Thanh_toan()">Mua Hàng</button>
    </div>
</div>
    <div class = "ct_product_giohang_1" >
    </div>`;

    let vitri = 0;
    for(let product of array_product)
    {
        for(let a of products)
        {
            if(a.name == product.name)
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
                        <p class="so_luong_1" onclick = "Load_soluong_giam('so_luong_2_`+a.id+`','sum_product_`+a.id+`','`+a.price+`','`+product.name+`')">-</p>
                        <input type="text"  class="so_luong_2" id="so_luong_2_`+a.id+`"  value = "`+product.so_luong+`">
                        <p class="so_luong_1" onclick = "Load_soluong_tang('so_luong_2_`+a.id+`','sum_product_`+a.id+`','`+a.price+`','`+product.name+`')">+</p>
                    </div>
                    <p class="sum_product" id = "sum_product_`+a.id+`">`+add_String(a.price * product.so_luong)+` ₫ </p>
                    <i class="fas fa-trash-alt icon_delete" id = "delete_`+a.id+`" onclick = "Load_product_delete('`+product.name+`')"> Xóa</i>
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
    let user = document.getElementById("sign_in_and_login").innerHTML;
    for(let account of account_infs)
    {
        if(account.username == user)
        {
            if(account.style == "Admin")
            {
                document.getElementById("btn-login").innerHTML += `<button><b onclick="">Admin</b></button>`;
            }
        }
    }
}
//#endregion
